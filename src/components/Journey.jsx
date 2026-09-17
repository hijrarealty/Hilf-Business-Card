import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { journey, journeyIntro } from '../data/profile';
import { useReveal } from '../lib/motion';
import './journey.css';

/** Two-letter monogram from an organisation name — stands in for a logo honestly. */
function monogram(org) {
  return org
    .replace(/\b(Ltd|LLC|Limited|University)\b/gi, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

/**
 * The spine: a smooth S-curve threaded through the bottom corner of each
 * card, drawn as the visitor scrolls. Geometry is measured from the real
 * laid-out cards, so it survives any breakpoint or font fallback.
 */
function useSpine(wrapRef, cardRefs, count) {
  const [geom, setGeom] = useState({ d: '', dots: [], w: 0, h: 0 });

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const stacked = window.matchMedia('(max-width: 900px)').matches;

    // offsetLeft/offsetTop read the LAYOUT box, so the spine stays put
    // while the reveal animation translates the cards.
    const offsetIn = (el, root) => {
      let x = 0;
      let y = 0;
      let node = el;
      while (node && node !== root) {
        x += node.offsetLeft;
        y += node.offsetTop;
        node = node.offsetParent;
      }
      return { x, y };
    };

    const points = [];
    for (let i = 0; i < count; i += 1) {
      const el = cardRefs.current[i];
      if (!el) continue;
      const { x, y } = offsetIn(el, wrap);
      const onRight = !stacked && i % 2 === 0;

      points.push({
        x: stacked ? x - 16 : onRight ? x + 10 : x + el.offsetWidth - 10,
        y: y + el.offsetHeight,
      });
    }

    if (points.length < 2) {
      setGeom({ d: '', dots: points, w: wrap.offsetWidth, h: wrap.offsetHeight });
      return;
    }

    let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
    for (let i = 1; i < points.length; i += 1) {
      const a = points[i - 1];
      const b = points[i];
      const bend = (b.y - a.y) * 0.55;
      d += ` C ${a.x.toFixed(1)} ${(a.y + bend).toFixed(1)}, ${b.x.toFixed(1)} ${(b.y - bend).toFixed(1)}, ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
    }

    setGeom({ d, dots: points, w: wrap.offsetWidth, h: wrap.offsetHeight });
  }, [wrapRef, cardRefs, count]);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    window.addEventListener('resize', measure);
    // Re-measure once webfonts settle, since they change card heights.
    document.fonts?.ready.then(measure).catch(() => {});
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  return geom;
}

/** Maps scroll position across the timeline to 0..1 for the draw. */
function useDrawProgress(ref) {
  const [p, setP] = useState(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setP(1);
      return;
    }

    let frame = 0;
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 when the top reaches 80% down the viewport, 1 when the bottom passes 55%.
        const span = r.height + vh * 0.25;
        const travelled = vh * 0.8 - r.top;
        setP(Math.min(1, Math.max(0, travelled / span)));
      });
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref]);

  return p;
}

function Card({ item, index, cardRefs }) {
  const ref = useReveal({ mode: 'block', start: 'top 88%' });

  return (
    <li
      ref={ref}
      className="jr__slot"
      data-side={index % 2 === 0 ? 'right' : 'left'}
      style={{ '--i': index }}
    >
      <article
        ref={(el) => {
          cardRefs.current[index] = el;
        }}
        className="jr__card plate"
      >
        <p className="jr__year">{item.year}</p>
        <h3 className="jr__title">{item.title}</h3>
        <p className="jr__body">{item.body}</p>
        <footer className="jr__foot">
          <span className="jr__badge" aria-hidden="true">
            {monogram(item.org)}
          </span>
          <span className="jr__org">
            <strong>{item.org}</strong>
            <span>{item.meta}</span>
          </span>
        </footer>
      </article>
    </li>
  );
}

export default function Journey() {
  const wrapRef = useRef(null);
  const cardRefs = useRef([]);
  const headRef = useReveal();
  const bodyRef = useReveal({ delay: 0.1 });

  const geom = useSpine(wrapRef, cardRefs, journey.length);
  const progress = useDrawProgress(wrapRef);

  const pathRef = useRef(null);
  const [len, setLen] = useState(0);

  useLayoutEffect(() => {
    if (pathRef.current) setLen(pathRef.current.getTotalLength());
  }, [geom.d]);

  return (
    <section id="journey" className="section jr" aria-labelledby="jr-title">
      <header className="sec-head jr__head">
        <h2 id="jr-title" ref={headRef} className="sec-title" data-reveal>
          {journeyIntro.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>
        <p ref={bodyRef} className="sec-body" data-reveal>
          {journeyIntro.body}
        </p>
      </header>

      <div ref={wrapRef} className="jr__wrap">
        <svg
          className="jr__spine"
          viewBox={`0 0 ${geom.w || 1} ${geom.h || 1}`}
          width={geom.w || undefined}
          height={geom.h || undefined}
          preserveAspectRatio="none"
          aria-hidden="true"
          focusable="false"
        >
          {geom.d && (
            <>
              <path className="jr__spine-ghost" d={geom.d} />
              <path
                ref={pathRef}
                className="jr__spine-live"
                d={geom.d}
                style={
                  len
                    ? { strokeDasharray: len, strokeDashoffset: len * (1 - progress) }
                    : undefined
                }
              />
            </>
          )}
          {geom.dots.map((pt, i) => (
            <circle
              key={i}
              className="jr__dot"
              cx={pt.x}
              cy={pt.y}
              r="5.5"
              data-lit={progress >= (i + 0.35) / geom.dots.length}
            />
          ))}
        </svg>

        <ol className="jr__list">
          {journey.map((item, i) => (
            <Card key={`${item.year}-${item.title}`} item={item} index={i} cardRefs={cardRefs} />
          ))}
        </ol>
      </div>
    </section>
  );
}
