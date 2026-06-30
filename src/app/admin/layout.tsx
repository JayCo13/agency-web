import { notFound } from "next/navigation";
import styles from "./admin.module.css";

// Hard gate: the entire /admin subtree 404s in production. Combined with the
// service-role key only living in .env.local, the admin is local-only.
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (process.env.NODE_ENV === "production") notFound();

  return (
    <div className={styles.shell}>
      <header className={styles.topbar}>
        <a href="/admin/blog" className={styles.brand}>
          TicoSystem · Blog Admin
        </a>
        <span className={styles.localBadge}>local only</span>
      </header>
      <div className={styles.body}>{children}</div>
    </div>
  );
}
