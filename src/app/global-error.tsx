"use client";

import { useEffect } from "react";
import "./globals.css";

export default function GlobalError({
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
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          fontFamily:
            "var(--font-sans, ui-sans-serif, system-ui, sans-serif)",
          background: "var(--background, #fff)",
          color: "var(--foreground, #0a0a0a)",
        }}
      >
        <div style={{ maxWidth: "28rem", textAlign: "center" }}>
          <h1
            style={{
              margin: 0,
              fontSize: "1.5rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            Something went wrong
          </h1>
          <p
            style={{
              marginTop: "0.75rem",
              color: "var(--muted, #5b5f66)",
            }}
          >
            The site hit an unexpected error. Please reload the page.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              marginTop: "1.5rem",
              border: 0,
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              cursor: "pointer",
              background: "var(--accent, #15803d)",
              color: "var(--accent-foreground, #fff)",
            }}
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
