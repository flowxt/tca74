"use client";

import { useState } from "react";
import { faq } from "./data";

export default function EcloreFaq() {
  const [ouvert, setOuvert] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faq.map((item, i) => {
        const isOuvert = ouvert === i;
        return (
          <div key={item.q} className="eclore-card overflow-hidden" style={{ borderRadius: "20px" }}>
            <button
              onClick={() => setOuvert(isOuvert ? null : i)}
              className="w-full flex items-start gap-4 text-left px-5 md:px-7 py-5"
              aria-expanded={isOuvert}
            >
              <span
                className="flex-1 text-base md:text-lg leading-snug"
                style={{ fontFamily: "var(--font-cinzel)", color: "var(--encre)" }}
              >
                {item.q}
              </span>
              <span
                className="w-7 h-7 shrink-0 rounded-full flex items-center justify-center mt-0.5"
                style={{ background: isOuvert ? "var(--or-lumiere)" : "var(--sable)" }}
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${isOuvert ? "rotate-180" : ""}`}
                  style={{ color: "var(--or-profond)" }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOuvert ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p
                  className="px-5 md:px-7 pb-6 text-base leading-relaxed"
                  style={{ color: "var(--encre-douce)" }}
                >
                  {item.r}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
