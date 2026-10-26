// Search-result titles and meta descriptions, written from Search Console
// queries (Oct 2026). Kept apart from the page content so they can be tuned
// without touching the copy: when a slug is listed here, its page uses these
// values for <title> and meta description (service pages also for Open Graph);
// otherwise the page falls back to its own metaTitle/metaDescription (services)
// or title/excerpt (blog posts from Supabase).
export type SeoLang = "en" | "vi";
export type Seo = { title: string; description: string };
type SeoMap = Record<string, Partial<Record<SeoLang, Seo>>>;

const SERVICE_SEO: SeoMap = {
  "web-development": {
    en: {
      title: "Custom Web Application Development from $3,000 | TicoSystem",
      description:
        "Custom web apps, dashboards and internal tools built around your workflow. Small apps from $3,000, itemised quote, you own the code. Free 15-minute call.",
    },
    vi: {
      title: "Lập Trình Web App Theo Yêu Cầu, Giá Từ 20 Triệu | TicoSystem",
      description:
        "Bảng giá lập trình web app, dashboard và công cụ nội bộ theo yêu cầu: từ 20–40 triệu đồng, báo giá theo hạng mục, bàn giao mã nguồn. Tư vấn miễn phí 15 phút.",
    },
  },
  "custom-systems": {
    en: {
      title: "Custom Business Management System Development | TicoSystem",
      description:
        "Custom management systems that unify orders, customers, approvals and roles in one place, integrated with your CRM/ERP. First module from $3,000.",
    },
    vi: {
      title: "Phần Mềm Quản Lý Doanh Nghiệp Theo Yêu Cầu | TicoSystem",
      description:
        "Xây hệ thống quản lý riêng cho doanh nghiệp: đơn hàng, khách hàng, phê duyệt, phân quyền, tích hợp CRM/ERP. Phân hệ đầu tiên từ 20–40 triệu đồng.",
    },
  },
  "ai-chatbots": {
    en: {
      title: "AI Chatbot Development Services from $1,500 | TicoSystem",
      description:
        "Custom AI chatbots that answer from your own documents 24/7, qualify leads and book meetings into your CRM. From $1,500. Free 15-minute call.",
    },
    vi: {
      title: "Làm Chatbot AI Cho Website, Giá Từ 15 Triệu | TicoSystem",
      description:
        "Phát triển chatbot AI cho website và doanh nghiệp: trả lời khách 24/7 từ tài liệu của bạn, lọc khách, đặt lịch, nối CRM. Giá từ 15–30 triệu đồng.",
    },
  },
  "automation": {
    en: {
      title: "Business Process Automation Bots from $1,500 | TicoSystem",
      description:
        "Automation bots that sync data between your tools, generate quotes and reports and send follow-ups on schedule. From $1,500, built to European standards.",
    },
    vi: {
      title: "Tự Động Hóa Quy Trình Doanh Nghiệp Bằng Bot | TicoSystem",
      description:
        "Bot tự động đồng bộ dữ liệu giữa các phần mềm, tạo báo giá, báo cáo và gửi nhắc việc đúng giờ. Giá từ 15–30 triệu đồng, tư vấn miễn phí 15 phút.",
    },
  },
  "product-configurators": {
    en: {
      title: "Product Configurator & CPQ Software Development | TicoSystem",
      description:
        "Rules-based product configurators for complex products: customers pick options, see the price live and send a quote request to your CRM. From $3,000.",
    },
    vi: {
      title: "Làm Product Configurator (CPQ) Theo Yêu Cầu | TicoSystem",
      description:
        "Bộ cấu hình sản phẩm theo quy tắc: khách chọn tùy chọn, xem giá ngay và gửi yêu cầu báo giá vào CRM. Hợp sản phẩm phức tạp, từ 20–40 triệu đồng.",
    },
  },
  "ecommerce": {
    en: {
      title: "Custom E-commerce & Customer Portal Development | TicoSystem",
      description:
        "Custom online stores, marketplaces and customer portals with checkout, order admin and payment integration. Stores from $3,000, you own the code.",
    },
    vi: {
      title: "Thiết Kế Website Bán Hàng & Cổng Khách Hàng | TicoSystem",
      description:
        "Làm website bán hàng, sàn giao dịch và cổng khách hàng theo yêu cầu: thanh toán, quản trị đơn hàng, báo cáo. Cửa hàng từ 20–40 triệu đồng.",
    },
  },
};

const BLOG_SEO: SeoMap = {
  "off-the-shelf-vs-custom-system": {
    en: {
      title: "Off-the-Shelf vs Custom Software: When to Build | TicoSystem",
      description:
        "Buy or build? When SaaS like QuickBooks or HubSpot is enough, the 3 signs a custom system pays off, and a simple rule for deciding. No sales pitch.",
    },
    vi: {
      title: "Phần Mềm Có Sẵn Hay Tự Xây Hệ Thống Riêng? | TicoSystem",
      description:
        "Khi nào nên dùng phần mềm SaaS có sẵn, 3 dấu hiệu nên xây hệ thống riêng và quy tắc cốt lõi để quyết định. Viết thẳng thắn, không chào bán.",
    },
  },
};

export function getServiceSeo(slug: string, lang: SeoLang): Seo | null {
  return SERVICE_SEO[slug]?.[lang] ?? null;
}

export function getBlogSeo(slug: string, lang: SeoLang): Seo | null {
  return BLOG_SEO[slug]?.[lang] ?? null;
}
