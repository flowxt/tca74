"use client";

import { useState } from "react";

const formations = [
  {
    id: "stop-hyperphagie",
    title: "Stop Hyperphagie",
    subtitle: "Dites adieu à l'emprise de la nourriture",
    price: 50,
    originalPrice: 90,
    duration: "Accès illimité",
    format: "Vidéos + Exercices pratiques",
    link: "https://psy-tca-annecy.teachizy.fr/formations/stop-hyperphagie",
    guarantee: true,
    emoji: "🍃",
    description:
      "Apprenez à surmonter vos pulsions alimentaires et retrouvez la sérénité. Un programme complet basé sur plus de 10 ans d'expérience.",
    benefits: [
      {
        title: "Détectez les mécanismes",
        desc: "Comprenez les rouages de l'hyperphagie pour développer une approche efficace",
      },
      {
        title: "Identifiez vos émotions",
        desc: "Trouvez des réponses adaptées plutôt que de vous tourner vers la nourriture",
      },
      {
        title: "Repérez vos déclencheurs",
        desc: "Identifiez vos facteurs de stress pour mieux gérer les situations difficiles",
      },
      {
        title: "Retrouvez vos sensations",
        desc: "Reconnectez-vous à vos signaux de faim et de satiété",
      },
      {
        title: "Sortez des régimes",
        desc: "Libérez-vous de la tyrannie des restrictions qui aggravent les crises",
      },
      {
        title: "Outils concrets",
        desc: "Techniques pratiques pour stopper les crises et retrouver l'équilibre",
      },
    ],
    targetAudience: [
      "Femmes souffrant d'hyperphagie sans comportements compensatoires",
      "Femmes souffrant de grignotages compulsifs",
    ],
  },
  {
    id: "dire-non",
    title: "Dire non sans peur",
    subtitle: "Les outils concrets pour s'affirmer",
    price: 25,
    duration: "40 min de vidéo",
    format: "Vidéo + PDF complet (40 pages)",
    link: "https://psy-tca-annecy.teachizy.fr/formations/dire-non-sans-peur-les-outils-concrets-pour-saffirmer",
    guarantee: false,
    emoji: "✨",
    description:
      "Apprenez à vous affirmer de manière efficace et assertive. Osez dire non tout en respectant les autres et en gardant de bonnes relations.",
    benefits: [
      {
        title: "Découvrez vos résistances",
        desc: "Comprenez pourquoi vous n'arrivez pas à dire non",
      },
      {
        title: "Mesurez les impacts",
        desc: "Prenez conscience des conséquences du manque d'affirmation",
      },
      {
        title: "Les bénéfices de s'affirmer",
        desc: "Gagnez en confiance et en estime de vous",
      },
      {
        title: "Communication non violente",
        desc: "Apprenez les concepts clés pour communiquer avec assurance",
      },
      {
        title: "Exercices pratiques",
        desc: "Entraînez-vous immédiatement avec des mises en situation",
      },
      {
        title: "PDF complet fourni",
        desc: "40 pages de contenu à garder et relire à tout moment",
      },
    ],
    targetAudience: [
      "Personnes qui ont du mal à s'affirmer",
      "Celles qui disent oui par peur de déplaire",
      "Toute personne souhaitant poser des limites saines",
    ],
  },
];

