"use client";
import React, { useState, useEffect, useRef } from 'react';
import styles from './ScrollToTop.module.css';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const visibleRef = useRef(false);

  useEffect(() => {
    // Coalesce to one read per frame and only touch React state when the
    // threshold is actually crossed, instead of on every scroll event.
    let ticking = false;
    const check = () => {
      ticking = false;
      const next = window.scrollY > 500;
      if (next !== visibleRef.current) {
        visibleRef.current = next;
        setIsVisible(next);
      }
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(check);
    };

    check();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`${styles.wrapper} ${isVisible ? styles.visible : styles.hidden}`}>
      <button
        onClick={scrollToTop}
        className={styles.scrollTopBtn}
        aria-label="Scroll to top"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
    </div>
  );
}
