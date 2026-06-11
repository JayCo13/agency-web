import React from 'react';
import styles from '@/app/page.module.css';

// Plain anchor links (not client-side state) so Google can crawl both language
// versions and the hreflang signals stay consistent.
export default function LanguageToggle({ current }: { current: 'en' | 'vi' }) {
  return (
    <div className={styles.langToggle}>
      <a
        href="/"
        hrefLang="en"
        aria-current={current === 'en' ? 'true' : undefined}
        className={`${styles.langLink} ${current === 'en' ? styles.langActive : ''}`}
      >
        EN
      </a>
      <span className={styles.langSep} aria-hidden="true">/</span>
      <a
        href="/vi"
        hrefLang="vi"
        aria-current={current === 'vi' ? 'true' : undefined}
        className={`${styles.langLink} ${current === 'vi' ? styles.langActive : ''}`}
      >
        VI
      </a>
    </div>
  );
}
