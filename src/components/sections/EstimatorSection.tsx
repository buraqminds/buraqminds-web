"use client";

import { saveAssessment } from "@/lib/firebase";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type ServiceKey = "saas" | "cyber" | "ai" | "mobile" | "cloud" | "web";
type ScopeKey = "mvp" | "mid" | "enterprise" | "audit";

const serviceOptions: Array<{ key: ServiceKey; label: string; icon: string }> = [
  { key: "saas", label: "SaaS", icon: "S" },
  { key: "cyber", label: "Cybersecurity", icon: "C" },
  { key: "ai", label: "AI / ML", icon: "A" },
  { key: "mobile", label: "Mobile App", icon: "M" },
  { key: "cloud", label: "Cloud", icon: "D" },
  { key: "web", label: "Web", icon: "W" },
];

const scopeOptions: Array<{ key: ScopeKey; label: string }> = [
  { key: "mvp", label: "MVP" },
  { key: "mid", label: "Mid-size" },
  { key: "enterprise", label: "Enterprise" },
  { key: "audit", label: "Audit" },
];

const timelineOptions = ["30–45 days", "2–3 months", "3–6 months", "Ongoing"];

const priceTable: Record<ServiceKey, Partial<Record<ScopeKey, string>>> = {
  saas: {
    mvp: "$3k–8k",
    mid: "$10k–25k",
    enterprise: "$30k–80k",
  },
  cyber: {
    mvp: "$1.5k–4k",
    mid: "$5k–15k",
    audit: "$1.5k–4k",
  },
  ai: {
    mvp: "$4k–12k",
    mid: "$15k–40k",
  },
  mobile: {
    mvp: "$5k–12k",
  },
  cloud: {
    mvp: "$2k–6k",
  },
  web: {
    mvp: "$800–2.5k",
  },
};

function getPrice(service: ServiceKey, scope: ScopeKey) {
  return priceTable[service][scope] || priceTable[service].mvp || "$3k–8k";
}

