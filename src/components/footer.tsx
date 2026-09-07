import { Container } from "@/components/container";

const links = [
  { href: "#", label: "GitHub" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Email" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-sm py-lg text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {year} Portfolio</p>
        <ul className="flex gap-lg">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
