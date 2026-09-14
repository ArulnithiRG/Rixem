/**
 * Fixed, full-viewport Deep Midnight layer with two flowing accent lines.
 * Sits at z-index -1 behind the header/hero; light sections paint opaque on
 * top of it further down the page.
 */
export default function Backdrop() {
  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        overflow: 'hidden',
        background: 'var(--color-accent-900)',
        boxShadow: 'inset 0 -120px 200px rgba(0,0,0,0.35)',
      }}
    >
      <svg
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }}
        viewBox="0 0 1200 700"
        preserveAspectRatio="none"
      >
        <path
          d="M0,420 C260,340 380,520 620,440 C860,360 940,260 1200,320"
          fill="none"
          stroke="var(--color-accent-300)"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <path
          d="M0,470 C280,560 420,380 660,460 C900,540 980,420 1200,460"
          fill="none"
          stroke="var(--color-accent-400)"
          strokeWidth="1.5"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}
