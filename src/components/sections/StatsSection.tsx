"use client";

import { cn } from "@/lib/utils";
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
  { value: 120, suffix: "+", label: "Projects Delivered" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 80, suffix: "+", label: "Happy Clients" },
  { value: 4.9, suffix: "/5", decimals: 1, label: "Client Rating" },
];

function StatCell({
  stat,
  isLast,
}: {
  stat: Stat;
  isLast: boolean;
}) {
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
      className={cn(
        "flex min-h-40 flex-col items-center justify-center border-[var(--color-primary-border)] px-6 py-10 text-center",
        !isLast && "border-b lg:border-r lg:border-b-0",
      )}
    >
      <div className="font-[family-name:var(--font-heading)] text-[64px] leading-none text-[var(--color-primary)]">
        <motion.span>{displayValue}</motion.span>
        {stat.suffix}
      </div>
      <p className="mt-4 text-[13px] font-medium tracking-[0.04em] text-[var(--text-secondary)] uppercase">
        {stat.label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section id="stats" className="bg-[var(--bg-800)]">
      <div className="grid grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-4">
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
