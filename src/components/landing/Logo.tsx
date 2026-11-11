import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#top" className={cn("group inline-flex items-center gap-2.5", className)} aria-label="AI Learning Hub — back to top">
      <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-primary shadow-glow">
        <svg viewBox="0 0 24 24" className="size-5 text-primary-foreground" fill="none" aria-hidden="true">
          <circle cx="12" cy="5" r="2" fill="currentColor" />
          <circle cx="5" cy="17" r="2" fill="currentColor" />
          <circle cx="19" cy="17" r="2" fill="currentColor" />
          <circle cx="12" cy="12.5" r="1.6" fill="currentColor" />
          <path d="M12 7v4M6.5 15.8l4.2-2.5M17.5 15.8l-4.2-2.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="font-display text-lg font-semibold tracking-tight text-foreground">
        AI Learning <span className="text-highlight">Hub</span>
      </span>
    </a>
  );
}
