import "server-only";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client using the SERVICE ROLE key. This key bypasses
 * Row Level Security, so it must NEVER reach the browser or production.
 *
 * Two guards keep it local-only:
 *   1. `assertAdminEnabled()` throws outside development.
 *   2. The service-role key is only ever set in `.env.local` (never on Netlify),
 *      so `getAdminClient()` throws in production even if a guard is missed.
 */

const TABLE = "tico_blog_posts";

export interface AdminPostRow {
  id: string;
  slug: string;
  status: "draft" | "published";
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
  created_at: string;
  updated_at: string;
}

export interface PostInput {
  slug: string;
  status: "draft" | "published";
  published_at: string | null;
  cover_image: string | null;
  author: string | null;
  tags: string[];
  title_en: string | null;
  excerpt_en: string | null;
  content_en: string | null;
  title_vi: string | null;
  excerpt_vi: string | null;
  content_vi: string | null;
}

/** True only when the admin can run (dev + key present). */
export function isAdminEnabled(): boolean {
  return (
    process.env.NODE_ENV !== "production" &&
    !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
    !!process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

/** Throw a clear error if the admin is used where it shouldn't be. */
export function assertAdminEnabled(): void {
  if (process.env.NODE_ENV === "production") {
    throw new Error("The blog admin is disabled in production.");
  }
  if (
    !process.env.NEXT_PUBLIC_SUPABASE_URL ||
    !process.env.SUPABASE_SERVICE_ROLE_KEY
  ) {
    throw new Error(
      "Admin needs NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local.",
    );
  }
}

let admin: SupabaseClient | null = null;

function getAdminClient(): SupabaseClient {
  assertAdminEnabled();
  if (admin) return admin;
  admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } },
  );
  return admin;
}

/** All posts (drafts included), newest edit first. */
export async function adminListPosts(): Promise<AdminPostRow[]> {
  const { data, error } = await getAdminClient()
    .from(TABLE)
    .select("*")
    .order("updated_at", { ascending: false });
  if (error) throw new Error(error.message);
  return (data as AdminPostRow[]) ?? [];
}

/** A single post by id, or null. */
export async function adminGetPost(id: string): Promise<AdminPostRow | null> {
  const { data, error } = await getAdminClient()
    .from(TABLE)
    .select("*")
    .eq("id", id)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (data as AdminPostRow) ?? null;
}

export async function adminCreatePost(input: PostInput): Promise<void> {
  const { error } = await getAdminClient().from(TABLE).insert(input);
  if (error) throw new Error(error.message);
}

export async function adminUpdatePost(
  id: string,
  input: PostInput,
): Promise<void> {
  const { error } = await getAdminClient()
    .from(TABLE)
    .update(input)
    .eq("id", id);
  if (error) throw new Error(error.message);
}

export async function adminDeletePost(id: string): Promise<void> {
  const { error } = await getAdminClient().from(TABLE).delete().eq("id", id);
  if (error) throw new Error(error.message);
}
