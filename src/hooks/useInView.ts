"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element first crosses into the viewport, then disconnects.
 *
 * Defaults to `inView: true` — content must never depend on JS to become
 * visible. On mount we only flip to `false` (arming the hidden/animate-in
 * state) for elements we've *confirmed* are off-screen; anything already in
 * the viewport, or rendered before hydration/JS has even run, stays visible.
 * This matters on slow connections: hydration can lag well behind first
 * paint, and a `useState(false)` default would leave every section invisible
 * for that entire window.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.05,
  // Positive bottom margin so the observer fires as an element approaches
  // the viewport, not only once it's already well inside it — a fast
  // mobile flick-scroll can cross a whole section in under 300ms, and a
  // late-firing trigger reads as "no animation" rather than a visible one.
  rootMargin = "0px 0px 20% 0px",
) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const alreadyVisible = rect.top < window.innerHeight && rect.bottom > 0;
    if (alreadyVisible) return;

    setInView(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );
    observer.observe(el);
    return () => observer.disconnect();
    // Runs once per mount — threshold/rootMargin are constant per call site.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
