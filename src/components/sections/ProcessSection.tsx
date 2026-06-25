"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Discover",
    description: "We map your goals, users, risks, and technical requirements into a focused product plan.",
  },
  {
    title: "Design",
    description: "We shape scalable architecture, intuitive UX, and a delivery roadmap aligned with your business.",
  },
  {
    title: "Build",
    description: "Our engineers ship clean, secure, and tested software through transparent delivery cycles.",
  },
  {
    title: "Scale",
    description: "We optimize, monitor, and extend your platform as adoption, data, and complexity grow.",
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
    <section id="process" className="bg-[var(--bg-900)] px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={itemVariants}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[var(--color-primary)] uppercase">
            Our Process
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-tight font-semibold text-[var(--text-primary)] sm:text-5xl">
            From idea to launch, with clarity at every step
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 font-light text-[var(--text-secondary)]">
            A structured delivery model that keeps teams aligned, timelines visible, and technical decisions grounded in long-term value.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-0 md:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              variants={itemVariants}
              className="group min-h-[280px] border border-white/[0.06] bg-[var(--bg-800)]/45 p-8 transition-colors duration-300 hover:bg-[var(--bg-800)]"
            >
              <div
                className="mb-8 font-[family-name:var(--font-heading)] text-[52px] leading-none text-transparent"
                style={{ WebkitTextStroke: "1px var(--color-primary-dark)" }}
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 font-light text-[var(--text-secondary)]">
                {step.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
