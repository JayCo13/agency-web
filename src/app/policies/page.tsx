import type { Metadata } from "next";
import { PolicyIndex } from "@/components/policies/PolicyLayout";

export const metadata: Metadata = {
  title: "Policies & Terms | TicoSystem",
  description: "Privacy, complaints, pricing, payment, service conditions, delivery, refund and online support policies of TC Technology and Software Solution Co., Ltd.",
  alternates: {
    canonical: "/policies",
    languages: { en: "/policies", vi: "/vi/policies", "x-default": "/policies" },
  },
};

export default function Page() {
  return <PolicyIndex lang="en" />;
}
