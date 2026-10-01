import type { MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";
import RichText from "./RichText";
import SectionHeading from "./SectionHeading";
import { projects, type Project, type ProjectStatus } from "../data/portfolio";

const statusStyles: Record<ProjectStatus, string> = {
  Live: "border-primary/40 bg-primary/10 text-primary",
  Deployed: "border-primary/40 bg-primary/10 text-primary",
  "In progress": "border-amber-500/40 bg-amber-500/10 text-amber-600 dark:text-amber-400",
  Research: "border-border bg-muted text-muted-foreground",
};

export default function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionHeading
          index="03"
          label="Projects"
          title="Selected *work*"
          intro="Marketplaces in production, an AI support assistant, and computer-vision research."
        />

        <div className="border-t border-border">
          {projects.map((project, i) => (
            <ProjectRow key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const link = project.liveUrl ?? project.repoUrl;

  const onMove = (e: MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <Reveal>
      <article
        onMouseMove={onMove}
        className="spotlight group relative grid gap-6 border-b border-border px-1 py-10 md:grid-cols-12 md:gap-8 md:px-6 md:py-12"
      >
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3 md:col-span-3 md:flex-col md:items-start">
          <span className="font-mono text-sm text-primary">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium ${
              statusStyles[project.status]
            }`}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {project.status}
          </span>
          <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
            {project.category}
          </span>
          {project.period && (
            <span className="font-mono text-xs text-muted-foreground">
              {project.period}
            </span>
          )}
        </div>

        <div className="md:col-span-7">
          <h3 className="font-display text-3xl font-semibold tracking-tight transition-colors group-hover:text-primary md:text-4xl">
            {project.title}
          </h3>
          {project.role && (
            <p className="mt-2 text-sm font-medium">{project.role}</p>
          )}
          <p className="mt-4 leading-relaxed text-muted-foreground">
            <RichText text={project.description} />
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 md:flex md:justify-end">
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`${project.liveUrl ? "Visit" : "View source of"} ${project.title}`}
              className="inline-flex h-fit items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {project.liveUrl ? "Visit site" : "Source"}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          )}
        </div>
      </article>
    </Reveal>
  );
}
