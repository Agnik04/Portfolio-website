import { ArrowUp } from "lucide-react";
import { profile } from "../data/portfolio";
import { socialLinks } from "../data/socials";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}. Designed and built with
          React, Tailwind CSS and Framer Motion.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Icon size={16} />
            </a>
          ))}
          <a
            href="#home"
            className="ml-2 inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm transition-colors hover:border-foreground/40"
          >
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
