"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/container";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container className="py-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
        Error
      </p>
      <h1 className="mt-sm max-w-[42rem] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-md max-w-[36rem] text-lg text-muted">
        An unexpected error interrupted this page. Trying again often clears it.
      </p>

      <div className="mt-xl flex flex-wrap items-center gap-md">
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center rounded-md bg-accent px-md py-2xs text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2xs text-sm font-medium text-accent underline underline-offset-2"
        >
          <span aria-hidden>&larr;</span> Back home
        </Link>
      </div>
    </Container>
  );
}
