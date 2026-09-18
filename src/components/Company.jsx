import Icon from './Icon';
import { company } from '../data/profile';
import { useReveal, useStaggerReveal } from '../lib/motion';
import logo from '../assets/hilf-logo.webp';
import './company.css';

const external = { target: '_blank', rel: 'noopener noreferrer' };

export default function Company() {
  const titleRef = useReveal();
  const leadRef = useReveal({ delay: 0.08 });
  const pillarsRef = useStaggerReveal('.co__pillar', { start: 'top 86%' });
  const factsRef = useStaggerReveal('.co__fact', { start: 'top 86%' });

  return (
    <section id="company" className="section co" aria-labelledby="co-title">
      <div className="co__top">
        <header className="co__head">
          <a className="co__logo" href={company.site} {...external} aria-label={`${company.name} — opens in a new tab`}>
            <img src={logo} width="319" height="240" alt={`${company.name} logo`} />
          </a>
          <p className="co__kicker">{company.kicker}</p>
          <h2 id="co-title" ref={titleRef} className="sec-title co__title" data-reveal>
            <span>Where I work</span>
          </h2>
          <p ref={leadRef} className="co__lead" data-reveal>
            {company.lead}
          </p>
        </header>

        <div className="co__about">
          {company.about.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <div className="co__cta">
            <a className="btn btn--acid on-acid" href={company.site} {...external}>
              Visit {company.siteLabel}
              <Icon name="arrow" size={17} />
            </a>
            <a className="btn btn--stone" href={`mailto:${company.desk}`}>
              <Icon name="mail" size={17} />
              Chartering desk
            </a>
          </div>

          <nav className="co__links" aria-label={`${company.name} website`}>
            <span className="co__links-label">On the company site</span>
            <ul>
              {company.links.map((l) => (
                <li key={l.href}>
                  <a className="co__link" href={l.href} {...external}>
                    {l.label}
                    <Icon name="arrow" size={13} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <ol ref={pillarsRef} className="co__pillars plate" aria-label={`Why ${company.name}`}>
        {company.pillars.map((p, i) => (
          <li key={p.name} className="co__pillar">
            <span className="co__num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{p.name}</h3>
            <p>{p.body}</p>
          </li>
        ))}
      </ol>

      <div ref={factsRef} className="co__facts">
        <div className="co__fact">
          <h3 className="co__fact-title">
            <Icon name="layers" size={17} />
            Cargoes handled
          </h3>
          <ul className="co__cargoes">
            {company.cargoes.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div className="co__fact">
          <h3 className="co__fact-title">
            <Icon name="users" size={17} />
            Trusted by
          </h3>
          <ul className="co__clients">
            {company.clients.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>

        <div className="co__fact">
          <h3 className="co__fact-title">
            <Icon name="pin" size={17} />
            Head office
          </h3>
          <address className="co__address">
            <strong>{company.legalName}</strong>
            {company.office.lines.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </address>
          <a className="co__map" href={company.office.map} {...external}>
            Open in Maps
            <Icon name="arrow" size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
