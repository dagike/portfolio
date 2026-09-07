import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Page not found",
};

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/timeline", label: "Timeline" },
  { href: "/contact", label: "Contact" },
];

export default function NotFound() {
  return (
    <Container className="py-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
        404
      </p>
      <h1 className="mt-sm max-w-[42rem] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-md max-w-[36rem] text-lg text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
      </p>

      <Link
        href="/"
        className="mt-xl inline-flex items-center gap-2xs text-sm font-medium text-accent underline underline-offset-2"
      >
        <span aria-hidden>&larr;</span> Back home
      </Link>

      <nav aria-label="Site" className="mt-2xl">
        <ul className="flex flex-wrap gap-x-lg gap-y-sm text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
