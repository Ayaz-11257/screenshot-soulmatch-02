import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "./data";
import { Section, SectionHeading } from "./SectionHeading";

export function FaqSection() {
  return (
    <Section id="faq" labelledBy="faq-title">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <SectionHeading
          id="faq-title"
          align="left"
          eyebrow="FAQ"
          title="Questions, answered"
          description="Everything you need to know before you start. Still unsure? Send us an enquiry below."
        />
        <Accordion type="single" collapsible className="glass-card rounded-3xl px-6 sm:px-8">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`} className="border-border last:border-b-0">
              <AccordionTrigger className="py-5 text-left font-display text-base font-medium text-foreground hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
