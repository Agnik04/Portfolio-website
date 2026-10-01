/**
 * Renders **bold** as a strong highlight and *italic* as the accent serif.
 * Keeps content in portfolio.ts plain strings while still skimmable.
 */
export default function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-foreground">
              {part.slice(2, -2)}
            </strong>
          );
        }
        if (part.length > 2 && part.startsWith("*") && part.endsWith("*")) {
          return (
            <em
              key={i}
              className="font-serif text-[1.08em] font-normal italic tracking-normal text-primary"
            >
              {part.slice(1, -1)}
            </em>
          );
        }
        return part;
      })}
    </>
  );
}
