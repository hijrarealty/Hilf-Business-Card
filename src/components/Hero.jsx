import { useLayoutEffect, useRef } from 'react';
import Icon from './Icon';
import SocialButtons from './SocialButtons';
import { person, stats, company, phone } from '../data/profile';
import { bindHero } from '../lib/motion';
import { saveContact } from '../lib/vcard';
import logoLight from '../assets/hilf-logo-light.webp';
import './hero.css';

/**
 * The card itself. The wordmark carries the page's scale; the name,
 * designation and company sit under it, with the two actions a scanned
 * card most needs — call and save — right beside them.
 */
export default function Hero({ play }) {
  const rootRef = useRef(null);

  // The entrance plays when the logo intro hands over, not on mount.
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || !play) return;
    return bindHero(root);
  }, [play]);

  return (
    <section id="hero" ref={rootRef} className="hero theme-dark" aria-labelledby="hero-name">
      <div className="hero__mark" aria-hidden="true">
        {person.wordmark.split('').map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </div>

      {/* The wordmark reads ASIF; the family name completes it underneath,
          right-aligned under its end. The full name is the real heading. */}
      <h1 id="hero-name" className="sr-only">
        {person.name}
      </h1>
      <p className="hero__headline" aria-hidden="true">
        <span className="ln">
          <span className="ln-i">{person.familyName}</span>
        </span>
      </p>

      <div className="hero__stage">
        <div className="hero__id">
          <p className="hero__company">
            <img src={logoLight} width="319" height="240" alt="" />
            <span>{company.name}</span>
          </p>
          <p className="hero__role">{person.role}</p>
        </div>

        <div className="hero__side">
          <div className="hero__cta">
            <a className="btn btn--acid on-acid" href={`tel:${phone}`}>
              <Icon name="phone" size={17} />
              Call
            </a>
            <button className="btn btn--stone" onClick={saveContact}>
              <Icon name="download" size={17} />
              Save contact
            </button>
          </div>

          {/* The mobile bar carries these below 1180px; here they are for desktop. */}
          <div className="hero__links">
            <SocialButtons variant="chips" />
          </div>

          <div className="hero__stats">
            {stats.map((s) => (
              <div key={s.value} className="hero__stat">
                <strong>{s.value}</strong>
                <span>
                  {s.label.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
