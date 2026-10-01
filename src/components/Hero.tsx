import { motion } from "framer-motion";
import { ArrowRight, Check, Copy, Download, MapPin } from "lucide-react";
import RichText from "./RichText";
import { coreStack, profile, snapshot, stats } from "../data/portfolio";
import { socialLinks } from "../data/socials";
import { useCopy } from "../hooks/useCopy";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

export default function Hero() {
  const { copied, copy } = useCopy();

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="absolute -top-40 right-[-10%] h-[34rem] w-[34rem] rounded-full bg-primary/15 blur-[140px]" />
      </div>

      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <motion.div
              {...fadeUp(0)}
              className="flex flex-wrap items-center gap-x-4 gap-y-3 font-mono text-xs text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                {profile.availability}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} /> {profile.location}
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.08)}
              className="mt-7 font-display text-5xl font-semibold tracking-[-0.045em] sm:text-7xl lg:text-8xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              {...fadeUp(0.16)}
              className="mt-5 max-w-2xl text-2xl leading-snug tracking-tight text-foreground/90 md:text-[2rem]"
            >
              <RichText text={profile.headline} />
            </motion.p>

            <motion.p
              {...fadeUp(0.24)}
              className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              {profile.tagline}
            </motion.p>

            <motion.div
              {...fadeUp(0.32)}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              {profile.resumeUrl && (
                <a
                  href={profile.resumeUrl}
                  download
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_30px_-10px_hsl(var(--primary)/0.7)] transition-transform hover:-translate-y-0.5"
                >
                  <Download
                    size={16}
                    className="transition-transform group-hover:translate-y-0.5"
                  />
                  Download résumé
                </a>
              )}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:border-foreground/40"
              >
                View my work
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <button
                type="button"
                onClick={() => copy(profile.email)}
                className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label={`Copy email address ${profile.email}`}
              >
                {copied ? (
                  <Check size={16} className="text-primary" />
                ) : (
                  <Copy size={16} />
                )}
                <span aria-live="polite">
                  {copied ? "Email copied" : profile.email}
                </span>
              </button>
            </motion.div>

            <motion.ul
              {...fadeUp(0.4)}
              className="mt-8 flex items-center gap-2"
            >
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
                  >
                    <Icon size={17} />
                  </a>
                </li>
              ))}
            </motion.ul>
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="lg:col-span-5"
            aria-label="At a glance"
          >
            <div className="rounded-2xl border border-border bg-card/80 shadow-2xl shadow-black/[0.06] backdrop-blur">
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  At a glance
                </span>
                <span aria-hidden className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-border" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                </span>
              </div>
              <dl className="divide-y divide-border">
                {snapshot.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[7rem_1fr] gap-4 px-5 py-3.5"
                  >
                    <dt className="pt-0.5 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {row.label}
                    </dt>
                    <dd className="text-sm font-medium">{row.value}</dd>
                  </div>
                ))}
                <div className="px-5 py-4">
                  <dt className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Core stack
                  </dt>
                  <dd className="mt-3 flex flex-wrap gap-1.5">
                    {coreStack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-primary/25 bg-primary/10 px-2 py-1 font-mono text-xs text-primary"
                      >
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </motion.aside>
        </div>

        <motion.dl
          {...fadeUp(0.5)}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:mt-24 md:grid-cols-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col-reverse justify-end gap-2 bg-background p-6 md:p-8"
            >
              <dt className="text-sm leading-snug text-muted-foreground">
                {s.label}
              </dt>
              <dd className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
                {s.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
