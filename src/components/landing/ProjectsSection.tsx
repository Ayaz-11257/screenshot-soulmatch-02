import { PROJECTS } from "./data";
import { Section, SectionHeading } from "./SectionHeading";

export function ProjectsSection() {
  return (
    <Section id="projects" labelledBy="projects-title" className="bg-surface/40">
      <SectionHeading
        id="projects-title"
        eyebrow="Projects showcase"
        title="Sample projects you'll build"
        description="Examples of the hands-on projects included in our courses — each one becomes part of your portfolio."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {PROJECTS.map((p) => (
          <article key={p.title} className="glass-card group overflow-hidden rounded-3xl">
            <div className="relative overflow-hidden">
              <img
                src={p.image}
                alt=""
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full border border-border bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                {p.tag}
              </span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tools used">
                {p.stack.map((s) => (
                  <li key={s} className="rounded-md bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
