import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { ProjectDemos } from "@/components/project-demos";
import { TechIcon } from "@/components/tech-icon";
import { getProjectBySlug, projects } from "@/data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const url = `/projects/${project.slug}`;
  const image = {
    url: project.screenshot,
    alt: `Screenshot of ${project.name}`,
  };

  return {
    title: project.name,
    description: project.tagline,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: project.name,
      description: project.tagline,
      url,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.tagline,
      images: [image],
    },
  };
}

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

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <Container className="py-3xl">
      <article className="mx-auto max-w-[48rem]">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2xs text-sm font-medium text-muted transition-colors hover:text-foreground"
        >
          <span aria-hidden>&larr;</span> All projects
        </Link>

        <h1 className="mt-lg text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-sm text-lg text-muted">{project.tagline}</p>

        <h2 className="mt-xl text-xs font-medium uppercase tracking-[0.15em] text-muted">
          Tech stack
        </h2>
        <ul className="mt-sm flex flex-wrap gap-2xs">
          {project.technologies.map((tech) => (
            <li
              key={tech.icon}
              className="inline-flex items-center gap-2xs rounded-sm border border-border px-xs py-3xs text-sm text-muted"
            >
              <TechIcon icon={tech.icon} name={tech.name} />
              {tech.name}
            </li>
          ))}
        </ul>

        <div className="mt-lg flex flex-wrap items-center gap-md">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2xs rounded-md bg-accent px-md py-2xs text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Live demo
              <ExternalArrow />
            </a>
          )}
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2xs rounded-md border border-border px-md py-2xs text-sm font-medium text-foreground transition-colors hover:bg-surface-muted"
          >
            <TechIcon icon="github" name="GitHub" />
            View source
            <ExternalArrow />
          </a>
        </div>

        {project.demos ? (
          <ProjectDemos demos={project.demos} projectName={project.name} />
        ) : (
          <div className="relative mt-xl aspect-[16/10] overflow-hidden rounded-lg border border-border bg-surface-muted">
            <Image
              src={project.screenshot}
              alt={`Screenshot of ${project.name}`}
              fill
              priority
              className="object-contain"
              sizes="(min-width: 768px) 48rem, 100vw"
            />
          </div>
        )}

        <p className="mt-xl text-lg text-foreground">{project.description}</p>

        <h2 className="mt-2xl text-2xl font-semibold tracking-tight text-foreground">
          Features
        </h2>
        <ul className="mt-md flex flex-col gap-sm">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-sm text-muted">
              <span aria-hidden className="mt-2xs text-accent">
                &#8226;
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-2xl text-2xl font-semibold tracking-tight text-foreground">
          About this project
        </h2>
        <div className="mt-md flex flex-col gap-md">
          {project.details.map((paragraph) => (
            <p key={paragraph} className="text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </article>
    </Container>
  );
}
