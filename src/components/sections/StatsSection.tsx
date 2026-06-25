const capabilities = [
  {
    title: "AI Engineering",
    description:
      "Applied AI workflows, copilots, and automation layers designed around measurable business operations.",
  },
  {
    title: "Cybersecurity",
    description:
      "Secure-by-design delivery, VAPT readiness, and hardened systems for teams handling sensitive data.",
  },
  {
    title: "Cloud Native",
    description:
      "Scalable infrastructure, CI/CD, observability, and deployment practices built for production reliability.",
  },
  {
    title: "QA Automation",
    description:
      "Automated test coverage across critical browser, API, smoke, and regression paths before release.",
  },
  {
    title: "SaaS Development",
    description:
      "Subscription platforms, admin systems, secure APIs, and product foundations that can scale with demand.",
  },
  {
    title: "Staff Augmentation",
    description:
      "Specialized engineering capacity for AI, software, cloud, QA, and cybersecurity roadmaps.",
  },
] as const;

export default function StatsSection() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden border-y border-white/[0.06] bg-[linear-gradient(180deg,#151515,var(--bg-800)_45%,#101010)] px-6 py-24 font-[family-name:var(--font-body)] sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute left-[-10rem] top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.12),transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="absolute right-[-12rem] top-16 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.045),transparent_66%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
            Capability System
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-semibold leading-none tracking-[-1.5px] text-[var(--text-primary)] sm:text-5xl">
            The engineering disciplines behind secure product delivery
          </h2>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-transparent via-[var(--color-primary-border)] to-transparent lg:left-1/2"
          />
          <div className="space-y-5 lg:space-y-0">
            {capabilities.map((capability, index) => (
              <article
                key={capability.title}
                className={`group relative grid gap-6 pl-14 lg:grid-cols-2 lg:pl-0 ${
                  index % 2 === 0 ? "" : "lg:[&>div]:col-start-2"
                }`}
              >
                <div
                  aria-hidden="true"
                  className="absolute left-[17px] top-8 z-10 h-3 w-3 rounded-full bg-[var(--color-primary)] shadow-[0_0_28px_rgba(192,57,43,0.8)] lg:left-1/2 lg:-translate-x-1/2"
                />
                <div className="relative rounded-[22px] border border-white/[0.08] bg-[linear-gradient(145deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02)),rgba(13,13,13,0.52)] p-7 shadow-[0_22px_80px_rgba(0,0,0,0.22)] backdrop-blur-xl transition-colors duration-300 group-hover:border-[var(--color-primary-border)] sm:p-8 lg:m-4">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
                      Node {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px w-16 bg-gradient-to-r from-[var(--color-primary)] to-transparent" />
                  </div>
                  <h3 className="mb-4 font-[family-name:var(--font-heading)] text-2xl font-semibold leading-none text-[var(--text-primary)]">
                    {capability.title}
                  </h3>
                  <p className="text-sm font-light leading-7 text-[var(--text-secondary)]">
                    {capability.description}
                  </p>
                  <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
