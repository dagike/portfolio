import type { AboutContent } from "@/types";

export const about = {
  eyebrow: "About",
  heading: "Analytics by day, full-stack by night.",
  lede: "Senior analytics developer and tech lead at TELUS, based in Toronto.",
  paragraphs: [
    "I'm a senior analytics developer and tech lead at TELUS in Toronto. I joined in 2019 on the My TELUS team, moved through Mobility, and now work as the Adobe implementation prime — the person who owns how tracking is built and kept honest across the properties I support.",
    "The work is web and app analytics implementation end to end: defining data layers with product and engineering teams, building the tag rules and Web SDK calls in Adobe Launch, wiring datastreams through to Adobe Analytics and Customer Journey Analytics, and reviewing the team's implementations against a shared standard.",
    "Outside that I build full-stack side projects to stay close to product engineering. Recent ones: Green Star Store, an ecommerce storefront running on real seeded data; a web application security demo that builds the same app twice, once vulnerable and once hardened; Traveling World Map, an interactive Leaflet map of the places I've been; and Game Library, a catalogue of favourite games. Each ships with a live demo and source on GitHub.",
    "I studied Cybernetics and Computational Systems Engineering at La Salle University in Mexico City, then moved to Toronto for a post-graduate certificate in Information Technology Solutions at Humber College. I've been here since.",
  ],
  toolbox: [
    {
      label: "Languages",
      items: ["TypeScript", "JavaScript", "SQL"],
    },
    {
      label: "Frontend",
      items: ["React", "Next.js", "React Router", "Tailwind CSS", "Leaflet"],
    },
    {
      label: "Backend & data",
      items: ["Node.js", "Fastify", "PostgreSQL", "Drizzle ORM", "Zod", "REST APIs"],
    },
    {
      label: "Analytics",
      items: [
        "Adobe Analytics",
        "Adobe Launch / Tags",
        "Adobe Web SDK",
        "Customer Journey Analytics",
        "Data layer design",
      ],
    },
    {
      label: "Tooling",
      items: ["Vite", "Vitest", "Git", "Vercel"],
    },
  ],
  resume: {
    href: "/resume.pdf",
    filename: "Isaac-Rosa-Resume.pdf",
    updated: "2026-09",
  },
} as const satisfies AboutContent;
