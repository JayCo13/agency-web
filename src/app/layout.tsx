import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/company";

// Be Vietnam Pro: drawn for Vietnamese diacritics first, reads cleanly in
// English too. One family for the whole site.
const sans = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const SITE_URL = "https://ticosystem.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Web Development, Custom Systems & AI Automation | TicoSystem",
  description:
    "Custom web apps, business systems, AI chatbots and automation, built in Vietnam to European standards. You own the code. Book a free 15-minute call.",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      vi: "/vi",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "TicoSystem",
    title: "Web Development, Custom Systems & AI Automation | TicoSystem",
    description:
      "We build web apps, custom business systems, AI chatbots and automation bots to European standards.",
    locale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 633, alt: "TicoSystem — Web Apps · Custom Systems · AI Automation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development, Custom Systems & AI Automation | TicoSystem",
    description:
      "We build web apps, custom business systems, AI chatbots and automation bots to European standards.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/browlogo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COMPANY.brand,
  legalName: COMPANY.legalNameVi,
  alternateName: [COMPANY.legalNameEn, COMPANY.shortNameEn],
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  email: COMPANY.email,
  telephone: COMPANY.phoneE164,
  ...(COMPANY.taxId ? { taxID: COMPANY.taxId } : {}),
  ...(COMPANY.address.vi
    ? { address: { "@type": "PostalAddress", streetAddress: COMPANY.address.vi, addressCountry: "VN" } }
    : { address: { "@type": "PostalAddress", addressCountry: "VN" } }),
  sameAs: [COMPANY.linkedin],
  description:
    "Web development, custom business systems, AI chatbots and process automation",
  founder: {
    "@type": "Person",
    name: "Tyler Tai Co",
    jobTitle: "Tech Lead",
  },
  areaServed: ["Vietnam", "Switzerland", "Austria", "Germany", "Worldwide"],
  knowsAbout: [
    "Web Development",
    "AI Chatbots",
    "Business Automation",
    "Product Configurators",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sans.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
