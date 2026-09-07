/**
 * Formatting helpers for `src/data/timeline.ts`. Pure — no React — so the
 * timeline page and anything else can share one rendering of the dates.
 */

import type { TimelinePoint } from "@/types";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/**
 * Render one point: `"2022-09"` → `"Sep 2022"`, `"2017"` → `"2017"`.
 * Anything that is not `"YYYY"` or `"YYYY-MM"` is returned unchanged.
 */
export function formatTimelinePoint(point: TimelinePoint): string {
  const match = /^(\d{4})-(\d{2})$/.exec(point);
  if (!match) return point;

  const month = MONTHS[Number(match[2]) - 1];
  return month ? `${month} ${match[1]}` : match[1];
}

/**
 * Render a range: an open end (`null`) reads as `"… – Present"`, otherwise
 * both points are formatted and joined with an en dash.
 */
export function formatTimelineRange(
  start: TimelinePoint,
  end: TimelinePoint | null,
): string {
  const from = formatTimelinePoint(start);
  const to = end === null ? "Present" : formatTimelinePoint(end);
  return `${from} – ${to}`;
}
