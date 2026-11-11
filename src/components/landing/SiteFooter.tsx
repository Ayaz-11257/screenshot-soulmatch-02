import { Github, Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { NAV_LINKS } from "./data";
import { Logo } from "./Logo";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: Linkedin },
  { label: "YouTube", href: "https://www.youtube.com/", icon: Youtube },
  { label: "Instagram", href: "https://www.instagram.com/", icon: Instagram },
  { label: "GitHub", href: "https://github.com/", icon: Github },
];

const MORE_LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Enquire", href: "#enquire" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Practical, project-based AI education for students, graduates and working professionals.
          </p>
        </div>
        <nav aria-label="Footer">
          <h3 className="text-sm font-semibold text-foreground">Explore</h3>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h3 className="text-sm font-semibold text-foreground">More</h3>
          <ul className="mt-4 space-y-2.5">
            {MORE_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-foreground">Contact</h3>
          <p className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <Mail className="size-4" aria-hidden /> hello@ailearninghub.example
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Placeholder contact for demo purposes</p>
          <ul className="mt-6 flex gap-2">
            {SOCIALS.map((s) => {
              const Icon = s.icon;
              return (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.label} (opens in a new tab)`}
                    className="grid size-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-muted-foreground sm:px-8">
          © {new Date().getFullYear()} AI Learning Hub. Demo portfolio project — courses, prices and testimonials are illustrative.
        </p>
      </div>
    </footer>
  );
}
