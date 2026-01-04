import type { Metadata } from "next";
import QuizCards from "@/components/QuizCards";

export const metadata: Metadata = {
  title: "Suis-je au bon endroit ? | Questionnaire",
  description:
    "Découvrez si mon accompagnement est adapté à votre situation grâce à ce questionnaire ludique. TCA, hyperphagie, boulimie, gestion des émotions.",
  keywords: [
    "questionnaire TCA",
    "test hyperphagie",
    "boulimie",
    "gestion émotions",
    "accompagnement",
    "thérapie",
  ],
};

export default function QuestionnairePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-44 pb-12 bg-gradient-hero overflow-hidden">
        <div className="circle-decoration top-10 -right-20 opacity-30" />
        <div className="circle-decoration bottom-0 -left-20 opacity-20" style={{ background: "var(--accent-lavande)" }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
          >
            ✨ Quiz interactif
          </div>
          
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Suis-je au{" "}
            <span style={{ color: "var(--brun-doux)" }}>bon endroit</span> ?
          </h1>
          
          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-4" style={{ color: "var(--text-medium)" }}>
            Prenez un moment pour vous. Cliquez sur les cartes qui résonnent en vous, 
            sans jugement, avec douceur.
          </p>
          
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--text-light)" }}>
            Ce questionnaire n'est pas un diagnostic, mais un premier pas pour mieux vous connaître 
            et voir si mon accompagnement peut vous aider.
          </p>
        </div>
      </section>

      {/* Quiz Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <QuizCards />
        </div>
      </section>
    </>
  );
}

