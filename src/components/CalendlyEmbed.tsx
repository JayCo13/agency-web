'use client';

import { useEffect, useRef, useState } from 'react';

interface CalendlyEmbedProps {
  url: string;
}

export default function CalendlyEmbed({ url }: CalendlyEmbedProps) {
  const holderRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  // Calendly's widget.js plus its iframe is a heavy third-party payload sitting
  // at the very bottom of the page. Hold it back until the booking section is
  // actually approaching, so it stops competing for the main thread on load.
  useEffect(() => {
    const holder = holderRef.current;
    if (!holder) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px' }
    );
    observer.observe(holder);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoad) return;

    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      link.remove();
      script.remove();
    };
  }, [shouldLoad]);

  // The wrapper keeps the 700px slot reserved either way, so promoting the
  // placeholder to the real widget causes no layout shift.
  return (
    <div ref={holderRef} style={{ minWidth: '320px', height: '700px', width: '100%' }}>
      {shouldLoad ? (
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{ minWidth: '320px', height: '700px', width: '100%' }}
        />
      ) : null}
    </div>
  );
}
