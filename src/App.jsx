import { useCallback, useState } from 'react';
import Hero from './components/Hero';
import Rail from './components/Rail';
import MobileBar from './components/MobileBar';
import Journey from './components/Journey';
import Expertise from './components/Expertise';
import Services from './components/Services';
import Voices from './components/Voices';
import Contact from './components/Contact';
import { nav } from './data/profile';
import { useActiveSection, usePastHero } from './hooks/useScrollUtils';
import { useSmoothScroll, scrollToSection } from './lib/motion';
import './App.css';

const SECTION_IDS = nav.map((n) => n.id);

export default function App() {
  useSmoothScroll();
  const active = useActiveSection(SECTION_IDS);
  const pastHero = usePastHero();
  const [menuOpen, setMenuOpen] = useState(false);

  const jump = useCallback((id) => scrollToSection(id), []);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Rail active={active} onJump={jump} visible={pastHero} />
      <MobileBar
        active={active}
        onJump={jump}
        visible={pastHero}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main id="main" className="shell">
        <Hero onJump={jump} />
        <Journey />
        <Expertise />
        <Services />
        <Voices />
        <Contact />
      </main>
    </>
  );
}
