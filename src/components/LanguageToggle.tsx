'use client';

import React from 'react';
import styles from '@/app/page.module.css';

// Plain anchor links (not client-side state) so Google can crawl both language
// versions and the hreflang signals stay consistent. The click just records the
// visitor's explicit choice in a cookie so the locale proxy stops auto-routing
// them (otherwise a Vietnamese browser could never reach the English page).
function setLocale(l: 'en' | 'vi') {
  document.cookie = `NEXT_LOCALE=${l}; path=/; max-age=31536000; samesite=lax`;
}

export default function LanguageToggle({ current }: { current: 'en' | 'vi' }) {
  return (
    <div className={styles.langToggle}>
      {/* Full-page nav (not <Link>) so the locale proxy re-evaluates on switch. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a
        href="/"
        hrefLang="en"
        onClick={() => setLocale('en')}
        aria-current={current === 'en' ? 'true' : undefined}
        className={`${styles.langLink} ${current === 'en' ? styles.langActive : ''}`}
      >
        EN
      </a>
      <span className={styles.langSep} aria-hidden="true">/</span>
      <a
        href="/vi"
        hrefLang="vi"
        onClick={() => setLocale('vi')}
        aria-current={current === 'vi' ? 'true' : undefined}
        className={`${styles.langLink} ${current === 'vi' ? styles.langActive : ''}`}
      >
        VI
      </a>
    </div>
  );
}
