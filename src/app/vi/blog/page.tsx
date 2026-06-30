import type { Metadata } from "next";
import BlogShell from "@/components/blog/BlogShell";
import BlogList from "@/components/blog/BlogList";
import { getPublishedPosts } from "@/lib/blog";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Blog — Phát triển Web, Hệ thống & Tự động hóa AI | TicoSystem",
  description:
    "Bài viết thẳng thắn về xây dựng web app, hệ thống nghiệp vụ và tự động hóa AI theo tiêu chuẩn châu Âu.",
  alternates: {
    canonical: "/vi/blog",
    languages: { en: "/blog", vi: "/vi/blog", "x-default": "/blog" },
  },
  openGraph: {
    type: "website",
    url: "https://ticosystem.com/vi/blog",
    title: "Blog | TicoSystem",
    description:
      "Bài viết về web app tùy chỉnh, hệ thống nghiệp vụ và tự động hóa AI.",
    images: ["/og.png"],
    locale: "vi_VN",
  },
};

export default async function BlogIndexVi() {
  const posts = await getPublishedPosts("vi");
  return (
    <BlogShell lang="vi" altHref="/blog">
      <BlogList lang="vi" posts={posts} />
    </BlogShell>
  );
}
