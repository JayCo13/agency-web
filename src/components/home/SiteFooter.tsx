import React from "react";
import styles from "./footer.module.css";
import { COMPANY } from "@/lib/company";
import { SERVICES } from "@/lib/services";
import { POLICIES } from "@/lib/policies";

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
    representative: "Người đại diện",
    rights: "All rights reserved.",
    policies: "Chính sách",
    moit: "Đã thông báo Bộ Công Thương",
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
    representative: "Legal representative",
    rights: "All rights reserved.",
    policies: "Policies",
    moit: "Registered with the Ministry of Industry and Trade of Vietnam",
  },
} as const;

/** Site-wide footer carrying the legal entity details. Used on every page. */
export default function SiteFooter({ lang }: { lang: Lang }) {
  const t = T[lang];
  const home = lang === "vi" ? "/vi" : "";
  const servicesBase = lang === "vi" ? "/vi/services" : "/services";
  const address = COMPANY.address[lang];
  const companyName = lang === "vi" ? COMPANY.legalNameVi : COMPANY.shortNameEn;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.logoRow}>
              <img src="/logo.webp" alt="TicoSystem" width={340} height={221} className={styles.logo} />
              {COMPANY.moitBadge.show && (
                <a
                  href={COMPANY.moitBadge.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.moit}
                  aria-label={t.moit}
                >
                  <img src="/bo-cong-thuong.webp" alt={t.moit} width={712} height={237} />
                </a>
              )}
            </div>
            <p className={styles.tagline}>{t.tagline}</p>
            <div className={styles.legal}>
              <strong>{COMPANY.legalNameVi}</strong>
              {COMPANY.taxId && (
                <span>
                  {t.taxId}: {COMPANY.taxId}, {COMPANY.registrationShort[lang]}
                </span>
              )}
              <span>
                {t.representative}: {COMPANY.representative.name}
              </span>
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

        <nav className={styles.policies} aria-label={t.policies}>
          <a href={lang === "vi" ? "/vi/policies" : "/policies"} className={styles.policiesTitle}>
            {t.policies}
          </a>
          {POLICIES.map((p) => (
            <a key={p.slug} href={`${lang === "vi" ? "/vi" : ""}/policies/${p.slug}`}>
              {p[lang].navTitle}
            </a>
          ))}
        </nav>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {companyName}
            {companyName.endsWith(".") ? " " : ". "}
            {t.rights}
          </p>
          <a href={COMPANY.site}>ticosystem.com</a>
        </div>
      </div>
    </footer>
  );
}
