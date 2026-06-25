"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "JC",
    name: "James Carter",
    role: "CTO, FinTech Startup · London, UK",
    quote:
      "Buraq Minds delivered our RAG compliance system ahead of schedule. The security mindset and engineering quality were unlike any vendor we had worked with before.",
  },
  {
    initials: "OB",
    name: "Olivia Brown",
    role: "Head of Engineering · Sydney, AU",
    quote:
      "Their VAPT team found critical vulnerabilities our previous auditor had missed entirely. SOC 2 readiness achieved in 8 weeks. Exceptional work from start to finish.",
  },
  {
    initials: "DR",
    name: "Daniel Roberts",
    role: "Founder, HealthTech · Chicago, USA",
    quote:
      "The multi-agent CRM automation cut our sales ops workload by 60%. They understood our business deeply, not just the technology. Highly recommended.",
  },
] as const;

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function TestimonialsSection() {
  return (
    <section className="border-t border-white/[0.05] bg-[#111111] px-[5%] py-24 font-[family-name:var(--font-body)]">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-[60px] max-w-[600px] text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Client Stories
          </p>
          <h2
            className="font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-[-1.5px] text-[var(--text-primary)]"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            What our clients say about working with us
          </h2>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid gap-5 lg:grid-cols-3"
        >
          {testimonials.map((testimonial) => (
            <motion.article
              key={testimonial.name}
              variants={cardVariants}
              className="relative rounded-[4px] border border-white/[0.07] bg-[#080808] p-8 transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:border-[var(--color-primary-border)]"
            >
              <div className="pointer-events-none absolute right-6 top-5 font-[family-name:var(--font-heading)] text-[80px] font-bold leading-none text-[rgba(192,57,43,0.12)]">
                &quot;
              </div>
              <div className="mb-4 text-sm tracking-[2px] text-[var(--color-primary)]">
                ★★★★★
              </div>
              <p className="mb-6 font-[family-name:var(--font-heading)] text-base italic leading-[1.8] text-[var(--text-secondary)]">
                {testimonial.quote}
              </p>
              <div className="mb-5 h-px bg-white/[0.06]" />
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-primary-border)] bg-[rgba(192,57,43,0.1)] font-[family-name:var(--font-heading)] text-[15px] text-[var(--color-primary)]">
                  {testimonial.initials}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-[15px] font-semibold text-[var(--text-primary)]">
                    {testimonial.name}
                  </h3>
                  <p className="mt-0.5 text-[11px] text-[var(--text-muted)]">
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
