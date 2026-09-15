import Backdrop from '@/components/Backdrop';
import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import WhyChooseRixem from '@/sections/WhyChooseRixem';
import WhatRixemDoes from '@/sections/WhatRixemDoes';
import HowRixemWorks from '@/sections/HowRixemWorks';
import About from '@/sections/About';
import FinalCTA from '@/sections/FinalCTA';
import Footer from '@/sections/Footer';
// BackedBy (Microsoft/UQ Ventures badges) is hidden pending language approval — see sections/BackedBy.tsx.

export interface AppProps {
  /** Destination for every "Request a Demo" CTA. */
  ctaHref?: string;
}

/**
 * Rixem marketing site — production port of `project/GenGRC Website.dc.html`.
 *
 * Layout model: <Backdrop /> is a fixed, full-viewport Deep Midnight layer at
 * z-index -1. Light sections paint opaque on top of it; Header+Hero stay
 * transparent so the backdrop shows through as one continuous panel.
 *
 * Section order: Header+Hero, Why Choose Rixem, What Rixem Does, How Rixem
 * Works, About, Final CTA, Footer.
 */
export default function App({ ctaHref = 'mailto:farah@rixem.co?subject=Rixem%20demo%20request' }: AppProps) {
  return (
    <div style={{ color: 'var(--color-text)' }}>
      <Backdrop />

      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header ctaHref={ctaHref} />
        <Hero ctaHref={ctaHref} />
      </div>

      <WhyChooseRixem />
      <WhatRixemDoes />
      <HowRixemWorks />
      <About />
      <FinalCTA ctaHref={ctaHref} />
      <Footer />
    </div>
  );
}
