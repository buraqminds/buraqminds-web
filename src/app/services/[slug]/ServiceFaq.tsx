"use client";

import { useState } from "react";

type ServiceFaqProps = {
  faqs: {
    question: string;
    answer: string;
  }[];
};

export default function ServiceFaq({ faqs }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto mt-12 max-w-3xl">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={faq.question} className="border-b border-white/[0.06]">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-[family-name:var(--font-heading)] text-lg text-[var(--text-primary)]">
                {faq.question}
              </span>
              <span className="text-xl text-[var(--color-primary)]">
                {isOpen ? "-" : "+"}
              </span>
            </button>
            {isOpen && (
              <p className="pb-5 text-sm font-light leading-[1.75] text-[var(--text-secondary)]">
                {faq.answer}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
