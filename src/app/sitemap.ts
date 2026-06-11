import type { MetadataRoute } from "next";

const BASE_URL = "https://ticosystem.com";

// Only list pages that actually exist — submitting URLs that 404 hurts crawl
// trust. Add the /services/*, /portfolio and /blog entries here the moment
// those routes ship.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: {
          en: BASE_URL,
          vi: `${BASE_URL}/vi`,
        },
      },
    },
    {
      url: `${BASE_URL}/vi`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          en: BASE_URL,
          vi: `${BASE_URL}/vi`,
        },
      },
    },
  ];
}
