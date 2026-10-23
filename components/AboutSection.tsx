"use client";

import { useState } from "react";
import Image from "next/image";

const values = [
  { title: "Transparence", desc: "Je vous dis ce que je fais, pourquoi je le fais." },
  { title: "Liberté", desc: "Vous avez le droit de choisir, de refuser, d'explorer à votre manière." },
  { title: "Authenticité", desc: "Je suis vraie, entière, présente." },
  { title: "Place aux émotions", desc: "Toutes les émotions sont les bienvenues." },
  { title: "Droit d'être soi", desc: "Chacun a le droit d'être qui il est, sans masque." },
  { title: "Non jugement", desc: "Le jugement n'a pas sa place ici." },
];

export default function AboutSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"parcours" | "approche">("parcours");

  return (
    <>
      <section className="section-padding bg-gradient-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--accent-sage)" }}
            >
              Votre thérapeute
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-medium"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Laura Baud
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo + Quick intro */}
            <div className="relative">
              {/* Photo container - taille réduite */}
              <div className="relative max-w-sm mx-auto lg:mx-0">
                {/* Decorative elements */}
                <div
                  className="absolute -top-6 -left-6 w-32 h-32 rounded-full opacity-60 blur-2xl"
                  style={{ background: "var(--peche)" }}
                />
                <div
                  className="absolute -bottom-6 -right-6 w-40 h-40 rounded-full opacity-40 blur-2xl"
                  style={{ background: "var(--accent-sage)" }}
                />
                
                {/* Photo frame */}
                <div
                  className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={{ 
                    aspectRatio: "4/5",
                    border: "4px solid var(--bg-white)",
                    boxShadow: "0 25px 60px rgba(154, 123, 111, 0.2)",
                  }}
                >
                  <Image
                    src="/image/laura.jpg"
                    alt="Laura Baud - Thérapeute TCA"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 px-6 py-4 rounded-2xl shadow-xl"
                  style={{ background: "var(--bg-white)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(168, 181, 160, 0.3)" }}
                    >
                      <span className="text-2xl">🎓</span>
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: "var(--text-dark)" }}>17 ans</div>
                      <div className="text-sm" style={{ color: "var(--text-light)" }}>en psychiatrie</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              {/* Quick intro */}
              <div className="mb-8">
                <p className="text-lg leading-relaxed mb-4" style={{ color: "var(--text-medium)" }}>
                  Je suis thérapeute libérale depuis 2019, passionnée par l'accompagnement des personnes 
                  en quête de mieux-être. Avant cela, j'ai consacré <strong>17 années à la psychiatrie</strong> en 
                  tant qu'infirmière spécialisée, en France et en Suisse.
                </p>
                <p className="text-lg leading-relaxed" style={{ color: "var(--text-medium)" }}>
                  Aujourd'hui, je me consacre exclusivement à l'accompagnement des personnes souffrant 
                  d'<strong>hyperphagie</strong>. Ce choix est le fruit d'une volonté claire : développer une 
                  expertise ciblée pour offrir un soutien réellement transformateur.
                </p>
              </div>

              {/* CTA to modal */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center gap-3 px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02]"
                style={{ 
                  background: "var(--bg-white)", 
                  border: "1px solid var(--rose-medium)",
                  boxShadow: "0 4px 20px rgba(154, 123, 111, 0.1)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ background: "rgba(168, 181, 160, 0.3)" }}
                >
                  <svg className="w-5 h-5" style={{ color: "var(--brun)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <div className="font-medium" style={{ color: "var(--text-dark)" }}>
                    En savoir plus sur mon parcours
                  </div>
                  <div className="text-sm" style={{ color: "var(--text-light)" }}>
                    Mon approche, mes valeurs, mon histoire
                  </div>
                </div>
                <svg 
                  className="w-5 h-5 ml-auto transition-transform group-hover:translate-x-1" 
                  style={{ color: "var(--brun-doux)" }} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setIsModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          
          {/* Modal content */}
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl animate-fade-in"
            style={{ background: "var(--bg-white)" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div
              className="px-8 py-6"
              style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 100%)" }}
            >
              <h3
                className="text-2xl font-semibold"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
              >
                À propos de Laura
              </h3>
              <p style={{ color: "var(--text-medium)" }}>
                Mon parcours et mon approche thérapeutique
              </p>
            </div>

            {/* Tabs */}
            <div className="flex border-b" style={{ borderColor: "var(--rose-pale)" }}>
              <button
                onClick={() => setActiveTab("parcours")}
                className="flex-1 py-4 text-center font-medium transition-colors relative"
                style={{ color: activeTab === "parcours" ? "var(--brun)" : "var(--text-light)" }}
              >
                Mon parcours
                {activeTab === "parcours" && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: "var(--brun)" }}
                  />
                )}
              </button>
              <button
                onClick={() => setActiveTab("approche")}
                className="flex-1 py-4 text-center font-medium transition-colors relative"
                style={{ color: activeTab === "approche" ? "var(--brun)" : "var(--text-light)" }}
              >
                Mon approche
                {activeTab === "approche" && (
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ background: "var(--brun)" }}
                  />
                )}
              </button>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto" style={{ maxHeight: "calc(90vh - 200px)" }}>
              {activeTab === "parcours" ? (
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed" style={{ color: "var(--text-medium)" }}>
                    Je suis Laura, thérapeute libérale depuis 2019, passionnée par l'accompagnement 
                    des personnes en quête de mieux-être. Avant cela, j'ai consacré <strong>17 années 
                    à la psychiatrie</strong> en tant qu'infirmière spécialisée, en France et en Suisse, 
                    toujours guidée par une même conviction : derrière chaque trouble, il y a une 
                    histoire qui mérite d'être entendue.
                  </p>
                  
                  <div
                    className="p-6 rounded-2xl"
                    style={{ background: "var(--rose-pale)" }}
                  >
                    <h4
                      className="font-semibold mb-3"
                      style={{ color: "var(--brun-fonce)", fontFamily: "var(--font-playfair)" }}
                    >
                      Mes débuts en TCA
                    </h4>
                    <p style={{ color: "var(--text-medium)" }}>
                      Ma vocation s'est affirmée dès mes débuts à la <strong>Clinique des Vallées</strong>, 
                      dans l'unité dédiée aux troubles du comportement alimentaire (TCA), aux côtés 
                      du Dr Alain Perroud puis du Dr Filsnoël : J'ai accompagné des personnes 
                      confrontées à l'anorexie, la boulimie et l'hyperphagie, avec une approche 
                      profondément humaine.
                    </p>
                  </div>

                  <p className="text-lg leading-relaxed" style={{ color: "var(--text-medium)" }}>
                    Aujourd'hui, je me consacre exclusivement à l'accompagnement des personnes 
                    souffrant d'<strong>hyperphagie</strong>. Ce choix est le fruit d'une volonté claire : 
                    développer une expertise ciblée pour offrir un soutien réellement transformateur.
                  </p>

                  <div className="flex items-center gap-4 pt-4">
                    <div
                      className="flex items-center gap-2 px-4 py-2 rounded-full"
                      style={{ background: "rgba(168, 181, 160, 0.2)" }}
                    >
                      <span>🇫🇷</span>
                      <span className="text-sm" style={{ color: "var(--brun)" }}>France</span>
                    </div>
                    <div
                      className="flex items-center gap-2 px-4 py-2 rounded-full"
                      style={{ background: "rgba(168, 181, 160, 0.2)" }}
                    >
                      <span>🇨🇭</span>
                      <span className="text-sm" style={{ color: "var(--brun)" }}>Suisse</span>
                    </div>
                    <div
                      className="flex items-center gap-2 px-4 py-2 rounded-full"
                      style={{ background: "rgba(168, 181, 160, 0.2)" }}
                    >
                      <span>💼</span>
                      <span className="text-sm" style={{ color: "var(--brun)" }}>Depuis 2019</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div
                    className="p-6 rounded-2xl"
                    style={{ background: "linear-gradient(135deg, rgba(168, 181, 160, 0.15) 0%, rgba(201, 169, 154, 0.15) 100%)" }}
                  >
                    <p className="text-lg italic leading-relaxed" style={{ color: "var(--text-dark)" }}>
                      "Je ne vous propose pas un protocole figé. Je ne plaque pas des outils comme 
                      des recettes toutes faites. Je m'adapte à vous, à votre rythme, à votre histoire. 
                      Chaque séance est une rencontre vraie, un espace vivant où l'on avance ensemble."
                    </p>
                  </div>

                  <p className="leading-relaxed" style={{ color: "var(--text-medium)" }}>
                    Je tiens à ce que vous vous sentiez <strong>libre</strong> : libre de suspendre une séance, 
                    de dire qu'un outil ne vous convient pas, de poser vos limites. Votre liberté 
                    est précieuse. Elle est au cœur de mon accompagnement.
                  </p>

                  <p className="leading-relaxed" style={{ color: "var(--text-medium)" }}>
                    Je veux que mes séances soient un <strong>refuge</strong>, un lieu où vous vous sentez 
                    en sécurité. Je tiens la lanterne pendant que vous avancez. On travaille en équipe, 
                    dans un lien de confiance et de respect mutuel.
                  </p>

                  <div>
                    <h4
                      className="font-semibold mb-4"
                      style={{ color: "var(--brun-fonce)", fontFamily: "var(--font-playfair)" }}
                    >
                      Mes valeurs
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {values.map((value, i) => (
                        <div
                          key={i}
                          className="p-4 rounded-xl"
                          style={{ background: "var(--rose-pale)" }}
                        >
                          <div className="font-medium mb-1" style={{ color: "var(--brun)" }}>
                            {value.title}
                          </div>
                          <div className="text-sm" style={{ color: "var(--text-medium)" }}>
                            {value.desc}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className="p-5 rounded-2xl flex items-center gap-4"
                    style={{ background: "var(--bg-cream)", border: "1px solid var(--rose-medium)" }}
                  >
                    <div className="text-3xl">🛠️</div>
                    <div>
                      <div className="font-medium" style={{ color: "var(--text-dark)" }}>
                        Polyvalence des outils
                      </div>
                      <div className="text-sm" style={{ color: "var(--text-medium)" }}>
                        L'accompagnement est personnalisé selon vos besoins
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

