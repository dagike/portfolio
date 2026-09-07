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
    summary: null,
    highlights: [],
  },
  {
    kind: "work",
    id: "telus-mobility-intermediate",
    title: "Intermediate Analytics Developer",
    organization: "TELUS – Mobility",
    location: "Toronto, ON, Canada",
    start: "2022-01",
    end: "2022-09",
    summary: null,
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
    summary: null,
    highlights: [],
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
    summary: null,
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
    summary: null,
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
