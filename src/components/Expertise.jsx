import { useEffect, useId, useRef, useState } from 'react';
import Icon from './Icon';
import { expertise } from '../data/profile';
import { useReveal } from '../lib/motion';
import './expertise.css';

/**
 * A capability inlined into the sentence. The glyph is always visible; the
 * detail card is revealed on hover, focus or tap — so the statement reads
 * completely on its own and the cards are an elaboration, never a gate.
 */
function Chip({ chip, openId, setOpenId }) {
  const id = useId();
  const open = openId === id;
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return;
    function onDocPointer(e) {
      if (!ref.current?.contains(e.target)) setOpenId(null);
    }
    function onKey(e) {
      if (e.key === 'Escape') setOpenId(null);
    }
    document.addEventListener('pointerdown', onDocPointer);
    window.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('pointerdown', onDocPointer);
      window.removeEventListener('keydown', onKey);
    };
  }, [open, setOpenId]);

  return (
    <span
      ref={ref}
      className="xp__chipwrap"
      onPointerEnter={(e) => {
        if (e.pointerType === 'mouse') setOpenId(id);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === 'mouse') setOpenId((cur) => (cur === id ? null : cur));
      }}
    >
      <button
        className="xp__chip"
        aria-expanded={open}
        aria-controls={`${id}-card`}
        onClick={() => setOpenId(open ? null : id)}
        onFocus={() => setOpenId(id)}
      >
        <Icon name={chip.icon} size={22} />
        <span className="xp__chip-sr">{chip.title}</span>
        <span className="xp__chip-plus" aria-hidden="true">
          <Icon name="plus" size={11} />
        </span>
      </button>

      <span className="xp__card plate" id={`${id}-card`} data-open={open} role="tooltip">
        <strong>{chip.title}</strong>
        <span>{chip.body}</span>
      </span>
    </span>
  );
}

export default function Expertise() {
  // Block reveal: the statement has inline chips, so splitting it into
  // lines would tear the chips out of the sentence.
  const ref = useReveal({ mode: 'block', start: 'top 80%' });
  const [openId, setOpenId] = useState(null);

  return (
    <section id="expertise" className="section xp" aria-labelledby="xp-title">
      <h2 id="xp-title" className="sr-only">
        {expertise.title}
      </h2>

      <p ref={ref} className="xp__statement">
        {expertise.statement.map((part, i) =>
          part.chip ? (
            <Chip key={i} chip={part.chip} openId={openId} setOpenId={setOpenId} />
          ) : (
            <span key={i}>{part.text} </span>
          )
        )}
      </p>
    </section>
  );
}
