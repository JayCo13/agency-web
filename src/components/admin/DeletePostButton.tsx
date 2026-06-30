"use client";

import React from "react";
import styles from "@/app/admin/admin.module.css";
import { deletePost } from "@/app/admin/blog/actions";

export default function DeletePostButton({
  id,
  title,
}: {
  id: string;
  title: string;
}) {
  return (
    <form
      action={deletePost}
      onSubmit={(e) => {
        if (!confirm(`Delete "${title}"? This cannot be undone.`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button type="submit" className={styles.deleteBtn}>
        Delete
      </button>
    </form>
  );
}
