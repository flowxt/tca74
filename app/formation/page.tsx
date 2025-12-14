import type { Metadata } from "next";
import Link from "next/link";
import FormationCards from "@/components/FormationCards";

export const metadata: Metadata = {
  title: "Programmes en ligne | Sortir de l'hyperphagie & S'affirmer",
  description:
    "Programmes en ligne pour sortir de l'hyperphagie et apprendre à s'affirmer. Outils concrets, vidéos pratiques et accompagnement par une thérapeute spécialisée TCA.",
  keywords: [
    "programme hyperphagie",
    "sortir de l'hyperphagie",
    "formation TCA",
    "apprendre à dire non",
    "affirmation de soi",
    "gestion émotions alimentaires",
    "programme en ligne",
  ],
};

const testimonials = [
  {
    content:
      "Cette formation m'a permis de comprendre enfin pourquoi je me tournais vers la nourriture. Les outils sont concrets et applicables immédiatement.",
    author: "Marie",
    location: "Annecy",
    formation: "Stop Hyperphagie",
  },
  {
    content:
      "J'ai enfin réussi à poser mes limites au travail. La méthode est claire et les exercices m'ont vraiment aidée à prendre confiance.",
    author: "Sophie",
    location: "Genève",
    formation: "Dire non sans peur",
  },
  {
    content:
      "Après des années de régimes et de culpabilité, j'ai retrouvé une relation apaisée avec la nourriture. Merci infiniment Laura.",
    author: "Claire",
    location: "Lyon",
    formation: "Stop Hyperphagie",
  },
];

const guarantees = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Paiement sécurisé",
    desc: "Transaction 100% sécurisée",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Accès immédiat",
    desc: "Commencez dès votre inscription",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Accès illimité",
    desc: "Revenez autant que nécessaire",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Satisfait ou remboursé",
    desc: "Garantie 100% sur Stop Hyperphagie",
  },
];

