import Backdrop from '@/components/Backdrop';
import Header from '@/components/Header';
import Hero from '@/sections/Hero';
import WhyChooseRixem from '@/sections/WhyChooseRixem';
import WhatRixemDoes from '@/sections/WhatRixemDoes';
import HowRixemWorks from '@/sections/HowRixemWorks';
import About from '@/sections/About';
import Mission from '@/sections/Mission';
import FinalCTA from '@/sections/FinalCTA';
import Marketplace from '@/sections/Marketplace';
import Footer from '@/sections/Footer';

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
 * Works, About, Mission, Final CTA, Marketplace trust band, Footer.
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
      <Mission />
      <FinalCTA ctaHref={ctaHref} />
      <Marketplace />
      <Footer />
    </div>
  );
}
