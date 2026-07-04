import React from "react";
import styles from "./ServicesSection.module.css";

type Lang = "en" | "vi";

interface Service {
  slug: string;
  name: string;
  desc: string;
  icon: React.ReactNode;
}

// Shared icons (inline SVG, no dependency, crawlable).
const icons = {
  web: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4M2 8h20" /></svg>
  ),
  system: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>
  ),
  bot: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="2" /><path d="M12 8V4M8 2h8M8 14h.01M16 14h.01" /></svg>
  ),
  automation: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" /><circle cx="12" cy="12" r="3" /></svg>
  ),
  configurator: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16M8 3v6M16 9v6M10 15v6" /></svg>
  ),
  ecommerce: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
  ),
};

const CONTENT: Record<Lang, { title: string; subtitle: string; cta: string; items: Service[] }> = {
  en: {
    title: "What We Build",
    subtitle:
      "From a single web app to a company-wide system — engineered to European standards and wired into the tools you already use.",
    cta: "Learn more",
    items: [
      { slug: "web-development", name: "Web Applications", desc: "Custom web apps, dashboards and internal tools built around your exact workflow.", icon: icons.web },
      { slug: "custom-systems", name: "Business Systems", desc: "Company management platforms that connect your data, roles and processes in one place.", icon: icons.system },
      { slug: "ai-chatbots", name: "AI Chatbots", desc: "Support and sales chatbots that answer instantly and qualify leads around the clock.", icon: icons.bot },
      { slug: "automation", name: "Automation Bots", desc: "Bots that remove repetitive manual work and sync data between your systems.", icon: icons.automation },
      { slug: "product-configurators", name: "Product Configurators", desc: "Interactive configurators that turn complex pricing into instant, accurate quotes.", icon: icons.configurator },
      { slug: "ecommerce", name: "E-commerce & Portals", desc: "Storefronts, marketplaces and customer portals that scale with your business.", icon: icons.ecommerce },
    ],
  },
  vi: {
    title: "Chúng Tôi Xây Dựng Gì",
    subtitle:
      "Từ một web app đơn lẻ đến hệ thống cho cả công ty — theo tiêu chuẩn châu Âu và tích hợp với công cụ bạn đang dùng.",
    cta: "Tìm hiểu thêm",
    items: [
      { slug: "web-development", name: "Web Application", desc: "Web app, dashboard và công cụ nội bộ tùy chỉnh theo đúng quy trình của bạn.", icon: icons.web },
      { slug: "custom-systems", name: "Hệ Thống Quản Lý", desc: "Nền tảng quản lý doanh nghiệp kết nối dữ liệu, phân quyền và quy trình về một chỗ.", icon: icons.system },
      { slug: "ai-chatbots", name: "Chatbot AI", desc: "Chatbot chăm sóc & bán hàng trả lời tức thì, lọc khách tiềm năng 24/7.", icon: icons.bot },
      { slug: "automation", name: "Bot Tự Động Hóa", desc: "Bot xóa bỏ việc thủ công lặp lại và đồng bộ dữ liệu giữa các hệ thống.", icon: icons.automation },
      { slug: "product-configurators", name: "Product Configurator", desc: "Công cụ cấu hình trực quan biến bảng giá phức tạp thành báo giá tức thì, chính xác.", icon: icons.configurator },
      { slug: "ecommerce", name: "E-commerce & Portal", desc: "Cửa hàng, sàn giao dịch và cổng khách hàng mở rộng cùng doanh nghiệp.", icon: icons.ecommerce },
    ],
  },
};

export default function ServicesSection({ lang = "en" }: { lang?: Lang }) {
  const t = CONTENT[lang];
  const base = lang === "vi" ? "/vi/services" : "/services";

  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className={styles.head}>
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {t.items.map((s) => (
            <a key={s.slug} href={`${base}/${s.slug}`} className={styles.card}>
              <div className={styles.icon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.name}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <span className={styles.cardLink}>{t.cta} →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
