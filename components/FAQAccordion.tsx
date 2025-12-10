"use client";

import { useState } from "react";

type Question = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  questions: Question[];
  categoryIndex: number;
};

export default function FAQAccordion({ questions, categoryIndex }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const formatAnswer = (answer: string) => {
    // Convert markdown-style bold to JSX
    const parts = answer.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} style={{ color: "var(--brun)" }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  return (
    <div className="space-y-4">
      {questions.map((q, index) => {
        const isOpen = openIndex === index;
        const uniqueId = `faq-${categoryIndex}-${index}`;

        return (
          <div
            key={uniqueId}
            className="card overflow-hidden transition-all duration-300"
            style={{
              borderColor: isOpen ? "var(--rose-accent)" : "transparent",
              borderWidth: "2px",
            }}
          >
            <button
              onClick={() => toggleQuestion(index)}
              className="w-full flex items-start justify-between gap-4 text-left p-2"
              aria-expanded={isOpen}
              aria-controls={`${uniqueId}-content`}
            >
              <span
                className="text-lg font-medium leading-snug"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
              >
                {q.question}
              </span>
              <span
                className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </span>
            </button>

            <div
              id={`${uniqueId}-content`}
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div
                className="pt-4 mt-4 whitespace-pre-line text-base leading-relaxed"
                style={{
                  borderTop: "1px solid var(--rose-pale)",
                  color: "var(--text-medium)",
                }}
              >
                {formatAnswer(q.answer)}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

