// Bilingual copy for the home page (/ and /vi). HomePage renders whichever
// language it is given, so the two locales can never drift apart in layout.

import type { ContactTabsCopy } from "@/components/home/ContactTabs";

export type Lang = "en" | "vi";

export interface CaseStudy {
  id: string;
  client: string;
  place: string;
  summary: string;
  tags: string[];
  images: { src: string; alt: string }[];
  url?: string;
}

interface HomeCopy {
  nav: { work: string; services: string; process: string; about: string; faq: string; blog: string; cta: string; menu: string };
  hero: {
    badge: string;
    title: string;
    lead: string;
    primaryTop: string;
    primary: string;
    secondary: string;
    stats: { value: string; label: string }[];
    personAlt: string;
    tags: { founder: string; lead: string };
    scroll: string;
  };
  proof: { label: string };
  work: { eyebrow: string; title: string; lead: string; countOf: string; visit: string; viewImage: string; listLabel: string };
  process: { eyebrow: string; title: string; lead: string; steps: { title: string; desc: string }[] };
  about: {
    eyebrow: string;
    title: string;
    body: string;
    cta: string;
    points: string[];
    factsTitle: string;
    facts: { direct: string; taxId: string; address: string };
  };
  promises: {
    eyebrow: string;
    title: string;
    lead: string;
    items: string[];
    note: string;
    offerTitle: string;
    offerSub: string;
    offerAlt: string;
    offerCta: string;
    guarantee: string;
  };
  faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    direct: string;
    email: string;
    phone: string;
    whatsapp: string;
    zalo: string;
    linkedin: string;
    bookingNote: string;
    form: Omit<ContactTabsCopy, "bookingNote">;
  };
  mobileBar: { call: string; book: string };
  cases: CaseStudy[];
}

