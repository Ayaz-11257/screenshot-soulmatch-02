import { createFileRoute } from "@tanstack/react-router";
import { EnquiryProvider } from "@/components/landing/enquiry-context";
import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { CoursesSection } from "@/components/landing/CoursesSection";
import { WhyUsSection } from "@/components/landing/WhyUsSection";
import { RoadmapSection } from "@/components/landing/RoadmapSection";
import { ProjectsSection } from "@/components/landing/ProjectsSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FaqSection } from "@/components/landing/FaqSection";
import { EnquirySection } from "@/components/landing/EnquirySection";
import { SiteFooter } from "@/components/landing/SiteFooter";

const TITLE = "AI Learning Hub — Practical AI Courses for Students & Professionals";
const DESCRIPTION =
  "Learn AI fundamentals, Python, machine learning, generative AI and automation through mentor-guided, project-based courses.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <EnquiryProvider>
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <CoursesSection />
        <WhyUsSection />
        <RoadmapSection />
        <ProjectsSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <EnquirySection />
      </main>
      <SiteFooter />
    </EnquiryProvider>
  );
}
