import BrandLogo from "@/components/layout/BrandLogo";
import { siteConfig } from "@/lib/config";
import { services } from "@/content/services";
import Link from "next/link";
import type { SVGProps } from "react";

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M14 8.5h2.5l.5-3H14V4c0-.8.2-1.4 1.4-1.4H17V.1C16.6.1 15.3 0 13.8 0 10.7 0 8.7 1.8 8.7 5.1V5.5H6v3h2.7V24h4.3V8.5Z" />
    </svg>
  );
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...props}>
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

function TwitterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
] as const;

const legalLinks = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
  { label: "Cookies", href: "/cookies" },
  { label: "Contact", href: "/contact" },
] as const;

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
  { label: "Twitter", href: siteConfig.social.twitter, icon: TwitterIcon },
] as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[var(--bg-800)]">
      <div className="border-b border-white/[0.06] bg-black/10 px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]">
            Intelligence. Security. Innovation.
          </span>
          <span className="text-sm leading-6 text-[var(--text-secondary)]">
            Secure AI, cybersecurity, cloud, and software delivery for teams
            building systems that must perform in production.
          </span>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pt-[72px] pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div>
            <Link
              href="/"
              className="mb-5 inline-flex items-center"
              aria-label="Buraq Minds home"
            >
              <BrandLogo
                className="h-12 w-auto object-contain sm:h-14"
                width={240}
                height={56}
              />
            </Link>
            <p className="mb-6 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
              Buraq Minds engineers secure AI workflows, cloud-native
              platforms, cybersecurity programs, and scalable software systems
              for teams that need reliable execution.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] text-[var(--text-secondary)] transition-colors hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h5 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Services
            </h5>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Company
            </h5>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[var(--text-primary)]">
              Legal
            </h5>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--color-primary)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-sm text-[var(--text-muted)] sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Buraq Minds. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              Privacy
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/terms"
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              Terms
            </Link>
            <span aria-hidden="true">·</span>
            <Link
              href="/sitemap"
              className="transition-colors hover:text-[var(--text-primary)]"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
