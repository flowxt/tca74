"use client";

import { useEffect, useState } from "react";
import { CANDIDATURE_URL } from "./data";

const links = [
  { href: "#pour-vous", label: "Pour vous" },
  { href: "#approche", label: "L'approche" },
  { href: "#laura", label: "Laura" },
  { href: "#formules", label: "Les formules" },
];

export default function EcloreNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-2 shadow-sm" : "py-4"
      }`}
      style={{
        background: isScrolled ? "rgba(253, 249, 240, 0.94)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span
            className="text-lg md:text-xl tracking-[0.3em]"
            style={{ fontFamily: "var(--font-cinzel)", color: "var(--encre)" }}
          >
            ÉCLORE
          </span>
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: "var(--or-profond)" }}>
            par Laura Baud
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition-colors hover:opacity-70"
              style={{ color: "var(--encre-douce)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CANDIDATURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eclore-btn !py-2.5 !px-6 !text-sm"
          >
            Première rencontre
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2"
          style={{ color: "var(--encre)" }}
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>
      </nav>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(253, 249, 240, 0.98)" }}
      >
        <div className="px-6 py-5 flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="py-1.5 text-base"
              style={{ color: "var(--encre-douce)" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href={CANDIDATURE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="eclore-btn mt-2 !py-3"
          >
            Première rencontre
          </a>
        </div>
      </div>
    </header>
  );
}
