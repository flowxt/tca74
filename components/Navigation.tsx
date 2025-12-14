"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const mainNavItems = [
  { href: "/", label: "Accueil" },
  { href: "/questionnaire", label: "Quiz" },
];

const servicesItems = [
  { href: "/groupes-paroles-tca", label: "Groupes TCA", desc: "Psycho-éducation & paroles" },
  { href: "/formation", label: "Programmes", desc: "En ligne & autonomie" },
  { href: "/offres", label: "Mes offres", desc: "Tarifs & formules" },
];

const ressourcesItems = [
  { href: "/blog", label: "Blog", desc: "Articles & conseils" },
  { href: "/faq", label: "FAQ", desc: "Questions fréquentes" },
  { href: "/actualites", label: "Actualités", desc: "Nouveautés & à venir" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 md:w-12 md:h-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo-remove.png"
              alt="Logo - Accompagnement TCA"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <span
              className="block text-base md:text-lg font-medium leading-tight"
              style={{ color: "var(--brun-fonce)", fontFamily: "var(--font-playfair)" }}
            >
              Laura Baud
            </span>
            <span
              className="block text-xs leading-tight"
              style={{ color: "var(--text-light)" }}
            >
              Thérapeute TCA • Émotions
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
          {/* Main nav items */}
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link px-3 py-2 text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className="nav-link px-3 py-2 text-sm font-medium flex items-center gap-1"
            >
              Accompagnement
              <svg
                className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "services" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {activeDropdown === "services" && (
              <div
                className="absolute top-full left-0 mt-2 w-64 rounded-2xl shadow-xl overflow-hidden animate-fade-in"
                style={{ background: "var(--bg-white)", border: "1px solid var(--rose-pale)" }}
              >
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-3 transition-colors hover:bg-[var(--rose-pale)]"
                  >
                    <span className="block text-sm font-medium" style={{ color: "var(--text-dark)" }}>
                      {item.label}
                    </span>
                    <span className="block text-xs" style={{ color: "var(--text-light)" }}>
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Ressources Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("ressources")}
              className="nav-link px-3 py-2 text-sm font-medium flex items-center gap-1"
            >
              Ressources
              <svg
                className={`w-3.5 h-3.5 transition-transform ${activeDropdown === "ressources" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {activeDropdown === "ressources" && (
              <div
                className="absolute top-full left-0 mt-2 w-56 rounded-2xl shadow-xl overflow-hidden animate-fade-in"
                style={{ background: "var(--bg-white)", border: "1px solid var(--rose-pale)" }}
              >
                {ressourcesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className="block px-4 py-3 transition-colors hover:bg-[var(--rose-pale)]"
                  >
                    <span className="block text-sm font-medium" style={{ color: "var(--text-dark)" }}>
                      {item.label}
                    </span>
                    <span className="block text-xs" style={{ color: "var(--text-light)" }}>
                      {item.desc}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className="nav-link px-3 py-2 text-sm font-medium"
          >
            Contact
          </Link>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="btn-primary text-sm ml-2 !py-2 !px-4"
          >
            Prendre RDV
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--brun)" }}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-2 max-h-[80vh] overflow-y-auto">
          {/* Main items */}
          {mainNavItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium py-2 transition-colors"
              style={{ color: "var(--text-medium)" }}
            >
              {item.label}
            </Link>
          ))}
          
          {/* Services section */}
          <div className="py-2">
            <span
              className="text-xs font-medium tracking-wider uppercase mb-2 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Accompagnement
            </span>
            {servicesItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 pl-3 transition-colors"
                style={{ color: "var(--text-medium)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Ressources section */}
          <div className="py-2">
            <span
              className="text-xs font-medium tracking-wider uppercase mb-2 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Ressources
            </span>
            {ressourcesItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 pl-3 transition-colors"
                style={{ color: "var(--text-medium)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-base font-medium py-2 transition-colors"
            style={{ color: "var(--text-medium)" }}
          >
            Contact
          </Link>
          
          {/* CTA */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary text-center mt-4"
          >
            Prendre RDV
          </Link>
        </div>
      </div>
    </header>
  );
}
