"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    sector: "Fintech SaaS",
    title: "Secure client onboarding platform",
    description:
      "A compliance-aware SaaS workflow that reduced manual document review and gave leadership real-time operational visibility.",
    metrics: ["42% faster onboarding", "Zero critical VAPT findings"],
  },
  {
    sector: "Healthcare AI",
    title: "AI-assisted reporting system",
    description:
      "A private, role-based reporting product with structured data pipelines, audit trails, and model-assisted summaries.",
    metrics: ["3x reporting speed", "HIPAA-style access controls"],
  },
  {
    sector: "Enterprise Cloud",
    title: "DevOps modernization sprint",
    description:
      "A hardened CI/CD and cloud deployment model that stabilized releases and made rollbacks predictable for distributed teams.",
    metrics: ["68% fewer release issues", "15-minute rollback path"],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-[var(--bg-800)] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-border)] to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute -right-40 top-20 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary-alpha) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[var(--color-primary)] uppercase">
              Case Studies
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-tight font-semibold text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              Built for founders, operators, and technical teams under pressure
            </h2>
          </div>
          <p className="max-w-2xl text-base leading-8 font-light text-[var(--text-secondary)] lg:justify-self-end">
            The work we do is measured by reduced risk, faster delivery, and
            software that can hold up when business demand increases.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-5 lg:grid-cols-3"
        >
          {caseStudies.map((study) => (
            <motion.article
              key={study.title}
              variants={cardVariants}
              className="group relative min-h-[360px] overflow-hidden border border-white/[0.06] bg-[var(--bg-700)] p-8 transition-colors duration-300 hover:bg-[var(--bg-600)]"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-px origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="rounded-full border border-[var(--color-primary-border)] bg-[var(--color-primary-alpha)] px-3 py-1 text-xs font-semibold text-[var(--color-primary)]">
                {study.sector}
              </span>

              <h3 className="mt-8 font-[family-name:var(--font-heading)] text-3xl leading-tight font-semibold text-[var(--text-primary)]">
                {study.title}
              </h3>
              <p className="mt-5 text-sm leading-7 font-light text-[var(--text-secondary)]">
                {study.description}
              </p>

              <div className="mt-8 grid gap-3">
                {study.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="border-l-2 border-[var(--color-primary)] bg-black/10 px-4 py-3 text-sm text-[var(--text-primary)]"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
