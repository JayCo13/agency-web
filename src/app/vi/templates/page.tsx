import type { Metadata } from "next";
import TemplatesPage from "@/components/templates/TemplatesPage";

const title = "Mẫu Web Bán Hàng Dùng Thử Ngay | TicoSystem";
const description =
  "11 mẫu web chạy thật cho quán ăn, nội thất, mẹ và bé, spa và salon có đặt lịch, nha khoa, web công ty dịch vụ, thời trang, mỹ phẩm, đồ công nghệ, đồ gia dụng. Bấm xem thử, đặt hàng thử, rồi đưa lên tên miền riêng của shop.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/vi/templates",
    languages: { en: "/templates", vi: "/vi/templates", "x-default": "/templates" },
  },
  openGraph: {
    type: "website",
    url: "https://ticosystem.com/vi/templates",
    title,
    description,
    images: ["/templates/food-desktop.webp"],
    locale: "vi_VN",
  },
};

export default function Page() {
  return <TemplatesPage lang="vi" />;
}
