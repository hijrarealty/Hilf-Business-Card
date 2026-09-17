import Icon from './Icon';
import { services } from '../data/profile';
import { useReveal, useStaggerReveal } from '../lib/motion';
import './services.css';

export default function Services() {
  const headRef = useReveal();
  const bodyRef = useReveal({ delay: 0.1 });
  const gridRef = useStaggerReveal('.sv__col', { start: 'top 82%' });

  return (
    <section id="services" className="section sv" aria-labelledby="sv-title">
      <header className="sec-head sv__head">
        <h2 id="sv-title" ref={headRef} className="sec-title" data-reveal>
          {services.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <p ref={bodyRef} className="sec-body" data-reveal>
          {services.body}
        </p>
      </header>

      <div ref={gridRef} className="sv__grid plate">
        {services.items.map((item) => (
          <article key={item.name} className="sv__col">
            <h3 className="sv__name">
              <span className="sv__icon">
                <Icon name={item.icon} size={20} />
              </span>
              {item.name}
            </h3>

            <p className="sv__lede">{item.lede}</p>

            <ul className="sv__points">
              {item.points.map((p) => (
                <li key={p}>
                  <Icon name="ring" size={15} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <p className="sv__fit">
              <Icon name="compass" size={15} />
              <span>{item.fit}</span>
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
