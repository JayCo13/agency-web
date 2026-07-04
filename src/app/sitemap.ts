import type { MetadataRoute } from "next";
import { getPublishedPosts } from "@/lib/blog";
import { allServiceSlugs } from "@/lib/services";

const BASE_URL = "https://ticosystem.com";

// Revalidate the sitemap on the same cadence as the blog so newly published
// posts get picked up without a full rebuild.
export const revalidate = 60;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: { en: BASE_URL, vi: `${BASE_URL}/vi` },
      },
    },
    {
      url: `${BASE_URL}/vi`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: { en: BASE_URL, vi: `${BASE_URL}/vi` },
      },
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
      alternates: {
        languages: { en: `${BASE_URL}/blog`, vi: `${BASE_URL}/vi/blog` },
      },
    },
    {
      url: `${BASE_URL}/vi/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.7,
      alternates: {
        languages: { en: `${BASE_URL}/blog`, vi: `${BASE_URL}/vi/blog` },
      },
    },
  ];

  // Service landing pages (EN + VI alternates).
  const serviceEntries: MetadataRoute.Sitemap = allServiceSlugs().map((slug) => ({
    url: `${BASE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    alternates: {
      languages: {
        en: `${BASE_URL}/services/${slug}`,
        vi: `${BASE_URL}/vi/services/${slug}`,
      },
    },
  }));

  // One sitemap entry per published post, with EN/VI alternates so Google
  // understands the two language versions are the same article.
  const posts = await getPublishedPosts("en");
  const postEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : now,
    changeFrequency: "monthly",
    priority: 0.6,
    alternates: {
      languages: {
        en: `${BASE_URL}/blog/${post.slug}`,
        vi: `${BASE_URL}/vi/blog/${post.slug}`,
      },
    },
  }));

  return [...staticEntries, ...serviceEntries, ...postEntries];
}
