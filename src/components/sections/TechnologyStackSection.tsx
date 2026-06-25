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
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-[linear-gradient(180deg,var(--bg-900),#151515)] px-6 py-20 font-[family-name:var(--font-body)] sm:px-8 lg:px-12">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-border)] to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-40 w-[80%] -translate-x-1/2 bg-[radial-gradient(ellipse,rgba(192,57,43,0.12),transparent_68%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              Technology Ecosystem
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold leading-none tracking-[-1px] text-[var(--text-primary)] sm:text-4xl">
              Proven platforms for secure, scalable delivery
            </h2>
          </div>
          <p className="max-w-xl text-sm font-light leading-7 text-[var(--text-secondary)]">
            A curated stack for AI products, cloud-native systems, secure
            releases, and automation-heavy delivery.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.018)),rgba(13,13,13,0.72)] p-5 shadow-[0_30px_120px_rgba(0,0,0,0.36)] backdrop-blur-xl sm:p-7 lg:p-9">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:56px_56px] opacity-35"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-primary-border)] bg-[radial-gradient(circle,rgba(192,57,43,0.13),transparent_70%)]"
          />

          <div className="relative z-10 grid gap-5 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
            {technologyGroups.map((group) => (
              <div key={group.label} className="contents">
                <div className="rounded-[20px] border border-white/[0.08] bg-black/20 p-5">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-primary)]">
                      {group.label}
                    </h3>
                    <span className="h-2 w-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_20px_rgba(192,57,43,0.75)]" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--text-secondary)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                {group.label !== "AI Systems" && (
                  <div
                    aria-hidden="true"
                    className="hidden h-px w-12 bg-gradient-to-r from-[var(--color-primary)] to-transparent lg:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
