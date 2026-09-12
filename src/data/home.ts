import type { HomeContent } from "@/types";

export const home = {
  name: "Isaac De La Rosa",
  headline: "Frontend and analytics engineer and tech lead at TELUS.",
  lede: "I build customer-facing web and mobile experiences — and the measurement systems behind them. Based in Toronto.",
  ctas: [
    { href: "/projects", label: "View projects" },
    { href: "/contact", label: "Get in touch" },
  ],
  capabilities: [
    "Frontend engineering",
    "Analytics & data-layer architecture",
    "Real-time personalization",
  ],
  toolbox: [
    { name: "React", icon: "react" },
    // React Native has no separate simple-icons mark; reuses the React glyph.
    { name: "React Native", icon: "react" },
    { name: "TypeScript", icon: "typescript" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Next.js", icon: "nextdotjs" },
    { name: "Tailwind CSS", icon: "tailwindcss" },
    { name: "Node.js", icon: "nodedotjs" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "BigQuery", icon: "googlebigquery" },
    { name: "Python", icon: "python" },
    { name: "Adobe Experience Platform", icon: "adobeexperienceplatform" },
    { name: "Adobe Analytics", icon: "adobeanalytics" },
    { name: "C++", icon: "cplusplus" },
    { name: "Qt", icon: "qt" },
    { name: "Git", icon: "git" },
  ],
  work: {
    heading: "Featured projects",
    allLabel: "See all projects",
  },
  closing: {
    text: "Working on something I might be a fit for, or just want to talk shop?",
    ctaLabel: "Get in touch",
    ctaHref: "/contact",
  },
} as const satisfies HomeContent;
