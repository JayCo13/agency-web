import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type Lang = "en" | "vi";

/** Raw row shape as stored in Supabase (`tico_blog_posts`). */
export interface BlogPostRow {
  slug: string;
  status: string;
  published_at: string | null;
  cover_image: string | null;
  author: string | null;
  tags: string[] | null;
  title_en: string | null;
  excerpt_en: string | null;
  content_en: string | null;
  title_vi: string | null;
  excerpt_vi: string | null;
  content_vi: string | null;
}

/** A post resolved to a single language, ready to render. */
export interface LocalizedPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  author: string;
  tags: string[];
  publishedAt: string | null;
}

const TABLE = "tico_blog_posts";

// Columns we ever read — keep list view light, but the full content is only a
// few extra fields so we just select everything we model.
const COLUMNS =
  "slug,status,published_at,cover_image,author,tags,title_en,excerpt_en,content_en,title_vi,excerpt_vi,content_vi";

let client: SupabaseClient | null = null;
let warned = false;

/**
 * Lazily create an anon Supabase client. Returns null (with a one-time warning)
 * when env vars are missing so the site still builds and renders an empty blog
 * instead of crashing.
 */
function getClient(): SupabaseClient | null {
  if (client) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    if (!warned) {
      console.warn(
        "[blog] NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY not set — blog will be empty.",
      );
      warned = true;
    }
    return null;
  }

  client = createClient(url, anonKey, { auth: { persistSession: false } });
  return client;
}

function localize(row: BlogPostRow, lang: Lang): LocalizedPost {
  // Fall back to the other language so a post written in only one language
  // still renders something rather than a blank page.
  const pick = (vi: string | null, en: string | null) =>
    (lang === "vi" ? vi || en : en || vi) ?? "";

  return {
    slug: row.slug,
    title: pick(row.title_vi, row.title_en),
    excerpt: pick(row.excerpt_vi, row.excerpt_en),
    content: pick(row.content_vi, row.content_en),
    coverImage: row.cover_image,
    author: row.author ?? "Tyler Tai Co",
    tags: row.tags ?? [],
    publishedAt: row.published_at,
  };
}

/** All published posts, newest first, resolved to `lang`. */
export async function getPublishedPosts(lang: Lang): Promise<LocalizedPost[]> {
  const supabase = getClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from(TABLE)
    .select(COLUMNS)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error) {
    console.error("[blog] failed to load posts:", error.message);
    return [];
  }

  return (data as BlogPostRow[]).map((row) => localize(row, lang));
}

/** A single published post by slug, resolved to `lang`. Null if not found. */
export async function getPostBySlug(
  slug: string,
  lang: Lang,
): Promise<LocalizedPost | null> {
  const supabase = getClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from(TABLE)
    .select(COLUMNS)
    .eq("status", "published")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    console.error("[blog] failed to load post:", error.message);
    return null;
  }
  if (!data) return null;

  return localize(data as BlogPostRow, lang);
}

/** Just the slugs of published posts — used by sitemap and static params. */
export async function getPublishedSlugs(): Promise<string[]> {
  const supabase = getClient();
  if (!supabase) return [];

  const { data, error } = await supabase
    .from(TABLE)
    .select("slug")
    .eq("status", "published");

  if (error) {
    console.error("[blog] failed to load slugs:", error.message);
    return [];
  }

  return (data as { slug: string }[]).map((r) => r.slug);
}
