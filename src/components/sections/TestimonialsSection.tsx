"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Buraq Minds helped us move from prototype to launch with a secure, scalable platform and a clear delivery rhythm.",
    name: "Sarah Khan",
    role: "Founder, SaaS Startup",
  },
  {
    quote:
      "Their team brought strong engineering discipline, transparent communication, and practical cybersecurity thinking.",
    name: "Michael Reed",
    role: "CTO, Fintech Company",
  },
  {
    quote:
      "We needed speed without chaos. Buraq Minds gave us exactly that with reliable execution and long-term support.",
    name: "Ayesha Malik",
    role: "Operations Lead, Enterprise Team",
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
      className="relative overflow-hidden bg-[var(--bg-800)] px-6 py-24 sm:px-8 lg:px-12"
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
          className="mb-12 max-w-3xl"
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[var(--color-primary)] uppercase">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-tight font-semibold text-[var(--text-primary)] sm:text-5xl">
            Trusted by teams building for growth
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 font-light text-[var(--text-secondary)]">
            Senior stakeholders come to Buraq Minds when execution quality,
            security posture, and long-term maintainability all matter.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-5 md:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              className="border border-white/[0.06] bg-[var(--bg-700)] p-8 shadow-xl shadow-black/10"
            >
              <p className="text-base leading-8 font-light text-[var(--text-secondary)]">
                “{testimonial.quote}”
              </p>
              <div className="mt-8">
                <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
