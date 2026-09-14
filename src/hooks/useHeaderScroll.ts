import { useEffect, useRef, useState } from 'react';

/**
 * Sticky-header scroll behaviour ported from the DC Component class:
 * - `scrolled` flips once you're 8px down (swaps the header to a solid bg).
 * - The header itself never hides (an earlier hide-on-scroll-down pass was
 *   removed per design feedback), but scrolling down past 120px still closes
 *   an open mobile menu, same as the source state machine.
 * - The mobile menu also closes on outside click and Escape.
 */
export function useHeaderScroll() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuBtnRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      const hiddenPastThreshold = y > lastY.current && y > 120;
      lastY.current = y;
      if (hiddenPastThreshold) setMenuOpen(false);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const onDocClick = (e: MouseEvent) => {
      const btn = menuBtnRef.current;
      const panel = menuPanelRef.current;
      if ((btn && btn.contains(e.target as Node)) || (panel && panel.contains(e.target as Node))) return;
      setMenuOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return { scrolled, menuOpen, toggleMenu, closeMenu, menuBtnRef, menuPanelRef };
}
