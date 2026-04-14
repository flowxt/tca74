"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type CardCategory = "alimentaire" | "emotionnel" | "exclusion" | "inclusion" | "filtre";

type Card = {
  id: number;
  text: string;
  category: CardCategory;
  icon: string;
  excludes?: boolean; // Si true, cette carte exclut du suivi
};

const cards: Card[] = [
  // Cartes d'inclusion (acceptées)
  {
    id: 1,
    text: "Je rumine continuellement à cause de la nourriture",
    category: "alimentaire",
    icon: "🍽️",
  },
  {
    id: 2,
    text: "Je ne sais plus quand ni comment manger",
    category: "alimentaire",
    icon: "⏰",
  },
  {
    id: 3,
    text: "J'ai souvent une sensation de perte de contrôle",
    category: "alimentaire",
    icon: "🌀",
  },
  {
    id: 4,
    text: "J'ai des compulsions alimentaires, j'ai besoin de me remplir",
    category: "emotionnel", // Changé en émotionnel car besoin de se remplir = travail sur les émotions
    icon: "🫧",
  },
  {
    id: 5,
    text: "J'ai honte de moi et je me dévalorise",
    category: "emotionnel",
    icon: "💔",
  },
  {
    id: 6,
    text: "J'ai du mal à gérer mes émotions",
    category: "emotionnel",
    icon: "🌊",
  },
  {
    id: 7,
    text: "J'ai des difficultés à respecter mes limites",
    category: "emotionnel",
    icon: "🚧",
  },
  {
    id: 8,
    text: "Je ne sais pas répondre à mes besoins",
    category: "emotionnel",
    icon: "❓",
  },
  {
    id: 9,
    text: "Je me sens perdue…",
    category: "emotionnel",
    icon: "🧭",
  },
  {
    id: 10,
    text: "Je vis des épreuves de vie difficiles (séparation, deuil, transition...)",
    category: "emotionnel",
    icon: "🌧️",
  },
  {
    id: 11,
    text: "Je veux comprendre mes crises et apaiser ma relation avec mon corps",
    category: "inclusion",
    icon: "💜",
  },
  {
    id: 12,
    text: "Je souffre d'attaques de panique / Agoraphobie / Phobie (avion, etc.)",
    category: "inclusion",
    icon: "😰",
  },
  {
    id: 16,
    text: "Je ne supporte plus mon corps / Je veux retrouver mon poids de forme",
    category: "inclusion",
    icon: "🪞",
  },
  // Cartes d'exclusion
  {
    id: 13,
    text: "Je souffre de restrictions alimentaires massives / On m'a diagnostiqué une anorexie restrictive",
    category: "exclusion",
    icon: "⚠️",
    excludes: true,
  },
  {
    id: 14,
    text: "Je veux uniquement perdre du poids",
    category: "exclusion",
    icon: "⚖️",
    excludes: true,
  },
  {
    id: 17,
    text: "Je me fais vomir après les repas ou les crises",
    category: "exclusion",
    icon: "⚠️",
  },
  // Carte filtre
  {
    id: 15,
    text: "Je suis une femme majeure (18 ans ou plus)",
    category: "filtre",
    icon: "👩",
  },
];

type Profile = "accepte" | "tres_concerne" | "exclusion" | "non_majeure" | "vomissements" | null;

const profileMessages: Record<Exclude<Profile, null>, { title: string; message: string; color: string; cta: string; ctaLink: string }> = {
  exclusion: {
    title: "Une orientation différente",
    message:
      "Mon accompagnement n'est pas adapté à votre situation actuelle. Je vous recommande de vous tourner vers un professionnel de santé spécialisé (psychiatre, équipe hospitalière TCA, diététicien). Prenez soin de vous. 💜",
    color: "#A68B7C",
    cta: "Découvrir les articles",
    ctaLink: "/blog",
  },
  non_majeure: {
    title: "Accompagnement réservé aux femmes majeures",
    message:
      "Si vous êtes une femme majeure de 18 ans, je peux vous accompagner. Si vous êtes un homme ou mineur(e), je vous invite à vous tourner vers un autre professionnel adapté (psychologues, psychiatres, pédopsychiatres). 💜",
    color: "#A68B7C",
    cta: "Découvrir les articles",
    ctaLink: "/blog",
  },
  vomissements: {
    title: "La prise en charge est possible, sous certaines conditions",
    message:
      "La prise en charge est possible, mais sous certaines conditions comme avoir un médecin traitant au courant des comportements compensatoires tels que les vomissements avec, dans l'idéal, une personne de confiance. Le suivi doit être pluridisciplinaire.",
    color: "#B69588",
    cta: "Me contacter pour en discuter",
    ctaLink: "/contact",
  },
  accepte: {
    title: "Vous êtes au bon endroit ✨",
    message:
      "Mon accompagnement est centré sur la gestion des émotions, les compulsions alimentaires et la relation au corps. Je serais heureuse de vous accompagner sur ce chemin. 🌸",
    color: "#B69588",
    cta: "Prendre rendez-vous",
    ctaLink: "/contact",
  },
  tres_concerne: {
    title: "Vous êtes exactement au bon endroit 💜",
    message:
      "Vous êtes exactement dans le profil que j'accompagne : femmes sensibles, en difficulté avec la gestion émotionnelle, souffrant d'hyperphagie, et traversant des épreuves de vie. Je suis là pour vous. 🤍",
    color: "#7A5F54",
    cta: "Prendre rendez-vous",
    ctaLink: "/contact",
  },
};

