// Service landing pages — bilingual content for /services/[slug] and
// /vi/services/[slug]. Hand-written (not thin/programmatic) so each page earns
// its own ranking. One source of truth, consumed by the page + sitemap.

export type Lang = "en" | "vi";

export interface ServiceLang {
  metaTitle: string;
  metaDescription: string;
  name: string;
  tagline: string;
  intro: string;
  build: { title: string; desc: string }[];
  whoFor: string[];
  faqs: { q: string; a: string }[];
  ctaLine: string;
}

export interface Service {
  slug: string;
  en: ServiceLang;
  vi: ServiceLang;
}

export const SERVICES: Service[] = [
  {
    slug: "web-development",
    en: {
      metaTitle: "Custom Web Application Development | TicoSystem",
      metaDescription:
        "We build custom web apps, dashboards and internal tools to European standards — designed around your exact workflow, not a template.",
      name: "Web Application Development",
      tagline: "Web apps built around your workflow — not a template.",
      intro:
        "Off-the-shelf software forces your business to bend to its rules. We do the opposite: we build a web application that mirrors exactly how your team already works, then remove the friction. From customer-facing portals to internal dashboards, everything is engineered for speed, security and long-term maintainability.",
      build: [
        { title: "Custom dashboards", desc: "Real-time views of the numbers that actually run your business." },
        { title: "Internal tools", desc: "Replace the tangle of spreadsheets your team fights with daily." },
        { title: "Customer portals", desc: "Self-service areas where clients book, pay and track — without emailing you." },
        { title: "APIs & integrations", desc: "Connect the app to your CRM, ERP, payment and email tools." },
      ],
      whoFor: [
        "Teams outgrowing spreadsheets and manual processes",
        "Businesses with a workflow no off-the-shelf tool fits",
        "Companies that need to connect several disconnected systems",
      ],
      faqs: [
        { q: "How long does a custom web app take?", a: "A focused first version typically ships in a matter of weeks, then we iterate. Timeline depends on scope, integrations and edge cases." },
        { q: "Will it integrate with our existing systems?", a: "Yes — we build against your CRM, ERP, payment gateways and any API you rely on, so data flows automatically instead of by hand." },
        { q: "Do we own the code?", a: "You own everything we build. No per-seat licensing, no lock-in." },
      ],
      ctaLine: "Tell us about your workflow and we'll scope a custom web app for you.",
    },
    vi: {
      metaTitle: "Lập Trình Web App Theo Yêu Cầu | TicoSystem",
      metaDescription:
        "Chúng tôi xây dựng web app, dashboard và công cụ nội bộ theo tiêu chuẩn châu Âu — thiết kế đúng theo quy trình của bạn, không dùng template có sẵn.",
      name: "Lập Trình Web Application",
      tagline: "Web app dựng theo quy trình của bạn — không phải template.",
      intro:
        "Phần mềm đóng gói bắt doanh nghiệp bạn phải chiều theo nó. Chúng tôi làm ngược lại: xây một web application phản ánh đúng cách team bạn đang làm việc, rồi xóa bỏ mọi điểm nghẽn. Từ cổng khách hàng đến dashboard nội bộ — tất cả được tối ưu cho tốc độ, bảo mật và dễ bảo trì lâu dài.",
      build: [
        { title: "Dashboard tùy chỉnh", desc: "Xem realtime những con số thật sự vận hành doanh nghiệp bạn." },
        { title: "Công cụ nội bộ", desc: "Thay thế mớ file Excel chằng chịt mà team phải vật lộn mỗi ngày." },
        { title: "Cổng khách hàng", desc: "Khu vực tự phục vụ để khách đặt, thanh toán, theo dõi — không cần email qua lại." },
        { title: "API & tích hợp", desc: "Kết nối app với CRM, ERP, cổng thanh toán và công cụ email của bạn." },
      ],
      whoFor: [
        "Team đã quá tải với Excel và quy trình thủ công",
        "Doanh nghiệp có quy trình mà không phần mềm có sẵn nào vừa",
        "Công ty cần kết nối nhiều hệ thống rời rạc",
      ],
      faqs: [
        { q: "Làm web app theo yêu cầu mất bao lâu?", a: "Phiên bản đầu tập trung thường ra mắt trong vài tuần, rồi cải tiến dần. Thời gian tùy phạm vi, tích hợp và các tình huống đặc thù." },
        { q: "Có tích hợp với hệ thống sẵn có không?", a: "Có — chúng tôi kết nối trực tiếp với CRM, ERP, cổng thanh toán và mọi API bạn dùng, để dữ liệu chảy tự động thay vì nhập tay." },
        { q: "Chúng tôi có sở hữu mã nguồn không?", a: "Bạn sở hữu toàn bộ. Không phí theo đầu người, không lệ thuộc nhà cung cấp." },
      ],
      ctaLine: "Kể cho chúng tôi về quy trình của bạn, chúng tôi sẽ lên phương án web app riêng.",
    },
  },
  {
    slug: "custom-systems",
    en: {
      metaTitle: "Custom Business Management Systems | TicoSystem",
      metaDescription:
        "Company-wide management systems that unify your data, roles and processes — integrated with your CRM/ERP and built to European standards.",
      name: "Business Management Systems",
      tagline: "One system that runs the whole company.",
      intro:
        "When a business grows, its tools multiply — and stop talking to each other. We build a single custom system that unifies your data, user roles and workflows in one place, so nobody re-enters the same information three times. It's the backbone that scales with you instead of holding you back.",
      build: [
        { title: "Unified data model", desc: "One source of truth instead of five conflicting spreadsheets." },
        { title: "Role-based access", desc: "Every team sees exactly what they need — nothing more." },
        { title: "Workflow automation", desc: "Approvals, notifications and hand-offs that run themselves." },
        { title: "CRM / ERP integration", desc: "Plug into the systems you already depend on." },
      ],
      whoFor: [
        "Companies juggling disconnected apps and manual data entry",
        "Teams scaling past what per-user SaaS can afford",
        "Businesses whose logic is their competitive advantage",
      ],
      faqs: [
        { q: "Isn't off-the-shelf software cheaper?", a: "For standard needs, yes — use it. A custom system pays off when your process is unique or per-user SaaS costs explode as you grow." },
        { q: "Can it replace several tools we use now?", a: "Often yes. We map your current stack and consolidate what makes sense into one system you own." },
        { q: "How do you handle our data securely?", a: "GDPR-compliant architecture, EU-hosting options and role-based access built in from day one." },
      ],
      ctaLine: "Book a call and we'll map your systems and where a custom platform fits.",
    },
    vi: {
      metaTitle: "Hệ Thống Quản Lý Doanh Nghiệp Theo Yêu Cầu | TicoSystem",
      metaDescription:
        "Hệ thống quản lý cho cả công ty, hợp nhất dữ liệu, phân quyền và quy trình — tích hợp CRM/ERP, xây theo tiêu chuẩn châu Âu.",
      name: "Hệ Thống Quản Lý Doanh Nghiệp",
      tagline: "Một hệ thống vận hành cả công ty.",
      intro:
        "Doanh nghiệp lớn lên thì công cụ cũng nhân lên — và ngừng nói chuyện với nhau. Chúng tôi xây một hệ thống riêng hợp nhất dữ liệu, phân quyền và quy trình về một chỗ, để không ai phải nhập cùng một thông tin ba lần. Đây là bộ khung mở rộng cùng bạn thay vì kìm hãm bạn.",
      build: [
        { title: "Mô hình dữ liệu hợp nhất", desc: "Một nguồn sự thật duy nhất thay vì năm file Excel mâu thuẫn." },
        { title: "Phân quyền theo vai trò", desc: "Mỗi team thấy đúng thứ họ cần — không hơn." },
        { title: "Tự động hóa quy trình", desc: "Phê duyệt, thông báo, bàn giao tự chạy." },
        { title: "Tích hợp CRM / ERP", desc: "Kết nối với các hệ thống bạn đang phụ thuộc." },
      ],
      whoFor: [
        "Công ty đang xoay xở với nhiều app rời rạc và nhập liệu thủ công",
        "Team mở rộng vượt mức chi phí SaaS tính theo đầu người",
        "Doanh nghiệp có logic vận hành là lợi thế cạnh tranh",
      ],
      faqs: [
        { q: "Phần mềm có sẵn chẳng phải rẻ hơn sao?", a: "Với nhu cầu tiêu chuẩn thì đúng — cứ dùng. Hệ thống riêng đáng tiền khi quy trình của bạn độc bản hoặc phí SaaS/đầu người phình to khi mở rộng." },
        { q: "Có thay thế được vài công cụ đang dùng không?", a: "Thường là có. Chúng tôi rà soát stack hiện tại và gộp những gì hợp lý vào một hệ thống bạn sở hữu." },
        { q: "Dữ liệu được bảo mật thế nào?", a: "Kiến trúc tuân thủ GDPR, tùy chọn hosting tại EU và phân quyền theo vai trò ngay từ đầu." },
      ],
      ctaLine: "Đặt lịch để chúng tôi rà soát hệ thống và chỉ ra chỗ cần một nền tảng riêng.",
    },
  },
  {
    slug: "ai-chatbots",
    en: {
      metaTitle: "AI Chatbot Development for Business | TicoSystem",
      metaDescription:
        "Custom AI chatbots that answer customers instantly, qualify leads 24/7 and connect to your systems. Built to European standards.",
      name: "AI Chatbot Development",
      tagline: "A chatbot that answers instantly and sells while you sleep.",
      intro:
        "Most website visitors leave because nobody answers fast enough. A well-built AI chatbot answers common questions in seconds, qualifies leads, books calls and hands the hot ones to your team — around the clock, in your customer's language. We build chatbots grounded in your real content, so they're helpful instead of generic.",
      build: [
        { title: "Support chatbots", desc: "Instant answers to your most common questions, day and night." },
        { title: "Lead-qualifying bots", desc: "Ask the right questions and route hot leads to sales." },
        { title: "Knowledge-grounded AI", desc: "Answers based on your docs and products — not made up." },
        { title: "System integrations", desc: "Push conversations into your CRM, calendar and inbox." },
      ],
      whoFor: [
        "Businesses losing leads outside working hours",
        "Support teams drowning in repetitive questions",
        "Companies selling to multiple language markets",
      ],
      faqs: [
        { q: "Will the chatbot make things up?", a: "We ground it in your real content and set guardrails, so it answers from your knowledge base and hands off when unsure." },
        { q: "Which channels can it run on?", a: "Your website, plus messaging channels like WhatsApp, Messenger or Zalo depending on your audience." },
        { q: "Can it book meetings and capture leads?", a: "Yes — it can qualify visitors, capture details into your CRM and book calls straight into your calendar." },
      ],
      ctaLine: "Book a call and we'll design a chatbot around your customers' real questions.",
    },
    vi: {
      metaTitle: "Phát Triển Chatbot AI Cho Doanh Nghiệp | TicoSystem",
      metaDescription:
        "Chatbot AI theo yêu cầu, trả lời khách tức thì, lọc lead 24/7 và kết nối hệ thống của bạn. Xây theo tiêu chuẩn châu Âu.",
      name: "Phát Triển Chatbot AI",
      tagline: "Chatbot trả lời tức thì và bán hàng cả khi bạn ngủ.",
      intro:
        "Đa số khách vào website rồi rời đi vì không ai trả lời đủ nhanh. Một chatbot AI được xây tốt sẽ trả lời câu hỏi phổ biến trong vài giây, lọc khách tiềm năng, đặt lịch và chuyển khách nóng cho team bạn — 24/7, bằng ngôn ngữ của khách. Chúng tôi xây chatbot dựa trên nội dung thật của bạn, nên nó hữu ích chứ không chung chung.",
      build: [
        { title: "Chatbot chăm sóc", desc: "Trả lời tức thì các câu hỏi phổ biến nhất, cả ngày lẫn đêm." },
        { title: "Bot lọc khách", desc: "Hỏi đúng câu và chuyển khách nóng sang sales." },
        { title: "AI dựa trên tri thức", desc: "Trả lời từ tài liệu và sản phẩm của bạn — không bịa." },
        { title: "Tích hợp hệ thống", desc: "Đẩy hội thoại vào CRM, lịch và hộp thư của bạn." },
      ],
      whoFor: [
        "Doanh nghiệp mất khách ngoài giờ làm việc",
        "Team chăm sóc ngập trong câu hỏi lặp lại",
        "Công ty bán cho nhiều thị trường ngôn ngữ khác nhau",
      ],
      faqs: [
        { q: "Chatbot có bịa thông tin không?", a: "Chúng tôi neo nó vào nội dung thật của bạn và đặt giới hạn, nên nó trả lời từ kho tri thức và chuyển người khi không chắc." },
        { q: "Chạy được trên kênh nào?", a: "Website của bạn, cùng các kênh nhắn tin như WhatsApp, Messenger hay Zalo tùy đối tượng." },
        { q: "Có đặt lịch và thu lead không?", a: "Có — nó lọc khách, lưu thông tin vào CRM và đặt lịch thẳng vào calendar của bạn." },
      ],
      ctaLine: "Đặt lịch để chúng tôi thiết kế chatbot quanh câu hỏi thật của khách bạn.",
    },
  },
  {
    slug: "automation",
    en: {
      metaTitle: "Business Process Automation & Bots | TicoSystem",
      metaDescription:
        "Automation bots that remove repetitive manual work and sync data between your systems — so your team stops copy-pasting and starts producing.",
      name: "Automation Bots",
      tagline: "Stop copy-pasting. Let bots do the boring work.",
      intro:
        "Every hour your team spends moving data between apps is an hour not spent on real work. We build automation bots that handle the repetitive tasks — syncing systems, generating documents, sending follow-ups, cleaning data — reliably and invisibly. The result: fewer errors, faster turnaround and a team freed up for what actually matters.",
      build: [
        { title: "Data sync bots", desc: "Keep your apps in sync automatically, no manual export/import." },
        { title: "Document automation", desc: "Generate quotes, invoices and reports in one click." },
        { title: "Follow-up workflows", desc: "Automated reminders and sequences that never forget." },
        { title: "Scheduled jobs", desc: "Recurring tasks that run on time, every time." },
      ],
      whoFor: [
        "Teams spending hours on copy-paste between systems",
        "Businesses with repetitive, rule-based back-office work",
        "Companies where manual steps cause costly errors",
      ],
      faqs: [
        { q: "What tasks are worth automating?", a: "Anything repetitive and rule-based: data entry, report generation, follow-ups, syncing between tools. If a human does it the same way each time, a bot can." },
        { q: "Will it work with the tools we already use?", a: "Yes — we automate across your existing apps via their APIs, so you don't have to switch software." },
        { q: "How much time can we save?", a: "It varies, but teams commonly reclaim several hours per person per week from routine tasks." },
      ],
      ctaLine: "Book a call and we'll find the repetitive work worth automating first.",
    },
    vi: {
      metaTitle: "Tự Động Hóa Quy Trình & Bot Doanh Nghiệp | TicoSystem",
      metaDescription:
        "Bot tự động hóa xóa bỏ việc thủ công lặp lại và đồng bộ dữ liệu giữa các hệ thống — để team ngừng copy-paste và bắt đầu tạo giá trị.",
      name: "Bot Tự Động Hóa",
      tagline: "Ngừng copy-paste. Để bot làm việc nhàm chán.",
      intro:
        "Mỗi giờ team bạn bỏ ra để chuyển dữ liệu giữa các app là một giờ không dành cho việc thật. Chúng tôi xây bot tự động hóa xử lý các tác vụ lặp lại — đồng bộ hệ thống, tạo tài liệu, gửi nhắc nhở, làm sạch dữ liệu — đáng tin cậy và âm thầm. Kết quả: ít lỗi hơn, xử lý nhanh hơn, team rảnh tay làm việc quan trọng.",
      build: [
        { title: "Bot đồng bộ dữ liệu", desc: "Giữ các app đồng bộ tự động, không xuất/nhập thủ công." },
        { title: "Tự động hóa tài liệu", desc: "Tạo báo giá, hóa đơn, báo cáo chỉ bằng một cú nhấp." },
        { title: "Quy trình nhắc nhở", desc: "Nhắc nhở và chuỗi tự động không bao giờ quên." },
        { title: "Tác vụ định kỳ", desc: "Việc lặp lại chạy đúng giờ, mọi lúc." },
      ],
      whoFor: [
        "Team tốn hàng giờ copy-paste giữa các hệ thống",
        "Doanh nghiệp có nhiều việc back-office lặp lại, theo quy tắc",
        "Công ty mà thao tác thủ công gây lỗi tốn kém",
      ],
      faqs: [
        { q: "Việc nào đáng tự động hóa?", a: "Bất cứ việc gì lặp lại và theo quy tắc: nhập liệu, tạo báo cáo, nhắc nhở, đồng bộ giữa các công cụ. Nếu con người làm giống nhau mỗi lần, bot làm được." },
        { q: "Có chạy với công cụ đang dùng không?", a: "Có — chúng tôi tự động hóa xuyên qua các app hiện tại qua API, bạn không phải đổi phần mềm." },
        { q: "Tiết kiệm được bao nhiêu thời gian?", a: "Tùy trường hợp, nhưng các team thường lấy lại vài giờ mỗi người mỗi tuần từ việc lặp lại." },
      ],
      ctaLine: "Đặt lịch để chúng tôi tìm việc lặp lại đáng tự động hóa trước tiên.",
    },
  },
  {
    slug: "product-configurators",
    en: {
      metaTitle: "Product Configurator (CPQ) Development | TicoSystem",
      metaDescription:
        "Interactive product configurators that turn complex pricing into instant, accurate quotes and pipe qualified leads into your CRM.",
      name: "Product Configurators (CPQ)",
      tagline: "Turn complex pricing into instant, accurate quotes.",
      intro:
        "If your sales team answers the same pricing questions by email all day, you're leaking time and leads. A product configurator lets customers build their exact product online and see an accurate price instantly — while your business logic stays bulletproof behind the scenes. It's our specialty: complex conditional pricing, made simple for the buyer.",
      build: [
        { title: "Visual configurators", desc: "Customers pick options and see the product and price update live." },
        { title: "Rules & pricing engine", desc: "Your exact pricing logic, conditions and constraints — enforced." },
        { title: "Instant quotes", desc: "Accurate, production-ready quotes with no back-and-forth." },
        { title: "CRM/ERP hand-off", desc: "Qualified configurations flow straight into your pipeline." },
      ],
      whoFor: [
        "Manufacturers with complex, variable pricing",
        "Sales teams buried in repetitive quote requests",
        "Businesses selling configurable or made-to-order products",
      ],
      faqs: [
        { q: "Our pricing rules are really complicated — can you handle that?", a: "Yes — complex conditional pricing is exactly what we specialise in. We model your rules into a reliable engine behind a simple interface." },
        { q: "Can it embed in our current website?", a: "Yes, we embed it seamlessly into your existing site and pipe the data into your CRM or ERP." },
        { q: "Does it generate real quotes?", a: "It produces accurate, production-ready quotes instantly, so buyers self-serve and your team receives qualified leads." },
      ],
      ctaLine: "Book a call and we'll map your pricing rules into a live configurator.",
    },
    vi: {
      metaTitle: "Phát Triển Product Configurator (CPQ) | TicoSystem",
      metaDescription:
        "Công cụ cấu hình sản phẩm trực quan biến bảng giá phức tạp thành báo giá tức thì, chính xác và đẩy lead chất lượng vào CRM.",
      name: "Product Configurator (CPQ)",
      tagline: "Biến bảng giá phức tạp thành báo giá tức thì, chính xác.",
      intro:
        "Nếu đội sales cả ngày trả lời cùng những câu hỏi giá qua email, bạn đang rò rỉ thời gian và khách. Product configurator cho phép khách tự cấu hình sản phẩm đúng ý ngay trên web và thấy giá chính xác tức thì — trong khi logic nghiệp vụ của bạn vẫn vững chắc phía sau. Đây là thế mạnh của chúng tôi: giá điều kiện phức tạp, đơn giản hóa cho người mua.",
      build: [
        { title: "Cấu hình trực quan", desc: "Khách chọn tùy chọn và thấy sản phẩm + giá cập nhật realtime." },
        { title: "Engine quy tắc & giá", desc: "Đúng logic, điều kiện và ràng buộc giá của bạn — được thực thi." },
        { title: "Báo giá tức thì", desc: "Báo giá chính xác, dùng được ngay, không qua lại." },
        { title: "Đẩy sang CRM/ERP", desc: "Cấu hình đã lọc chảy thẳng vào pipeline của bạn." },
      ],
      whoFor: [
        "Nhà sản xuất có giá phức tạp, nhiều biến thể",
        "Đội sales ngập trong yêu cầu báo giá lặp lại",
        "Doanh nghiệp bán sản phẩm cấu hình được hoặc làm theo đơn",
      ],
      faqs: [
        { q: "Quy tắc giá của chúng tôi rất phức tạp — làm được không?", a: "Được — giá điều kiện phức tạp đúng là chuyên môn của chúng tôi. Chúng tôi mô hình hóa quy tắc thành một engine đáng tin sau giao diện đơn giản." },
        { q: "Có nhúng vào website hiện tại không?", a: "Có, nhúng liền mạch vào site sẵn có và đẩy dữ liệu vào CRM hoặc ERP của bạn." },
        { q: "Có tạo báo giá thật không?", a: "Nó tạo báo giá chính xác, dùng được ngay, để khách tự phục vụ còn team bạn nhận lead đã lọc." },
      ],
      ctaLine: "Đặt lịch để chúng tôi mô hình hóa quy tắc giá thành configurator trực tiếp.",
    },
  },
  {
    slug: "ecommerce",
    en: {
      metaTitle: "E-commerce & Customer Portal Development | TicoSystem",
      metaDescription:
        "Custom storefronts, marketplaces and customer portals that scale with your business and integrate with your payment and back-office tools.",
      name: "E-commerce & Portals",
      tagline: "Storefronts and portals that scale with you.",
      intro:
        "When a template store stops fitting, you need something built for how you actually sell. We develop custom storefronts, multi-vendor marketplaces and customer portals — with the checkout, payment and back-office integrations your business needs — engineered to stay fast and reliable as your catalogue and traffic grow.",
      build: [
        { title: "Custom storefronts", desc: "A buying experience shaped around your products and customers." },
        { title: "Marketplaces", desc: "Multi-vendor platforms with listings, payments and payouts." },
        { title: "Customer portals", desc: "Accounts where customers manage orders, subscriptions and support." },
        { title: "Payment & integrations", desc: "Connected to your gateways, inventory and shipping." },
      ],
      whoFor: [
        "Sellers who've outgrown template platforms",
        "Businesses launching a marketplace or subscription model",
        "Brands needing tight integration with their back office",
      ],
      faqs: [
        { q: "Why not just use Shopify?", a: "For a standard store, Shopify is great — use it. Go custom when your selling model, pricing or integrations don't fit the template." },
        { q: "Can you migrate our existing store?", a: "Yes — we plan the migration of products, customers and orders so you launch without losing data or SEO." },
        { q: "Which payment methods can you support?", a: "The gateways your market uses, plus local options relevant to your customers." },
      ],
      ctaLine: "Book a call and we'll scope a storefront or portal that fits how you sell.",
    },
    vi: {
      metaTitle: "Phát Triển E-commerce & Cổng Khách Hàng | TicoSystem",
      metaDescription:
        "Cửa hàng, sàn giao dịch và cổng khách hàng tùy chỉnh, mở rộng cùng doanh nghiệp và tích hợp thanh toán, back-office.",
      name: "E-commerce & Portal",
      tagline: "Cửa hàng và cổng khách hàng mở rộng cùng bạn.",
      intro:
        "Khi cửa hàng dạng template không còn vừa, bạn cần thứ được xây theo đúng cách bạn bán. Chúng tôi phát triển cửa hàng tùy chỉnh, sàn nhiều nhà bán và cổng khách hàng — với thanh toán, checkout và tích hợp back-office mà doanh nghiệp bạn cần — được tối ưu để luôn nhanh và ổn định khi danh mục và lượng truy cập tăng.",
      build: [
        { title: "Cửa hàng tùy chỉnh", desc: "Trải nghiệm mua sắm thiết kế quanh sản phẩm và khách của bạn." },
        { title: "Sàn giao dịch", desc: "Nền tảng nhiều nhà bán với đăng bán, thanh toán và chi trả." },
        { title: "Cổng khách hàng", desc: "Tài khoản để khách quản lý đơn, gói dịch vụ và hỗ trợ." },
        { title: "Thanh toán & tích hợp", desc: "Kết nối cổng thanh toán, kho hàng và vận chuyển." },
      ],
      whoFor: [
        "Người bán đã vượt giới hạn của nền tảng template",
        "Doanh nghiệp ra mắt mô hình sàn hoặc thuê bao",
        "Thương hiệu cần tích hợp chặt với back-office",
      ],
      faqs: [
        { q: "Sao không dùng Shopify?", a: "Với cửa hàng tiêu chuẩn thì Shopify rất tốt — cứ dùng. Làm riêng khi mô hình bán, giá hoặc tích hợp của bạn không vừa template." },
        { q: "Có chuyển cửa hàng cũ sang được không?", a: "Có — chúng tôi lên kế hoạch chuyển sản phẩm, khách và đơn để bạn ra mắt mà không mất dữ liệu hay SEO." },
        { q: "Hỗ trợ những phương thức thanh toán nào?", a: "Các cổng phổ biến ở thị trường bạn, cùng những lựa chọn nội địa phù hợp với khách của bạn." },
      ],
      ctaLine: "Đặt lịch để chúng tôi lên phương án cửa hàng hoặc cổng đúng cách bạn bán.",
    },
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function allServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug);
}
