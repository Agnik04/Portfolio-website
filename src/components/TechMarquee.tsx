import { skills } from "../data/portfolio";

const items = Array.from(new Set(skills.flatMap((g) => g.items)));

export default function TechMarquee() {
  return (
    <div
      className="relative overflow-hidden border-y border-border py-5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      aria-label="Technologies I work with"
    >
      <ul className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[...items, ...items].map((tech, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-5 whitespace-nowrap px-5 font-mono text-sm text-muted-foreground"
          >
            <span>{tech}</span>
            <span className="text-primary">✦</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
