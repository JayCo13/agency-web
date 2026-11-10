// Mẫu giao diện web bán hàng của nền tảng TicoSystem. Mỗi mẫu có một shop demo chạy thật
// trên nền tảng (<slug>.ticosystem.com) — khách bấm thử, thêm giỏ, đặt hàng như web thật
// (shop demo bật chế độ "web mẫu": đơn không được lưu, không báo ai).

export type Lang = "en" | "vi";

export interface ShopTemplate {
  key: string;
  /** Subdomain của shop demo trên nền tảng */
  slug: string;
  shopName: string;
  /** Ẩn khỏi web công ty (trang Mẫu, trang chi tiết, sitemap, menu) nhưng giữ lại dữ liệu và shop demo */
  hidden?: boolean;
  en: TemplateCopy;
  vi: TemplateCopy;
}

interface TemplateCopy {
  industry: string;
  blurb: string;
  features: string[];
}

const ALL_TEMPLATES: ShopTemplate[] = [
  {
    key: "food",
    slug: "lua",
    shopName: "Lúa Bakery & Coffee",
    vi: {
      industry: "Quán ăn, cafe, tiệm bánh",
      blurb: "Thực đơn trên một trang, khách chọn món, chọn giao tận nơi hoặc hẹn giờ ghé lấy. Đầu trang tự báo quán đang mở hay đã đóng cửa.",
      features: ["Đặt món, hẹn giờ đến lấy", "Báo giờ mở cửa theo thời gian thực", "Chọn size, topping ngay trên thực đơn"],
    },
    en: {
      industry: "Restaurants, cafés, bakeries",
      blurb: "A one-page menu where customers pick dishes, then choose delivery or a pickup time. The header shows whether the shop is open right now.",
      features: ["Order ahead with a pickup time", "Live open/closed status", "Sizes and toppings right on the menu"],
    },
  },
  {
    key: "interior",
    slug: "hiennha",
    shopName: "Xưởng Gỗ Hiên Nhà",
    vi: {
      industry: "Nội thất, đồ gỗ, tủ bếp",
      blurb: "Mỗi sản phẩm có đường đo kích thước và bản vẽ mặt đứng theo số đo thật. Hàng đóng theo yêu cầu hiện \"Giá liên hệ\" và form nhận báo giá thay cho nút mua.",
      features: ["Bản vẽ kích thước trên từng sản phẩm", "Form nhận báo giá, báo về app và email", "Xem theo không gian: phòng khách, bếp, phòng ngủ"],
    },
    en: {
      industry: "Furniture, woodwork, kitchens",
      blurb: "Every product shows a dimension line and a front elevation drawn to its real size. Made-to-order pieces show \"Price on request\" with a quote form instead of a buy button.",
      features: ["Dimension drawing on every product", "Quote requests sent to the app and email", "Browse by room: living, kitchen, bedroom"],
    },
  },
  {
    key: "baby",
    slug: "nhasoc",
    shopName: "Nhà Sóc Mẹ & Bé",
    vi: {
      industry: "Mẹ và bé, đồ sơ sinh, đồ chơi",
      blurb: "Khách chọn tháng tuổi của bé một lần, web nhớ và gắn nhãn \"Hợp tuổi bé\" cho những món phù hợp. Trang sản phẩm báo ngay nếu món đó chưa dành cho tuổi bé.",
      features: ["Chọn tuổi bé, lọc sản phẩm theo tuổi", "Nhãn \"Hợp tuổi bé\" trên từng sản phẩm", "Ghi độ tuổi và lưu ý an toàn rõ ràng"],
    },
    en: {
      industry: "Baby and maternity",
      blurb: "Parents pick their baby's age once; the store remembers it and tags every product that fits. Product pages warn when an item isn't meant for that age yet.",
      features: ["Shop by baby's age", "\"Right for your baby\" tags on products", "Clear age ranges and safety notes"],
    },
  },
  {
    key: "salon",
    slug: "moclan",
    shopName: "Mộc Lan Nail & Spa",
    vi: {
      industry: "Spa, salon tóc, nail",
      blurb: "Khách chọn dịch vụ, chọn ngày trên lịch và giờ còn trống để đặt hẹn. Tiệm nhận lịch mới trong app và email, web tự chặn trùng giờ theo số ghế.",
      features: ["Đặt lịch theo giờ trống, chặn trùng giờ", "Bảng giá kèm thời gian làm từng dịch vụ", "Bộ sưu tập mẫu, ưu đãi, chữ viết tay"],
    },
    en: {
      industry: "Spas, hair and nail salons",
      blurb: "Clients pick a service, a day on the calendar and an open time slot. New bookings arrive in the app and by email, and double-booking is blocked by chair count.",
      features: ["Book open time slots, no double-booking", "Price list with service durations", "Gallery, offers and handwritten accents"],
    },
  },
  {
    key: "dental",
    slug: "ngoctrai",
    shopName: "Nha Khoa Ngọc Trai",
    vi: {
      industry: "Nha khoa, tông sáng",
      blurb: "Ảnh phòng khám toàn khung, thẻ kính dịch vụ nổi bật, bảng giá kiểu thực đơn và bảng giờ làm việc. Bệnh nhân đặt lịch qua 4 bước: dịch vụ, ngày, giờ, thông tin.",
      features: ["Đặt lịch 4 bước theo giờ trống", "Bảng giá in như thực đơn", "Bác sĩ, ảnh trước – sau, giờ làm việc"],
    },
    en: {
      industry: "Dental clinics (light)",
      blurb: "Full-width clinic photo, frosted service cards, doctor profiles and a drag-to-compare before/after. Patients pick a day and an open slot to book a visit.",
      features: ["Book open appointment slots", "Doctor team and before/after slider", "Treatment prices or quote after exam"],
    },
  },
  {
    key: "dentalnavy",
    slug: "saomai",
    shopName: "Sao Mai Dental Care",
    vi: {
      industry: "Nha khoa, phòng khám hiện đại",
      blurb: "Bố cục phòng khám hiện đại: dải thông tin xanh than, ảnh lớn đổi được kèm giờ trống sớm nhất lấy từ lịch hẹn thật, thẻ dịch vụ và bác sĩ, ảnh trước – sau kéo so sánh, form đặt lịch nhanh ngay trang chủ.",
      features: ["Giờ trống thật ngay đầu trang", "Form đặt lịch nhanh ở trang chủ", "Thẻ dịch vụ có giá, bác sĩ, ưu đãi"],
    },
    en: {
      industry: "Dental clinics (modern medical)",
      blurb: "A modern clinic layout: navy info bar, a switchable hero photo with the earliest open slot from the real booking calendar, service and doctor cards, a drag-to-compare before/after and a quick booking form on the home page.",
      features: ["Real open slots on the first screen", "Quick booking form on the home page", "Priced service cards, doctors and offers"],
    },
  },
  {
    key: "dayspa",
    slug: "tinh",
    shopName: "Tịnh Day Spa",
    vi: {
      industry: "Day spa, massage, chăm sóc da",
      blurb: "Nhẹ nhàng như tạp chí: ảnh đóng khung với thẻ chào hiện giờ còn phòng thật, bảng dịch vụ theo nhóm, ảnh không gian trượt ngang, thẻ thành viên và ưu đãi có đồng hồ đếm ngược.",
      features: ["Giờ còn phòng thật ngay đầu trang", "Bảng dịch vụ theo nhóm, giá và thời gian", "Ưu đãi đếm ngược, thẻ thành viên"],
    },
    en: {
      industry: "Day spas, massage and skincare",
      blurb: "Calm and editorial: a framed hero with a welcome card showing the next real free slot, a tabbed treatment menu, a sliding gallery of the space, membership and an offer with a live countdown.",
      features: ["Next free slot on the first screen", "Tabbed treatment menu with prices and durations", "Offer countdown and membership block"],
    },
  },
  {
    key: "spablush",
    slug: "annhien",
    shopName: "An Nhiên Spa",
    vi: {
      industry: "Spa cổ điển, thảo dược",
      blurb: "Ảnh lớn toàn màn hình đổi lần lượt, tiêu đề chữ có chân cỡ lớn và giờ còn phòng thật ngay trên ảnh. Thẻ nhóm dịch vụ nổi trên dải ảnh tối, bảng gói chăm sóc, đội ngũ và bảng giá kiểu thực đơn.",
      features: ["Giờ còn phòng thật ngay đầu trang", "Bảng gói chăm sóc kèm danh sách bao gồm", "Bảng giá kiểu thực đơn, đội ngũ, lưới ảnh"],
    },
    en: {
      industry: "Classic and herbal spas",
      blurb: "A full-screen photo slider with a large serif title and the next real free slot on top. Service groups float over a dark photo band, followed by care packages, the team and a menu-style price list.",
      features: ["Next free slot on the first screen", "Care packages with what each includes", "Menu-style price list, team and photo grid"],
    },
  },
  {
    key: "nailgold",
    slug: "hoanglan",
    shopName: "Hoàng Lan Nail Lounge",
    vi: {
      industry: "Tiệm nail sang trọng",
      blurb: "Nền đá ấm, tiêu đề in hoa vàng champagne hiện từng chữ, rèm vàng khép lại khi cuộn khỏi ảnh đầu trang. Khối vòm trên nền Nhà thờ Đức Bà, ảnh bay ngang qua khối ghim giữa màn hình, bảng giá kiểu thực đơn và giờ còn ghế thật.",
      features: ["Hiệu ứng cuộn: rèm vàng, khối vòm, ảnh bay", "Giờ còn ghế thật ngay trên ảnh đầu trang", "Bảng giá kiểu thực đơn, lưới mẫu móng"],
    },
    en: {
      industry: "Upscale nail salons",
      blurb: "Warm stone with uppercase champagne-gold headings that reveal letter by letter, and gold blinds that close as you scroll past the hero. An arch over a Saigon cathedral backdrop, photos floating past a pinned section, a menu-style price list and the next real free chair.",
      features: ["Scroll effects: gold blinds, rising arch, floating photos", "Next free chair on the first screen", "Menu-style price list and nail look grid"],
    },
  },
  {
    key: "brunch",
    slug: "nangsom",
    shopName: "Nắng Sớm Brunch & Coffee",
    vi: {
      industry: "Quán brunch & cà phê",
      blurb: "Tên quán khổng lồ với ảnh món trong từng chữ cái, chữ viết tay tự viết ra và đường đồi tự vẽ khi cuộn. Khung tin màu đất, dải món kéo ngang, mặt tiền quán vẽ nét; thực đơn có thẻ combo dính và thanh nhóm món ở đáy.",
      features: ["Đặt món online: thêm nhanh, chọn nóng / đá", "Đặt bàn theo giờ còn trống", "Thực đơn có combo, món gọi thêm, ghi chú ăn chay"],
    },
    en: {
      industry: "Brunch cafés & coffee shops",
      blurb: "A giant shop name with dish photos inside each letter, handwriting that writes itself and a hillside line that draws as you scroll. A clay news panel, a draggable dish rail and a line-drawn storefront; the menu has a sticky combo card and a category bar at the bottom.",
      features: ["Online ordering: quick add, hot / iced options", "Table booking by free time slot", "Menu with combos, add-ons and diet notes"],
    },
  },
  {
    key: "workshop",
    slug: "xuong93",
    shopName: "Xưởng 93°",
    vi: {
      industry: "Sửa máy pha cà phê, phụ tùng",
      blurb: "Đầu trang chia đôi, ảnh máy pha nở ra hết màn hình khi cuộn, chữ đánh máy nhảy ký tự như màn hình đo. Dịch vụ đánh số với đường kẻ đỏ, khối ảnh dính cho các dòng máy, chẩn đoán nhanh theo triệu chứng và bản đồ tới xưởng.",
      features: ["Chẩn đoán nhanh: chọn triệu chứng, thêm phụ tùng vào giỏ", "Đặt lịch mang máy tới sửa theo giờ trống", "Bán máy mới, máy tân trang và phụ tùng có chọn số lượng"],
    },
    en: {
      industry: "Coffee machine repair & parts",
      blurb: "A split hero whose machine photo opens to full width as you scroll, with typewriter labels that scramble like a gauge readout. Numbered services on red rules, a sticky photo beside the machine ranges, a symptom-based quick diagnosis and a map to the workshop.",
      features: ["Quick diagnosis: pick a symptom, add the parts to the cart", "Book a repair drop-off by free time slot", "New machines, refurbished machines and parts with quantity picker"],
    },
  },
  {
    key: "creator",
    slug: "mayreview",
    shopName: "Mây Review",
    hidden: true,
    vi: {
      industry: "KOL, KOC, TikToker (link in bio)",
      blurb: "Trang link gắn ở bio TikTok, Instagram: tên viết tay trên nền xanh rêu có hoạ tiết, ảnh khung vòm. Cuộn xuống, đầu trang biến thành thẻ hồ sơ với các thẻ bento và thanh điều hướng nổi.",
      features: ["Tìm sản phẩm theo số video ghi trong caption", "Nút mua dẫn ra TikTok Shop, Shopee kèm mã giảm giá", "Form hợp tác cho nhãn hàng, báo về app và email"],
    },
    en: {
      industry: "Creators and TikTokers (link in bio)",
      blurb: "The link page for a TikTok or Instagram bio: a handwritten name on a patterned sage background with an arched photo. Scroll down and the header turns into a profile card with bento tiles and a floating nav bar.",
      features: ["Find products by the video number in the caption", "Buy buttons go to TikTok Shop or Shopee with discount codes", "Brand collaboration form, sent to the app and email"],
    },
  },
  {
    key: "studio",
    slug: "khoang",
    shopName: "Khoảng Studio",
    vi: {
      industry: "Thiết kế nội thất, kiến trúc",
      blurb: "Ảnh công trình chạy toàn màn hình, các tấm ảnh dự án nghiêng trôi theo độ cuộn, lĩnh vực đánh số xếp chồng như thẻ hồ sơ và khẩu hiệu cực lớn trên ảnh. Khách gửi phiếu yêu cầu thiết kế in trên giấy kẹp ghim.",
      features: ["Trang dự án với thông số, ảnh xếp so le", "Quy trình làm việc từng bước trên nền đen", "Phiếu yêu cầu thiết kế, báo về app và email"],
    },
    en: {
      industry: "Interior design and architecture",
      blurb: "Full-screen project photos, tilted project images that drift as you scroll, numbered services stacked like file tabs and a huge headline over a photo. Visitors send a design brief printed on clipped paper.",
      features: ["Project pages with specs and a staggered gallery", "Step-by-step process on a dark section", "Design brief form, sent to the app and email"],
    },
  },
  {
    key: "tattoo",
    slug: "kimmuc",
    shopName: "Kim Mực Tattoo",
    vi: {
      industry: "Tiệm xăm, studio xăm hình",
      blurb: "Ảnh hiện thành nét stencil tím rồi được \"xăm\" sang màu khi cuộn tới, mẫu flash đánh số như tờ mẫu treo tường. Khách kéo thước xem giá theo cỡ hình rồi đặt lịch tư vấn.",
      features: ["Thước ước tính giá theo cỡ hình (cm)", "Tờ flash đánh số, lọc theo phong cách", "Đặt lịch theo giờ trống, báo về app và email"],
    },
    en: {
      industry: "Tattoo studios",
      blurb: "Photos appear as violet stencil lines and ink into full colour as you scroll, and flash designs are numbered like a sheet on the wall. Visitors drag a ruler to see the price for their size, then book a consultation.",
      features: ["Price estimator by tattoo size (cm)", "Numbered flash sheet, filtered by style", "Booking by open time slots, sent to the app and email"],
    },
  },
  {
    key: "tattoobold",
    slug: "chusa",
    shopName: "Chu Sa Tattoo",
    vi: {
      industry: "Tiệm xăm phong cách đường phố",
      blurb: "Tên tiệm in khổng lồ trên ảnh tiệm, mẫu xăm bay xoay 3D qua màn hình khi cuộn, chữ đổi sang màu đỏ son theo từng chữ. Bảng giờ mở cửa tự báo tiệm đang mở hay đã đóng, khách chọn mẫu rồi đặt lịch.",
      features: ["Giờ mở cửa báo đang mở / đã đóng theo giờ thật", "Mẫu đánh số kèm giá, thời gian, lọc theo phong cách", "Đặt lịch theo giờ trống, báo về app và email"],
    },
    en: {
      industry: "Street-style tattoo studios",
      blurb: "The studio name runs huge across a photo of the shop, flash designs fly and turn in 3D as you scroll, and text inks into vermilion word by word. The opening-hours card shows whether the studio is open right now, and visitors pick a design and book.",
      features: ["Live open / closed status from real opening hours", "Numbered designs with price and time, filtered by style", "Booking by open time slots, sent to the app and email"],
    },
  },
  {
    key: "company",
    slug: "soxanh",
    shopName: "Sổ Xanh Kế Toán",
    vi: {
      industry: "Web công ty, dịch vụ",
      blurb: "Giới thiệu doanh nghiệp, dịch vụ, con số nổi bật và quy trình làm việc. Không có giỏ hàng: khách gửi form nhận tư vấn, yêu cầu báo về app và email.",
      features: ["Form nhận tư vấn, báo về app và email", "Trang chi tiết từng dịch vụ", "Hợp với kế toán, luật, tư vấn, IT"],
    },
    en: {
      industry: "Company and service websites",
      blurb: "Present the business, its services, key numbers and how you work. No cart: visitors send a consultation request that arrives in the app and by email.",
      features: ["Consultation form sent to the app and email", "A page for every service", "Suits accounting, legal, consulting and IT firms"],
    },
  },
  {
    key: "fashion",
    slug: "nhastudio",
    shopName: "Nhã Studio",
    vi: {
      industry: "Thời trang, phụ kiện",
      blurb: "Ảnh sản phẩm khổ đứng như lookbook, rê chuột thấy ảnh thứ hai. Khách chọn màu và size, xem bảng size ngay trong trang sản phẩm.",
      features: ["Chọn màu và size ngay trên trang sản phẩm", "Bảng size bật lên ngay trên trang", "Lookbook và bộ sưu tập mới"],
    },
    en: {
      industry: "Fashion and accessories",
      blurb: "Portrait product photos laid out like a lookbook, with a second photo on hover. Shoppers pick colour and size and open the size guide without leaving the page.",
      features: ["Colour and size picker on the product page", "Size guide in a pop-up", "Lookbook and new-collection sections"],
    },
  },
  {
    key: "beauty",
    slug: "maybeauty",
    shopName: "Mây Beauty",
    vi: {
      industry: "Mỹ phẩm, chăm sóc da",
      blurb: "Trang chủ có giỏ hàng nhỏ luôn hiện bên cạnh, flash sale đếm ngược và danh mục chia theo nhóm sản phẩm. Khách lưu sản phẩm yêu thích để mua sau.",
      features: ["Flash sale đếm ngược", "Danh sách yêu thích, sản phẩm vừa xem", "Giỏ hàng nhỏ luôn hiện trên trang chủ"],
    },
    en: {
      industry: "Cosmetics and skincare",
      blurb: "The home page keeps a mini cart in view, runs a flash-sale countdown and groups products into clear categories. Shoppers can save favourites for later.",
      features: ["Flash-sale countdown", "Wishlist and recently viewed", "Mini cart always visible on the home page"],
    },
  },
  {
    key: "tech",
    slug: "anhduong",
    shopName: "Ánh Dương Mobile",
    vi: {
      industry: "Điện thoại, đồ công nghệ",
      blurb: "Banner trượt cho chương trình khuyến mãi, danh mục dạng lưới ảnh và ô tìm kiếm luôn ở đầu trang, hợp với shop nhiều mã hàng.",
      features: ["Banner khuyến mãi dạng trượt", "Danh mục lưới ảnh, tìm nhanh", "Hợp với shop hàng trăm mã sản phẩm"],
    },
    en: {
      industry: "Phones and electronics",
      blurb: "A promo slider, an image grid of categories and a search box that stays at the top — built for shops with a large catalogue.",
      features: ["Promotion slider", "Category image grid and quick search", "Comfortable with hundreds of products"],
    },
  },
  {
    key: "lifestyle",
    slug: "demo",
    shopName: "Nhà Gốm Mộc",
    vi: {
      industry: "Đồ gia dụng, quà tặng, đồ thủ công",
      blurb: "Bố cục thoáng, ảnh lớn kể câu chuyện sản phẩm. Trên điện thoại có thanh Gọi, Zalo, Giỏ hàng luôn dính ở cuối màn hình.",
      features: ["Ảnh lớn, nhiều khoảng thở", "Thanh Gọi, Zalo, Giỏ hàng trên điện thoại", "Hợp với hàng thủ công, quà tặng"],
    },
    en: {
      industry: "Homeware, gifts, handmade goods",
      blurb: "An airy layout with large photos that tell the product's story. On phones, a Call / Zalo / Cart bar stays pinned to the bottom of the screen.",
      features: ["Large photos and generous spacing", "Call, Zalo and Cart bar on mobile", "Suits handmade goods and gifts"],
    },
  },
];

/** Các mẫu đang hiển thị trên web công ty */
export const TEMPLATES: ShopTemplate[] = ALL_TEMPLATES.filter((t) => !t.hidden);

export function getTemplate(key: string): ShopTemplate | undefined {
  return TEMPLATES.find((t) => t.key === key);
}

/**
 * Địa chỉ shop demo. Mặc định https://<slug>.ticosystem.com; chạy thử trên máy thì đặt
 * TEMPLATE_DEMO_ORIGIN=http://{slug}.localhost:3000 trong .env.local.
 */
export function demoUrl(t: ShopTemplate): string {
  const pattern = process.env.TEMPLATE_DEMO_ORIGIN || "https://{slug}.ticosystem.com";
  return pattern.replace("{slug}", t.slug);
}
