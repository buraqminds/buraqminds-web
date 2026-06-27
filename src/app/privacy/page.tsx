export function generateMetadata() {
  return {
    title: "Privacy Policy",
    description: "Privacy Policy for Buraq Minds.",
  };
}

export default function PrivacyPage() {
  return (
    <main className="bg-[var(--bg-900)] px-[5%] pt-[120px] pb-24 font-[family-name:var(--font-body)]">
      <article className="mx-auto max-w-[800px]">
        <h1
          className="font-[family-name:var(--font-heading)] font-semibold leading-tight tracking-[-1.5px] text-[var(--text-primary)]"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Privacy Policy
        </h1>
        <p className="mt-4 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          Last updated January 2026.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          Data We Collect
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          We collect information you submit through contact forms, including
          your name, email address, selected service, budget range, and project
          message. Form submissions may be stored in Firebase Firestore so our
          team can respond and manage inquiries.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          How We Use Information
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          We use submitted information to respond to inquiries, understand
          project requirements, prepare proposals, improve our services, and
          maintain business records. We do not sell personal information.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          GDPR Rights
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          Where applicable, you may request access, correction, deletion, or
          restriction of your personal data. You may also object to processing
          or request a portable copy of information you provided.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          Cookies
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          We may use essential cookies required for site functionality and GA4
          analytics cookies to understand aggregate website usage. We do not use
          advertising cookies.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          Contact
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          For privacy questions or data requests, contact us at
          info@buraqminds.com. Buraq Minds is based in Rawalpindi, Pakistan.
        </p>
      </article>
    </main>
  );
}
