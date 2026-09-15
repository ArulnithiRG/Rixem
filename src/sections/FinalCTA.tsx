interface FinalCTAProps {
  ctaHref: string;
}

const ArrowRight = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13,5 20,12 13,19" />
  </svg>
);

/**
 * Dark, backdrop-transparent section (no explicit background, so the fixed
 * Deep Midnight <Backdrop /> shows through) — takes over the visual role the
 * removed "Our Mission" section used to play, per founder feedback.
 */
export default function FinalCTA({ ctaHref }: FinalCTAProps) {
  return (
    <section id="contact" style={{ position: 'relative', width: '100%' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: 'calc(var(--space-8) * 2) var(--space-6)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, margin: '0 0 var(--space-4)', color: 'var(--color-bg)' }}>Know your risk before the board asks.</h2>
        <p style={{ fontSize: 17, opacity: 0.8, color: 'var(--color-bg)', maxWidth: 600, margin: '0 auto var(--space-6)' }}>
          Get started with Rixem and turn your Microsoft security signals into a live, defensible risk graph.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
          <a
            href={ctaHref}
            className="final-cta-primary-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: 15,
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              borderRadius: 12,
              border: '1px solid transparent',
              padding: 'var(--space-3) var(--space-6)',
              transition: 'background .25s ease, transform .2s ease, box-shadow .2s ease',
            }}
          >
            Request a Demo
            <ArrowRight />
          </a>
          <a
            href="mailto:farah@rixem.co?subject=Rixem%20enquiry"
            className="hero-cta-secondary"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: 15,
              color: 'var(--color-bg)',
              borderRadius: 12,
              border: '1px solid rgba(251,250,247,0.3)',
              padding: 'var(--space-3) var(--space-6)',
              transition: 'background .2s ease, border-color .2s ease',
            }}
          >
            Connect With Us
          </a>
        </div>
      </div>
    </section>
  );
}
