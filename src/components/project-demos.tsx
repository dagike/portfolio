"use client";

import { useRef, useState } from "react";
import type { ProjectDemo } from "@/types";

export function ProjectDemos({
  demos,
  projectName,
}: {
  demos: readonly ProjectDemo[];
  projectName: string;
}) {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const current = demos[active];

  function focusTab(index: number) {
    const next = (index + demos.length) % demos.length;
    setActive(next);
    tabRefs.current[next]?.focus();
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusTab(active + 1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusTab(active - 1);
    } else if (event.key === "Home") {
      event.preventDefault();
      focusTab(0);
    } else if (event.key === "End") {
      event.preventDefault();
      focusTab(demos.length - 1);
    }
  }

  return (
    <div className="mt-xl">
      <div
        role="tablist"
        aria-label={`${projectName} demo clips`}
        className="flex flex-wrap gap-2xs"
      >
        {demos.map((demo, index) => {
          const selected = index === active;
          return (
            <button
              key={demo.src}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`demo-tab-${index}`}
              aria-selected={selected}
              aria-controls={`demo-panel-${index}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={onKeyDown}
              className={`rounded-md border px-sm py-2xs text-sm font-medium transition-colors ${
                selected
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border text-muted hover:bg-surface-muted hover:text-foreground"
              }`}
            >
              {demo.title}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`demo-panel-${active}`}
        aria-labelledby={`demo-tab-${active}`}
        className="relative mt-md aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface-muted"
      >
        {/* Keyed on src so switching tabs swaps the source instead of reusing a stale element. */}
        <video
          key={current.src}
          src={current.src}
          poster={current.poster}
          controls
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-contain"
        >
          Your browser does not support embedded video.
        </video>
      </div>

      <p className="mt-sm text-sm text-muted">{current.description}</p>
    </div>
  );
}
