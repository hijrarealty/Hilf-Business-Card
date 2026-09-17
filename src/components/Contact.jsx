import Icon from './Icon';
import SocialButtons from './SocialButtons';
import { contact, person, affiliations } from '../data/profile';
import { useReveal, useStaggerReveal } from '../lib/motion';
import './contact.css';

export default function Contact() {
  const titleRef = useReveal();
  const bodyRef = useReveal({ delay: 0.08 });
  const routesRef = useStaggerReveal('li', { start: 'top 86%', from: 18 });
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="ct" aria-labelledby="ct-title">
      <div className="ct__mark" aria-hidden="true">
        {person.wordmark.split('').map((ch, i) => (
          <span key={i}>{ch}</span>
        ))}
      </div>

      <div className="ct__inner">
        <div className="ct__lead">
          <h2 id="ct-title" ref={titleRef} className="ct__title" data-reveal>
            {contact.title.map((l) => (
              <span key={l}>{l}</span>
            ))}
          </h2>
          <p ref={bodyRef} className="ct__body" data-reveal>
            {contact.body}
          </p>
          <p className="ct__where">
            <Icon name="pin" size={16} />
            {person.location}
          </p>
        </div>

        <div ref={routesRef} className="ct__routes">
          <SocialButtons variant="full" />
        </div>
      </div>

      <footer className="ct__foot">
        <ul className="ct__orgs">
          {affiliations.map((a) => (
            <li key={a}>{a}</li>
          ))}
        </ul>
        <p className="ct__legal">
          © {year} {person.name} · {person.role}
        </p>
      </footer>
    </section>
  );
}