export default function QuizCards() {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [checkedCards, setCheckedCards] = useState<Set<number>>(new Set());
  const [showResults, setShowResults] = useState(false);
  const [profile, setProfile] = useState<Profile>(null);

  const toggleFlip = (id: number) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleCheck = (id: number) => {
    setCheckedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const calculateProfile = (): Profile => {
    const checkedList = Array.from(checkedCards);
    
    // PRIORITÉ 1 : Vérifier les cartes d'exclusion stricte (anorexie, restriction massive, perte de poids)
    const exclusionCards = checkedList.filter((id) => 
      cards.find((c) => c.id === id)?.excludes === true
    );
    if (exclusionCards.length > 0) {
      return "exclusion";
    }

    // PRIORITÉ 2 : Vomissements → prise en charge conditionnelle (pluridisciplinaire)
    if (checkedCards.has(17)) {
      return "vomissements";
    }

    // PRIORITÉ 3 : Vérifier si femme majeure n'est pas cochée
    if (!checkedCards.has(15)) {
      return "non_majeure";
    }

    // Compter les cartes positives
    const alimentaireCount = checkedList.filter((id) => 
      cards.find((c) => c.id === id)?.category === "alimentaire"
    ).length;
    
    const emotionnelCount = checkedList.filter((id) => 
      cards.find((c) => c.id === id)?.category === "emotionnel"
    ).length;
    
    const inclusionCount = checkedList.filter((id) => 
      cards.find((c) => c.id === id)?.category === "inclusion"
    ).length;
    
    const total = alimentaireCount + emotionnelCount + inclusionCount;

    if (total >= 6) {
      return "tres_concerne";
    }

    if (total >= 1) {
      return "accepte";
    }

    return null;
  };

  const handleShowResults = () => {
    const result = calculateProfile();
    setProfile(result);
    setShowResults(true);
  };

  const handleReset = () => {
    setFlippedCards(new Set());
    setCheckedCards(new Set());
    setShowResults(false);
    setProfile(null);
  };

  // Auto-scroll to results when shown
  useEffect(() => {
    if (showResults) {
      setTimeout(() => {
        document.getElementById("quiz-results")?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [showResults]);

  const getCardColors = (category: CardCategory, excludes?: boolean) => {
    if (excludes) {
      return {
        bg: "linear-gradient(135deg, #F5F0ED 0%, #E8DED8 100%)",
        bgBack: "linear-gradient(135deg, #9C8578 0%, #8B7365 100%)",
        border: "#D4C8C0",
        label: "⚠️ Important",
      };
    }
    switch (category) {
      case "alimentaire":
        return {
          bg: "linear-gradient(135deg, #FDF6F0 0%, #F5E6DC 100%)",
          bgBack: "linear-gradient(135deg, #D4B5A0 0%, #C9A99A 100%)",
          border: "#E8D4C6",
          label: "🍽️ Alimentation",
        };
      case "emotionnel":
        return {
          bg: "linear-gradient(135deg, #FDF2F5 0%, #F5E0E6 100%)",
          bgBack: "linear-gradient(135deg, #C9A0A8 0%, #B69588 100%)",
          border: "#E8C8D0",
          label: "💜 Émotions",
        };
      case "inclusion":
        return {
          bg: "linear-gradient(135deg, #F0F5F2 0%, #E0EBE5 100%)",
          bgBack: "linear-gradient(135deg, #8BA897 0%, #7A9987 100%)",
          border: "#C8D8CE",
          label: "✨ Je me reconnais",
        };
      case "exclusion":
        return {
          bg: "linear-gradient(135deg, #F5F0ED 0%, #E8DED8 100%)",
          bgBack: "linear-gradient(135deg, #9C8578 0%, #8B7365 100%)",
          border: "#D4C8C0",
          label: "⚠️ Important",
        };
      case "filtre":
        return {
          bg: "linear-gradient(135deg, #F5F0F8 0%, #EBE0F0 100%)",
          bgBack: "linear-gradient(135deg, #A890B8 0%, #9880A8 100%)",
          border: "#D8C8E0",
          label: "👩 Profil",
        };
      default:
        return {
          bg: "linear-gradient(135deg, #FDF6F0 0%, #F5E6DC 100%)",
          bgBack: "linear-gradient(135deg, #D4B5A0 0%, #C9A99A 100%)",
          border: "#E8D4C6",
          label: "",
        };
    }
  };

  return (
    <div className="space-y-12">
      {/* Counter */}
      <div className="text-center">
        <div
          className="inline-flex items-center gap-3 px-6 py-3 rounded-full"
          style={{ background: "var(--rose-pale)" }}
        >
          <span className="text-sm font-medium" style={{ color: "var(--text-medium)" }}>
            Cartes sélectionnées :
          </span>
          <span
            className="text-2xl font-bold"
            style={{ color: "var(--brun-doux)", fontFamily: "var(--font-playfair)" }}
          >
            {checkedCards.size}
          </span>
          <span className="text-sm" style={{ color: "var(--text-light)" }}>
            / {cards.length}
          </span>
        </div>
      </div>

      {/* Instructions */}
      <div className="text-center max-w-2xl mx-auto">
        <p className="text-lg" style={{ color: "var(--text-medium)" }}>
          Cliquez sur chaque carte pour la retourner. Si l'affirmation vous parle, 
          cochez-la. Prenez le temps de ressentir, sans vous juger.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card) => {
          const isFlipped = flippedCards.has(card.id);
          const isChecked = checkedCards.has(card.id);
          const colors = getCardColors(card.category, card.excludes);

          return (
            <div
              key={card.id}
              className="quiz-card h-56 cursor-pointer"
              onClick={() => toggleFlip(card.id)}
            >
              <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front of card */}
                <div
                  className="absolute inset-0 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-lg border-2"
                  style={{
                    background: colors.bg,
                    borderColor: colors.border,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  <div className="text-4xl mb-3">{card.icon}</div>
                  <p
                    className="text-sm font-medium leading-snug mb-4"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {card.text}
                  </p>
                  <p className="text-xs font-medium" style={{ color: "var(--rose-accent)" }}>
                    Je me reconnais
                  </p>
                  <p className="mt-2 text-xs" style={{ color: "var(--text-light)" }}>
                    👆 Cliquez pour retourner
                  </p>
                </div>

                {/* Back of card */}
                <div
                  className="absolute inset-0 rounded-2xl p-5 flex flex-col items-center justify-center text-center shadow-lg border-2"
                  style={{
                    background: colors.bgBack,
                    borderColor: colors.border,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <p className="text-white text-sm font-medium mb-4 leading-relaxed px-2">
                    {card.text}
                  </p>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCheck(card.id);
                    }}
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isChecked
                        ? "bg-white shadow-lg scale-110"
                        : "bg-white/30 hover:bg-white/50 hover:scale-105"
                    }`}
                  >
                    {isChecked ? (
                      <svg
                        className="w-8 h-8"
                        style={{ color: "var(--brun-doux)" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <span className="text-white text-3xl font-light">+</span>
                    )}
                  </button>
                  
                  <p className="mt-3 text-white/90 text-xs font-medium">
                    {isChecked ? "✓ Sélectionné" : "Sélectionner"}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show Results Button */}
      {!showResults && (
        <div className="text-center pt-8">
          <button
            onClick={handleShowResults}
            className="btn-primary text-lg px-8 py-4"
            disabled={checkedCards.size === 0}
            style={{
              opacity: checkedCards.size === 0 ? 0.5 : 1,
              cursor: checkedCards.size === 0 ? "not-allowed" : "pointer",
            }}
          >
            ✨ Découvrir mon profil
          </button>
          {checkedCards.size === 0 && (
            <p className="mt-4 text-sm" style={{ color: "var(--text-light)" }}>
              Retournez et sélectionnez au moins une carte pour voir votre profil
            </p>
          )}
        </div>
      )}

      {/* Results Section */}
      {showResults && profile && (
        <div
          id="quiz-results"
          className="max-w-2xl mx-auto animate-fade-in-up"
        >
          <div
            className="rounded-3xl p-8 md:p-12 text-center shadow-xl"
            style={{
              background: `linear-gradient(135deg, var(--bg-cream) 0%, var(--rose-pale) 100%)`,
              border: `3px solid ${profileMessages[profile].color}`,
            }}
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
              style={{ background: profileMessages[profile].color }}
            >
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            
            <h2
              className="text-2xl md:text-3xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: profileMessages[profile].color }}
            >
              {profileMessages[profile].title}
            </h2>
            
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "var(--text-medium)" }}
            >
              {profileMessages[profile].message}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={profileMessages[profile].ctaLink}
                className="btn-primary"
              >
                {profileMessages[profile].cta}
              </Link>
              <button
                onClick={handleReset}
                className="btn-secondary"
              >
                Recommencer le quiz
              </button>
            </div>
            
            <p className="mt-8 text-xs" style={{ color: "var(--text-light)" }}>
              Ce questionnaire est un outil d'orientation, pas un diagnostic. 
              N'hésitez pas à me contacter pour échanger sur votre situation.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
