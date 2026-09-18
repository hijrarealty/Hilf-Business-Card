import Icon from './Icon';
import { socials } from '../data/profile';
import './social.css';

/**
 * The contact routes. One component, three renderings:
 *   compact — icon-only row for the desktop rail
 *   bar     — the sticky mobile action bar
 *   full    — the contact section's primary buttons
 */
export default function SocialButtons({ variant = 'compact', children }) {
  return (
    <ul className={`socials socials--${variant}`}>
      {socials.map((s) => (
        <li key={s.id}>
          <a
            className={`social social--${s.id}`}
            href={s.href}
            target={s.id === 'email' ? undefined : '_blank'}
            rel={s.id === 'email' ? undefined : 'noopener noreferrer'}
            aria-label={
              s.id === 'email' ? `Email ${s.handle}` : `${s.label} — opens in a new tab`
            }
          >
            <span className="social__glyph">
              <Icon name={s.id} size={variant === 'full' ? 22 : 19} />
            </span>

            {variant === 'bar' && <span className="social__label">{s.short ?? s.label}</span>}

            {variant === 'full' && (
              <>
                <span className="social__text">
                  <span className="social__label">{s.label}</span>
                  <span className="social__handle">{s.handle}</span>
                </span>
                <span className="social__arrow" aria-hidden="true">
                  <Icon name="arrow" size={17} />
                </span>
              </>
            )}
          </a>
        </li>
      ))}
      {children && <li>{children}</li>}
    </ul>
  );
}
