import type { EducationEntry, TimelineEntry, WorkEntry } from "@/types";

export const timeline = [
  {
    kind: "work",
    id: "telus-adobe-prime",
    title: "Adobe Implementation Prime / Senior Analytics Developer — Tech Lead",
    organization: "TELUS",
    location: "Toronto, ON, Canada",
    start: "2022-09",
    end: null,
    summary:
      "Tech lead for the analytics, personalization and data-layer architecture behind TELUS's enterprise web, mobile and Adobe Experience Platform stack. TELUS is one of Canada's largest telecommunications and technology companies.",
    highlights: [
      "Own the integration specs for a platform handling 300M+ server calls a month across 30+ business units, including commerce and retail.",
      "Drive Adobe Experience Platform adoption and Real-Time Customer Profile activation so product, offer and service experiences adapt to real customer behaviour.",
      "Co-led an internal npm package that turned implementation standards into enforced code instead of documentation.",
      "Build reporting in Adobe Analytics, Customer Journey Analytics and BigQuery.",
    ],
  },
  {
    kind: "work",
    id: "telus-mobility-intermediate",
    title: "Intermediate Analytics Developer",
    organization: "TELUS – Mobility",
    location: "Toronto, ON, Canada",
    start: "2022-01",
    end: "2022-09",
    summary:
      "Built analytics instrumentation for TELUS Mobility's customer-facing properties, the step between the My TELUS junior role and the tech lead role that followed.",
    highlights: [],
  },
  {
    kind: "work",
    id: "telus-mytelus-junior",
    title: "Junior/Junior+ Analytics Developer",
    organization: "TELUS – My TELUS",
    location: "Toronto, ON, Canada",
    start: "2019-10",
    end: "2022-01",
    summary:
      "Joined as a junior analytics developer on My TELUS, then led the analytics and tracking side of TELUS's move to consolidate its native iOS and Android apps into a single React Native codebase.",
    highlights: [
      "Rebuilt the instrumentation, event schemas and data layer so measurement held up through the React Native rewrite.",
      "That codebase now serves more than two million active app users.",
    ],
  },
  {
    kind: "education",
    id: "humber-it-solutions",
    title: "Information Technology Solutions",
    organization: "Humber College",
    location: "Toronto, ON, Canada",
    start: "2017",
    end: "2019",
    credential: "Post Graduate Certificate with Honours",
    summary:
      "Post-graduate program in Toronto, completed after moving from Mexico. Humber is one of the largest polytechnics in Ontario, Canada.",
    highlights: [],
  },
  {
    kind: "education",
    id: "lasalle-cybernetics-engineering",
    title: "Cybernetics and Computational Systems Engineering",
    organization: "La Salle University",
    location: "Mexico City, Mexico",
    start: "2011",
    end: "2015",
    credential: "Bachelor's Degree",
    summary:
      "Undergraduate engineering degree in Mexico City. La Salle University is a private university in Mexico.",
    highlights: [],
  },
] as const satisfies readonly TimelineEntry[];

const entries: readonly TimelineEntry[] = timeline;

export const workEntries: readonly WorkEntry[] = entries.filter(
  (entry): entry is WorkEntry => entry.kind === "work",
);

export const educationEntries: readonly EducationEntry[] = entries.filter(
  (entry): entry is EducationEntry => entry.kind === "education",
);
