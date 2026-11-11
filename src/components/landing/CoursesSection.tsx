import { useState } from "react";
import { ArrowUpRight, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { COURSES, type Course } from "./data";
import { LevelBadge } from "./LevelBadge";
import { Section, SectionHeading } from "./SectionHeading";
import { useEnquiry } from "./enquiry-context";

function CourseCard({ course, onLearnMore }: { course: Course; onLearnMore: () => void }) {
  const Icon = course.icon;
  return (
    <article className="glass-card group relative flex flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
      <div className="flex items-start justify-between">
        <span className="grid size-12 place-items-center rounded-2xl bg-primary/15 text-highlight ring-1 ring-primary/30 transition-colors group-hover:bg-primary/25">
          <Icon className="size-6" aria-hidden />
        </span>
        <LevelBadge level={course.level} />
      </div>
      <h3 className="mt-6 text-xl font-semibold text-foreground">{course.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{course.description}</p>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
        <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
          <Clock className="size-4" aria-hidden /> {course.duration}
        </span>
        <Button variant="link" className="h-auto p-0 text-highlight" onClick={onLearnMore} aria-label={`Learn more about ${course.title}`}>
          Learn More <ArrowUpRight />
        </Button>
      </div>
    </article>
  );
}

export function CoursesSection() {
  const [active, setActive] = useState<Course | null>(null);
  const { openEnquiry } = useEnquiry();

  return (
    <Section id="courses" labelledBy="courses-title">
      <SectionHeading
        id="courses-title"
        eyebrow="Course catalogue"
        title="Courses built around real skills"
        description="Start anywhere that fits your level. Each course combines short lessons, guided exercises and a project you build yourself."
      />
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COURSES.map((c) => (
          <CourseCard key={c.id} course={c} onLearnMore={() => setActive(c)} />
        ))}
        <article className="flex flex-col justify-center rounded-3xl border border-dashed border-primary/40 bg-primary/5 p-7">
          <h3 className="text-xl font-semibold text-foreground">Not sure where to start?</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Tell us about your background and goals and we'll suggest a starting point on the learning path.
          </p>
          <Button variant="glass" size="pill" className="mt-6 self-start" onClick={() => openEnquiry("not-sure")}>
            Get a recommendation
          </Button>
        </article>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="border-border bg-popover sm:max-w-lg">
          {active && (
            <>
              <DialogHeader>
                <div className="flex items-center gap-2">
                  <LevelBadge level={active.level} />
                  <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="size-3.5" aria-hidden /> {active.duration}
                  </span>
                </div>
                <DialogTitle className="pt-2 font-display text-2xl">{active.title}</DialogTitle>
                <DialogDescription>{active.description}</DialogDescription>
              </DialogHeader>
              <div>
                <h4 className="text-sm font-semibold text-foreground">What you'll cover</h4>
                <ul className="mt-3 space-y-2">
                  {active.topics.map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Check className="mt-0.5 size-4 shrink-0 text-highlight" aria-hidden /> {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 rounded-xl bg-surface p-4 text-sm text-foreground">
                  <span className="font-semibold">Outcome: </span>
                  {active.outcome}
                </p>
              </div>
              <DialogFooter>
                <Button
                  variant="hero"
                  size="pill"
                  onClick={() => {
                    const id = active.id;
                    setActive(null);
                    openEnquiry(id);
                  }}
                >
                  Enquire about this course
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
