import React from "react";
import styles from "./footer.module.css";
import { COMPANY } from "@/lib/company";
import { SERVICES } from "@/lib/services";

type Lang = "en" | "vi";

const T = {
  vi: {
    tagline: "Phần mềm theo yêu cầu cho doanh nghiệp.",
    services: "Dịch vụ",
    company: "Công ty",
    contact: "Liên hệ",
    about: "Về chúng tôi",
    work: "Dự án",
    blog: "Blog",
    book: "Đặt lịch tư vấn",
    taxId: "MST",
    rights: "All rights reserved.",
  },
  en: {
    tagline: "Custom software for growing businesses.",
    services: "Services",
    company: "Company",
    contact: "Contact",
    about: "About",
    work: "Work",
    blog: "Blog",
    book: "Book a call",
    taxId: "Tax ID",
    rights: "All rights reserved.",
  },
} as const;

/** Site-wide footer carrying the legal entity details. Used on every page. */
export default function SiteFooter({ lang }: { lang: Lang }) {
  const t = T[lang];
  const home = lang === "vi" ? "/vi" : "";
  const servicesBase = lang === "vi" ? "/vi/services" : "/services";
  const address = COMPANY.address[lang];

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <img src="/logo.webp" alt="TicoSystem" width={340} height={221} className={styles.logo} />
            <p className={styles.tagline}>{t.tagline}</p>
            <div className={styles.legal}>
              <strong>{COMPANY.legalNameVi}</strong>
              {COMPANY.taxId && (
                <span>
                  {t.taxId}: {COMPANY.taxId}
                </span>
              )}
              {address && <span>{address}</span>}
            </div>
          </div>

          <div>
            <h2 className={styles.colTitle}>{t.services}</h2>
            <ul className={styles.list}>
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <a href={`${servicesBase}/${s.slug}`}>{s[lang].name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={styles.colTitle}>{t.company}</h2>
            <ul className={styles.list}>
              <li><a href={`${home}/#about`}>{t.about}</a></li>
              <li><a href={`${home}/#work`}>{t.work}</a></li>
              <li><a href={lang === "vi" ? "/vi/blog" : "/blog"}>{t.blog}</a></li>
              <li><a href={`${home}/#contact`}>{t.book}</a></li>
            </ul>
          </div>

          <div>
            <h2 className={styles.colTitle}>{t.contact}</h2>
            <ul className={styles.list}>
              <li><a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a></li>
              <li><a href={`tel:${COMPANY.phoneE164}`}>{COMPANY.phoneDisplay}</a></li>
              <li><a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href={COMPANY.zalo} target="_blank" rel="noopener noreferrer">Zalo</a></li>
              <li><a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {lang === "vi" ? COMPANY.legalNameVi : COMPANY.shortNameEn}. {t.rights}
          </p>
          <a href={COMPANY.site}>ticosystem.com</a>
        </div>
      </div>
    </footer>
  );
}
