export function generateMetadata() {
  return {
    title: "Terms of Service",
    description: "Terms of Service for Buraq Minds.",
  };
}

export default function TermsPage() {
  return (
    <main className="bg-[var(--bg-900)] px-[5%] pt-[120px] pb-24 font-[family-name:var(--font-body)]">
      <article className="mx-auto max-w-[800px]">
        <h1
          className="font-[family-name:var(--font-heading)] font-semibold leading-tight tracking-[-1.5px] text-[var(--text-primary)]"
          style={{ fontSize: "clamp(36px, 5vw, 56px)" }}
        >
          Terms of Service
        </h1>
        <p className="mt-4 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          Last updated January 2026.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          Acceptance
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          By using this website or requesting services from Buraq Minds, you
          agree to these Terms of Service and any written agreement or proposal
          that applies to your engagement.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          Services
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          Buraq Minds provides software engineering, AI, cybersecurity, cloud,
          QA automation, web, mobile, blockchain, and staff augmentation
          services. Specific scope, fees, timelines, and deliverables are
          defined in written project documents.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          Intellectual Property
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          Unless otherwise agreed in writing, client-specific work product is
          assigned to the client after full payment. Buraq Minds retains rights
          to pre-existing tools, reusable methods, internal know-how, and
          general technical knowledge.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          Liability Limits
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          To the maximum extent permitted by law, Buraq Minds is not liable for
          indirect, incidental, special, consequential, or punitive damages.
          Any direct liability is limited to the amount paid for the specific
          service giving rise to the claim.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          Confidentiality
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          We treat client information with care. A mutual NDA is available on
          request before detailed project discussions or access to confidential
          systems.
        </p>

        <h2 className="mt-10 font-[family-name:var(--font-heading)] text-[22px] font-semibold text-[var(--text-primary)]">
          Governing Law
        </h2>
        <p className="mt-3 text-[15px] font-light leading-[1.8] text-[var(--text-secondary)]">
          These terms are governed by the laws of Pakistan, unless a written
          agreement between the parties states otherwise.
        </p>
      </article>
    </main>
  );
}
