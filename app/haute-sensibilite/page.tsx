import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Haute Sensibilité | Accompagnement Hypersensibles & HPI",
  description:
    "Accompagnement individuel et groupes de paroles pour personnes hautement sensibles, hypersensibles et HPI. Un espace bienveillant pour apprivoiser votre sensibilité. Consultations en ligne.",
  keywords: [
    "haute sensibilité",
    "hypersensible",
    "HPI",
    "haut potentiel",
    "accompagnement",
    "thérapie",
    "groupe de paroles",
    "émotions",
    "sensibilité",
    "Annecy",
    "Genève",
    "Lausanne",
  ],
};

const signs = [
  "Vous ressentez les émotions très intensément (les vôtres et celles des autres)",
  "Vous êtes sensible aux bruits, lumières, ambiances, et vous vous sentez vite débordée",
  "Vous réfléchissez beaucoup, vous captez les subtilités, vous avez une pensée intuitive",
  "Vous vous sentez souvent différente, incomprise, ou en décalage",
  "Vous avez du mal à poser des limites ou à dire non sans culpabilité",
  "Vous recherchez des relations sincères, profondes, et un espace où être pleinement vous",
];

const groupThemes = [
  { num: 1, title: "Ce qui me submerge" },
  { num: 2, title: "Accueillir mes émotions" },
  { num: 3, title: "Connaître mes ressources" },
  { num: 4, title: "Identifier mes besoins" },
  { num: 5, title: "Porter un masque / Trouver sa place" },
  { num: 6, title: "Dire non et poser des limites" },
];

const groupBenefits = [
  "Un lieu pour rompre l'isolement et déposer ce qui vous submerge",
  "Une communauté de femmes qui ressentent les mêmes difficultés",
  "Un espace bienveillant, animé avec douceur et présence",
  "Des outils distillés au fil des séances pour soutenir l'expression",
];

const individualBenefits = [
  "Un espace dénué de tout jugement, avec un accueil inconditionnel",
  "Des outils créatifs adaptés à votre sensibilité (écriture, visualisation, photolangage…)",
  "Une écoute fine, attentive, respectueuse de votre rythme et de votre temporalité",
  "Un soutien émotionnel pour traverser vos épreuves avec plus de clarté et de douceur",
];

