"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Buraq Minds gave us a secure delivery rhythm and the technical clarity we needed to scale our fintech platform without slowing product velocity.",
    name: "James Carter",
    role: "CTO / FinTech London",
    initials: "JC",
  },
  {
    quote:
      "The team operated like senior product engineers from day one. Architecture, QA, and communication were all handled with unusual discipline.",
    name: "Olivia Brown",
    role: "Head of Engineering / Sydney",
    initials: "OB",
  },
  {
    quote:
      "They helped us turn a complex healthcare workflow into a product we could demo, validate, and extend with confidence.",
    name: "Daniel Roberts",
    role: "Founder / HealthTech Chicago",
    initials: "DR",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[var(--bg-800)] px-6 py-[100px] font-[family-name:var(--font-body)] sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--color-primary-border)] to-transparent"
      />
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-none font-semibold tracking-[-2px] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Trusted by teams building for growth
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 font-light text-[var(--text-secondary)]">
            Senior stakeholders come to Buraq Minds when execution quality,
            security posture, and long-term maintainability all matter.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-px bg-white/[0.06] md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              className="relative min-h-[360px] bg-[var(--bg-700)] p-8"
            >
              <div className="mb-8 flex gap-1 text-[var(--color-primary)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>

              <div className="absolute right-8 top-6 font-[family-name:var(--font-heading)] text-[72px] leading-none text-[var(--color-primary-alpha)]">
                &quot;
              </div>

              <p className="relative z-10 font-[family-name:var(--font-heading)] text-base leading-8 font-light italic text-[var(--text-secondary)]">
                {testimonial.quote}
              </p>

              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-primary-border)] bg-[var(--color-primary-alpha)] text-sm font-semibold text-[var(--color-primary)]">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-[15px] leading-none font-bold text-[var(--text-primary)]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-2 text-xs font-light text-[var(--text-muted)]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
