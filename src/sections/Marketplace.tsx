export default function Marketplace() {
  return (
    <section style={{ background: 'var(--color-neutral-200)', width: '100%', borderTop: '1px solid var(--color-divider)' }}>
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'calc(var(--space-8) * 1.3) var(--space-6)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 'var(--space-2)',
          textAlign: 'center',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="8" height="8" />
          <rect x="13" y="3" width="8" height="8" />
          <rect x="3" y="13" width="8" height="8" />
          <rect x="13" y="13" width="8" height="8" />
        </svg>
        <h3 style={{ fontSize: 22, margin: 0 }}>Built for the Microsoft security ecosystem.</h3>
        <p style={{ fontSize: 15, opacity: 0.7, margin: 0 }}>Coming soon to the Microsoft Security Store.</p>
      </div>
    </section>
  );
}
