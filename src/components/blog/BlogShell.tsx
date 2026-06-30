import React from "react";
import styles from "@/app/blog/blog.module.css";
import type { Lang } from "@/lib/blog";

const T = {
  en: { home: "/", blog: "/blog", label: "Blog", cta: "Book a Call" },
  vi: { home: "/vi", blog: "/vi/blog", label: "Blog", cta: "Đặt Lịch" },
} as const;

/**
 * Header + footer chrome shared by every blog route. `altHref` is the same
 * page in the other language, used by the EN/VI toggle so language switching
 * keeps the reader on the equivalent page.
 */
export default function BlogShell({
  lang,
  altHref,
  children,
}: {
  lang: Lang;
  altHref: string;
  children: React.ReactNode;
}) {
  const t = T[lang];
  const contact = `${t.home === "/" ? "" : t.home}/#contact`;

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={`container ${styles.headerInner}`}>
          <a href={t.blog} className={styles.logo} aria-label={t.label}>
            <img src="/logo.png" alt="TicoSystem" />
          </a>
          <div className={styles.headerActions}>
            <a href={t.home} className={styles.blogLabel}>
              {lang === "vi" ? "Trang chủ" : "Home"}
            </a>
            <div className={styles.langToggle}>
              <a
                href={lang === "en" ? "#" : altHref}
                hrefLang="en"
                className={`${styles.langLink} ${lang === "en" ? styles.langActive : ""}`}
              >
                EN
              </a>
              <span className={styles.langSep} aria-hidden="true">
                /
              </span>
              <a
                href={lang === "vi" ? "#" : altHref}
                hrefLang="vi"
                className={`${styles.langLink} ${lang === "vi" ? styles.langActive : ""}`}
              >
                VI
              </a>
            </div>
            <a href={contact} className={styles.ctaBtn}>
              {t.cta}
            </a>
          </div>
        </div>
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={`container ${styles.footerInner}`}>
          <img src="/logo.png" alt="TicoSystem" />
          <p className={styles.copyright}>
            © {new Date().getFullYear()} TicoSystem. {""}
            {lang === "vi"
              ? "Số hóa logic kinh doanh của bạn."
              : "Digitize your business logic."}
          </p>
        </div>
      </footer>
    </div>
  );
}
