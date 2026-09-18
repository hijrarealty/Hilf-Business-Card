import { useLayoutEffect, useRef } from 'react';
import Icon from './Icon';
import { person, stats, nav, company } from '../data/profile';
import { bindHero } from '../lib/motion';
import portrait from '../assets/asif-portrait.webp';
import portraitSm from '../assets/asif-portrait-sm.webp';
import logoLight from '../assets/hilf-logo-light.webp';
import './hero.css';

/** The nav row that straddles the portrait on desktop. */
function HeroNav({ items, onJump }) {
  return (
    <>
      {items.map((item) => (
        <button key={item.id} className="hero__navlink" onClick={() => onJump(item.id)}>
          {item.label}
        </button>
      ))}
    </>
  );
}

/**
 * The hero row carries five of the six sections — the straddling layout has
 * room for two on the left and three on the right, and the rail and the
 * mobile sheet both carry the complete set.
 */
const HERO_LEFT = ['hero', 'company'];
const HERO_RIGHT = ['journey', 'services', 'contact'];

export default function Hero({ onJump }) {
  const pick = (ids) => ids.map((id) => nav.find((n) => n.id === id)).filter(Boolean);
  const left = pick(HERO_LEFT);
  const right = pick(HERO_RIGHT);
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    return bindHero(root);
  }, []);

  return (
    <section id="hero" ref={rootRef} className="hero theme-dark" aria-label="Introduction">
      {/* Wordmark. Letters spread edge-to-edge at every width. */}
      <div className="hero__mark" aria-hidden="true">
        {person.wordmark.split('').map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </div>
      <p className="hero__surname" aria-hidden="true">
        {person.surname}
      </p>

      <picture className="hero__portrait">
        <source media="(max-width: 560px)" srcSet={portraitSm} />
        <img
          src={portrait}
          width="900"
          height="1032"
          alt={`${person.name}, ${person.role} professional based in ${person.location}`}
          decoding="sync"
        />
      </picture>

      <div className="hero__stage">
        <nav className="hero__nav hero__nav--left" aria-label="Primary">
          <HeroNav items={left} onJump={onJump} />
        </nav>
        <nav className="hero__nav hero__nav--right" aria-label="Primary continued">
          <HeroNav items={right} onJump={onJump} />
        </nav>

        <div className="hero__stats">
          {stats.map((s, i) => (
            <div key={s.value} className={`hero__stat hero__stat--${i}`}>
              <strong>{s.value}</strong>
              <span>
                {s.label.map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </span>
            </div>
          ))}
        </div>

        <ul className="hero__traits">
          {person.traits.map((t) => (
            <li key={t.label}>
              <Icon name={t.icon} size={16} />
              {t.label}
            </li>
          ))}
        </ul>

        <div className="hero__core">
          <h1 className="hero__headline">
            {person.headline.map((line) => (
              <span className="ln" key={line}>
                <span className="ln-i">{line}</span>
              </span>
            ))}
          </h1>
          <p className="hero__company">
            <img src={logoLight} width="319" height="240" alt="" />
            <span>
              {company.legalName} · Dubai
            </span>
          </p>
          <div className="hero__cta">
            <button className="btn btn--acid on-acid" onClick={() => onJump('contact')}>
              Get in Touch
              <Icon name="arrow" size={17} />
            </button>
            <a className="btn btn--stone" href={company.site} target="_blank" rel="noopener noreferrer">
              {company.name}
              <Icon name="arrow" size={17} />
            </a>
          </div>
        </div>

        <p className="hero__signoff">
          {person.signoff.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </p>

        <p className="hero__intro">{person.intro}</p>
      </div>
    </section>
  );
}
