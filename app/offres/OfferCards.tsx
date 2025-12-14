"use client";

import { useState } from "react";
import Link from "next/link";

interface Feature {
  text: string;
  included: boolean;
  highlight?: boolean;
}

interface Offer {
  id: string;
  name: string;
  price: number;
  icon: string;
  tagline: string;
  description: string;
  longDescription: string;
  features: Feature[];
  mailRules?: string[];
  cta: string;
}

const offers: Offer[] = [
  {
    id: "standard",
    name: "Consultation Standard",
    price: 90,
    icon: "🌿",
    tagline: "L'essentiel pour commencer",
    description: "Pour travailler sur une problématique ciblée ou répondre à un besoin ponctuel",
    longDescription:
      "La consultation standard est idéale pour découvrir mon accompagnement, travailler sur une problématique précise ou avancer pas à pas à votre rythme. Chaque séance est un espace de parole et de travail adapté à vos besoins du moment.",
    features: [
      { text: "Séance d'1h en cabinet ou en visio", included: true },
      { text: "Travail sur une problématique ciblée", included: true },
      { text: "Outils personnalisés", included: true },
      { text: "Flexibilité dans la fréquence", included: true },
      { text: "Mails de suivi personnalisés", included: false },
      { text: "Accompagnement entre les séances", included: false },
    ],
    cta: "Réserver une consultation",
  },
  {
    id: "premium",
    name: "Accompagnement Premium",
    price: 130,
    icon: "✨",
    tagline: "L'expérience complète",
    description: "Un suivi renforcé pour celles et ceux qui souhaitent aller plus loin",
    longDescription:
      "L'accompagnement premium est conçu pour vous offrir un soutien continu entre les séances. Grâce aux mails de suivi, vous restez connectée à votre travail thérapeutique et pouvez avancer plus efficacement vers vos objectifs.",
    features: [
      { text: "Séance d'1h en cabinet ou en visio", included: true },
      { text: "Travail sur une problématique ciblée", included: true },
      { text: "Outils personnalisés", included: true },
      { text: "Flexibilité dans la fréquence", included: true },
      { text: "2 mails de suivi personnalisés", included: true, highlight: true },
      { text: "Accompagnement continu", included: true, highlight: true },
    ],
    mailRules: [
      "1 page maximum par mail",
      "2 questions précises par mail",
      "Réponse adaptée à votre contexte",
    ],
    cta: "Choisir le Premium",
  },
];

