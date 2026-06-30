"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  adminCreatePost,
  adminUpdatePost,
  adminDeletePost,
  assertAdminEnabled,
  type PostInput,
} from "@/lib/supabaseAdmin";

function str(form: FormData, key: string): string {
  return (form.get(key) as string | null)?.trim() ?? "";
}

function nullable(form: FormData, key: string): string | null {
  const v = str(form, key);
  return v === "" ? null : v;
}

/** Build a PostInput from the editor form. */
function readForm(form: FormData): PostInput {
  const status = str(form, "status") === "published" ? "published" : "draft";
  const existingPublishedAt = nullable(form, "published_at");

  // Stamp a publish date the first time a post goes live; keep it afterwards.
  let publishedAt = existingPublishedAt;
  if (status === "published" && !publishedAt) {
    publishedAt = new Date().toISOString();
  }

  const tags = str(form, "tags")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

  return {
    slug: str(form, "slug"),
    status,
    published_at: publishedAt,
    cover_image: nullable(form, "cover_image"),
    author: nullable(form, "author"),
    tags,
    title_en: nullable(form, "title_en"),
    excerpt_en: nullable(form, "excerpt_en"),
    content_en: nullable(form, "content_en"),
    title_vi: nullable(form, "title_vi"),
    excerpt_vi: nullable(form, "excerpt_vi"),
    content_vi: nullable(form, "content_vi"),
  };
}

export async function savePost(form: FormData): Promise<void> {
  assertAdminEnabled();

  const id = str(form, "id");
  const input = readForm(form);

  if (!input.slug) {
    throw new Error("Slug is required.");
  }

  if (id) {
    await adminUpdatePost(id, input);
  } else {
    await adminCreatePost(input);
  }

  // Refresh the cached public pages so the change shows up immediately.
  revalidatePath("/blog");
  revalidatePath("/vi/blog");
  revalidatePath(`/blog/${input.slug}`);
  revalidatePath(`/vi/blog/${input.slug}`);
  revalidatePath("/admin/blog");

  redirect("/admin/blog");
}

export async function deletePost(form: FormData): Promise<void> {
  assertAdminEnabled();

  const id = str(form, "id");
  if (!id) throw new Error("Missing post id.");

  await adminDeletePost(id);

  revalidatePath("/blog");
  revalidatePath("/vi/blog");
  revalidatePath("/admin/blog");

  redirect("/admin/blog");
}
