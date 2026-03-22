"use client";
import React, { useState } from 'react';
import styles from '@/app/page.module.css';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLineTop : ''}`} />
        <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLineMid : ''}`} />
        <span className={`${styles.hamburgerLine} ${isOpen ? styles.hamburgerLineBot : ''}`} />
      </button>

      {isOpen && (
        <div className={styles.mobileMenu}>
          <a href="#work" onClick={() => setIsOpen(false)}>Work</a>
          <a href="#demo" onClick={() => setIsOpen(false)}>Live Demo</a>
          <a href="#process" onClick={() => setIsOpen(false)}>Process</a>
          <a href="#expertise" onClick={() => setIsOpen(false)}>Expertise</a>
          <a href="#contact" className={styles.mobileMenuCta} onClick={() => setIsOpen(false)}>
            Book a Call Now
          </a>
        </div>
      )}
    </>
  );
}
