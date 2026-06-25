"use client"

import PageLoader from "@/components/ui/PageLoader";
import HeroSection from "@/components/sections/HeroSection";
import TechScrollStrip from "@/components/sections/TechScrollStrip";
import StatsSection from "@/components/sections/StatsSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhySection from "@/components/sections/WhySection";
import ProcessSection from "@/components/sections/ProcessSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import EstimatorSection from "@/components/sections/EstimatorSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-[#080808]">
      <PageLoader />
      <HeroSection />
      <TechScrollStrip />
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
