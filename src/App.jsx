import { useCallback, useState } from 'react';
import IntroSplash from './components/IntroSplash';
import Hero from './components/Hero';
import Company from './components/Company';
import Contact from './components/Contact';
import MobileBar from './components/MobileBar';
import { useSmoothScroll } from './lib/motion';
import './App.css';

/**
 * The digital business card behind the QR code.
 * Blue screen → HILF logo motion → the card (hero, company, contact).
 */
export default function App() {
  const [revealed, setRevealed] = useState(false);
  const reveal = useCallback(() => setRevealed(true), []);
  useSmoothScroll(!revealed);

  return (
    <>
      <IntroSplash onReveal={reveal} />

      <a className="skip-link" href="#contact">
        Skip to contact details
      </a>

      {/* Inert until the intro hands over, so nothing behind it takes focus. */}
      <main id="main" className="shell" inert={revealed ? undefined : ''}>
        <Hero play={revealed} />
        <Company />
        <Contact />
      </main>

      <MobileBar />
    </>
  );
}
