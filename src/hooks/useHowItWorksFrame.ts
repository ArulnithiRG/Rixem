import { useEffect, useRef, useState } from 'react';

/**
 * Drives the "How Rixem Works" embed: a scroll-reveal fade/slide (fires once,
 * threshold 0.25) plus a dynamic iframe height driven by postMessage from
 * the embedded page ({ type: 'rixem-how:height', height }), so the white
 * card fits its content exactly instead of relying on a fixed aspect ratio.
 */
export function useHowItWorksFrame() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const [frameHeight, setFrameHeight] = useState(0);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const onMessage = (e: MessageEvent) => {
      const d = e.data;
      if (!d || d.type !== 'rixem-how:height') return;
      const frame = frameRef.current;
      if (frame && e.source !== frame.contentWindow) return;
      const h = Math.round(Number(d.height));
      if (h > 0) setFrameHeight((prev) => (h !== prev ? h : prev));
    };
    window.addEventListener('message', onMessage);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      window.removeEventListener('message', onMessage);
      observer.disconnect();
    };
  }, []);

  return { sectionRef, frameRef, frameHeight, revealed };
}
