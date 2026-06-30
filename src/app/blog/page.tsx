import type { Metadata } from "next";
import BlogShell from "@/components/blog/BlogShell";
import BlogList from "@/components/blog/BlogList";
import { getPublishedPosts } from "@/lib/blog";

// Regenerate the list at most every 5 minutes so new posts appear without a
// rebuild, while still serving a cached (fast, crawlable) page.
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog — Web Development, Custom Systems & AI Automation | TicoSystem",
  description:
    "Straight-talking articles on building custom web apps, business systems and AI automation to European standards.",
  alternates: {
    canonical: "/blog",
    languages: { en: "/blog", vi: "/vi/blog", "x-default": "/blog" },
  },
  openGraph: {
    type: "website",
    url: "https://ticosystem.com/blog",
    title: "Blog | TicoSystem",
    description:
      "Articles on custom web apps, business systems and AI automation.",
    images: ["/og.png"],
  },
};

export default async function BlogIndex() {
  const posts = await getPublishedPosts("en");
  return (
    <BlogShell lang="en" altHref="/vi/blog">
      <BlogList lang="en" posts={posts} />
    </BlogShell>
  );
}
