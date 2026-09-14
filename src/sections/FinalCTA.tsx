interface FinalCTAProps {
  ctaHref: string;
}

const ArrowRight = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13,5 20,12 13,19" />
  </svg>
);

export default function FinalCTA({ ctaHref }: FinalCTAProps) {
  return (
    <section id="contact" style={{ background: 'var(--color-bg)', width: '100%' }}>
      <div style={{ maxWidth: 860, margin: '0 auto', padding: 'calc(var(--space-8) * 2) var(--space-6)', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, margin: '0 0 var(--space-4)' }}>Ready to Modernise Your Security Risk Management?</h2>
        <p style={{ fontSize: 17, opacity: 0.75, maxWidth: 600, margin: '0 auto var(--space-6)' }}>
          Get started with Rixem and turn your Microsoft security signals into real-time, evidence-based risk
          insights.
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
            className="outline-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: 15,
              color: 'var(--color-text)',
              borderRadius: 12,
              border: '1px solid var(--color-divider)',
              padding: 'var(--space-3) var(--space-6)',
              transition: 'background .2s ease, border-color .2s ease',
            }}
          >
            Connect With Us
          </a>
        </div>
        <p style={{ fontSize: 14, opacity: 0.75, margin: '16px 0 0' }}>
          Or email us at <a href="mailto:farah@rixem.co">farah@rixem.co</a>
        </p>
      </div>
    </section>
  );
}