export default function HauteSensibilitePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 bg-gradient-hero overflow-hidden">
        <div className="circle-decoration top-10 -left-20 opacity-40" style={{ background: "var(--accent-lavande)" }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: "rgba(197, 184, 200, 0.3)", color: "var(--brun)" }}
          >
            Hypersensibilité • HPI
          </div>
          
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Bienvenue aux personnes{" "}
            <span style={{ color: "var(--brun-doux)" }}>hautement sensibles</span>
          </h1>
          
          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "var(--text-medium)" }}>
            Vous êtes une femme <strong>hypersensible ou HPI</strong>, en période de transition, 
            de fatigue émotionnelle, ou de bouleversement intérieur ?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://ibookthedate.fr/therapeute/74000-annecy/laura-baud" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Prendre rendez-vous
            </a>
            <Link href="#groupe" className="btn-secondary">
              Découvrir le groupe
            </Link>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que la haute sensibilité */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--accent-lavande)" }}
              >
                Comprendre
              </span>
              <h2
                className="text-3xl md:text-4xl font-medium mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                La haute sensibilité, c'est quoi ?
              </h2>
              <div className="space-y-4 text-lg" style={{ color: "var(--text-medium)" }}>
                <p>
                  La haute sensibilité est un <strong>trait de personnalité</strong>, pas un diagnostic. 
                  Elle concerne environ <strong>20 à 30% de la population</strong>.
                </p>
                <p>
                  Vous vous sentez souvent « <em>trop</em> », « <em>différente</em> », incomprise ? 
                  Vous ressentez les émotions intensément et avez du mal à trouver votre place ?
                </p>
                <p>
                  Ce n'est pas une faiblesse, c'est une <strong>richesse</strong> qui demande 
                  simplement à être comprise et apprivoisée.
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4" style={{ color: "var(--brun-fonce)" }}>
                Vous vous reconnaissez peut-être si...
              </h3>
              {signs.map((sign, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-4 rounded-xl transition-all hover:translate-x-2"
                  style={{ background: i % 2 === 0 ? "var(--rose-pale)" : "rgba(197, 184, 200, 0.2)" }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "white" }}
                  >
                    <svg
                      className="w-4 h-4"
                      style={{ color: "var(--brun)" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p style={{ color: "var(--text-medium)" }}>{sign}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Groupe de paroles */}
      <section id="groupe" className="section-padding bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--accent-lavande)" }}
            >
              Espace collectif
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Groupe de paroles Haute Sensibilité
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
              Un espace collectif pour vous déposer, respirer, et vous reconnecter à votre sensibilité.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Infos pratiques */}
            <div className="card">
              <h3
                className="text-xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
              >
                Informations pratiques
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {[
                  { label: "Format", value: "En ligne (caméra activée)" },
                  { label: "Participantes", value: "6 maximum" },
                  { label: "Durée", value: "1h30 par séance" },
                  { label: "Fréquence", value: "2 séances par mois" },
                  { label: "Horaire", value: "19h à 20h30" },
                  { label: "Tarif", value: "30€ par séance" },
                ].map((info, i) => (
                  <div key={i} className="p-3 rounded-xl" style={{ background: "var(--rose-pale)" }}>
                    <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--text-light)" }}>
                      {info.label}
                    </div>
                    <div className="font-medium" style={{ color: "var(--brun)" }}>
                      {info.value}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 rounded-xl" style={{ background: "rgba(197, 184, 200, 0.2)" }}>
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  <strong>Paiement :</strong> Virement bancaire ou plateforme Stripe sécurisée<br />
                  <strong>Report :</strong> Possible si prévenue au moins 48h à l'avance
                </p>
              </div>
            </div>
            
            {/* Thèmes abordés */}
            <div className="card">
              <h3
                className="text-xl font-semibold mb-6"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
              >
                Fil conducteur des séances
              </h3>
              <p className="mb-6 text-sm" style={{ color: "var(--text-light)" }}>
                Chaque rencontre propose un fil conducteur doux, sans obligation de s'y conformer :
              </p>
              
              <div className="space-y-3">
                {groupThemes.map((theme) => (
                  <div
                    key={theme.num}
                    className="flex items-center gap-4 p-3 rounded-xl transition-all hover:translate-x-2"
                    style={{ background: "var(--rose-pale)" }}
                  >
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center font-semibold"
                      style={{ background: "var(--accent-lavande)", color: "white" }}
                    >
                      {theme.num}
                    </div>
                    <span className="font-medium" style={{ color: "var(--text-dark)" }}>
                      {theme.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bénéfices groupe */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {groupBenefits.map((benefit, i) => (
              <div key={i} className="card text-center">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(197, 184, 200, 0.3)" }}
                >
                  <svg
                    className="w-6 h-6"
                    style={{ color: "var(--brun)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accompagnement individuel */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="card" style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, rgba(197, 184, 200, 0.3) 100%)" }}>
                <div className="space-y-4">
                  {individualBenefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: "white" }}
                      >
                        <svg
                          className="w-4 h-4"
                          style={{ color: "var(--brun)" }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p style={{ color: "var(--text-medium)" }}>{benefit}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6" style={{ borderTop: "1px solid rgba(182, 149, 136, 0.3)" }}>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-semibold" style={{ color: "var(--brun-doux)" }}>1h</div>
                      <div className="text-xs" style={{ color: "var(--text-light)" }}>Durée</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold" style={{ color: "var(--brun-doux)" }}>90€</div>
                      <div className="text-xs" style={{ color: "var(--text-light)" }}>Tarif</div>
                    </div>
                    <div>
                      <div className="text-2xl font-semibold" style={{ color: "var(--brun-doux)" }}>🎥</div>
                      <div className="text-xs" style={{ color: "var(--text-light)" }}>En ligne</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--accent-lavande)" }}
              >
                Accompagnement individuel
              </span>
              <h2
                className="text-3xl md:text-4xl font-medium mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Un espace rien que pour vous
              </h2>
              <div className="space-y-4 text-lg" style={{ color: "var(--text-medium)" }}>
                <p>
                  Un accompagnement <strong>personnalisé, confidentiel et doux</strong>, 
                  pour vous déposer en tête-à-tête.
                </p>
                <p>
                  Que vous soyez en période de transition, de fatigue émotionnelle ou de 
                  bouleversement intérieur, je vous offre un espace sécurisant pour 
                  traverser ces moments avec plus de clarté.
                </p>
                <p>
                  La fréquence s'adapte à vos besoins : <strong>ponctuelle ou régulière</strong>, 
                  vous choisissez votre rythme.
                </p>
              </div>
              
              <a href="https://ibookthedate.fr/therapeute/74000-annecy/laura-baud" target="_blank" rel="noopener noreferrer" className="btn-primary mt-8 inline-block">
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, rgba(197, 184, 200, 0.4) 0%, var(--rose-pale) 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Votre sensibilité est une force
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
            Ensemble, apprenons à l'apprivoiser et à en faire une alliée dans votre quotidien.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Me contacter
            </Link>
            <Link href="/groupes-paroles-tca" className="btn-secondary">
              Groupe TCA
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

