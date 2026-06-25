"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const PARTICLE_COUNT = 50;
const CONNECT_DISTANCE = 120;
const PARTICLE_COLOR = "rgba(192,57,43,0.5)";

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

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
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      radius: Math.random() * 1.5 + 1,
    }));

    let animationId = 0;

    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x <= 0 || particle.x >= canvas.width) particle.vx *= -1;
        if (particle.y <= 0 || particle.y >= canvas.height) particle.vy *= -1;

        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = PARTICLE_COLOR;
        context.fill();

        for (let nextIndex = index + 1; nextIndex < particles.length; nextIndex += 1) {
          const nextParticle = particles[nextIndex];
          const distance = Math.hypot(
            particle.x - nextParticle.x,
            particle.y - nextParticle.y,
          );

          if (distance < CONNECT_DISTANCE) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(nextParticle.x, nextParticle.y);
            context.strokeStyle = `rgba(192,57,43,${0.18 * (1 - distance / CONNECT_DISTANCE)})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [mounted]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden border-t border-white/[0.05] bg-[#080808] px-[5%] py-24">
      {mounted && (
        <canvas
          ref={canvasRef}
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 h-full w-full"
        />
      )}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(192,57,43,0.08)_0%,transparent_70%)]"
      />

      <motion.div
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex max-w-5xl flex-col items-center text-center"
      >
        <motion.div
          variants={itemVariants}
          className="mb-4 flex items-center justify-center gap-4"
        >
          <span className="w-7 border-t border-[var(--color-primary-border)]" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--color-primary)]">
            Intelligence · Security · Innovation
          </span>
          <span className="w-7 border-t border-[var(--color-primary-border)]" />
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="font-[family-name:var(--font-heading)] font-semibold leading-[1.05] tracking-[-3px]"
          style={{ fontSize: "clamp(56px, 9vw, 112px)" }}
        >
          <span className="block text-[var(--text-primary)]">Intelligence</span>
          <span className="block italic text-[var(--color-primary)]">
            Reimagined
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-[560px] text-[17px] font-light leading-[1.75] text-[var(--text-secondary)]"
        >
          Buraq Minds builds secure, scalable, AI-powered digital products for
          teams that need serious engineering, not template delivery.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap items-center justify-center gap-[14px]"
        >
          <Link
            href="/contact"
            className="rounded-[4px] bg-[var(--color-primary)] px-8 py-3.5 text-sm font-semibold tracking-[0.03em] text-white transition-all duration-200 hover:bg-[var(--color-primary-light)]"
          >
            Request a Consultation
          </Link>
          <Link
            href="/#services"
            className="rounded-[4px] border border-white/[0.15] bg-transparent px-8 py-3.5 text-sm text-[var(--text-primary)] transition-all duration-200 hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]"
          >
            Explore Solutions
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
