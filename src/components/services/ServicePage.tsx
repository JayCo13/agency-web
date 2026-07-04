import React from "react";
import shell from "@/app/blog/blog.module.css";
import styles from "./ServicePage.module.css";
import { SERVICES, type Service, type Lang } from "@/lib/services";

const SITE = "https://ticosystem.com";

const T = {
  en: { home: "/", homeLabel: "Home", servicesLabel: "All services", cta: "Book a Call", contact: "/#contact", related: "Other services", faqTitle: "Frequently asked questions", buildTitle: "What we build", whoTitle: "Who it's for", ctaTitle: "Ready to start?", ctaBtn: "Book a free 15-min call", base: "/services" },
  vi: { home: "/vi", homeLabel: "Trang chủ", servicesLabel: "Tất cả dịch vụ", cta: "Đặt Lịch", contact: "/vi/#contact", related: "Dịch vụ khác", faqTitle: "Câu hỏi thường gặp", buildTitle: "Chúng tôi xây dựng gì", whoTitle: "Phù hợp với ai", ctaTitle: "Sẵn sàng bắt đầu?", ctaBtn: "Đặt lịch tư vấn miễn phí 15 phút", base: "/vi/services" },
} as const;

export default function ServicePage({ lang, service }: { lang: Lang; service: Service }) {
  const t = T[lang];
  const c = service[lang];
  const altHref = `${lang === "en" ? "/vi" : ""}/services/${service.slug}`;
  const related = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 3);

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: c.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.name,
    description: c.metaDescription,
    provider: { "@type": "Organization", name: "TicoSystem", url: SITE },
    areaServed: ["Worldwide", "Vietnam", "DACH"],
    url: `${SITE}${t.base}/${service.slug}`,
  };

  return (
    <div className={shell.wrapper}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />

      <header className={shell.header}>
        <div className={`container ${shell.headerInner}`}>
          <a href={t.home} className={shell.logo} aria-label={t.homeLabel}>
            <img src="/logo.png" alt="TicoSystem" />
          </a>
          <div className={shell.headerActions}>
            <a href={t.home} className={shell.blogLabel}>{t.homeLabel}</a>
            <div className={shell.langToggle}>
              <a href={lang === "en" ? "#" : altHref} hrefLang="en" className={`${shell.langLink} ${lang === "en" ? shell.langActive : ""}`}>EN</a>
              <span className={shell.langSep} aria-hidden="true">/</span>
              <a href={lang === "vi" ? "#" : altHref} hrefLang="vi" className={`${shell.langLink} ${lang === "vi" ? shell.langActive : ""}`}>VI</a>
            </div>
            <a href={t.contact} className={shell.ctaBtn}>{t.cta}</a>
          </div>
        </div>
      </header>

      <main className={shell.main}>
        <article className={styles.article}>
          <a href={`${t.home === "/" ? "" : t.home}/#services`} className={styles.back}>← {t.servicesLabel}</a>

          <header className={styles.hero}>
            <p className={styles.eyebrow}>{t.buildTitle}</p>
            <h1>{c.name}</h1>
            <p className={styles.tagline}>{c.tagline}</p>
          </header>

          <p className={styles.intro}>{c.intro}</p>

          <h2 className={styles.h2}>{t.buildTitle}</h2>
          <div className={styles.buildGrid}>
            {c.build.map((b) => (
              <div key={b.title} className={styles.buildCard}>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>

          <h2 className={styles.h2}>{t.whoTitle}</h2>
          <ul className={styles.whoList}>
            {c.whoFor.map((w) => <li key={w}>{w}</li>)}
          </ul>

          <h2 className={styles.h2}>{t.faqTitle}</h2>
          <div className={styles.faq}>
            {c.faqs.map((f) => (
              <div key={f.q} className={styles.faqItem}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}
          </div>

          <div className={styles.ctaCard}>
            <h2>{t.ctaTitle}</h2>
            <p>{c.ctaLine}</p>
            <a href={t.contact} className="btn btn-primary">{t.ctaBtn}</a>
          </div>

          <div className={styles.related}>
            <h2 className={styles.h2}>{t.related}</h2>
            <div className={styles.relatedGrid}>
              {related.map((s) => (
                <a key={s.slug} href={`${t.base}/${s.slug}`} className={styles.relatedCard}>
                  <strong>{s[lang].name}</strong>
                  <span>{s[lang].tagline}</span>
                </a>
              ))}
            </div>
          </div>
        </article>
      </main>

      <footer className={shell.footer}>
        <div className={`container ${shell.footerInner}`}>
          <img src="/logo.png" alt="TicoSystem" />
          <p className={shell.copyright}>© {new Date().getFullYear()} TicoSystem. {lang === "vi" ? "Số hóa logic kinh doanh của bạn." : "Digitize your business logic."}</p>
        </div>
      </footer>
    </div>
  );
}
