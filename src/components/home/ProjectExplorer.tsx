"use client";

import React, { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import styles from "./home.module.css";
import CaseGallery from "./CaseGallery";
import type { CaseStudy } from "@/lib/home-content";

const AUTOPLAY_MS = 5000;
const RM_QUERY = "(prefers-reduced-motion: reduce)";
const subscribeRM = (cb: () => void) => {
  const mq = window.matchMedia(RM_QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};

// Project list on the left (a horizontal strip on small screens), the selected
// project on the right. While the section is on screen it advances to the
// next project on its own; the first time the visitor touches, clicks, scrolls
// the strip or uses the keyboard here, autoplay stops for good.
export default function ProjectExplorer({
  cases,
  labels,
}: {
  cases: CaseStudy[];
  labels: { visit: string; viewImage: string; listLabel: string };
}) {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);
  const [inView, setInView] = useState(false);
  const [hovered, setHovered] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const uid = useId();
  const c = cases[active];

  const reducedMotion = useSyncExternalStore(
    subscribeRM,
    () => window.matchMedia(RM_QUERY).matches,
    () => false,
  );

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const playing = auto && inView && !hovered && !reducedMotion;

  useEffect(() => {
    if (!playing) return;
    const id = window.setTimeout(() => {
      if (document.hidden) return;
      setActive((a) => (a + 1) % cases.length);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(id);
  }, [playing, active, cases.length]);

  // Keep the active tab visible inside the strip by scrolling the strip only,
  // never the page.
  useEffect(() => {
    const list = listRef.current;
    const tab = document.getElementById(`${uid}-tab-${active}`);
    if (!list || !tab || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: tab.offsetLeft - list.offsetLeft - 8, behavior: reducedMotion ? "auto" : "smooth" });
  }, [active, uid, reducedMotion]);

  const stop = () => {
    if (auto) setAuto(false);
  };

  const onKey = (e: React.KeyboardEvent) => {
    const keys = ["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"];
    if (!keys.includes(e.key)) return;
    e.preventDefault();
    stop();
    const fwd = e.key === "ArrowDown" || e.key === "ArrowRight";
    const next = (active + (fwd ? 1 : cases.length - 1)) % cases.length;
    setActive(next);
    document.getElementById(`${uid}-tab-${next}`)?.focus();
  };

  return (
    <div
      ref={rootRef}
      className={styles.explorer}
      onPointerDown={stop}
      onKeyDown={stop}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        ref={listRef}
        className={styles.projectList}
        role="tablist"
        aria-label={labels.listLabel}
        aria-orientation="vertical"
        onKeyDown={onKey}
        onWheel={stop}
        onTouchStart={stop}
      >
        {cases.map((p, i) => (
          <button
            key={p.id}
            id={`${uid}-tab-${i}`}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-controls={`${uid}-panel`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => {
              stop();
              setActive(i);
            }}
            className={`${styles.projectTab} ${i === active ? styles.projectTabActive : ""}`}
          >
            <img src={p.images[0].src} alt="" width={1200} height={651} loading="lazy" decoding="async" />
            <span className={styles.tabText}>
              <strong>{p.client}</strong>
              <small>{p.place}</small>
              <em className={styles.tabSummary}>{p.summary}</em>
            </span>
            {auto && i === active && (
              <span
                key={`${active}-${playing}`}
                className={`${styles.tabProgress} ${playing ? styles.tabProgressRun : ""}`}
                style={{ "--autoplay": `${AUTOPLAY_MS}ms` } as React.CSSProperties}
                aria-hidden="true"
              />
            )}
          </button>
        ))}
      </div>

      <article
        id={`${uid}-panel`}
        role="tabpanel"
        aria-labelledby={`${uid}-tab-${active}`}
        aria-live={auto ? "off" : "polite"}
        className={styles.projectCard}
      >
        <CaseGallery key={c.id} images={c.images} label={labels.viewImage} />
        <div className={styles.projectBody}>
          <div className={styles.projectTitleRow}>
            <h3>{c.client}</h3>
            <span className={styles.placePill}>{c.place}</span>
          </div>
          <p>{c.summary}</p>
          <ul className={styles.tags}>
            {c.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
          {c.url && (
            <a href={c.url} target="_blank" rel="noopener noreferrer" className={styles.textLink}>
              {labels.visit}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M7 17 17 7M8 7h9v9" /></svg>
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
