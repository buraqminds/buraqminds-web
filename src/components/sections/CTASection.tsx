import { siteConfig } from "@/lib/config";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-y border-[var(--color-primary-border)] bg-[var(--bg-800)] px-6 py-24 text-center sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary-alpha) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-tight font-semibold text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
          Ready to build something{" "}
          <em className="font-normal text-[var(--color-primary)]">
            extraordinary
          </em>
          ?
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 font-light text-[var(--text-secondary)]">
          Let’s turn your idea into a secure, scalable product with the right
          blend of strategy, design, and engineering.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex min-w-[240px] items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)]"
          >
            Request a Free Consultation
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex min-w-[240px] items-center justify-center rounded-lg border border-[var(--color-primary-border)] px-8 py-4 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </section>
  );
}
