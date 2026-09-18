import Icon from './Icon';
import SocialButtons from './SocialButtons';
import { person, company, office, phone, phoneDisplay } from '../data/profile';
import { useReveal, useStaggerReveal } from '../lib/motion';
import { saveContact } from '../lib/vcard';
import logoLight from '../assets/hilf-logo-light.webp';
import './contact.css';

/** The closing band: every way to reach Asif, and where to find HILF. */
export default function Contact() {
  const nameRef = useReveal();
  const routesRef = useStaggerReveal('li', { start: 'top 90%', from: 18 });
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="ct theme-dark" aria-labelledby="ct-name">
      <div className="ct__mark" aria-hidden="true">
        {person.wordmark.split('').map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </div>

      <div className="ct__inner">
        <div className="ct__lead">
          <h2 id="ct-name" ref={nameRef} className="ct__name" data-reveal>
            {person.name}
          </h2>
          <p className="ct__role">{person.role}</p>
          <p className="ct__company">
            <img src={logoLight} width="319" height="240" alt="" />
            {company.name}
          </p>

          <div className="ct__actions">
            <a className="btn btn--acid on-acid" href={`tel:${phone}`}>
              <Icon name="phone" size={17} />
              Call
            </a>
            <button className="btn btn--stone" onClick={saveContact}>
              <Icon name="download" size={17} />
              Save contact
            </button>
          </div>

          <ul className="ct__details">
            <li>
              <Icon name="phone" size={17} />
              <a className="ct__phone" href={`tel:${phone}`}>
                {phoneDisplay}
              </a>
            </li>
            <li>
              <Icon name="pin" size={17} />
              <address>
                <strong>{office.label}</strong>
                {office.lines.map((l) => (
                  <span key={l}>{l}</span>
                ))}
                <a href={office.map} target="_blank" rel="noopener noreferrer">
                  Open in Maps
                </a>
              </address>
            </li>
            <li className="ct__directions">
              <a className="btn btn--stone" href={office.directions} target="_blank" rel="noopener noreferrer">
                <Icon name="directions" size={17} />
                Directions to office
              </a>
            </li>
          </ul>
        </div>

        <div ref={routesRef} className="ct__routes">
          <SocialButtons variant="full" />
        </div>
      </div>

      <footer className="ct__foot">
        <p className="ct__legal">
          © {year} {person.name} · {person.role},{' '}
          <a href={company.site} target="_blank" rel="noopener noreferrer">
            {company.name}
          </a>
        </p>
      </footer>
    </section>
  );
}
