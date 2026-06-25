export type Testimonial = {
  quote: string;
  name: string;
  position: string;
  industry: string;
  engagementType: string;
  businessImpact: string;
  rating: number;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Buraq Minds helped us move from a fragile MVP to a secure SaaS platform that our enterprise buyers could take seriously. The engineering discipline showed up in every sprint.",
    name: "Adeel Khan",
    position: "Founder & CEO",
    industry: "FinTech SaaS",
    engagementType: "Secure SaaS build",
    businessImpact: "Launched in 12 weeks and reduced onboarding time by 40%.",
    rating: 5,
    initials: "AK",
  },
  {
    quote:
      "Their AI workflow work removed a real operations bottleneck. We got automation without losing control over quality, privacy, or escalation paths.",
    name: "Sarah Mitchell",
    position: "VP Operations",
    industry: "B2B SaaS",
    engagementType: "AI workflow automation",
    businessImpact: "Reduced manual support workload by 58% in 10 weeks.",
    rating: 5,
    initials: "SM",
  },
  {
    quote:
      "The cloud modernization paid for itself quickly. Releases became calmer, rollback risk dropped, and infrastructure spend finally became predictable.",
    name: "Markus Weber",
    position: "Engineering Director",
    industry: "Enterprise Software",
    engagementType: "Cloud & DevOps modernization",
    businessImpact: "Cut infrastructure cost by 40% and increased deployment frequency 5x.",
    rating: 5,
    initials: "MW",
  },
  {
    quote:
      "Buraq Minds brought structure to QA without slowing our product team. The automated coverage gave leadership much more confidence in weekly releases.",
    name: "Emily Chen",
    position: "Product Lead",
    industry: "Ecommerce",
    engagementType: "QA automation framework",
    businessImpact: "Reduced regression testing from 3 days to under 45 minutes.",
    rating: 5,
    initials: "EC",
  },
  {
    quote:
      "Their security review was practical, not theoretical. We received clear findings, engineering-ready tickets, and a remediation path procurement could trust.",
    name: "Nora Williams",
    position: "Chief Information Security Officer",
    industry: "SaaS Security",
    engagementType: "Cybersecurity & VAPT",
    businessImpact: "Closed 23 critical risks and reached SOC 2 readiness in 8 weeks.",
    rating: 5,
    initials: "NW",
  },
];
