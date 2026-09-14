import { useHowItWorksFrame } from '@/hooks/useHowItWorksFrame';

export default function HowRixemWorks() {
  const { sectionRef, frameRef, frameHeight, revealed } = useHowItWorksFrame();

  return (
    <section id="how" ref={sectionRef} style={{ background: 'var(--color-neutral-200)', width: '100%', borderTop: '1px solid var(--color-divider)' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'calc(var(--space-8) * 2) var(--space-6)',
          opacity: revealed ? 1 : 0,
          transform: revealed ? 'translateY(0)' : 'translateY(28px)',
          transition: 'opacity .6s ease, transform .6s ease',
        }}
      >
        <div className="how-frame" style={{ position: 'relative', width: '100%', aspectRatio: '1773 / 1233', height: frameHeight ? `${frameHeight}px` : 'auto' }}>
          <iframe
            ref={frameRef}
            src="/Rixem How It Works Section.html"
            title="How Rixem works"
            scrolling="no"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}
