"use client";

import { motion } from "framer-motion";

const bullets = [
  {
    title: "Speed",
    description:
      "Rapid delivery cycles that move from concept to launch without sacrificing product quality.",
  },
  {
    title: "Security-first",
    description:
      "Every architecture, workflow, and release is designed with resilience and risk reduction in mind.",
  },
  {
    title: "Transparent",
    description:
      "Clear communication, predictable milestones, and visibility across the entire build process.",
  },
  {
    title: "Long-term Support",
    description:
      "Ongoing engineering partnership for scaling, optimization, maintenance, and future growth.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function WhySection() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-[var(--bg-800)] px-6 py-[110px] font-[family-name:var(--font-body)] sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute right-[-10rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.08),transparent_70%)]"
      />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          className="relative overflow-hidden rounded-[4px] border border-[var(--color-primary-border)] bg-[linear-gradient(135deg,rgba(255,255,255,0.04),rgba(255,255,255,0.01)),var(--bg-700)] p-8 backdrop-blur-sm sm:p-12"
        >
          <div
            aria-hidden="true"
            className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-60"
          />
          <div className="absolute top-6 right-6 border border-[var(--color-primary-border)] bg-[var(--color-primary-alpha)] px-4 py-2 text-[10px] font-semibold tracking-[0.12em] text-[var(--color-primary)] uppercase">
            30–45 days to MVP
          </div>

          <div className="pt-10">
            <div className="font-[family-name:var(--font-heading)] text-[96px] leading-none font-semibold text-[var(--color-primary)]">
              100+
            </div>
            <h3 className="mt-6 max-w-sm font-[family-name:var(--font-heading)] text-3xl leading-none font-semibold tracking-[-1px] text-[var(--text-primary)]">
              Projects across 4 continents
            </h3>
            <p className="mt-4 text-xs font-light tracking-[0.14em] text-[var(--text-muted)] uppercase">
              US · UK · Europe · GCC
            </p>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ staggerChildren: 0.1 }}
          className="lg:pl-8"
        >
          <motion.p
            variants={fadeUp}
            className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase"
          >
            Why Buraq Minds
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="max-w-2xl font-[family-name:var(--font-heading)] text-4xl leading-none font-semibold tracking-[-2px] text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
          >
            Engineering growth with security and intelligence
          </motion.h2>

          <div className="mt-10 space-y-7">
            {bullets.map((bullet) => (
              <motion.div
                key={bullet.title}
                variants={fadeUp}
                className="group relative flex gap-5 border-b border-white/[0.06] pb-6 last:border-b-0"
              >
                <span className="mt-1 h-12 w-[3px] shrink-0 bg-[var(--color-primary)]" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg leading-none font-semibold tracking-[-0.4px] text-[var(--text-primary)]">
                    {bullet.title}
                  </h3>
                  <p className="mt-2 max-w-xl text-[13px] leading-6 font-light text-[var(--text-secondary)]">
                    {bullet.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
