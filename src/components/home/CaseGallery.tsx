"use client";

import React, { useState } from "react";
import styles from "./home.module.css";

export default function CaseGallery({
  images,
  label,
  eager = false,
}: {
  images: { src: string; alt: string }[];
  label: string;
  eager?: boolean;
}) {
  const [active, setActive] = useState(0);
  const current = images[active];

  return (
    <div className={styles.gallery}>
      <div className={styles.frame}>
        <div className={styles.frameBar} aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          width={1200}
          height={651}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className={styles.frameImg}
        />
      </div>
      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              aria-label={`${label}: ${img.alt}`}
              className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
            >
              <img src={img.src} alt="" width={1200} height={651} loading="lazy" decoding="async" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
