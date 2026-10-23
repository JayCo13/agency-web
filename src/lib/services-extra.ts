// Extra sections for the service landing pages: how we work, starting prices,
// a delivered project, a related guide and more FAQs. Kept apart from
// services.ts so the original copy stays untouched.
//
// Prices come from the published price list in the blog post
// "The Cost of Building a Custom Web App in 2026" (EN, USD) and
// "Chi phí xây dựng Web App tùy chỉnh năm 2026" (VI, VND). Update both
// places together.

import type { Lang } from "./services";

export interface ServiceExtraLang {
  approach: string;
  pricing: { tier: string; price: string; desc: string }[];
  pricingNote: string;
  example?: { client: string; place: string; text: string; href?: string };
  guide: { title: string; href: string };
  faqs: { q: string; a: string }[];
}

const AFTER_LAUNCH = {
  en: { q: "What happens after launch?", a: "We deploy, hand over the source code, train your team and fix bugs after launch. The code and data stay yours." },
  vi: { q: "Sau khi ra mắt thì sao?", a: "Chúng tôi triển khai, bàn giao mã nguồn, hướng dẫn team sử dụng và sửa lỗi sau bàn giao. Mã nguồn và dữ liệu luôn thuộc về bạn." },
};
const NOTE = {
  en: "Starting prices. After the free 15-minute call you receive an itemised quote for your scope.",
  vi: "Giá khởi điểm. Sau cuộc gọi tư vấn miễn phí 15 phút, bạn nhận báo giá chi tiết theo từng hạng mục.",
};

