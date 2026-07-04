'use client';

import { useEffect } from 'react';

// Toggles a "scrolled" class on the site header once the page is scrolled past
// the hero top, so the header can be transparent at the very top and solid
// (frosted) once you scroll down. Renders nothing.
export default function ScrollHeader({ scrolledClass }: { scrolledClass: string }) {
  useEffect(() => {
    const header = document.querySelector('header');
    if (!header) return;

    const onScroll = () => {
      header.classList.toggle(scrolledClass, window.scrollY > 40);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrolledClass]);

  return null;
}
