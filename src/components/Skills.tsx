import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { coreStack, skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding border-y border-border bg-muted/40"
    >
      <div className="container">
        <SectionHeading
          index="04"
          label="Skills"
          title="The *toolkit*"
          intro="Highlighted items are my core stack, the tools I reach for most in production."
        />

        <div className="divide-y divide-border border-y border-border">
          {skills.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.04}>
              <div className="grid gap-4 py-6 md:grid-cols-12 md:items-center">
                <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-3">
                  {group.category}
                </h3>
                <ul className="flex flex-wrap gap-2 md:col-span-9">
                  {group.items.map((item) => {
                    const core = coreStack.includes(item);
                    return (
                      <li
                        key={item}
                        className={`rounded-full border px-3.5 py-1.5 text-sm transition-colors ${
                          core
                            ? "border-primary/40 bg-primary/10 font-medium text-primary"
                            : "border-border bg-card text-foreground/80 hover:border-foreground/30"
                        }`}
                      >
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
