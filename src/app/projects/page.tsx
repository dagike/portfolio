import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "A catalog of things I have designed, built and shipped.",
  alternates: {
    canonical: "/projects",
  },
};

const ordered = [...projects].sort(
  (a, b) => Number(b.featured) - Number(a.featured),
);

export default function ProjectsPage() {
  return (
    <Container className="py-3xl">
      <p className="text-sm font-medium uppercase tracking-[0.15em] text-accent">
        Projects
      </p>
      <h1 className="mt-sm max-w-[42rem] text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
        Things I&rsquo;ve built.
      </h1>
      <p className="mt-md max-w-[36rem] text-lg text-muted">
        Full-stack projects, each with a live demo and source on GitHub.
      </p>

      <ul className="mt-2xl grid grid-cols-1 gap-lg sm:grid-cols-2 lg:grid-cols-3">
        {ordered.map((project) => (
          <li key={project.slug} className="h-full">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
