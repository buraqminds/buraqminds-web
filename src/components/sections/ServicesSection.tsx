"use client";

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

const services = [
  {
    title: "SaaS Development",
    slug: "saas-development",
    focus: "Product platforms",
    description:
      "Design, build, and scale subscription platforms with clean product flows, secure data models, and reliable delivery pipelines.",
    outcome: "Launch investor-ready SaaS products with architecture that can grow beyond the first release.",
  },
  {
    title: "Cybersecurity & VAPT",
    slug: "cybersecurity-vapt",
    focus: "Risk reduction",
    description:
      "Identify exploitable weaknesses across applications, APIs, cloud assets, and infrastructure before attackers do.",
    outcome: "Reduce release risk with clear remediation paths, executive reporting, and security-first engineering.",
  },
  {
    title: "Cloud & DevOps",
    slug: "cloud-devops",
    focus: "Reliable operations",
    description:
      "Engineer cloud-native environments, CI/CD systems, observability, and automation for dependable production operations.",
    outcome: "Ship faster with resilient infrastructure, repeatable deployments, and fewer operational surprises.",
  },
  {
    title: "AI & Machine Learning",
    slug: "ai-machine-learning",
    focus: "Applied intelligence",
    description:
      "Build applied AI systems, intelligent workflows, copilots, and machine learning features grounded in business context.",
    outcome: "Turn internal data and workflows into practical automation that improves speed, accuracy, and decision-making.",
  },
  {
    title: "Mobile App Development",
    slug: "mobile-app-development",
    focus: "Customer mobility",
    description:
      "Create polished mobile experiences with secure APIs, performance-conscious interfaces, and product-led execution.",
    outcome: "Deliver mobile products that feel refined, scale reliably, and support real customer journeys.",
  },
  {
    title: "Blockchain Solutions",
    slug: "blockchain-solutions",
    focus: "Secure Web3",
    description:
      "Develop smart contracts, tokenized workflows, decentralized applications, and blockchain integrations with security at the core.",
    outcome: "Move from concept to dependable Web3 systems with cleaner logic, audits, and integration discipline.",
  },
  {
    title: "QA Automation",
    slug: "qa-automation",
    focus: "Release confidence",
    description:
      "Automate browser, API, regression, and smoke testing so product teams can release with confidence.",
    outcome: "Catch defects earlier, protect core flows, and reduce manual testing bottlenecks across releases.",
  },
  {
    title: "Web Development",
    slug: "web-development",
    focus: "Digital presence",
    description:
      "Build fast, conversion-focused websites and web applications with strong foundations, responsive UI, and SEO-aware structure.",
    outcome: "Create credible digital experiences that support growth, trust, and measurable customer action.",
  },
  {
    title: "Staff Augmentation",
    slug: "staff-augmentation",
    focus: "Team velocity",
    description:
      "Extend AI, software, QA, cloud, and cybersecurity teams with vetted engineers who can contribute quickly.",
    outcome: "Scale delivery capacity without lowering engineering standards or slowing roadmap momentum.",
  },
] as const;

export default function ServicesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.18 });

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#101010,var(--bg-900)_38%,#151515)] px-6 py-24 font-[family-name:var(--font-body)] sm:px-8 sm:py-28 lg:px-12 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-12rem] top-20 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.16),transparent_68%)] blur-sm"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-8rem] bottom-10 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06),transparent_66%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-border)] to-transparent"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-14 grid gap-8 sm:mb-16 lg:grid-cols-[0.72fr_1fr] lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-semibold tracking-[0.24em] text-[var(--color-primary)] uppercase">
              Our Services
            </p>
            <h2 className="max-w-3xl font-[family-name:var(--font-heading)] text-4xl leading-[0.98] font-semibold tracking-[-2px] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
              Secure engineering for serious digital products
            </h2>
          </div>

          <p className="max-w-xl text-[15px] leading-8 font-light text-[var(--text-secondary)] lg:justify-self-end">
            Nine focused capabilities for teams that need AI-first engineering,
            hardened delivery, and product systems that can survive real usage,
            audits, and scale.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.article
              key={service.slug}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="group relative min-h-[330px] overflow-hidden rounded-[22px] border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,0.1),rgba(255,255,255,0.025)_42%,rgba(192,57,43,0.04)),rgba(20,20,20,0.76)] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.26)] backdrop-blur-xl transition-colors duration-300 hover:border-[var(--color-primary-border)] hover:shadow-[0_30px_100px_rgba(192,57,43,0.16)] sm:p-8 lg:p-9"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              <div
                aria-hidden="true"
                className="absolute right-[-5rem] top-[-5rem] h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.22),transparent_68%)] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_10%,rgba(192,57,43,0.13),transparent_34%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              <div className="relative z-10 flex h-full flex-col">
                <div className="mb-8 flex items-center justify-between gap-4">
                  <span className="text-[11px] font-semibold tracking-[0.24em] text-[var(--color-primary)] uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[10px] font-medium tracking-[0.14em] text-[var(--text-muted)] uppercase">
                    {service.focus}
                  </span>
                </div>

                <h3 className="mb-5 font-[family-name:var(--font-heading)] text-2xl leading-none font-semibold tracking-[-0.7px] text-[var(--text-primary)]">
                  {service.title}
                </h3>

                <p className="text-sm leading-7 font-light text-[var(--text-secondary)]">
                  {service.description}
                </p>
                <div className="mt-6 border-l border-[var(--color-primary-border)] pl-4">
                  <span className="mb-2 block text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                    Outcome
                  </span>
                  <p className="text-xs leading-6 font-light text-[var(--text-muted)]">
                    {service.outcome}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-auto inline-flex pt-8 text-sm font-medium text-[var(--color-primary)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--color-primary-light)]"
                >
                  Explore capability
                </Link>
              </div>

              <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
