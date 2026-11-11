import { ArrowRight, PlayCircle, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-ai.jpg";
import { useEnquiry } from "./enquiry-context";

const HIGHLIGHTS = [
  { value: "5", label: "focused courses" },
  { value: "3", label: "stage roadmap" },
  { value: "100%", label: "project-based" },
];

export function Hero() {
  const { openEnquiry } = useEnquiry();

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-hero" />
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="animate-fade-up">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
            <Sparkles className="size-3.5 text-highlight" aria-hidden />
            Project-based AI courses
          </p>
          <h1 id="hero-title" className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl xl:text-[4.25rem]">
            Build the future <br className="hidden sm:block" />
            <span className="text-gradient">with Artificial Intelligence.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Practical, mentor-guided AI courses for students, graduates and professionals. Go from your first line of
            Python to shipping real machine learning and generative AI projects.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="hero" size="xl" onClick={() => openEnquiry()}>
              Enroll Now <ArrowRight />
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#courses">
                <PlayCircle /> Explore Courses
              </a>
            </Button>
          </div>
          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-8">
            {HIGHLIGHTS.map((h) => (
              <div key={h.label}>
                <dt className="sr-only">{h.label}</dt>
                <dd className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{h.value}</dd>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div aria-hidden className="absolute -inset-6 animate-pulse-glow rounded-full bg-primary/25 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-card">
            <img
              src={heroImg}
              alt="Glowing neural network shaped like a brain surrounded by floating glass shapes"
              width={1200}
              height={1200}
              className="aspect-square w-full object-cover"
            />
            <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <div className="glass-card absolute -left-4 top-10 hidden animate-float rounded-2xl px-4 py-3 sm:flex sm:items-center sm:gap-3">
            <span className="grid size-9 place-items-center rounded-lg bg-primary/20 text-highlight">
              <Cpu className="size-4" aria-hidden />
            </span>
            <div>
              <p className="text-xs text-muted-foreground">Now building</p>
              <p className="text-sm font-semibold text-foreground">Neural network</p>
            </div>
          </div>

          <div className="glass-card absolute -right-3 bottom-10 hidden w-56 animate-float rounded-2xl p-4 [animation-delay:1.5s] sm:block">
            <p className="font-mono text-[11px] text-muted-foreground">model.fit(X_train, y_train)</p>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
              <div className="h-full w-3/4 rounded-full bg-gradient-primary" />
            </div>
            <p className="mt-2 text-xs font-medium text-foreground">Training in progress…</p>
          </div>
        </div>
      </div>
    </section>
  );
}
