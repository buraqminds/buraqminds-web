"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discovery",
    description:
      "We audit your goals, existing stack, security posture, and delivery risks before writing a line.",
  },
  {
    title: "Architecture",
    description:
      "We design systems built to scale, survive audits, and support long-term product evolution.",
  },
  {
    title: "Delivery",
    description:
      "Weekly sprints with working increments, code reviews, and continuous security validation.",
  },
  {
    title: "Support",
    description:
      "Post-launch monitoring, iteration cycles, and long-term engineering ownership.",
  },
] as const;

export default function ProcessSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-t border-white/[0.05] bg-[#111111] px-[5%] py-24 font-[family-name:var(--font-body)]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-[72px] max-w-3xl text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            How We Work
          </p>
          <h2
            className="font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-[-1.5px] text-[var(--text-primary)]"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            From discovery to delivery
          </h2>
        </div>

        <div className="relative grid gap-10 lg:grid-cols-4">
          <div className="absolute left-[12.5%] right-[12.5%] top-[18px] z-0 hidden h-px bg-white/[0.07] lg:block" />
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="group relative z-10 text-center transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px]"
            >
              <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-primary-border)] bg-[#111111] text-[13px] font-semibold text-[var(--color-primary)] transition-all duration-200 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-[19px] font-semibold text-[var(--text-primary)]">
                {step.title}
              </h3>
              <p className="mx-auto mt-2 max-w-[220px] text-[13px] font-light leading-[1.65] text-[var(--text-secondary)]">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
