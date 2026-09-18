import { useEffect, useRef } from 'react';
import Icon from './Icon';
import SocialButtons from './SocialButtons';
import { nav, person, stats, phone, phoneDisplay } from '../data/profile';
import './mobilebar.css';

export default function MobileBar({ active, onJump, visible, menuOpen, setMenuOpen }) {
  const sheetRef = useRef(null);
  const triggerRef = useRef(null);

  // Lock the page behind the sheet and restore focus when it closes.
  useEffect(() => {
    if (!menuOpen) return;

    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    sheetRef.current?.querySelector('button')?.focus();

    function onKey(e) {
      if (e.key === 'Escape') setMenuOpen(false);
    }
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener('keydown', onKey);
      triggerRef.current?.focus();
    };
  }, [menuOpen, setMenuOpen]);

  return (
    <>
      <button
        ref={triggerRef}
        className="mnav__trigger"
        data-visible={visible}
        onClick={() => setMenuOpen(true)}
        aria-expanded={menuOpen}
        aria-haspopup="dialog"
        aria-label="Open section menu"
      >
        <Icon name="menu" size={20} />
      </button>

      <div
        className="mnav__scrim"
        data-open={menuOpen}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        ref={sheetRef}
        className="mnav__sheet"
        data-open={menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Sections"
        inert={menuOpen ? undefined : ''}
      >
        <div className="mnav__head">
          <span className="mnav__mark">{person.wordmark}</span>
          <button className="mnav__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <Icon name="close" size={20} />
          </button>
        </div>

        <ul className="mnav__list">
          {nav.map((item) => (
            <li key={item.id}>
              <button
                data-active={active === item.id}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={() => {
                  setMenuOpen(false);
                  onJump(item.id);
                }}
              >
                <Icon name={item.icon} size={18} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mnav__stats">
          {stats.map((s) => (
            <div key={s.value}>
              <strong>{s.value}</strong>
              <span>{s.label.join(' ')}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mbar theme-dark">
        <SocialButtons variant="bar">
          <a className="social social--call" href={`tel:${phone}`} aria-label={`Call Asif on ${phoneDisplay}`}>
            <span className="social__glyph">
              <Icon name="phone" size={19} />
            </span>
            <span className="social__label">Call</span>
          </a>
        </SocialButtons>
      </div>
    </>
  );
}
