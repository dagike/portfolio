export type TimelineKind = "work" | "education";

/** "YYYY" when only the year is known, "YYYY-MM" when the month is. */
export type TimelinePoint = string;

type TimelineBase = {
  /** Stable key for rendering and linking. */
  id: string;
  /** Job title or programme name. */
  title: string;
  /** Company or school. */
  organization: string;
  location: string | null;
  start: TimelinePoint;
  /** End point, or null while ongoing. */
  end: TimelinePoint | null;
  /** Optional prose summary, in the author's own words. */
  summary: string | null;
  /** Bullet highlights; may be empty. */
  highlights: readonly string[];
};

export type WorkEntry = TimelineBase & {
  kind: "work";
};

export type EducationEntry = TimelineBase & {
  kind: "education";
  /** e.g. "Post Graduate Certificate with Honours", "Bachelor's Degree". */
  credential: string;
};

export type TimelineEntry = WorkEntry | EducationEntry;
