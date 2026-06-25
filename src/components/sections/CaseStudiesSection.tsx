"use client";

import { projects } from "@/content/projects";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

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
      className="bg-[var(--bg-900)] px-6 py-24 font-[family-name:var(--font-body)] sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
              Our Work
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-none font-semibold tracking-[-1.5px] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              Delivering results that speak for themselves
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-[1.75] font-light text-[var(--text-secondary)] lg:justify-self-end">
            Six examples of how Buraq Minds applies AI, cybersecurity, cloud,
            mobile, and blockchain engineering to measurable business outcomes.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-px bg-white/[0.06] md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              variants={cardVariants}
              className="group relative overflow-hidden border border-transparent bg-[var(--bg-800)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-primary-border)]"
            >
              <div className="relative flex h-[200px] items-center justify-center overflow-hidden bg-[var(--bg-700)]">
                <span className="absolute z-0 text-sm font-light tracking-[0.1em] text-[var(--text-muted)] uppercase">
                  {project.category}
                </span>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  unoptimized
                  className="relative z-10 object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              </div>

              <div className="p-7">
                <span className="inline-flex border border-[var(--color-primary-border)] px-3 py-1 text-[10px] font-medium tracking-[0.16em] text-[var(--color-primary)] uppercase">
                  {project.category}
                </span>

                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-xl leading-none font-semibold tracking-[-0.5px] text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="mt-4 line-clamp-2 text-[13px] leading-[1.75] font-light text-[var(--text-secondary)]">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((technology) => (
                    <span
                      key={technology}
                      className="bg-white/[0.04] px-2.5 py-1 text-[10px] font-light text-[var(--text-muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/[0.06] pt-4 text-[11px] font-light text-[var(--text-muted)]">
                  <span>{project.meta.location}</span>
                  <span>{project.meta.duration}</span>
                </div>
              </div>

              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="group relative inline-flex border border-[var(--color-primary-border)] px-7 py-4 text-sm font-medium text-[var(--text-primary)] transition-colors hover:text-[var(--color-primary)]"
          >
            View All Projects →
            <span
              aria-hidden="true"
              className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
