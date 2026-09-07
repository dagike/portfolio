import type { Metadata } from "next";
import { Container } from "@/components/container";
import { TimelineReveal } from "@/components/timeline-reveal";
import { timeline } from "@/data/timeline";
import { formatTimelineRange } from "@/lib/timeline";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "The roles and education behind the work — TELUS, Humber College, La Salle University.",
  alternates: {
    canonical: "/timeline",
  },
};

export default function TimelinePage() {
  return (
    <Container className="py-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
        Timeline
      </p>
      <h1 className="mt-sm max-w-[42rem] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Where I&rsquo;ve worked and studied.
      </h1>
      <p className="mt-md max-w-[36rem] text-lg text-muted">
        A reverse-chronological walk through the roles, and the schooling that led
        to them.
      </p>

      <TimelineReveal>
        <ol className="mt-2xl max-w-[42rem]">
          {timeline.map((entry) => {
            const headingId = `entry-${entry.id}`;
            return (
              <li
                key={entry.id}
                data-timeline-entry
                className="relative border-l border-border pb-xl pl-lg last:border-transparent last:pb-0"
              >
                <span
                  aria-hidden
                  data-timeline-dot
                  className="absolute left-0 top-[6px] h-[10px] w-[10px] -translate-x-1/2 rounded-full border-2 border-background bg-border"
                />
                <article
                  data-timeline-body
                  tabIndex={0}
                  aria-labelledby={headingId}
                  className="rounded-md"
                >
                  <p className="text-sm font-medium text-accent">
                    <time dateTime={entry.start}>
                      {formatTimelineRange(entry.start, entry.end)}
                    </time>
                  </p>
                  <h2
                    id={headingId}
                    className="mt-2xs text-lg font-semibold tracking-tight text-foreground"
                  >
                    {entry.title}
                  </h2>
                  <p className="mt-2xs text-sm text-muted">
                    {entry.organization}
                    {entry.location ? ` · ${entry.location}` : ""}
                  </p>
                  {entry.kind === "education" && (
                    <p className="mt-2xs text-sm text-muted">{entry.credential}</p>
                  )}
                </article>
              </li>
            );
          })}
        </ol>
      </TimelineReveal>
    </Container>
  );
}
