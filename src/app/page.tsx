import CTASection from "@/components/sections/CTASection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import EstimatorSection from "@/components/sections/EstimatorSection";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import TrustSection from "@/components/sections/TrustSection";
import WhySection from "@/components/sections/WhySection";

const techBadges = [
  "AWS",
  "Google Cloud",
  "Azure",
  "Kubernetes",
  "Docker",
  "ISO 27001",
  "SOC 2",
];

function LogoStrip() {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-3 border-y border-white/[0.06] bg-[var(--bg-800)] px-6 py-7 font-[family-name:var(--font-body)]">
      {techBadges.map((badge) => (
        <span
          key={badge}
          className="border border-[var(--color-primary-border)] px-4 py-2 text-[10px] font-light tracking-[0.18em] text-[var(--text-secondary)] uppercase"
        >
          {badge}
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HeroSection />

      <LogoStrip />

      <StatsSection />

      <ServicesSection />

      <WhySection />

      <ProcessSection />

      <CaseStudiesSection />

      <TestimonialsSection />

      <TrustSection />

      <EstimatorSection />

      <CTASection />
    </>
  );
}
