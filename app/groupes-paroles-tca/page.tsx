import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Groupe de psycho-éducation & paroles – TCA | Laura Baud",
  description:
    "Groupe de psycho-éducation et paroles pour femmes souffrant de TCA. Cycles de 4 ou 8 séances, 6 participantes maximum, 100% en ligne. Comprendre, explorer, progresser ensemble.",
  keywords: [
    "groupe de paroles TCA",
    "psycho-éducation",
    "hyperphagie",
    "boulimie",
    "troubles alimentaires",
    "thérapie de groupe",
    "soutien TCA",
    "groupe en ligne",
  ],
};

const cyclesCourts = [
  "Présentation & mise en confiance",
  "Les besoins",
  "Les limites",
  "Affirmation de soi",
];

const cyclesComplets = [
  "Présentation & mise en confiance",
  "Les besoins",
  "Les limites",
  "Affirmation de soi",
  "Confiance en soi",
  "Les peurs",
  "TCA et Entourage (vie amicale, familiale, amoureuse)",
  "Clôture & intégration",
];

const supports = [
  { name: "Écriture", color: "var(--accent-lavande)" },
  { name: "Dessins", color: "var(--peche)" },
  { name: "Parole", color: "var(--accent-sage)" },
  { name: "Cartes", color: "var(--rose-accent)" },
  { name: "Photolangage", color: "var(--brun-doux)" },
];

const benefices = [
  "Recevoir des outils psycho-éducatifs concrets (affirmation de soi, gestion des émotions, reconnaissance des besoins)",
  "Se sentir épaulée et comprise par d'autres femmes vivant les mêmes difficultés",
  "Explorer ses comportements et émotions dans un cadre bienveillant",
  "Créer un lien durable et un sentiment d'appartenance",
  "Participer depuis chez soi, en toute intimité, grâce au format 100% en ligne",
];

