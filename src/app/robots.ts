import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://ticosystem.com/sitemap.xml",
    host: "https://ticosystem.com",
  };
}
