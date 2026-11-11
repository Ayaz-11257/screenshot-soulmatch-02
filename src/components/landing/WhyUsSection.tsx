import { FEATURES } from "./data";
import { Section, SectionHeading } from "./SectionHeading";

export function WhyUsSection() {
  return (
    <Section id="about" labelledBy="about-title" className="bg-surface/40">
      <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          id="about-title"
          align="left"
          eyebrow="Why choose us"
          title="Learn AI the way it's actually used"
          description="AI Learning Hub is built for people who want working skills, not just theory. We keep cohorts small, focus on hands-on practice and give you a clear path from beginner to builder."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className="glass-card rounded-3xl p-6 transition-colors hover:border-primary/40"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="grid size-11 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
