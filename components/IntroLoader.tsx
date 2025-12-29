"use client";

import { useState, useEffect, useLayoutEffect } from "react";

export default function IntroLoader() {
  // État "null" signifie qu'on ne sait pas encore si on doit afficher le loader
  const [showLoader, setShowLoader] = useState<boolean | null>(null);
  const [isFading, setIsFading] = useState(false);

  // useLayoutEffect s'exécute de manière synchrone avant le paint du navigateur
  useLayoutEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setShowLoader(false);
    } else {
      setShowLoader(true);
      sessionStorage.setItem("hasSeenIntro", "true");
    }
  }, []);

  useEffect(() => {
    if (showLoader !== true) return;

    // Timer pour commencer le fade out après 3.5 secondes
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 3500);

    // Timer pour retirer du DOM après le fade
    const removeTimer = setTimeout(() => {
      setShowLoader(false);
    }, 4500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [showLoader]);

  // Permettre de skip en cliquant
  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => setShowLoader(false), 500);
  };

  // Ne rien afficher tant qu'on ne sait pas, ou si le loader ne doit pas être affiché
  if (showLoader !== true) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-1000 ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      onClick={handleSkip}
      style={{ cursor: "pointer", backgroundColor: "#1a3a4a" }}
    >
      {/* Vidéo de fond */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/mer.mp4" type="video/mp4" />
      </video>

      {/* Overlay dégradé pour assombrir légèrement et améliorer la lisibilité */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* Contenu central */}
      <div className="relative z-10 text-center px-6">
        {/* Nom avec animation */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-medium text-white mb-4 animate-fade-in-up"
          style={{
            fontFamily: "var(--font-playfair)",
            textShadow: "0 4px 20px rgba(0,0,0,0.3)",
            animationDelay: "0.5s",
            animationFillMode: "both",
          }}
        >
          Laura Baud
        </h1>

        {/* Sous-titre */}
        <p
          className="text-lg md:text-xl text-white/90 mb-8 animate-fade-in-up"
          style={{
            textShadow: "0 2px 10px rgba(0,0,0,0.3)",
            animationDelay: "1s",
            animationFillMode: "both",
          }}
        >
          Thérapeute TCA • Centrée sur les émotions
        </p>

        {/* Ligne décorative animée */}
        <div
          className="w-24 h-0.5 bg-white/60 mx-auto animate-fade-in-up"
          style={{
            animationDelay: "1.5s",
            animationFillMode: "both",
          }}
        />

        {/* Message d'accueil */}
        <p
          className="text-base md:text-lg text-white/70 mt-8 animate-fade-in-up"
          style={{
            animationDelay: "2s",
            animationFillMode: "both",
          }}
        >
          Bienvenue dans un espace de douceur
        </p>
      </div>

      {/* Indication pour skip */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-sm animate-fade-in"
        style={{
          animationDelay: "2.5s",
          animationFillMode: "both",
        }}
      >
        Cliquez pour continuer
      </div>

      {/* Effet de vagues stylisé en bas */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          style={{ height: "60px" }}
        >
          <path
            d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z"
            fill="rgba(255,255,255,0.1)"
          />
        </svg>
      </div>
    </div>
  );
}

