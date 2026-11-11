import { Quote } from "lucide-react";
import { TESTIMONIALS } from "./data";
import { Section, SectionHeading } from "./SectionHeading";

export function TestimonialsSection() {
  return (
    <Section id="testimonials" labelledBy="testimonials-title">
      <SectionHeading
        id="testimonials-title"
        eyebrow="Student stories"
        title="What learners could say"
        description="These are fictional demo testimonials written to illustrate the learner experience. They are not reviews from real students."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure key={t.name} className="glass-card flex flex-col rounded-3xl p-7">
            <div className="flex items-center justify-between">
              <Quote className="size-8 text-primary" aria-hidden />
              <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                Demo
              </span>
            </div>
            <blockquote className="mt-5 flex-1 text-base leading-relaxed text-foreground">"{t.quote}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
              <span className="grid size-10 place-items-center rounded-full bg-gradient-primary font-display text-sm font-semibold text-primary-foreground">
                {t.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role} · fictional</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
