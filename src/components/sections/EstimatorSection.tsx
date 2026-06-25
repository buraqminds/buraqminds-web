"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

type ServiceKey = "saas" | "cyber" | "ai" | "cloud" | "mobile" | "web";
type ScopeKey = "mvp" | "mid" | "enterprise" | "audit";

type Option<T extends string> = {
  key: T;
  label: string;
  icon?: "browser" | "shield" | "brain" | "cloud" | "phone" | "code";
};

const serviceOptions: Option<ServiceKey>[] = [
  { key: "saas", label: "SaaS / Web App", icon: "browser" },
  { key: "cyber", label: "Cybersecurity", icon: "shield" },
  { key: "ai", label: "AI / ML Solution", icon: "brain" },
  { key: "cloud", label: "Cloud & DevOps", icon: "cloud" },
  { key: "mobile", label: "Mobile App", icon: "phone" },
  { key: "web", label: "Web Development", icon: "code" },
];

const scopeOptions: Option<ScopeKey>[] = [
  { key: "mvp", label: "MVP / Starter" },
  { key: "mid", label: "Mid-size Product" },
  { key: "enterprise", label: "Enterprise Solution" },
  { key: "audit", label: "Audit / Assessment" },
];

const timelineOptions = [
  "ASAP (1-4 weeks)",
  "1-3 months",
  "3-6 months",
  "Ongoing",
] as const;

const priceLookup: Record<string, string> = {
  "saas-mvp": "$3,000 - $8,000",
  "saas-mid": "$10,000 - $25,000",
  "saas-enterprise": "$30,000 - $80,000",
  "cyber-mvp": "$1,500 - $4,000",
  "cyber-mid": "$5,000 - $15,000",
  "cyber-enterprise": "$15,000 - $40,000",
  "ai-mvp": "$4,000 - $12,000",
  "ai-mid": "$15,000 - $40,000",
  "cloud-mvp": "$2,000 - $6,000",
  "cloud-mid": "$8,000 - $20,000",
  "mobile-mvp": "$5,000 - $12,000",
  "web-mvp": "$800 - $2,500",
};

