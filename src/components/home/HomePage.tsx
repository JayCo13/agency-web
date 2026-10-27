import React from "react";
import styles from "./home.module.css";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import ProjectExplorer from "./ProjectExplorer";
import CountUp from "./CountUp";
import ScrollReveal, { type RevealTarget } from "./ScrollReveal";
import svc from "@/components/ServicesSection.module.css";
import ServicesSection from "@/components/ServicesSection";
import ContactTabs from "./ContactTabs";
import { HOME, type Lang } from "@/lib/home-content";
import { COMPANY } from "@/lib/company";

const Squiggle = () => (
  <svg className={styles.squiggle} width="72" height="14" viewBox="0 0 72 14" fill="none" aria-hidden="true">
    <path d="M4 7Q14.5 1 25 7T46 7T67 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const Smile = () => (
  <span className={styles.smile} aria-hidden="true">
    <svg viewBox="0 0 24 24" width="100%" height="100%" fill="none">
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <circle cx="8.5" cy="10" r="1.3" fill="#2B1D16" />
      <circle cx="15.5" cy="10" r="1.3" fill="#2B1D16" />
      <path d="M8 14.5c1 1.4 2.4 2.1 4 2.1s3-.7 4-2.1" stroke="#2B1D16" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  </span>
);

const Building = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
    <path d="M10 6h4M10 10h4M10 14h4M10 18h4" />
  </svg>
);

const Check = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <circle cx="12" cy="12" r="11" fill="currentColor" />
    <path d="m7.5 12.2 3 3 6-6.4" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const Heart = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 21s-7.5-4.6-9.6-9.2C.9 8.5 3 4.5 6.8 4.5c2.1 0 3.6 1.1 4.4 2.5.8-1.4 2.3-2.5 4.4-2.5 3.8 0 5.9 4 4.4 7.3C19.5 16.4 12 21 12 21z" />
  </svg>
);

const Shield = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const LinkedInIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const pointIcons = [
  <svg key="b" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></svg>,
  <svg key="g" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20" /></svg>,
  <svg key="l" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 2 10 5-10 5L2 7l10-5z" /><path d="m2 17 10 5 10-5M2 12l10 5 10-5" /></svg>,
  <svg key="u" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg>,
];

const sel = (cls: string) => `.${cls}`;

// Blocks below the hero that animate in each time they scroll into view.
const revealTargets: RevealTarget[] = [
  { selector: sel(svc.head) },
  { selector: sel(svc.card), variant: "zoom", stagger: 80 },
  { selector: sel(styles.centerHead) },
  { selector: sel(styles.workHeadMain), variant: "left" },
  { selector: sel(styles.workHeadAside), variant: "right" },
  { selector: sel(styles.projectList), variant: "left" },
  { selector: sel(styles.projectCard), variant: "right" },
  { selector: sel(styles.aboutPanel), variant: "zoom" },
  { selector: `${sel(styles.aboutPanel)} > :not(span)`, stagger: 110 },
  { selector: sel(styles.step), stagger: 110 },
  { selector: sel(styles.promiseText), variant: "left" },
  { selector: sel(styles.noteWrap), variant: "zoom" },
  { selector: sel(styles.offer), variant: "right" },
  { selector: `${sel(styles.checks)} > li`, variant: "left", stagger: 70 },
  { selector: `${sel(styles.faq)} > details`, stagger: 70 },
  { selector: sel(styles.contactText), variant: "left" },
  { selector: sel(styles.booking), variant: "right" },
];

