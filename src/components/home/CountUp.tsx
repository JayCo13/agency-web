"use client";

import { useLayoutEffect, useRef } from "react";

// Counts a stat like "5" or "2+" up from 0 when the page loads. The server
// renders the final value, so it is correct without JavaScript and for
// visitors who prefer reduced motion. The count writes straight to the DOM
// node to avoid re-rendering on every frame.
export default function CountUp({ value, delay = 0, duration = 1100 }: { value: string; delay?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    const match = value.match(/^(\d+)(.*)$/);
    if (!el || !match) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = Number(match[1]);
    const suffix = match[2];
    el.textContent = `0${suffix}`;

    let raf = 0;
    let start = 0;
    const timer = window.setTimeout(() => {
      const tick = (now: number) => {
        if (!start) start = now;
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = `${Math.round(eased * target)}${suffix}`;
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      window.clearTimeout(timer);
      cancelAnimationFrame(raf);
      el.textContent = value;
    };
  }, [value, delay, duration]);

  return <span ref={ref}>{value}</span>;
}
