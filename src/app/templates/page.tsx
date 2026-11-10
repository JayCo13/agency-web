import type { Metadata } from "next";
import TemplatesPage from "@/components/templates/TemplatesPage";

const title = "Online Store Templates You Can Try | TicoSystem";
const description =
  "Eleven live website templates for food, furniture, baby goods, spas and salons with booking, dental clinics, company and service sites, fashion, beauty, electronics and homeware. Try them, place a test order, then launch on your own domain.";

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: "/templates",
    languages: { en: "/templates", vi: "/vi/templates", "x-default": "/templates" },
  },
  openGraph: {
    type: "website",
    url: "https://ticosystem.com/templates",
    title,
    description,
    images: ["/templates/food-desktop.webp"],
  },
};

export default function Page() {
  return <TemplatesPage lang="en" />;
}
