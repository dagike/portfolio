"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Wraps the server-rendered timeline list and, only when motion is allowed,
 * reveals each `[data-timeline-entry]` as it scrolls into view. The entries
 * themselves are `children` — this component never sees the timeline data, and
 * every entry is in the DOM whether or not this runs.
 *
 * Two things gate the animation: `data-motion` is set to `"on"` only after
 * mount and only when `prefers-reduced-motion` is not `reduce`, and a matching
 * rule in `globals.css` forces the static state under that media query anyway.
 */
export function TimelineReveal({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [motion, setMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotion(!query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const root = ref.current;
    if (!root || !motion) return;

    const entries = root.querySelectorAll<HTMLElement>("[data-timeline-entry]");
    const observer = new IntersectionObserver(
      (records) => {
        for (const record of records) {
          if (record.isIntersecting) {
            record.target.setAttribute("data-revealed", "true");
            observer.unobserve(record.target);
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );

    entries.forEach((entry) => observer.observe(entry));
    return () => observer.disconnect();
  }, [motion]);

  return (
    <div ref={ref} data-motion={motion ? "on" : "off"}>
      {children}
    </div>
  );
}
