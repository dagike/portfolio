/** A named group of tools or skills shown on the about page. */
export type ToolboxGroup = {
  /** Group heading, e.g. "Frontend". */
  label: string;
  /** Individual tools or skills in the group. */
  items: readonly string[];
};

/** The downloadable resume. */
export type ResumeLink = {
  /** Public path to the file, e.g. "/resume.pdf". */
  href: string;
  /** Suggested filename for the download. */
  filename: string;
  /** Month the file was last refreshed, "YYYY-MM". */
  updated: string;
};

/** Copy and data for the about page. */
export type AboutContent = {
  /** Small label above the heading. */
  eyebrow: string;
  /** Page heading. */
  heading: string;
  /** One line under the heading. */
  lede: string;
  /** Body copy, one entry per paragraph. */
  paragraphs: readonly string[];
  /** Skills grouped for a compact grid. */
  toolbox: readonly ToolboxGroup[];
  /** The resume download. */
  resume: ResumeLink;
};
