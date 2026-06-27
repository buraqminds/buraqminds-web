export type ServiceContent = {
  slug: string;
  title: string;
  shortDesc: string;
  outcome: string;
  category: string;
  processHeading: string;
  process: {
    title: string;
    description: string;
  }[];
  techStack: string[];
  deliverables: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const services: ServiceContent[] = [
  {
    slug: "saas-development",
    title: "SaaS Development",
    shortDesc:
      "Secure subscription platforms, portals, and dashboards engineered for measurable product growth.",
    outcome: "Launch faster with a scalable product core.",
    category: "Product Platforms",
    processHeading: "From SaaS idea to production-ready platform",
    process: [
      {
        title: "Product Mapping",
        description:
          "We define users, roles, billing logic, workflows, and the fastest valuable release.",
      },
      {
        title: "Architecture",
        description:
          "We design secure APIs, data models, dashboards, and scalable product foundations.",
      },
      {
        title: "Sprint Delivery",
        description:
          "We ship working modules in weekly cycles with QA, reviews, and clear demos.",
      },
      {
        title: "Launch Support",
        description:
          "We prepare deployment, monitoring, onboarding, and the next product roadmap.",
      },
    ],
    techStack: ["Next.js", "React", "Node.js", "PostgreSQL", "Firebase", "Stripe", "AWS"],
    deliverables: [
      "Product architecture and technical roadmap",
      "Responsive SaaS web application",
      "Secure authentication and role management",
      "Admin dashboards and reporting views",
      "Deployment pipeline and handoff documentation",
      "Post-launch support plan",
    ],
    faqs: [
      {
        question: "Can you build an MVP first?",
        answer:
          "Yes. We usually start with the smallest release that proves the workflow, revenue model, and core product value.",
      },
      {
        question: "Do you handle subscriptions and payments?",
        answer:
          "Yes. We can integrate subscription billing, invoicing, access control, and payment reporting.",
      },
      {
        question: "Will the platform scale after launch?",
        answer:
          "We design the data model, APIs, and hosting plan around expected usage so the first release can grow without a rebuild.",
      },
    ],
  },
  {
    slug: "cybersecurity-vapt",
    title: "Cybersecurity & VAPT",
    shortDesc:
      "Application, API, cloud, and infrastructure testing with remediation guidance your team can act on.",
    outcome: "Reduce risk before customers or auditors find it.",
    category: "Risk Reduction",
    processHeading: "Security testing with clear remediation",
    process: [
      {
        title: "Scope Definition",
        description:
          "We confirm assets, test windows, environments, and reporting requirements.",
      },
      {
        title: "Assessment",
        description:
          "We test web apps, APIs, cloud, and infrastructure against practical attack paths.",
      },
      {
        title: "Reporting",
        description:
          "We prioritize findings with severity, evidence, impact, and remediation steps.",
      },
      {
        title: "Retest",
        description:
          "We verify fixes and provide a clean closure report for stakeholders.",
      },
    ],
    techStack: ["OWASP", "Burp Suite", "Nessus", "Metasploit", "Nmap", "AWS", "Linux"],
    deliverables: [
      "VAPT scope and test plan",
      "Executive risk summary",
      "Technical vulnerability report",
      "Remediation guidance for engineers",
      "Retest validation report",
      "Security improvement roadmap",
    ],
    faqs: [
      {
        question: "Do you test APIs as well as web apps?",
        answer:
          "Yes. API authentication, authorization, input validation, rate limits, and sensitive data exposure are all included when in scope.",
      },
      {
        question: "Can you support compliance readiness?",
        answer:
          "We can align findings and remediation with SOC 2, ISO 27001, and common enterprise security expectations.",
      },
      {
        question: "Will you help our engineers fix issues?",
        answer:
          "Yes. Reports include practical remediation guidance, and we can review fixes during the retest cycle.",
      },
    ],
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    shortDesc:
      "AWS infrastructure, CI/CD pipelines, observability, and release systems built for reliable delivery.",
    outcome: "Ship predictably with lower operational drag.",
    category: "Reliable Operations",
    processHeading: "Cloud systems built for controlled releases",
    process: [
      {
        title: "Infrastructure Audit",
        description:
          "We review hosting, deployment flow, reliability gaps, security posture, and costs.",
      },
      {
        title: "Cloud Design",
        description:
          "We define infrastructure, environments, secrets, networks, and scaling patterns.",
      },
      {
        title: "Automation",
        description:
          "We implement CI/CD, infrastructure as code, checks, and rollback paths.",
      },
      {
        title: "Observability",
        description:
          "We add monitoring, alerts, logs, and runbooks for production confidence.",
      },
    ],
    techStack: ["AWS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Vercel", "Grafana"],
    deliverables: [
      "Cloud architecture plan",
      "Infrastructure as code",
      "CI/CD pipeline setup",
      "Monitoring and alerting configuration",
      "Deployment runbooks",
      "Cost and reliability recommendations",
    ],
    faqs: [
      {
        question: "Can you migrate an existing product?",
        answer:
          "Yes. We plan migrations around downtime tolerance, data risk, rollback needs, and production traffic patterns.",
      },
      {
        question: "Do you support AWS only?",
        answer:
          "AWS is our most common cloud, but we also support Vercel, Firebase, container platforms, and hybrid setups.",
      },
      {
        question: "Can you reduce cloud costs?",
        answer:
          "We review usage, scaling, storage, and deployment patterns to identify waste without weakening reliability.",
      },
    ],
  },
  {
    slug: "ai-machine-learning",
    title: "AI & Machine Learning",
    shortDesc:
      "RAG systems, AI agents, workflow automation, and ML-backed products grounded in real business data.",
    outcome: "Turn internal knowledge into usable intelligence.",
    category: "Applied Intelligence",
    processHeading: "AI systems connected to real workflows",
    process: [
      {
        title: "Use Case Design",
        description:
          "We identify where AI can save time, improve decisions, or create a better product experience.",
      },
      {
        title: "Data Readiness",
        description:
          "We assess documents, databases, workflows, permissions, and quality constraints.",
      },
      {
        title: "Model Integration",
        description:
          "We build RAG, agents, copilots, or ML workflows around your data and user journey.",
      },
      {
        title: "Evaluation",
        description:
          "We test accuracy, safety, latency, and operating cost before production rollout.",
      },
    ],
    techStack: ["Python", "LangChain", "OpenAI", "Claude", "Pinecone", "FastAPI", "PostgreSQL"],
    deliverables: [
      "AI use case and feasibility plan",
      "Data ingestion and retrieval pipeline",
      "AI workflow or product interface",
      "Prompting and evaluation framework",
      "Security and access control review",
      "Deployment and monitoring setup",
    ],
    faqs: [
      {
        question: "Can you build a RAG chatbot for company data?",
        answer:
          "Yes. We can ingest documents, structure retrieval, apply permissions, and build a production-ready interface.",
      },
      {
        question: "How do you control AI quality?",
        answer:
          "We define expected answers, test sets, guardrails, fallback behavior, and monitoring before launch.",
      },
      {
        question: "Can AI connect with our existing tools?",
        answer:
          "Yes. We can integrate with CRMs, databases, internal APIs, ticketing systems, and workflow tools.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDesc:
      "Cross-platform iOS and Android products with secure backend integrations and polished user flows.",
    outcome: "Deliver mobile experiences users can trust.",
    category: "Customer Mobility",
    processHeading: "Mobile products built around reliable user journeys",
    process: [
      {
        title: "Experience Mapping",
        description:
          "We define core screens, user flows, offline needs, notifications, and API dependencies.",
      },
      {
        title: "App Architecture",
        description:
          "We structure navigation, state, backend integration, security, and release environments.",
      },
      {
        title: "Build & Test",
        description:
          "We implement features with device testing, QA automation, and performance checks.",
      },
      {
        title: "Store Release",
        description:
          "We support app store preparation, deployment, analytics, and post-launch iterations.",
      },
    ],
    techStack: ["React Native", "Flutter", "Firebase", "Node.js", "WebRTC", "Stripe", "AWS"],
    deliverables: [
      "Mobile app UX and technical plan",
      "iOS and Android application builds",
      "Secure backend/API integration",
      "Push notifications and analytics setup",
      "QA test report",
      "App store release support",
    ],
    faqs: [
      {
        question: "Do you build for both iOS and Android?",
        answer:
          "Yes. We usually use cross-platform frameworks when they fit the product, timeline, and budget.",
      },
      {
        question: "Can you integrate an existing backend?",
        answer:
          "Yes. We can connect to your existing APIs or build the backend services needed for the app.",
      },
      {
        question: "Do you help with app store submission?",
        answer:
          "Yes. We support production builds, store assets, release notes, and submission checks.",
      },
    ],
  },
  {
    slug: "blockchain-solutions",
    title: "Blockchain Solutions",
    shortDesc:
      "Smart contracts, Web3 dashboards, wallet integrations, and tokenized ownership workflows.",
    outcome: "Build transparent digital ownership systems.",
    category: "Secure Web3",
    processHeading: "Blockchain delivery with audit discipline",
    process: [
      {
        title: "Token Model",
        description:
          "We define ownership, roles, permissions, transactions, and compliance constraints.",
      },
      {
        title: "Contract Design",
        description:
          "We design smart contracts, wallet flows, dashboards, and integration boundaries.",
      },
      {
        title: "Implementation",
        description:
          "We build contracts and interfaces with tests, simulations, and deployment scripts.",
      },
      {
        title: "Security Review",
        description:
          "We review contract risks, edge cases, permissions, and operational controls.",
      },
    ],
    techStack: ["Solidity", "Ethereum", "Hardhat", "Ethers.js", "Web3.js", "React", "Node.js"],
    deliverables: [
      "Web3 product architecture",
      "Smart contract code and tests",
      "Wallet-connected web interface",
      "Admin or investor dashboard",
      "Deployment scripts and documentation",
      "Security review notes",
    ],
    faqs: [
      {
        question: "Do you audit smart contracts?",
        answer:
          "We provide security review as part of delivery and can coordinate deeper third-party audits for high-value contracts.",
      },
      {
        question: "Can you build dashboards for tokenized assets?",
        answer:
          "Yes. We build investor, admin, and reporting dashboards connected to on-chain and off-chain data.",
      },
      {
        question: "Which chains do you support?",
        answer:
          "Ethereum-compatible ecosystems are the most common, but chain choice depends on transaction cost, user base, and compliance needs.",
      },
    ],
  },
  {
    slug: "qa-automation",
    title: "QA Automation",
    shortDesc:
      "Automated test frameworks that reduce regressions and improve release confidence.",
    outcome: "Protect velocity as the product expands.",
    category: "Release Confidence",
    processHeading: "Automation that protects critical releases",
    process: [
      {
        title: "Coverage Audit",
        description:
          "We identify critical user flows, fragile areas, release blockers, and manual QA effort.",
      },
      {
        title: "Framework Setup",
        description:
          "We design automation structure, test data, environments, and CI integration.",
      },
      {
        title: "Test Buildout",
        description:
          "We automate browser, API, smoke, and regression tests around business-critical flows.",
      },
      {
        title: "Release Integration",
        description:
          "We connect tests to deployment checks, reports, alerts, and maintenance routines.",
      },
    ],
    techStack: ["Playwright", "Cypress", "Jest", "Postman", "GitHub Actions", "TypeScript", "Selenium"],
    deliverables: [
      "QA automation strategy",
      "End-to-end test suite",
      "API and smoke tests",
      "CI test execution pipeline",
      "Defect reporting workflow",
      "Maintenance documentation",
    ],
    faqs: [
      {
        question: "Can you add automation to an existing product?",
        answer:
          "Yes. We start with the highest-risk flows and build coverage incrementally around your release process.",
      },
      {
        question: "Which test framework should we use?",
        answer:
          "We choose based on your stack, team skills, browser needs, CI environment, and maintenance expectations.",
      },
      {
        question: "Will automation replace manual QA?",
        answer:
          "Automation reduces repeat manual work, but exploratory testing and product judgment still matter for quality.",
      },
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    shortDesc:
      "High-performance marketing sites, portals, and web apps tuned for conversion and maintainability.",
    outcome: "Create a credible digital front door.",
    category: "Digital Presence",
    processHeading: "Web experiences designed for speed and credibility",
    process: [
      {
        title: "Discovery",
        description:
          "We define audience, content structure, conversion goals, and technical requirements.",
      },
      {
        title: "Interface Design",
        description:
          "We translate brand and messaging into responsive pages, components, and flows.",
      },
      {
        title: "Development",
        description:
          "We build performant pages with SEO basics, CMS options, forms, and analytics.",
      },
      {
        title: "Optimization",
        description:
          "We test responsiveness, performance, accessibility basics, and deployment readiness.",
      },
    ],
    techStack: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Vercel", "Firebase"],
    deliverables: [
      "Responsive website or web application",
      "Reusable component system",
      "Conversion-focused forms and CTAs",
      "Performance and SEO setup",
      "Analytics integration",
      "Deployment and handoff notes",
    ],
    faqs: [
      {
        question: "Can you redesign an existing website?",
        answer:
          "Yes. We can rebuild around stronger positioning, faster performance, and cleaner conversion paths.",
      },
      {
        question: "Do you support SEO?",
        answer:
          "We include technical SEO basics such as metadata, structure, speed, sitemap, and robots setup where needed.",
      },
      {
        question: "Can you connect forms to a CRM?",
        answer:
          "Yes. Contact and lead forms can connect to email, Firestore, CRMs, or workflow automation tools.",
      },
    ],
  },
  {
    slug: "staff-augmentation",
    title: "Staff Augmentation",
    shortDesc:
      "Senior engineers embedded into your delivery team for AI, cloud, product, and security work.",
    outcome: "Add capacity without losing engineering standards.",
    category: "Team Velocity",
    processHeading: "Specialized engineers integrated into your roadmap",
    process: [
      {
        title: "Role Definition",
        description:
          "We clarify skills, seniority, timezone overlap, communication style, and delivery expectations.",
      },
      {
        title: "Engineer Matching",
        description:
          "We match specialists across product, AI, cloud, QA, and cybersecurity needs.",
      },
      {
        title: "Onboarding",
        description:
          "We align with your tools, sprint rhythm, repositories, standards, and product context.",
      },
      {
        title: "Delivery Support",
        description:
          "We maintain regular check-ins, output visibility, and quality expectations.",
      },
    ],
    techStack: ["React", "Next.js", "Node.js", "Python", "AWS", "Firebase", "Playwright"],
    deliverables: [
      "Role and capability profile",
      "Matched engineering resources",
      "Onboarding and communication plan",
      "Sprint contribution tracking",
      "Code quality and review support",
      "Flexible scaling plan",
    ],
    faqs: [
      {
        question: "Can engineers work with our internal team?",
        answer:
          "Yes. Staff augmentation is designed for direct collaboration inside your existing product and engineering process.",
      },
      {
        question: "Which roles can you provide?",
        answer:
          "We support frontend, backend, full-stack, AI, QA automation, cloud, and cybersecurity roles.",
      },
      {
        question: "Can we scale up or down?",
        answer:
          "Yes. Engagements can adjust based on roadmap pressure, delivery velocity, and budget.",
      },
    ],
  },
];
