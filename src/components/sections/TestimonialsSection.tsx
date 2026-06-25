"use client";

import { testimonials } from "@/content/testimonials";
import { motion } from "framer-motion";

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
      className="relative overflow-hidden bg-[var(--bg-800)] px-6 py-24 font-[family-name:var(--font-body)] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--color-primary-border)] to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-10rem] top-24 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.12),transparent_68%)] blur-sm"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-border)] to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
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
            Trusted by teams where delivery quality matters
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-8 font-light text-[var(--text-secondary)]">
            Founders, engineering leaders, and security stakeholders choose
            Buraq Minds for measurable progress across AI, SaaS, cloud, QA, and
            cybersecurity engagements.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="group relative min-h-[420px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.024)_44%,rgba(192,57,43,0.04)),rgba(20,20,20,0.76)] p-7 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl transition-colors duration-300 hover:border-[var(--color-primary-border)] hover:shadow-[0_30px_110px_rgba(192,57,43,0.14)] sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute right-[-6rem] top-[-6rem] h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.22),transparent_68%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex items-start justify-between gap-4">
                  <div className="flex gap-1 text-sm text-[var(--color-primary)]">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[10px] font-semibold tracking-[0.16em] text-[var(--text-muted)] uppercase">
                    {testimonial.industry}
                  </span>
                </div>

                <div className="absolute right-8 top-16 font-[family-name:var(--font-heading)] text-[92px] leading-none text-[var(--color-primary-alpha)]">
                  &quot;
                </div>

                <p className="relative z-10 font-[family-name:var(--font-heading)] text-lg leading-8 font-light italic text-[var(--text-secondary)]">
                  {testimonial.quote}
                </p>

                <div className="mt-7 rounded-[14px] border border-white/[0.07] bg-black/15 p-5">
                  <p className="mb-2 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                    Business Impact
                  </p>
                  <p className="text-xs leading-6 font-light text-[var(--text-primary)]">
                    {testimonial.businessImpact}
                  </p>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/[0.07] bg-white/[0.035] px-3 py-1.5 text-[10px] font-medium text-[var(--text-muted)]">
                    {testimonial.engagementType}
                  </span>
                </div>

                <div className="mt-auto flex items-center gap-4 pt-9">
                  <div className="flex h-13 w-13 items-center justify-center rounded-full border border-[var(--color-primary-border)] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.16),rgba(192,57,43,0.14))] text-sm font-semibold text-[var(--color-primary)] shadow-[0_0_36px_rgba(192,57,43,0.16)]">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-lg leading-none font-bold text-[var(--text-primary)]">
                      {testimonial.name}
                    </h3>
                    <p className="mt-2 text-xs font-light leading-5 text-[var(--text-muted)]">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>

              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
