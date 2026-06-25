"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

type Stat = {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
};

const stats: Stat[] = [
  { value: 120, suffix: "+", label: "Projects" },
  { value: 5, suffix: "+", label: "Years" },
  { value: 80, suffix: "+", label: "Clients" },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Rating" },
];

function StatCell({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.45 });
  const count = useMotionValue(0);
  const displayValue = useTransform(count, (latest) =>
    stat.decimals ? latest.toFixed(stat.decimals) : Math.round(latest).toString(),
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, stat.value, {
      duration: 1.6,
      ease: "easeOut",
    });

    return controls.stop;
  }, [count, isInView, stat.value]);

  return (
    <div
      ref={ref}
      className="flex min-h-44 flex-col items-center justify-center border-b border-r border-white/[0.06] px-6 py-12 text-center last:border-r-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(n)]:border-b-0"
    >
      <div className="font-[family-name:var(--font-heading)] text-[64px] leading-none text-[var(--color-primary)]">
        <motion.span>{displayValue}</motion.span>
        {stat.suffix}
      </div>
      <p className="mt-4 text-xs font-light tracking-[0.1em] text-[var(--text-secondary)] uppercase">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="bg-[var(--bg-800)] font-[family-name:var(--font-body)]">
      <div className="grid grid-cols-1 gap-0 border-y border-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCell key={stat.label} stat={stat} />
        ))}
      </div>
    </section>
  );
}