export default function FormationCards() {
  const [activeIndex, setActiveIndex] = useState(0);
  const formation = formations[activeIndex];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tabs de sélection */}
      <div className="flex justify-center mb-10">
        <div
          className="inline-flex p-1.5 rounded-full gap-2"
          style={{ background: "rgba(212, 181, 169, 0.2)" }}
        >
          {formations.map((f, i) => (
            <button
              key={f.id}
              onClick={() => setActiveIndex(i)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${
                activeIndex === i
                  ? "shadow-lg"
                  : "hover:bg-white/50"
              }`}
              style={{
                background: activeIndex === i
                  ? "linear-gradient(135deg, var(--rose-accent) 0%, var(--brun-doux) 100%)"
                  : "transparent",
                color: activeIndex === i ? "white" : "var(--brun)",
              }}
            >
              <span>{f.emoji}</span>
              <span className="hidden sm:inline">{f.title}</span>
              <span className="sm:hidden">{f.title.split(" ")[0]}</span>
              <span
                className="px-2 py-0.5 rounded-full text-xs font-bold"
                style={{
                  background: activeIndex === i ? "rgba(255,255,255,0.2)" : "rgba(154, 123, 111, 0.15)",
                  color: activeIndex === i ? "white" : "var(--brun)",
                }}
              >
                {f.price}€
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Carte de formation */}
      <div
        key={formation.id}
        className="relative rounded-3xl overflow-hidden animate-fade-in"
        style={{
          background: "var(--bg-white)",
          boxShadow: "0 20px 60px rgba(154, 123, 111, 0.2)",
          border: "2px solid var(--rose-accent)",
        }}
      >
        {/* Badge */}
        {formation.guarantee && (
          <div
            className="absolute top-0 right-0 px-6 py-2 text-sm font-medium text-white"
            style={{
              background: "linear-gradient(135deg, var(--brun) 0%, var(--brun-doux) 100%)",
              borderRadius: "0 0 0 20px",
            }}
          >
            ⭐ Garantie remboursement
          </div>
        )}

        <div className="p-8 md:p-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="text-5xl mb-4">{formation.emoji}</div>
            <h3
              className="text-3xl md:text-4xl font-semibold mb-3"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
            >
              {formation.title}
            </h3>
            <p
              className="text-xl font-medium mb-4"
              style={{ color: "var(--brun-doux)" }}
            >
              {formation.subtitle}
            </p>
            <p className="max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
              {formation.description}
            </p>
          </div>

          {/* Prix */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 pb-10"
            style={{ borderBottom: "1px solid rgba(212, 181, 169, 0.3)" }}
          >
            <div className="flex items-baseline gap-3">
              <span
                className="text-5xl md:text-6xl font-bold"
                style={{ color: "var(--brun)", fontFamily: "var(--font-playfair)" }}
              >
                {formation.price}€
              </span>
              {formation.originalPrice && (
                <span
                  className="text-2xl line-through"
                  style={{ color: "var(--text-light)" }}
                >
                  {formation.originalPrice}€
                </span>
              )}
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <span
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "rgba(168, 181, 160, 0.3)", color: "var(--brun)" }}
              >
                {formation.duration}
              </span>
              <span
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "rgba(168, 181, 160, 0.3)", color: "var(--brun)" }}
              >
                {formation.format}
              </span>
            </div>
          </div>

          {/* Bénéfices en grille */}
          <div className="mb-10">
            <h4
              className="text-center text-sm font-medium tracking-widest uppercase mb-6"
              style={{ color: "var(--accent-sage)" }}
            >
              Ce que vous allez apprendre
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {formation.benefits.map((benefit, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                  style={{ background: "rgba(168, 181, 160, 0.1)" }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(168, 181, 160, 0.4)" }}
                  >
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="var(--brun)"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: "var(--text-dark)" }}>
                      {benefit.title}
                    </div>
                    <div className="text-sm" style={{ color: "var(--text-medium)" }}>
                      {benefit.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Garantie */}
          {formation.guarantee && (
            <div
              className="flex items-center gap-4 p-5 rounded-2xl mb-10"
              style={{ background: "linear-gradient(135deg, rgba(168, 181, 160, 0.2) 0%, rgba(201, 169, 154, 0.2) 100%)" }}
            >
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(168, 181, 160, 0.4)" }}
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="var(--brun)"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-lg" style={{ color: "var(--brun-fonce)" }}>
                  Garantie 100% satisfait ou remboursé
                </div>
                <div className="text-sm" style={{ color: "var(--text-medium)" }}>
                  Si vous n'êtes pas satisfaite après avoir suivi le programme complet, je vous rembourse intégralement.
                </div>
              </div>
            </div>
          )}

          {/* CTA */}
          <a
            href={formation.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center py-5 px-8 rounded-full font-semibold text-xl transition-all duration-300 formation-cta-primary"
          >
            Accéder à la formation pour {formation.price}€ →
          </a>

          {/* Public cible */}
          <div className="mt-8 pt-8 text-center" style={{ borderTop: "1px solid rgba(212, 181, 169, 0.2)" }}>
            <h4
              className="text-xs font-medium tracking-widest uppercase mb-4"
              style={{ color: "var(--text-light)" }}
            >
              Cette formation est pour vous si :
            </h4>
            <div className="flex flex-wrap gap-3 justify-center">
              {formation.targetAudience.map((item, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-8">
        {formations.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              background: activeIndex === i
                ? "var(--brun)"
                : "var(--rose-medium)",
              transform: activeIndex === i ? "scale(1.3)" : "scale(1)",
            }}
            aria-label={`Formation ${i + 1}`}
          />
        ))}
      </div>

      {/* Indicateur de swipe sur mobile */}
      <p className="text-center mt-4 text-sm" style={{ color: "var(--text-light)" }}>
        Cliquez sur les onglets pour découvrir les deux formations
      </p>
    </div>
  );
}

