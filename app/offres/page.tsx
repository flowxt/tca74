import type { Metadata } from "next";
import Link from "next/link";
import OfferCards from "./OfferCards";

export const metadata: Metadata = {
  title: "Mes offres d'accompagnement | Tarifs consultations",
  description:
    "Découvrez mes offres d'accompagnement : consultation standard à 90€ et accompagnement premium à 130€ avec suivi personnalisé. Séances en cabinet ou en visio.",
  keywords: [
    "tarifs thérapie",
    "consultation TCA",
    "accompagnement premium",
    "prix séance",
    "thérapie hyperphagie",
    "suivi personnalisé",
  ],
};

export default function OffresPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute top-20 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--accent-lavande)" }}
        />
        <div
          className="absolute -bottom-20 -left-32 w-80 h-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--peche)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-8"
            style={{
              background: "linear-gradient(135deg, rgba(197, 184, 200, 0.3) 0%, rgba(168, 181, 160, 0.3) 100%)",
              color: "var(--brun-fonce)",
              border: "1px solid rgba(197, 184, 200, 0.4)",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Nouvelle offre Premium disponible
          </div>

          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Mes offres{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--accent-lavande) 0%, var(--brun-doux) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              d'accompagnement
            </span>
          </h1>

          <p
            className="text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: "var(--text-medium)" }}
          >
            Choisissez la formule qui correspond à vos besoins. 
            Chaque accompagnement est personnalisé et centré sur vos émotions.
          </p>
        </div>
      </section>

      {/* Offer Cards with Swap System */}
      <section className="py-16 md:py-24" style={{ background: "var(--bg-white)" }}>
        <div className="max-w-5xl mx-auto px-6">
          <OfferCards />
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--brun-fonce) 0%, var(--brun) 50%, var(--accent-lavande) 100%)",
        }}
      >
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "white", filter: "blur(80px)" }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium mb-6 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Prête à commencer ?
          </h2>
          <p className="text-xl mb-10 text-white/80">
            Contactez-moi pour échanger sur votre situation et choisir la formule qui vous convient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "white",
                color: "var(--brun-fonce)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              Prendre rendez-vous
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
