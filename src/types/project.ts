/** A technology used by a project. */
export type Technology = {
  /** Display label, e.g. "Next.js". */
  name: string;
  /** simple-icons slug, e.g. "nextdotjs". */
  icon: string;
};

/** A portfolio project. */
export type Project = {
  /** URL segment; matches the GitHub repo name. */
  slug: string;
  /** Full name, e.g. "Green Star Store". */
  name: string;
  /** One line, used as a card subtitle. */
  tagline: string;
  /** Short paragraph for lists and cards. */
  description: string;
  technologies: readonly Technology[];
  /** Live demo URL, or null when there is no single canonical demo. */
  demoUrl: string | null;
  repoUrl: string;
  /** Public path to the cover screenshot, e.g. "/projects/<slug>/cover.png". */
  screenshot: string;
  /** Longer body copy, one entry per paragraph. */
  details: readonly string[];
  /** Emphasis / ordering hook for the UI. */
  featured: boolean;
};
