const trustItems = [
  "Secure SDLC",
  "Cloud Native",
  "VAPT Ready",
  "AI Enabled",
  "CI/CD",
  "Scalable Teams",
];

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="bg-[var(--bg-900)] px-6 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[var(--color-primary)] uppercase">
              Trust Signals
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-tight font-semibold text-[var(--text-primary)] sm:text-5xl">
              Built around reliability, security, and scale
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {trustItems.map((item) => (
              <div
                key={item}
                className="border border-[var(--color-primary-border)] bg-[var(--bg-800)] px-5 py-4 text-center text-sm font-medium text-[var(--text-secondary)]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
