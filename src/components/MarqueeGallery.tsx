"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from '@/app/page.module.css';

interface MarqueeItem {
  img: number;
  category: string;
  title: string;
}

export default function MarqueeGallery({ items }: { items: MarqueeItem[] }) {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const handleClick = (e: React.MouseEvent, key: string) => {
    e.stopPropagation();
    setActiveIndex(prev => (prev === key ? null : key));
  };

  // Close when clicking outside any item
  useEffect(() => {
    const handleOutsideClick = () => setActiveIndex(null);
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  const renderItem = (item: MarqueeItem, key: string) => {
    const isActive = activeIndex === key;
    return (
      <div
        key={key}
        className={`${styles.marqueeItem} ${isActive ? styles.marqueeItemActive : ''}`}
        onClick={(e) => handleClick(e, key)}
      >
        <img src={`/projects/${item.img}.png`} alt={item.title} />
        <div className={`${styles.marqueeOverlay} ${isActive ? styles.marqueeOverlayVisible : ''}`}>
          <span className={styles.marqueeCategory}>{item.category}</span>
          <h4 className={styles.marqueeTitle}>{item.title}</h4>
        </div>
      </div>
    );
  };

  return (
    <section id="work" className={styles.marqueeSection} ref={sectionRef}>
      <div className={styles.marqueeHint}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
        </svg>
        <span>Hover to explore our projects</span>
      </div>
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {items.map((item, i) => renderItem(item, `orig-${i}`))}
          {items.map((item, i) => renderItem(item, `dup-${i}`))}
        </div>
      </div>
    </section>
  );
}
