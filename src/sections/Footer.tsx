import RixemLogo from '@/components/RixemLogo';

const FOOTER_LINKS = [
  { href: '#benefits', label: 'Benefits' },
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How It Works' },
  { href: '#about', label: 'About' },
  { href: 'mailto:hello@rixem.co?subject=Rixem%20enquiry', label: 'Contact' },
] as const;

export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-bg)', width: '100%' }}>
      <div
        className="footer-row"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: 'var(--space-6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-4)',
          borderTop: '1px solid var(--color-divider)',
        }}
      >
        <div style={{ color: 'var(--color-text)' }}>
          <RixemLogo size={16} />
        </div>
        <div className="footer-links" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-6)' }}>
          {FOOTER_LINKS.map((link) => (
            <a key={link.href} href={link.href} style={{ fontSize: 13, color: 'rgba(26,33,56,0.65)' }}>
              {link.label}
            </a>
          ))}
        </div>
        <div style={{ fontSize: 13, color: 'rgba(26,33,56,0.5)' }}>© 2026 Rixem</div>
      </div>
    </footer>
  );
}
