// Customer policies required for the e-commerce website notification
// (thông báo website thương mại điện tử). Bilingual; one source for the
// /policies and /vi/policies pages, the footer links and the sitemap.
//
// Company-specific facts (address, tax ID, bank account, support hours) are
// read from COMPANY in lib/company.ts so they stay in one place.

import { COMPANY } from "@/lib/company";

export type PolicyLangKey = "en" | "vi";

export interface PolicySection {
  h: string;
  p?: string[];
  ul?: string[];
  ol?: string[];
  /** Paragraphs shown after the lists. */
  after?: string[];
  note?: string;
}

export interface PolicyContent {
  title: string;
  navTitle: string;
  summary: string;
  sections: PolicySection[];
}

export interface Policy {
  slug: string;
  required: boolean;
  vi: PolicyContent;
  en: PolicyContent;
}

export const POLICY_EFFECTIVE_DATE = { vi: "23/10/2026", en: "23 October 2026" };

const C = COMPANY;
const addrVi = C.address.vi;
const addrEn = C.address.en;

const contactVi = [
  `Email: ${C.email}`,
  `Hotline / Zalo / WhatsApp: ${C.phoneDisplay}`,
  ...(addrVi ? [`Địa chỉ: ${addrVi}`] : []),
  "Form liên hệ trên website: ticosystem.com/vi/#contact",
];
const contactEn = [
  `Email: ${C.email}`,
  `Hotline / Zalo / WhatsApp: ${C.phoneDisplay}`,
  ...(addrEn ? [`Address: ${addrEn}`] : []),
  "Contact form on the website: ticosystem.com/#contact",
];

const companyLinesVi = [
  `Đơn vị: ${C.legalNameVi}`,
  ...(C.taxId ? [`Mã số thuế: ${C.taxId}`] : []),
  ...contactVi,
];
const companyLinesEn = [
  `Company: ${C.legalNameEn} (${C.legalNameVi})`,
  ...(C.taxId ? [`Tax ID: ${C.taxId}`] : []),
  ...contactEn,
];

const bankVi = C.bank.accountNumber
  ? [
      `Chủ tài khoản: ${C.legalNameVi.toUpperCase()}`,
      `Số tài khoản: ${C.bank.accountNumber}`,
      `Ngân hàng: ${C.bank.bankName}${C.bank.branch ? `, chi nhánh ${C.bank.branch}` : ""}`,
    ]
  : [
      `Chủ tài khoản: ${C.legalNameVi.toUpperCase()}`,
      "Số tài khoản và ngân hàng được ghi trong báo giá và hợp đồng của từng dự án.",
    ];
const bankEn = C.bank.accountNumber
  ? [
      `Account holder: ${C.legalNameVi.toUpperCase()}`,
      `Account number: ${C.bank.accountNumber}`,
      `Bank: ${C.bank.bankName}${C.bank.branch ? `, ${C.bank.branch} branch` : ""}`,
    ]
  : [
      `Account holder: ${C.legalNameVi.toUpperCase()}`,
      "The account number and bank are stated in the quotation and contract for each project.",
    ];

