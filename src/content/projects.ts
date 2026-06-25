export interface Project {
  slug: string;
  title: string;
  category: string;
  summary: string;
  technologies: string[];
  meta: {
    location: string;
    duration: string;
    teamSize: string;
  };
}

export const projects: Project[] = [
  {
    slug: "rag-fintech",
    title: "RAG-Powered Compliance Assistant",
    category: "AI & Machine Learning",
    summary:
      "Enterprise RAG pipeline for a London FinTech automating regulatory Q&A, reducing compliance review time by 70%.",
    technologies: ["Python", "LangChain", "Pinecone", "FastAPI", "AWS"],
    meta: {
      location: "London, UK",
      duration: "4 months",
      teamSize: "3 engineers",
    },
  },
  {
    slug: "vapt-saas",
    title: "SaaS Security Audit & VAPT",
    category: "Cybersecurity & VAPT",
    summary:
      "Full VAPT for a US SaaS platform - 23 critical vulnerabilities patched, SOC 2 Type II readiness in 8 weeks.",
    technologies: ["OWASP", "Burp Suite", "Metasploit", "Nessus", "AWS"],
    meta: {
      location: "New York, USA",
      duration: "8 weeks",
      teamSize: "2 engineers",
    },
  },
  {
    slug: "multi-agent-crm",
    title: "Multi-Agent CRM Automation",
    category: "AI & Workflow Automation",
    summary:
      "LangChain multi-agent system that qualifies leads, drafts follow-ups, and syncs CRM - cutting ops workload by 60%.",
    technologies: ["Python", "LangChain", "n8n", "HubSpot", "PostgreSQL"],
    meta: {
      location: "Dubai, UAE",
      duration: "3 months",
      teamSize: "Solo Engineer",
    },
  },
  {
    slug: "cloud-migration",
    title: "Zero-Downtime Cloud Migration",
    category: "Cloud & DevOps",
    summary:
      "Legacy monolith migrated to AWS microservices with CI/CD - 99.98% uptime maintained, 40% cost reduction achieved.",
    technologies: ["AWS", "Terraform", "Kubernetes", "Docker", "GitHub Actions"],
    meta: {
      location: "Berlin, Germany",
      duration: "5 months",
      teamSize: "4 engineers",
    },
  },
  {
    slug: "telehealth-app",
    title: "HIPAA-Compliant Telehealth App",
    category: "Mobile App Development",
    summary:
      "Cross-platform telehealth app with WebRTC video, encrypted messaging, and EHR integration for a Chicago startup.",
    technologies: ["React Native", "Firebase", "WebRTC", "Node.js", "AWS"],
    meta: {
      location: "Chicago, USA",
      duration: "6 months",
      teamSize: "5 developers",
    },
  },
  {
    slug: "blockchain-realestate",
    title: "Tokenized Real Estate Platform",
    category: "Blockchain Solutions",
    summary:
      "ERC-20 fractional ownership platform with on-chain title transfers, dividend distribution, and investor dashboard.",
    technologies: ["Solidity", "Ethereum", "Web3.js", "React.js", "Hardhat"],
    meta: {
      location: "Singapore",
      duration: "7 months",
      teamSize: "4 developers",
    },
  },
];