export default function OfferCards() {
  const [activeIndex, setActiveIndex] = useState(1); // Premium par défaut
  const offer = offers[activeIndex];
  const isPremium = offer.id === "premium";

  return (
    <div className="max-w-2xl mx-auto">
      {/* Tabs de sélection */}
      <div className="flex justify-center mb-12">
        <div
          className="inline-flex p-1.5 rounded-full gap-2"
          style={{ background: "rgba(212, 181, 169, 0.2)" }}
        >
          {offers.map((o, i) => (
            <button
              key={o.id}
              onClick={() => setActiveIndex(i)}
              className={`px-6 py-3.5 rounded-full font-medium transition-all duration-300 flex items-center gap-3 ${
                activeIndex === i ? "shadow-lg" : "hover:bg-white/50"
              }`}
              style={{
                background: activeIndex === i
                  ? i === 1
                    ? "linear-gradient(135deg, var(--accent-lavande) 0%, var(--brun-doux) 100%)"
                    : "linear-gradient(135deg, var(--accent-sage) 0%, var(--brun-doux) 100%)"
                  : "transparent",
                color: activeIndex === i ? "white" : "var(--brun)",
              }}
            >
              <span className="text-xl">{o.icon}</span>
              <span>{o.name}</span>
              <span
                className="px-2.5 py-1 rounded-full text-sm font-bold"
                style={{
                  background: activeIndex === i ? "rgba(255,255,255,0.25)" : "rgba(154, 123, 111, 0.15)",
                  color: activeIndex === i ? "white" : "var(--brun)",
                }}
              >
                {o.price}€
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Carte */}
      <div
        key={offer.id}
        className="relative rounded-[2rem] overflow-hidden animate-fade-in"
        style={{
          background: isPremium
            ? "linear-gradient(145deg, rgba(197, 184, 200, 0.15) 0%, rgba(255, 255, 255, 1) 50%, rgba(212, 181, 169, 0.1) 100%)"
            : "var(--bg-cream)",
          border: isPremium
            ? "2px solid var(--accent-lavande)"
            : "1px solid rgba(212, 181, 169, 0.3)",
          boxShadow: isPremium
            ? "0 25px 80px rgba(197, 184, 200, 0.4), 0 0 0 4px rgba(197, 184, 200, 0.1)"
            : "0 20px 60px rgba(154, 123, 111, 0.15)",
        }}
      >
        {/* Effets Premium - dans la charte graphique */}
        {isPremium && (
          <>
            {/* Cercles décoratifs subtils */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div
                className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-20"
                style={{ background: "var(--accent-lavande)" }}
              />
              <div
                className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-15"
                style={{ background: "var(--peche)" }}
              />
            </div>

            {/* Badge Premium élégant */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-2.5"
              style={{
                background: "linear-gradient(135deg, var(--accent-lavande) 0%, var(--brun-doux) 100%)",
                borderRadius: "0 0 16px 16px",
                boxShadow: "0 4px 15px rgba(197, 184, 200, 0.4)",
              }}
            >
              <span className="text-sm font-bold tracking-wide text-white">
                ✨ RECOMMANDÉ
              </span>
            </div>
          </>
        )}

        <div className={`relative p-10 md:p-14 ${isPremium ? "pt-20" : ""}`}>
          {/* Header */}
          <div className="text-center mb-10">
            <span className="text-6xl mb-6 block">{offer.icon}</span>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--text-dark)",
              }}
            >
              {offer.name}
            </h2>
            <p
              className="text-lg font-medium mb-4"
              style={{ color: isPremium ? "var(--accent-lavande)" : "var(--brun-doux)" }}
            >
              {offer.tagline}
            </p>
            <p style={{ color: "var(--text-medium)" }}>
              {offer.description}
            </p>
          </div>

          {/* Prix */}
          <div
            className="text-center py-8 mb-10 rounded-2xl"
            style={{
              background: isPremium
                ? "linear-gradient(135deg, rgba(197, 184, 200, 0.2) 0%, rgba(212, 181, 169, 0.15) 100%)"
                : "rgba(168, 181, 160, 0.15)",
              border: isPremium ? "1px solid rgba(197, 184, 200, 0.3)" : "none",
            }}
          >
            <div className="flex items-baseline justify-center gap-2">
              <span
                className="text-7xl font-bold"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--brun)",
                }}
              >
                {offer.price}
              </span>
              <span
                className="text-2xl"
                style={{ color: "var(--text-light)" }}
              >
                €
              </span>
            </div>
            <span style={{ color: "var(--text-light)" }}>
              par séance
            </span>
          </div>

          {/* Description longue */}
          <p
            className="mb-10 text-lg leading-relaxed text-center"
            style={{ color: "var(--text-medium)" }}
          >
            {offer.longDescription}
          </p>

          {/* Features */}
          <div className="mb-10">
            <h3
              className="text-sm font-bold tracking-widest uppercase mb-6 text-center"
              style={{ color: isPremium ? "var(--accent-lavande)" : "var(--accent-sage)" }}
            >
              Ce qui est inclus
            </h3>
            <div className="space-y-4">
              {offer.features.map((feature, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-4 p-4 rounded-xl transition-all ${
                    feature.highlight ? "scale-[1.02]" : ""
                  }`}
                  style={{
                    background: feature.highlight
                      ? "linear-gradient(135deg, rgba(197, 184, 200, 0.25) 0%, rgba(212, 181, 169, 0.15) 100%)"
                      : isPremium
                      ? "rgba(197, 184, 200, 0.08)"
                      : "rgba(168, 181, 160, 0.1)",
                    border: feature.highlight ? "1px solid var(--accent-lavande)" : "none",
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: feature.included
                        ? feature.highlight
                          ? "linear-gradient(135deg, var(--accent-lavande) 0%, var(--brun-doux) 100%)"
                          : isPremium
                          ? "rgba(197, 184, 200, 0.4)"
                          : "rgba(168, 181, 160, 0.4)"
                        : "rgba(200, 200, 200, 0.2)",
                    }}
                  >
                    {feature.included ? (
                      <svg
                        className="w-4 h-4"
                        style={{ color: feature.highlight ? "white" : "var(--brun)" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg
                        className="w-4 h-4"
                        style={{ color: "rgba(150, 150, 150, 0.5)" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </div>
                  <span
                    className={`text-lg ${feature.highlight ? "font-semibold" : ""}`}
                    style={{
                      color: feature.included
                        ? "var(--text-dark)"
                        : "rgba(150, 150, 150, 0.5)",
                      textDecoration: feature.included ? "none" : "line-through",
                    }}
                  >
                    {feature.text}
                  </span>
                  {feature.highlight && (
                    <span
                      className="ml-auto px-3 py-1 rounded-full text-xs font-bold"
                      style={{
                        background: "linear-gradient(135deg, var(--accent-lavande) 0%, var(--brun-doux) 100%)",
                        color: "white",
                      }}
                    >
                      BONUS
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Règles mails pour Premium */}
          {isPremium && offer.mailRules && (
            <div
              className="p-6 rounded-2xl mb-10"
              style={{
                background: "rgba(197, 184, 200, 0.1)",
                border: "1px solid rgba(197, 184, 200, 0.3)",
              }}
            >
              <h4 className="font-bold mb-4 flex items-center gap-2" style={{ color: "var(--brun)" }}>
                <span>📩</span> Comment fonctionnent les mails ?
              </h4>
              <ul className="space-y-2">
                {offer.mailRules.map((rule, i) => (
                  <li key={i} className="flex items-center gap-3" style={{ color: "var(--text-medium)" }}>
                    <span style={{ color: "var(--accent-lavande)" }}>•</span>
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* CTA */}
          <Link
            href="/contact"
            className="block w-full text-center py-5 px-8 rounded-full font-bold text-xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: isPremium
                ? "linear-gradient(135deg, var(--accent-lavande) 0%, var(--brun-doux) 100%)"
                : "linear-gradient(135deg, var(--accent-sage) 0%, var(--brun-doux) 100%)",
              color: "white",
              boxShadow: isPremium
                ? "0 10px 40px rgba(197, 184, 200, 0.5)"
                : "0 8px 30px rgba(168, 181, 160, 0.4)",
            }}
          >
            {offer.cta}
          </Link>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-10">
        {offers.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              background: activeIndex === i
                ? i === 1
                  ? "var(--accent-lavande)"
                  : "var(--accent-sage)"
                : "var(--rose-medium)",
              transform: activeIndex === i ? "scale(1.4)" : "scale(1)",
            }}
            aria-label={`Offre ${i + 1}`}
          />
        ))}
      </div>

      {/* Hint */}
      <p className="text-center mt-6 text-sm" style={{ color: "var(--text-light)" }}>
        Cliquez sur les onglets pour comparer les offres
      </p>
    </div>
  );
}

