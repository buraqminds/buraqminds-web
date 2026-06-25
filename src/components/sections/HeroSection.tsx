"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const PARTICLE_COUNT = 60;
const PARTICLE_COLOR = "rgba(192, 57, 43, 0.6)";

const heroBadges = ["AI Systems", "Cloud-Native", "Cybersecurity"];

const trustMetrics = [
  { value: "120+", label: "Projects Delivered" },
  { value: "80+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "4.9/5", label: "Client Rating" },
] as const;

const deliverySystemNodes = [
  {
    label: "Business Input",
    detail: "Requirements, data, users, workflows",
  },
  {
    label: "AI Workflow",
    detail: "Automation, intelligence, decision support",
  },
  {
    label: "Security Layer",
    detail: "Controls, access, testing, compliance",
  },
  {
    label: "Cloud Deployment",
    detail: "CI/CD, observability, scalable runtime",
  },
  {
    label: "Measurable Outcome",
    detail: "Velocity, cost savings, reliability",
  },
] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() + 1,
    }));

    let animationId = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = PARTICLE_COLOR;
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(circle_at_50%_0%,rgba(192,57,43,0.16),transparent_34%),linear-gradient(180deg,#050505_0%,var(--bg-900)_58%,#111_100%)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] opacity-35"
      />
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.22, 0.42, 0.22], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-24 z-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(192,57,43,0.24),transparent_68%)] blur-2xl"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[18%] z-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-[var(--color-primary-border)] opacity-30"
      />
      <motion.div
        aria-hidden="true"
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute left-1/2 top-[22%] z-0 h-[25rem] w-[25rem] -translate-x-1/2 rounded-full border border-white/[0.06] opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-b from-transparent via-[rgba(20,20,20,0.75)] to-[var(--bg-900)]"
      />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-70"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 pt-28 pb-20 text-center sm:pt-28 lg:pt-24">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-8 flex items-center gap-4"
        >
          <span className="h-px w-10 bg-[var(--color-primary)]" />
          <span className="text-xs font-medium uppercase tracking-[0.28em] text-[var(--color-primary)] sm:text-sm">
            Intelligence · Security · Innovation
          </span>
          <span className="h-px w-10 bg-[var(--color-primary)]" />
        </motion.div>

        <motion.div
          custom={0.05}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {heroBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--text-secondary)] backdrop-blur-md"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-7 font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-tight text-[var(--text-primary)]"
          style={{ fontSize: "clamp(52px, 9vw, 108px)" }}
        >
          Intelligence
          <br />
          <em className="not-italic text-[var(--color-primary)]">Reimagined</em>
        </motion.h1>

        <motion.p
          custom={0.2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-10 max-w-3xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg md:text-xl"
        >
          Buraq Minds engineers secure, scalable digital products where AI,
          cloud architecture, and cybersecurity work together from the first
          sprint, not as afterthoughts.
        </motion.p>

        <motion.div
          custom={0.3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Link
            href="/contact"
            className="inline-flex min-w-[220px] items-center justify-center rounded-[4px] bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)] sm:text-base"
          >
            Request a Consultation
          </Link>
          <Link
            href="/#services"
            className="inline-flex min-w-[220px] items-center justify-center rounded-[4px] border border-[var(--color-primary-border)] bg-transparent px-8 py-4 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] sm:text-base"
          >
            Explore Solutions
          </Link>
        </motion.div>

        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-14 grid w-full max-w-5xl grid-cols-2 overflow-hidden rounded-[22px] border border-white/[0.1] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.025))] shadow-[0_28px_110px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:mt-16 lg:grid-cols-4"
        >
          {trustMetrics.map((metric) => (
            <div
              key={metric.label}
              className="relative border-r border-b border-white/[0.07] px-5 py-6 even:border-r-0 last:border-b-0 sm:px-6 lg:border-b-0 lg:even:border-r lg:last:border-r-0"
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary-border)] to-transparent"
              />
              <div className="font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-[-1px] text-[var(--text-primary)] sm:text-5xl">
                {metric.value}
              </div>
              <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                {metric.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          custom={0.5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-10 w-full max-w-6xl overflow-hidden rounded-[28px] border border-white/[0.1] bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.018)),rgba(13,13,13,0.68)] p-5 text-left shadow-[0_34px_130px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:p-7 lg:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
                Secure AI Delivery System
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold leading-none tracking-[-1px] text-[var(--text-primary)] sm:text-4xl">
                A proprietary path from business signal to secure deployment
              </h2>
              <p className="mt-4 text-sm font-light leading-7 text-[var(--text-secondary)]">
                Every build moves through intelligence, security, and cloud
                delivery controls before it becomes measurable business value.
              </p>
            </div>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-5 top-6 h-[calc(100%-3rem)] w-px bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-primary-border)] to-transparent lg:left-0 lg:right-0 lg:top-1/2 lg:h-px lg:w-full lg:bg-gradient-to-r"
              />
              <motion.div
                aria-hidden="true"
                animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-0 top-1/2 hidden h-px w-24 bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent lg:block"
              />

              <div className="relative z-10 grid gap-4 lg:grid-cols-5">
                {deliverySystemNodes.map((node, index) => (
                  <motion.div
                    key={node.label}
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative ml-10 rounded-[18px] border border-white/[0.08] bg-black/25 p-4 shadow-[0_18px_70px_rgba(0,0,0,0.24)] transition-colors duration-300 hover:border-[var(--color-primary-border)] lg:ml-0"
                  >
                    <span className="absolute -left-[2.65rem] top-5 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--color-primary-border)] bg-[var(--bg-900)] shadow-[0_0_28px_rgba(192,57,43,0.55)] lg:-top-8 lg:left-1/2 lg:-translate-x-1/2">
                      <span className="h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                    </span>
                    <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
                      Step {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold leading-none text-[var(--text-primary)]">
                      {node.label}
                    </h3>
                    <p className="mt-3 text-xs font-light leading-5 text-[var(--text-muted)]">
                      {node.detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
