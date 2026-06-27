import { services } from "@/content/services";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceFaq from "./ServiceFaq";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.shortDesc,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <main className="bg-[var(--bg-900)] font-[family-name:var(--font-body)]">
      <section className="px-[5%] pt-[120px] pb-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
            {service.category}
          </p>
          <h1
            className="mt-4 max-w-4xl font-[family-name:var(--font-heading)] font-semibold leading-[1.02] tracking-[-2px] text-[var(--text-primary)]"
            style={{ fontSize: "clamp(40px, 6vw, 72px)" }}
          >
            {service.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-light leading-[1.8] text-[var(--text-secondary)]">
            {service.shortDesc}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
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

      <section className="bg-[var(--bg-800)] px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
              HOW WE DELIVER
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold leading-tight text-[var(--text-primary)] md:text-5xl">
              {service.processHeading}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {service.process.map((step, index) => (
              <article key={step.title} className="text-center">
                <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-primary-border)] text-sm font-semibold text-[var(--color-primary)]">
                  {index + 1}
                </div>
                <h3 className="mt-5 font-[family-name:var(--font-heading)] text-lg font-semibold text-[var(--text-primary)]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-[230px] text-[13px] font-light leading-[1.7] text-[var(--text-secondary)]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-900)] px-[5%] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
            TECH STACK
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--text-primary)]">
            Technologies we use
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {service.techStack.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-4 py-1.5 text-xs text-[var(--text-secondary)]"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-800)] px-[5%] py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
            DELIVERABLES
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold text-[var(--text-primary)]">
            What you receive
          </h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {service.deliverables.map((deliverable) => (
              <div key={deliverable} className="flex gap-2.5">
                <CheckCircle
                  size={16}
                  className="mt-1 shrink-0 text-[var(--color-primary)]"
                />
                <p className="text-sm leading-[1.7] text-[var(--text-secondary)]">
                  {deliverable}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--bg-900)] px-[5%] py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
              FAQ
            </p>
          </div>
          <ServiceFaq faqs={service.faqs} />
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
            Share the goal, timeline, and risk profile. We will help you choose
            the right path forward.
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
