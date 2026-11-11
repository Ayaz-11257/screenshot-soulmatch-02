import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { PLANS } from "./data";
import { Section, SectionHeading } from "./SectionHeading";
import { useEnquiry } from "./enquiry-context";

const PLAN_INTEREST: Record<string, string> = {
  Starter: "not-sure",
  "Pro Path": "full-path",
  Team: "full-path",
};

export function PricingSection() {
  const { openEnquiry } = useEnquiry();

  return (
    <Section id="pricing" labelledBy="pricing-title" className="bg-surface/40">
      <SectionHeading
        id="pricing-title"
        eyebrow="Pricing"
        title="Simple plans for every goal"
        description="Prices shown are illustrative examples for this demo site and are not a live offer."
      />
      <div className="mt-14 grid gap-6 lg:grid-cols-3 lg:items-stretch">
        {PLANS.map((p) => (
          <article
            key={p.name}
            className={cn(
              "relative flex flex-col rounded-3xl p-8",
              p.featured ? "border border-primary/60 bg-gradient-card shadow-glow lg:-my-4 lg:py-12" : "glass-card",
            )}
          >
            {p.featured && (
              <span className="absolute -top-3 left-8 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            <p className="mt-6 flex items-baseline gap-2">
              <span className="font-display text-4xl font-semibold text-foreground">{p.price}</span>
              <span className="text-sm text-muted-foreground">/ {p.cadence}</span>
            </p>
            <ul className="mt-8 flex-1 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                  <Check className="mt-0.5 size-4 shrink-0 text-highlight" aria-hidden /> {f}
                </li>
              ))}
            </ul>
            <Button
              variant={p.featured ? "hero" : "glass"}
              size="xl"
              className="mt-8 w-full"
              onClick={() => openEnquiry(PLAN_INTEREST[p.name])}
            >
              {p.price === "Custom" ? "Contact us" : `Enrol in ${p.name}`}
            </Button>
          </article>
        ))}
      </div>
      <p className="mt-10 text-center text-xs text-muted-foreground">
        Illustrative pricing only. Final fees, taxes and payment options would be confirmed before enrolment.
      </p>
    </Section>
  );
}
