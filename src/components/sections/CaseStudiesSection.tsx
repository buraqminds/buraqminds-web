"use client";

import { projects } from "@/content/projects";
import { motion } from "framer-motion";
import Link from "next/link";

const gridVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

function NeuralNetworkSvg() {
  const columns = [
    [
      [54, 54],
      [54, 100],
      [54, 146],
    ],
    [
      [150, 38],
      [150, 78],
      [150, 122],
      [150, 162],
    ],
    [
      [246, 54],
      [246, 100],
      [246, 146],
    ],
  ];
  const nodes = columns.flat();

  return (
    <svg viewBox="0 0 300 200" className="h-full w-full">
      <rect width="300" height="200" fill="#1c1c1c" />
      {columns[0].flatMap((start) =>
        columns[1].map((end) => (
          <line
            key={`${start.join("-")}-${end.join("-")}`}
            x1={start[0]}
            y1={start[1]}
            x2={end[0]}
            y2={end[1]}
            stroke="rgba(192,57,43,0.2)"
            strokeWidth="1"
          />
        )),
      )}
      {columns[1].flatMap((start) =>
        columns[2].map((end) => (
          <line
            key={`${start.join("-")}-${end.join("-")}`}
            x1={start[0]}
            y1={start[1]}
            x2={end[0]}
            y2={end[1]}
            stroke="rgba(192,57,43,0.2)"
            strokeWidth="1"
          />
        )),
      )}
      {nodes.map(([cx, cy], index) => (
        <circle
          key={`${cx}-${cy}-${index}`}
          cx={cx}
          cy={cy}
          r="8"
          fill="rgba(192,57,43,0.3)"
          stroke="rgba(192,57,43,0.6)"
        />
      ))}
      {nodes.filter((_, index) => index % 3 === 0).map(([cx, cy], index) => (
        <circle key={`pulse-${index}`} cx={cx} cy={cy} r="2" fill="#c0392b" />
      ))}
    </svg>
  );
}

function SecuritySvg() {
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full">
      <rect width="300" height="200" fill="#1c1c1c" />
      {[44, 64, 84].map((radius) => (
        <circle
          key={radius}
          cx="150"
          cy="100"
          r={radius}
          fill="none"
          stroke="rgba(192,57,43,0.15)"
        />
      ))}
      <path
        d="M150 48 L190 64 V100 C190 130 172 152 150 162 C128 152 110 130 110 100 V64 Z"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <rect
        x="132"
        y="96"
        width="36"
        height="28"
        rx="4"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <path
        d="M138 96 V86 C138 78 144 72 150 72 C156 72 162 78 162 86 V96"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function CloudSvg() {
  const hexagons = [
    [125, 82],
    [175, 82],
    [150, 126],
  ];

  return (
    <svg viewBox="0 0 300 200" className="h-full w-full">
      <rect width="300" height="200" fill="#1c1c1c" />
      <line x1="125" y1="82" x2="175" y2="82" stroke="rgba(192,57,43,0.2)" />
      <line x1="125" y1="82" x2="150" y2="126" stroke="rgba(192,57,43,0.2)" />
      <line x1="175" y1="82" x2="150" y2="126" stroke="rgba(192,57,43,0.2)" />
      {hexagons.map(([cx, cy]) => (
        <polygon
          key={`${cx}-${cy}`}
          points={`${cx},${cy - 28} ${cx + 24},${cy - 14} ${cx + 24},${cy + 14} ${cx},${cy + 28} ${cx - 24},${cy + 14} ${cx - 24},${cy - 14}`}
          fill="rgba(192,57,43,0.05)"
          stroke="rgba(192,57,43,0.5)"
        />
      ))}
    </svg>
  );
}

function MobileSvg() {
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full">
      <defs>
        <radialGradient id="mobileGlow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="rgba(192,57,43,0.22)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="300" height="200" fill="#1c1c1c" />
      <rect width="300" height="200" fill="url(#mobileGlow)" />
      <rect
        x="118"
        y="38"
        width="64"
        height="124"
        rx="14"
        fill="none"
        stroke="var(--color-primary)"
        strokeWidth="1.5"
      />
      <line x1="132" y1="84" x2="168" y2="84" stroke="rgba(192,57,43,0.55)" />
      <line x1="132" y1="100" x2="168" y2="100" stroke="rgba(192,57,43,0.35)" />
      <line x1="132" y1="116" x2="158" y2="116" stroke="rgba(192,57,43,0.25)" />
    </svg>
  );
}

function BlockchainSvg() {
  const blocks = [
    [70, 82],
    [125, 118],
    [180, 82],
    [235, 118],
  ];

  return (
    <svg viewBox="0 0 300 200" className="h-full w-full">
      <rect width="300" height="200" fill="#1c1c1c" />
      <polyline
        points={blocks.map(([x, y]) => `${x + 18},${y + 18}`).join(" ")}
        fill="none"
        stroke="rgba(192,57,43,0.25)"
      />
      {blocks.map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x}
            y={y}
            width="38"
            height="38"
            rx="4"
            fill="rgba(192,57,43,0.05)"
            stroke="var(--color-primary)"
          />
          <text
            x={x + 19}
            y={y + 25}
            textAnchor="middle"
            fontSize="16"
            fill="var(--color-primary)"
          >
            #
          </text>
        </g>
      ))}
    </svg>
  );
}

