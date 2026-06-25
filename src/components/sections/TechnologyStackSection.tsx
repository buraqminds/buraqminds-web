"use client";

import { motion } from "framer-motion";

const technologyGroups = [
  {
    label: "Cloud",
    items: ["AWS", "Google Cloud", "Microsoft Azure"],
  },
  {
    label: "Delivery",
    items: ["Kubernetes", "Docker", "Terraform", "GitHub Actions"],
  },
  {
    label: "Security",
    items: ["OWASP", "VAPT", "SOC 2", "ISO 27001"],
  },
  {
    label: "AI Systems",
    items: ["LLMs", "RAG", "Automation", "Analytics"],
  },
] as const;

export default function TechnologyStackSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="border-t border-white/[0.05] bg-[#111111] px-[5%] py-20 font-[family-name:var(--font-body)]"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[400px_1fr] lg:items-center">
        <div>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Technology Ecosystem
          </p>
          <h2
            className="font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-[-1.5px] text-[var(--text-primary)]"
            style={{ fontSize: "clamp(28px, 3.5vw, 42px)" }}
          >
            Proven platforms for secure, scalable delivery
          </h2>
          <p className="mt-5 text-sm font-light leading-[1.75] text-[var(--text-secondary)]">
            A curated stack for AI products, cloud-native systems, secure
            releases, and automation-heavy delivery.
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {technologyGroups.map((group) => (
            <article
              key={group.label}
              className="rounded-[4px] border border-white/[0.07] bg-[#1c1c1c] p-5 transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:border-[var(--color-primary-border)]"
            >
              <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--color-primary)]">
                {group.label}
              </h3>
              <div className="inline-flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-[3px] text-[11px] text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
