import { useEffect, useRef } from "react";

/**
 * Adds a fade-in-on-scroll effect to an element using IntersectionObserver.
 * Returns a ref to attach to the target element.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility ratio to trigger (0-1). Default 0.15.
 * @param {string} options.rootMargin - Observer root margin. Default "0px 0px -40px 0px".
 */
export default function useFadeIn({ threshold = 0.15, rootMargin = "0px 0px -40px 0px" } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced-motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      el.classList.add("fade-in--visible");
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in--visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
