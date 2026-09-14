import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-driven "What Rixem Does" carousel. The section is 500vh tall with a
 * sticky inner panel; as the section scrolls through the viewport, `active`
 * advances 0→4 and the horizontal track's scrollLeft is driven
 * programmatically to match — ported 1:1 from the DC Component's onScroll
 * handler (progress = -rect.top / (rect.height - innerHeight)).
 */
export function useFeaturesCarousel(cardCount: number) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const progressed = -rect.top;
      const progress = total > 0 ? Math.min(1, Math.max(0, progressed / total)) : 0;
      const nextActive = Math.min(cardCount - 1, Math.floor(progress * cardCount));

      const track = trackRef.current;
      if (track) {
        track.scrollLeft = progress * (track.scrollWidth - track.clientWidth);
      }

      setActive((prev) => (prev === nextActive ? prev : nextActive));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [cardCount]);

  return { sectionRef, trackRef, active };
}
