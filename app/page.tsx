import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section - Style 2025 full width */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Decorative circles */}
        <div className="circle-decoration top-20 -left-40 animate-float" />
        <div className="circle-decoration bottom-40 -right-20 animate-float" style={{ animationDelay: "2s" }} />
        <div className="circle-decoration top-1/3 right-20 w-32 h-32 animate-float" style={{ animationDelay: "1s" }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 text-center">
          {/* Badge */}
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-8 animate-fade-in"
            style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
          >
            ✨ Laura Baud — Annecy • Genève • Lausanne
          </div>
          
          {/* Titre principal - Grande typographie */}
          <h1
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-medium mb-8 animate-fade-in-up leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
          >
            Thérapeute TCA
            <br />
            <span style={{ color: "var(--brun-doux)" }}>centré sur les émotions</span>
          </h1>
          
          {/* Sous-titre */}
          <p
            className="text-xl md:text-2xl leading-relaxed mb-6 max-w-3xl mx-auto animate-fade-in-up delay-200"
            style={{ color: "var(--text-medium)" }}
          >
            Spécialisée <strong style={{ color: "var(--brun)" }}>boulimie & hyperphagie</strong>.
            <br className="hidden md:block" />
            Le TCA est un symptôme — je travaille sur ce qui le nourrit.
          </p>
          
          {/* Les 4 piliers */}
          <div
            className="flex flex-wrap justify-center gap-3 mb-10 animate-fade-in-up delay-200"
          >
            {["Affirmation de soi", "Connaissance des besoins", "Poser ses limites", "Relations"].map((pillar, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-full text-sm font-medium"
                style={{ background: "var(--bg-white)", color: "var(--brun)", border: "1px solid var(--rose-medium)" }}
              >
                {pillar}
              </span>
            ))}
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300 mb-16">
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Prendre rendez-vous
            </Link>
            <Link href="/questionnaire" className="btn-secondary text-lg px-8 py-4">
              Suis-je au bon endroit ?
            </Link>
          </div>
          
          {/* Logo en dessous */}
          <div className="relative flex justify-center animate-fade-in delay-400">
            <div className="relative w-48 h-48 md:w-64 md:h-64 animate-float">
        <Image
                src="/logo.png"
                alt="Laura Baud - Thérapeute TCA"
                fill
                className="object-contain drop-shadow-xl"
          priority
        />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            style={{ color: "var(--rose-accent)" }}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section - Approche centrée émotions */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--rose-accent)" }}
              >
                Mon approche
              </span>
              <h2
                className="text-3xl md:text-4xl font-medium mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Le TCA est un{" "}
                <span style={{ color: "var(--brun-doux)" }}>symptôme</span>
              </h2>
              <div className="space-y-4 text-lg" style={{ color: "var(--text-medium)" }}>
                <p>
                  Je ne travaille pas <em>sur</em> le trouble alimentaire — je travaille sur{" "}
                  <strong>ce qui le nourrit</strong> : vos émotions, vos besoins non exprimés,
                  vos difficultés relationnelles.
                </p>
                <p>
                  Ma spécialité : accompagner les femmes qui souffrent de{" "}
                  <strong>boulimie ou d'hyperphagie</strong> à retrouver un rapport apaisé
                  avec elles-mêmes. Pas de régimes, pas de comptage — mais un travail profond
                  sur l'<strong>affirmation de soi</strong> et la <strong>gestion des émotions</strong>.
                </p>
                <p>
                  Consultations <strong>100% en ligne</strong> : Annecy, Genève, Lausanne
                  et toute la francophonie.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl transform rotate-3"
                style={{ background: "var(--rose-pale)" }}
              />
              <div
                className="relative rounded-3xl p-8"
                style={{ background: "var(--bg-cream)" }}
              >
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { number: "17+", label: "Années en psychiatrie" },
                    { number: "100%", label: "En ligne" },
                    { number: "6", label: "Participantes max par groupe" },
                    { number: "∞", label: "Bienveillance" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-4">
                      <div
                        className="text-3xl md:text-4xl font-semibold mb-2"
                        style={{ color: "var(--brun-doux)", fontFamily: "var(--font-playfair)" }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-sm" style={{ color: "var(--text-light)" }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars Section - Les 4 axes */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Les piliers de mon accompagnement
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Travailler la racine, pas le symptôme
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
              Mes séances s'articulent autour de 4 axes fondamentaux
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "💪",
                title: "Affirmation de soi",
                desc: "Apprendre à exprimer ses besoins, ses envies et ses limites sans culpabilité.",
              },
              {
                icon: "🎯",
                title: "Connaissance de ses besoins",
                desc: "Identifier ce dont vous avez vraiment besoin au-delà de la nourriture.",
              },
              {
                icon: "🚧",
                title: "Poser ses limites",
                desc: "Dire non, se protéger, ne plus se laisser envahir par les autres.",
              },
              {
                icon: "💬",
                title: "Problématiques relationnelles",
                desc: "Comprendre et transformer les schémas qui vous font souffrir.",
              },
            ].map((pillar, i) => (
              <div
                key={i}
                className="card text-center hover:border-[var(--rose-accent)]"
              >
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils Section - Supports symboliques */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images des cartes */}
            <div className="relative order-2 lg:order-1">
              <div className="grid grid-cols-3 gap-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/image/card-lumiere.jpeg"
                    alt="Les Cartes Lumière de Lise Bartoli"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/image/oracle.jpeg"
                    alt="L'Oracle de l'enfant intérieur"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <Image
                    src="/image/jeu.jpeg"
                    alt="Jeu Dixit"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Texte */}
            <div className="order-1 lg:order-2">
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--rose-accent)" }}
              >
                Mes outils
              </span>
              <h2
                className="text-3xl md:text-4xl font-medium mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Des supports{" "}
                <span style={{ color: "var(--brun-doux)" }}>symboliques</span>
                <br />pour libérer la parole
              </h2>
              <div className="space-y-4 text-lg" style={{ color: "var(--text-medium)" }}>
                <p>
                  J'utilise des <strong>supports symboliques</strong> (Oracle de l'enfant intérieur,
                  cartes Bartoli, Dixit) pour faciliter l'<strong>expression des émotions</strong>{" "}
                  et révéler les besoins profonds.
                </p>
                <p>
                  Ces cartes sont des <strong>médiateurs</strong> : elles ouvrent un espace créatif,
                  permettent d'explorer les problématiques relationnelles et aident à{" "}
                  <strong>poser des mots là où il est parfois difficile de parler</strong>.
                </p>
                <p className="text-base" style={{ color: "var(--text-light)" }}>
                  Une approche qui me distingue et qui apporte une dimension ludique et profonde
                  à nos séances.
                </p>
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary">
                  Découvrir cette approche
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Mes accompagnements
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Plusieurs chemins pour avancer
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
              Individuel ou en groupe, chaque accompagnement est centré sur les émotions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Groupes TCA */}
            <Link href="/groupes-paroles-tca" className="card group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: "var(--rose-pale)" }}
              >
                <svg className="w-7 h-7" style={{ color: "var(--brun)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
              >
                Groupes de Paroles TCA
              </h3>
              <p className="mb-4" style={{ color: "var(--text-medium)" }}>
                Un espace collectif pour les femmes souffrant d'hyperphagie ou de boulimie.
                Briser la solitude, faire circuler la parole.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--brun-doux)" }}>
                <span>En savoir plus</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Card 2 - Haute Sensibilité */}
            <Link href="/haute-sensibilite" className="card group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: "var(--accent-lavande)", opacity: 0.5 }}
              >
                <svg className="w-7 h-7" style={{ color: "var(--brun)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
              >
                Haute Sensibilité
              </h3>
              <p className="mb-4" style={{ color: "var(--text-medium)" }}>
                Accompagnement individuel et groupes pour les personnes hypersensibles ou HPI.
                Apprivoiser sa sensibilité comme une force.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--brun-doux)" }}>
                <span>En savoir plus</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>

            {/* Card 3 - Consultation */}
            <Link href="/contact" className="card group">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{ background: "var(--accent-sage)", opacity: 0.5 }}
              >
                <svg className="w-7 h-7" style={{ color: "var(--brun)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
              >
                Consultation Individuelle
              </h3>
              <p className="mb-4" style={{ color: "var(--text-medium)" }}>
                Un accompagnement personnalisé, confidentiel et doux, pour vous déposer en tête-à-tête.
                En ligne, à votre rythme.
              </p>
              <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--brun-doux)" }}>
                <span>Prendre RDV</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / Values Section */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span
            className="text-sm font-medium tracking-widest uppercase mb-4 block"
            style={{ color: "var(--rose-accent)" }}
          >
            Valeurs
          </span>
          <h2
            className="text-3xl md:text-4xl font-medium mb-12"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Un cadre fondé sur la{" "}
            <span style={{ color: "var(--brun-doux)" }}>confiance</span>
          </h2>
          
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Confidentialité",
                desc: "Tout ce qui est partagé reste entre nous, dans un espace sécurisé.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "Bienveillance",
                desc: "Accueil inconditionnel, sans jugement, avec douceur et présence.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Non-jugement",
                desc: "Votre histoire est unique. Je vous accompagne là où vous en êtes.",
              },
            ].map((value, i) => (
              <div key={i} className="p-6">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
                >
                  {value.icon}
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {value.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Questions fréquentes
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Vous vous posez des questions ?
            </h2>
          </div>

          <div className="space-y-4 mb-8">
            {[
              {
                q: "Êtes-vous diététicienne ?",
                a: "Non. Mon accompagnement va au-delà de la nutrition : je travaille sur les émotions, les traumatismes et la relation au corps. Pas de régimes ni de comptage calorique.",
              },
              {
                q: "Le suivi en ligne est-il efficace ?",
                a: "Oui, il suffit d'une connexion stable. Vous pouvez consulter où que vous soyez : Annecy, Genève, Lausanne ou ailleurs.",
              },
              {
                q: "Je n'ai jamais consulté pour un TCA, est-ce pertinent ?",
                a: "Absolument. Pousser la porte est déjà un grand pas. Vous avancez à votre rythme, sans jugement.",
              },
            ].map((item, i) => (
              <div key={i} className="card">
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
                >
                  {item.q}
                </h3>
                <p style={{ color: "var(--text-medium)" }}>{item.a}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-base font-medium transition-colors"
              style={{ color: "var(--brun-doux)" }}
            >
              Voir toutes les questions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 50%, var(--nude) 100%)" }}
      >
        <div className="circle-decoration -top-20 -left-20 opacity-40" />
        <div className="circle-decoration -bottom-40 -right-40 opacity-30" />
        
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
          >
            Prête à commencer ce chemin ?
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
            Le premier pas est souvent le plus difficile. Je suis là pour vous accompagner,
            à votre rythme, vers un mieux-être durable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Prendre rendez-vous
            </Link>
            <Link href="/faq" className="btn-secondary">
              Consulter la FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Location SEO Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Zones d'intervention
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Consultations en ligne depuis
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { city: "Annecy", region: "Haute-Savoie, France" },
              { city: "Genève", region: "Suisse" },
              { city: "Lausanne", region: "Vaud, Suisse" },
              { city: "Partout", region: "En ligne" },
            ].map((loc, i) => (
              <div
                key={i}
                className="card text-center hover:border-[var(--rose-accent)]"
              >
                <svg
                  className="w-8 h-8 mx-auto mb-3"
                  style={{ color: "var(--rose-accent)" }}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <h3
                  className="text-lg font-semibold mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {loc.city}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-light)" }}>
                  {loc.region}
                </p>
              </div>
            ))}
          </div>
    </div>
      </section>
    </>
  );
}
