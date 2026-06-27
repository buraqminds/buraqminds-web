import { projects } from "@/content/projects";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type PortfolioCaseStudyProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProjectSolution(project: (typeof projects)[number]) {
  if ("solution" in project && typeof project.solution === "string") {
    return project.solution;
  }

  return project.summary;
}

function getProjectDeliverables(project: (typeof projects)[number]) {
  if (
    "deliverables" in project &&
    Array.isArray(project.deliverables) &&
    project.deliverables.every((item) => typeof item === "string")
  ) {
    return project.deliverables;
  }

  return project.technologies;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PortfolioCaseStudyProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
  };
}

export default async function PortfolioCaseStudy({
  params,
}: PortfolioCaseStudyProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const solution = getProjectSolution(project);
  const deliverables = getProjectDeliverables(project);

  return (
    <main className="bg-[var(--bg-900)] font-[family-name:var(--font-body)]">
      <section className="px-[5%] pt-[120px] pb-20">
        <div className="mx-auto max-w-7xl">
          <span className="rounded-full border border-[var(--color-primary-border)] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--color-primary)]">
            {project.category}
          </span>
          <h1
            className="mt-5 max-w-4xl font-[family-name:var(--font-heading)] font-semibold leading-[1.02] tracking-[-2px] text-[var(--text-primary)]"
            style={{ fontSize: "clamp(36px, 6vw, 72px)" }}
          >
            {project.title}
          </h1>

          <div className="mt-10 grid gap-px bg-white/[0.06] md:grid-cols-3">
            {[
              ["Location", project.meta.location],
              ["Duration", project.meta.duration],
              ["Team Size", project.meta.teamSize],
            ].map(([label, value]) => (
              <div key={label} className="bg-[var(--bg-900)] p-6">
                <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--text-muted)]">
                  {label}
                </p>
                <p className="mt-2 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--text-primary)]">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-800)] px-[5%] py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--text-primary)]">
              The Challenge
            </h2>
            <p className="mt-5 text-sm font-light leading-[1.8] text-[var(--text-secondary)]">
              {project.summary}
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--text-primary)]">
              Our Solution
            </h2>
            <p className="mt-5 text-sm font-light leading-[1.8] text-[var(--text-secondary)]">
              {solution}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-900)] px-[5%] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
            TECH STACK
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--text-primary)]">
            Technologies Used
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-[var(--text-secondary)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-800)] px-[5%] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
            DELIVERABLES
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--text-primary)]">
            What We Delivered
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {deliverables.map((deliverable) => (
              <div key={deliverable} className="flex gap-2.5">
                <CheckCircle
                  size={16}
                  className="mt-1 shrink-0 text-[var(--color-primary)]"
                />
                <p className="text-sm leading-[1.7] text-[var(--text-secondary)]">
                  {deliverable}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-primary-border)] bg-[var(--bg-900)] px-[5%] py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
            START THE CONVERSATION
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-6xl">
            Ready to build?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-[1.8] text-[var(--text-secondary)]">
            Bring us the target outcome and the delivery constraints. We will
            help turn them into a secure product roadmap.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-[4px] bg-[var(--color-primary)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)]"
            >
              Request a Consultation
            </Link>
            <Link
              href="/portfolio"
              className="rounded-[4px] border border-white/[0.12] px-8 py-3.5 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              View More Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
