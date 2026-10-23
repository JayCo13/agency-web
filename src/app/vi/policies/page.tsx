import type { Metadata } from "next";
import { PolicyIndex } from "@/components/policies/PolicyLayout";

export const metadata: Metadata = {
  title: "Chính sách & điều khoản | TicoSystem",
  description: "Chính sách bảo mật, khiếu nại, giá, thanh toán, điều kiện dịch vụ, bàn giao, hoàn tiền và hỗ trợ trực tuyến của Công ty TNHH Giải pháp Phần mềm và Công nghệ TC.",
  alternates: {
    canonical: "/vi/policies",
    languages: { en: "/policies", vi: "/vi/policies", "x-default": "/policies" },
  },
};

export default function Page() {
  return <PolicyIndex lang="vi" />;
}
