"use client";

import { processSteps } from "@/content/process";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-[var(--bg-900)] px-6 py-[110px] font-[family-name:var(--font-body)] sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.07),transparent_70%)]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={itemVariants}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
            Our Process
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-none font-semibold tracking-[-2px] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            From idea to launch, with clarity at every step
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 font-light text-[var(--text-secondary)]">
            A structured delivery model that keeps teams aligned, timelines visible, and technical decisions grounded in long-term value.
          </p>
        </motion.div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 hidden h-px bg-white/[0.06] lg:block"
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid gap-0 rounded-[4px] border-y border-white/[0.06] bg-black/10 md:grid-cols-2 lg:grid-cols-4"
          >
            {processSteps.map((step, index) => (
              <motion.article
                key={step.title}
                variants={itemVariants}
                className="group relative min-h-[260px] border-b border-r border-white/[0.06] bg-[rgba(20,20,20,0.35)] p-8 transition-colors duration-300 last:border-r-0 hover:bg-[var(--bg-800)] md:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(n)]:border-b-0"
              >
                <div className="relative z-10 mb-10 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-primary-border)] bg-transparent font-[family-name:var(--font-heading)] text-xl text-[var(--color-primary)] transition-colors duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-lg leading-none font-semibold tracking-[-0.4px] text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[13px] leading-6 font-light text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
