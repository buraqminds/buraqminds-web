import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <div
        id="stats"
        className="flex h-40 items-center justify-center bg-[var(--bg-800)] text-[var(--text-muted)]"
      >
        stats
      </div>

      <div
        id="services"
        className="flex h-96 items-center justify-center bg-[var(--bg-900)] text-[var(--text-muted)]"
      >
        services
      </div>

      <div
        id="why"
        className="flex h-96 items-center justify-center bg-[var(--bg-800)] text-[var(--text-muted)]"
      >
        why
      </div>

      <div
        id="process"
        className="flex h-80 items-center justify-center bg-[var(--bg-900)] text-[var(--text-muted)]"
      >
        process
      </div>

      <div
        id="testimonials"
        className="flex h-96 items-center justify-center bg-[var(--bg-800)] text-[var(--text-muted)]"
      >
        testimonials
      </div>

      <div
        id="estimator"
        className="flex h-96 items-center justify-center bg-[var(--bg-900)] text-[var(--text-muted)]"
      >
        estimator
      </div>

      <div
        id="cta"
        className="flex h-60 items-center justify-center bg-[var(--bg-800)] text-[var(--text-muted)]"
      >
        cta
      </div>
    </>
  );
}
