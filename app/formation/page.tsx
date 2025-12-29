import type { Metadata } from "next";
import Link from "next/link";
import FormationCards from "@/components/FormationCards";

export const metadata: Metadata = {
  title: "Programmes en ligne | Stop Hyperphagie, Dire non, Émotions",
  description:
    "Découvrez mes programmes en ligne pour surmonter l'hyperphagie, apprendre à s'affirmer et gérer ses émotions. Vidéos, PDF et outils pratiques.",
  keywords: [
    "formation TCA",
    "formation hyperphagie",
    "stop hyperphagie",
    "dire non sans peur",
    "gestion émotions",
    "cours en ligne",
    "outils thérapeutiques",
  ],
};

export default function FormationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="circle-decoration top-10 -right-20 opacity-40" style={{ background: "var(--accent-sage)" }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <span
            className="text-sm font-medium tracking-widest uppercase mb-4 block"
            style={{ color: "var(--rose-accent)" }}
          >
            Programmes en ligne
          </span>
          
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Avancez à{" "}
            <span style={{ color: "var(--brun-doux)" }}>votre rythme</span>
          </h1>
          
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
            Des formations concrètes pour vous accompagner dans votre cheminement. 
            Vidéos, PDF et outils pratiques accessibles immédiatement.
          </p>
        </div>
      </section>

      {/* Formations Cards */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <FormationCards />
        </div>
      </section>

      {/* Outils gratuits CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div
            className="p-8 md:p-12 rounded-3xl"
            style={{ background: "linear-gradient(135deg, var(--accent-sage) 0%, var(--peche) 100%)" }}
            >
            <h2
              className="text-3xl md:text-4xl font-medium mb-4 text-white"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              🎁 Mes outils gratuits
            </h2>
            <p className="text-lg mb-8 text-white/90 max-w-xl mx-auto">
              Commencez dès maintenant avec des ressources gratuites pour amorcer votre cheminement.
            </p>
            <a
              href="https://l-baud.systeme.io/cadeau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105"
              style={{
                background: "white",
                color: "var(--brun-fonce)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
                      >
              Accéder aux outils gratuits
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Questions fréquentes
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Comment accéder aux formations ?",
                a: "Après votre achat, vous recevez immédiatement un email avec vos accès. Les formations sont hébergées sur Teachizy, une plateforme simple et intuitive."
              },
              {
                q: "Combien de temps ai-je accès au contenu ?",
                a: "L'accès est illimité ! Vous pouvez revenir sur les contenus autant de fois que vous le souhaitez, à vie."
              },
              {
                q: "Est-ce que je peux suivre plusieurs formations ?",
                a: "Absolument ! Les trois programmes sont complémentaires. 'Dire non sans peur' pour l'affirmation de soi, 'Les émotions' pour la régulation émotionnelle, et 'Stop Hyperphagie' pour un travail en profondeur sur les troubles alimentaires."
              },
              {
                q: "Y a-t-il un accompagnement personnalisé ?",
                a: "Les formations sont en autonomie, mais vous pouvez toujours réserver une consultation individuelle si vous souhaitez un accompagnement plus personnalisé."
              },
            ].map((faq, i) => (
              <div key={i} className="card">
                <h3 className="font-semibold mb-2" style={{ color: "var(--brun-fonce)" }}>
                  {faq.q}
                </h3>
                <p style={{ color: "var(--text-medium)" }}>{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/faq" className="btn-secondary">
              Voir toutes les questions →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, rgba(168, 181, 160, 0.3) 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Besoin d'un accompagnement personnalisé ?
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
            Les formations en ligne sont un excellent complément, mais rien ne remplace 
            un suivi individuel adapté à votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Prendre rendez-vous
            </Link>
            <Link href="/offres" className="btn-secondary">
              Découvrir mes offres
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

