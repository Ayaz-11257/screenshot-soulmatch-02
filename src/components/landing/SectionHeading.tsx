import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  id?: string;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, align = "center", id, className }: SectionHeadingProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-highlight">{eyebrow}</p>
      <h2 id={id} className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
        {title}
      </h2>
      {description && <p className="mt-4 text-base text-muted-foreground sm:text-lg">{description}</p>}
    </div>
  );
}

export function Section({ id, labelledBy, children, className }: { id: string; labelledBy: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("relative py-20 sm:py-28", className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
    </section>
  );
}
