import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { TechIcon } from "@/components/tech-icon";

/** A small arrow marking a link that leaves the site. */
function ExternalArrow() {
  return (
    <svg
      width={14}
      height={14}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      focusable="false"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-muted focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2 focus-within:ring-offset-background">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-surface-muted">
        <Image
          src={project.screenshot}
          alt={`Screenshot of ${project.name}`}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>

      <div className="flex flex-1 flex-col gap-sm p-lg">
        <h3 className="text-lg font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="text-sm text-muted">{project.tagline}</p>

        <ul aria-label="Technologies" className="mt-2xs flex flex-wrap gap-2xs">
          {project.technologies.map((tech) => (
            <li
              key={tech.icon}
              title={tech.name}
              className="inline-flex items-center gap-2xs rounded-sm border border-border px-2xs py-3xs text-muted"
            >
              <TechIcon icon={tech.icon} name={tech.name} />
              <span className="sr-only">{tech.name}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center gap-sm pt-sm">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2xs rounded-md bg-accent px-sm py-2xs text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Live demo
              <ExternalArrow />
            </a>
          )}

          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Source for ${project.name} on GitHub`}
            className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface-muted hover:text-foreground"
          >
            <TechIcon icon="github" name="GitHub" size={16} />
          </a>

          <Link
            href={`/projects/${project.slug}`}
            aria-label={`Details for ${project.name}`}
            className="ml-auto inline-flex items-center gap-2xs text-sm font-medium text-muted transition-colors after:absolute after:inset-0 hover:text-foreground focus-visible:outline-none group-hover:text-foreground"
          >
            Details
            <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
