"use client";

import React, { useState } from "react";
import styles from "./templates.module.css";

type Copy = {
  back: string;
  desktop: string;
  mobile: string;
  newTab: string;
  use: string;
  loading: string;
  device: string;
};

/**
 * Xem thử một mẫu ngay trên web công ty: shop demo chạy thật trong khung, đổi giữa khổ máy tính
 * và điện thoại. Trên màn hình nhỏ chỉ có khổ điện thoại nên ẩn nút chuyển.
 */
export default function TemplatePreview({
  url,
  title,
  industry,
  backHref,
  useHref,
  copy,
}: {
  url: string;
  title: string;
  industry: string;
  backHref: string;
  useHref: string;
  copy: Copy;
}) {
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  return (
    <div className={styles.preview}>
      <header className={styles.bar}>
        <a href={backHref} className={styles.barBack} aria-label={copy.back}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span>{copy.back}</span>
        </a>
        <div className={styles.barTitle}>
          <strong>{title}</strong>
          <span>{industry}</span>
        </div>
        <div className={styles.barDevice} role="group" aria-label={copy.device}>
          <button type="button" aria-pressed={device === "desktop"} onClick={() => setDevice("desktop")}>
            {copy.desktop}
          </button>
          <button type="button" aria-pressed={device === "mobile"} onClick={() => setDevice("mobile")}>
            {copy.mobile}
          </button>
        </div>
        <div className={styles.barActions}>
          <a href={url} target="_blank" rel="noopener" className={styles.barGhost}>
            {copy.newTab}
          </a>
          <a href={useHref} className={styles.barPrimary}>
            {copy.use}
          </a>
        </div>
      </header>

      <div className={`${styles.stage} ${device === "mobile" ? styles.stageMobile : ""}`}>
        <div className={styles.frameWrap}>
          {/* Nằm sau khung: web mẫu hiện ra là tự che dòng này */}
          <p className={styles.loading}>{copy.loading}</p>
          <iframe src={url} title={title} className={styles.frame} />
        </div>
      </div>
    </div>
  );
}
