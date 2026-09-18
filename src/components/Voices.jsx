import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon';
import { voices } from '../data/profile';
import { useReveal } from '../lib/motion';
import './voices.css';

// Styles for the placeholder notice below. The branch is compiled out of
// production, taking the stylesheet with it.
if (import.meta.env.DEV) import('./devnote.css');

export default function Voices() {
  const headRef = useReveal();
  const trackRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [cursor, setCursor] = useState(null);
  const drag = useRef(null);

  const step = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.firstElementChild;
    if (!first) return 0;
    return first.getBoundingClientRect().width + parseFloat(getComputedStyle(track).columnGap || 0);
  }, []);

  const go = useCallback(
    (dir) => {
      const track = trackRef.current;
      if (!track) return;
      track.scrollBy({ left: dir * step(), behavior: 'smooth' });
    },
    [step]
  );

  // Keep the progress indicator honest about where the track actually is.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const s = step();
        setIndex(s ? Math.round(track.scrollLeft / s) : 0);
      });
    }
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener('scroll', onScroll);
    };
  }, [step]);

  /* ---- pointer drag (mouse only; touch already scrolls natively) ---- */
  function onPointerDown(e) {
    if (e.pointerType !== 'mouse') return;
    const track = trackRef.current;
    drag.current = { x: e.clientX, left: track.scrollLeft, moved: false };
    track.setPointerCapture(e.pointerId);
  }

  function onPointerMove(e) {
    const track = trackRef.current;
    if (!track) return;

    if (e.pointerType === 'mouse') {
      const r = track.getBoundingClientRect();
      setCursor({ x: e.clientX - r.left, y: e.clientY - r.top });
    }

    if (!drag.current) return;
    const dx = e.clientX - drag.current.x;
    if (Math.abs(dx) > 3) drag.current.moved = true;
    track.scrollLeft = drag.current.left - dx;
  }

  function endDrag(e) {
    const track = trackRef.current;
    if (drag.current && track?.hasPointerCapture?.(e.pointerId)) {
      track.releasePointerCapture(e.pointerId);
    }
    drag.current = null;
  }

  return (
    <section id="voices" className="section vo" aria-labelledby="vo-title">
      <div className="vo__head">
        <h2 id="vo-title" ref={headRef} className="sec-title" data-reveal>
          {voices.title.map((l) => (
            <span key={l}>{l}</span>
          ))}
        </h2>

        <div className="vo__controls">
          <div className="vo__progress" role="presentation">
            {voices.items.map((v, i) => (
              <span key={v.heading} data-on={i === index} />
            ))}
          </div>
          <div className="vo__arrows">
            <button onClick={() => go(-1)} aria-label="Previous testimonial">
              <Icon name="left" size={18} />
            </button>
            <button onClick={() => go(1)} aria-label="Next testimonial">
              <Icon name="right" size={18} />
            </button>
          </div>
        </div>
      </div>

      {import.meta.env.DEV && voices.synthetic && (
        <p className="vo__devnote">
          Dev-only notice — these quotes are placeholders. Replace them in{' '}
          <code>src/data/profile.js</code> or delete this section from <code>App.jsx</code> before
          publishing. This note never appears in a production build.
        </p>
      )}

      {/* The badge lives outside the scroller so it does not travel with the content. */}
      <div className="vo__viewport">
        {cursor && (
          <span
            className="vo__cursor"
            style={{ transform: `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)` }}
            aria-hidden="true"
          >
            Drag
          </span>
        )}

        <div
          ref={trackRef}
          className="vo__track"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={() => setCursor(null)}
          tabIndex={0}
          role="group"
          aria-label="Testimonials, scrollable"
        >
          {voices.items.map((v) => (
            <figure key={v.heading} className="vo__card plate">
              <span className="vo__quote" aria-hidden="true">
                &rdquo;
              </span>
              <blockquote>
                <p className="vo__heading">{v.heading}</p>
                <p className="vo__body">{v.body}</p>
              </blockquote>
              <figcaption className="vo__by">
                <span className="vo__avatar" aria-hidden="true">
                  <Icon name="users" size={17} />
                </span>
                <span className="vo__who">
                  <strong>{v.author}</strong>
                  <span>{v.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
