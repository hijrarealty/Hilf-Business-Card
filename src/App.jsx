import { useCallback, useState } from 'react';
import IntroSplash from './components/IntroSplash';
import Card from './components/Card';
import Company from './components/Company';
import { office } from './data/profile';
import './App.css';

/**
 * One employee's digital business card, behind the QR code on their card.
 * HILF logo motion → the card → the company. Two sections, no more.
 */
export default function App({ employee }) {
  const [revealed, setRevealed] = useState(false);
  const reveal = useCallback(() => setRevealed(true), []);

  return (
    <>
      <IntroSplash onReveal={reveal} />

      <a className="skip-link" href="#card">
        Skip to contact details
      </a>

      {/* Inert until the intro hands over, so nothing behind it takes focus. */}
      <main id="main" className="shell" inert={revealed ? undefined : ''}>
        <Card employee={employee} />
        <Company />
        <Footer />
      </main>
    </>
  );
}

/* Plain text, not a link: the one route to the site is the button above
   it, and this line must not become a second. */
export function Footer() {
  return (
    <footer className="foot">
      <p>
        © {new Date().getFullYear()} {office.label}
      </p>
    </footer>
  );
}
