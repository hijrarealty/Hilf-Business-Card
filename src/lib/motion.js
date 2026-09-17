import { useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

/** Single source of truth for the page's motion feel. */
export const MOTION = {
  /** Reveals come out of a blur, the way the reference's text does. */
  blurIn: 9,
  /** Hero furniture dissolves into this much blur as it scrolls away. */
  blurOut: 7,
  riseIn: 22,
  ease: 'power3.out',
  dur: 0.9,
  stagger: 0.055,
};

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ==================================================================
   SMOOTH SCROLL
   Lenis drives the scroll position and ScrollTrigger reads from it,
   so scrubbed animations stay locked to the eased scroll rather than
   to the raw wheel events.
   ================================================================== */
export function useSmoothScroll() {
  useEffect(() => {
    if (prefersReducedMotion()) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Touch keeps the platform's own scrolling — hijacking it feels wrong.
      syncTouch: false,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Anchor jumps have to go through Lenis or they fight it.
    window.__lenis = lenis;

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);
}

/* ==================================================================
   LINE SPLITTING
   Groups words into visual lines and wraps each in a clipping box, so
   a line can rise out of its own mask instead of the whole block
   fading at once. Re-measures on resize because the line breaks move.
   ================================================================== */
function splitIntoLines(el) {
  if (!el || el.dataset.split === 'done') return [...el.querySelectorAll('.ln-i')];

  const original = el.innerHTML;
  el.dataset.originalHtml = original;

  // When the markup already declares its own lines (one <span> per line),
  // those breaks are a typographic decision — wrap them, do not re-measure.
  const authored = [...el.children];
  if (authored.length && authored.every((c) => c.tagName === 'SPAN' && !c.children.length)) {
    el.innerHTML = authored
      .map((c) => `<span class="ln"><span class="ln-i">${c.innerHTML}</span></span>`)
      .join('');
    el.dataset.split = 'done';
    return [...el.querySelectorAll('.ln-i')];
  }

  // Wrap every word so we can read where the browser broke the lines.
  const words = original.split(/(\s+)/).map((chunk) =>
    /^\s+$/.test(chunk) ? chunk : `<span class="ln-w">${chunk}</span>`
  );
  el.innerHTML = words.join('');

  const spans = [...el.querySelectorAll('.ln-w')];
  if (!spans.length) return [];

  const lines = [];
  let currentTop = null;
  for (const span of spans) {
    const top = Math.round(span.offsetTop);
    if (currentTop === null || Math.abs(top - currentTop) > 2) {
      currentTop = top;
      lines.push([]);
    }
    lines[lines.length - 1].push(span.textContent);
  }

  el.innerHTML = lines
    .map((words) => `<span class="ln"><span class="ln-i">${words.join(' ')}</span></span>`)
    .join('');
  el.dataset.split = 'done';

  return [...el.querySelectorAll('.ln-i')];
}

function unsplit(el) {
  if (!el || el.dataset.split !== 'done') return;
  el.innerHTML = el.dataset.originalHtml;
  delete el.dataset.split;
}

/**
 * Reveals are driven by scroll position, but keyboard focus can reach a
 * section before its trigger fires — landing a visitor on content that is
 * still faded out. Completing the tween on focusin keeps the page usable
 * by keyboard without weakening the effect for everyone else.
 */
function revealOnFocus(el, tween) {
  if (!el || !tween) return () => {};
  const finish = () => {
    tween.progress(1);
    el.removeEventListener('focusin', finish);
  };
  el.addEventListener('focusin', finish);
  return () => el.removeEventListener('focusin', finish);
}

/* ==================================================================
   REVEALS
   ================================================================== */

/**
 * Reveals an element's text line by line, each line rising out of a
 * blur. `mode: 'block'` skips splitting and reveals the whole element,
 * for things that are not prose.
 */
export function useReveal({ mode = 'lines', delay = 0, start = 'top 85%' } = {}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { clearProps: 'all' });
      return;
    }

    let ctx;
    let resizeTimer;

    let detachFocus = () => {};

    const build = () => {
      ctx?.revert();
      detachFocus();
      ctx = gsap.context(() => {
        const targets = mode === 'lines' ? splitIntoLines(el) : [el];
        if (!targets.length) return;

        const tween = gsap.fromTo(
          targets,
          { yPercent: mode === 'lines' ? 105 : 0, y: mode === 'lines' ? 0 : MOTION.riseIn, opacity: 0, filter: `blur(${MOTION.blurIn}px)` },
          {
            yPercent: 0,
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            duration: MOTION.dur,
            ease: MOTION.ease,
            delay,
            stagger: MOTION.stagger,
            scrollTrigger: { trigger: el, start, once: true },
          }
        );
        detachFocus = revealOnFocus(el, tween);
      }, el);
    };

    build();

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        ctx?.revert();
        unsplit(el);
        build();
      }, 220);
    };
    window.addEventListener('resize', onResize);

    return () => {
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      detachFocus();
      ctx?.revert();
      unsplit(el);
    };
  }, [mode, delay, start]);

  return ref;
}

/** Plain blur-and-rise for a group of children, no text splitting. */
export function useStaggerReveal(childSelector, { start = 'top 82%', from = 24 } = {}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let detachFocus = () => {};
    const ctx = gsap.context(() => {
      const kids = childSelector ? el.querySelectorAll(childSelector) : el.children;
      if (!kids.length) return;
      const tween = gsap.from(kids, {
        y: from,
        opacity: 0,
        filter: `blur(${MOTION.blurIn}px)`,
        duration: MOTION.dur,
        ease: MOTION.ease,
        stagger: MOTION.stagger,
        scrollTrigger: { trigger: el, start, once: true },
      });
      detachFocus = revealOnFocus(el, tween);
    }, el);

    return () => {
      detachFocus();
      ctx.revert();
    };
  }, [childSelector, start, from]);

  return ref;
}

