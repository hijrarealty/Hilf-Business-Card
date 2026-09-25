import Company from './Company';
import { Footer } from '../App';
import { company, employees } from '../data/profile';
import logoLight from '../assets/hilf-logo-light.webp';
import './card.css';

const initials = (name) =>
  name
    .split(/\s+/)
    .filter((w) => /^[A-Z]/.test(w))
    .map((w) => w[0])
    .slice(-2)
    .join('');

/**
 * Any link that matches no employee — a typo, or someone who has left.
 * Every card is one tap from here, so a scan never dead-ends.
 * Same card and company sections, same theme.
 */
export default function Directory() {
  return (
    <main id="main" className="shell">
      <section id="card" className="card theme-dark" aria-labelledby="dir-title">
        <header className="card__head">
          <h1 id="dir-title" className="card__name">
            Card not found
          </h1>
          <p className="card__role">That link doesn’t match anyone. Choose from the team below.</p>

          <p className="card__at">
            <img src={logoLight} width="319" height="240" alt="" />
            <span>{company.name}</span>
          </p>
        </header>

        <p className="reg" aria-hidden="true">
          <span>Team</span>
          <span className="reg__rule" />
          <span>{String(employees.length).padStart(2, '0')}</span>
        </p>

        <ul className="routes">
          {employees.map((e, i) => (
            <li key={e.slug}>
              <a className="route route--person" href={`/${e.slug}`}>
                <span className="route__glyph route__glyph--initials" aria-hidden="true">
                  {initials(e.name)}
                </span>
                <span className="route__text">
                  <span className="route__label">{e.name}</span>
                  <span className="route__handle">{e.role}</span>
                </span>
                <span className="route__index" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <Company />
      <Footer />
    </main>
  );
}
