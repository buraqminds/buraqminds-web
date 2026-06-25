export interface CaseStudy {
  slug: string;
  title: string;
  industry: string;
  category: string;
  challenge: string;
  solution: string;
  technologies: string[];
  measurableResult: string;
  shortDescription: string;
  summary: string;
  image: string;
  metrics: string[];
  businessResults: string[];
  deliverables: string[];
  meta: {
    location: string;
    duration: string;
    teamSize: string;
  };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "ai-customer-support-automation",
    title: "AI Customer Support Automation",
    industry: "B2B SaaS",
    category: "AI & Workflow Automation",
    challenge:
      "A fast-growing SaaS company needed to reduce support backlog without lowering response quality or exposing customer data.",
    solution:
      "Buraq Minds designed a retrieval-assisted support agent with escalation rules, admin review, analytics, and CRM synchronization.",
    technologies: ["Python", "LangChain", "PostgreSQL", "HubSpot API", "FastAPI", "React.js"],
    measurableResult: "58% reduction in manual support workload within 10 weeks.",
    shortDescription:
      "AI support workflows that classify, draft, escalate, and sync customer conversations.",
    summary:
      "Automated support triage and response drafting while keeping humans in control of sensitive customer conversations.",
    image: "",
    metrics: ["58% cost reduction", "31% faster response", "3.4x automation gain"],
    businessResults: [
      "Reduced support operating cost by 58% through AI-assisted triage and drafting.",
      "Improved first-response speed by 31% while keeping human approval for sensitive conversations.",
      "Created an analytics layer for backlog, escalation, and agent performance visibility.",
    ],
    deliverables: ["RAG assistant", "CRM sync", "Escalation flows", "Analytics dashboard"],
    meta: { location: "Austin, USA", duration: "10 weeks", teamSize: "3 engineers" },
  },
  {
    slug: "secure-saas-platform",
    title: "Secure SaaS Platform",
    industry: "FinTech",
    category: "SaaS Development",
    challenge:
      "A fintech team needed a production-grade SaaS platform with role-based access, billing, audit logs, and compliance-ready workflows.",
    solution:
      "We built the platform foundation, secure API layer, tenant-aware dashboard, CI/CD, and VAPT remediation workflow.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe", "AWS", "Docker"],
    measurableResult: "MVP launched in 12 weeks with enterprise security controls in place.",
    shortDescription:
      "A secure multi-tenant SaaS platform built for auditability and product velocity.",
    summary:
      "Delivered the core SaaS product foundation with authentication, billing, dashboards, and operational guardrails.",
    image: "",
    metrics: ["12-week MVP", "40% faster onboarding", "Audit-ready controls"],
    businessResults: [
      "Delivered a secure SaaS foundation ready for enterprise customer demos in 12 weeks.",
      "Cut new tenant onboarding time by 40% with repeatable account, billing, and RBAC flows.",
      "Implemented audit logs and access controls to support procurement and compliance reviews.",
    ],
    deliverables: ["SaaS dashboard", "Billing flows", "RBAC", "Audit logs"],
    meta: { location: "London, UK", duration: "12 weeks", teamSize: "4 engineers" },
  },
  {
    slug: "healthcare-ai-workflow",
    title: "Healthcare AI Workflow",
    industry: "Healthcare",
    category: "AI & Machine Learning",
    challenge:
      "A healthtech startup needed to streamline clinical intake, reduce admin time, and preserve strict privacy boundaries.",
    solution:
      "Buraq Minds created a secure workflow engine for document intake, structured summaries, review queues, and patient communication triggers.",
    technologies: ["React Native", "Firebase", "Node.js", "WebRTC", "AWS", "HIPAA Controls"],
    measurableResult: "Clinical admin review time reduced by 44% during pilot operations.",
    shortDescription:
      "AI-assisted healthcare workflows with privacy-aware intake and review automation.",
    summary:
      "Built a privacy-conscious workflow that helps care teams process patient information faster and with clearer audit trails.",
    image: "",
    metrics: ["44% faster processing", "36% admin reduction", "HIPAA-aware flows"],
    businessResults: [
      "Reduced clinical intake review time by 44% during pilot operations.",
      "Lowered administrative workload by 36% through structured summaries and review queues.",
      "Preserved privacy boundaries with role-based access, audit trails, and secure messaging.",
    ],
    deliverables: ["Intake workflows", "Review queues", "Secure messaging", "Audit trails"],
    meta: { location: "Chicago, USA", duration: "5 months", teamSize: "5 developers" },
  },
  {
    slug: "cloud-devops-modernization",
    title: "Cloud DevOps Modernization",
    industry: "Enterprise Software",
    category: "Cloud & DevOps",
    challenge:
      "A legacy monolith suffered from slow releases, difficult rollbacks, and high infrastructure cost as usage expanded.",
    solution:
      "We migrated critical services to AWS, introduced Terraform, containerized workloads, and implemented automated deployment pipelines.",
    technologies: ["AWS", "Terraform", "Kubernetes", "Docker", "GitHub Actions", "PostgreSQL"],
    measurableResult: "99.98% uptime with a 40% reduction in infrastructure cost.",
    shortDescription:
      "A cloud modernization sprint that improved reliability, cost, and release confidence.",
    summary:
      "Modernized cloud delivery with infrastructure as code, container orchestration, and observable CI/CD.",
    image: "",
    metrics: ["40% lower infra cost", "5x deployments", "99.98% uptime"],
    businessResults: [
      "Reduced infrastructure spend by 40% through workload right-sizing and containerization.",
      "Increased deployment frequency from weekly releases to multiple safe releases per week.",
      "Reached 99.98% uptime with observable infrastructure and rollback-ready pipelines.",
    ],
    deliverables: ["AWS migration", "Terraform modules", "CI/CD", "Monitoring"],
    meta: { location: "Berlin, Germany", duration: "5 months", teamSize: "4 engineers" },
  },
  {
    slug: "qa-automation-framework",
    title: "QA Automation Framework",
    industry: "Ecommerce",
    category: "QA Automation",
    challenge:
      "A product team was losing release confidence because manual regression testing could not keep pace with weekly deployments.",
    solution:
      "Buraq Minds built automated API, browser, and smoke test suites integrated directly into CI/CD release gates.",
    technologies: ["Playwright", "TypeScript", "GitHub Actions", "Postman", "Docker", "Allure"],
    measurableResult: "Regression testing time dropped from 3 days to under 45 minutes.",
    shortDescription:
      "Automated QA coverage that protects release velocity and reduces production regressions.",
    summary:
      "Delivered a practical automation framework that catches critical issues before release without slowing the team down.",
    image: "",
    metrics: ["45-min regression", "78% QA coverage", "3-day cycle removed"],
    businessResults: [
      "Reduced regression testing from 3 days to under 45 minutes.",
      "Expanded automated QA coverage to 78% of critical revenue and checkout paths.",
      "Gave product teams weekly release confidence without increasing manual QA load.",
    ],
    deliverables: ["E2E suite", "API tests", "CI release gates", "QA reports"],
    meta: { location: "Toronto, Canada", duration: "9 weeks", teamSize: "2 QA engineers" },
  },
  {
    slug: "cybersecurity-vapt-engagement",
    title: "Cybersecurity VAPT Engagement",
    industry: "SaaS Security",
    category: "Cybersecurity & VAPT",
    challenge:
      "A US SaaS platform needed an independent security review before enterprise procurement and SOC 2 readiness work.",
    solution:
      "We performed application, API, cloud, and infrastructure testing, then guided remediation with prioritized engineering tickets.",
    technologies: ["OWASP", "Burp Suite", "Nessus", "Metasploit", "AWS Security Hub", "Python"],
    measurableResult: "23 critical vulnerabilities remediated and SOC 2 Type II readiness achieved in 8 weeks.",
    shortDescription:
      "Full-stack VAPT with remediation support for enterprise SaaS procurement readiness.",
    summary:
      "Identified, validated, and helped remediate security issues across application, API, cloud, and infrastructure layers.",
    image: "",
    metrics: ["23 risks closed", "8-week readiness", "Zero critical retest"],
    businessResults: [
      "Closed 23 critical and high-risk vulnerabilities before enterprise procurement review.",
      "Achieved SOC 2 readiness in 8 weeks with mapped controls and remediation evidence.",
      "Reduced security retest findings to zero critical issues after engineering remediation.",
    ],
    deliverables: ["VAPT report", "Risk register", "Remediation roadmap", "Control mapping"],
    meta: { location: "New York, USA", duration: "8 weeks", teamSize: "2 engineers" },
  },
];
