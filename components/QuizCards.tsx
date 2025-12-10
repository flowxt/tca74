"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

type Card = {
  id: number;
  text: string;
  category: "alimentaire" | "emotionnel" | "restriction";
  icon: string;
};

const cards: Card[] = [
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
    text: "J'ai des compulsions alimentaires, je mange pour me remplir",
    category: "alimentaire",
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
    text: "Je suis dans une anorexie restrictive ou un suivi centré uniquement sur la perte de poids",
    category: "restriction",
    icon: "⚠️",
  },
];

type Profile = "dietetique" | "emotionnel" | "mixte" | "tres_concerne" | "restriction" | null;

const profileMessages: Record<Exclude<Profile, null>, { title: string; message: string; color: string; cta: string; ctaLink: string }> = {
  restriction: {
    title: "Une orientation spécifique",
    message:
      "Votre situation nécessite un accompagnement spécialisé différent. Je vous recommande de vous tourner vers un professionnel de santé spécialisé dans les troubles restrictifs (psychiatre, équipe hospitalière TCA). Prenez soin de vous. 💜",
    color: "#A68B7C",
    cta: "En savoir plus sur les TCA",
    ctaLink: "/blog",
  },
  dietetique: {
    title: "Un suivi nutritionnel",
    message:
      "Votre besoin semble davantage lié à un suivi nutritionnel. Une diététicienne pourra vous aider à travailler sur l'équilibre alimentaire et retrouver une relation sereine avec la nourriture. 🌿",
    color: "#C9A99A",
    cta: "Découvrir mes ressources",
    ctaLink: "/blog",
  },
  emotionnel: {
    title: "Vous êtes au bon endroit ✨",
    message:
      "Mon accompagnement est centré sur la gestion des émotions, les épreuves de vie et la relation globale au corps et à l'alimentation. Je serais heureuse de vous accompagner sur ce chemin. 🌸",
    color: "#B69588",
    cta: "Prendre rendez-vous",
    ctaLink: "/contact",
  },
  mixte: {
    title: "Mon accompagnement peut vous aider",
    message:
      "Je peux vous aider à sortir du cercle vicieux des compulsions et des crises, à mieux comprendre vos émotions et à retrouver une relation plus apaisée avec la nourriture. 🌷",
    color: "#8B6F66",
    cta: "Découvrir mon accompagnement",
    ctaLink: "/groupes-paroles-tca",
  },
  tres_concerne: {
    title: "Vous êtes exactement au bon endroit 💜",
    message:
      "Vous êtes exactement dans le profil que j'accompagne : femmes sensibles, en difficulté avec la gestion émotionnelle, souffrant d'hyperphagie ou de boulimie sans restriction majeure, et traversant des épreuves de vie. Je suis là pour vous. 🤍",
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
    
    // Check for restriction card
    if (checkedCards.has(11)) {
      return "restriction";
    }

    const alimentaireCount = checkedList.filter((id) => 
      cards.find((c) => c.id === id)?.category === "alimentaire"
    ).length;
    
    const emotionnelCount = checkedList.filter((id) => 
      cards.find((c) => c.id === id)?.category === "emotionnel"
    ).length;
    
    const total = alimentaireCount + emotionnelCount;

    // Very concerned profile: 8-10 cards (excluding restriction card)
    if (total >= 8) {
      return "tres_concerne";
    }

    // Mixed or high profile: 4-7 cards
    if (total >= 4) {
      return "mixte";
    }

    // Emotional profile: even 2-3 cards if they're emotional
    if (emotionnelCount >= 2) {
      return "emotionnel";
    }

    // Dietary profile: 0-3 cards, only food category
    if (total <= 3 && emotionnelCount === 0 && alimentaireCount > 0) {
      return "dietetique";
    }

    // Emotional profile as default if any emotional card is checked
    if (emotionnelCount > 0) {
      return "emotionnel";
    }

    // Default to mixed if some cards are checked
    if (total > 0) {
      return "mixte";
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

  const getCardColors = (category: Card["category"]) => {
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
      case "restriction":
        return {
          bg: "linear-gradient(135deg, #F5F0ED 0%, #E8DED8 100%)",
          bgBack: "linear-gradient(135deg, #9C8578 0%, #8B7365 100%)",
          border: "#D4C8C0",
          label: "⚠️ Important",
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
        {cards.map((card, index) => {
          const isFlipped = flippedCards.has(card.id);
          const isChecked = checkedCards.has(card.id);
          const colors = getCardColors(card.category);

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
                    className="text-sm font-medium leading-snug mb-3"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {card.text}
                  </p>
                  <span
                    className="text-xs font-medium px-3 py-1 rounded-full bg-white/70"
                    style={{ color: "var(--text-medium)" }}
                  >
                    {colors.label}
                  </span>
                  <p className="mt-3 text-xs" style={{ color: "var(--text-light)" }}>
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
                    {isChecked ? "✓ Je me reconnais" : "Je me reconnais"}
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
