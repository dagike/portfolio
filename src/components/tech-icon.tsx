import { techIcons } from "@/lib/tech-icons";

type TechIconProps = {
  /** simple-icons slug, matching a key in `techIcons`. */
  icon: string;
  /** Technology name, used only as a title on the SVG for hovering. */
  name: string;
  /** Rendered width/height in pixels. */
  size?: number;
};

/**
 * A single technology glyph. Decorative by default (`aria-hidden`) — callers
 * provide the accessible name so it is announced once, not twice.
 */
export function TechIcon({ icon, name, size = 16 }: TechIconProps) {
  const data = techIcons[icon];

  if (!data) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
        focusable="false"
      >
        <title>{name}</title>
        <circle cx="12" cy="12" r="5" />
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      focusable="false"
    >
      <title>{name}</title>
      <path d={data.path} />
    </svg>
  );
}
