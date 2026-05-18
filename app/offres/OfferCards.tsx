"use client";

type Offer = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  note?: string;
  highlight: boolean;
  gradient: string;
  accentColor: string;
  badgeBg: string;
  pillBg: string;
};

const offers: Offer[] = [
  {
    id: "standard",
    name: "Séance Standard",
    tagline: "Tarif unique, simple et stable",
    price: 95,
    duration: "1h",
    description:
      "La séance de référence pour avancer pas à pas sur vos comportements alimentaires, émotionnels et relationnels, à votre rythme et selon vos besoins.",
    features: [
      "Séance d'1h en cabinet ou en visio",
      "Travail sur une problématique ciblée",
      "Outils personnalisés",
      "Flexibilité dans la fréquence",
    ],
    highlight: true,
    gradient: "linear-gradient(135deg, var(--accent-sage) 0%, var(--brun-doux) 100%)",
    accentColor: "var(--accent-sage)",
    badgeBg: "rgba(168, 181, 160, 0.15)",
    pillBg: "rgba(168, 181, 160, 0.25)",
  },
  {
    id: "reduit",
    name: "Séance Tarif réduit",
    tagline: "Réservée aux femmes engagées traversant une situation financière particulière",
    price: 75,
    duration: "1 à 2 places maximum",
    description:
      "Une place préservée pour permettre à chacune d'accéder à un accompagnement de qualité, quelle que soit sa situation financière.",
    features: [
      "Séance d'1h en cabinet ou en visio",
      "Attribution selon disponibilité",
      "Pas de justificatif demandé",
      "Engagement et régularité attendus",
    ],
    note: "1 à 2 places maximum — me contacter pour vérifier la disponibilité.",
    highlight: false,
    gradient: "linear-gradient(135deg, var(--accent-lavande) 0%, var(--brun-doux) 100%)",
    accentColor: "var(--accent-lavande)",
    badgeBg: "rgba(197, 184, 200, 0.15)",
    pillBg: "rgba(197, 184, 200, 0.25)",
  },
];

export default function OfferCards() {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {offers.map((offer) => (
        <div
          key={offer.id}
          className="relative rounded-[2rem] overflow-hidden flex flex-col"
          style={{
            background: "var(--bg-cream)",
            border: `2px solid ${offer.accentColor}`,
            boxShadow: offer.highlight
              ? "0 25px 80px rgba(168, 181, 160, 0.25), 0 0 0 4px rgba(168, 181, 160, 0.08)"
              : "0 15px 50px rgba(197, 184, 200, 0.18)",
          }}
        >
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full opacity-15"
              style={{ background: offer.accentColor }}
            />
            <div
              className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full opacity-10"
              style={{ background: "var(--peche)" }}
            />
          </div>

          {offer.highlight && (
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 px-6 py-2.5 z-10"
              style={{
                background: offer.gradient,
                borderRadius: "0 0 16px 16px",
                boxShadow: "0 4px 15px rgba(168, 181, 160, 0.4)",
              }}
            >
              <span className="text-sm font-bold tracking-wide text-white">
                TARIF STANDARD
              </span>
            </div>
          )}

          <div className={`relative p-6 md:p-8 lg:p-10 flex flex-col flex-1 ${offer.highlight ? "pt-16 md:pt-20" : "pt-10 md:pt-12"}`}>
            <div className="text-center mb-6 md:mb-8">
              <h2
                className="text-2xl md:text-3xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--text-dark)",
                }}
              >
                {offer.name}
              </h2>
              <p
                className="text-sm md:text-base font-medium"
                style={{ color: offer.accentColor }}
              >
                {offer.tagline}
              </p>
            </div>

            <div
              className="text-center py-6 md:py-8 mb-6 md:mb-8 rounded-2xl"
              style={{ background: offer.badgeBg }}
            >
              <div className="flex items-baseline justify-center gap-2">
                <span
                  className="text-5xl md:text-6xl lg:text-7xl font-bold"
                  style={{
                    fontFamily: "var(--font-playfair)",
                    color: "var(--brun)",
                  }}
                >
                  {offer.price}
                </span>
                <span
                  className="text-xl md:text-2xl"
                  style={{ color: "var(--text-light)" }}
                >
                  €
                </span>
              </div>
              <div
                className="mt-3 inline-block px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold"
                style={{ background: offer.pillBg, color: "var(--brun)" }}
              >
                {offer.duration}
              </div>
            </div>

            <p
              className="mb-6 md:mb-8 text-sm md:text-base leading-relaxed text-center"
              style={{ color: "var(--text-medium)" }}
            >
              {offer.description}
            </p>

            <div className="mb-6 md:mb-8 flex-1">
              <h3
                className="text-xs md:text-sm font-bold tracking-widest uppercase mb-4 text-center"
                style={{ color: offer.accentColor }}
              >
                Ce qui est inclus
              </h3>
              <div className="space-y-3">
                {offer.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl"
                    style={{ background: offer.badgeBg }}
                  >
                    <div
                      className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                      style={{ background: offer.pillBg }}
                    >
                      <svg
                        className="w-3.5 h-3.5"
                        style={{ color: "var(--brun)" }}
                        fill="none"
                        stroke="currentColor"
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
                    <span
                      className="text-sm md:text-base"
                      style={{ color: "var(--text-dark)" }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {offer.note && (
                <p
                  className="mt-5 text-xs md:text-sm italic text-center"
                  style={{ color: "var(--text-light)" }}
                >
                  {offer.note}
                </p>
              )}
            </div>

            <a
              href="https://ibookthedate.fr/therapeute/74000-annecy/laura-baud"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-4 px-6 rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: offer.gradient,
                color: "white",
                boxShadow: "0 8px 30px rgba(168, 181, 160, 0.4)",
              }}
            >
              Réserver une séance
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
