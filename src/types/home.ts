import type { Technology } from "./project";

/** A call-to-action link in the home hero. */
export type HomeCta = {
  /** Internal path, e.g. "/projects". */
  href: string;
  /** Link text. */
  label: string;
};

/** Heading and link for the selected-work section. */
export type HomeWork = {
  /** Section heading. */
  heading: string;
  /** Text for the link through to the full projects list. */
  allLabel: string;
};

/** The closing contact nudge at the foot of the page. */
export type HomeClosing = {
  /** The prompt line. */
  text: string;
  /** Link text. */
  ctaLabel: string;
  /** Internal path the link points at, e.g. "/contact". */
  ctaHref: string;
};

/** Copy for the home page. */
export type HomeContent = {
  /** Name shown as the page heading. */
  name: string;
  /** One-line role statement under the name. */
  headline: string;
  /** Short supporting paragraph. */
  lede: string;
  /** Primary actions in the hero. */
  ctas: readonly HomeCta[];
  /** Short capability phrases shown as a chip strip. */
  capabilities: readonly string[];
  /** Tools shown as an icon strip under the capability chips. */
  toolbox: readonly Technology[];
  /** The selected-work section. */
  work: HomeWork;
  /** The closing contact nudge. */
  closing: HomeClosing;
};
