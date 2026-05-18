import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Actualités & À venir | Laura Baud - Thérapeute TCA",
  description:
    "Découvrez les actualités, les prochains événements et les annonces de Laura Baud, thérapeute spécialisée TCA.",
  keywords: [
    "actualités",
    "événements",
    "annonces",
    "TCA",
    "thérapeute",
    "Laura Baud",
  ],
};

const actualites = [
  {
    date: "Mai 2026",
    type: "Nouveau",
    title: "Nouveaux tarifs — Séance Standard 95€ & Tarif réduit 75€",
    description: "La séance standard passe à 95€ (1h), un tarif unique, simple et stable. Un tarif réduit à 75€ est également proposé (1 à 2 places maximum), réservé aux femmes engagées traversant une situation financière particulière — attribution selon disponibilité, sans justificatif demandé.",
    link: "/offres",
    linkText: "Voir les tarifs",
  },
  {
    date: "Décembre 2025",
    type: "À venir",
    title: "Nouveau cycle de groupe TCA",
    description: "Un nouveau groupe de psycho-éducation & paroles démarre dès que 5 participantes seront inscrites. Inscrivez-vous sur la liste d'attente !",
    link: "/groupes-paroles-tca",
    linkText: "En savoir plus",
  },
  {
    date: "Décembre 2025",
    type: "À venir",
    title: "Réflexion autour d'une offre sur la haute sensibilité",
    description: "Je travaille actuellement sur une offre dédiée à l'accompagnement de la haute sensibilité (HPE). Restez connectées pour plus d'informations !",
    link: "/contact",
    linkText: "Me contacter",
  },
];

export default function ActualitesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-44 pb-16 bg-gradient-hero overflow-hidden">
        <div className="circle-decoration top-10 -right-20 opacity-30" />
        <div className="circle-decoration bottom-0 -left-20 opacity-20" style={{ background: "var(--accent-sage)" }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Restez informée
          </div>
          
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Actualités{" "}
            <span style={{ color: "var(--brun-doux)" }}>& À venir</span>
          </h1>
          
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
            Retrouvez ici toutes les nouveautés, les événements à venir et les annonces importantes.
          </p>
        </div>
      </section>

      {/* Actualités */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-8">
            {actualites.map((actu, i) => (
              <article
                key={i}
                className="relative p-8 rounded-3xl transition-all duration-300 hover:scale-[1.01]"
                style={{
                  background: "var(--bg-cream)",
                  border: actu.type === "Nouveau" ? "2px solid var(--accent-sage)" : "2px solid var(--peche)",
                }}
              >
                {/* Badge */}
                <div
                  className="absolute -top-3 left-8 px-4 py-1 rounded-full text-sm font-bold"
                  style={{
                    background: actu.type === "Nouveau" ? "var(--accent-sage)" : "var(--peche)",
                    color: actu.type === "Nouveau" ? "white" : "var(--brun-fonce)",
                  }}
                >
                  {actu.type === "Nouveau" ? "✨ Nouveau" : "📅 À venir"}
                </div>

                <div className="pt-4">
                  <p className="text-sm mb-2" style={{ color: "var(--text-light)" }}>
                    {actu.date}
                  </p>
                  <h2
                    className="text-2xl font-semibold mb-4"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
                  >
                    {actu.title}
                  </h2>
                  <p className="text-lg mb-6" style={{ color: "var(--text-medium)" }}>
                    {actu.description}
                  </p>
                  <Link
                    href={actu.link}
                    className="inline-flex items-center gap-2 font-medium transition-all hover:gap-3"
                    style={{ color: "var(--brun-doux)" }}
                  >
                    {actu.linkText}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* Message si pas d'actualités */}
          {actualites.length === 0 && (
            <div className="text-center py-16">
              <span className="text-6xl mb-6 block">📭</span>
              <h2
                className="text-2xl font-medium mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
              >
                Pas d'actualité pour le moment
              </h2>
              <p style={{ color: "var(--text-medium)" }}>
                Revenez bientôt pour découvrir les prochaines annonces !
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / Contact CTA */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ne manquez rien !
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
            Contactez-moi pour être informée des prochains événements et nouveautés.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Me contacter
            </Link>
            <a
              href="https://www.tiktok.com/@laurapsy0"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center gap-2"
            >
              Suivez-moi sur TikTok
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}


