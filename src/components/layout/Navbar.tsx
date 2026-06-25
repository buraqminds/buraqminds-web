"use client";

import { siteConfig } from "@/lib/config";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const pageLinks = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
  { label: "Cost Estimator", href: "/#estimator" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinkClass =
    "text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 z-50 h-[72px] w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/[0.06] bg-[var(--bg-900)]/95 backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex h-10 items-center"
          aria-label="Buraq Minds home"
        >
          <Image
            src="/logo.svg"
            alt="Buraq Minds"
            width={130}
            height={36}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className={cn(
                navLinkClass,
                "inline-flex items-center gap-1",
                servicesOpen && "text-[var(--text-primary)]",
              )}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 top-full z-50 mt-3 w-[560px] -translate-x-1/2 rounded-[4px] border border-white/[0.08] bg-[var(--bg-800)]/95 p-2 backdrop-blur-xl"
                >
                  <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
                    {siteConfig.services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="group relative block bg-[var(--bg-800)] px-4 py-4 transition-colors hover:bg-[var(--bg-700)]"
                        onClick={() => setServicesOpen(false)}
                      >
                        <span className="block text-sm font-medium text-[var(--text-primary)]">
                          {service.title}
                        </span>
                        <span className="mt-1 block text-xs leading-relaxed text-[var(--text-muted)]">
                          {service.shortDesc}
                        </span>
                        <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-[var(--color-primary)] transition-transform duration-300 group-hover:scale-x-100" />
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {pageLinks.map((link) => (
            <Link key={link.href} href={link.href} className={navLinkClass}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/[0.08] text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary-border)] hover:text-[var(--color-primary)]"
          >
            {mounted && theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </button>

          <Link
            href="#estimator"
            className="hidden rounded-[4px] bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)] sm:inline-flex"
          >
            Get a Quote
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/[0.08] text-[var(--text-primary)] transition-colors hover:border-[var(--color-primary-border)] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-b border-white/[0.06] bg-[var(--bg-900)]/98 backdrop-blur-xl lg:hidden"
          >
            <div className="space-y-1 px-4 py-4 sm:px-6">
              <div className="px-3 pt-2 pb-1 text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Services
              </div>

              {siteConfig.services.map((service) => (
                <Link
                  key={`mobile-all-${service.slug}`}
                  href={`/services/${service.slug}`}
                  className="block rounded-[4px] px-3 py-2 text-sm text-[var(--text-muted)] transition-colors hover:bg-[var(--bg-800)] hover:text-[var(--text-primary)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.title}
                </Link>
              ))}

              {pageLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-[4px] px-3 py-2.5 text-sm font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-800)] hover:text-[var(--text-primary)]"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="#estimator"
                className="mt-3 flex w-full items-center justify-center rounded-[4px] bg-[var(--color-primary)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-light)]"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
