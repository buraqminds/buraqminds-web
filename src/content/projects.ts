export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  overview: string;
  solution: string;
  technologies: string[];
  deliverables: string[];
  image: string;
  meta: {
    location: string;
    duration: string;
    teamSize: string;
  };
};

export const projects: Project[] = [
  {
    slug: "rag-pipeline-fintech",
    title: "RAG-Powered Compliance Assistant",
    category: "AI & Machine Learning",
    summary:
      "Built an enterprise RAG pipeline for a London FinTech automating regulatory document Q&A, reducing compliance review time by 70%.",
    overview:
      "The client needed analysts to query policy, audit, and regulatory documents without losing traceability.",
    solution:
      "Buraq Minds built a secure retrieval pipeline with source-grounded responses, role-aware access, and a React workspace for compliance teams.",
    technologies: [
      "Python",
      "LangChain",
      "Pinecone",
      "OpenAI API",
      "FastAPI",
      "React.js",
      "AWS",
    ],
    deliverables: [
      "RAG architecture",
      "Compliance Q&A interface",
      "Vector search pipeline",
      "Audit logging",
    ],
    image:
      "https://placehold.co/800x500/1a1a1a/c0392b?text=RAG+Compliance",
    meta: {
      location: "London, UK",
      duration: "4 months",
      teamSize: "3 engineers",
    },
  },
  {
    slug: "vapt-saas-platform",
    title: "SaaS Security Audit & VAPT",
    category: "Cybersecurity & VAPT",
    summary:
      "Conducted full VAPT for a US SaaS platform, identified 23 critical vulnerabilities, achieved SOC 2 Type II readiness in 8 weeks.",
    overview:
      "The SaaS team needed an external security review before enterprise procurement and SOC 2 readiness work.",
    solution:
      "We performed application, API, cloud, and infrastructure testing, then guided remediation with prioritized engineering tickets.",
    technologies: [
      "OWASP",
      "Burp Suite",
      "Metasploit",
      "AWS Security Hub",
      "Python",
      "Nessus",
    ],
    deliverables: [
      "VAPT report",
      "Risk register",
      "Remediation roadmap",
      "SOC 2 readiness controls",
    ],
    image: "https://placehold.co/800x500/1a1a1a/c0392b?text=SaaS+VAPT",
    meta: {
      location: "New York, USA",
      duration: "8 weeks",
      teamSize: "2 engineers",
    },
  },
  {
    slug: "multi-agent-crm",
    title: "Multi-Agent AI CRM Automation",
    category: "AI & Workflow Automation",
    summary:
      "Deployed a multi-agent orchestration system that qualifies leads, drafts follow-ups, and syncs CRM — reducing sales ops workload by 60%.",
    overview:
      "The sales team was losing time to manual lead triage, duplicated CRM updates, and inconsistent follow-up messaging.",
    solution:
      "Buraq Minds deployed a multi-agent workflow that classifies lead quality, drafts contextual responses, and syncs CRM records.",
    technologies: [
      "Python",
      "LangChain Agents",
      "n8n",
      "HubSpot API",
      "PostgreSQL",
      "Docker",
    ],
    deliverables: [
      "Agent orchestration flows",
      "CRM integration",
      "Lead scoring logic",
      "Operational dashboards",
    ],
    image:
      "https://placehold.co/800x500/1a1a1a/c0392b?text=AI+CRM+Automation",
    meta: {
      location: "Dubai, UAE",
      duration: "3 months",
      teamSize: "Solo Engineer",
    },
  },
  {
    slug: "cloud-migration-devops",
    title: "Zero-Downtime Cloud Migration",
    category: "Cloud & DevOps",
    summary:
      "Migrated a legacy monolith to AWS microservices with full CI/CD — achieving 99.98% uptime and 40% infrastructure cost reduction.",
    overview:
      "A legacy platform had release bottlenecks, scaling constraints, and infrastructure costs that kept increasing.",
    solution:
      "We migrated core services to AWS, codified infrastructure, and built CI/CD pipelines with rollback-safe deployment workflows.",
    technologies: [
      "AWS",
      "Terraform",
      "Kubernetes",
      "Docker",
      "GitHub Actions",
      "Node.js",
      "PostgreSQL",
    ],
    deliverables: [
      "AWS migration plan",
      "Terraform modules",
      "Kubernetes deployment",
      "CI/CD automation",
    ],
    image:
      "https://placehold.co/800x500/1a1a1a/c0392b?text=Cloud+Migration",
    meta: {
      location: "Berlin, Germany",
      duration: "5 months",
      teamSize: "4 engineers",
    },
  },
  {
    slug: "mobile-healthtech",
    title: "HIPAA-Compliant HealthTech App",
    category: "Mobile App Development",
    summary:
      "Built a cross-platform iOS/Android telehealth app with real-time video, secure messaging, and EHR integration for a Chicago startup.",
    overview:
      "The startup needed a compliant mobile product that could support patient-provider communication and EHR workflows.",
    solution:
      "Buraq Minds delivered a React Native app with secure messaging, video calls, billing flows, and backend integrations.",
    technologies: [
      "React Native",
      "Firebase",
      "WebRTC",
      "Node.js",
      "AWS",
      "HIPAA Compliance",
      "Stripe",
    ],
    deliverables: [
      "iOS and Android apps",
      "Secure messaging",
      "Video consultation flow",
      "EHR integration",
    ],
    image:
      "https://placehold.co/800x500/1a1a1a/c0392b?text=HealthTech+App",
    meta: {
      location: "Chicago, USA",
      duration: "6 months",
      teamSize: "5 developers",
    },
  },
  {
    slug: "blockchain-property",
    title: "Tokenized Real Estate Platform",
    category: "Blockchain Solutions",
    summary:
      "Developed a Solidity-based smart contract platform enabling fractional real estate ownership with on-chain title transfers and investor dashboard.",
    overview:
      "The client wanted to validate fractional real estate ownership with transparent investor records and on-chain transfer logic.",
    solution:
      "We built audited smart contracts, token ownership flows, IPFS-backed documents, and a dashboard for investor activity.",
    technologies: [
      "Solidity",
      "Ethereum",
      "Web3.js",
      "React.js",
      "Node.js",
      "IPFS",
      "MetaMask",
      "Hardhat",
    ],
    deliverables: [
      "Smart contracts",
      "Investor dashboard",
      "Wallet integration",
      "Token transfer workflows",
    ],
    image:
      "https://placehold.co/800x500/1a1a1a/c0392b?text=Real+Estate+Web3",
    meta: {
      location: "Singapore",
      duration: "7 months",
      teamSize: "4 developers",
    },
  },
];
