export type ServiceContent = {
  slug: string;
  title: string;
  shortDesc: string;
  outcome: string;
};

export const services: ServiceContent[] = [
  {
    slug: "saas-development",
    title: "SaaS Development",
    shortDesc:
      "Secure subscription platforms, portals, and dashboards engineered for measurable product growth.",
    outcome: "Launch faster with a scalable product core.",
  },
  {
    slug: "cybersecurity-vapt",
    title: "Cybersecurity & VAPT",
    shortDesc:
      "Application, API, cloud, and infrastructure testing with remediation guidance your team can act on.",
    outcome: "Reduce risk before customers or auditors find it.",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDesc:
      "AWS infrastructure, CI/CD pipelines, observability, and release systems built for reliable delivery.",
    outcome: "Ship predictably with lower operational drag.",
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortDesc:
      "RAG systems, AI agents, workflow automation, and ML-backed products grounded in real business data.",
    outcome: "Turn internal knowledge into usable intelligence.",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc:
      "Cross-platform iOS and Android products with secure backend integrations and polished user flows.",
    outcome: "Deliver mobile experiences users can trust.",
  },
  {
    slug: "blockchain-solutions",
    title: "Blockchain Solutions",
    shortDesc:
      "Smart contracts, Web3 dashboards, wallet integrations, and tokenized ownership workflows.",
    outcome: "Build transparent digital ownership systems.",
  },
  {
    slug: "qa-automation",
    title: "QA Automation",
    shortDesc:
      "Automated test frameworks that reduce regressions and improve release confidence.",
    outcome: "Protect velocity as the product expands.",
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc:
      "High-performance marketing sites, portals, and web apps tuned for conversion and maintainability.",
    outcome: "Create a credible digital front door.",
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    shortDesc:
      "Senior engineers embedded into your delivery team for AI, cloud, product, and security work.",
    outcome: "Add capacity without losing engineering standards.",
  },
];
