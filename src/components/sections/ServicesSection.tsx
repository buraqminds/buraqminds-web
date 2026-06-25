"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    title: "SaaS Development",
    slug: "saas-development",
    category: "Product Platforms",
    description:
      "Subscription platforms, admin systems, secure APIs, and scalable product foundations for growth-focused teams.",
  },
  {
    title: "Cybersecurity & VAPT",
    slug: "cybersecurity-vapt",
    category: "Risk Reduction",
    description:
      "Application, API, cloud, and infrastructure testing with clear remediation paths and executive reporting.",
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    category: "Reliable Operations",
    description:
      "Infrastructure, CI/CD, monitoring, and deployment systems designed for predictable production delivery.",
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    category: "Applied Intelligence",
    description:
      "RAG systems, AI agents, copilots, machine learning workflows, and automation tied to real business use cases.",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    category: "Customer Mobility",
    description:
      "Cross-platform mobile products with secure APIs, polished UX, and performance-conscious execution.",
  },
  {
    title: "Blockchain Solutions",
    slug: "blockchain-solutions",
    category: "Secure Web3",
    description:
      "Smart contracts, tokenized workflows, dashboards, and Web3 integrations developed with audit discipline.",
  },
  {
    title: "QA Automation",
    slug: "qa-automation",
    category: "Release Confidence",
    description:
      "Browser, API, regression, and smoke automation that protects critical flows before every release.",
  },
  {
    title: "Web Development",
    slug: "web-development",
    category: "Digital Presence",
    description:
      "Fast, conversion-focused websites and web applications with responsive UI and strong technical foundations.",
  },
  {
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    category: "Team Velocity",
    description:
      "Specialized AI, software, QA, cloud, and cybersecurity engineers who can contribute quickly to active roadmaps.",
  },
] as const;

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="border-t border-white/[0.05] bg-[#111111] px-[5%] pt-24 pb-0 font-[family-name:var(--font-body)]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-[60px] grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Services
            </p>
            <h2
              className="font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-[-1.5px] text-[var(--text-primary)]"
              style={{ fontSize: "clamp(32px, 4.5vw, 56px)" }}
            >
              Secure engineering for serious digital products
            </h2>
          </div>
          <p className="max-w-[400px] text-sm font-light leading-[1.75] text-[var(--text-secondary)] lg:justify-self-end">
            Nine focused capabilities for teams that need AI-first engineering,
            secure delivery, and production-ready systems.
          </p>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-px bg-white/[0.05] md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.slug}
              variants={cardVariants}
              className="group relative rounded-[4px] bg-[#111111] px-8 py-9 transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:border-[var(--color-primary-border)] hover:bg-[#1c1c1c]"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--color-primary)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] uppercase text-[var(--text-secondary)]">
                  {service.category}
                </span>
              </div>
              <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--text-primary)]">
                {service.title}
              </h3>
              <p className="mt-2 text-[13px] font-light leading-[1.7] text-[var(--text-secondary)]">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-5 inline-flex text-xs uppercase tracking-[0.05em] text-[var(--color-primary)]"
              >
                Explore capability →
              </Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-[250ms] ease-in-out group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
