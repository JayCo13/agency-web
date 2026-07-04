"use client";
import React, { useState } from 'react';
import styles from '@/app/page.module.css';

const NAV = {
  en: {
    work: 'Work',
    demo: 'Services',
    process: 'Process',
    expertise: 'Expertise',
    blog: 'Blog',
    cta: 'Book a Call Now',
  },
  vi: {
    work: 'Dự Án',
    demo: 'Dịch Vụ',
    process: 'Quy Trình',
    expertise: 'Chuyên Môn',
    blog: 'Blog',
    cta: 'Đặt Lịch Ngay',
  },
} as const;

// Remember the visitor's explicit language choice so the locale proxy stops
// auto-redirecting them.
function setLocale(l: 'en' | 'vi') {
  document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000; samesite=lax`;
}

export default function MobileNav({ lang = 'en' }: { lang?: 'en' | 'vi' }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = NAV[lang];
  const blogHref = lang === 'vi' ? '/vi/blog' : '/blog';

  return (
    <>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLineTop : ''}`} />
        <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLineMid : ''}`} />
        <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLineBot : ''}`} />
      </button>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="#work" onClick={() => setIsOpen(false)}>{t.work}</a>
          <a href="#services" onClick={() => setIsOpen(false)}>{t.demo}</a>
          <a href="#process" onClick={() => setIsOpen(false)}>{t.process}</a>
          <a href="#expertise" onClick={() => setIsOpen(false)}>{t.expertise}</a>
          <a href={blogHref} onClick={() => setIsOpen(false)}>{t.blog}</a>
          <div className={styles.mobileLangToggle}>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              href="/"
              hrefLang="en"
              onClick={() => setLocale('en')}
              className={`${styles.langLink} ${lang === 'en' ? styles.langActive : ''}`}
            >
              EN
            </a>
            <span className={styles.langSep} aria-hidden="true">/</span>
            <a
              href="/vi"
              hrefLang="vi"
              onClick={() => setLocale('vi')}
              className={`${styles.langLink} ${lang === 'vi' ? styles.langActive : ''}`}
            >
              VI
            </a>
          </div>
          <a href="#contact" className={styles.mobileMenuCta} onClick={() => setIsOpen(false)}>
            {t.cta}
          </a>
        </div>
      )}
    </>
  );
}
