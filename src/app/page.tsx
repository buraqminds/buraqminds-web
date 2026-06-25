import AIProjectEstimatorSection from "@/components/sections/AIProjectEstimatorSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import HeroSection from "@/components/sections/HeroSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import StatsSection from "@/components/sections/StatsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import WhyBuraqMindsSection from "@/components/sections/WhyBuraqMindsSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <StatsSection />

      <ServicesSection />

      <WhyBuraqMindsSection />

      <ProcessSection />

      <CaseStudiesSection />

      <AIProjectEstimatorSection />

      <TestimonialsSection />

      <FinalCTASection />
    </>
  );
}
