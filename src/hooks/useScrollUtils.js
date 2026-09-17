import { useEffect, useState } from 'react';

/**
 * Tracks which section id currently owns the viewport, for the rail.
 *
 * Deliberately not an IntersectionObserver: intersectionRatio is measured
 * against each target's own height, so a tall section scores lower than a
 * short one covering the same band and the rail highlights the wrong item.
 * Reading the section tops against a fixed line has no such bias.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  const key = ids.join('|');

  useEffect(() => {
    let frame = 0;

    function resolve() {
      frame = 0;
      const line = window.scrollY + window.innerHeight * 0.35;
      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= line) current = id;
      }

      // The last section can be too short to ever cross the line — if the page
      // is scrolled to the bottom it owns the viewport regardless.
      const atEnd = window.innerHeight + window.scrollY >= document.body.scrollHeight - 2;
      setActive(atEnd ? ids[ids.length - 1] : current);
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(resolve);
    }

    resolve();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [key]);

  return active;
}

/** True once the visitor has scrolled past the hero. */
export function usePastHero(heroId = 'hero') {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    const io = new IntersectionObserver(([entry]) => setPast(!entry.isIntersecting), {
      rootMargin: '-72% 0px 0px 0px',
    });

    io.observe(hero);
    return () => io.disconnect();
  }, [heroId]);

  return past;
}
