import React from "react";
import BlogShell from "@/components/blog/BlogShell";
import styles from "./policies.module.css";
import { POLICIES, POLICY_EFFECTIVE_DATE, type Policy, type PolicyLangKey } from "@/lib/policies";
import { COMPANY } from "@/lib/company";

const T = {
  vi: {
    base: "/vi/policies",
    hub: "Chính sách & điều khoản",
    hubLead: `Các chính sách áp dụng khi bạn sử dụng website và dịch vụ của ${COMPANY.legalNameVi}.`,
    all: "Tất cả chính sách",
    effective: "Hiệu lực từ",
    read: "Xem chính sách",
    questions: "Có câu hỏi về chính sách?",
    questionsBody: "Liên hệ với chúng tôi qua email, Zalo hoặc hotline. Chúng tôi trả lời trong 1 ngày làm việc.",
  },
  en: {
    base: "/policies",
    hub: "Policies & terms",
    hubLead: `The policies that apply when you use the website and services of ${COMPANY.legalNameEn}.`,
    all: "All policies",
    effective: "Effective from",
    read: "Read policy",
    questions: "Questions about a policy?",
    questionsBody: "Contact us by email, Zalo or phone. We reply within 1 working day.",
  },
} as const;

function ContactBox({ lang }: { lang: PolicyLangKey }) {
  const t = T[lang];
  return (
    <aside className={styles.contactBox}>
      <h2>{t.questions}</h2>
      <p>{t.questionsBody}</p>
      <div className={styles.contactLinks}>
        <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
        <a href={`tel:${COMPANY.phoneE164}`}>{COMPANY.phoneDisplay}</a>
        <a href={COMPANY.zalo} target="_blank" rel="noopener noreferrer">Zalo</a>
      </div>
    </aside>
  );
}

function SideNav({ lang, active }: { lang: PolicyLangKey; active?: string }) {
  const t = T[lang];
  return (
    <nav className={styles.side} aria-label={t.all}>
      <a href={t.base} className={`${styles.sideHome} ${!active ? styles.sideActive : ""}`}>
        {t.all}
      </a>
      <ol>
        {POLICIES.map((p) => (
          <li key={p.slug}>
            <a
              href={`${t.base}/${p.slug}`}
              aria-current={active === p.slug ? "page" : undefined}
              className={active === p.slug ? styles.sideActive : undefined}
            >
              {p[lang].navTitle}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PolicyIndex({ lang }: { lang: PolicyLangKey }) {
  const t = T[lang];
  const alt = lang === "vi" ? "/policies" : "/vi/policies";
  return (
    <BlogShell lang={lang} altHref={alt}>
      <div className={styles.wrap}>
        <header className={styles.hubHead}>
          <h1>{t.hub}</h1>
          <p>{t.hubLead}</p>
          <p className={styles.meta}>
            {t.effective} {POLICY_EFFECTIVE_DATE[lang]}
          </p>
        </header>
        <ol className={styles.cards}>
          {POLICIES.map((p, i) => (
            <li key={p.slug}>
              <a href={`${t.base}/${p.slug}`} className={styles.card}>
                <span className={styles.cardNum}>{String(i + 1).padStart(2, "0")}</span>
                <h2>{p[lang].title}</h2>
                <p>{p[lang].summary}</p>
                <span className={styles.cardLink}>{t.read}</span>
              </a>
            </li>
          ))}
        </ol>
        <ContactBox lang={lang} />
      </div>
    </BlogShell>
  );
}

export function PolicyArticle({ lang, policy }: { lang: PolicyLangKey; policy: Policy }) {
  const t = T[lang];
  const c = policy[lang];
  const alt = `${lang === "vi" ? "" : "/vi"}/policies/${policy.slug}`;
  return (
    <BlogShell lang={lang} altHref={alt}>
      <div className={`${styles.wrap} ${styles.layout}`}>
        <SideNav lang={lang} active={policy.slug} />
        <article className={styles.article}>
          <a href={t.base} className={styles.back}>
            {t.all}
          </a>
          <h1>{c.title}</h1>
          <p className={styles.summary}>{c.summary}</p>
          <p className={styles.meta}>
            {lang === "vi" ? COMPANY.legalNameVi : COMPANY.legalNameEn}
            <br />
            {t.effective} {POLICY_EFFECTIVE_DATE[lang]}
          </p>

          {c.sections.map((s) => (
            <section key={s.h} className={styles.section}>
              <h2>{s.h}</h2>
              {s.p?.map((para) => (
                <p key={para}>{para}</p>
              ))}
              {s.ol && (
                <ol className={styles.ol}>
                  {s.ol.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ol>
              )}
              {s.ul && (
                <ul className={styles.ul}>
                  {s.ul.map((li) => (
                    <li key={li}>{li}</li>
                  ))}
                </ul>
              )}
              {s.after?.map((para) => (
                <p key={para} className={styles.after}>
                  {para}
                </p>
              ))}
              {s.note && <p className={styles.note}>{s.note}</p>}
            </section>
          ))}

          <ContactBox lang={lang} />
        </article>
      </div>
    </BlogShell>
  );
}
