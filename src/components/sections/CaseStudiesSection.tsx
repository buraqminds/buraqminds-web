"use client";

import { caseStudies } from "@/content/case-studies";
import { motion } from "framer-motion";
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
      className="relative overflow-hidden bg-[linear-gradient(180deg,#151515,var(--bg-900)_34%,#090909)] px-6 py-24 font-[family-name:var(--font-body)] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-24 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.14),transparent_68%)] blur-sm"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-12rem] bottom-20 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.055),transparent_66%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-border)] to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold tracking-[0.24em] text-[var(--color-primary)] uppercase">
              Case Studies
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-[0.98] font-semibold tracking-[-1.8px] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              Proof that engineering quality turns into business outcomes
            </h2>
          </div>
          <p className="max-w-2xl text-[15px] leading-[1.75] font-light text-[var(--text-secondary)] lg:justify-self-end">
            Six outcome-led engagements across AI, cybersecurity, SaaS, cloud,
            healthcare, and QA automation, designed to show the operational
            gains behind the interface.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid gap-6 lg:grid-cols-2"
        >
          {caseStudies.map((project, index) => (
            <motion.article
              key={project.slug}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.024)_42%,rgba(192,57,43,0.04)),rgba(20,20,20,0.78)] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-colors duration-300 hover:border-[var(--color-primary-border)] hover:shadow-[0_30px_110px_rgba(192,57,43,0.15)] sm:p-7 lg:p-8 ${
                index === 0 ? "lg:col-span-2 lg:p-10" : ""
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute right-[-7rem] top-[-7rem] h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.2),transparent_68%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />

              <div
                aria-hidden="true"
                className={`absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(192,57,43,0.14),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  index === 0 ? "opacity-100" : ""
                }`}
              />

              <div className={`relative z-10 ${index === 0 ? "lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-10" : ""}`}>
                <div>
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex rounded-full border border-[var(--color-primary-border)] bg-[var(--color-primary-alpha)] px-4 py-2 text-[10px] font-semibold tracking-[0.16em] text-[var(--color-primary)] uppercase">
                    {project.industry}
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.18em] text-[var(--text-muted)] uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className={`font-[family-name:var(--font-heading)] leading-none font-semibold tracking-[-0.8px] text-[var(--text-primary)] ${
                  index === 0 ? "text-4xl sm:text-5xl" : "text-3xl"
                }`}>
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 font-light text-[var(--text-secondary)]">
                  {project.shortDescription}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-[12px] border border-white/[0.08] bg-white/[0.04] px-3 py-3 text-center text-[11px] font-medium leading-5 text-[var(--text-primary)]"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
                </div>

                <div className={index === 0 ? "mt-8 lg:mt-0" : ""}>
                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  <div className="rounded-[14px] border border-white/[0.07] bg-black/15 p-5">
                    <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                      Challenge
                    </p>
                    <p className="text-xs leading-6 font-light text-[var(--text-secondary)]">
                      {project.challenge}
                    </p>
                  </div>
                  <div className="rounded-[14px] border border-white/[0.07] bg-black/15 p-5">
                    <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                      Solution
                    </p>
                    <p className="text-xs leading-6 font-light text-[var(--text-secondary)]">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="mt-7">
                  <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                    Business Results
                  </p>
                  <ul className="space-y-2">
                    {project.businessResults.map((result) => (
                      <li
                        key={result}
                        className="flex gap-3 text-xs leading-6 font-light text-[var(--text-secondary)]"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-primary)] shadow-[0_0_18px_rgba(192,57,43,0.7)]" />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/[0.07] bg-white/[0.035] px-3 py-1.5 text-[10px] font-light text-[var(--text-muted)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex items-center justify-between gap-4 border-t border-white/[0.07] pt-5 text-[11px] font-light text-[var(--text-muted)]">
                  <span>{project.meta.duration}</span>
                  <span>{project.meta.teamSize}</span>
                </div>
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
