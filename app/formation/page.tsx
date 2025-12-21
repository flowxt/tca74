import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formation en ligne | TCA & Haute Sensibilité",
  description:
    "Formations et ressources en ligne pour mieux comprendre les troubles du comportement alimentaire et la haute sensibilité. Outils pratiques et accompagnement à votre rythme.",
  keywords: [
    "formation TCA",
    "formation en ligne",
    "troubles alimentaires",
    "haute sensibilité",
    "cours en ligne",
    "ressources",
    "outils thérapeutiques",
  ],
};

const modules = [
  {
    id: 1,
    title: "Comprendre les TCA",
    description: "Les mécanismes des troubles du comportement alimentaire : hyperphagie, boulimie, anorexie. Comprendre pour mieux accompagner.",
    duration: "4 modules",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Apprivoiser sa sensibilité",
    description: "Reconnaître et accepter sa haute sensibilité. Transformer ce trait en force au quotidien.",
    duration: "6 modules",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Gestion des émotions",
    description: "Outils pratiques pour accueillir et traverser les émotions intenses. Techniques de régulation émotionnelle.",
    duration: "5 modules",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Poser ses limites",
    description: "Apprendre à dire non sans culpabilité. Construire des relations plus saines et équilibrées.",
    duration: "3 modules",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const features = [
  {
    title: "À votre rythme",
    desc: "Accédez aux contenus quand vous voulez, où vous voulez. Pas de pression, juste votre chemin.",
    icon: "🕐",
  },
  {
    title: "Contenus riches",
    desc: "Vidéos, exercices pratiques, fiches téléchargeables et méditations guidées.",
    icon: "📚",
  },
  {
    title: "Support inclus",
    desc: "Possibilité de poser vos questions et d'échanger lors de sessions live mensuelles.",
    icon: "💬",
  },
  {
    title: "Accès illimité",
    desc: "Une fois inscrite, accédez aux contenus à vie. Revenez-y autant que nécessaire.",
    icon: "♾️",
  },
];

export default function FormationPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="circle-decoration top-10 -right-20 opacity-40" style={{ background: "var(--accent-sage)" }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: "rgba(168, 181, 160, 0.3)", color: "var(--brun)" }}
          >
            Bientôt disponible
          </div>
          
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Formation{" "}
            <span style={{ color: "var(--brun-doux)" }}>en ligne</span>
          </h1>
          
          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "var(--text-medium)" }}>
            Des ressources et outils pour avancer à votre rythme dans la compréhension 
            des TCA et de la haute sensibilité.
          </p>
          
          <Link href="/contact" className="btn-primary">
            Être informée du lancement
          </Link>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-8" style={{ background: "var(--rose-pale)" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-lg font-medium" style={{ color: "var(--brun-fonce)" }}>
            🌸 La formation est en cours de création. Inscrivez-vous pour être informée en avant-première !
          </p>
        </div>
      </section>

      {/* Modules */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--accent-sage)" }}
            >
              Programme
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Les modules de formation
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
              Un parcours progressif pour vous accompagner pas à pas
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {modules.map((module) => (
              <div key={module.id} className="card group">
                <div className="flex items-start gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                    style={{ background: "rgba(168, 181, 160, 0.3)", color: "var(--brun)" }}
                  >
                    {module.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className="text-xs font-medium px-2 py-1 rounded-full"
                        style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
                      >
                        Module {module.id}
                      </span>
                      <span className="text-xs" style={{ color: "var(--text-light)" }}>
                        {module.duration}
                      </span>
                    </div>
                    <h3
                      className="text-xl font-semibold mb-2"
                      style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
                    >
                      {module.title}
                    </h3>
                    <p style={{ color: "var(--text-medium)" }}>
                      {module.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--accent-sage)" }}
            >
              Inclus
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ce qui vous attend
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="card text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {feature.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(168, 181, 160, 0.4) 0%, var(--rose-pale) 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Soyez informée en premier
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
            Inscrivez-vous à la liste d'attente pour recevoir un accès prioritaire 
            et bénéficier d'un tarif de lancement exclusif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Rejoindre la liste d'attente
            </Link>
            <Link href="/blog" className="btn-secondary">
              Lire les articles en attendant
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

