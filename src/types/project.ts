/** A technology used by a project. */
export type Technology = {
  /** Display label, e.g. "Next.js". */
  name: string;
  /** simple-icons slug, e.g. "nextdotjs". */
  icon: string;
};

/** A recorded clip of a project running, shown in place of a static screenshot. */
export type ProjectDemo = {
  /** Public path to the MP4, e.g. "/projects/<slug>/demo/themes.mp4". */
  src: string;
  /** Public path to the poster frame shown before playback starts. */
  poster: string;
  /** Tab label, e.g. "Live preview". */
  title: string;
  /** One line describing what the clip shows. */
  description: string;
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
  /** Recorded clips shown instead of the screenshot on the detail page, when set. */
  demos?: readonly ProjectDemo[];
  /** Bulleted feature list, one entry per bullet. */
  features: readonly string[];
  /** Longer body copy, one entry per paragraph. */
  details: readonly string[];
  /** Emphasis / ordering hook for the UI. */
  featured: boolean;
};