function AutomationSvg() {
  return (
    <svg viewBox="0 0 300 200" className="h-full w-full">
      <rect width="300" height="200" fill="#1c1c1c" />
      {[
        ["INPUT", 34],
        ["AGENT", 118],
        ["SYNC", 202],
      ].map(([label, x], index) => (
        <g key={label}>
          <rect
            x={Number(x)}
            y="82"
            width="64"
            height="36"
            rx="8"
            fill="rgba(192,57,43,0.05)"
            stroke="rgba(192,57,43,0.5)"
          />
          <text
            x={Number(x) + 32}
            y="105"
            textAnchor="middle"
            fontSize="8"
            letterSpacing="1"
            fill="var(--color-primary)"
          >
            {label}
          </text>
          {index < 2 && (
            <path
              d={`M${Number(x) + 68} 100 H${Number(x) + 80} L${Number(x) + 75} 95 M${Number(x) + 80} 100 L${Number(x) + 75} 105`}
              fill="none"
              stroke="rgba(192,57,43,0.4)"
            />
          )}
        </g>
      ))}
    </svg>
  );
}

function DefaultSvg() {
  const dots = Array.from({ length: 48 }, (_, index) => ({
    x: 36 + (index % 8) * 32,
    y: 36 + Math.floor(index / 8) * 26,
    strong: index % 3 === 0,
  }));

  return (
    <svg viewBox="0 0 300 200" className="h-full w-full">
      <rect width="300" height="200" fill="#1c1c1c" />
      {dots.map((dot) => (
        <circle
          key={`${dot.x}-${dot.y}`}
          cx={dot.x}
          cy={dot.y}
          r="1.5"
          fill={dot.strong ? "rgba(192,57,43,0.6)" : "rgba(192,57,43,0.3)"}
        />
      ))}
    </svg>
  );
}

function ProjectIllustration({ category }: { category: string }) {
  if (category === "AI & Machine Learning") return <NeuralNetworkSvg />;
  if (category === "Cybersecurity & VAPT") return <SecuritySvg />;
  if (category === "Cloud & DevOps") return <CloudSvg />;
  if (category === "Mobile App Development") return <MobileSvg />;
  if (category === "Blockchain Solutions") return <BlockchainSvg />;
  if (category === "AI & Workflow Automation") return <AutomationSvg />;

  return <DefaultSvg />;
}

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="border-t border-white/[0.05] bg-[#080808] px-[5%] py-24 font-[family-name:var(--font-body)]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
              Our Work
            </p>
            <h2
              className="max-w-[640px] font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-[-1.5px] text-[var(--text-primary)]"
              style={{ fontSize: "clamp(28px, 3.5vw, 48px)" }}
            >
              Proof that engineering quality turns into business outcomes
            </h2>
          </div>
          <p className="text-sm font-light leading-[1.75] text-[var(--text-secondary)] lg:justify-self-end">
            Outcome-led engagements across AI, cybersecurity, cloud, mobile,
            blockchain, and automation, each built for measurable impact.
          </p>
        </div>

        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="mt-[60px] grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              variants={cardVariants}
              className="overflow-hidden rounded-[4px] border border-white/[0.07] bg-[#111111] transition-all duration-[250ms] ease-in-out hover:-translate-y-1 hover:border-[var(--color-primary-border)]"
            >
              <div className="h-[200px] overflow-hidden">
                <ProjectIllustration category={project.category} />
              </div>
              <div className="p-6">
                <span className="rounded-full border border-[var(--color-primary-border)] px-2.5 py-0.5 text-[10px] uppercase tracking-[0.1em] text-[var(--color-primary)]">
                  {project.category}
                </span>
                <h3 className="mt-2.5 font-[family-name:var(--font-heading)] text-[19px] font-semibold text-[var(--text-primary)]">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-[13px] font-light leading-[1.65] text-[var(--text-secondary)]">
                  {project.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.technologies.slice(0, 3).map((technology) => (
                    <span
                      key={technology}
                      className="rounded-[3px] border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 text-[11px] text-[var(--text-secondary)]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
                <div className="mt-3 flex justify-between gap-4 border-t border-white/[0.05] pt-3 text-[11px] text-[var(--text-muted)]">
                  <span>{project.meta.duration}</span>
                  <span>{project.meta.teamSize}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/portfolio"
            className="rounded-[4px] border border-white/10 px-8 py-3 text-[13px] text-[var(--text-secondary)] transition-all duration-[250ms] ease-in-out hover:-translate-y-[3px] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
