"use client";

import { useEffect, useRef, useState } from "react";
import { lettres } from "./data";

export default function EcloreLettres() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* Le mot ÉCLORE, chaque lettre dans son œuf — sur une seule ligne, même sur mobile */}
      <div className="flex flex-nowrap justify-center gap-1.5 sm:gap-5 md:gap-7 mb-14">
        {lettres.map((item, i) => (
          <div
            key={i}
            className={`eclore-oeuf shrink-0 flex items-center justify-center w-10 h-13 sm:w-16 sm:h-20 md:w-20 md:h-26 ${
              visible ? "eclore-oeuf-eclot" : "eclore-oeuf-cache"
            }`}
            style={{ animationDelay: visible ? `${i * 130}ms, ${i * 130 + 750}ms` : undefined }}
          >
            <span
              className="text-lg sm:text-3xl md:text-4xl text-white select-none"
              style={{
                fontFamily: "var(--font-cinzel)",
                textShadow: "0 2px 6px rgba(122, 84, 20, 0.45)",
              }}
            >
              {item.lettre}
            </span>
          </div>
        ))}
      </div>

      {/* La signification de chaque lettre */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lettres.map((item, i) => (
          <div key={i} className="eclore-card eclore-card-hover p-7 flex flex-col">
            <div className="flex items-center gap-4 mb-4">
              <span
                className="eclore-oeuf w-11 h-14 flex items-center justify-center shrink-0"
                aria-hidden
              >
                <span
                  className="text-xl text-white"
                  style={{
                    fontFamily: "var(--font-cinzel)",
                    textShadow: "0 2px 5px rgba(122, 84, 20, 0.4)",
                  }}
                >
                  {item.lettre}
                </span>
              </span>
              <h3 className="text-lg leading-snug">{item.titre}</h3>
            </div>
            <p className="text-base leading-relaxed" style={{ color: "var(--encre-douce)" }}>
              {item.texte}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
