interface Benefit {
  title: string;
  body: string;
  icon: JSX.Element;
}

const iconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'var(--color-accent)',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  style: { marginBottom: 'var(--space-4)' },
};

const BENEFITS: Benefit[] = [
  {
    title: 'A living map of your risk landscape',
    body: 'One connected risk structure, not rows in a spreadsheet. Prioritise the fixes with the widest impact across the graph.',
    icon: (
      <svg {...iconProps}>
        <polygon points="13,2 5,14 11,14 9,22 17,10 11,10" />
      </svg>
    ),
  },
  {
    title: 'Ranked by business impact',
    body: 'Every risk is measured in business impact that reads the same in a sprint backlog and a board briefing pack.',
    icon: (
      <svg {...iconProps}>
        <rect x="6" y="3" width="12" height="18" />
        <polyline points="9,12 11,14 15,9" />
      </svg>
    ),
  },
  {
    title: 'Your framework, not ours',
    body: 'Risk is assessed against your own impact levels, likelihood thresholds, and risk appetite, grounded in ISO 31000/27005 methodology.',
    icon: (
      <svg {...iconProps}>
        <polygon points="12,2 20,6 20,13 12,22 4,13 4,6" />
      </svg>
    ),
  },
  {
    title: 'Always current',
    body: 'The graph reflects the current state of your controls, assets, and threats, refreshed regularly, not reassessed once a quarter.',
    icon: (
      <svg {...iconProps}>
        <rect x="5" y="11" width="14" height="10" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    ),
  },
  {
    title: 'Built on your Microsoft security stack',
    body: 'Every signal comes from the sensors and telemetry you already run.',
    icon: (
      <svg {...iconProps}>
        <line x1="12" y1="3" x2="12" y2="9" />
        <line x1="12" y1="15" x2="12" y2="21" />
        <line x1="3" y1="12" x2="9" y2="12" />
        <line x1="15" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    title: 'Never leaves your tenant',
    body: 'Hosted inside your own environment. Full sovereignty, compliance, zero external data storage.',
    icon: (
      <svg {...iconProps}>
        <line x1="6" y1="20" x2="6" y2="12" />
        <line x1="12" y1="20" x2="12" y2="7" />
        <line x1="18" y1="20" x2="18" y2="15" />
      </svg>
    ),
  },
];

export default function WhyChooseRixem() {
  return (
    <section id="benefits" style={{ background: 'var(--color-bg)', width: '100%', borderTop: '1px solid var(--color-divider)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: 'calc(var(--space-8) * 2) var(--space-6)' }}>
        <div style={{ textAlign: 'center', maxWidth: 640, margin: '0 auto calc(var(--space-8) * 1.5)' }}>
          <h2 style={{ fontSize: 36, margin: '0 0 var(--space-3)' }}>Why Choose Rixem</h2>
          <p style={{ fontSize: 17, fontWeight: 600, color: 'var(--color-accent-700)', margin: 0 }}>
            Cut the manual work between a security signal and a defensible decision.
          </p>
        </div>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-8)' }}>
          {BENEFITS.map((b) => (
            <div
              key={b.title}
              className="benefit-card"
              style={{
                border: '1px solid var(--color-divider)',
                borderRadius: 20,
                padding: 'var(--space-6)',
                transition: 'transform .25s ease, box-shadow .25s ease, border-color .25s ease',
              }}
            >
              {b.icon}
              <h4 style={{ fontSize: 18, margin: '0 0 var(--space-2)' }}>{b.title}</h4>
              <p style={{ fontSize: 14, opacity: 0.75, margin: 0 }}>{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
