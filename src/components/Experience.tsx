import { ArrowRight, Globe, TrendingUp } from "lucide-react";
import Reveal from "./Reveal";
import RichText from "./RichText";
import SectionHeading from "./SectionHeading";
import { experience } from "../data/portfolio";

const initials = (name: string) =>
  name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding border-y border-border bg-muted/40"
    >
      <div className="container">
        <SectionHeading
          index="02"
          label="Experience"
          title="Where I've been *shipping*"
          intro="Production work on real marketplaces, real payments and real users."
        />

        <div className="space-y-8">
          {experience.map((job) => (
            <Reveal key={job.company}>
              <article className="rounded-3xl border border-border bg-card p-6 md:p-10">
                <header className="flex flex-wrap items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-foreground font-mono text-lg font-semibold text-background">
                      {initials(job.company)}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                        {job.company}
                      </h3>
                      <p className="mt-1 text-muted-foreground">{job.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3 md:items-end">
                    <span className="font-mono text-sm">{job.period}</span>
                    {job.markets && (
                      <div className="flex flex-wrap gap-2">
                        {job.markets.map((m) => (
                          <span
                            key={m}
                            className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                          >
                            <Globe size={12} /> {m}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </header>

                {job.progression && (
                  <ol className="mt-10 grid gap-4 md:grid-cols-2">
                    {job.progression.map((step, i, steps) => {
                      const current = i === steps.length - 1;
                      return (
                        <li
                          key={step.title}
                          className={`relative rounded-2xl border p-5 ${
                            current
                              ? "border-primary/40 bg-primary/5"
                              : "border-border"
                          }`}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                              {step.period}
                            </span>
                            {current && i > 0 && (
                              <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                                <TrendingUp size={12} /> Promoted
                              </span>
                            )}
                          </div>
                          <p className="mt-2 font-semibold">{step.title}</p>
                          {!current && (
                            <span
                              aria-hidden
                              className="absolute -right-6 top-1/2 z-10 hidden h-8 w-8 -translate-y-1/2 place-items-center rounded-full border border-border bg-card text-muted-foreground md:grid"
                            >
                              <ArrowRight size={14} />
                            </span>
                          )}
                        </li>
                      );
                    })}
                  </ol>
                )}

                <ul className="mt-10 space-y-4">
                  {job.highlights.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-4 leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-[0.8em] h-px w-4 shrink-0 bg-primary" />
                      <span>
                        <RichText text={point} />
                      </span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-10 flex flex-wrap gap-2 border-t border-border pt-6">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
