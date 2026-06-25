import CTASection from "@/components/sections/CTASection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import EstimatorSection from "@/components/sections/EstimatorSection";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TechnologyStackSection from "@/components/sections/TechnologyStackSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhySection from "@/components/sections/WhySection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <TechnologyStackSection />
      <StatsSection />
      <ServicesSection />
      <WhySection />
      <ProcessSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <EstimatorSection />
      <CTASection />
    </main>
  );
}
