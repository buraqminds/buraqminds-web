"use client";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("@/components/sections/HeroSection"), { ssr: false });
const StatsSection = dynamic(() => import("@/components/sections/StatsSection"), { ssr: false });
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"), { ssr: false });
const WhySection = dynamic(() => import("@/components/sections/WhySection"), { ssr: false });
const ProcessSection = dynamic(() => import("@/components/sections/ProcessSection"), { ssr: false });
const CaseStudiesSection = dynamic(() => import("@/components/sections/CaseStudiesSection"), { ssr: false });
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"), { ssr: false });
const EstimatorSection = dynamic(() => import("@/components/sections/EstimatorSection"), { ssr: false });
const CTASection = dynamic(() => import("@/components/sections/CTASection"), { ssr: false });

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <div style={{background:"var(--bg-800)",borderTop:"1px solid rgba(255,255,255,0.06)",borderBottom:"1px solid rgba(255,255,255,0.06)",padding:"36px 5%",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",flexWrap:"wrap"}}>
        {["AWS","Google Cloud","Microsoft Azure","Kubernetes","Docker","Terraform","ISO 27001","SOC 2","HIPAA"].map(b=>(
          <span key={b} style={{padding:"5px 14px",border:"1px solid rgba(255,255,255,0.08)",borderRadius:"3px",fontSize:"11px",fontWeight:500,color:"var(--text-secondary)",letterSpacing:"0.08em",textTransform:"uppercase"}}>{b}</span>
        ))}
      </div>
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
