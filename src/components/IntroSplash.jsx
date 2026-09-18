import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import markLatin from '../assets/intro/mark-latin.webp';
import markArabic from '../assets/intro/mark-arabic.webp';
import './intro.css';

/**
 * Opening sequence: blue screen → HILF logo motion → the profile.
 *
 * The logo motion is a faithful port of the supplied "HILF Logo Motion"
 * (hilp-reveal.jsx): the grey Arabic حلف writes in right→left, then the
 * Latin "hilf" wipes in left→right over it, each wipe led by a soft ink
 * edge, while the whole mark settles from 103.5% to 100%. Same scenes
 * (Arabic 1.5s, Latin 1.5s), same cue offsets, same easing curves, and
 * the mark's own colours — HILF navy and grey — drawn on a light ground
 * so the navy stays visible. The blue screen opens the sequence, then
 * turns light as the logo begins.
 */

// ---- timeline, exactly as authored ----
const SCENES = { Arabic: 0, Latin: 1.5 };
const TOTAL = 3.0;

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
const easeInOutSine = (t) => -(Math.cos(Math.PI * t) - 1) / 2;
const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
const lerp = (a, b, p) => a + (b - a) * p;
const bell = (p) => clamp(4 * p * (1 - p), 0, 1);
const animate = (start, end, ease) => (t) =>
  t <= start ? 0 : t >= end ? 1 : ease((t - start) / (end - start));

const arabicAt = animate(SCENES.Arabic + 0.05, SCENES.Latin - 0.05, easeInOutSine);
const latinAt = animate(SCENES.Latin - 0.12, TOTAL - 0.18, easeInOutSine);
const settleAt = animate(0.05, TOTAL, easeOutCubic);

// ---- the sequence around it ----
const BLUE_HOLD = 500; // ms of plain blue before the ground turns light
const TO_LIGHT = 350; // ms into the blue→light change before the mark starts drawing
const LOGO_HOLD = 450; // ms the finished mark rests before the profile arrives
const EXIT = 750; // ms for the blue screen to lift

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function IntroSplash({ onReveal }) {
  const [phase, setPhase] = useState('blue'); // blue → logo → exit → done
  const markRef = useRef(null);
  const arabicRef = useRef(null);
  const latinRef = useRef(null);
  const arabicEdgeRef = useRef(null);
  const latinEdgeRef = useRef(null);
  const onRevealRef = useRef(onReveal);
  onRevealRef.current = onReveal;
  const unlockRef = useRef(() => {});

  /** Paint one frame of the logo motion at time t (seconds). */
  function paint(t) {
    const a = arabicAt(t);
    const l = latinAt(t);
    const scale = lerp(1.035, 1, settleAt(t));
    markRef.current.style.transform = `scale(${scale})`;
    arabicRef.current.style.clipPath = `inset(0 0 0 ${(1 - a) * 100}%)`;
    latinRef.current.style.clipPath = `inset(0 ${(1 - l) * 100}% 0 0)`;
    arabicEdgeRef.current.style.left = `${(1 - a) * 100}%`;
    arabicEdgeRef.current.style.opacity = bell(a) * 0.55;
    latinEdgeRef.current.style.left = `${l * 100}%`;
    latinEdgeRef.current.style.opacity = bell(l) * 0.55;
  }

  // First frame before the browser paints, so the mark never flashes in whole.
  useLayoutEffect(() => {
    paint(0);
    // The page underneath must not scroll while the intro owns the screen.
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = 'hidden';
    let locked = true;
    unlockRef.current = () => {
      if (!locked) return;
      locked = false;
      root.style.overflow = prev;
    };
    return () => unlockRef.current();
  }, []);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const timers = [];
    let raf = 0;

    const finish = () => {
      setPhase('exit');
      unlockRef.current();
      onRevealRef.current?.();
      timers.push(setTimeout(() => setPhase('done'), reduced ? 250 : EXIT));
    };

    if (reduced) {
      // No motion: show the finished mark briefly, then the profile.
      paint(TOTAL);
      setPhase('logo');
      timers.push(setTimeout(finish, 900));
    } else {
      timers.push(
        setTimeout(() => {
          setPhase('logo');
        }, BLUE_HOLD)
      );
      timers.push(
        setTimeout(() => {
          const t0 = performance.now();
          const tick = (now) => {
            const t = Math.min((now - t0) / 1000, TOTAL);
            paint(t);
            if (t < TOTAL) raf = requestAnimationFrame(tick);
            else timers.push(setTimeout(finish, LOGO_HOLD));
          };
          raf = requestAnimationFrame(tick);
        }, BLUE_HOLD + TO_LIGHT)
      );
    }

    return () => {
      cancelAnimationFrame(raf);
      timers.forEach(clearTimeout);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div className="intro" data-phase={phase} aria-hidden="true">
      <div className="intro__mark" ref={markRef}>
        <img ref={arabicRef} src={markArabic} alt="" width="457" height="341" decoding="sync" />
        <img ref={latinRef} src={markLatin} alt="" width="457" height="341" decoding="sync" />
        <span ref={arabicEdgeRef} className="intro__edge intro__edge--arabic" />
        <span ref={latinEdgeRef} className="intro__edge intro__edge--latin" />
      </div>
    </div>
  );
}