export default function FormationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div
          className="absolute top-20 -right-32 w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{ background: "var(--accent-sage)" }}
        />
        <div
          className="absolute -bottom-20 -left-32 w-80 h-80 rounded-full opacity-40 blur-3xl"
          style={{ background: "var(--peche)" }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium mb-8 animate-fade-in"
              style={{
                background: "linear-gradient(135deg, rgba(168, 181, 160, 0.3) 0%, rgba(201, 169, 154, 0.3) 100%)",
                color: "var(--brun-fonce)",
                border: "1px solid rgba(168, 181, 160, 0.4)",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Programmes disponibles maintenant
          </div>
          
          <h1
              className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-fade-in"
              style={{ fontFamily: "var(--font-playfair)", animationDelay: "0.1s" }}
            >
              Transformez votre relation <br className="hidden md:block" />
              <span
                className="relative inline-block"
                style={{
                  background: "linear-gradient(135deg, var(--brun-doux) 0%, var(--rose-accent) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                avec vous-même
              </span>
          </h1>
          
            <p
              className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-10 animate-fade-in"
              style={{ color: "var(--text-medium)", animationDelay: "0.2s" }}
            >
              Des programmes en ligne créés par une thérapeute spécialisée TCA
              avec plus de <strong>10 ans d'expérience</strong>. Des outils concrets
              pour retrouver la sérénité.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              <a href="#formations" className="btn-primary text-lg px-8 py-4">
                Découvrir les programmes
              </a>
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { value: "10+", label: "ans d'expérience" },
              { value: "17", label: "ans en tant qu'infirmière" },
              { value: "100%", label: "garantie remboursement" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-bold mb-1"
                  style={{ color: "var(--brun)", fontFamily: "var(--font-playfair)" }}
                >
                  {stat.value}
                </div>
                <div className="text-sm" style={{ color: "var(--text-light)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes Section */}
      <section id="formations" className="section-padding bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--accent-sage)" }}
            >
              Mes programmes
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Choisissez votre transformation
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
              Deux programmes complets pour vous accompagner vers une vie plus sereine et équilibrée
            </p>
          </div>

          <FormationCards />
        </div>
      </section>

      {/* Social Proof / Testimonials */}
      <section className="section-padding" style={{ background: "var(--bg-white)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--accent-sage)" }}
            >
              Témoignages
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Elles ont suivi mes formations
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
              Découvrez les retours de celles qui ont fait le premier pas vers une vie plus sereine
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div
                key={i}
                className="relative p-8 rounded-3xl"
                style={{
                  background: "var(--bg-cream)",
                  border: "1px solid rgba(212, 181, 169, 0.2)",
                }}
              >
                {/* Quote mark */}
                <div
                  className="absolute -top-4 left-8 text-6xl font-serif"
                  style={{ color: "var(--rose-medium)", opacity: 0.5 }}
                >
                  "
                </div>
                <div className="pt-4">
                  <p
                    className="text-lg mb-6 leading-relaxed italic"
                    style={{ color: "var(--text-dark)" }}
                  >
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold"
                      style={{
                        background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 100%)",
                        color: "var(--brun)",
                      }}
                    >
                      {testimonial.author[0]}
                    </div>
                    <div>
                      <div className="font-semibold" style={{ color: "var(--text-dark)" }}>
                        {testimonial.author}
                      </div>
                      <div className="text-sm" style={{ color: "var(--text-light)" }}>
                        {testimonial.location} • {testimonial.formation}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--accent-sage)" }}
              >
                Votre formatrice
              </span>
              <h2
                className="text-3xl md:text-4xl font-medium mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Une expertise reconnue
              </h2>
              <div className="space-y-4 text-lg" style={{ color: "var(--text-medium)" }}>
                <p>
                  Ces formations sont le résultat de <strong>plus de 10 ans d'expérience</strong> auprès
                  de personnes souffrant de troubles alimentaires.
                </p>
                <p>
                  En tant qu'<strong>infirmière pendant plus de 17 ans</strong> en France et en Suisse,
                  puis thérapeute spécialisée dans les TCA, j'ai développé une approche unique
                  et bienveillante.
                </p>
                <p>
                  Mon objectif : vous donner les <strong>outils concrets</strong> pour reprendre
                  le contrôle de votre vie et retrouver une relation apaisée avec vous-même.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ background: "rgba(168, 181, 160, 0.3)", color: "var(--brun)" }}
                >
                  ✓ Thérapeute certifiée
                </div>
                <div
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ background: "rgba(168, 181, 160, 0.3)", color: "var(--brun)" }}
                >
                  ✓ Spécialiste TCA
                </div>
                <div
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ background: "rgba(168, 181, 160, 0.3)", color: "var(--brun)" }}
                >
                  ✓ 17 ans infirmière
                </div>
              </div>
            </div>
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl transform rotate-3"
                style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 100%)" }}
              />
              <div
                className="relative rounded-3xl p-8"
                style={{ background: "var(--bg-white)", border: "1px solid rgba(212, 181, 169, 0.3)" }}
              >
                <div className="space-y-6">
                  {[
                    { label: "Années d'expérience TCA", value: "10+" },
                    { label: "Années en tant qu'infirmière", value: "17" },
                    { label: "Satisfaction garantie", value: "100%" },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center pb-4" style={{ borderBottom: i < 2 ? "1px solid rgba(212, 181, 169, 0.2)" : "none" }}>
                      <span style={{ color: "var(--text-medium)" }}>{item.label}</span>
                      <span className="text-2xl font-bold" style={{ color: "var(--brun)", fontFamily: "var(--font-playfair)" }}>
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16" style={{ background: "var(--bg-white)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((item, i) => (
              <div key={i} className="text-center p-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(168, 181, 160, 0.2)", color: "var(--brun)" }}
                >
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-1" style={{ color: "var(--text-dark)" }}>
                  {item.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--accent-sage)" }}
            >
              Questions fréquentes
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Vous avez des questions ?
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Comment accéder à la formation après l'achat ?",
                a: "Dès votre paiement validé, vous recevez un email avec vos identifiants de connexion. Vous pouvez commencer immédiatement, à votre rythme.",
              },
              {
                q: "Combien de temps ai-je accès à la formation ?",
                a: "L'accès est illimité ! Vous pouvez revenir sur les contenus autant de fois que nécessaire, sans limite de temps.",
              },
              {
                q: "La formation Stop Hyperphagie est-elle vraiment garantie ?",
                a: "Oui, je vous offre une garantie de remboursement à 100% si vous n'êtes pas satisfaite après avoir suivi le programme complet.",
              },
              {
                q: "Ces formations remplacent-elles un suivi thérapeutique ?",
                a: "Ces formations sont des outils complémentaires. Pour un suivi personnalisé, je vous invite à découvrir mes consultations individuelles.",
              },
              {
                q: "Puis-je suivre les deux formations ?",
                a: "Deux chemins possibles, selon votre rythme et vos priorités : La formation STOP Hyperphagie est la plus complète — elle aborde en profondeur les mécanismes de l'hyperphagie, avec un bloc entier consacré à l'affirmation de soi. Mais si vous préférez commencer en douceur, ou concentrer vos efforts sur l'affirmation de soi dans un premier temps, la mini formation « Apprendre à dire non » est idéale. Elle vous permet d'ancrer des changements concrets et positifs, qui auront un impact direct sur votre relation à l'alimentation. À vous de choisir le chemin qui vous parle le plus aujourd'hui.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl overflow-hidden"
                style={{ background: "var(--bg-white)", border: "1px solid rgba(212, 181, 169, 0.2)" }}
              >
                <summary
                  className="flex justify-between items-center p-6 cursor-pointer list-none"
                  style={{ color: "var(--text-dark)" }}
                >
                  <span className="font-medium text-lg pr-4">{faq.q}</span>
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform group-open:rotate-45"
                    style={{ background: "rgba(168, 181, 160, 0.3)", color: "var(--brun)" }}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p style={{ color: "var(--text-medium)" }}>{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="section-padding relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, var(--brun-fonce) 0%, var(--brun) 50%, var(--brun-doux) 100%)",
        }}
      >
        {/* Decorative elements */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10"
          style={{ background: "white", filter: "blur(80px)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "white", filter: "blur(60px)" }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6 text-white"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Prête à transformer votre vie ?
          </h2>
          <p className="text-xl mb-10 text-white/80 max-w-2xl mx-auto">
            Ne laissez plus vos émotions contrôler votre vie.
            Investissez en vous et retrouvez la sérénité que vous méritez.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://psy-tca-annecy.teachizy.fr/formations/stop-hyperphagie"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "white",
                color: "var(--brun-fonce)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              Stop Hyperphagie — 50€
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="https://psy-tca-annecy.teachizy.fr/formations/dire-non-sans-peur-les-outils-concrets-pour-saffirmer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105"
              style={{
                background: "transparent",
                color: "white",
                border: "2px solid rgba(255,255,255,0.5)",
              }}
            >
              Dire non sans peur — 25€
            </a>
          </div>

          <p className="text-sm text-white/60">
            Paiement sécurisé • Accès immédiat • Satisfait ou remboursé
          </p>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16" style={{ background: "var(--bg-cream)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg mb-6" style={{ color: "var(--text-medium)" }}>
            Vous avez des questions sur les formations ou vous préférez un accompagnement personnalisé ?
          </p>
          <Link href="/contact" className="btn-secondary inline-flex items-center gap-2">
            Me contacter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
