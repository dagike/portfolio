import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";
import { about } from "@/data/about";
import { home } from "@/data/home";

export const metadata: Metadata = {
  title: {
    absolute: "Isaac De La Rosa — Frontend and analytics engineer",
  },
  description: home.lede,
  alternates: {
    canonical: "/",
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

export default function Home() {
  const [primary, secondary] = home.ctas;

  return (
    <Container className="py-3xl">
      <h1 className="max-w-[42rem] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        {home.name}
      </h1>
      <p className="mt-md max-w-[42rem] text-lg text-foreground sm:text-xl">
        {home.headline}
      </p>
      <p className="mt-sm max-w-[36rem] text-lg text-muted">{home.lede}</p>

      <div className="mt-xl flex flex-wrap items-center gap-md">
        <Link
          href={primary.href}
          className="inline-flex items-center rounded-md bg-accent px-md py-2xs text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          {primary.label}
        </Link>
        <Link
          href={secondary.href}
          className="inline-flex items-center rounded-md border border-border px-md py-2xs text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
        >
          {secondary.label}
        </Link>
        <a
          href={about.resume.href}
          download={about.resume.filename}
          className="inline-flex items-center gap-2xs text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          Download resume
          <DownloadArrow />
        </a>
      </div>

      <ul className="mt-xl flex flex-wrap gap-2xs">
        {home.capabilities.map((capability) => (
          <li
            key={capability}
            className="inline-flex items-center rounded-sm border border-border px-2xs py-3xs text-sm text-muted"
          >
            {capability}
          </li>
        ))}
      </ul>
    </Container>
  );
}
