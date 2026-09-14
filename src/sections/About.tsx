export default function About() {
  return (
    <section id="about" style={{ background: 'var(--color-bg)', width: '100%', borderTop: '1px solid var(--color-divider)' }}>
      <div
        className="grid-2"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'calc(var(--space-8) * 2) var(--space-6)',
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr',
          gap: 'calc(var(--space-8) * 1.5)',
          alignItems: 'center',
        }}
      >
        <div>
          <h2 style={{ fontSize: 30, margin: '0 0 var(--space-4)' }}>
            Built by a Security Architect &amp; GRC Practitioner Who Saw a Better Way
          </h2>
          <div style={{ width: 60, height: 2, background: 'var(--color-accent)', marginBottom: 'var(--space-4)' }} />
          <p style={{ fontSize: 16, opacity: 0.8, margin: '0 0 var(--space-3)' }}>
            I founded Rixem as an ex-Microsoft Security Architect and former BDO GRC Consulting Manager, with over a
            decade of experience in cyber risk and governance.
          </p>
          <p style={{ fontSize: 16, opacity: 0.8, margin: '0 0 var(--space-3)' }}>
            I saw security teams drowning in data while leaders struggled to turn it into confident, defensible
            decisions.
          </p>
          <p style={{ fontSize: 16, opacity: 0.8, margin: '0 0 var(--space-4)' }}>
            I built Rixem to bridge that gap: it turns live Microsoft security signals into risk intelligence in the
            language the business already speaks.
          </p>
          <blockquote
            style={{
              margin: 0,
              paddingLeft: 'var(--space-4)',
              borderLeft: '3px solid var(--color-accent)',
              fontSize: 18,
              fontWeight: 600,
              lineHeight: 1.4,
              color: 'var(--color-text)',
            }}
          >
            My goal is simple: empower teams to focus on reducing risk, not chasing evidence.
          </blockquote>
        </div>

        <div
          className="about-photo-card"
          style={{
            position: 'relative',
            border: '1px solid var(--color-divider)',
            borderRadius: 20,
            overflow: 'hidden',
            textAlign: 'center',
            transition: 'box-shadow .25s ease',
            maxWidth: 320,
            justifySelf: 'end',
          }}
        >
          <img
            src="/farah-founder.png"
            alt="Farah, founder of Rixem"
            style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
          />
          <div style={{ padding: 'var(--space-3)' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: 18 }}>Hi, I&apos;m Farah,</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-accent-700)' }}>Founder.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
