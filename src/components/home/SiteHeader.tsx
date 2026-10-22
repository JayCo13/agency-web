"use client";

import React, { useEffect, useState } from "react";
import styles from "./home.module.css";
import type { Lang } from "@/lib/home-content";

// Remember an explicit language choice so the locale proxy stops auto-routing.
function setLocale(l: Lang) {
  document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000; samesite=lax`;
}

interface NavLabels {
  work: string;
  services: string;
  process: string;
  about: string;
  faq: string;
  blog: string;
  cta: string;
  menu: string;
}

export default function SiteHeader({ lang, nav }: { lang: Lang; nav: NavLabels }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const apply = () => {
      ticking = false;
      setScrolled(window.scrollY > 8);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };
    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const home = lang === "vi" ? "/vi" : "/";
  const links = [
    { href: "#work", label: nav.work },
    { href: "#services", label: nav.services },
    { href: "#process", label: nav.process },
    { href: "#about", label: nav.about },
    { href: lang === "vi" ? "/vi/blog" : "/blog", label: nav.blog },
  ];

  const langSwitch = (
    <div className={styles.lang}>
      {/* Full-page nav so the locale proxy re-evaluates on switch. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/"
        hrefLang="en"
        onClick={() => setLocale("en")}
        aria-current={lang === "en" ? "true" : undefined}
        className={lang === "en" ? styles.langActive : undefined}
      >
        EN
      </a>
      <a
        href="/vi"
        hrefLang="vi"
        onClick={() => setLocale("vi")}
        aria-current={lang === "vi" ? "true" : undefined}
        className={lang === "vi" ? styles.langActive : undefined}
      >
        VI
      </a>
    </div>
  );

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.headerSolid : styles.headerOnDark}`}>
      <div className={`${styles.wrap} ${styles.headerInner}`}>
        <a href={home} className={styles.brand} aria-label="TicoSystem">
          <img src="/logo.webp" alt="TicoSystem" width={340} height={221} />
        </a>

        <nav className={styles.nav} aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className={styles.headerEnd}>
          {langSwitch}
          <a href="#contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.headerCta}`}>
            {nav.cta}
          </a>
          <button
            type="button"
            className={styles.burger}
            aria-label={nav.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={open ? styles.burgerOpen : undefined} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`} hidden={!open}>
        <nav aria-label="Mobile">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        {langSwitch}
        <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`} onClick={() => setOpen(false)}>
          {nav.cta}
        </a>
      </div>
    </header>
  );
}