/* ==================================================================
   HERO
   ================================================================== */

/**
 * The load sequence. Everything arrives out of a blur, the portrait
 * last and slowest so the face resolves as the furniture settles.
 */
export function playHeroIntro(root) {
  if (!root || prefersReducedMotion()) return;

  const q = gsap.utils.selector(root);
  const tl = gsap.timeline({ defaults: { ease: MOTION.ease } });

  tl.from(q('.hero__mark span'), {
    yPercent: 60,
    opacity: 0,
    filter: 'blur(26px)',
    duration: 1.25,
    stagger: 0.075,
  })
    .from(
      q('.hero__portrait'),
      { scale: 1.06, opacity: 0, filter: 'blur(22px)', duration: 1.45 },
      0.15
    )
    .from(
      q('.hero__headline .ln-i'),
      { yPercent: 108, opacity: 0, filter: 'blur(12px)', duration: 1, stagger: 0.08 },
      0.5
    )
    .from(q('.hero__cta .btn'), { y: 18, opacity: 0, filter: 'blur(8px)', duration: 0.8, stagger: 0.08 }, 0.8)
    .from(
      q('.hero__stat, .hero__traits, .hero__signoff, .hero__intro, .hero__navlink'),
      { y: 16, opacity: 0, filter: 'blur(10px)', duration: 0.85, stagger: 0.045 },
      0.65
    );

  return tl;
}

/**
 * Scroll-scrubbed dissolve. Each piece of hero furniture leaves on its
 * own schedule, which is what makes the exit read as a cascade rather
 * than one block fading. Ranges mirror the reference's spread of
 * start/end offsets across the first ~40% of the hero.
 */
function attachHeroScrub(root) {
  const q = gsap.utils.selector(root);
  const ctx = gsap.context(() => {
    const cast = [
      { sel: '.hero__mark', startPct: 0, endPct: 44, y: -90 },
      { sel: '.hero__navlink', startPct: 1, endPct: 30, y: -40 },
      { sel: '.hero__stat', startPct: 3, endPct: 34, y: -55 },
      { sel: '.hero__traits', startPct: 5, endPct: 35, y: -55 },
      { sel: '.hero__signoff', startPct: 2, endPct: 32, y: -35 },
      { sel: '.hero__intro', startPct: 4, endPct: 33, y: -35 },
      { sel: '.hero__core', startPct: 7, endPct: 40, y: -70 },
      { sel: '.hero__portrait', startPct: 6, endPct: 46, y: -40 },
    ];

    for (const { sel, startPct, endPct, y } of cast) {
      const els = q(sel);
      if (!els.length) continue;
      // fromTo, not to: a scrubbed `to` has to RECORD its start value the
      // first time it renders, and whatever the hero happened to look like
      // at that instant becomes its resting state. Stating both ends makes
      // the rest position explicit, so scrolling back always restores it.
      gsap.fromTo(
        els,
        { y: 0, opacity: 1, filter: 'blur(0px)' },
        {
          y,
          opacity: 0,
          filter: `blur(${MOTION.blurOut}px)`,
          ease: 'none',
          immediateRender: false,
          scrollTrigger: {
            trigger: root,
            start: `${startPct}% top`,
            end: `${endPct}% top`,
            scrub: 1,
          },
        }
      );
    }
  }, root);

  return () => ctx.revert();
}

/**
 * Runs the intro, then hands the hero over to the scroll scrub.
 *
 * The handover matters: the intro starts every element at opacity 0, and a
 * scrub tween records its start value the first time it renders. Bind the
 * scrub while the intro is still running — which is exactly what happens
 * when a visitor scrolls immediately — and it captures a mid-fade value as
 * "resting", stranding the hero half-invisible. So the intro is forced to
 * its end state before the scrub is allowed to sample anything.
 */
export function bindHero(root) {
  if (!root || prefersReducedMotion()) return () => {};

  const tl = playHeroIntro(root);
  let detachScrub = () => {};
  let handedOver = false;

  const INTRO_TARGETS =
    '.hero__mark span, .hero__portrait, .hero__headline .ln-i, .hero__cta .btn, ' +
    '.hero__stat, .hero__traits, .hero__signoff, .hero__intro, .hero__navlink';

  const handOver = () => {
    if (handedOver) return;
    handedOver = true;
    window.removeEventListener('scroll', handOver);

    // Finish the intro, then strip every inline value it wrote. Completing
    // it is not enough: the intro and the scrub write to overlapping
    // elements, so any residue becomes the scrub's idea of "at rest" and
    // the hero never comes back when you scroll up.
    tl?.progress(1).kill();
    gsap.set(root.querySelectorAll(INTRO_TARGETS), {
      clearProps: 'opacity,filter,transform,y,yPercent,scale',
    });

    detachScrub = attachHeroScrub(root);
    ScrollTrigger.refresh();
  };

  // Whichever comes first: the intro finishing, or the visitor scrolling.
  window.addEventListener('scroll', handOver, { passive: true });
  if (tl) tl.eventCallback('onComplete', handOver);
  else handOver();

  return () => {
    window.removeEventListener('scroll', handOver);
    tl?.kill();
    detachScrub();
  };
}

/** Anchor navigation that respects Lenis when it is running. */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const reduce = prefersReducedMotion();
  if (window.__lenis && !reduce) {
    window.__lenis.scrollTo(el, { offset: 0, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }

  el.setAttribute('tabindex', '-1');
  el.focus({ preventScroll: true });
}

export { gsap, ScrollTrigger };
