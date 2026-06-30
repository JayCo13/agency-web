import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogShell from "@/components/blog/BlogShell";
import PostArticle from "@/components/blog/PostArticle";
import { getPostBySlug, getPublishedSlugs } from "@/lib/blog";

export const revalidate = 300;

const SITE = "https://ticosystem.com";

export async function generateStaticParams() {
  const slugs = await getPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "en");
  if (!post) return { title: "Article not found | TicoSystem" };

  return {
    title: `${post.title} | TicoSystem`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
      languages: {
        en: `/blog/${slug}`,
        vi: `/vi/blog/${slug}`,
        "x-default": `/blog/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      url: `${SITE}/blog/${slug}`,
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage ?? "/og.png"],
      publishedTime: post.publishedAt ?? undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.coverImage ?? "/og.png"],
    },
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug, "en");
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.coverImage ? `${SITE}${post.coverImage}` : `${SITE}/og.png`,
    datePublished: post.publishedAt ?? undefined,
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: "TicoSystem",
      logo: { "@type": "ImageObject", url: `${SITE}/logo.png` },
    },
    mainEntityOfPage: `${SITE}/blog/${slug}`,
    inLanguage: "en",
  };

  return (
    <BlogShell lang="en" altHref={`/vi/blog/${slug}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PostArticle lang="en" post={post} />
    </BlogShell>
  );
}