function ServiceIcon({ icon }: { icon: NonNullable<Option<ServiceKey>["icon"]> }) {
  const commonProps = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (icon === "shield") {
    return (
      <svg {...commonProps}>
        <path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6l7-3Z" />
      </svg>
    );
  }

  if (icon === "brain") {
    return (
      <svg {...commonProps}>
        <path d="M8 6a3 3 0 0 1 5-2 3 3 0 0 1 4 4 3 3 0 0 1-1 6 3 3 0 0 1-4 4 3 3 0 0 1-4-2 3 3 0 0 1-1-6 3 3 0 0 1 1-4Z" />
        <path d="M12 4v16M8 10h8" />
      </svg>
    );
  }

  if (icon === "cloud") {
    return (
      <svg {...commonProps}>
        <path d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11-2 5 5 0 0 0 1 10Z" />
      </svg>
    );
  }

  if (icon === "phone") {
    return (
      <svg {...commonProps}>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M11 17h2" />
      </svg>
    );
  }

  if (icon === "code") {
    return (
      <svg {...commonProps}>
        <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 9h18" />
    </svg>
  );
}

function OptionCard<T extends string>({
  option,
  selected,
  onClick,
}: {
  option: Option<T>;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex cursor-pointer items-center gap-3 rounded-[4px] border p-4 text-left transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:border-[var(--color-primary-border)] ${
        selected
          ? "border-[var(--color-primary)] bg-[rgba(192,57,43,0.06)]"
          : "border-white/[0.08] bg-[#1c1c1c]"
      }`}
    >
      {option.icon && (
        <span className="text-[var(--color-primary)]">
          <ServiceIcon icon={option.icon} />
        </span>
      )}
      <span className="text-sm font-medium text-[var(--text-primary)]">
        {option.label}
      </span>
    </button>
  );
}

export default function EstimatorSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [service, setService] = useState<ServiceKey>("saas");
  const [scope, setScope] = useState<ScopeKey>("mvp");
  const [timeline, setTimeline] = useState<(typeof timelineOptions)[number]>(
    "1-3 months",
  );
  const [email, setEmail] = useState("");

  const selectedService = serviceOptions.find((option) => option.key === service);
  const selectedScope = scopeOptions.find((option) => option.key === scope);
  const estimate = useMemo(
    () => priceLookup[`${service}-${scope}`] || "$3,000 - $10,000",
    [scope, service],
  );

  const stepContent = [
    {
      question: "What type of project do you need?",
      body: (
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceOptions.map((option) => (
            <OptionCard
              key={option.key}
              option={option}
              selected={service === option.key}
              onClick={() => setService(option.key)}
            />
          ))}
        </div>
      ),
    },
    {
      question: "What is the project scope?",
      body: (
        <div className="grid gap-2.5 sm:grid-cols-2">
          {scopeOptions.map((option) => (
            <OptionCard
              key={option.key}
              option={option}
              selected={scope === option.key}
              onClick={() => setScope(option.key)}
            />
          ))}
        </div>
      ),
    },
    {
      question: "What is your timeline?",
      body: (
        <div className="grid gap-2.5 sm:grid-cols-2">
          {timelineOptions.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setTimeline(option)}
              className={`rounded-[4px] border p-4 text-left text-sm font-medium transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:border-[var(--color-primary-border)] ${
                timeline === option
                  ? "border-[var(--color-primary)] bg-[rgba(192,57,43,0.06)] text-[var(--text-primary)]"
                  : "border-white/[0.08] bg-[#1c1c1c] text-[var(--text-primary)]"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      ),
    },
    {
      question: "Estimated project range",
      body: (
        <div>
          <div className="font-[family-name:var(--font-heading)] text-[52px] leading-none tracking-[-2px] text-[var(--color-primary)]">
            {estimate}
          </div>
          <p className="mt-3 text-base text-[var(--text-secondary)]">
            Suggested timeline: {timeline}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {[selectedService?.label, selectedScope?.label, timeline].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-[var(--text-secondary)]"
              >
                {item}
              </span>
            ))}
          </div>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="you@company.com"
            className="mt-6 w-full rounded-[4px] border border-white/10 bg-[#1c1c1c] px-4 py-3 text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--color-primary-border)]"
          />
          <button
            type="button"
            className="mt-3 w-full rounded-[4px] bg-[var(--color-primary)] p-[13px] font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)]"
          >
            Get Detailed Report
          </button>
        </div>
      ),
    },
  ];

  return (
    <section
      id="estimator"
      className="border-t border-white/[0.05] bg-[#080808] px-[5%] py-24 font-[family-name:var(--font-body)]"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
          Free Tool
        </p>
        <h2
          className="font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-[-1.5px] text-[var(--text-primary)]"
          style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
        >
          Project Cost Estimator
        </h2>
        <p className="mx-auto mb-12 mt-4 max-w-xl text-sm font-light leading-[1.75] text-[var(--text-secondary)]">
          Answer 3 questions and get an instant project budget range.
        </p>

        <div className="mx-auto max-w-[720px] rounded-[4px] border border-[var(--color-primary-border)] bg-[#111111] p-8 text-left sm:p-12">
          <div className="mb-8 flex justify-center gap-2">
            {[0, 1, 2].map((step) => (
              <span
                key={step}
                className={`h-1.5 rounded-[3px] ${
                  Math.min(currentStep, 2) === step
                    ? "w-8 bg-[var(--color-primary)]"
                    : "w-2 bg-white/[0.15]"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -30, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="mb-6 font-[family-name:var(--font-heading)] text-2xl font-semibold text-[var(--text-primary)]">
                {stepContent[currentStep].question}
              </h3>
              {stepContent[currentStep].body}
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-between gap-4">
            {currentStep > 0 ? (
              <button
                type="button"
                onClick={() => setCurrentStep((step) => Math.max(0, step - 1))}
                className="rounded-[4px] border border-white/10 px-5 py-3 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]"
              >
                ← Back
              </button>
            ) : (
              <span />
            )}
            {currentStep < 3 && (
              <button
                type="button"
                onClick={() => setCurrentStep((step) => Math.min(3, step + 1))}
                className="rounded-[4px] bg-[var(--color-primary)] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)]"
              >
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