export const HOME: Record<Lang, HomeCopy> = {
  vi: {
    nav: { work: "Dự án", services: "Dịch vụ", process: "Quy trình", about: "Về chúng tôi", faq: "Hỏi đáp", blog: "Blog", cta: "Đặt lịch tư vấn", menu: "Mở menu" },
    hero: {
      badge: "Công ty TNHH Giải pháp Công nghệ và Phần mềm TC",
      title: "Tự động hóa công việc theo cách doanh nghiệp bạn mong muốn",
      lead: "Xây dựng web app, phần mềm quản lý và tự động hóa tích hợp AI. Thiết kế riêng, giải quyết chuẩn xác khó khăn doanh nghiệp bạn đang gặp.",
      primaryTop: "Miễn phí 15 phút",
      primary: "Đặt lịch tư vấn",
      secondary: "Xem dự án",
      stats: [
        { value: "50+", label: "Dự án đã bàn giao" },
        { value: "3", label: "Quốc gia có khách hàng" },
        { value: "2+", label: "Năm dẫn dắt đội full-stack" },
      ],
      personAlt: "Tyler Tai Co, trưởng nhóm kỹ thuật TicoSystem",
      tags: { founder: "Founder", lead: "Tech Lead" },
      scroll: "Cuộn xuống",
    },
    proof: { label: "Hệ thống chúng tôi đã xây cho khách hàng tại Việt Nam và châu Âu" },
    work: {
      eyebrow: "Dự án",
      title: "Những hệ thống tiêu biểu đã bàn giao",
      lead: "Mỗi hệ thống được xây riêng theo nghiệp vụ của khách hàng. Chọn một dự án để xem chúng tôi đã làm gì.",
      countOf: "dự án tiêu biểu, trong hơn 50 hệ thống đã bàn giao",
      visit: "Xem website",
      viewImage: "Xem ảnh",
      listLabel: "Danh sách dự án",
    },
    process: {
      eyebrow: "Quy trình",
      title: "Bốn bước từ ý tưởng đến phần mềm chạy thật",
      lead: "Bạn luôn biết dự án đang ở đâu và nhận được gì ở mỗi bước.",
      steps: [
        { title: "Trao đổi nhu cầu", desc: "Cuộc gọi 15 phút để hiểu bài toán, sau đó bạn nhận phạm vi và báo giá bằng văn bản." },
        { title: "Thiết kế giao diện", desc: "Phác thảo luồng màn hình để bạn duyệt trước khi bắt đầu lập trình." },
        { title: "Lập trình và demo", desc: "Xây theo từng giai đoạn ngắn, cuối mỗi giai đoạn bạn dùng thử bản chạy thật." },
        { title: "Bàn giao và hỗ trợ", desc: "Triển khai, bàn giao mã nguồn, hướng dẫn sử dụng và hỗ trợ sau bàn giao." },
      ],
    },
    about: {
      eyebrow: "Về chúng tôi",
      title: "Xin chào, chúng tôi là TicoSystem!",
      body: "TicoSystem là thương hiệu của Công ty TNHH Giải pháp Công nghệ và Phần mềm TC. Chúng tôi nhận những bài toán mà phần mềm đóng gói sẵn không giải được: quy trình riêng, bảng giá phức tạp, nhiều hệ thống cần kết nối với nhau.",
      cta: "Trò chuyện với chúng tôi",
      points: [
        "Pháp nhân tại Việt Nam",
        "Khách hàng tại Việt Nam, Thụy Sĩ và Áo",
        "Web app, hệ thống quản lý, AI và tự động hóa",
        "Làm việc trực tiếp với Founder",
      ],
      factsTitle: "Thông tin doanh nghiệp",
      facts: { direct: "Trao đổi trực tiếp với Founder", taxId: "Mã số thuế", address: "Địa chỉ" },
    },
    promises: {
      eyebrow: "Cam kết",
      title: "Điều bạn nhận được khi hợp tác",
      lead: "Được ghi vào hợp đồng của mọi dự án, lớn hay nhỏ.",
      items: [
        "Hợp đồng và hóa đơn với pháp nhân rõ ràng",
        "Báo giá chi tiết theo từng hạng mục",
        "Bạn sở hữu toàn bộ mã nguồn và dữ liệu",
        "Bảo mật theo tiêu chuẩn GDPR châu Âu",
        "Hỗ trợ sửa lỗi sau bàn giao",
      ],
      note: "Mã nguồn của bạn, dữ liệu của bạn.",
      offerTitle: "Miễn phí",
      offerSub: "Cuộc gọi tư vấn 15 phút",
      offerAlt: "Nhận báo giá theo hạng mục sau cuộc gọi",
      offerCta: "Đặt lịch ngay",
      guarantee: "Ký hợp đồng với Công ty TNHH Giải pháp Công nghệ và Phần mềm TC",
    },
    faq: {
      eyebrow: "Hỏi đáp",
      title: "Câu hỏi thường gặp",
      items: [
        { q: "Chi phí một dự án khoảng bao nhiêu?", a: "Tùy phạm vi. Sau buổi tư vấn, chúng tôi gửi báo giá chi tiết theo từng hạng mục để bạn chọn phần nào làm trước, phần nào để sau." },
        { q: "Bao lâu thì có sản phẩm dùng được?", a: "Một phiên bản đầu tiên tập trung thường hoàn thành trong vài tuần, sau đó tiếp tục mở rộng. Mốc thời gian cụ thể được ghi rõ trong báo giá." },
        { q: "Tôi có sở hữu mã nguồn không?", a: "Có. Toàn bộ mã nguồn, thiết kế và dữ liệu được bàn giao cho bạn khi dự án hoàn tất." },
        { q: "Công ty có ký hợp đồng và xuất hóa đơn không?", a: "Có. Mọi dự án đều ký hợp đồng với Công ty TNHH Giải pháp Công nghệ và Phần mềm TC và được xuất hóa đơn theo quy định." },
        { q: "Sau khi bàn giao có hỗ trợ không?", a: "Có. Chúng tôi hỗ trợ sửa lỗi sau bàn giao và có thể tiếp tục bảo trì, phát triển thêm tính năng theo thỏa thuận." },
      ],
    },
    contact: {
      eyebrow: "Liên hệ tư vấn",
      title: "Cùng tìm giải pháp cho bài toán của bạn",
      lead: "Đặt lịch hẹn trò chuyện 15 phút hoàn toàn miễn phí. Đừng lo lắng về hồ sơ hay tài liệu cầu kỳ, chúng tôi chỉ cần lắng nghe mong muốn và bài toán thực tế từ phía bạn.",
      direct: "Hoặc liên hệ trực tiếp",
      email: "Email",
      phone: "Điện thoại",
      whatsapp: "WhatsApp",
      zalo: "Zalo",
      linkedin: "LinkedIn",
      bookingNote: "Lịch hẹn qua Calendly, link Google Meet được gửi qua email.",
      form: {
        tabMessage: "Gửi tin nhắn",
        tabBook: "Đặt lịch gọi",
        name: "Họ và tên",
        namePh: "Nguyễn Văn A",
        email: "Email",
        emailPh: "ban@congty.com",
        phone: "Điện thoại / Zalo",
        phonePh: "0901 234 567",
        optional: "không bắt buộc",
        topic: "Bạn cần gì?",
        topicPh: "Chọn dịch vụ",
        topics: ["Web app", "Hệ thống quản lý", "Chatbot AI", "Tự động hóa", "Product configurator", "E-commerce", "Khác"],
        message: "Mô tả bài toán của bạn",
        messagePh: "Ví dụ: Chúng tôi đang quản lý đơn hàng bằng Excel và muốn có một hệ thống...",
        send: "Gửi tin nhắn",
        sending: "Đang gửi...",
        privacy: "Chúng tôi phản hồi qua email và chỉ dùng thông tin này để liên hệ với bạn.",
        sentTitle: "Đã gửi tin nhắn",
        sentBody: "Cảm ơn bạn. Chúng tôi sẽ đọc kỹ và trả lời qua email bạn đã để lại.",
        sendAnother: "Gửi tin nhắn khác",
        error: "Chưa gửi được tin nhắn. Vui lòng thử lại, hoặc gửi trực tiếp tới taicopgm@gmail.com.",
        mailtoNote: "Đang mở ứng dụng email của bạn với nội dung đã điền sẵn, bạn chỉ cần bấm gửi.",
      },
    },
    mobileBar: { call: "Gọi ngay", book: "Đặt lịch tư vấn" },
    cases: [
      {
        id: "ielts",
        client: "Thi IELTS trên máy",
        place: "Việt Nam",
        summary: "Nền tảng thi thử IELTS trên máy tính: phòng thi mô phỏng đề thật, chấm điểm tự động và trang quản trị theo dõi học viên, doanh thu.",
        tags: ["Web app", "Phòng thi trực tuyến", "Dashboard quản trị"],
        images: [
          { src: "/projects/1.webp", alt: "Trang chủ Thi IELTS trên máy" },
          { src: "/projects/3.webp", alt: "Phòng thi IELTS Listening" },
          { src: "/projects/2.webp", alt: "Bảng điều khiển doanh thu" },
        ],
        url: "https://thiieltstrenmay.com",
      },
      {
        id: "blank",
        client: "BLANK Fensterläden",
        place: "Thụy Sĩ",
        summary: "Bộ cấu hình cửa chớp theo kích thước: khách chọn kiểu, vật liệu, loại gỗ và gửi yêu cầu báo giá ngay trên website.",
        tags: ["Product configurator", "Báo giá tự động", "Tiếng Đức"],
        images: [
          { src: "/projects/4.webp", alt: "Trang chủ BLANK Klapp- und Schiebeläden" },
          { src: "/projects/5.webp", alt: "Bước chọn kiểu cửa chớp" },
          { src: "/projects/6.webp", alt: "Bước chọn loại gỗ" },
        ],
      },
      {
        id: "cardverse",
        client: "CardVerseHub",
        place: "Việt Nam",
        summary: "Sàn giao dịch thẻ bài sưu tầm với mua bán, đấu giá và biểu đồ lịch sử giá cho từng thẻ.",
        tags: ["Marketplace", "Đấu giá", "Biểu đồ giá"],
        images: [
          { src: "/projects/7.webp", alt: "Trang chủ CardVerseHub" },
          { src: "/projects/8.webp", alt: "Lịch sử giá thẻ Pikachu Star" },
          { src: "/projects/9.webp", alt: "Danh mục thẻ bóng đá" },
        ],
      },
      {
        id: "tamnguon",
        client: "Tâm Nguồn Book",
        place: "Việt Nam",
        summary: "Website bán sách kèm trang quản trị đơn hàng, khách hàng và báo cáo doanh thu theo tháng.",
        tags: ["E-commerce", "Quản lý đơn hàng", "Báo cáo doanh thu"],
        images: [
          { src: "/projects/10.webp", alt: "Trang chủ Tâm Nguồn Book" },
          { src: "/projects/12.webp", alt: "Danh sách sản phẩm" },
          { src: "/projects/11.webp", alt: "Trang quản trị doanh thu" },
        ],
        url: "https://tamnguon.com",
      },
      {
        id: "bb",
        client: "bb brandworks",
        place: "Áo",
        summary: "Website giới thiệu và portfolio cho một agency thương hiệu tại Áo.",
        tags: ["Website doanh nghiệp", "Portfolio", "Tiếng Đức"],
        images: [
          { src: "/projects/bb-1.webp", alt: "Trang chủ bb brandworks" },
          { src: "/projects/bb-2.webp", alt: "Khách hàng của bb brandworks" },
        ],
      },
    ],
  },
  en: {
    nav: { work: "Work", services: "Services", process: "Process", about: "About", faq: "FAQ", blog: "Blog", cta: "Book a call", menu: "Open menu" },
    hero: {
      badge: "TC Technology & Software Solutions Co., Ltd.",
      title: "Software that runs the way your business does",
      lead: "Web apps, management systems, AI chatbots and process automation, designed around your own problem.",
      primaryTop: "Free 15-min call",
      primary: "Book a call",
      secondary: "See our work",
      stats: [
        { value: "50+", label: "Projects delivered" },
        { value: "3", label: "Countries with clients" },
        { value: "2+", label: "Years leading full-stack teams" },
      ],
      personAlt: "Tyler Tai Co, Tech Lead at TicoSystem",
      tags: { founder: "Founder", lead: "Tech Lead" },
      scroll: "Scroll down",
    },
    proof: { label: "Systems we have built for clients in Vietnam and Europe" },
    work: {
      eyebrow: "Our work",
      title: "Featured systems we have delivered",
      lead: "Every system is built around the client's own business rules. Pick a project to see what we made.",
      countOf: "featured projects, out of 50+ systems delivered",
      visit: "Visit site",
      viewImage: "Show image",
      listLabel: "Projects",
    },
    process: {
      eyebrow: "Process",
      title: "Four steps from idea to working software",
      lead: "You always know where the project stands and what you get next.",
      steps: [
        { title: "Discovery call", desc: "A 15-minute call to understand the problem, then a written scope and quote." },
        { title: "Interface design", desc: "We sketch the screens and flows for you to approve before any code is written." },
        { title: "Build and demo", desc: "We build in short stages and you try a working version at the end of each one." },
        { title: "Launch and support", desc: "We deploy, hand over the source code, train your team and keep supporting you." },
      ],
    },
    about: {
      eyebrow: "About us",
      title: "Hi, we're TicoSystem!",
      body: "TicoSystem is the brand of TC Technology and Software Solutions Co., Ltd., a software company registered in Vietnam. We take on the problems off-the-shelf software can't solve: custom workflows, complex pricing, and systems that need to connect with each other.",
      cta: "Talk to us",
      points: [
        "Registered company in Vietnam",
        "Clients in Vietnam, Switzerland and Austria",
        "Web apps, management systems, AI and automation",
        "Work directly with the Founder",
      ],
      factsTitle: "Company details",
      facts: { direct: "Talk directly with the Founder", taxId: "Tax ID", address: "Address" },
    },
    promises: {
      eyebrow: "Our commitment",
      title: "What you get with every project",
      lead: "Written into the contract of every project, large or small.",
      items: [
        "A contract and invoices from a registered company",
        "An itemised quote for every feature",
        "Full ownership of the source code and data",
        "GDPR-minded privacy and security",
        "Bug fixes after launch",
      ],
      note: "Your code. Your data.",
      offerTitle: "Free",
      offerSub: "15-minute discovery call",
      offerAlt: "Itemised quote after the call",
      offerCta: "Book now",
      guarantee: "Contract with TC Technology & Software Solutions Co., Ltd.",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      items: [
        { q: "How much does a project cost?", a: "It depends on scope. After the discovery call we send an itemised quote so you can decide what to build first and what can wait." },
        { q: "How soon will we have something usable?", a: "A focused first version usually ships within a few weeks, and we keep iterating from there. Exact milestones are written into the quote." },
        { q: "Do we own the code?", a: "Yes. All source code, designs and data are handed over to you when the project is complete." },
        { q: "Do you work with clients outside Vietnam?", a: "Yes. We work in English, have delivered for clients in Switzerland and Austria, and schedule meetings across time zones." },
        { q: "What happens after launch?", a: "We fix any issues that come up after handover and can continue with maintenance and new features under a separate agreement." },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Tell us what you need to solve",
      lead: "Pick a time for a free 15-minute call. No preparation needed: just describe what you want to fix or build.",
      direct: "Or reach us directly",
      email: "Email",
      phone: "Phone",
      whatsapp: "WhatsApp",
      zalo: "Zalo",
      linkedin: "LinkedIn",
      bookingNote: "Booked through Calendly. A Google Meet link is sent by email.",
      form: {
        tabMessage: "Send a message",
        tabBook: "Book a call",
        name: "Full name",
        namePh: "Jane Doe",
        email: "Email",
        emailPh: "you@company.com",
        phone: "Phone / WhatsApp",
        phonePh: "+41 79 123 45 67",
        optional: "optional",
        topic: "What do you need?",
        topicPh: "Choose a service",
        topics: ["Web app", "Management system", "AI chatbot", "Automation", "Product configurator", "E-commerce", "Other"],
        message: "Describe your project",
        messagePh: "For example: we track orders in spreadsheets and want a system that...",
        send: "Send message",
        sending: "Sending...",
        privacy: "We reply by email and only use these details to get back to you.",
        sentTitle: "Message sent",
        sentBody: "Thank you. We will read it carefully and reply to the email you left.",
        sendAnother: "Send another message",
        error: "The message could not be sent. Please try again, or email taicopgm@gmail.com directly.",
        mailtoNote: "Opening your email app with the message filled in. Just press send.",
      },
    },
    mobileBar: { call: "Call us", book: "Book a call" },
    cases: [
      {
        id: "ielts",
        client: "Thi IELTS trên máy",
        place: "Vietnam",
        summary: "A computer-based IELTS mock test platform: a realistic exam room, automatic scoring, and an admin dashboard for students and revenue.",
        tags: ["Web app", "Online exam room", "Admin dashboard"],
        images: [
          { src: "/projects/1.webp", alt: "Thi IELTS trên máy home page" },
          { src: "/projects/3.webp", alt: "IELTS listening test room" },
          { src: "/projects/2.webp", alt: "Revenue dashboard" },
        ],
        url: "https://thiieltstrenmay.com",
      },
      {
        id: "blank",
        client: "BLANK Fensterläden",
        place: "Switzerland",
        summary: "A made-to-measure shutter configurator: customers choose type, material and wood, then request a quote directly on the website.",
        tags: ["Product configurator", "Automated quotes", "German UI"],
        images: [
          { src: "/projects/4.webp", alt: "BLANK Klapp- und Schiebeläden home page" },
          { src: "/projects/5.webp", alt: "Choosing the shutter type" },
          { src: "/projects/6.webp", alt: "Choosing the wood type" },
        ],
      },
      {
        id: "cardverse",
        client: "CardVerseHub",
        place: "Vietnam",
        summary: "A collectible trading-card marketplace with buying, selling, auctions and a price-history chart for every card.",
        tags: ["Marketplace", "Auctions", "Price charts"],
        images: [
          { src: "/projects/7.webp", alt: "CardVerseHub home page" },
          { src: "/projects/8.webp", alt: "Price history for Pikachu Star" },
          { src: "/projects/9.webp", alt: "Soccer card listings" },
        ],
      },
      {
        id: "tamnguon",
        client: "Tâm Nguồn Book",
        place: "Vietnam",
        summary: "An online bookstore with an admin panel for orders, customers and monthly revenue reports.",
        tags: ["E-commerce", "Order management", "Revenue reports"],
        images: [
          { src: "/projects/10.webp", alt: "Tâm Nguồn Book home page" },
          { src: "/projects/12.webp", alt: "Product listing" },
          { src: "/projects/11.webp", alt: "Revenue admin panel" },
        ],
        url: "https://tamnguon.com",
      },
      {
        id: "bb",
        client: "bb brandworks",
        place: "Austria",
        summary: "Company website and portfolio for a brand agency in Austria.",
        tags: ["Company website", "Portfolio", "German UI"],
        images: [
          { src: "/projects/bb-1.webp", alt: "bb brandworks home page" },
          { src: "/projects/bb-2.webp", alt: "bb brandworks clients" },
        ],
      },
    ],
  },
};
