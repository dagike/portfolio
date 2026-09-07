import type { Metadata } from "next";
import { Container } from "@/components/container";
import { about } from "@/data/about";

export const metadata: Metadata = {
  title: "About",
  description: about.lede,
  alternates: {
    canonical: "/about",
  },
};

/** A small downward arrow marking a download action. */
function DownloadArrow() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <Container className="py-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
        {about.eyebrow}
      </p>
      <h1 className="mt-sm max-w-2xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {about.heading}
      </h1>
      <p className="mt-md max-w-xl text-lg text-muted">{about.lede}</p>

      <div className="mt-2xl max-w-2xl flex flex-col gap-md">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-foreground">
            {paragraph}
          </p>
        ))}
      </div>

      <a
        href={about.resume.href}
        download={about.resume.filename}
        className="mt-xl inline-flex items-center gap-2xs rounded-md bg-accent px-md py-2xs text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
      >
        Download resume
        <DownloadArrow />
      </a>

      <h2 className="mt-3xl text-xs font-medium uppercase tracking-[0.15em] text-muted">
        Toolbox
      </h2>
      <ul className="mt-md grid grid-cols-1 gap-md sm:grid-cols-2 lg:grid-cols-3">
        {about.toolbox.map((group) => (
          <li
            key={group.label}
            className="rounded-lg border border-border bg-surface p-lg"
          >
            <h3 className="text-sm font-semibold tracking-tight text-foreground">
              {group.label}
            </h3>
            <ul className="mt-sm flex flex-wrap gap-2xs">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center rounded-sm border border-border px-2xs py-3xs text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Container>
  );
}
