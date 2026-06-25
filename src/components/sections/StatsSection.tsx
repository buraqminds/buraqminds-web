"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
  decimals?: number;
};

const stats: Stat[] = [
  { value: 120, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 80, suffix: "+", label: "Clients" },
  { value: 4.9, suffix: "/5", label: "Rating", decimals: 1 },
];

function StatCell({ stat, isLast }: { stat: Stat; isLast: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const [displayValue, setDisplayValue] = useState(
    stat.decimals ? "0.0" : "0",
  );

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, stat.value, {
      duration: 1.25,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplayValue(
          stat.decimals
            ? latest.toFixed(stat.decimals)
            : Math.round(latest).toString(),
        );
      },
    });

    return controls.stop;
  }, [inView, stat.decimals, stat.value]);

  return (
    <div
      ref={ref}
      className={`px-10 py-16 text-center ${
        isLast ? "" : "border-b border-white/[0.05] lg:border-r lg:border-b-0"
      }`}
    >
      <div
        className="font-[family-name:var(--font-heading)] leading-none tracking-[-3px] text-[var(--color-primary)]"
        style={{ fontSize: "clamp(56px, 7vw, 80px)" }}
      >
        {displayValue}
        {stat.suffix}
      </div>
      <p className="mt-2 text-[11px] uppercase tracking-[0.12em] text-[var(--text-secondary)]">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="border-t border-white/[0.05] bg-[#080808] font-[family-name:var(--font-body)]">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <StatCell
            key={stat.label}
            stat={stat}
            isLast={index === stats.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
