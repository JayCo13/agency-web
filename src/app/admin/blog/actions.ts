"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  adminCreatePost,
  adminUpdatePost,
  adminDeletePost,
  adminUploadImage,
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

/**
 * The editor's `datetime-local` field sends `YYYY-MM-DDTHH:mm` with no zone,
 * which `new Date()` reads as the admin machine's local time — exactly what
 * whoever typed it meant. Anything unparseable is rejected rather than silently
 * wiping the existing date.
 */
function parsePublishedAt(raw: string | null): string | null {
  if (!raw) return null;
  const d = new Date(raw);
  if (Number.isNaN(d.getTime())) {
    throw new Error(`Invalid publish date: "${raw}"`);
  }
  return d.toISOString();
}

/** Build a PostInput from the editor form. */
function readForm(form: FormData): PostInput {
  const status = str(form, "status") === "published" ? "published" : "draft";

  // The date is editable, so posts can be written in a batch and then spaced
  // out over past dates. Empty + published means "stamp it now".
  let publishedAt = parsePublishedAt(nullable(form, "published_at"));
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

export async function uploadImage(form: FormData): Promise<{ url: string }> {
  assertAdminEnabled();

  const file = form.get("file");
  if (!(file instanceof File) || file.size === 0) {
    throw new Error("No file provided.");
  }
  if (!file.type.startsWith("image/")) {
    throw new Error("Only image files are allowed.");
  }
  if (file.size > 10 * 1024 * 1024) {
    throw new Error("Image is larger than 10MB.");
  }

  const url = await adminUploadImage(file);
  return { url };
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
