/**
 * Placeholder badge chip — swap for the real Microsoft Partner / UQ Ventures
 * badge artwork once it's available. Deliberately styled as an outlined text
 * chip rather than an approximation of the real logos.
 */
function BadgeChip({ label }: { label: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        fontFamily: 'var(--font-heading)',
        fontWeight: 600,
        fontSize: 13,
        color: 'var(--color-text)',
        border: '1px solid var(--color-divider)',
        borderRadius: 999,
        padding: '8px 18px',
        background: 'var(--color-bg)',
      }}
    >
      {label}
    </span>
  );
}

export default function BackedBy() {
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
          gap: 'var(--space-4)',
          textAlign: 'center',
        }}
      >
        <h3 style={{ fontSize: 22, margin: 0 }}>Supported by Microsoft &amp; UQ.</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-3)' }}>
          <BadgeChip label="Microsoft Partner — ISV Success" />
          <BadgeChip label="UQ Ventures — iLab 2026" />
        </div>
      </div>
    </section>
  );
}
