"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden border-y border-[var(--color-primary-border)] bg-[#111111] px-[5%] py-[100px] text-center font-[family-name:var(--font-body)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-200px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.06)_0%,transparent_65%)]"
      />

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          Get Started Today
        </p>
        <h2
          className="mt-4 font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-[-1.5px] text-[var(--text-primary)]"
          style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
        >
          Ready to build something{" "}
          <span className="italic text-[var(--color-primary)]">
            extraordinary?
          </span>
        </h2>
        <p className="mx-auto mt-5 max-w-[520px] text-base font-light leading-[1.75] text-[var(--text-secondary)]">
          Let&apos;s turn your idea into a secure, scalable product with the
          right blend of strategy, engineering, and security.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-[14px]">
          <Link
            href="/contact"
            className="rounded-[4px] bg-[var(--color-primary)] px-9 py-[15px] text-sm font-semibold tracking-[0.03em] text-white transition-all duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:bg-[var(--color-primary-light)]"
          >
            Request Free Consultation
          </Link>
          <a
            href="mailto:info@buraqminds.com"
            className="rounded-[4px] border border-white/[0.12] bg-transparent px-9 py-[15px] text-sm text-[var(--text-secondary)] transition-all duration-[250ms] ease-in-out hover:-translate-y-0.5 hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]"
          >
            info@buraqminds.com
          </a>
        </div>
      </div>
    </section>
  );
}