export const POLICIES: Policy[] = [
  // 1 ─────────────────────────────────────────────────────────────── privacy
  {
    slug: "privacy",
    required: true,
    vi: {
      title: "Chính sách bảo mật thông tin",
      navTitle: "Bảo mật thông tin",
      summary:
        "Chúng tôi thu thập những thông tin nào, dùng để làm gì, lưu trong bao lâu, ai được tiếp cận và cách bạn yêu cầu sửa hoặc xóa dữ liệu.",
      sections: [
        {
          h: "1. Phạm vi áp dụng",
          p: [
            `Chính sách này áp dụng cho website ticosystem.com và các kênh liên hệ của ${C.legalNameVi} (sau đây gọi là "TicoSystem" hoặc "chúng tôi"), gồm email, điện thoại, Zalo, WhatsApp và công cụ đặt lịch.`,
          ],
        },
        {
          h: "2. Thông tin chúng tôi thu thập",
          ul: [
            "Thông tin bạn tự cung cấp khi gửi form liên hệ, đặt lịch hoặc nhắn tin: họ tên, email, số điện thoại, tên công ty và nội dung yêu cầu.",
            "Thông tin khi ký hợp đồng: tên doanh nghiệp, mã số thuế, địa chỉ xuất hóa đơn, người đại diện và thông tin thanh toán.",
            "Dữ liệu kỹ thuật được ghi nhận tự động khi truy cập website: địa chỉ IP, loại trình duyệt, thiết bị và thời gian truy cập. Website không dùng cookie quảng cáo. Khi bạn dùng công cụ đặt lịch Calendly, Calendly có thể dùng cookie theo chính sách riêng của họ.",
            "Dữ liệu trong hệ thống của khách hàng: khi triển khai hoặc bảo trì, chúng tôi có thể cần truy cập dữ liệu trong hệ thống của bạn. Việc truy cập chỉ nhằm thực hiện công việc theo hợp đồng.",
          ],
        },
        {
          h: "3. Mục đích sử dụng",
          ul: [
            "Trả lời câu hỏi, tư vấn và gửi báo giá.",
            "Ký kết, thực hiện hợp đồng, xuất hóa đơn và thu tiền.",
            "Hỗ trợ kỹ thuật, bảo hành và bảo trì.",
            "Thông báo về tiến độ dự án và các thay đổi liên quan đến dịch vụ bạn đang dùng.",
            "Thực hiện nghĩa vụ theo quy định của pháp luật.",
          ],
          note: "Chúng tôi không bán, không cho thuê và không chia sẻ thông tin của bạn để quảng cáo.",
        },
        {
          h: "4. Thời gian lưu trữ",
          ul: [
            "Yêu cầu liên hệ không dẫn đến hợp tác: lưu tối đa 24 tháng kể từ lần trao đổi cuối, sau đó xóa.",
            "Thông tin khách hàng và hợp đồng: lưu trong thời gian thực hiện hợp đồng và trong thời hạn lưu trữ chứng từ theo quy định về kế toán, thuế.",
            "Dữ liệu trong hệ thống của khách hàng: được bàn giao lại hoặc xóa khỏi máy của chúng tôi khi kết thúc hợp đồng, theo yêu cầu của khách hàng.",
          ],
        },
        {
          h: "5. Những ai được tiếp cận thông tin",
          ul: [
            "Founder và nhân sự trực tiếp phụ trách dự án của bạn.",
            "Nhà cung cấp dịch vụ giúp chúng tôi vận hành (email, đặt lịch, máy chủ lưu trữ), chỉ trong phạm vi cần thiết để cung cấp dịch vụ đó.",
            "Cơ quan nhà nước có thẩm quyền khi có yêu cầu theo quy định của pháp luật.",
          ],
        },
        {
          h: "6. Cách chúng tôi bảo vệ thông tin",
          p: [
            "Website dùng kết nối mã hóa HTTPS. Quyền truy cập dữ liệu được giới hạn theo người và theo dự án. Mật khẩu và khóa truy cập hệ thống của khách hàng được lưu riêng, không gửi qua kênh công khai. Chúng tôi ký thỏa thuận bảo mật (NDA) khi khách hàng yêu cầu.",
          ],
        },
        {
          h: "7. Quyền của bạn và cách yêu cầu sửa, xóa dữ liệu",
          p: [
            "Bạn có quyền xem, chỉnh sửa, yêu cầu xóa thông tin cá nhân của mình, rút lại sự đồng ý hoặc phản đối việc xử lý dữ liệu.",
            `Để thực hiện, gửi email tới ${C.email} với tiêu đề "Yêu cầu về dữ liệu cá nhân", hoặc liên hệ qua Zalo/điện thoại ${C.phoneDisplay}. Chúng tôi xác nhận đã nhận yêu cầu trong 1 ngày làm việc và hoàn tất trong 72 giờ kể từ khi xác minh được người yêu cầu.`,
            "Một số thông tin như hóa đơn, chứng từ thanh toán phải được lưu theo quy định pháp luật nên không thể xóa trước thời hạn lưu trữ.",
          ],
        },
        { h: "8. Đơn vị chịu trách nhiệm và liên hệ", ul: companyLinesVi },
        {
          h: "9. Thay đổi chính sách",
          p: [
            "Chính sách có thể được cập nhật khi quy định pháp luật hoặc dịch vụ thay đổi. Bản mới được đăng tại trang này kèm ngày hiệu lực.",
          ],
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      navTitle: "Privacy",
      summary:
        "What information we collect, why we use it, how long we keep it, who can access it, and how you can ask us to correct or delete it.",
      sections: [
        {
          h: "1. Scope",
          p: [
            `This policy applies to ticosystem.com and to the contact channels of ${C.legalNameEn} ("TicoSystem", "we"), including email, phone, Zalo, WhatsApp and the booking tool.`,
          ],
        },
        {
          h: "2. Information we collect",
          ul: [
            "Information you give us through the contact form, a booking or a message: name, email, phone number, company name and the content of your request.",
            "Information needed for a contract: company name, tax ID, invoicing address, legal representative and payment details.",
            "Technical data recorded automatically when you visit the website: IP address, browser, device and time of visit. We do not use advertising cookies. When you use the Calendly booking tool, Calendly may set cookies under its own policy.",
            "Data inside a client's systems: during development or maintenance we may need access to data in your systems. We access it only to carry out the work under the contract.",
          ],
        },
        {
          h: "3. How we use it",
          ul: [
            "To answer questions, advise and send quotations.",
            "To sign and perform contracts, issue invoices and collect payment.",
            "To provide technical support, warranty and maintenance.",
            "To keep you informed about project progress and changes to services you use.",
            "To meet our legal obligations.",
          ],
          note: "We do not sell or rent your information, and we do not share it for advertising.",
        },
        {
          h: "4. How long we keep it",
          ul: [
            "Enquiries that do not lead to a project: kept for up to 24 months after the last exchange, then deleted.",
            "Client and contract information: kept for the duration of the contract and for the retention period required by accounting and tax law.",
            "Data inside a client's systems: returned or deleted from our machines when the contract ends, as the client requests.",
          ],
        },
        {
          h: "5. Who can access it",
          ul: [
            "The founder and the staff working directly on your project.",
            "Service providers that help us operate (email, booking, hosting), only as far as needed to provide that service.",
            "Competent state authorities when required by law.",
          ],
        },
        {
          h: "6. How we protect it",
          p: [
            "The website uses encrypted HTTPS connections. Access to data is limited by person and by project. Passwords and access keys for client systems are stored separately and never sent over public channels. We sign a non-disclosure agreement (NDA) on request.",
          ],
        },
        {
          h: "7. Your rights and how to correct or delete your data",
          p: [
            "You may view, correct or ask us to delete your personal information, withdraw consent, or object to its processing.",
            `Email ${C.email} with the subject "Personal data request", or contact us by Zalo/phone at ${C.phoneDisplay}. We confirm receipt within 1 working day and complete the request within 72 hours of verifying who you are.`,
            "Some records, such as invoices and payment documents, must be kept by law and cannot be deleted before their retention period ends.",
          ],
        },
        { h: "8. Data controller and contact", ul: companyLinesEn },
        {
          h: "9. Changes to this policy",
          p: [
            "We may update this policy when the law or our services change. The new version is published on this page with its effective date.",
          ],
        },
      ],
    },
  },

  // 2 ──────────────────────────────────────────────────────────── complaints
  {
    slug: "complaints",
    required: true,
    vi: {
      title: "Chính sách tiếp nhận và giải quyết khiếu nại",
      navTitle: "Tiếp nhận khiếu nại",
      summary: "Các kênh tiếp nhận phản ánh, khiếu nại, quy trình xử lý và thời hạn phản hồi.",
      sections: [
        { h: "1. Kênh tiếp nhận", ul: contactVi, note: `Thời gian tiếp nhận qua điện thoại và Zalo: ${C.supportHours.vi}. Email và form liên hệ tiếp nhận 24/7.` },
        {
          h: "2. Thông tin cần cung cấp",
          ul: [
            "Họ tên, tên doanh nghiệp và thông tin liên hệ.",
            "Tên dự án hoặc số hợp đồng (nếu có).",
            "Mô tả vấn đề, thời điểm xảy ra và ảnh chụp màn hình, video hoặc tài liệu liên quan.",
            "Mong muốn của bạn về cách giải quyết.",
          ],
        },
        {
          h: "3. Quy trình và thời hạn xử lý",
          ol: [
            "Tiếp nhận: chúng tôi xác nhận đã nhận phản ánh trong 1 ngày làm việc.",
            "Xác minh: liên hệ với bạn để làm rõ thông tin nếu cần.",
            "Đề xuất phương án: gửi phương án giải quyết trong 3 ngày làm việc kể từ khi tiếp nhận.",
            "Thực hiện và thông báo kết quả bằng email hoặc văn bản.",
          ],
          after: [
            "Tổng thời hạn giải quyết không quá 7 ngày làm việc. Trường hợp phức tạp cần thêm thời gian, chúng tôi thông báo lý do và thời hạn mới, tối đa 15 ngày làm việc.",
            "Với sự cố làm hệ thống ngừng hoạt động trong thời gian bảo hành hoặc bảo trì, chúng tôi phản hồi trong 4 giờ làm việc và ưu tiên khắc phục tạm thời trước.",
          ],
        },
        {
          h: "4. Nguyên tắc giải quyết",
          p: [
            "Khiếu nại được giải quyết trên tinh thần thương lượng, hòa giải và tôn trọng quyền lợi của khách hàng. Trường hợp không đạt được thỏa thuận, mỗi bên có quyền đưa tranh chấp ra cơ quan nhà nước có thẩm quyền hoặc Tòa án theo quy định của pháp luật Việt Nam.",
            "Thông tin trong khiếu nại được bảo mật theo Chính sách bảo mật thông tin.",
          ],
        },
      ],
    },
    en: {
      title: "Complaints Handling Policy",
      navTitle: "Complaints",
      summary: "How to send feedback or a complaint, how we handle it and how quickly we respond.",
      sections: [
        { h: "1. Where to send it", ul: contactEn, note: `Phone and Zalo hours: ${C.supportHours.en}. Email and the contact form are open 24/7.` },
        {
          h: "2. What to include",
          ul: [
            "Your name, company and contact details.",
            "Project name or contract number (if any).",
            "A description of the issue, when it happened, and screenshots, videos or documents.",
            "The outcome you would like.",
          ],
        },
        {
          h: "3. Process and timelines",
          ol: [
            "Receipt: we confirm we have received it within 1 working day.",
            "Verification: we contact you to clarify details if needed.",
            "Proposal: we send a proposed resolution within 3 working days of receipt.",
            "Resolution: we carry it out and confirm the result by email or in writing.",
          ],
          after: [
            "The whole process takes no more than 7 working days. If a complex case needs longer, we explain why and give a new date, at most 15 working days.",
            "If a system is down during a warranty or maintenance period, we respond within 4 working hours and prioritise a temporary fix.",
          ],
        },
        {
          h: "4. Principles",
          p: [
            "Complaints are resolved through negotiation and mediation, respecting the client's interests. If no agreement is reached, either party may bring the dispute to a competent authority or court under Vietnamese law.",
            "Information in a complaint is kept confidential under our Privacy Policy.",
          ],
        },
      ],
    },
  },

  // 3 ─────────────────────────────────────────────────────────────── pricing
  {
    slug: "pricing",
    required: true,
    vi: {
      title: "Chính sách giá",
      navTitle: "Chính sách giá",
      summary: "Cách chúng tôi báo giá, thuế giá trị gia tăng và các khoản phí có thể phát sinh.",
      sections: [
        {
          h: "1. Báo giá theo từng dự án",
          p: [
            "Mỗi hệ thống được thiết kế riêng theo nghiệp vụ của khách hàng nên chúng tôi không áp dụng bảng giá cố định. Sau buổi trao đổi nhu cầu, chúng tôi gửi báo giá bằng văn bản, liệt kê từng hạng mục, thời gian thực hiện và chi phí.",
            "Báo giá có hiệu lực 30 ngày kể từ ngày gửi. Giá chính thức là giá ghi trong hợp đồng.",
            "Dịch vụ định kỳ (bảo trì, quản lý máy chủ, hỗ trợ kỹ thuật) được báo giá theo tháng hoặc năm.",
          ],
        },
        {
          h: "2. Thuế giá trị gia tăng (VAT)",
          p: [
            "Báo giá ghi rõ giá đã bao gồm hay chưa bao gồm thuế GTGT cho từng hạng mục, theo quy định thuế hiện hành áp dụng cho loại dịch vụ đó.",
          ],
        },
        {
          h: "3. Đơn vị tiền tệ",
          p: ["Khách hàng trong nước: Việt Nam đồng (VND). Khách hàng nước ngoài: USD hoặc EUR theo thỏa thuận trong hợp đồng."],
        },
        {
          h: "4. Chi phí có thể phát sinh",
          p: ["Các khoản dưới đây chỉ phát sinh khi bạn đồng ý trước bằng văn bản hoặc email:"],
          ul: [
            "Thay đổi hoặc bổ sung yêu cầu ngoài phạm vi đã ký.",
            "Tên miền, máy chủ, hosting, chứng chỉ bảo mật.",
            "Dịch vụ bên thứ ba: API AI, SMS, email gửi hàng loạt, cổng thanh toán, bản đồ, giấy phép phần mềm, font chữ, hình ảnh bản quyền. Các khoản này tính theo giá của nhà cung cấp.",
            "Phí chuyển tiền quốc tế (với khách hàng nước ngoài).",
          ],
          note: "Giá trong hợp đồng không thay đổi trong suốt thời gian thực hiện, trừ khi hai bên thống nhất thay đổi phạm vi công việc.",
        },
      ],
    },
    en: {
      title: "Pricing Policy",
      navTitle: "Pricing",
      summary: "How we quote, how VAT is shown and which extra costs may apply.",
      sections: [
        {
          h: "1. Project-based quotes",
          p: [
            "Every system is built around the client's own workflow, so we do not use a fixed price list. After a discovery call we send a written quotation listing each item, its timeline and cost.",
            "A quotation is valid for 30 days from the date it is sent. The binding price is the one in the contract.",
            "Recurring services (maintenance, server management, technical support) are quoted per month or per year.",
          ],
        },
        {
          h: "2. Value added tax (VAT)",
          p: ["Each quotation states whether each item's price includes or excludes VAT, according to the tax rules that apply to that type of service."],
        },
        {
          h: "3. Currency",
          p: ["Clients in Vietnam: Vietnamese dong (VND). Clients abroad: USD or EUR as agreed in the contract."],
        },
        {
          h: "4. Possible extra costs",
          p: ["The following only apply with your prior agreement in writing or by email:"],
          ul: [
            "Changes or additions outside the agreed scope.",
            "Domain names, servers, hosting and SSL certificates.",
            "Third-party services: AI APIs, SMS, bulk email, payment gateways, maps, software licences, fonts and licensed images, charged at the provider's price.",
            "International transfer fees (for clients abroad).",
          ],
          note: "The contract price does not change during the project unless both parties agree to change the scope.",
        },
      ],
    },
  },

  // 4 ─────────────────────────────────────────────────────────────── payment
  {
    slug: "payment",
    required: true,
    vi: {
      title: "Chính sách thanh toán",
      navTitle: "Thanh toán",
      summary: "Hình thức thanh toán, tài khoản công ty và các đợt thanh toán của một dự án.",
      sections: [
        {
          h: "1. Hình thức thanh toán",
          ul: [
            "Chuyển khoản vào tài khoản ngân hàng đứng tên công ty (khuyến nghị).",
            "Tiền mặt tại văn phòng công ty, có phiếu thu.",
            "Khách hàng nước ngoài: chuyển khoản quốc tế hoặc cổng thanh toán quốc tế theo thỏa thuận.",
          ],
        },
        {
          h: "2. Tài khoản nhận thanh toán",
          ul: bankVi,
          note: "Chỉ chuyển khoản vào tài khoản đứng tên công ty. Vui lòng ghi tên doanh nghiệp và số hợp đồng trong nội dung chuyển khoản.",
        },
        {
          h: "3. Các đợt thanh toán",
          p: ["Với dự án phát triển phần mềm, website:"],
          ol: [
            "Đợt 1: đặt cọc 30% giá trị hợp đồng khi ký hợp đồng.",
            "Đợt 2: 40% khi hoàn thành và duyệt giai đoạn phát triển chính (bản demo chạy thật).",
            "Đợt 3: 30% còn lại khi nghiệm thu và bàn giao.",
          ],
          ul: [
            "Dự án nhỏ, thời gian ngắn có thể chia 2 đợt: đặt cọc 50% khi ký hợp đồng, 50% khi nghiệm thu.",
            "Dịch vụ định kỳ (bảo trì, máy chủ) thanh toán trước theo tháng, quý hoặc năm.",
          ],
          note: "Tỷ lệ và số đợt cụ thể được ghi trong hợp đồng của từng dự án. Khoản đặt cọc đợt 1 không được hoàn lại nếu khách hàng tự hủy hợp đồng, xem Chính sách cung cấp dịch vụ, chấm dứt dịch vụ và hoàn tiền.",
        },
        {
          h: "4. Thời hạn thanh toán",
          p: [
            "Mỗi đợt được thanh toán trong 7 ngày làm việc kể từ khi nhận đề nghị thanh toán. Nếu chậm thanh toán, chúng tôi có thể tạm dừng triển khai cho đến khi nhận được thanh toán và tiến độ dự án được lùi tương ứng.",
          ],
        },
        {
          h: "5. Hóa đơn",
          p: ["Chúng tôi xuất hóa đơn điện tử cho mỗi khoản thanh toán theo quy định của pháp luật."],
        },
      ],
    },
    en: {
      title: "Payment Policy",
      navTitle: "Payment",
      summary: "Payment methods, our company account and the payment schedule for a project.",
      sections: [
        {
          h: "1. Payment methods",
          ul: [
            "Bank transfer to the company's bank account (recommended).",
            "Cash at our office, against an official receipt.",
            "Clients abroad: international bank transfer or an international payment gateway as agreed.",
          ],
        },
        {
          h: "2. Receiving account",
          ul: bankEn,
          note: "Only pay into an account held in the company's name. Please include your company name and contract number in the transfer reference.",
        },
        {
          h: "3. Payment schedule",
          p: ["For software and website development projects:"],
          ol: [
            "Instalment 1: a 30% deposit on signing the contract.",
            "Instalment 2: 40% when the main development stage is completed and approved (a working demo).",
            "Instalment 3: the remaining 30% on acceptance and handover.",
          ],
          ul: [
            "Small, short projects may be paid in two parts: a 50% deposit on signing and 50% on acceptance.",
            "Recurring services (maintenance, servers) are paid in advance per month, quarter or year.",
          ],
          note: "The exact percentages and number of instalments are set out in each project's contract. The first-instalment deposit is not refunded if the client cancels the contract; see the Service Delivery, Termination and Refund Policy.",
        },
        {
          h: "4. Payment terms",
          p: [
            "Each instalment is due within 7 working days of the payment request. If a payment is late, we may pause work until it is received, and the project timeline moves back accordingly.",
          ],
        },
        {
          h: "5. Invoices",
          p: ["We issue an electronic invoice for every payment as required by law."],
        },
      ],
    },
  },

  // 5 ──────────────────────────────────────────────────── service conditions
  {
    slug: "service-conditions",
    required: true,
    vi: {
      title: "Điều kiện và giới hạn cung cấp dịch vụ",
      navTitle: "Điều kiện dịch vụ",
      summary: "Phạm vi dịch vụ, những việc chúng tôi không nhận làm và những gì khách hàng cần chuẩn bị.",
      sections: [
        {
          h: "1. Phạm vi cung cấp",
          ul: [
            "Thiết kế và lập trình website, web app.",
            "Phần mềm và hệ thống quản lý doanh nghiệp.",
            "Chatbot AI và tự động hóa quy trình.",
            "Công cụ cấu hình sản phẩm và báo giá (product configurator).",
            "Website bán hàng, sàn giao dịch, cổng khách hàng.",
            "Bảo trì, nâng cấp và hỗ trợ kỹ thuật cho các hệ thống trên.",
          ],
          note: "Phạm vi cụ thể của từng dự án được ghi trong hợp đồng và phụ lục. Việc ngoài phạm vi này được xem là yêu cầu bổ sung và báo giá riêng.",
        },
        {
          h: "2. Những việc chúng tôi không nhận làm",
          ul: [
            "Hệ thống phục vụ hoạt động trái pháp luật: cờ bạc, cá độ, lừa đảo, kinh doanh đa cấp trái phép, nội dung đồi trụy hoặc kích động.",
            "Sao chép hoặc vi phạm bản quyền, nhãn hiệu, thiết kế của bên khác.",
            "Website hoặc ứng dụng giả mạo tổ chức, cá nhân khác.",
            "Công cụ xâm nhập hệ thống, phát tán mã độc, gửi thư rác hoặc thu thập dữ liệu cá nhân trái phép.",
            "Can thiệp vào hệ thống mà khách hàng không có quyền sở hữu hoặc quyền quản trị.",
          ],
        },
        {
          h: "3. Khách hàng cần cung cấp",
          ul: [
            "Một người liên hệ chính có quyền quyết định về dự án.",
            "Nội dung (văn bản, hình ảnh, logo) và cam kết có quyền sử dụng hợp pháp các nội dung này.",
            "Tài khoản và quyền truy cập cần thiết: tên miền, hosting, các hệ thống cần kết nối.",
            "Phản hồi và duyệt từng giai đoạn trong thời hạn đã thống nhất (mặc định 3 ngày làm việc). Chậm phản hồi sẽ làm tiến độ lùi tương ứng.",
            "Thanh toán đúng hạn theo Chính sách thanh toán.",
          ],
        },
        {
          h: "4. Giới hạn trách nhiệm",
          ul: [
            "Khách hàng chịu trách nhiệm về nội dung do mình cung cấp hoặc đăng tải lên hệ thống.",
            "Chúng tôi hỗ trợ khắc phục nhưng không chịu trách nhiệm về sự cố do nhà cung cấp bên thứ ba (hosting, API, cổng thanh toán) gây ra.",
            "Lỗi phát sinh do khách hàng hoặc bên khác tự sửa mã nguồn sau bàn giao nằm ngoài phạm vi bảo hành.",
          ],
        },
        {
          h: "5. Quyền sở hữu",
          p: [
            "Sau khi thanh toán đủ, khách hàng sở hữu toàn bộ mã nguồn, thiết kế và dữ liệu của dự án. Chúng tôi được giới thiệu tên dự án trong danh mục dự án đã thực hiện, trừ khi khách hàng yêu cầu không công khai.",
          ],
        },
      ],
    },
    en: {
      title: "Service Conditions and Limitations",
      navTitle: "Service conditions",
      summary: "What we provide, what we do not take on, and what clients need to supply.",
      sections: [
        {
          h: "1. Scope of services",
          ul: [
            "Website and web application design and development.",
            "Business management software and systems.",
            "AI chatbots and process automation.",
            "Product configurators and quoting tools.",
            "E-commerce sites, marketplaces and customer portals.",
            "Maintenance, upgrades and technical support for the above.",
          ],
          note: "The exact scope of each project is set out in its contract and appendices. Anything outside it is treated as an additional request and quoted separately.",
        },
        {
          h: "2. What we do not take on",
          ul: [
            "Systems for illegal activities: gambling, betting, fraud, unlawful multi-level marketing, obscene or inflammatory content.",
            "Copying or infringing another party's copyright, trademarks or designs.",
            "Websites or apps impersonating another organisation or person.",
            "Tools for hacking, spreading malware, sending spam or collecting personal data unlawfully.",
            "Work on systems the client does not own or administer.",
          ],
        },
        {
          h: "3. What clients need to provide",
          ul: [
            "One main contact with decision-making authority for the project.",
            "Content (text, images, logos) and confirmation that they have the right to use it.",
            "The accounts and access needed: domain, hosting and any systems to connect to.",
            "Feedback and approval at each stage within the agreed time (3 working days by default). Late feedback moves the timeline back accordingly.",
            "Payment on time under the Payment Policy.",
          ],
        },
        {
          h: "4. Limitation of liability",
          ul: [
            "The client is responsible for content they supply or publish on the system.",
            "We help resolve, but are not liable for, incidents caused by third-party providers (hosting, APIs, payment gateways).",
            "Faults caused by the client or others modifying the source code after handover are outside the warranty.",
          ],
        },
        {
          h: "5. Ownership",
          p: [
            "Once paid in full, the client owns all source code, designs and data of the project. We may list the project name in our portfolio unless the client asks us not to.",
          ],
        },
      ],
    },
  },

  // 6 ─────────────────────────────────────────── delivery, termination, refunds
  {
    slug: "delivery-termination-refund",
    required: true,
    vi: {
      title: "Chính sách cung cấp dịch vụ, chấm dứt dịch vụ và hoàn tiền",
      navTitle: "Bàn giao, chấm dứt và hoàn tiền",
      summary: "Quy trình triển khai và bàn giao, bảo hành, điều kiện chấm dứt hợp đồng và chính sách hoàn tiền.",
      sections: [
        {
          h: "1. Quy trình triển khai và bàn giao",
          ol: [
            "Trao đổi nhu cầu và gửi báo giá.",
            "Ký hợp đồng và thanh toán đặt cọc.",
            "Thiết kế giao diện, khách hàng duyệt trước khi lập trình.",
            "Lập trình theo từng giai đoạn, demo bản chạy thật cuối mỗi giai đoạn.",
            "Kiểm thử và nghiệm thu: khách hàng kiểm tra theo danh sách chức năng đã thống nhất và phản hồi trong 5 ngày làm việc. Quá thời hạn này mà không có ý kiến, sản phẩm được xem là đã được chấp nhận, trừ khi hợp đồng quy định khác.",
            "Bàn giao: triển khai lên máy chủ, bàn giao mã nguồn, tài khoản quản trị và tài liệu hướng dẫn sử dụng, ký biên bản bàn giao.",
          ],
          after: ["Hình thức làm việc: trực tuyến qua email, Zalo và họp video; gặp trực tiếp khi cần và khi hai bên thuận tiện."],
        },
        {
          h: "2. Bảo hành",
          ul: [
            "Bảo hành miễn phí 3 tháng kể từ ngày nghiệm thu với các lỗi phát sinh từ mã nguồn do chúng tôi viết, so với chức năng đã thống nhất.",
            "Thời gian phản hồi lỗi trong bảo hành: 1 ngày làm việc; lỗi làm hệ thống ngừng hoạt động: 4 giờ làm việc.",
            "Không thuộc bảo hành: tính năng mới hoặc thay đổi yêu cầu; lỗi do khách hàng hoặc bên khác sửa mã nguồn; lỗi do hạ tầng hoặc dịch vụ bên thứ ba; sử dụng không đúng hướng dẫn.",
            "Sau thời gian bảo hành, khách hàng có thể đăng ký gói bảo trì theo tháng hoặc năm.",
          ],
        },
        {
          h: "3. Chấm dứt dịch vụ",
          ul: [
            "Hai bên thỏa thuận chấm dứt hợp đồng bằng văn bản.",
            "Một bên có quyền đơn phương chấm dứt nếu bên kia vi phạm nghĩa vụ trong hợp đồng và không khắc phục trong 15 ngày kể từ khi nhận thông báo bằng văn bản.",
            "Chúng tôi có quyền chấm dứt ngay nếu phát hiện dịch vụ được dùng cho mục đích trái pháp luật.",
            "Nếu khách hàng không phản hồi hoặc không phối hợp (không duyệt thiết kế, không cung cấp nội dung, tài khoản cần thiết) trong 30 ngày liên tục mà không có lý do chính đáng, chúng tôi có quyền tạm dừng dự án và gửi thông báo. Nếu sau 15 ngày kể từ thông báo vẫn không có phản hồi, hợp đồng được xem là do khách hàng chấm dứt và áp dụng mục 4.3.",
            "Dịch vụ định kỳ: khách hàng có thể ngừng gia hạn bằng cách thông báo trước ít nhất 15 ngày trước kỳ thanh toán tiếp theo.",
            "Khi chấm dứt, hai bên đối chiếu khối lượng công việc đã hoàn thành. Chúng tôi bàn giao phần việc đã làm tương ứng với số tiền đã được thanh toán.",
          ],
          note: `Thông báo chấm dứt hoặc hủy hợp đồng chỉ có hiệu lực khi gửi bằng văn bản hoặc email từ địa chỉ email đã ghi trong hợp đồng tới ${C.email}. Tin nhắn Zalo hoặc chat không được dùng làm thông báo chấm dứt chính thức. Ngày nhận email hoặc văn bản là ngày chấm dứt được tính.`,
        },
        {
          h: "4.1. Hoàn 100% số tiền đã thanh toán",
          p: [
            "Chúng tôi hoàn lại 100% số tiền khách hàng đã thanh toán nếu không thể bắt đầu dự án đúng thời gian đã cam kết do lỗi chủ quan từ phía chúng tôi, hoặc chúng tôi đơn phương chấm dứt hợp đồng mà không xuất phát từ lỗi hay vi phạm của khách hàng.",
          ],
        },
        {
          h: "4.2. Tiền đặt cọc không hoàn lại khi khách hàng tự hủy",
          p: [
            "Khoản thanh toán đợt 1 khi ký hợp đồng là tiền đặt cọc để bảo đảm việc thực hiện hợp đồng. Khi dự án hoàn thành, tiền đặt cọc được trừ vào giá trị hợp đồng.",
            "Nếu khách hàng đơn phương chấm dứt hoặc hủy hợp đồng mà không do lỗi của chúng tôi, ở bất kỳ giai đoạn nào, tiền đặt cọc không được hoàn lại. Khoản này bù đắp chi phí tư vấn, khảo sát yêu cầu, lập kế hoạch và nhân sự chúng tôi đã dành riêng cho dự án.",
          ],
        },
        {
          h: "4.3. Khách hàng chấm dứt khi dự án đang thực hiện",
          ul: [
            "Khối lượng công việc được chốt tại thời điểm chúng tôi nhận được thông báo chấm dứt chính thức (văn bản hoặc email như mục 3).",
            "Giá trị công việc đã hoàn thành được xác định theo tỷ lệ phần trăm các hạng mục, giai đoạn đã thực hiện, dựa trên phụ lục hợp đồng hoặc báo giá chi tiết.",
            "Số tiền chúng tôi giữ lại bằng giá trị công việc đã hoàn thành hoặc tiền đặt cọc, tùy khoản nào lớn hơn. Phần đã thanh toán vượt quá số này được hoàn lại cho khách hàng.",
            "Nếu số tiền đã thanh toán nhỏ hơn giá trị công việc đã hoàn thành: khách hàng thanh toán phần còn thiếu trong 7 ngày làm việc.",
          ],
          after: [
            "Chúng tôi gửi biên bản đối chiếu khối lượng kèm bằng chứng (bản demo, mã nguồn, lịch sử bàn giao) trong 5 ngày làm việc kể từ khi nhận thông báo chấm dứt. Nếu khách hàng không ký hoặc không phản hồi biên bản trong 7 ngày làm việc kể từ khi nhận, khối lượng nêu trong biên bản được dùng làm căn cứ thanh lý hợp đồng.",
            "Ví dụ với hợp đồng 100 triệu đồng, đặt cọc 30 triệu: khách hàng hủy khi công việc hoàn thành tương đương 20 triệu thì không được hoàn tiền; đã thanh toán 70 triệu và công việc hoàn thành tương đương 50 triệu thì được hoàn 20 triệu; công việc hoàn thành tương đương 80 triệu thì khách hàng thanh toán thêm 10 triệu.",
          ],
        },
        {
          h: "4.4. Các trường hợp không hoàn tiền",
          ul: [
            "Tiền đặt cọc khi khách hàng tự hủy hợp đồng (mục 4.2).",
            "Các hạng mục, giai đoạn đã được khách hàng nghiệm thu hoặc xác nhận đồng ý bằng văn bản, email hoặc kênh trao đổi chính thức đã ghi trong hợp đồng.",
            "Chi phí đã thanh toán cho bên thứ ba theo yêu cầu của dự án: tên miền, hosting, máy chủ, chứng chỉ SSL, API, plugin, theme hoặc giấy phép trả phí. Các tài khoản, tài sản này được bàn giao lại nguyên trạng cho khách hàng.",
            "Phí duy trì, vận hành hoặc dịch vụ định kỳ của kỳ đã sử dụng hoặc đang sử dụng.",
          ],
        },
        {
          h: "4.5. Phương thức và thời hạn hoàn tiền",
          ul: [
            "Tiền hoàn được chuyển khoản vào tài khoản ngân hàng do khách hàng chỉ định bằng văn bản hoặc email chính thức.",
            "Thời hạn: trong 15 ngày làm việc kể từ ngày hai bên hoàn tất ký biên bản thanh lý hợp đồng và xác nhận công nợ.",
          ],
        },
      ],
    },
    en: {
      title: "Service Delivery, Termination and Refund Policy",
      navTitle: "Delivery, termination & refunds",
      summary: "How we deliver and hand over, our warranty, when a contract can end, and when we refund.",
      sections: [
        {
          h: "1. Delivery and handover",
          ol: [
            "Discovery call and quotation.",
            "Contract signing and deposit.",
            "Interface design, approved by the client before development.",
            "Development in stages, with a working demo at the end of each stage.",
            "Testing and acceptance: the client checks the agreed feature list and responds within 5 working days. If there is no response within this period, the work is considered accepted unless the contract says otherwise.",
            "Handover: deployment to the server, handover of source code, admin accounts and user documentation, and a signed handover record.",
          ],
          after: ["We work online by email, Zalo and video calls, and meet in person when needed and convenient for both sides."],
        },
        {
          h: "2. Warranty",
          ul: [
            "A free 3-month warranty from the acceptance date covers faults in the code we wrote, measured against the agreed features.",
            "Response time during warranty: 1 working day; for a system that is down: 4 working hours.",
            "Not covered: new features or changed requirements; faults caused by the client or others modifying the code; faults in third-party infrastructure or services; use contrary to the instructions.",
            "After the warranty, clients can subscribe to a monthly or yearly maintenance plan.",
          ],
        },
        {
          h: "3. Termination",
          ul: [
            "Both parties may agree in writing to end the contract.",
            "Either party may terminate if the other breaches the contract and does not remedy it within 15 days of written notice.",
            "We may terminate immediately if the service is used for an unlawful purpose.",
            "If the client does not respond or cooperate (no design approval, no content or required access) for 30 consecutive days without good reason, we may pause the project and send a notice. If there is still no response 15 days after that notice, the contract is treated as terminated by the client and section 4.3 applies.",
            "Recurring services: clients can stop renewing by giving at least 15 days' notice before the next billing period.",
            "On termination, both parties reconcile the work completed. We hand over the work done in proportion to the amount paid.",
          ],
          note: `A termination or cancellation notice is only valid when sent in writing, or by email from the address named in the contract to ${C.email}. Zalo or chat messages are not accepted as formal notice. The termination date is the date the email or letter is received.`,
        },
        {
          h: "4.1. Full refund of the amount paid",
          p: [
            "We refund 100% of the amount the client has paid if we cannot start the project on the committed date because of our own fault, or if we terminate the contract without any fault or breach by the client.",
          ],
        },
        {
          h: "4.2. Deposit is non-refundable if the client cancels",
          p: [
            "The first instalment paid on signing is a deposit securing the contract. When the project is completed, the deposit is credited against the contract value.",
            "If the client terminates or cancels the contract without any fault on our side, at any stage, the deposit is not refunded. It covers the consulting, requirements analysis, planning and team time we have reserved for the project.",
          ],
        },
        {
          h: "4.3. Client terminates during the project",
          ul: [
            "The work completed is fixed as of the moment we receive the formal termination notice (in writing or by email, as in section 3).",
            "The value of the completed work is calculated from the percentage of items and stages delivered, based on the contract appendix or the detailed quotation.",
            "We retain the value of the work completed or the deposit, whichever is higher. Anything paid above that amount is refunded to the client.",
            "If the amount paid is less than the value of the work completed, the client pays the balance within 7 working days.",
          ],
          after: [
            "We send a reconciliation record with supporting evidence (demo, source code, handover history) within 5 working days of receiving the termination notice. If the client does not sign or respond within 7 working days of receiving it, the figures in the record are used to liquidate the contract.",
            "Example for a VND 100 million contract with a VND 30 million deposit: if the client cancels when the work done is worth 20 million, nothing is refunded; if the client has paid 70 million and the work done is worth 50 million, 20 million is refunded; if the work done is worth 80 million, the client pays a further 10 million.",
          ],
        },
        {
          h: "4.4. Non-refundable items",
          ul: [
            "The deposit, when the client cancels the contract (section 4.2).",
            "Items and stages the client has accepted or approved in writing, by email or through the official channel named in the contract.",
            "Amounts paid to third parties for the project: domains, hosting, servers, SSL certificates, APIs, paid plugins, themes or licences. These accounts and assets are handed over to the client as they are.",
            "Maintenance, operation or recurring service fees for periods already used or in progress.",
          ],
        },
        {
          h: "4.5. Refund method and timing",
          ul: [
            "Refunds are paid by bank transfer to the account the client designates in writing or by official email.",
            "Timing: within 15 working days of both parties signing the contract liquidation record and confirming the final balance.",
          ],
        },
      ],
    },
  },

  // 7 ─────────────────────────────────────────────────────────────── support
  {
    slug: "online-support",
    required: false,
    vi: {
      title: "Hình thức hỗ trợ trực tuyến",
      navTitle: "Hỗ trợ trực tuyến",
      summary: "Các kênh hỗ trợ, giờ làm việc và thời gian phản hồi.",
      sections: [
        {
          h: "1. Kênh hỗ trợ",
          ul: [
            `Zalo: ${C.phoneDisplay}`,
            `Hotline: ${C.phoneDisplay}`,
            `WhatsApp (khách hàng quốc tế): ${C.phoneDisplay}`,
            `Email: ${C.email}`,
            "Form liên hệ trên website: ticosystem.com/vi/#contact",
            "Đặt lịch cuộc gọi video 15 phút miễn phí qua Calendly ngay trên website.",
          ],
        },
        {
          h: "2. Giờ hỗ trợ",
          p: [
            C.supportHours.vi,
            "Ngoài giờ, chúng tôi vẫn tiếp nhận qua email, Zalo và form liên hệ, và trả lời vào ngày làm việc tiếp theo. Với khách hàng đang trong thời gian bảo hành hoặc bảo trì, sự cố làm hệ thống ngừng hoạt động được tiếp nhận cả ngoài giờ qua hotline.",
          ],
        },
        {
          h: "3. Thời gian phản hồi",
          ul: [
            "Zalo và hotline trong giờ làm việc: trong 2 giờ.",
            "Email và form liên hệ: trong 1 ngày làm việc.",
          ],
        },
        {
          h: "4. Ngôn ngữ",
          p: ["Tiếng Việt và tiếng Anh. Với khách hàng quốc tế, lịch họp được sắp xếp linh hoạt theo múi giờ."],
        },
      ],
    },
    en: {
      title: "Online Support",
      navTitle: "Online support",
      summary: "Support channels, opening hours and response times.",
      sections: [
        {
          h: "1. Channels",
          ul: [
            `Zalo: ${C.phoneDisplay}`,
            `Hotline: ${C.phoneDisplay}`,
            `WhatsApp: ${C.phoneDisplay}`,
            `Email: ${C.email}`,
            "Contact form on the website: ticosystem.com/#contact",
            "Book a free 15-minute video call through Calendly on the website.",
          ],
        },
        {
          h: "2. Support hours",
          p: [
            C.supportHours.en,
            "Outside these hours we still receive messages by email, Zalo and the contact form, and reply on the next working day. For clients under warranty or maintenance, a system outage can be reported outside hours by phone.",
          ],
        },
        {
          h: "3. Response times",
          ul: ["Zalo and phone during working hours: within 2 hours.", "Email and the contact form: within 1 working day."],
        },
        {
          h: "4. Languages",
          p: ["Vietnamese and English. For international clients, meetings are scheduled around your time zone."],
        },
      ],
    },
  },
];

export function getPolicy(slug: string): Policy | undefined {
  return POLICIES.find((p) => p.slug === slug);
}

export function allPolicySlugs(): string[] {
  return POLICIES.map((p) => p.slug);
}
