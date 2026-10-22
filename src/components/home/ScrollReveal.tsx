"use client";

import { useEffect } from "react";

export type RevealVariant = "up" | "left" | "right" | "zoom";

export interface RevealTarget {
  /** CSS selector, usually built from a CSS-module class name. */
  selector: string;
  variant?: RevealVariant;
  /** Delay between siblings that match the same selector, in ms. */
  stagger?: number;
}

// Animates blocks every time they enter the viewport, scrolling down or up.
// A block that leaves past the top comes back in from above; one that leaves
// past the bottom comes back in from below. Content stays visible without
// JavaScript and for visitors who prefer reduced motion: blocks are only
// hidden once this script has armed them.
export default function ScrollReveal({ targets }: { targets: RevealTarget[] }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const armed: HTMLElement[] = [];
    for (const { selector, variant = "up", stagger = 0 } of targets) {
      const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
      const indexInParent = new Map<Element, number>();
      for (const el of els) {
        const parent = el.parentElement ?? document.body;
        const i = indexInParent.get(parent) ?? 0;
        indexInParent.set(parent, i + 1);
        el.dataset.rv = variant;
        el.dataset.rvFrom = "bottom";
        el.style.setProperty("--rv-delay", `${Math.min(i * stagger, 600)}ms`);
        armed.push(el);
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.dataset.rvIn = "";
          } else {
            delete el.dataset.rvIn;
            // Remember which edge it left by, so it re-enters from that side.
            const top = entry.rootBounds?.top ?? 0;
            el.dataset.rvFrom = entry.boundingClientRect.top < top ? "top" : "bottom";
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );
    armed.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      for (const el of armed) {
        delete el.dataset.rv;
        delete el.dataset.rvIn;
        delete el.dataset.rvFrom;
        el.style.removeProperty("--rv-delay");
      }
    };
  }, [targets]);

  return null;
}
