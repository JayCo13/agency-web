import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const SITE_URL = "https://ticosystem.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Web Development, Custom Systems & AI Automation | TicoSystem",
  description:
    "We build web apps, custom business systems, AI chatbots and automation bots to European standards. Book a free 15-minute discovery call.",
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
    // TODO: replace with a dedicated 1200x630 OG image — logo.png is a stopgap.
    images: [{ url: "/logo.png", width: 620, height: 402, alt: "TicoSystem" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development, Custom Systems & AI Automation | TicoSystem",
    description:
      "We build web apps, custom business systems, AI chatbots and automation bots to European standards.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/browlogo.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "TicoSystem",
  url: SITE_URL,
  description:
    "Web development, custom systems, AI chatbots and automation bots",
  founder: {
    "@type": "Person",
    name: "Tyler Tai Co",
    jobTitle: "Tech Lead",
  },
  areaServed: ["Worldwide", "Vietnam", "DACH"],
  knowsAbout: [
    "Web Development",
    "AI Chatbots",
    "Business Automation",
    "Product Configurators",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom Web Application Development",
      },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "AI Chatbot Development" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Business Process Automation" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
