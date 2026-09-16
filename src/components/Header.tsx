import RixemLogo from './RixemLogo';
import { useHeaderScroll } from '@/hooks/useHeaderScroll';

interface HeaderProps {
  ctaHref: string;
}

const ArrowRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12" />
    <polyline points="13,5 20,12 13,19" />
  </svg>
);

const NAV_LINKS = [
  { href: '#benefits', label: 'Benefits' },
  { href: '#features', label: 'Features' },
  { href: '#how', label: 'How It Works' },
] as const;

export default function Header({ ctaHref }: HeaderProps) {
  const { scrolled, menuOpen, toggleMenu, closeMenu, menuBtnRef, menuPanelRef } = useHeaderScroll();

  const navDynamic = scrolled
    ? {
        padding: 'var(--space-2) var(--space-6)',
        background: 'var(--color-bg)',
        borderBottom: '1px solid var(--color-divider)',
        boxShadow: '0 4px 20px rgba(26,33,56,0.10)',
      }
    : {
        padding: 'var(--space-4) var(--space-6)',
        background: 'transparent',
        borderBottom: '1px solid transparent',
        boxShadow: 'none',
      };
  const navTextColor = scrolled ? 'var(--color-text)' : 'var(--color-bg)';
  const navLogoColor = scrolled ? 'var(--color-text)' : 'var(--color-bg)';

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        transition: 'transform .3s ease, padding .25s ease, background .25s ease, box-shadow .25s ease',
        transform: 'translateY(0)',
        ...navDynamic,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-6)',
        }}
      >
        <div style={{ color: navLogoColor, transition: 'color .25s ease' }}>
          <RixemLogo size={28} />
        </div>

        <nav
          className="site-nav"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-6)',
            borderRadius: 999,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: '#F2F2F35B',
            padding: '10px 24px',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link-hover" style={{ fontSize: 14, color: navTextColor, transition: 'color .2s ease' }}>
              {link.label}
            </a>
          ))}
          <a href="#about" className="nav-link-hover" style={{ fontSize: 14, color: navTextColor, transition: 'color .2s ease' }}>
            About
          </a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <a
            className="nav-contact-link nav-link-hover"
            href="mailto:hello@rixem.co?subject=Rixem%20enquiry"
            style={{ fontSize: 14, color: navTextColor, transition: 'color .2s ease' }}
          >
            Contact
          </a>
          <a
            className="nav-demo-btn"
            href={ctaHref}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: 14,
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              borderRadius: 12,
              border: '1px solid transparent',
              padding: 'var(--space-2) var(--space-4)',
              transition: 'background .25s ease, transform .2s ease, box-shadow .2s ease',
            }}
          >
            Request a Demo
            <ArrowRight />
          </a>
          <button
            type="button"
            className="mobile-menu-btn"
            ref={menuBtnRef}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{
              display: 'none',
              width: 40,
              height: 40,
              flex: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: 0,
              padding: 0,
              cursor: 'pointer',
              color: navTextColor,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          ref={menuPanelRef}
          style={{
            background: 'var(--color-bg)',
            borderBottom: '1px solid var(--color-divider)',
            boxShadow: 'var(--shadow-md)',
            padding: 'var(--space-4) var(--space-6)',
            display: 'flex',
            flexDirection: 'column',
            gap: 0,
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{ fontSize: 16, color: 'var(--color-text)', minHeight: 48, display: 'flex', alignItems: 'center' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#about"
            onClick={closeMenu}
            style={{ fontSize: 16, color: 'var(--color-text)', minHeight: 48, display: 'flex', alignItems: 'center' }}
          >
            About
          </a>
          <a
            href="mailto:hello@rixem.co?subject=Rixem%20enquiry"
            onClick={closeMenu}
            style={{ fontSize: 16, color: 'var(--color-text)', minHeight: 48, display: 'flex', alignItems: 'center' }}
          >
            Contact
          </a>
          <a
            href={ctaHref}
            onClick={closeMenu}
            style={{
              marginTop: 'var(--space-2)',
              textAlign: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 6,
              fontFamily: 'var(--font-heading)',
              fontWeight: 600,
              fontSize: 15,
              background: 'var(--color-accent)',
              color: 'var(--color-bg)',
              borderRadius: 12,
              border: '1px solid transparent',
              padding: 'var(--space-3) var(--space-4)',
            }}
          >
            Request a Demo
            <ArrowRight />
          </a>
        </nav>
      )}
    </header>
  );
}
