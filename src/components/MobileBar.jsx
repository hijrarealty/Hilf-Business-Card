import Icon from './Icon';
import SocialButtons from './SocialButtons';
import { phone, phoneDisplay } from '../data/profile';
import './mobilebar.css';

/** Below 1180px: every contact route, always within thumb reach. */
export default function MobileBar() {
  return (
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
  );
}
