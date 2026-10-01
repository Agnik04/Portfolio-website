import { Github, Linkedin, Twitter, type LucideIcon } from "lucide-react";
import { profile } from "./portfolio";

export const socialLinks: { label: string; href: string; icon: LucideIcon }[] =
  [
    { label: "GitHub", href: profile.socials.github, icon: Github },
    { label: "LinkedIn", href: profile.socials.linkedin, icon: Linkedin },
    { label: "X (Twitter)", href: profile.socials.twitter, icon: Twitter },
  ];
