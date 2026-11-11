import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "@/app/blog/blog.module.css";
import type { Lang, LocalizedPost } from "@/lib/blog";
import { relatedServices } from "@/lib/related-services";

const T = {
  en: {
    back: "← All articles",
    base: "/blog",
    by: "By",
    ctaTitle: "Have a project in mind?",
    ctaText:
      "Book a free 15-minute discovery call and let's talk about your specific requirements.",
    ctaBtn: "Book a free call",
    contact: "/#contact",
    related: "Related services",
    services: "/services",
  },
  vi: {
    back: "← Tất cả bài viết",
    base: "/vi/blog",
    by: "Bởi",
    ctaTitle: "Bạn đang có dự án?",
    ctaText:
      "Đặt lịch tư vấn miễn phí 15 phút để cùng trao đổi về yêu cầu cụ thể của bạn.",
    ctaBtn: "Đặt lịch miễn phí",
    contact: "/vi/#contact",
    related: "Dịch vụ liên quan",
    services: "/vi/services",
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

export default function PostArticle({
  lang,
  post,
}: {
  lang: Lang;
  post: LocalizedPost;
}) {
  const t = T[lang];
  const related = relatedServices(post.slug, post.tags);

  return (
    <article className={styles.article}>
      <a href={t.base} className={styles.backLink}>
        {t.back}
      </a>

      <div className={styles.articleHead}>
        <h1>{post.title}</h1>
        <div className={styles.articleMeta}>
          <span>
            {t.by} {post.author}
          </span>
          {post.publishedAt && (
            <>
              <span aria-hidden="true">·</span>
              <span>{formatDate(post.publishedAt, lang)}</span>
            </>
          )}
          {post.tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      {post.coverImage && (
        <img
          src={post.coverImage}
          alt={post.title}
          className={styles.articleCover}
        />
      )}

      <div className={styles.prose}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
      </div>

      {related.length > 0 && (
        <nav className={styles.related} aria-label={t.related}>
          <h2>{t.related}</h2>
          <ul>
            {related.map((s) => (
              <li key={s.slug}>
                <a href={`${t.services}/${s.slug}`}>
                  <strong>{s[lang].name}</strong>
                  <span>{s[lang].tagline}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}

      <div className={styles.articleCta}>
        <h3>{t.ctaTitle}</h3>
        <p>{t.ctaText}</p>
        <a href={t.contact} className="btn btn-primary">
          {t.ctaBtn}
        </a>
      </div>
    </article>
  );
}
