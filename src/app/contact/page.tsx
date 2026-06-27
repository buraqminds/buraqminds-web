"use client";

import { siteConfig } from "@/lib/config";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CheckCircle,
  Clock,
  Mail,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import type { SVGProps } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your name."),
  email: z.string().email("Enter a valid email."),
  service: z.string().min(1, "Select a service."),
  budget: z.string().min(1, "Select a budget."),
  message: z.string().min(20, "Tell us a little more about the project."),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const services = [
  "SaaS Development",
  "Cybersecurity & VAPT",
  "Cloud & DevOps",
  "AI & Machine Learning",
  "Mobile App Development",
  "Blockchain Solutions",
  "QA Automation",
  "Web Development",
  "Staff Augmentation",
] as const;

const budgets = [
  "Under $5,000",
  "$5,000-$15,000",
  "$15,000-$50,000",
  "$50,000+",
] as const;

const contactItems = [
  { icon: Mail, text: "info@buraqminds.com" },
  { icon: MapPin, text: "Rawalpindi, Punjab, Pakistan" },
  { icon: Clock, text: "Within 24 hours, Mon-Fri" },
] as const;

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 8.5h2.5l.5-3H14V4c0-.8.2-1.4 1.4-1.4H17V.1C16.6.1 15.3 0 13.8 0 10.7 0 8.7 1.8 8.7 5.1V5.5H6v3h2.7V24h4.3V8.5Z" />
    </svg>
  );
}

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-1 1.8-2.2 3.8-2.2 4 0 4.8 2.6 4.8 6.1V24h-4v-7.1c0-1.7 0-3.9-2.4-3.9s-2.8 1.9-2.8 3.8V24h-4V8z" />
    </svg>
  );
}

const socialItems = [
  { icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  { icon: LinkedinIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
] as const;

const inputClass =
  "w-full rounded-[4px] border border-white/[0.08] bg-[var(--bg-700)] px-4 py-3 font-[family-name:var(--font-body)] text-sm text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-muted)] focus:border-[var(--color-primary)]";

const labelClass =
  "mb-1.5 block text-[11px] uppercase tracking-[0.1em] text-[var(--text-secondary)]";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return (
    <span className="mt-1 block text-xs text-[var(--color-primary)]">
      {message}
    </span>
  );
}

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  useEffect(() => {
    document.title = "Contact Us | Buraq Minds";
  }, []);

  const onSubmit = async (values: ContactFormValues) => {
    setError("");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (response.ok) {
      setSuccess(true);
      return;
    }

    setError("Something went wrong.");
  };

  return (
    <main className="bg-[var(--bg-900)] px-[5%] pt-[120px] pb-24 font-[family-name:var(--font-body)]">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-12 lg:flex-row lg:gap-20">
        <section className="max-w-[380px] shrink-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-primary)]">
            GET IN TOUCH
          </p>
          <h1
            className="mt-3.5 font-[family-name:var(--font-heading)] font-semibold leading-[1.06] tracking-[-1.5px] text-[var(--text-primary)]"
            style={{ fontSize: "clamp(32px, 4vw, 52px)" }}
          >
            Let&apos;s build something together
          </h1>
          <p className="mt-4 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
            Tell us what you are building, where security matters, and what
            timeline you need. We will respond with a clear next step.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.text} className="flex items-center gap-3">
                  <Icon size={16} className="text-[var(--color-primary)]" />
                  <span className="text-sm text-[var(--text-secondary)]">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-7 flex gap-2.5">
            {socialItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-[4px] border border-white/[0.08] text-[var(--text-secondary)] transition-colors hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </section>

        <section className="w-full flex-1 rounded-[4px] border border-white/[0.06] bg-[var(--bg-800)] p-6 sm:p-10">
          {success ? (
            <div className="flex min-h-[430px] flex-col items-center justify-center text-center">
              <CheckCircle size={40} className="text-[var(--color-primary)]" />
              <h3 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-semibold text-[var(--text-primary)]">
                Message sent!
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                We&apos;ll be in touch within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Smith"
                  className={inputClass}
                  {...register("name")}
                />
                <FieldError message={errors.name?.message} />
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@company.com"
                  className={inputClass}
                  {...register("email")}
                />
                <FieldError message={errors.email?.message} />
              </div>

              <div>
                <label htmlFor="service" className={labelClass}>
                  Service
                </label>
                <select id="service" className={inputClass} {...register("service")}>
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.service?.message} />
              </div>

              <div>
                <label htmlFor="budget" className={labelClass}>
                  Budget
                </label>
                <select id="budget" className={inputClass} {...register("budget")}>
                  <option value="">Select a budget</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
                <FieldError message={errors.budget?.message} />
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us about your project..."
                  className={inputClass}
                  {...register("message")}
                />
                <FieldError message={errors.message?.message} />
              </div>

              {error && (
                <p className="text-xs text-[var(--color-primary)]">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-[4px] bg-[var(--color-primary)] p-3.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </section>
      </div>
    </main>
  );
}
