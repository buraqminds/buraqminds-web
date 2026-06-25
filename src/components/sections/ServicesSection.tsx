"use client";

import { siteConfig } from "@/lib/config";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.18 });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-[var(--bg-900)] px-6 py-[100px] font-[family-name:var(--font-body)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
              Our Services
            </p>
            <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl leading-none font-semibold tracking-[-2px] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              Where ideas become scalable solutions
            </h2>
          </div>

          <p className="max-w-xl text-[15px] leading-8 font-light text-[var(--text-secondary)] lg:justify-self-end">
            From secure SaaS platforms to AI-driven products and resilient cloud
            infrastructure, we design and engineer systems that help ambitious
            teams move faster with confidence.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-px bg-white/[0.06] md:grid-cols-2 lg:grid-cols-3"
        >
          {siteConfig.services.map((service, index) => (
            <motion.article
              key={service.slug}
              variants={cardVariants}
              className="group relative min-h-[260px] overflow-hidden bg-[var(--bg-800)] p-9 transition-colors duration-300 hover:bg-[var(--bg-600)]"
            >
              <span className="mb-8 block text-[11px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="mb-5 font-[family-name:var(--font-heading)] text-xl leading-none font-semibold tracking-[-0.5px] text-[var(--text-primary)]">
                {service.title}
              </h3>

              <p className="line-clamp-2 text-[13px] leading-6 font-light text-[var(--text-secondary)]">
                {service.shortDesc}
              </p>

              <Link
                href={`/services/${service.slug}`}
                className="mt-8 inline-block text-sm font-medium text-[var(--color-primary)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >
                Explore →
              </Link>

              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