export default function HomePage({ lang }: { lang: Lang }) {
  const t = HOME[lang];
  const address = COMPANY.address[lang];
  const companyName = lang === "vi" ? COMPANY.legalNameVi : COMPANY.shortNameEn;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <a href="#main" className={styles.skip}>
        {lang === "vi" ? "Bỏ qua đến nội dung" : "Skip to content"}
      </a>
      <SiteHeader lang={lang} nav={t.nav} />
      <ScrollReveal targets={revealTargets} />

      <main id="main">
        {/* ---------------- Hero ---------------- */}
        <section className={styles.heroWrap}>
          <div className={`${styles.heroLayer} ${styles.heroLayer2}`} aria-hidden="true">
            <svg className={styles.tabShape} viewBox="0 0 320 44" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 0C40 0 52 44 96 44H224C268 44 280 0 320 0Z" />
            </svg>
          </div>
          <div className={`${styles.heroLayer} ${styles.heroLayer1}`} aria-hidden="true">
            <svg className={styles.tabShape} viewBox="0 0 320 44" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 0C40 0 52 44 96 44H224C268 44 280 0 320 0Z" />
            </svg>
          </div>

          <div className={styles.heroPanel}>
            <div className={`${styles.wrap} ${styles.heroGrid}`}>
              <div className={styles.heroText}>
                <p className={styles.heroBadge}>
                  <span className={styles.heroBadgeIcon}>
                    <Building />
                  </span>
                  {t.hero.badge}
                </p>
                <h1 className={styles.heroTitle}>
                  {t.hero.title.split(" ").map((w, i, arr) => (
                    <React.Fragment key={i}>
                      <span className={styles.word} style={{ "--i": i } as React.CSSProperties}>
                        {w}
                      </span>
                      {i < arr.length - 1 ? " " : null}
                    </React.Fragment>
                  ))}
                </h1>
                <p className={styles.heroLead}>{t.hero.lead}</p>

                <div className={styles.heroActions}>
                  <a href="#contact" className={styles.storeBtn}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="17" rx="2.5" /><path d="M16 2v4M8 2v4M3 10h18M8 15h3" /></svg>
                    <span>
                      <small>{t.hero.primaryTop}</small>
                      {t.hero.primary}
                    </span>
                  </a>
                  <a href="#work" className={styles.playLink}>
                    <span className={styles.playIcon} aria-hidden="true">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5.5v13l10.5-6.5z" /></svg>
                    </span>
                    {t.hero.secondary}
                  </a>
                </div>

                <dl className={styles.heroStats}>
                  {t.hero.stats.map((st, i) => (
                    <div key={st.label}>
                      <dt>{st.label}</dt>
                      <dd>
                        <CountUp value={st.value} delay={1050 + i * 120} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className={styles.heroVisual}>
                <div className={styles.heroStage}>
                  <svg className={styles.heroArc} viewBox="0 0 40 90" fill="none" aria-hidden="true">
                    <path d="M34 6C17 19 8 40 9 72" pathLength={100} stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                  <svg className={styles.heroBlob} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M20 12C36 3 72 1 88 12C99 20 100 40 93 56C84 76 64 94 46 97C31 99 20 92 15 79C8 61 3 37 7 25C9 19 14 15 20 12Z" />
                  </svg>
                  {/* Head breaks out above the blob; the body is cut by its curve. */}
                  <div className={styles.heroCut}>
                    <img
                      src="/tyler.webp"
                      alt={t.hero.personAlt}
                      width={826}
                      height={914}
                      fetchPriority="high"
                      className={styles.heroPerson}
                    />
                  </div>

                  {/* Role tags: one line of JSX each, with a callout line to the photo */}
                  <span className={`${styles.heroTag} ${styles.heroTagFounder}`}>
                    <span className={styles.tagLine} aria-hidden="true">01</span>
                    <code>
                      <span className={styles.tagPunc} aria-hidden="true">&lt;</span>
                      <span className={styles.tagName}>{t.hero.tags.founder}</span>
                      <span className={styles.tagPunc} aria-hidden="true"> /&gt;</span>
                    </code>
                  </span>
                  <span className={`${styles.heroTag} ${styles.heroTagLead}`}>
                    <span className={styles.tagLine} aria-hidden="true">02</span>
                    <code>
                      <span className={styles.tagPunc} aria-hidden="true">&lt;</span>
                      <span className={styles.tagName}>{t.hero.tags.lead}</span>
                      <span className={styles.tagPunc} aria-hidden="true"> /&gt;</span>
                      <span className={styles.tagCaret} aria-hidden="true" />
                    </code>
                  </span>
                </div>
              </div>
            </div>

            <svg className={styles.tabShape} viewBox="0 0 320 44" preserveAspectRatio="none" aria-hidden="true">
              <path d="M0 0C40 0 52 44 96 44H224C268 44 280 0 320 0Z" />
            </svg>
            <a href="#services" className={styles.heroScroll} aria-label={t.hero.scroll}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
            </a>
          </div>
        </section>

        {/* ---------------- Services ---------------- */}
        <ServicesSection lang={lang} />

        {/* ---------------- Work ---------------- */}
        <section id="work" className={`${styles.section} ${styles.sectionMist}`}>
          <div className={styles.wrap}>
            <header className={styles.workHead}>
              <div className={styles.workHeadMain}>
                <p className={styles.eyebrow}>{t.work.eyebrow}</p>
                <h2 className={styles.workTitle}>{t.work.title}</h2>
              </div>
              <div className={styles.workHeadAside}>
                <p className={styles.workLead}>{t.work.lead}</p>
                <p className={styles.workCount}>
                  <strong>{String(t.cases.length).padStart(2, "0")}</strong>
                  <span>{t.work.countOf}</span>
                </p>
              </div>
            </header>
            <ProjectExplorer cases={t.cases} labels={{ visit: t.work.visit, viewImage: t.work.viewImage, listLabel: t.work.listLabel }} />
          </div>
        </section>

        {/* ---------------- About (blue panel) ---------------- */}
        <section id="about" className={styles.section}>
          <div className={styles.wrap}>
            <div className={styles.aboutPanel}>
              <span className={`${styles.confetti} ${styles.cSun} ${styles.a1c}`} aria-hidden="true" />
              <div className={styles.aboutBrand}>
                <img src="/logo.webp" alt="TicoSystem" width={340} height={221} className={styles.aboutLogo} />
                <div className={styles.aboutLead}>
                  <img src="/tyler.webp" alt="" width={826} height={914} loading="lazy" decoding="async" />
                  <div>
                    <strong>Tyler Tai Co</strong>
                    <span>{lang === "vi" ? "Trưởng nhóm kỹ thuật" : "Tech Lead"}</span>
                  </div>
                  <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer" aria-label="Tyler Tai Co, LinkedIn" className={styles.aboutLinkedIn}>
                    <LinkedInIcon />
                  </a>
                </div>
              </div>

              <div className={styles.aboutText}>
                <p className={styles.aboutEyebrow}>{t.about.eyebrow}</p>
                <h2>
                  {t.about.title} <Smile />
                </h2>
                <p className={styles.aboutBody}>{t.about.body}</p>
                <a href="#contact" className={`${styles.btn} ${styles.btnWhite}`}>
                  {t.about.cta}
                </a>
              </div>

              <ul className={styles.aboutPoints}>
                {t.about.points.map((pt, i) => (
                  <li key={pt}>
                    <span>{pointIcons[i]}</span>
                    {pt}
                  </li>
                ))}
              </ul>

              <dl className={styles.aboutFacts}>
                <div className={styles.aboutDirect}>
                  <dt>{t.about.facts.direct}</dt>
                  <dd>
                    <a href={`mailto:${COMPANY.email}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                      {COMPANY.email}
                    </a>
                    <a href={`tel:${COMPANY.phoneE164}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
                      {COMPANY.phoneDisplay}
                    </a>
                  </dd>
                </div>
                {COMPANY.taxId && (
                  <div>
                    <dt>{t.about.facts.taxId}</dt>
                    <dd>{COMPANY.taxId}</dd>
                  </div>
                )}
                {address && (
                  <div>
                    <dt>{t.about.facts.address}</dt>
                    <dd>{address}</dd>
                  </div>
                )}
              </dl>
            </div>
          </div>
        </section>

        {/* ---------------- Process ---------------- */}
        <section id="process" className={`${styles.section} ${styles.sectionMist}`}>
          <div className={styles.wrap}>
            <header className={styles.centerHead}>
              <p className={styles.eyebrow}>{t.process.eyebrow}</p>
              <h2>{t.process.title}</h2>
              <Squiggle />
              <p className={styles.headLead}>{t.process.lead}</p>
            </header>
            <ol className={styles.steps}>
              {t.process.steps.map((s, i) => (
                <li key={s.title} className={styles.step}>
                  <span className={styles.stepNum}>{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------------- Promises (offer card) ---------------- */}
        <section className={`${styles.section} ${styles.promises}`}>
          <span className={`${styles.confetti} ${styles.cSun} ${styles.p1c}`} aria-hidden="true" />
          <span className={`${styles.confetti} ${styles.cSkySmall} ${styles.p2c}`} aria-hidden="true" />
          <div className={`${styles.wrap} ${styles.promiseGrid}`}>
            <div className={styles.promiseText}>
              <p className={styles.eyebrow}>{t.promises.eyebrow}</p>
              <h2>{t.promises.title}</h2>
              <Squiggle />
              <p>{t.promises.lead}</p>
              <ul className={styles.checks}>
                {t.promises.items.map((it) => (
                  <li key={it}>
                    <span className={styles.checkIcon}>
                      <Check />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.noteWrap} aria-hidden="true">
              <div className={styles.note}>
                <p>{t.promises.note}</p>
                <span className={styles.noteHeart}>
                  <Heart size={22} />
                </span>
              </div>
              <svg className={styles.doodle} width="90" height="46" viewBox="0 0 90 46" fill="none">
                <path d="M4 8c10 26 38 34 74 26" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="m68 26 11 8-12 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            <div className={styles.offer}>
              <p className={styles.offerTitle}>{t.promises.offerTitle}</p>
              <p className={styles.offerSub}>{t.promises.offerSub}</p>
              <p className={styles.offerAlt}>{t.promises.offerAlt}</p>
              <a href="#contact" className={`${styles.btn} ${styles.btnPrimary} ${styles.btnLg} ${styles.btnBlock}`}>
                {t.promises.offerCta}
              </a>
              <p className={styles.guarantee}>
                <Shield />
                {t.promises.guarantee}
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section id="faq" className={styles.section}>
          <div className={styles.wrap}>
            <header className={styles.centerHead}>
              <p className={styles.eyebrow}>{t.faq.eyebrow}</p>
              <h2>{t.faq.title}</h2>
              <Squiggle />
            </header>
            <div className={styles.faq}>
              {t.faq.items.map((f, i) => (
                <details key={f.q} open={i === 0}>
                  <summary>
                    {f.q}
                    <span className={styles.faqIcon} aria-hidden="true" />
                  </summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- Contact ---------------- */}
        <section id="contact" className={styles.contact}>
          <div className={styles.wrap}>
            <div className={styles.contactPanel}>
              <div className={styles.contactText}>
                <p className={styles.eyebrow}>{t.contact.eyebrow}</p>
                <h2>{t.contact.title}</h2>
                <p className={styles.contactLead}>{t.contact.lead}</p>

                <p className={styles.directLabel}>{t.contact.direct}</p>
                <ul className={styles.channels}>
                  <li>
                    <a href={`mailto:${COMPANY.email}`}>
                      <span className={styles.channelIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                      </span>
                      <span className={styles.channelText}>
                        <small>{t.contact.email}</small>
                        {COMPANY.email}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${COMPANY.phoneE164}`}>
                      <span className={styles.channelIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></svg>
                      </span>
                      <span className={styles.channelText}>
                        <small>{t.contact.phone}</small>
                        {COMPANY.phoneDisplay}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={COMPANY.whatsapp} target="_blank" rel="noopener noreferrer">
                      <span className={styles.channelIcon}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" /></svg>
                      </span>
                      <span className={styles.channelText}>
                        <small>{t.contact.whatsapp}</small>
                        {COMPANY.phoneDisplay}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={COMPANY.zalo} target="_blank" rel="noopener noreferrer">
                      <span className={styles.channelIcon}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M12 3C6.5 3 2.5 6.6 2.5 11c0 2.5 1.3 4.7 3.3 6.2L5 21l4-2c.9.2 1.9.3 3 .3 5.5 0 9.5-3.6 9.5-8.3S17.5 3 12 3Z" stroke="currentColor" strokeWidth="1.9" strokeLinejoin="round" />
                          <path d="M8 8.8h4.2L8 13.6h4.3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M14.4 9.6v4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                          <circle cx="16.6" cy="12.4" r="1.25" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </span>
                      <span className={styles.channelText}>
                        <small>{t.contact.zalo}</small>
                        {COMPANY.phoneDisplay}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={COMPANY.linkedin} target="_blank" rel="noopener noreferrer">
                      <span className={styles.channelIcon}>
                        <LinkedInIcon />
                      </span>
                      <span className={styles.channelText}>
                        <small>{t.contact.linkedin}</small>
                        Tyler Tai Co
                      </span>
                    </a>
                  </li>
                </ul>
                <p className={styles.contactEntity}>{companyName}</p>
              </div>

              <ContactTabs
                lang={lang}
                copy={{ ...t.contact.form, bookingNote: t.contact.bookingNote }}
                calendlyUrl={COMPANY.calendly}
                mailTo={COMPANY.email}
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} />

      <div className={styles.mobileBar}>
        <a href={`tel:${COMPANY.phoneE164}`} className={`${styles.btn} ${styles.btnGhost}`}>
          {t.mobileBar.call}
        </a>
        <a href="#contact" className={`${styles.btn} ${styles.btnPrimary}`}>
          {t.mobileBar.book}
        </a>
      </div>
    </div>
  );
}
