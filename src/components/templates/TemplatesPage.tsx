import React from "react";
import BlogShell from "@/components/blog/BlogShell";
import { COMPANY } from "@/lib/company";
import { TEMPLATES, demoUrl, type Lang } from "@/lib/templates";
import styles from "./templates.module.css";

const T = {
  vi: {
    base: "/vi/templates",
    alt: "/templates",
    contact: "/vi/#contact",
    title: "Mẫu web bán hàng, bấm vào là dùng thử",
    note: "Web mẫu chạy thật, đơn đặt thử không được gửi đi đâu cả.",
    count: (n: number) => `${n} mẫu`,
    demoOf: "Web mẫu",
    preview: "Xem thử",
    use: "Dùng mẫu này",
    allTitle: "Mẫu nào cũng có",
    all: ["Tên miền riêng", "App quản lý đơn", "Chatbot AI (tuỳ gói)", "Chuyển khoản VietQR", "Tự sửa nội dung", "Chạy tốt trên điện thoại"],
    ctaTitle: "Chưa thấy mẫu hợp với shop của bạn?",
    ctaZalo: "Nhắn Zalo",
    ctaBook: "Đặt lịch tư vấn",
  },
  en: {
    base: "/templates",
    alt: "/vi/templates",
    contact: "/#contact",
    title: "Online store templates you can try right now",
    note: "Every demo is a live store. Test orders are not sent anywhere.",
    count: (n: number) => `${n} templates`,
    demoOf: "Demo store",
    preview: "Try it",
    use: "Use this template",
    allTitle: "Included with every template",
    all: ["Your own domain", "Order app", "AI chatbot (plan dependent)", "VietQR bank transfer", "Edit it yourself", "Built for phones"],
    ctaTitle: "Don't see a fit for your shop?",
    ctaZalo: "Message us on Zalo",
    ctaBook: "Book a call",
  },
} as const;

/**
 * Trang danh sách mẫu: lưới thẻ (3 cột trên máy tính, 2 cột trên điện thoại) để thấy nhiều mẫu cùng lúc.
 * Mỗi thẻ chỉ có ảnh, tên ngành, tên shop demo và nút; ô cuối là lời mời làm giao diện riêng, lấp chỗ trống hàng cuối.
 */
export default function TemplatesPage({ lang }: { lang: Lang }) {
  const t = T[lang];

  const listLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: t.title,
    itemListElement: TEMPLATES.map((tpl, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${tpl[lang].industry}: ${tpl.shopName}`,
      url: `https://ticosystem.com${t.base}/${tpl.key}`,
    })),
  };

  return (
    <BlogShell lang={lang} altHref={t.alt}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(listLd) }} />

      <section className={styles.hero}>
        <div className="container">
          <p className={styles.count}>{t.count(TEMPLATES.length)}</p>
          <h1>{t.title}</h1>
          <p className={styles.note}>{t.note}</p>
        </div>
      </section>

      <div className="container">
        <ul className={styles.grid}>
          {TEMPLATES.map((tpl, i) => {
            const host = new URL(demoUrl(tpl)).host;
            const href = `${t.base}/${tpl.key}`;
            return (
              <li key={tpl.key} id={tpl.key} className={styles.card}>
                <a href={href} className={styles.visual} aria-label={`${t.preview}: ${tpl.shopName}`}>
                  <span className={styles.browser}>
                    <span className={styles.address}>{host}</span>
                    <img src={`/templates/${tpl.key}-desktop.webp`} alt="" width={1200} height={750} loading={i < 3 ? "eager" : "lazy"} />
                  </span>
                  <span className={styles.phone}>
                    <img src={`/templates/${tpl.key}-mobile.webp`} alt="" width={390} height={844} loading={i < 3 ? "eager" : "lazy"} />
                  </span>
                </a>
                <div className={styles.meta}>
                  <h2 id={`tpl-${tpl.key}`}>
                    <a href={href}>{tpl[lang].industry}</a>
                  </h2>
                  <p className={styles.shop}>
                    {t.demoOf}: {tpl.shopName}
                  </p>
                </div>
                <div className={styles.cardActions}>
                  <a href={href} className={`${styles.btn} ${styles.btnSm} ${styles.btnPrimary}`}>
                    {t.preview}
                  </a>
                  <a href={t.contact} className={`${styles.btn} ${styles.btnSm} ${styles.btnGhost} ${styles.useBtn}`}>
                    {t.use}
                  </a>
                </div>
              </li>
            );
          })}

          {/* Ô mời rộng đúng phần còn trống của hàng cuối (3 cột trên máy tính, 2 cột trên máy tính bảng/điện thoại) */}
          <li
            className={styles.ctaCard}
            style={
              {
                "--span3": TEMPLATES.length % 3 ? 3 - (TEMPLATES.length % 3) : 3,
                "--span2": TEMPLATES.length % 2 ? 1 : 2,
              } as React.CSSProperties
            }
          >
            <h2>{t.ctaTitle}</h2>
            <div className={styles.cardActions}>
              <a href={COMPANY.zalo} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnSm} ${styles.btnSun}`}>
                {t.ctaZalo}
              </a>
              <a href={t.contact} className={`${styles.btn} ${styles.btnSm} ${styles.btnOnDark}`}>
                {t.ctaBook}
              </a>
            </div>
          </li>
        </ul>

        <section className={styles.all} aria-labelledby="tpl-all">
          <h2 id="tpl-all">{t.allTitle}</h2>
          <ul>
            {t.all.map((title) => (
              <li key={title}>{title}</li>
            ))}
          </ul>
        </section>
      </div>
    </BlogShell>
  );
}
