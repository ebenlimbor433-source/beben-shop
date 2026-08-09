import { useEffect, useRef, useState } from 'react';

/**
 * Attaches to a DOM node and flips `revealed` to true once the node scrolls
 * into view (or immediately, if the visitor prefers reduced motion).
 * Pair with a CSS class whose opacity/transform transition off an `.in`
 * (or similar) modifier — see any *.module.css file for the pattern.
 *
 * Usage:
 *   const [ref, revealed] = useReveal();
 *   <div ref={ref} className={`${styles.card} ${revealed ? styles.in : ''}`} />
 */
export function useReveal() {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setRevealed(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry && entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -10% 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, revealed];
}
