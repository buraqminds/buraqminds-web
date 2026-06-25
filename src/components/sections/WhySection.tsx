"use client";

const reasons = [
  {
    title: "Speed without compromise",
    description:
      "SaaS MVPs shipped in 30-45 days without cutting corners on architecture or security.",
  },
  {
    title: "Security-first by design",
    description:
      "VAPT, compliance, and threat modeling built into every sprint from day one.",
  },
  {
    title: "AI-native delivery",
    description:
      "LLMs, RAG pipelines, and ML systems integrated where they create measurable business value.",
  },
  {
    title: "Transparent partnership",
    description:
      "Weekly sprints, real-time progress, zero surprises from scoping to handoff.",
  },
] as const;

export default function WhySection() {
  return (
    <section className="border-t border-white/[0.05] bg-[#080808] px-[5%] py-24 font-[family-name:var(--font-body)]">
      <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-2 lg:items-center">
        <div className="relative flex min-h-[420px] flex-col justify-end rounded-[4px] border border-[var(--color-primary-border)] bg-[#1c1c1c] p-12 transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:border-[var(--color-primary-border)]">
          <span className="absolute right-6 top-6 rounded-full border border-[var(--color-primary-border)] px-3.5 py-1 text-[11px] text-[var(--color-primary)]">
            30–45 Days to MVP
          </span>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Our Impact
          </p>
          <div className="font-[family-name:var(--font-heading)] text-[96px] font-semibold leading-none tracking-[-4px] text-[var(--color-primary)]">
            100+
          </div>
          <h3 className="mt-2 font-[family-name:var(--font-heading)] text-xl text-[var(--text-primary)]">
            Projects delivered across 4 continents
          </h3>
          <p className="mt-1 text-[13px] text-[var(--text-secondary)]">
            US · UK · Europe · GCC
          </p>
        </div>

        <div>
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Why Buraq Minds
          </p>
          <h2
            className="font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-[-1.5px] text-[var(--text-primary)]"
            style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
          >
            Engineering growth with security and intelligence
          </h2>

          <div className="mt-9 grid gap-6">
            {reasons.map((reason) => (
              <article key={reason.title} className="flex items-start gap-4">
                <span className="mt-1 h-12 w-[3px] shrink-0 rounded-[2px] bg-[var(--color-primary)]" />
                <div>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--text-primary)]">
                    {reason.title}
                  </h3>
                  <p className="mt-1 text-[13px] font-light leading-[1.65] text-[var(--text-secondary)]">
                    {reason.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
