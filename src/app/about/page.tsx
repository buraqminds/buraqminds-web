import Link from "next/link";

const stats = [
  { value: "2019", label: "Founded" },
  { value: "120+", label: "Projects" },
  { value: "4", label: "Continents" },
  { value: "5+", label: "Years" },
] as const;

const values = [
  {
    number: "01",
    title: "Clarity in Vision",
    description:
      "We turn broad goals into focused product decisions, delivery plans, and measurable outcomes.",
  },
  {
    number: "02",
    title: "Security First",
    description:
      "Security is part of architecture, engineering, testing, and launch readiness from the start.",
  },
  {
    number: "03",
    title: "Commitment Beyond Delivery",
    description:
      "We stay close after launch, improving systems as users, risks, and business needs evolve.",
  },
  {
    number: "04",
    title: "Transparent Partnership",
    description:
      "Clear communication, practical reporting, and honest technical guidance keep teams aligned.",
  },
] as const;

const team = [
  { initials: "MA", name: "Mukhtar Ahmad", role: "Founder & CEO" },
  { initials: "SK", name: "Sarah Khan", role: "Lead Engineer" },
  { initials: "AH", name: "Ali Hassan", role: "Security Specialist" },
  { initials: "ZA", name: "Zara Ahmed", role: "Project Manager" },
] as const;

export function generateMetadata() {
  return {
    title: "About Us",
    description: "Learn about Buraq Minds",
  };
}

export default function AboutPage() {
  return (
    <main className="font-[family-name:var(--font-body)]">
      <section className="bg-[var(--bg-900)] px-[5%] pt-[120px] pb-20">
        <div className="mx-auto max-w-5xl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
            ABOUT BURAQ MINDS
          </p>
          <h1
            className="mt-4 max-w-4xl font-[family-name:var(--font-heading)] font-semibold leading-[1.04] tracking-[-2px] text-[var(--text-primary)]"
            style={{ fontSize: "clamp(40px, 5vw, 68px)" }}
          >
            Building the future of secure, intelligent software
          </h1>
          <p className="mt-5 max-w-2xl text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
            Buraq Minds helps ambitious companies design, build, secure, and
            scale AI-powered digital products with disciplined engineering and
            clear delivery ownership.
          </p>
        </div>
      </section>

      <section className="bg-[var(--bg-800)] px-[5%] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-[family-name:var(--font-heading)] text-[40px] font-semibold leading-tight text-[var(--text-primary)]">
              Our Story
            </h2>
            <div className="mt-6 space-y-5 text-sm font-light leading-[1.8] text-[var(--text-secondary)]">
              <p>
                Founded in Rawalpindi, Pakistan, Buraq Minds began with a clear
                belief: strong software teams should combine product thinking,
                secure engineering, and dependable delivery.
              </p>
              <p>
                Today, we serve clients across the US, UK, Europe, and GCC,
                helping startups and established companies launch SaaS
                platforms, AI systems, cloud-native products, and secure digital
                infrastructure.
              </p>
              <p>
                Our focus is AI, cybersecurity, and delivery excellence. That
                means every engagement is shaped around practical outcomes,
                clean architecture, and systems that can stand up to real users.
              </p>
            </div>
          </div>

          <div className="rounded-[4px] border border-[var(--color-primary-border)] p-8 sm:p-10">
            <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-[var(--bg-800)] p-6">
                  <div className="font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--color-primary)]">
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[var(--text-secondary)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-900)] px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
              OUR VALUES
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
              What drives everything we build
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-[4px] border border-white/[0.07] bg-[var(--bg-800)] p-8"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
                  {value.number}
                </p>
                <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold text-[var(--text-primary)]">
                  {value.title}
                </h3>
                <p className="mt-3 text-[13px] font-light leading-[1.75] text-[var(--text-secondary)]">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-800)] px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
              OUR TEAM
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
              The people behind the work
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <article
                key={member.name}
                className="rounded-[4px] border border-white/[0.07] bg-[var(--bg-900)] p-8 text-center"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[var(--color-primary-border)] bg-[var(--color-primary-alpha)] font-[family-name:var(--font-heading)] text-[22px] text-[var(--color-primary)]">
                  {member.initials}
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--text-primary)]">
                  {member.name}
                </h3>
                <p className="mt-1 text-[13px] text-[var(--text-secondary)]">
                  {member.role}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-primary-border)] bg-[var(--bg-900)] px-[5%] py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
            START THE CONVERSATION
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-6xl">
            Ready to build?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-[1.8] text-[var(--text-secondary)]">
            Bring us the goal, the risk, or the product challenge. We will help
            shape the right technical path.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="rounded-[4px] bg-[var(--color-primary)] px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)]"
            >
              Request a Consultation
            </Link>
            <Link
              href="/portfolio"
              className="rounded-[4px] border border-white/[0.12] px-8 py-3.5 text-sm text-[var(--text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
