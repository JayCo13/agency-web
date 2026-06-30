import styles from "../admin.module.css";
import { adminListPosts, isAdminEnabled } from "@/lib/supabaseAdmin";
import DeletePostButton from "@/components/admin/DeletePostButton";

// Always run fresh — the admin must reflect the current DB, never a cache.
export const dynamic = "force-dynamic";

function formatDate(iso: string | null): string {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default async function AdminBlogList() {
  if (!isAdminEnabled()) {
    return (
      <div className={styles.warn}>
        <strong>Admin not configured.</strong> Add{" "}
        <code>SUPABASE_SERVICE_ROLE_KEY</code> (and{" "}
        <code>NEXT_PUBLIC_SUPABASE_URL</code>) to your <code>.env.local</code>{" "}
        and restart <code>npm run dev</code>. Get the service-role key from
        Supabase → Project Settings → API. Never put this key on Netlify.
      </div>
    );
  }

  let posts;
  try {
    posts = await adminListPosts();
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    const missingTable = /tico_blog_posts/.test(message) && /schema|find/i.test(message);
    return (
      <div className={styles.warn}>
        {missingTable ? (
          <>
            <strong>Table not found.</strong> The <code>tico_blog_posts</code>{" "}
            table doesn&apos;t exist yet. Open your Supabase project → SQL Editor,
            paste the contents of <code>supabase/schema.sql</code> and run it,
            then reload this page.
          </>
        ) : (
          <>
            <strong>Supabase error:</strong> {message}
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <div className={styles.listHead}>
        <h1>Posts ({posts.length})</h1>
        <a href="/admin/blog/new" className={styles.newBtn}>
          + New post
        </a>
      </div>

      {posts.length === 0 ? (
        <div className={styles.empty}>
          No posts yet. Click <strong>+ New post</strong> to write your first
          one.
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Title</th>
              <th>Slug</th>
              <th>Status</th>
              <th>Published</th>
              <th>Updated</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title_en || post.title_vi || "(untitled)"}</td>
                <td>{post.slug}</td>
                <td>
                  <span
                    className={
                      post.status === "published"
                        ? styles.statusPub
                        : styles.statusDraft
                    }
                  >
                    {post.status}
                  </span>
                </td>
                <td>{formatDate(post.published_at)}</td>
                <td>{formatDate(post.updated_at)}</td>
                <td>
                  <div className={styles.rowActions}>
                    <a
                      href={`/admin/blog/${post.id}/edit`}
                      className={styles.editLink}
                    >
                      Edit
                    </a>
                    {post.status === "published" && (
                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.viewLink}
                      >
                        View
                      </a>
                    )}
                    <DeletePostButton
                      id={post.id}
                      title={post.title_en || post.title_vi || post.slug}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
