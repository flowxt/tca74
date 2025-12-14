"use client";

import { useEffect, useState } from "react";

const words = ["S'affirmer.", "Se connaître.", "Se respecter.", "Se relier."];

export default function AnimatedWords() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < words.length) return prev + 1;
        return prev;
      });
    }, 400); // 400ms entre chaque mot

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {words.map((word, i) => (
        <span
          key={i}
          className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
            i < visibleCount
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75"
          }`}
          style={{
            background: "var(--bg-white)",
            color: "var(--brun)",
            border: "1px solid var(--rose-medium)",
            boxShadow: i < visibleCount ? "0 4px 15px rgba(154, 123, 111, 0.15)" : "none",
          }}
        >
          {word}
        </span>
      ))}
    </div>
  );
}

