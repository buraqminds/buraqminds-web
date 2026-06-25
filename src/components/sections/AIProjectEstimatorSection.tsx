"use client";

import { siteConfig } from "@/lib/config";
import { saveAssessment } from "@/lib/firebase";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";

const scopes = [
  "MVP / prototype",
  "Production platform",
  "Security assessment",
  "Scale and automation",
];

const timelines = ["30–45 days", "2–3 months", "3–6 months", "Ongoing team"];

function buildRecommendation(service: string, scope: string, timeline: string) {
  const serviceTitle =
    siteConfig.services.find((item) => item.slug === service)?.title ||
    "Product Engineering";

  return `${serviceTitle} engagement focused on ${scope.toLowerCase()} with a ${timeline.toLowerCase()} delivery window. Recommended next step: a 45-minute discovery call to define architecture, risk profile, and delivery milestones.`;
}

export default function AIProjectEstimatorSection() {
  const [email, setEmail] = useState("");
  const [service, setService] = useState(siteConfig.services[0].slug);
  const [scope, setScope] = useState(scopes[0]);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle",
  );

  const recommendation = useMemo(
    () => buildRecommendation(service, scope, timeline),
    [service, scope, timeline],
  );

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");

    try {
      await saveAssessment({
        email,
        service,
        scope,
        timeline,
        aiRecommendation: recommendation,
      });
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="estimator"
      className="relative overflow-hidden bg-[var(--bg-900)] px-6 py-24 sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--color-primary-alpha) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-sm font-semibold tracking-[0.18em] text-[var(--color-primary)] uppercase">
            AI Project Estimator
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-tight font-semibold text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Get a practical first read on scope, timeline, and delivery path
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 font-light text-[var(--text-secondary)]">
            Share a few inputs and receive a focused recommendation. It is built
            for early decision-making, not inflated proposals.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="border border-[var(--color-primary-border)] bg-[var(--bg-800)]/90 p-6 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="grid gap-2 text-sm text-[var(--text-secondary)] sm:col-span-2">
              Work email
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                type="email"
                required
                placeholder="you@company.com"
                className="h-12 border border-white/[0.08] bg-[var(--bg-700)] px-4 text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--color-primary-border)]"
              />
            </label>

            <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
              Service
              <select
                value={service}
                onChange={(event) => setService(event.target.value)}
                className="h-12 border border-white/[0.08] bg-[var(--bg-700)] px-4 text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--color-primary-border)]"
              >
                {siteConfig.services.map((item) => (
                  <option key={item.slug} value={item.slug}>
                    {item.title}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm text-[var(--text-secondary)]">
              Scope
              <select
                value={scope}
                onChange={(event) => setScope(event.target.value)}
                className="h-12 border border-white/[0.08] bg-[var(--bg-700)] px-4 text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--color-primary-border)]"
              >
                {scopes.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm text-[var(--text-secondary)] sm:col-span-2">
              Timeline
              <select
                value={timeline}
                onChange={(event) => setTimeline(event.target.value)}
                className="h-12 border border-white/[0.08] bg-[var(--bg-700)] px-4 text-[var(--text-primary)] outline-none transition-colors focus:border-[var(--color-primary-border)]"
              >
                {timelines.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="mt-6 border border-white/[0.06] bg-black/15 p-5">
            <p className="mb-2 text-xs font-semibold tracking-[0.18em] text-[var(--color-primary)] uppercase">
              Recommendation
            </p>
            <p className="text-sm leading-7 font-light text-[var(--text-secondary)]">
              {recommendation}
            </p>
          </div>

          <button
            type="submit"
            disabled={status === "saving"}
            className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "saving" ? "Saving assessment..." : "Send Assessment"}
          </button>

          {status === "saved" && (
            <p className="mt-4 text-sm text-[var(--text-secondary)]">
              Assessment saved. Our team can follow up with a more detailed plan.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-sm text-[var(--color-primary-light)]">
              We could not save this right now. Please email {siteConfig.email}.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
