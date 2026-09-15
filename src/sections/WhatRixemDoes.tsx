import type { CSSProperties } from 'react';
import { useFeaturesCarousel } from '@/hooks/useFeaturesCarousel';

interface Card {
  chip: string;
  title: string;
  body: string;
  headerIcon: JSX.Element;
  illustration: string;
}

const chipIconProps = {
  width: 26,
  height: 26,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'var(--color-accent)',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const CARDS: Card[] = [
  {
    chip: 'Risk Landscape',
    title: 'Prioritise with the graph',
    body: 'Every risk connects to the assets, controls, and initiatives around it, weighted by business impact, so you always know which fix reduces the most risk first.',
    headerIcon: (
      <svg {...chipIconProps}>
        <circle cx="12" cy="5" r="2" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="18" cy="19" r="2" />
        <line x1="12" y1="7" x2="6" y2="17" />
        <line x1="12" y1="7" x2="18" y2="17" />
      </svg>
    ),
    illustration:
      '<svg viewBox="0 0 600 200" width="100%" height="100%" role="img" aria-label="One fix reduces three risks at once, so it is ranked first"><path d="M350 106 C385 106 385 166 406 166" fill="none" stroke="#c3c8d2" stroke-width="1.3"/><path d="M274 156 C352 156 352 126 406 126" fill="none" stroke="#c3c8d2" stroke-width="1.3"/><path d="M310 56 C365 56 365 46 406 46" fill="none" stroke="#4d8bff" stroke-width="2"/><path d="M310 56 C365 56 365 86 406 86" fill="none" stroke="#4d8bff" stroke-width="2"/><path d="M310 56 C365 56 365 126 406 126" fill="none" stroke="#4d8bff" stroke-width="2"/><rect x="60" y="39" width="250" height="34" rx="17" fill="#fff" stroke="#4d8bff" stroke-width="2"/><text x="78" y="60.5" font-family="inherit" font-size="11.5" font-weight="600" fill="#1a2138">Patch internet-facing vulns</text><rect x="60" y="89" width="290" height="34" rx="17" fill="#fff" stroke="#e3e6ec" stroke-width="1"/><text x="78" y="110.5" font-family="inherit" font-size="10.5" font-weight="500" fill="#5b6577">Enforce MFA on privileged accounts</text><rect x="60" y="139" width="214" height="34" rx="17" fill="#fff" stroke="#e3e6ec" stroke-width="1"/><text x="80" y="160.5" font-family="inherit" font-size="13" font-weight="500" fill="#5b6577">Harden cloud config</text><text x="62" y="28" font-family="inherit" font-size="12" font-weight="600" fill="#2f5bb0">Fix first: reduces 3 risks</text><circle cx="415" cy="46" r="9" fill="#fff" stroke="#5b6577" stroke-width="1.6"/><text x="433" y="50.5" font-family="inherit" font-size="12" fill="#5b6577">Revenue loss</text><circle cx="415" cy="86" r="9" fill="#fff" stroke="#5b6577" stroke-width="1.6"/><text x="433" y="90.5" font-family="inherit" font-size="12" fill="#5b6577">Reputation damage</text><circle cx="415" cy="126" r="9" fill="#fff" stroke="#5b6577" stroke-width="1.6"/><text x="433" y="130.5" font-family="inherit" font-size="12" fill="#5b6577">Operational disruption</text><circle cx="415" cy="166" r="9" fill="#fff" stroke="#5b6577" stroke-width="1.6"/><text x="433" y="170.5" font-family="inherit" font-size="12" fill="#5b6577">Regulatory violations</text></svg>',
  },
  {
    chip: 'Strategy',
    title: 'Strategise toward your target state',
    body: 'See your target state, and where your residual risk lands as your initiatives close the risk gap.',
    headerIcon: (
      <svg {...chipIconProps}>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1.5" fill="var(--color-accent)" stroke="none" />
      </svg>
    ),
    illustration:
      '<svg viewBox="0 0 600 200" width="100%" height="100%" role="img" aria-label="Risk moving from baseline through today toward the target state as initiatives close the gap"><rect x="60" y="92" width="480" height="16" rx="8" fill="#e3e6ec"/><rect x="420" y="92" width="120" height="16" rx="8" fill="#cfe0ff"/><line x1="110" y1="100" x2="300" y2="100" stroke="#1a2138" stroke-width="4" stroke-linecap="round"/><line x1="300" y1="100" x2="510" y2="100" stroke="#4d8bff" stroke-width="4" stroke-dasharray="7 8" stroke-linecap="round"/><circle cx="370" cy="100" r="7" fill="#4d8bff"/><circle cx="440" cy="100" r="7" fill="#4d8bff"/><circle cx="110" cy="100" r="12" fill="#1a2138"/><circle cx="300" cy="100" r="11" fill="#4d8bff" stroke="#fff" stroke-width="3"/><circle cx="510" cy="100" r="13" fill="#fff" stroke="#4d8bff" stroke-width="4"/><text x="110" y="62" text-anchor="middle" font-family="inherit" font-size="14" font-weight="600" fill="#5b6577">Baseline</text><text x="300" y="62" text-anchor="middle" font-family="inherit" font-size="16" font-weight="600" fill="#1a2138">Today</text><text x="510" y="62" text-anchor="middle" font-family="inherit" font-size="16" font-weight="600" fill="#2f5bb0">Target</text><text x="405" y="148" text-anchor="middle" font-family="inherit" font-size="14" fill="#5b6577">Initiatives close the gap</text><text x="480" y="168" text-anchor="middle" font-family="inherit" font-size="14" fill="#2f5bb0">Your appetite</text></svg>',
  },
  {
    chip: 'Risk Register',
    title: 'Prove with a defensible risk register',
    body: 'Every risk is assessed against your own impact levels, likelihood thresholds, and risk appetite, and carries an estimated dollar exposure figure, backed by the evidence behind it, so it holds up with leadership, auditors, or regulators.',
    headerIcon: (
      <svg {...chipIconProps}>
        <rect x="6" y="3" width="12" height="18" />
        <line x1="9" y1="8" x2="15" y2="8" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
    illustration:
      '<svg viewBox="0 0 600 200" width="100%" height="100%" role="img" aria-label="Risk register rows, each with a rating and an estimated dollar exposure"><rect x="60" y="22" width="480" height="44" rx="10" fill="#fff" stroke="#e3e6ec"/><rect x="82" y="39" width="180" height="10" rx="5" fill="#c3c8d2"/><rect x="368" y="32" width="66" height="24" rx="12" fill="#e4edff"/><text x="401" y="48.5" text-anchor="middle" font-family="inherit" font-size="13" font-weight="500" fill="#1f3f80">High</text><text x="518" y="49.5" text-anchor="end" font-family="inherit" font-size="15" font-weight="600" fill="#1a2138">$1.8M</text><rect x="60" y="78" width="480" height="44" rx="10" fill="#fff" stroke="#e3e6ec"/><rect x="82" y="95" width="150" height="10" rx="5" fill="#c3c8d2"/><rect x="368" y="88" width="66" height="24" rx="12" fill="#e4edff"/><text x="401" y="104.5" text-anchor="middle" font-family="inherit" font-size="13" font-weight="500" fill="#1f3f80">Med</text><text x="518" y="105.5" text-anchor="end" font-family="inherit" font-size="15" font-weight="600" fill="#1a2138">$640K</text><rect x="60" y="134" width="480" height="44" rx="10" fill="#fff" stroke="#e3e6ec"/><rect x="82" y="151" width="200" height="10" rx="5" fill="#c3c8d2"/><rect x="368" y="144" width="66" height="24" rx="12" fill="#e4edff"/><text x="401" y="160.5" text-anchor="middle" font-family="inherit" font-size="13" font-weight="500" fill="#1f3f80">Low</text><text x="518" y="161.5" text-anchor="end" font-family="inherit" font-size="15" font-weight="600" fill="#1a2138">$90K</text></svg>',
  },
  {
    chip: 'Reporting',
    title: 'Report without the manual work',
    body: 'Translate technical risk data into leadership and board-ready updates, backed by the evidence behind them.',
    headerIcon: (
      <svg {...chipIconProps}>
        <path d="M6 3h9l3 3v15H6z" />
        <polyline points="9,13 11,15 15,10" />
      </svg>
    ),
    illustration:
      '<svg viewBox="0 0 600 200" width="100%" height="100%" role="img" aria-label="A stack of three report documents turning into an executive briefing"><rect x="182" y="18" width="120" height="150" rx="10" fill="#fff" stroke="#d9dce3"/><rect x="172" y="28" width="120" height="150" rx="10" fill="#fff" stroke="#d9dce3"/><rect x="162" y="38" width="120" height="150" rx="10" fill="#fff" stroke="#e3e6ec"/><rect x="178" y="54" width="60" height="9" rx="4.5" fill="#1a2138"/><rect x="178" y="76" width="24" height="24" rx="4" fill="#4d8bff"/><rect x="206" y="76" width="24" height="24" rx="4" fill="#8fb8ff"/><rect x="178" y="112" width="90" height="7" rx="3.5" fill="#c3c8d2"/><rect x="178" y="126" width="70" height="7" rx="3.5" fill="#c3c8d2"/><rect x="178" y="140" width="80" height="7" rx="3.5" fill="#c3c8d2"/><circle cx="270" cy="46" r="15" fill="#22c55e"/><path d="M262 46 l6 6 l11 -13" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/><text x="330" y="88" font-family="inherit" font-size="16" font-weight="600" fill="#1a2138">From technical data to</text><text x="330" y="112" font-family="inherit" font-size="16" font-weight="600" fill="#1a2138">executive briefing, instantly</text></svg>',
  },
  {
    chip: 'Dashboard',
    title: 'Track progress, past and projected',
    body: 'Track how your programs and risks are progressing against your risk appetite, over time.',
    headerIcon: (
      <svg {...chipIconProps}>
        <line x1="6" y1="20" x2="6" y2="12" />
        <line x1="12" y1="20" x2="12" y2="7" />
        <line x1="18" y1="20" x2="18" y2="15" />
      </svg>
    ),
    illustration:
      '<svg viewBox="0 0 600 200" width="100%" height="100%" role="img" aria-label="Risk trending down over time into the within appetite band, with a projected future segment"><rect x="60" y="116" width="525" height="54" fill="#e4edff"/><line x1="60" y1="170" x2="585" y2="170" stroke="#c3c8d2"/><text x="573" y="160" text-anchor="end" font-family="inherit" font-size="14" font-weight="500" fill="#2f5bb0">Within appetite</text><polyline points="68,24 140,36 212,31 284,66 356,92 428,112 532,138" fill="none" stroke="#1a2138" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round"/><polyline points="532,138 585,158" fill="none" stroke="#4d8bff" stroke-width="2.6" stroke-linejoin="round" stroke-linecap="round" stroke-dasharray="5 6"/><circle cx="68" cy="24" r="5" fill="#1a2138"/><circle cx="532" cy="138" r="6" fill="#1a2138" stroke="#fff" stroke-width="2"/><circle cx="585" cy="158" r="6" fill="#fff" stroke="#4d8bff" stroke-width="2.5"/><text x="518" y="192" text-anchor="end" font-family="inherit" font-size="13" fill="#8d96a6">Today</text><text x="583" y="192" text-anchor="end" font-family="inherit" font-size="13" fill="#8d96a6">Target</text></svg>',
  },
];

const ChevronIcon = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    {direction === 'left' ? <polyline points="15,6 9,12 15,18" /> : <polyline points="9,6 15,12 9,18" />}
  </svg>
);

export default function WhatRixemDoes() {
  const { sectionRef, trackRef, active, goToCard } = useFeaturesCarousel(CARDS.length);

  const navBtnStyle: CSSProperties = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 44,
    height: 44,
    borderRadius: '50%',
    border: '1px solid rgba(251,250,247,0.25)',
    background: 'rgba(251,250,247,0.08)',
    color: 'var(--color-bg)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 2,
    transition: 'background .2s ease, border-color .2s ease',
  };

  return (
    <section id="features" ref={sectionRef} style={{ position: 'relative', height: '500vh' }}>
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <div style={{ flex: 'none', textAlign: 'center', maxWidth: 640, margin: '24px auto 10px' }}>
          <h2 style={{ fontSize: 32, margin: '0 0 var(--space-2)', color: 'var(--color-bg)' }}>What Rixem Does</h2>
          <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-accent-300)', margin: 0 }}>
            Prioritise, strategise, prove, report, and track, all from the same risk graph.
          </p>
        </div>

        <div style={{ position: 'relative', flex: 1, minHeight: 0 }}>
        <button
          type="button"
          className="carousel-nav-btn"
          aria-label="Previous"
          onClick={() => goToCard(active - 1)}
          disabled={active === 0}
          style={{ ...navBtnStyle, left: 12, opacity: active === 0 ? 0.35 : 1, cursor: active === 0 ? 'default' : 'pointer' }}
        >
          <ChevronIcon direction="left" />
        </button>
        <button
          type="button"
          className="carousel-nav-btn"
          aria-label="Next"
          onClick={() => goToCard(active + 1)}
          disabled={active === CARDS.length - 1}
          style={{ ...navBtnStyle, right: 12, opacity: active === CARDS.length - 1 ? 0.35 : 1, cursor: active === CARDS.length - 1 ? 'default' : 'pointer' }}
        >
          <ChevronIcon direction="right" />
        </button>
        <div ref={trackRef} style={{ height: '100%', display: 'flex', alignItems: 'center', overflowX: 'hidden', overflowY: 'hidden' }}>
          <div style={{ display: 'flex', gap: 'var(--space-6)', padding: '0 calc(50% - 300px)', width: 'max-content' }}>
            {CARDS.map((card, i) => {
              const isActive = active === i;
              return (
                <div
                  key={card.chip}
                  style={{
                    flex: 'none',
                    width: 600,
                    height: 'min(46vh, 400px)',
                    border: `2px solid ${isActive ? 'var(--color-accent-300)' : 'rgba(251,250,247,0.2)'}`,
                    borderRadius: 24,
                    background: 'var(--color-bg)',
                    padding: 'var(--space-4)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 'var(--space-3)',
                    opacity: isActive ? 1 : 0.32,
                    transform: `scale(${isActive ? 1.04 : 0.82})`,
                    transition: 'opacity .35s ease, transform .35s ease, border-color .35s ease',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    {card.headerIcon}
                    <span
                      style={{
                        fontSize: 12,
                        fontWeight: 600,
                        letterSpacing: '0.04em',
                        textTransform: 'uppercase',
                        color: 'var(--color-accent-700)',
                        background: 'var(--color-accent-100)',
                        borderRadius: 999,
                        padding: '5px 12px',
                      }}
                    >
                      {card.chip}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 23, margin: 0, color: 'var(--color-text)' }}>{card.title}</h3>
                  <p
                    style={{
                      fontSize: 14,
                      opacity: 0.8,
                      margin: 0,
                      color: 'var(--color-text)',
                      lineHeight: 1.45,
                      overflow: 'hidden',
                      display: '-webkit-box',
                      WebkitLineClamp: 5,
                      WebkitBoxOrient: 'vertical',
                      flexShrink: 0,
                    }}
                  >
                    {card.body}
                  </p>
                  <div
                    style={{
                      boxSizing: 'border-box',
                      flex: 'none',
                      height: 170,
                      marginTop: 'auto',
                      border: '1px solid var(--color-divider)',
                      borderRadius: 14,
                      background: 'rgba(26,33,56,0.03)',
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                    dangerouslySetInnerHTML={{ __html: card.illustration }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 6 }}>
          {CARDS.map((card, i) => (
            <button
              key={card.chip}
              type="button"
              aria-label={`Go to ${card.title}`}
              aria-current={active === i}
              onClick={() => goToCard(i)}
              style={{
                width: 34,
                height: 4,
                padding: 0,
                border: 0,
                cursor: 'pointer',
                background: active === i ? 'var(--color-accent-300)' : 'rgba(251,250,247,0.25)',
                transition: 'background .3s ease',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