export default function EstimatorSection() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState<ServiceKey>("saas");
  const [scope, setScope] = useState<ScopeKey>("mvp");
  const [timeline, setTimeline] = useState(timelineOptions[1]);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">(
    "idle",
  );

  const price = useMemo(() => getPrice(service, scope), [scope, service]);
  const selectedService =
    serviceOptions.find((option) => option.key === service)?.label || "SaaS";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("saving");

    try {
      await saveAssessment({
        email,
        service: selectedService,
        scope: scopeOptions.find((option) => option.key === scope)?.label || scope,
        timeline,
        aiRecommendation: `${selectedService} ${scope.toUpperCase()} project estimated at ${price} with a ${timeline} delivery target.`,
      });
      setStatus("saved");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      id="estimator"
      className="relative overflow-hidden bg-[var(--bg-900)] px-6 py-[110px] font-[family-name:var(--font-body)] sm:px-8 lg:px-12"
    >
      <div
        aria-hidden="true"
        className="absolute right-[-12rem] top-20 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,var(--color-primary-alpha),transparent_66%)]"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.08),transparent_70%)]"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-4 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
            Estimate
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-4xl leading-none font-semibold tracking-[-2px] text-[var(--text-primary)] sm:text-5xl lg:text-6xl">
            Project Cost Estimator
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-8 font-light text-[var(--text-secondary)]">
            Get a practical budget range based on service type, scope, and
            timeline before you book a strategy call.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-[4px] border border-white/[0.06] bg-[rgba(20,20,20,0.82)] backdrop-blur-xl"
        >
          <div className="grid grid-cols-4 border-b border-white/[0.06] bg-black/10">
            {[1, 2, 3, 4].map((item) => {
              const isDone = step > item;
              const isActive = step === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setStep(item)}
                  className="flex items-center justify-center gap-3 border-r border-white/[0.06] px-3 py-5 last:border-r-0"
                  aria-label={`Go to estimator step ${item}`}
                >
                  <span
                    className={`flex items-center justify-center rounded-full border border-[var(--color-primary-border)] transition-colors ${
                      isActive
                        ? "h-9 w-9 bg-[var(--color-primary)] text-white"
                        : isDone
                          ? "h-5 w-5 bg-[var(--color-primary)] text-[0px]"
                          : "h-9 w-9 text-[var(--color-primary)]"
                    }`}
                  >
                    {item}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="min-h-[500px] p-5 sm:p-8 lg:p-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="service"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                    <div>
                      <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                        Step 01
                      </p>
                      <h3 className="font-[family-name:var(--font-heading)] text-3xl leading-[1.05] tracking-[-1.5px] text-[var(--text-primary)]">
                        Select service type
                      </h3>
                    </div>
                    <p className="max-w-md text-sm leading-[1.75] font-light text-[var(--text-secondary)]">
                      Choose the primary engagement type so we can align the estimate to the right delivery model.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {serviceOptions.map((option) => (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => {
                          setService(option.key);
                          setStep(2);
                        }}
                        className={`group relative min-h-36 overflow-hidden rounded-[4px] border border-white/[0.06] bg-[rgba(26,26,26,0.78)] p-6 text-left transition-colors hover:bg-[var(--bg-600)] ${
                          service === option.key ? "border-[var(--color-primary-border)]" : ""
                        }`}
                      >
                        <span className="mb-7 flex h-11 w-11 items-center justify-center border border-[var(--color-primary-border)] text-[var(--color-primary)]">
                          {option.icon}
                        </span>
                        <span className="block text-base font-light text-[var(--text-primary)]">
                          {option.label}
                        </span>
                        <span className="mt-3 block text-xs leading-5 font-light text-[var(--text-muted)]">
                          {option.key === "saas" && "Platforms, portals, and subscription products."}
                          {option.key === "cyber" && "Assessments, VAPT, and readiness hardening."}
                          {option.key === "ai" && "Automation, RAG, agents, and ML workflows."}
                          {option.key === "mobile" && "Cross-platform apps for funded teams."}
                          {option.key === "cloud" && "Infrastructure, migration, and CI/CD."}
                          {option.key === "web" && "Premium web apps and conversion sites."}
                        </span>
                        <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="scope"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                    <div>
                      <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                        Step 02
                      </p>
                      <h3 className="font-[family-name:var(--font-heading)] text-3xl leading-[1.05] tracking-[-1.5px] text-[var(--text-primary)]">
                        Choose project scope
                      </h3>
                    </div>
                    <p className="max-w-md text-sm leading-[1.75] font-light text-[var(--text-secondary)]">
                      Scope controls complexity, architecture depth, QA coverage, and team size.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {scopeOptions.map((option) => (
                      <button
                        key={option.key}
                        type="button"
                        onClick={() => {
                          setScope(option.key);
                          setStep(3);
                        }}
                        className={`group relative min-h-36 rounded-[4px] border border-white/[0.06] bg-[rgba(26,26,26,0.78)] p-6 text-left transition-colors hover:bg-[var(--bg-600)] ${
                          scope === option.key ? "border-[var(--color-primary-border)]" : ""
                        }`}
                      >
                        <span className="text-base font-light text-[var(--text-primary)]">
                          {option.label}
                        </span>
                        <span className="mt-4 block text-xs leading-5 font-light text-[var(--text-muted)]">
                          {option.key === "mvp" && "Focused launch version for validation."}
                          {option.key === "mid" && "Production-ready product with integrations."}
                          {option.key === "enterprise" && "Complex systems, scale, governance."}
                          {option.key === "audit" && "Security review and risk report."}
                        </span>
                        <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="timeline"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="mb-8 flex flex-col justify-between gap-3 md:flex-row md:items-end">
                    <div>
                      <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                        Step 03
                      </p>
                      <h3 className="font-[family-name:var(--font-heading)] text-3xl leading-[1.05] tracking-[-1.5px] text-[var(--text-primary)]">
                        Pick target timeline
                      </h3>
                    </div>
                    <p className="max-w-md text-sm leading-[1.75] font-light text-[var(--text-secondary)]">
                      We’ll tune the estimate around urgency, release strategy, and delivery capacity.
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    {timelineOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => {
                          setTimeline(option);
                          setStep(4);
                        }}
                        className={`group relative min-h-32 rounded-[4px] border border-white/[0.06] bg-[rgba(26,26,26,0.78)] p-6 text-left transition-colors hover:bg-[var(--bg-600)] ${
                          timeline === option ? "border-[var(--color-primary-border)]" : ""
                        }`}
                      >
                        <span className="text-sm font-light text-[var(--text-primary)]">
                          {option}
                        </span>
                        <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100" />
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-stretch"
                >
                  <div className="rounded-[4px] border border-white/[0.06] bg-[rgba(26,26,26,0.72)] p-7">
                    <p className="mb-3 text-[10px] font-semibold tracking-[0.2em] text-[var(--color-primary)] uppercase">
                      Estimated Range
                    </p>
                    <div className="font-[family-name:var(--font-heading)] text-5xl leading-none tracking-[-2px] text-[var(--color-primary)]">
                      {price}
                    </div>
                    <div className="mt-8 grid gap-3 text-xs font-light text-[var(--text-secondary)]">
                      <div className="flex justify-between border-b border-white/[0.06] pb-3">
                        <span>Service</span>
                        <span className="text-[var(--text-primary)]">{selectedService}</span>
                      </div>
                      <div className="flex justify-between border-b border-white/[0.06] pb-3">
                        <span>Scope</span>
                        <span className="text-[var(--text-primary)]">
                          {scopeOptions.find((option) => option.key === scope)?.label}
                        </span>
                      </div>
                      <div className="flex justify-between border-b border-white/[0.06] pb-3">
                        <span>Timeline</span>
                        <span className="text-[var(--text-primary)]">{timeline}</span>
                      </div>
                    </div>
                    <p className="mt-5 text-[13px] leading-6 font-light text-[var(--text-secondary)]">
                      Suggested timeline: {timeline}. Final pricing depends on
                      integrations, compliance requirements, and team structure.
                    </p>
                  </div>

                  <div className="rounded-[4px] border border-white/[0.06] bg-[rgba(26,26,26,0.78)] p-7">
                    <label className="grid gap-2 text-[13px] font-light text-[var(--text-secondary)]">
                      Email for detailed report
                      <input
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="h-12 border border-white/[0.06] bg-[var(--bg-800)] px-4 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--color-primary-border)]"
                      />
                    </label>
                    <button
                      type="submit"
                      disabled={status === "saving"}
                      className="mt-5 inline-flex w-full items-center justify-center bg-[var(--color-primary)] px-6 py-4 text-sm font-medium text-white transition-colors hover:bg-[var(--color-primary-light)] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {status === "saving"
                        ? "Sending..."
                        : "Get Detailed Report"}
                    </button>
                    {status === "saved" && (
                      <p className="mt-4 text-[13px] font-light text-[var(--text-secondary)]">
                        Report request saved. We will follow up with details.
                      </p>
                    )}
                    {status === "error" && (
                      <p className="mt-4 text-[13px] font-light text-[var(--color-primary-light)]">
                        Could not save right now. Please email info@buraqminds.com.
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </section>
  );
}
