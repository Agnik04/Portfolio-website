import Reveal from "./Reveal";
import RichText from "./RichText";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  intro?: string;
};

export default function SectionHeading({
  index,
  label,
  title,
  intro,
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-14 grid gap-6 md:mb-20 md:grid-cols-12 md:items-end">
      <div className="md:col-span-7">
        <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="text-primary">{index}</span>
          <span className="h-px w-8 bg-border" />
          {label}
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] md:text-6xl">
          <RichText text={title} />
        </h2>
      </div>
      {intro && (
        <p className="text-lg leading-relaxed text-muted-foreground md:col-span-5">
          {intro}
        </p>
      )}
    </Reveal>
  );
}
