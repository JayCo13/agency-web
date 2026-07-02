"use client";

import React, { useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "@/app/admin/admin.module.css";
import { savePost, uploadImage } from "@/app/admin/blog/actions";
import type { AdminPostRow } from "@/lib/supabaseAdmin";

type Mode = "write" | "preview";

/** Upload a File through the server action, returning its public URL. */
async function upload(file: File): Promise<string> {
  const form = new FormData();
  form.append("file", file);
  const { url } = await uploadImage(form);
  return url;
}

function ContentField({
  lang,
  name,
  initial,
}: {
  lang: "EN" | "VI";
  name: string;
  initial: string;
}) {
  const [value, setValue] = useState(initial);
  const [mode, setMode] = useState<Mode>("write");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      const url = await upload(file);
      // Append the image as Markdown so it renders inside the article.
      const snippet = `\n\n![${file.name.replace(/\.[^.]+$/, "")}](${url})\n`;
      setValue((v) => v + snippet);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div className={styles.field}>
      <div className={styles.editorTabs}>
        <button
          type="button"
          className={`${styles.tab} ${mode === "write" ? styles.tabActive : ""}`}
          onClick={() => setMode("write")}
        >
          Write
        </button>
        <button
          type="button"
          className={`${styles.tab} ${mode === "preview" ? styles.tabActive : ""}`}
          onClick={() => setMode("preview")}
        >
          Preview
        </button>
        <button
          type="button"
          className={styles.tab}
          onClick={() => fileRef.current?.click()}
          disabled={busy}
        >
          {busy ? "Uploading…" : "🖼 Insert image"}
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={onPick}
        />
      </div>
      {error && <span className={styles.uploadError}>{error}</span>}
      <textarea
        name={name}
        rows={18}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={`Markdown content (${lang})`}
        style={{ display: mode === "write" ? "block" : "none" }}
      />
      {mode === "preview" && (
        <div className={styles.preview}>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {value || "_Nothing to preview yet._"}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
}

function CoverUploader({ initial }: { initial: string }) {
  const [url, setUrl] = useState(initial);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  async function onPick(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setBusy(true);
    setError(null);
    try {
      setUrl(await upload(file));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Upload failed.");
    } finally {
      setBusy(false);
      if (fileRef.current) fileRef.current.value = "";
    }
  }

  return (
    <div className={styles.field}>
      <label>Cover image</label>
      {/* Submitted with the form; upload replaces the value, but it stays a
          plain text field so you can also paste a URL by hand. */}
      <input
        name="cover_image"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Upload a file, or paste an image URL"
      />
      <div className={styles.coverRow}>
        <button
          type="button"
          className={styles.uploadBtn}
          onClick={() => fileRef.current?.click()}
          disabled={busy}
        >
          {busy ? "Uploading…" : "⬆ Upload from device"}
        </button>
        {url && (
          <button
            type="button"
            className={styles.clearBtn}
            onClick={() => setUrl("")}
          >
            Remove
          </button>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          hidden
          onChange={onPick}
        />
      </div>
      {error && <span className={styles.uploadError}>{error}</span>}
      {url && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={url} alt="cover preview" className={styles.coverPreview} />
      )}
    </div>
  );
}

export default function PostEditor({ post }: { post?: AdminPostRow }) {
  const isEdit = !!post;

  return (
    <form action={savePost} className={styles.form}>
      <input type="hidden" name="id" defaultValue={post?.id ?? ""} />
      <input
        type="hidden"
        name="published_at"
        defaultValue={post?.published_at ?? ""}
      />

      <div className={styles.editorHead}>
        <h1>{isEdit ? "Edit post" : "New post"}</h1>
        <a href="/admin/blog" className={styles.backLink}>
          ← Back to list
        </a>
      </div>

      {/* Metadata */}
      <div className={styles.panel}>
        <h2>Settings</h2>
        <div className={styles.metaGrid}>
          <div className={styles.field}>
            <label htmlFor="slug">Slug (URL) *</label>
            <input
              id="slug"
              name="slug"
              required
              defaultValue={post?.slug ?? ""}
              placeholder="how-much-does-a-web-app-cost"
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="status">Status</label>
            <select
              id="status"
              name="status"
              defaultValue={post?.status ?? "draft"}
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
          <div className={styles.field}>
            <label htmlFor="author">Author</label>
            <input
              id="author"
              name="author"
              defaultValue={post?.author ?? "Tyler Tai Co"}
            />
          </div>
          <div className={styles.field}>
            <label htmlFor="tags">Tags (comma separated)</label>
            <input
              id="tags"
              name="tags"
              defaultValue={post?.tags?.join(", ") ?? ""}
              placeholder="web development, pricing"
            />
          </div>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <CoverUploader initial={post?.cover_image ?? ""} />
        </div>
      </div>

      {/* Bilingual content */}
      <div className={styles.panel}>
        <h2>Content</h2>
        <div className={styles.langCols}>
          <div className={styles.langCol}>
            <span className={styles.langTitle}>English</span>
            <div className={styles.field}>
              <label htmlFor="title_en">Title</label>
              <input
                id="title_en"
                name="title_en"
                defaultValue={post?.title_en ?? ""}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="excerpt_en">Excerpt</label>
              <textarea
                id="excerpt_en"
                name="excerpt_en"
                rows={3}
                defaultValue={post?.excerpt_en ?? ""}
              />
            </div>
            <ContentField
              lang="EN"
              name="content_en"
              initial={post?.content_en ?? ""}
            />
          </div>

          <div className={styles.langCol}>
            <span className={styles.langTitle}>Tiếng Việt</span>
            <div className={styles.field}>
              <label htmlFor="title_vi">Tiêu đề</label>
              <input
                id="title_vi"
                name="title_vi"
                defaultValue={post?.title_vi ?? ""}
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="excerpt_vi">Mô tả ngắn</label>
              <textarea
                id="excerpt_vi"
                name="excerpt_vi"
                rows={3}
                defaultValue={post?.excerpt_vi ?? ""}
              />
            </div>
            <ContentField
              lang="VI"
              name="content_vi"
              initial={post?.content_vi ?? ""}
            />
          </div>
        </div>
      </div>

      <div className={styles.formActions}>
        <button type="submit" className={styles.saveBtn}>
          {isEdit ? "Save changes" : "Create post"}
        </button>
        <a href="/admin/blog" className={styles.cancelBtn}>
          Cancel
        </a>
      </div>
    </form>
  );
}
