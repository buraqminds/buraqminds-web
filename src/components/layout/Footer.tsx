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
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", background: "var(--bg-800)" }}>
      {/* Main grid */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "72px 5% 48px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.8fr 1fr 1fr 1fr 1.4fr",
          gap: "48px",
          alignItems: "start",
        }}>

          {/* Col 1 — Brand */}
          <div>
            <Link href="/" aria-label="Buraq Minds home" style={{ display: "inline-flex", marginBottom: "20px" }}>
              <BrandLogo width={140} height={40} style={{ height: "48px", width: "auto", objectFit: "contain" }} />
            </Link>
            <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: "24px", fontWeight: 300 }}>
              Buraq Minds engineers secure AI workflows, cloud-native platforms,
              cybersecurity programs, and scalable software systems for teams
              that need reliable execution.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "36px", height: "36px", borderRadius: "6px",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "var(--text-secondary)", transition: "all 0.2s",
                  }}
                >
                  <Icon style={{ width: "16px", height: "16px" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h5 style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "20px" }}>
              Services
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} style={{ fontSize: "13px", color: "var(--text-secondary)", textDecoration: "none", fontWeight: 300 }}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Company */}
          <div>
            <h5 style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "20px" }}>
              Company
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "13px", color: "var(--text-secondary)", textDecoration: "none", fontWeight: 300 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Legal */}
          <div>
            <h5 style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "20px" }}>
              Legal
            </h5>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: "13px", color: "var(--text-secondary)", textDecoration: "none", fontWeight: 300 }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5 — Get Started */}
          <div>
            <h5 style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-primary)", marginBottom: "20px" }}>
              Get Started
            </h5>
            <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: "20px", fontWeight: 300 }}>
              Ready to build something extraordinary? Let&apos;s talk about your project.
            </p>
            <Link
              href="/contact"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "100%", padding: "12px 20px",
                background: "var(--color-primary)", color: "white",
                borderRadius: "4px", fontSize: "13px", fontWeight: 600,
                textDecoration: "none", letterSpacing: "0.03em",
                textAlign: "center",
              }}
            >
              Book Free Consultation
            </Link>
            <a
              href="mailto:info@buraqminds.com"
              style={{
                display: "block", marginTop: "10px", fontSize: "12px",
                color: "var(--text-muted)", textDecoration: "none", textAlign: "center",
              }}
            >
              info@buraqminds.com
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{
          maxWidth: "1280px", margin: "0 auto", padding: "16px 5%",
          display: "flex", justifyContent: "space-between",
          alignItems: "center", flexWrap: "wrap", gap: "12px",
        }}>
          <p style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            © {year} Buraq Minds. All rights reserved.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <Link href="/privacy" style={{ fontSize: "12px", color: "var(--text-muted)", textDecoration: "none" }}>Privacy</Link>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <Link href="/terms" style={{ fontSize: "12px", color: "var(--text-muted)", textDecoration: "none" }}>Terms</Link>
            <span style={{ color: "var(--text-muted)" }}>·</span>
            <Link href="/sitemap" style={{ fontSize: "12px", color: "var(--text-muted)", textDecoration: "none" }}>Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
