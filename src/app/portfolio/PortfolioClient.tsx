"use client";

import type { Project } from "@/content/projects";
import Link from "next/link";
import { useMemo, useState } from "react";

type PortfolioClientProps = {
  projects: Project[];
};

export default function PortfolioClient({ projects }: PortfolioClientProps) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((project) => project.category)))],
    [projects],
  );
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <main className="bg-[var(--bg-900)] px-[5%] pt-[120px] pb-24 font-[family-name:var(--font-body)]">
      <section className="mx-auto max-w-7xl">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
          OUR WORK
        </p>
        <h1
          className="mt-4 max-w-4xl font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-[-2px] text-[var(--text-primary)]"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Proof that engineering quality turns into business outcomes
        </h1>

        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = activeFilter === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveFilter(category)}
                className={`rounded-[4px] px-4 py-2 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-[var(--color-primary)] text-white"
                    : "border border-white/10 text-[var(--text-secondary)] hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <Link
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              className="group overflow-hidden rounded-[4px] border border-white/[0.07] bg-[var(--bg-800)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-primary-border)]"
            >
              <div className="flex h-[180px] items-center justify-center bg-[linear-gradient(135deg,var(--bg-700)_0%,var(--color-primary-dark)_100%)]">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {project.category}
                </span>
              </div>

              <div className="p-6">
                <span className="rounded-full border border-[var(--color-primary-border)] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.1em] text-[var(--color-primary)]">
                  {project.category}
                </span>
                <h2 className="mt-2.5 font-[family-name:var(--font-heading)] text-[19px] font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h2>
                <p className="mt-2 line-clamp-2 text-[13px] font-light leading-[1.7] text-[var(--text-secondary)]">
                  {project.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-[3px] border border-white/[0.08] px-2 py-0.5 text-[11px] text-[var(--text-secondary)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-3 flex justify-between gap-4 border-t border-white/[0.05] pt-3 text-[11px] text-[var(--text-muted)]">
                  <span>{project.meta.location}</span>
                  <span>{project.meta.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
