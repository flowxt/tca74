"use client";

import { useState } from "react";
import { programme } from "./data";

export default function EcloreProgramme() {
  const [ouvert, setOuvert] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {programme.map((module, i) => {
        const isOuvert = ouvert === i;
        return (
          <div
            key={module.titre}
            className="eclore-card overflow-hidden"
            style={{ borderRadius: "20px" }}
          >
            <button
              onClick={() => setOuvert(isOuvert ? null : i)}
              className="w-full flex items-center gap-4 text-left px-5 md:px-7 py-5 transition-colors"
              aria-expanded={isOuvert}
            >
              <span
                className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-sm font-semibold"
                style={{
                  background: isOuvert
                    ? "linear-gradient(135deg, var(--or) 0%, var(--or-profond) 100%)"
                    : "var(--sable)",
                  color: isOuvert ? "#fff" : "var(--or-profond)",
                  fontFamily: "var(--font-cinzel)",
                }}
              >
                {i === 0 ? "✦" : i}
              </span>

              <span
                className="flex-1 text-base md:text-lg"
                style={{ fontFamily: "var(--font-cinzel)", color: "var(--encre)" }}
              >
                {module.titre}
              </span>

              <svg
                className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                  isOuvert ? "rotate-180" : ""
                }`}
                style={{ color: "var(--or-profond)" }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div
              className={`grid transition-all duration-300 ease-out ${
                isOuvert ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="px-5 md:px-7 pb-6 pl-16 md:pl-[4.75rem] space-y-2.5">
                  {module.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm md:text-base">
                      <span
                        className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: "var(--or-clair)" }}
                      />
                      <span style={{ color: "var(--encre-douce)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
