import { Check, Copy, FileText, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import RichText from "./RichText";
import { contact, profile } from "../data/portfolio";
import { socialLinks } from "../data/socials";
import { useCopy } from "../hooks/useCopy";
import { useLocalTime } from "../hooks/useLocalTime";

export default function Contact() {
  const { copied, copy } = useCopy();
  const time = useLocalTime(profile.timezone);

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-20rem] left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[140px]"
      />

      <div className="container">
        <Reveal className="mx-auto max-w-4xl text-center">
          <p className="mb-6 flex items-center justify-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="text-primary">06</span>
            <span className="h-px w-8 bg-border" />
            Contact
          </p>
          <h2 className="font-display text-5xl font-semibold tracking-[-0.04em] md:text-7xl">
            <RichText text={contact.title} />
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
            {contact.message}
          </p>

          <div className="mt-10 flex flex-col items-center gap-5">
            <div className="inline-flex max-w-full items-center rounded-full border border-border bg-card p-1.5 pl-6 shadow-xl shadow-black/[0.04]">
              <a
                href={`mailto:${profile.email}`}
                className="truncate font-medium transition-colors hover:text-primary md:text-lg"
              >
                {profile.email}
              </a>
              <button
                type="button"
                onClick={() => copy(profile.email)}
                className="ml-4 inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
                aria-label="Copy email address"
              >
                {copied ? <Check size={16} /> : <Copy size={16} />}
                <span aria-live="polite">{copied ? "Copied" : "Copy"}</span>
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-foreground/40"
                >
                  <FileText size={15} /> Résumé
                </a>
              )}
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:border-foreground/40"
                >
                  <Icon size={15} /> {label}
                </a>
              ))}
            </div>
          </div>

          <p className="mt-14 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MapPin size={12} /> {profile.location} · {time} local time
          </p>
        </Reveal>
      </div>
    </section>
  );
}
