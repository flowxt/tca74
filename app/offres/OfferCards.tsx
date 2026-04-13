"use client";

import Link from "next/link";

/*
 * ============================================================
 * OFFRE PREMIUM — À RÉACTIVER APRÈS LE 15 MAI 2026
 * ============================================================
 * Pour remettre la page initiale avec Standard (90€) + Premium (130€) :
 * 1. Décommenter le bloc PREMIUM_OFFER ci-dessous
 * 2. Remplacer le composant OfferCards par la version multi-onglets
 *    (voir le fichier OfferCards.backup.tsx ou l'historique git)
 * 3. Retirer le prix barré et la mention "offre de lancement"
 *
 * PREMIUM_OFFER:
 * {
 *   id: "premium",
 *   tabLabel: "Premium",
 *   name: "Accompagnement Premium",
 *   price: 130,
 *   tagline: "L'expérience complète",
 *   description: "Un suivi renforcé pour celles et ceux qui souhaitent aller plus loin",
 *   longDescription:
 *     "L'accompagnement premium est conçu pour vous offrir un soutien continu entre les séances. Grâce aux mails de suivi, vous restez connectée à votre travail thérapeutique et pouvez avancer plus efficacement vers vos objectifs.",
 *   features: [
 *     { text: "Séance d'1h en cabinet ou en visio", included: true },
 *     { text: "Travail sur une problématique ciblée", included: true },
 *     { text: "Outils personnalisés", included: true },
 *     { text: "Flexibilité dans la fréquence", included: true },
 *     { text: "2 mails de suivi personnalisés", included: true, highlight: true },
 *     { text: "Accompagnement continu", included: true, highlight: true },
 *   ],
 *   mailRules: [
 *     "2 mails de clarification après la séance",
 *     "À utiliser dans les 15 jours",
 *     "1 question ciblée par mail",
 *     "Réponses personnalisées, apportant un éclairage précis et posé",
 *     "Un cadre clair pour vous offrir une réponse de qualité",
 *     "Les mails non utilisés dans les 15 jours ne sont ni reportables ni déductibles",
 *   ],
 *   cta: "Choisir le Premium",
 *   gradient: "linear-gradient(135deg, var(--accent-lavande) 0%, var(--brun-doux) 100%)",
 *   accentColor: "var(--accent-lavande)",
 *   featureBg: "rgba(197, 184, 200, 0.08)",
 * }
 * ============================================================
 */

const features = [
  { text: "Séance d'1h en cabinet ou en visio", included: true },
  { text: "Travail sur une problématique ciblée", included: true },
  { text: "Outils personnalisés", included: true },
  { text: "Flexibilité dans la fréquence", included: true },
];

export default function OfferCards() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Carte unique — Offre de lancement */}
      <div
        className="relative rounded-[2rem] overflow-hidden"
        style={{
          background: "var(--bg-cream)",
          border: "2px solid var(--accent-sage)",
          boxShadow: "0 25px 80px rgba(168, 181, 160, 0.3), 0 0 0 4px rgba(168, 181, 160, 0.1)",
        }}
      >
        {/* Badge offre de lancement */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-15"
            style={{ background: "var(--accent-sage)" }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10"
            style={{ background: "var(--peche)" }}
          />
        </div>
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-2.5"
          style={{
            background: "linear-gradient(135deg, var(--accent-sage) 0%, var(--brun-doux) 100%)",
            borderRadius: "0 0 16px 16px",
            boxShadow: "0 4px 15px rgba(168, 181, 160, 0.4)",
          }}
        >
          <span className="text-sm font-bold tracking-wide text-white">
            OFFRE DE LANCEMENT
          </span>
        </div>

        <div className="relative p-6 md:p-10 lg:p-14 pt-16 md:pt-20">
          {/* Header */}
          <div className="text-center mb-8 md:mb-10">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--text-dark)",
              }}
            >
              Consultation Standard
            </h2>
            <p
              className="text-base md:text-lg font-medium mb-3 md:mb-4"
              style={{ color: "var(--accent-sage)" }}
            >
              L'essentiel pour commencer
            </p>
            <p className="text-sm md:text-base" style={{ color: "var(--text-medium)" }}>
              Pour travailler sur une problématique ciblée ou répondre à un besoin ponctuel
            </p>
          </div>

          {/* Prix avec ancien prix barré */}
          <div
            className="text-center py-6 md:py-8 mb-8 md:mb-10 rounded-2xl"
            style={{ background: "rgba(168, 181, 160, 0.15)" }}
          >
            <div className="flex items-baseline justify-center gap-3 md:gap-4">
              <span
                className="text-2xl md:text-4xl font-bold line-through opacity-40"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--text-light)",
                }}
              >
                90€
              </span>
              <span
                className="text-5xl md:text-7xl font-bold"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--brun)",
                }}
              >
                70
              </span>
              <span
                className="text-xl md:text-2xl"
                style={{ color: "var(--text-light)" }}
              >
                €
              </span>
            </div>
            <span className="text-sm md:text-base" style={{ color: "var(--text-light)" }}>
              par séance
            </span>
            <div
              className="mt-3 inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold"
              style={{ background: "rgba(168, 181, 160, 0.25)", color: "var(--brun)" }}
            >
              Tarif de lancement jusqu'au 15 mai 2026
            </div>
          </div>

          {/* Description longue */}
          <p
            className="mb-8 md:mb-10 text-base md:text-lg leading-relaxed text-center"
            style={{ color: "var(--text-medium)" }}
          >
            La consultation standard est idéale pour découvrir mon accompagnement,
            travailler sur une problématique précise ou avancer pas à pas à votre rythme.
            Chaque séance est un espace de parole et de travail adapté à vos besoins du moment.
          </p>

          {/* Features */}
          <div className="mb-8 md:mb-10">
            <h3
              className="text-xs md:text-sm font-bold tracking-widest uppercase mb-4 md:mb-6 text-center"
              style={{ color: "var(--accent-sage)" }}
            >
              Ce qui est inclus
            </h3>
            <div className="space-y-3 md:space-y-4">
              {features.map((feature, i) => (
                <div
                  key={i}
                  className="flex items-start md:items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl"
                  style={{ background: "rgba(168, 181, 160, 0.1)" }}
                >
                  <div
                    className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 md:mt-0"
                    style={{
                      background: feature.included
                        ? "rgba(168, 181, 160, 0.4)"
                        : "rgba(200, 200, 200, 0.2)",
                    }}
                  >
                    {feature.included ? (
                      <svg
                        className="w-3.5 h-3.5 md:w-4 md:h-4"
                        style={{ color: "var(--brun)" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg
                        className="w-3.5 h-3.5 md:w-4 md:h-4"
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
                    className="text-sm md:text-base lg:text-lg flex-1"
                    style={{
                      color: feature.included ? "var(--text-dark)" : "rgba(150, 150, 150, 0.5)",
                      textDecoration: feature.included ? "none" : "line-through",
                    }}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="block w-full text-center py-4 md:py-5 px-6 md:px-8 rounded-full font-bold text-base md:text-xl transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "linear-gradient(135deg, var(--accent-sage) 0%, var(--brun-doux) 100%)",
              color: "white",
              boxShadow: "0 8px 30px rgba(168, 181, 160, 0.4)",
            }}
          >
            Réserver une consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
