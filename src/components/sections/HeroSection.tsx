"use client";

import { siteConfig } from "@/lib/config";
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
const CONNECTION_DISTANCE = 120;
const PARTICLE_COLOR = "rgba(192, 57, 43, 0.6)";

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

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity = 0.35 * (1 - distance / CONNECTION_DISTANCE);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(192, 57, 43, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
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
    <section className="relative min-h-screen w-full overflow-hidden bg-[var(--bg-900)]">
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
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

        <motion.h1
          custom={0.1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mb-6 font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-tight text-[var(--text-primary)]"
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
          className="mb-10 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg md:text-xl"
        >
          {siteConfig.description}
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
            className="inline-flex min-w-[220px] items-center justify-center rounded-lg bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)] sm:text-base"
          >
            Request a Consultation
          </Link>
          <Link
            href="/#services"
            className="inline-flex min-w-[220px] items-center justify-center rounded-lg border border-[var(--color-primary-border)] bg-transparent px-8 py-4 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] sm:text-base"
          >
            Explore Solutions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
