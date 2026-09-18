import Icon from './Icon';
import { company, office } from '../data/profile';
import { useReveal } from '../lib/motion';
import logo from '../assets/hilf-logo.webp';
import './company.css';

/** A short introduction to HILF Shipping, in the company's own words. */
export default function Company() {
  const bodyRef = useReveal({ delay: 0.06 });

  return (
    <section id="company" className="section co" aria-labelledby="co-title">
      <div className="co__card plate">
        <a
          className="co__logo"
          href={company.site}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${company.name} website — opens in a new tab`}
        >
          <img src={logo} width="319" height="240" alt={`${company.name} logo`} />
        </a>

        <div className="co__text">
          <p className="co__kicker">{company.kicker}</p>
          <h2 id="co-title" className="co__title">
            {company.name}
          </h2>
          <p className="co__lead">{company.tagline}</p>
          <p ref={bodyRef} className="co__about" data-reveal>
            {company.intro}
          </p>
          <div className="co__cta">
            <a className="btn btn--acid on-acid" href={company.site} target="_blank" rel="noopener noreferrer">
              Visit {company.siteLabel}
              <Icon name="arrow" size={17} />
            </a>
            <a className="btn btn--stone" href={office.directions} target="_blank" rel="noopener noreferrer">
              <Icon name="directions" size={17} />
              Directions to office
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
