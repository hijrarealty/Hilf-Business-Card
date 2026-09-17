import { useState } from 'react';
import Icon from './Icon';
import SocialButtons from './SocialButtons';
import { person, stats, nav, affiliations, email } from '../data/profile';
import './rail.css';

function Marquee() {
  // Duplicated once so the loop has something to scroll into.
  const track = [...affiliations, ...affiliations];
  return (
    <div className="marquee" aria-label="Organisations Asif has worked with">
      <div className="marquee__track">
        {track.map((name, i) => (
          <span key={i} aria-hidden={i >= affiliations.length}>
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard blocked (insecure context or denied) — the mailto link still works.
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <button
      className="rail__copy"
      onClick={copy}
      aria-live="polite"
      aria-label={copied ? 'Email address copied' : `Copy email address ${email}`}
    >
      <span className="rail__copy-text">{copied ? 'Copied to clipboard' : email}</span>
      <Icon name={copied ? 'check' : 'copy'} size={15} />
    </button>
  );
}

export default function Rail({ active, onJump, visible }) {
  return (
    <aside className="rail" data-visible={visible} aria-label="Site navigation and contact">
      <div className="rail__card plate">
        <span className="rail__mark">{person.wordmark}</span>
        <p className="rail__blurb">{person.intro}</p>
        {/* Own row: five icons never fit beside the wordmark at any zoom. */}
        <SocialButtons variant="compact" />
      </div>

      <div className="rail__card plate rail__stats">
        {stats.map((s) => (
          <div key={s.value} className="rail__stat">
            <strong>{s.value}</strong>
            <span>{s.label.join(' ')}</span>
          </div>
        ))}
      </div>

      <nav className="rail__card plate rail__nav" aria-label="Sections">
        <ul>
          {nav.map((item) => (
            <li key={item.id}>
              <button
                className="rail__link"
                data-active={active === item.id}
                aria-current={active === item.id ? 'true' : undefined}
                onClick={() => onJump(item.id)}
              >
                <Icon name={item.icon} size={15} />
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <Marquee />

      <CopyEmail />

      <button className="btn btn--acid on-acid rail__cta" onClick={() => onJump('contact')}>
        Get in Touch
      </button>
    </aside>
  );
}
