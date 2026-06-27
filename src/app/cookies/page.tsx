export function generateMetadata() {
  return {
    title: "Cookie Policy",
    description: "Cookie Policy for Buraq Minds.",
  };
}

export default function CookiesPage() {
  return (
    <main className="bg-[var(--bg-900)] px-[5%] pt-[120px] pb-24 font-[family-name:var(--font-body)]">
      <article className="mx-auto max-w-[800px]">
        <h1
          className="font-[family-name:var(--font-heading)] font-semibold leading-tight tracking-[-1.5px] text-[var(--text-primary)]"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Cookie Policy
        </h1>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          What Cookies Are
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          Cookies are small files stored by your browser to help websites
          remember basic preferences, support functionality, and understand how
          visitors use a site.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          Essential Cookies
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          Essential cookies may be used to support core website functionality,
          security, theme behavior, forms, and reliable page navigation.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          GA4 Analytics Cookies
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          We may use Google Analytics 4 cookies to understand aggregate traffic,
          page performance, and visitor behavior. Analytics data helps us improve
          content and user experience.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          No Advertising Cookies
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          We do not use advertising cookies or behavioral ad tracking cookies on
          this website.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          How To Disable Cookies
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          You can disable or delete cookies in your browser settings. Some
          website features may not work as expected if essential cookies are
          blocked.
        </p>
      </article>
    </main>
  );
}
