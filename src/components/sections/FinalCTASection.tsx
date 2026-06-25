import { siteConfig } from "@/lib/config";
import Link from "next/link";

export default function FinalCTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-y border-[var(--color-primary-border)] bg-[var(--bg-800)] px-6 py-28 text-center sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary-alpha) 0%, transparent 68%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-5 text-sm font-semibold tracking-[0.18em] text-[var(--color-primary)] uppercase">
          Build with Buraq Minds
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-tight font-semibold text-[var(--text-primary)] sm:text-5xl lg:text-7xl">
          Ready to build software that can handle{" "}
          <em className="font-normal text-[var(--color-primary)]">
            real growth
          </em>
          ?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 font-light text-[var(--text-secondary)]">
          Bring us the product, platform, or security challenge that matters.
          We will help you define the smartest path from idea to execution.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-w-[250px] items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)]"
          >
            Request a Free Consultation
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex min-w-[250px] items-center justify-center rounded-lg border border-[var(--color-primary-border)] px-8 py-4 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
