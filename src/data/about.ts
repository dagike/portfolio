import type { AboutContent } from "@/types";

export const about = {
  eyebrow: "About",
  heading: "The experiences, and the systems that measure them.",
  lede: "Frontend and analytics engineer and tech lead at TELUS in Toronto — six-plus years on customer-facing web and mobile.",
  paragraphs: [
    "I'm a frontend and analytics engineer and the tech lead for TELUS's enterprise web, mobile, and personalization stack, working across all of the company's digital properties. I joined in 2019 as a junior analytics developer on My TELUS and Mobility, and moved into the lead role in 2022.",
    "When TELUS consolidated its native iOS and Android apps into a single React Native codebase — now serving more than two million active app users — I led the analytics and tracking side of the migration: rebuilding the instrumentation, event schemas, and data layer so measurement held up through the rewrite. I still own those integration specs today, for a platform handling 300M+ server calls a month across 30+ business units, including commerce and retail.",
    "A large part of the role is real-time personalization: driving Adobe Experience Platform adoption and Real-Time Customer Profile activation so product, offer, and service experiences adapt to what a customer is actually doing. I define the data-layer architecture behind it, build the reporting in Adobe Analytics, Customer Journey Analytics, and BigQuery, and co-led an internal npm package that turned our implementation standards from documentation into enforced code.",
    "Outside work I build side projects to stay close to product engineering end to end: Green Star Store, an ecommerce storefront on real seeded data; a web application security demo that builds the same app once vulnerable and once hardened; Traveling World Map, an interactive Leaflet map of the places I've been; Game Library, a catalogue of favourite games; and hungryeditor, a native C++ and Qt Markdown editor. Each ships with source on GitHub, and a live demo or a recorded walkthrough.",
    "I studied Cybernetics and Computational Systems Engineering at La Salle University in Mexico City, then moved to Toronto for a post-graduate certificate in Information Technology Solutions at Humber College. I've been here since.",
  ],
  toolbox: [
    {
      label: "Frontend",
      items: [
        "React",
        "React Native",
        "TypeScript",
        "JavaScript",
        "Redux",
        "Next.js",
        "Tailwind CSS",
      ],
    },
    {
      label: "Personalization & analytics",
      items: [
        "Adobe Experience Platform",
        "Real-Time Customer Profile",
        "Adobe Journey Optimizer",
        "Adobe Analytics",
        "Customer Journey Analytics",
        "Adobe Launch",
      ],
    },
    {
      label: "Backend & data",
      items: ["Node.js", "REST APIs", "SQL", "PostgreSQL", "BigQuery", "Python", "GCP"],
    },
    {
      label: "Testing & quality",
      items: [
        "Vitest",
        "Automated functional tests",
        "QA automation",
        "A/B testing",
      ],
    },
    {
      label: "Tooling",
      items: ["Git", "Vercel", "Vite", "Tableau", "Power BI"],
    },
  ],
  resume: {
    href: "/resume.pdf",
    filename: "Isaac-Rosa-Resume.pdf",
    updated: "2026-09",
  },
} as const satisfies AboutContent;
