import React from "react";
import styles from "@/app/blog/blog.module.css";
import type { Lang, LocalizedPost } from "@/lib/blog";

const T = {
  en: {
    title: "Insights on Web, Systems & AI",
    subtitle:
      "Straight-talking notes on building custom web apps, business systems and AI automation.",
    readMore: "Read article →",
    empty: "No posts yet — check back soon.",
    base: "/blog",
  },
  vi: {
    title: "Góc nhìn về Web, Hệ thống & AI",
    subtitle:
      "Những ghi chú thẳng thắn về xây dựng web app, hệ thống nghiệp vụ và tự động hóa AI.",
    readMore: "Đọc bài →",
    empty: "Chưa có bài viết — quay lại sau nhé.",
    base: "/vi/blog",
  },
} as const;

function formatDate(iso: string | null, lang: Lang): string {
  if (!iso) return "";
  return new Date(iso).toLocaleDateString(lang === "vi" ? "vi-VN" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogList({
  lang,
  posts,
}: {
  lang: Lang;
  posts: LocalizedPost[];
}) {
  const t = T[lang];

  return (
    <div className="container">
      <div className={styles.listHero}>
        <h1>{t.title}</h1>
        <p>{t.subtitle}</p>
      </div>

      {posts.length === 0 ? (
        <p className={styles.empty}>{t.empty}</p>
      ) : (
        <div className={styles.grid}>
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`${t.base}/${post.slug}`}
              className={styles.card}
            >
              {post.coverImage && (
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className={styles.cardCover}
                />
              )}
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  {post.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                  <span>{formatDate(post.publishedAt, lang)}</span>
                </div>
                <h2 className={styles.cardTitle}>{post.title}</h2>
                <p className={styles.cardExcerpt}>{post.excerpt}</p>
                <span className={styles.cardReadMore}>{t.readMore}</span>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
