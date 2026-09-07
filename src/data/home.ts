import type { HomeContent } from "@/types";

export const home = {
  name: "Isaac De La Rosa",
  headline: "Frontend and analytics engineer and tech lead at TELUS.",
  lede: "I build customer-facing web and mobile experiences — and the measurement systems behind them. Based in Toronto.",
  ctas: [
    { href: "/projects", label: "View work" },
    { href: "/contact", label: "Get in touch" },
  ],
  capabilities: [
    "Frontend engineering",
    "Analytics & data-layer architecture",
    "Real-time personalization",
  ],
  work: {
    heading: "Selected work",
    allLabel: "See all projects",
  },
  closing: {
    text: "Working on something I might be a fit for, or just want to talk shop?",
    ctaLabel: "Get in touch",
    ctaHref: "/contact",
  },
} as const satisfies HomeContent;
