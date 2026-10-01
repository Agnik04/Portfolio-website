import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education } from "../data/portfolio";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <SectionHeading
          index="05"
          label="Education"
          title="Built on strong *fundamentals*"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 transition-colors hover:border-primary/40 md:p-9">
                <div className="flex items-start justify-between gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary/10 text-primary">
                    <GraduationCap size={20} />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight">
                  {item.school}
                </h3>
                <p className="mt-2 text-muted-foreground">{item.degree}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.location}
                </p>
                <div className="mt-auto pt-8">
                  <div className="flex items-baseline gap-3 border-t border-border pt-6">
                    <span className="font-display text-5xl font-semibold tracking-tight">
                      {item.score}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                      {item.scoreLabel}
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
