import { Check } from "lucide-react";
import { ROADMAP } from "./data";
import { Section, SectionHeading } from "./SectionHeading";

export function RoadmapSection() {
  return (
    <Section id="learning-path" labelledBy="path-title">
      <SectionHeading
        id="path-title"
        eyebrow="Learning roadmap"
        title="A clear path from beginner to builder"
        description="Three stages, each building on the last. Join at the stage that matches your experience."
      />
      <ol className="relative mt-16 grid gap-6 lg:grid-cols-3">
        <div aria-hidden className="absolute left-8 right-[31%] top-[2.1rem] hidden h-px bg-gradient-primary opacity-60 lg:block" />
        {ROADMAP.map((s) => (
          <li key={s.stage} className="relative">
            <div className="relative z-10 mb-6 grid size-[4.25rem] place-items-center rounded-2xl border border-primary/40 bg-background font-mono text-lg font-semibold text-highlight shadow-glow">
              {s.step}
            </div>
            <div className="glass-card rounded-3xl p-7">
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{s.weeks}</p>
              <h3 className="mt-2 text-2xl font-semibold text-foreground">{s.stage}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.summary}</p>
              <ul className="mt-6 space-y-2.5">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2.5 text-sm text-foreground">
                    <span className="grid size-5 place-items-center rounded-full bg-primary/20 text-highlight">
                      <Check className="size-3" aria-hidden />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
