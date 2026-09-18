interface HeroProps {
  ctaHref: string;
}

const ArrowRight = ({ size = 17 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13,5 20,12 13,19" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
  </svg>
);

const GridIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="8" height="8" />
    <rect x="13" y="3" width="8" height="8" />
    <rect x="3" y="13" width="8" height="8" />
    <rect x="13" y="13" width="8" height="8" />
  </svg>
);

const HeroChip = ({ icon, label }: { icon: JSX.Element; label: string }) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      fontWeight: 500,
      color: 'rgba(251,250,247,0.85)',
      border: '1px solid rgba(251,250,247,0.25)',
      borderRadius: 999,
      padding: '8px 14px',
      background: 'rgba(251,250,247,0.06)',
    }}
  >
    {icon}
    {label}
  </span>
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
            From months of manual risk analysis to continuous risk intelligence.
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
              href="mailto:hello@rixem.co?subject=Rixem%20enquiry"
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
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)', marginTop: 'var(--space-4)' }}>
            <HeroChip icon={<ShieldIcon />} label="Built on your enterprise risk framework" />
            <HeroChip icon={<GridIcon />} label="Powered by your Microsoft security data" />
          </div>
        </div>
      </div>
    </section>
  );
}
