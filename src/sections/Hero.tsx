interface HeroProps {
  ctaHref: string;
}

const ArrowRight = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13,5 20,12 13,19" />
  </svg>
);

export default function Hero({ ctaHref }: HeroProps) {
  return (
    <section style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', minHeight: '92vh' }}>
      <div
        className="hero-grid"
        style={{
          position: 'relative',
          maxWidth: 1240,
          margin: '0 auto',
          padding: 'calc(var(--space-8) * 1.4) var(--space-6) calc(var(--space-8) * 1.8)',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          gap: 'calc(var(--space-8) * 2)',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <div style={{ position: 'relative' }}>
          <h1 style={{ fontSize: 72, lineHeight: 1.0, margin: '0 0 var(--space-4)', color: 'var(--color-bg)', letterSpacing: '-0.015em' }}>
            One connected <span style={{ color: 'var(--color-accent-300)' }}>cyber risk graph.</span>
          </h1>
          <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 27, color: 'var(--color-accent-300)', margin: '0 0 var(--space-3)', lineHeight: 1.3 }}>
            Prioritise, Reduce, Communicate Cyber Risk.
          </p>
          <p style={{ fontSize: 18, color: 'rgba(251,250,247,0.7)', maxWidth: 560, margin: '0 0 var(--space-6)' }}>
            Built on your own risk framework. Powered by the Microsoft security data you already have.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)' }}>
            <a
              href={ctaHref}
              className="hero-cta-primary"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: 16,
                color: '#ffffff',
                borderRadius: 12,
                border: '1px solid transparent',
                padding: 'var(--space-4) var(--space-6)',
                transition: 'transform .2s ease, box-shadow .2s ease',
                backgroundColor: 'var(--color-accent)',
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
                fontSize: 16,
                color: 'var(--color-bg)',
                borderRadius: 12,
                border: '1px solid rgba(251,250,247,0.3)',
                padding: 'var(--space-4) var(--space-6)',
                transition: 'background .2s ease, border-color .2s ease',
              }}
            >
              Connect With Us
            </a>
          </div>
        </div>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', width: '100%', aspectRatio: '1000 / 680' }}>
            <iframe
              src="/Rixem Hero Product Preview.html"
              title="Rixem risk graph and risk detail"
              scrolling="no"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0, display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