export default function GroupesTCAPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="circle-decoration top-10 -right-20 opacity-40" />
        <div className="circle-decoration bottom-20 -left-20 opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
          >
            100% en ligne • 6 participantes maximum
          </div>
          
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Groupe de psycho-éducation{" "}
            <span style={{ color: "var(--brun-doux)" }}>& paroles</span>
            <br />
            <span className="text-3xl md:text-4xl">– TCA –</span>
          </h1>
          
          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "var(--text-medium)" }}>
            Un espace bienveillant et structuré pour comprendre, explorer et progresser ensemble
          </p>
          
          <Link href="/contact" className="btn-primary">
            Rejoindre le groupe
          </Link>
        </div>
      </section>

      {/* Objectifs avec image groupe */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image groupe de parole */}
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-3xl transform rotate-2"
                style={{ background: "var(--accent-lavande)", opacity: 0.3 }}
              />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/image/groupe-parole.jpeg"
                  alt="Groupe de paroles - femmes qui échangent"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Objectifs */}
            <div>
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--rose-accent)" }}
              >
                Objectifs
              </span>
              <h2
                className="text-3xl md:text-4xl font-medium mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Un espace bienveillant et structuré
              </h2>

              <div className="space-y-4">
                {[
                  { text: "Comprendre les mécanismes des troubles alimentaires", color: "var(--accent-lavande)" },
                  { text: "Explorer ses émotions et ses besoins", color: "var(--peche)" },
                  { text: "Découvrir des outils concrets pour apaiser les crises", color: "var(--accent-sage)" },
                  { text: "Partager son vécu et se sentir soutenue par le groupe", color: "var(--rose-accent)" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl"
                    style={{ background: "var(--bg-cream)", borderLeft: `4px solid ${item.color}` }}
                  >
                    <p className="text-lg" style={{ color: "var(--text-dark)" }}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Les cycles */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Organisation des cycles
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Choisissez votre parcours
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cycle court */}
            <div
              className="rounded-3xl overflow-hidden"
              style={{ background: "var(--bg-white)", border: "2px solid var(--rose-medium)" }}
            >
              <div
                className="p-6 text-center"
                style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 100%)" }}
              >
                <h3
                  className="text-2xl font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
                >
                  Cycle court
                </h3>
                <p style={{ color: "var(--brun)" }}>4 séances</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "var(--brun)", fontFamily: "var(--font-playfair)" }}
                  >
                    110€
                  </span>
                  <p className="text-sm mt-1" style={{ color: "var(--text-light)" }}>
                    Engagement sur le cycle complet
                  </p>
                </div>
                <p className="text-center mb-6" style={{ color: "var(--text-medium)" }}>
                  Un premier parcours pour poser les bases et expérimenter les outils essentiels.
                </p>
                <h4 className="font-semibold mb-4" style={{ color: "var(--brun-fonce)" }}>
                  Thèmes abordés :
                </h4>
                <ul className="space-y-3">
                  {cyclesCourts.map((theme, i) => (
                    <li key={i} className="flex items-center gap-3" style={{ color: "var(--text-medium)" }}>
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium"
                        style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
                      >
                        {i + 1}
                      </span>
                      {theme}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Cycle complet */}
            <div
              className="rounded-3xl overflow-hidden relative"
              style={{ background: "var(--bg-white)", border: "2px solid var(--accent-lavande)" }}
            >
              {/* Badge recommandé */}
              <div
                className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold"
                style={{ background: "var(--accent-lavande)", color: "white" }}
              >
                Recommandé
              </div>
              <div
                className="p-6 text-center"
                style={{ background: "linear-gradient(135deg, var(--accent-lavande) 0%, var(--brun-doux) 100%)" }}
              >
                <h3
                  className="text-2xl font-semibold mb-2 text-white"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Cycle complet
                </h3>
                <p className="text-white/80">8 séances</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "var(--brun)", fontFamily: "var(--font-playfair)" }}
                  >
                    200€
                  </span>
                  <p className="text-sm mt-1" style={{ color: "var(--text-light)" }}>
                    Engagement sur le cycle complet
                  </p>
                </div>
                <p className="text-center mb-6" style={{ color: "var(--text-medium)" }}>
                  Un chemin plus approfondi, qui combine psycho-éducation et échanges, pour transformer durablement sa relation à soi et à la nourriture.
                </p>
                <h4 className="font-semibold mb-4" style={{ color: "var(--brun-fonce)" }}>
                  Thèmes abordés :
                </h4>
                <ul className="space-y-2">
                  {cyclesComplets.map((theme, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-medium)" }}>
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-medium"
                        style={{ background: "var(--accent-lavande)", color: "white" }}
                      >
                        {i + 1}
                      </span>
                      {theme}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horaires et Engagement - Format compact */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Horaires */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: "var(--bg-cream)", border: "1px solid var(--rose-medium)" }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--accent-lavande)" }}
              >
                HORAIRES
              </h3>
              <div className="space-y-2" style={{ color: "var(--text-dark)" }}>
                <p><strong>Séance tous les 15 jours</strong></p>
                <p>Le jeudi soir de <strong>19h30 à 21h00</strong></p>
                <p><strong>100% en ligne</strong></p>
              </div>
            </div>

            {/* Engagement */}
            <div
              className="p-6 rounded-2xl"
              style={{ background: "var(--bg-cream)", border: "1px solid var(--rose-medium)" }}
            >
              <h3
                className="text-xl font-semibold mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--accent-sage)" }}
              >
                ENGAGEMENT
              </h3>
              <div className="space-y-2" style={{ color: "var(--text-dark)" }}>
                <p><strong>Engagement sur 4 séances minimum</strong></p>
                <p><strong>Groupe fermé</strong></p>
                <p>Petit groupe sécurisant et constant : démarrage dès <strong>5 patientes</strong> (max 6)</p>
                <p>Nouvelles demandes sur <strong>liste d'attente</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supports utilisés */}
      <section className="py-16 bg-gradient-soft">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-10">
            <h3
              className="text-2xl font-semibold mb-2"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
            >
              Supports utilisés
            </h3>
            <p style={{ color: "var(--text-medium)" }}>
              Pour favoriser l'expression et l'introspection, les séances mobilisent des outils variés
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {supports.map((support, i) => (
              <div
                key={i}
                className="px-6 py-3 rounded-full font-medium"
                style={{ 
                  background: "var(--bg-white)", 
                  borderLeft: `4px solid ${support.color}`,
                  color: support.color,
                }}
              >
                {support.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bénéfices */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Pourquoi participer ?
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Les bénéfices du groupe
            </h2>
          </div>

          <div className="space-y-4">
            {benefices.map((benefice, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-5 rounded-2xl"
                style={{ background: "var(--bg-cream)" }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--accent-sage)", color: "white" }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg" style={{ color: "var(--text-dark)" }}>{benefice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="p-6 rounded-2xl"
            style={{ background: "var(--bg-white)", border: "2px solid var(--peche)" }}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
            >
              Conditions importantes
            </h3>
            <div className="space-y-3" style={{ color: "var(--text-dark)" }}>
              <p><strong>Aucun remboursement ne sera effectué</strong>, sauf en cas de problème de santé grave (sur justificatif médical).</p>
              <p>Si une participante ne peut pas assister à une séance, celle-ci est <strong>considérée comme perdue</strong>.</p>
              <p>L'inscription au cycle est un <strong>engagement ferme</strong>.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Prête à rejoindre le groupe ?
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
            Contactez-moi pour échanger sur votre situation et vous inscrire sur la liste d'attente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Me contacter
            </Link>
            <Link href="/faq" className="btn-secondary">
              Questions fréquentes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
