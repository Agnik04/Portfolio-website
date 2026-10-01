import {
  Bot,
  CreditCard,
  LayoutDashboard,
  Server,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import RichText from "./RichText";
import SectionHeading from "./SectionHeading";
import { about, type FocusIcon } from "../data/portfolio";

const icons: Record<FocusIcon, LucideIcon> = {
  payments: CreditCard,
  backend: Server,
  frontend: LayoutDashboard,
  ai: Bot,
};

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <SectionHeading index="01" label="About" title={about.title} />

        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="space-y-5 text-lg leading-relaxed text-muted-foreground lg:col-span-6">
            {about.paragraphs.map((p, i) => (
              <p key={i}>
                <RichText text={p} />
              </p>
            ))}
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {about.focusAreas.map((area, i) => {
              const Icon = icons[area.icon];
              return (
                <Reveal key={area.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
                      <Icon size={18} />
                    </span>
                    <h3 className="mt-5 font-semibold">{area.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {area.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
