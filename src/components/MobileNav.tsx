"use client";
import React, { useState } from 'react';
import styles from '@/app/page.module.css';

const NAV = {
  en: {
    work: 'Work',
    demo: 'Live Demo',
    process: 'Process',
    expertise: 'Expertise',
    cta: 'Book a Call Now',
  },
  vi: {
    work: 'Dự Án',
    demo: 'Demo Trực Tiếp',
    process: 'Quy Trình',
    expertise: 'Chuyên Môn',
    cta: 'Đặt Lịch Ngay',
  },
} as const;

export default function MobileNav({ lang = 'en' }: { lang?: 'en' | 'vi' }) {
  const [isOpen, setIsOpen] = useState(false);
  const t = NAV[lang];

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
          <a href="#demo" onClick={() => setIsOpen(false)}>{t.demo}</a>
          <a href="#process" onClick={() => setIsOpen(false)}>{t.process}</a>
          <a href="#expertise" onClick={() => setIsOpen(false)}>{t.expertise}</a>
          <div className={styles.mobileLangToggle}>
            <a
              href="/"
              hrefLang="en"
              className={`${styles.langLink} ${lang === 'en' ? styles.langActive : ''}`}
            >
              EN
            </a>
            <span className={styles.langSep} aria-hidden="true">/</span>
            <a
              href="/vi"
              hrefLang="vi"
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
