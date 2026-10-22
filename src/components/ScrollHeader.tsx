'use client';

import { useEffect } from 'react';

// Toggles a "scrolled" class on the site header once the page is scrolled past
// the hero top, so the header can be transparent at the very top and solid
// (frosted) once you scroll down. Renders nothing.
export default function ScrollHeader({ scrolledClass }: { scrolledClass: string }) {
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;

    // Batch into a rAF and only touch the class list when the state flips —
    // the frosted header uses backdrop-filter, so a redundant class write is
    // not as free as it looks.
    let scrolled: boolean | null = null;
    let ticking = false;
    const apply = () => {
      ticking = false;
      const next = window.scrollY > 40;
      if (next === scrolled) return;
      scrolled = next;
      header.classList.toggle(scrolledClass, next);
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolledClass]);

  return null;
}