export const SERVICE_EXTRA: Record<string, Record<Lang, ServiceExtraLang>> = {
  "web-development": {
    en: {
      approach:
        "We start from the job your team does every day, not from a feature list. In the discovery call we map who uses the app, which data they touch and where today's process breaks. You approve the screens before any code is written, then try a working version at the end of each short build stage. The first release covers the workflow that costs you the most time; the rest follows once your team is using it.",
      pricing: [
        { tier: "Small web app or internal tool", price: "$3,000 – $7,000", desc: "One core workflow, one or two user roles, a few integrations." },
        { tier: "Larger platform", price: "From $10,000", desc: "Several modules and roles, complex rules, more systems to connect." },
      ],
      pricingNote: NOTE.en,
      example: { client: "Thi IELTS trên máy", place: "Vietnam", text: "An online IELTS mock-test platform: exam rooms that mirror the real test, automatic scoring and an admin dashboard for students and revenue.", href: "https://thiieltstrenmay.com" },
      guide: { title: "The cost of building a custom web app in 2026", href: "/blog/how-much-does-a-custom-web-app-cost" },
      faqs: [
        { q: "How much does a custom web app cost?", a: "Small web apps and internal tools usually start at $3,000–$7,000, larger platforms from $10,000. Scope, user roles and integrations move the price up or down." },
        { q: "Will we see progress before launch?", a: "Yes. We build in short stages and you try a working version at the end of each one, so your feedback arrives early instead of after launch." },
        AFTER_LAUNCH.en,
      ],
    },
    vi: {
      approach:
        "Chúng tôi bắt đầu từ công việc team bạn làm mỗi ngày, không phải từ danh sách tính năng. Trong cuộc gọi tìm hiểu, chúng tôi vẽ ra ai dùng app, họ đụng tới dữ liệu nào và quy trình hiện tại đang tắc ở đâu. Bạn duyệt giao diện trước khi viết code, rồi dùng thử bản chạy thật sau mỗi giai đoạn ngắn. Bản đầu tiên giải quyết luồng việc tốn thời gian nhất; phần còn lại làm tiếp khi team đã dùng quen.",
      pricing: [
        { tier: "Web app hoặc công cụ nội bộ nhỏ", price: "20 – 40 triệu đồng", desc: "Một luồng việc chính, một đến hai vai trò, vài tích hợp." },
        { tier: "Nền tảng lớn hơn", price: "Từ 60 triệu đồng", desc: "Nhiều phân hệ và vai trò, quy tắc phức tạp, kết nối nhiều hệ thống." },
      ],
      pricingNote: NOTE.vi,
      example: { client: "Thi IELTS trên máy", place: "Việt Nam", text: "Nền tảng thi thử IELTS trên máy tính: phòng thi mô phỏng đề thật, chấm điểm tự động và trang quản trị theo dõi học viên, doanh thu.", href: "https://thiieltstrenmay.com" },
      guide: { title: "Chi phí xây dựng Web App tùy chỉnh năm 2026", href: "/vi/blog/how-much-does-a-custom-web-app-cost" },
      faqs: [
        { q: "Làm web app theo yêu cầu giá bao nhiêu?", a: "Web app và công cụ nội bộ nhỏ thường từ 20–40 triệu đồng, nền tảng lớn hơn từ 60 triệu đồng. Phạm vi, số vai trò và số tích hợp quyết định giá cao hay thấp." },
        { q: "Có xem được tiến độ trước khi ra mắt không?", a: "Có. Chúng tôi làm theo từng giai đoạn ngắn, cuối mỗi giai đoạn bạn dùng thử bản chạy thật, nên góp ý đến sớm thay vì sau khi ra mắt." },
        AFTER_LAUNCH.vi,
      ],
    },
  },
  "custom-systems": {
    en: {
      approach:
        "We begin by mapping the data your company already has and who changes it: orders, customers, stock, approvals. That map becomes one data model with clear roles, so every team works in the same system instead of copying between tools. We move one part at a time, usually the most painful spreadsheet first, so daily work never stops while the system grows.",
      pricing: [
        { tier: "First module", price: "$3,000 – $7,000", desc: "One department or process, such as orders or approvals." },
        { tier: "Company-wide system", price: "From $10,000", desc: "Unified data, roles, workflows and integrations across the business." },
      ],
      pricingNote: NOTE.en,
      example: { client: "Tâm Nguồn Book", place: "Vietnam", text: "A book store with an admin system for orders, customers and monthly revenue reports.", href: "https://tamnguon.com" },
      guide: { title: "Off-the-shelf software vs custom system: how to choose", href: "/blog/off-the-shelf-vs-custom-system" },
      faqs: [
        { q: "How much does a management system cost?", a: "A first module usually starts at $3,000–$7,000; a company-wide system from $10,000. You receive an itemised quote, so you can choose what to build first." },
        { q: "Can we start with one department?", a: "Yes. Many systems start with one module and grow from there. We plan the data model for the whole company early, so later modules fit in." },
        AFTER_LAUNCH.en,
      ],
    },
    vi: {
      approach:
        "Chúng tôi bắt đầu bằng việc vẽ lại dữ liệu công ty đang có và ai là người thay đổi nó: đơn hàng, khách hàng, tồn kho, phê duyệt. Bản đồ đó trở thành một mô hình dữ liệu chung với phân quyền rõ ràng, để mọi phòng ban làm việc trên cùng một hệ thống thay vì chép qua lại giữa các công cụ. Chúng tôi chuyển từng phần một, thường bắt đầu từ file Excel gây đau đầu nhất, để công việc hằng ngày không bị gián đoạn.",
      pricing: [
        { tier: "Phân hệ đầu tiên", price: "20 – 40 triệu đồng", desc: "Một phòng ban hoặc một quy trình, ví dụ đơn hàng hay phê duyệt." },
        { tier: "Hệ thống toàn công ty", price: "Từ 60 triệu đồng", desc: "Dữ liệu, phân quyền, quy trình và tích hợp cho cả doanh nghiệp." },
      ],
      pricingNote: NOTE.vi,
      example: { client: "Tâm Nguồn Book", place: "Việt Nam", text: "Website bán sách kèm hệ thống quản trị đơn hàng, khách hàng và báo cáo doanh thu theo tháng.", href: "https://tamnguon.com" },
      guide: { title: "Nên dùng phần mềm có sẵn hay xây hệ thống riêng?", href: "/vi/blog/off-the-shelf-vs-custom-system" },
      faqs: [
        { q: "Hệ thống quản lý theo yêu cầu giá bao nhiêu?", a: "Phân hệ đầu tiên thường từ 20–40 triệu đồng, hệ thống toàn công ty từ 60 triệu đồng. Báo giá chia theo hạng mục để bạn chọn phần nào làm trước." },
        { q: "Có thể bắt đầu với một phòng ban không?", a: "Có. Nhiều hệ thống bắt đầu từ một phân hệ rồi mở rộng dần. Mô hình dữ liệu được tính cho cả công ty từ sớm, để các phân hệ sau ghép vào thuận lợi." },
        AFTER_LAUNCH.vi,
      ],
    },
  },
  "ai-chatbots": {
    en: {
      approach:
        "A useful chatbot starts with your own material: FAQs, product pages, price lists and the questions your team answers every week. We limit the bot to that knowledge, write hand-over rules for anything it cannot answer, and connect it to where leads should land, such as your CRM or calendar. You test it on real questions before it goes live.",
      pricing: [
        { tier: "Custom AI chatbot", price: "$1,500 – $4,000", desc: "Answers from your documents, qualifies leads, books meetings." },
      ],
      pricingNote: "Starting price for the build. AI usage is billed per conversation, and maintenance is about 15–20% of the build cost per year. You receive an itemised quote after the free 15-minute call.",
      guide: { title: "The real cost of an AI chatbot for business", href: "/blog/real-cost-of-ai-chatbot" },
      faqs: [
        { q: "How much does a custom AI chatbot cost?", a: "The build usually starts at $1,500–$4,000, depending on knowledge sources, channels and integrations." },
        { q: "What does it cost to run after launch?", a: "AI usage is billed per conversation, so it follows your traffic. Plan for maintenance of about 15–20% of the build cost per year." },
        AFTER_LAUNCH.en,
      ],
    },
    vi: {
      approach:
        "Một chatbot hữu ích bắt đầu từ chính tài liệu của bạn: câu hỏi thường gặp, trang sản phẩm, bảng giá và những câu team bạn trả lời mỗi tuần. Chúng tôi giới hạn chatbot trong phạm vi đó, đặt quy tắc chuyển cho nhân viên khi gặp câu ngoài phạm vi, và nối với nơi khách tiềm năng cần đổ về như CRM hay lịch hẹn. Bạn thử trên câu hỏi thật trước khi chatbot chạy chính thức.",
      pricing: [
        { tier: "Chatbot AI theo yêu cầu", price: "15 – 30 triệu đồng", desc: "Trả lời từ tài liệu của bạn, thu thông tin khách, đặt lịch hẹn." },
        { tier: "Trợ lý AI tích hợp sâu", price: "30 – 100 triệu đồng trở lên", desc: "Nhiều kênh, nhiều quy trình, kết nối CRM/ERP." },
      ],
      pricingNote: "Giá khởi điểm cho phần xây dựng. Phí gọi AI tính theo số cuộc trò chuyện, bảo trì khoảng 15–20% chi phí xây dựng mỗi năm. Bạn nhận báo giá chi tiết sau cuộc gọi miễn phí 15 phút.",
      guide: { title: "Chi phí thật của Chatbot AI cho doanh nghiệp", href: "/vi/blog/real-cost-of-ai-chatbot" },
      faqs: [
        { q: "Làm chatbot AI cho website giá bao nhiêu?", a: "Chatbot theo yêu cầu thường từ 15–30 triệu đồng; trợ lý AI tích hợp sâu nhiều hệ thống từ 30 đến hơn 100 triệu đồng." },
        { q: "Sau khi chạy thì tốn thêm chi phí gì?", a: "Phí gọi AI tính theo số cuộc trò chuyện nên đi theo lượng khách. Nên dự trù bảo trì khoảng 15–20% chi phí xây dựng mỗi năm." },
        AFTER_LAUNCH.vi,
      ],
    },
  },
  automation: {
    en: {
      approach:
        "We look for work that repeats and follows rules: copying orders between systems, sending reminders, building the same weekly report. Each candidate gets a simple test: how often it happens, how long it takes and what goes wrong when someone forgets. We automate the clear winners first and leave judgement calls to people.",
      pricing: [
        { tier: "Automation bot", price: "$1,500 – $4,000", desc: "One or more scheduled workflows between the tools you already use." },
      ],
      pricingNote: NOTE.en,
      guide: { title: "Which tasks to automate first, and which to leave alone", href: "/blog/which-tasks-to-automate-first" },
      faqs: [
        { q: "How much does process automation cost?", a: "An automation bot usually starts at $1,500–$4,000, depending on how many tools it connects and how many steps it runs." },
        { q: "Which tasks should we automate first?", a: "Tasks that repeat often, follow clear rules and cause problems when someone forgets them. Our guide walks through how to choose." },
        AFTER_LAUNCH.en,
      ],
    },
    vi: {
      approach:
        "Chúng tôi tìm những việc lặp đi lặp lại và có quy tắc rõ: chép đơn hàng giữa các hệ thống, gửi nhắc nhở, làm cùng một báo cáo mỗi tuần. Mỗi việc được kiểm tra bằng ba câu hỏi: bao lâu lặp một lần, tốn bao nhiêu thời gian, và điều gì xảy ra khi ai đó quên. Chúng tôi tự động hóa những việc đáng làm nhất trước, còn việc cần phán đoán thì để con người.",
      pricing: [
        { tier: "Bot tự động hóa", price: "15 – 30 triệu đồng", desc: "Một hoặc nhiều luồng việc chạy tự động giữa các công cụ bạn đang dùng." },
      ],
      pricingNote: NOTE.vi,
      guide: { title: "Nên tự động hóa việc nào trước, và việc nào nên để yên", href: "/vi/blog/which-tasks-to-automate-first" },
      faqs: [
        { q: "Tự động hóa quy trình giá bao nhiêu?", a: "Bot tự động hóa thường từ 15–30 triệu đồng, tùy số công cụ cần kết nối và số bước phải chạy." },
        { q: "Nên tự động hóa việc nào trước?", a: "Những việc lặp lại thường xuyên, có quy tắc rõ và gây rắc rối khi bị quên. Bài hướng dẫn của chúng tôi chỉ cách chọn." },
        AFTER_LAUNCH.vi,
      ],
    },
  },
  "product-configurators": {
    en: {
      approach:
        "We turn your product rules into a guided flow: which options fit together, how each choice changes the price and what the customer sees at every step. Your sales and technical team approve the rules before we build, so the configurator never offers something you cannot make. The finished request can go straight to your inbox or CRM.",
      pricing: [
        { tier: "Visual configurator, 6–8 screens", price: "$3,000 – $7,000", desc: "One product line, one admin role, connection to your CRM." },
        { tier: "Complex rules or several product lines", price: "From $10,000", desc: "Dependent options, price formulas, several languages or markets." },
      ],
      pricingNote: NOTE.en,
      example: { client: "BLANK Fensterläden", place: "Switzerland", text: "A made-to-measure shutter configurator in German: customers choose style, material and wood type, then request a quote on the website." },
      guide: { title: "What is a product configurator, and when do you need one?", href: "/blog/what-is-a-product-configurator" },
      faqs: [
        { q: "How much does a product configurator cost?", a: "A visual configurator with 6–8 screens, one admin role and a CRM connection usually costs $3,000–$7,000. Complex rules or several product lines start from $10,000." },
        { q: "Can the configurator run in German or other languages?", a: "Yes. The configurator we built for BLANK Fensterläden in Switzerland runs in German." },
        AFTER_LAUNCH.en,
      ],
    },
    vi: {
      approach:
        "Chúng tôi biến quy tắc sản phẩm của bạn thành một luồng chọn có hướng dẫn: tùy chọn nào đi được với nhau, mỗi lựa chọn làm giá thay đổi thế nào và khách thấy gì ở từng bước. Đội bán hàng và kỹ thuật của bạn duyệt bộ quy tắc trước khi lập trình, nên công cụ không bao giờ cho chọn thứ bạn không làm được. Yêu cầu báo giá hoàn chỉnh đi thẳng vào email hoặc CRM.",
      pricing: [
        { tier: "Bộ cấu hình trực quan, 6–8 màn hình", price: "20 – 40 triệu đồng", desc: "Một dòng sản phẩm, một vai trò quản trị, kết nối CRM." },
        { tier: "Quy tắc phức tạp hoặc nhiều dòng sản phẩm", price: "Từ 60 triệu đồng", desc: "Tùy chọn phụ thuộc nhau, công thức giá, nhiều ngôn ngữ hoặc thị trường." },
      ],
      pricingNote: NOTE.vi,
      example: { client: "BLANK Fensterläden", place: "Thụy Sĩ", text: "Bộ cấu hình cửa chớp theo kích thước bằng tiếng Đức: khách chọn kiểu, vật liệu, loại gỗ và gửi yêu cầu báo giá ngay trên website." },
      guide: { title: "Product Configurator là gì, và khi nào doanh nghiệp bạn thật sự cần?", href: "/vi/blog/what-is-a-product-configurator" },
      faqs: [
        { q: "Làm product configurator giá bao nhiêu?", a: "Bộ cấu hình trực quan 6–8 màn hình, một vai trò quản trị, kết nối CRM thường từ 20–40 triệu đồng. Quy tắc phức tạp hoặc nhiều dòng sản phẩm từ 60 triệu đồng." },
        { q: "Có làm được bản tiếng Đức hay ngôn ngữ khác không?", a: "Có. Bộ cấu hình chúng tôi làm cho BLANK Fensterläden tại Thụy Sĩ chạy bằng tiếng Đức." },
        AFTER_LAUNCH.vi,
      ],
    },
  },
  ecommerce: {
    en: {
      approach:
        "We start from how you sell: your catalogue, pricing rules, payment methods and what happens after an order. The store and its admin are built around that flow, including order management and revenue reports, so your team is not exporting spreadsheets at the end of every month. If you already sell online, we plan the move of products, customers and orders before launch.",
      pricing: [
        { tier: "Custom online store", price: "$3,000 – $7,000", desc: "Catalogue, checkout, order admin and sales reports." },
        { tier: "Marketplace or subscription platform", price: "From $10,000", desc: "Several sellers, payouts, auctions or recurring billing." },
      ],
      pricingNote: NOTE.en,
      example: { client: "CardVerseHub", place: "Vietnam", text: "A collectible trading-card marketplace with buying, selling, auctions and a price-history chart for every card." },
      guide: { title: "Shopify or custom build? Five signs you've outgrown your store platform", href: "/blog/shopify-vs-custom-ecommerce" },
      faqs: [
        { q: "How much does a custom online store cost?", a: "A custom store with catalogue, checkout and order admin usually starts at $3,000–$7,000. Marketplaces and subscription platforms start from $10,000." },
        { q: "Can you build a marketplace with auctions?", a: "Yes. CardVerseHub, a trading-card marketplace we built, has buying, selling, auctions and price-history charts." },
        AFTER_LAUNCH.en,
      ],
    },
    vi: {
      approach:
        "Chúng tôi bắt đầu từ cách bạn bán hàng: danh mục, quy tắc giá, phương thức thanh toán và những gì diễn ra sau khi có đơn. Cửa hàng và trang quản trị được xây quanh đúng luồng đó, gồm quản lý đơn hàng và báo cáo doanh thu, để cuối tháng team không phải xuất Excel ra cộng tay. Nếu bạn đang bán online, chúng tôi lên kế hoạch chuyển sản phẩm, khách hàng và đơn hàng trước khi ra mắt.",
      pricing: [
        { tier: "Cửa hàng online theo yêu cầu", price: "20 – 40 triệu đồng", desc: "Danh mục, thanh toán, quản trị đơn hàng và báo cáo bán hàng." },
        { tier: "Sàn giao dịch hoặc nền tảng thuê bao", price: "Từ 60 triệu đồng", desc: "Nhiều nhà bán, chi trả, đấu giá hoặc thanh toán định kỳ." },
      ],
      pricingNote: NOTE.vi,
      example: { client: "CardVerseHub", place: "Việt Nam", text: "Sàn giao dịch thẻ bài sưu tầm với mua bán, đấu giá và biểu đồ lịch sử giá cho từng thẻ." },
      guide: { title: "Shopify hay làm riêng? Năm dấu hiệu bạn đã vượt giới hạn nền tảng template", href: "/vi/blog/shopify-vs-custom-ecommerce" },
      faqs: [
        { q: "Làm website bán hàng theo yêu cầu giá bao nhiêu?", a: "Cửa hàng có danh mục, thanh toán và quản trị đơn hàng thường từ 20–40 triệu đồng. Sàn giao dịch và nền tảng thuê bao từ 60 triệu đồng." },
        { q: "Có làm được sàn giao dịch có đấu giá không?", a: "Có. CardVerseHub, sàn thẻ bài sưu tầm do chúng tôi xây, có mua bán, đấu giá và biểu đồ lịch sử giá." },
        AFTER_LAUNCH.vi,
      ],
    },
  },
};

export function getServiceExtra(slug: string, lang: Lang): ServiceExtraLang | undefined {
  return SERVICE_EXTRA[slug]?.[lang];
}
