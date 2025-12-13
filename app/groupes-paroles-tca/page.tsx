import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Groupes de Paroles TCA | Hyperphagie & Boulimie en ligne",
  description:
    "Groupe de paroles en ligne pour femmes souffrant d'hyperphagie ou de boulimie. Briser la solitude, faire circuler la parole dans un espace bienveillant. 30€/séance, 6 participantes maximum.",
  keywords: [
    "groupe de paroles TCA",
    "hyperphagie",
    "boulimie",
    "troubles alimentaires",
    "thérapie de groupe",
    "soutien TCA",
    "groupe en ligne",
    "Annecy",
    "Genève",
    "Lausanne",
  ],
};

const groupInfo = {
  format: "En ligne (caméra activée)",
  participants: "6 participantes maximum",
  duration: "1h30 par séance (ou 1h45)",
  frequency: "Tous les 15 jours",
  price: "30€ par séance",
  schedule: "Jeudi de 20h30 à 22h15",
};

const objectives = [
  "Faire circuler la parole, briser la solitude autour du trouble",
  "S'affirmer hors du TCA",
  "Favoriser l'expression de soi et des émotions",
  "S'appuyer sur les regards des thérapeutes, espace de sécurité",
];

const values = [
  {
    title: "Confidentialité",
    desc: "Ce qui se dit dans le groupe reste dans le groupe. L'enregistrement vidéo n'est pas autorisé.",
  },
  {
    title: "Bienveillance",
    desc: "Un accueil sans jugement, dans un climat de douceur et de respect mutuel.",
  },
  {
    title: "Expression personnelle",
    desc: "Pas de « beau » à faire, juste votre expression authentique. Le perfectionnisme peut apparaître, sentez-vous libre de l'exprimer.",
  },
  {
    title: "Contenance",
    desc: "La parole est contenue par les thérapeutes. Si vous êtes en détresse, référez-vous à votre thérapeute individuel.",
  },
];

export default function GroupesTCAPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="circle-decoration top-10 -right-20 opacity-40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
          >
            Groupe de paroles en ligne
          </div>
          
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Groupes de Paroles{" "}
            <span style={{ color: "var(--brun-doux)" }}>TCA</span>
          </h1>
          
          <p className="text-xl leading-relaxed max-w-2xl mx-auto mb-8" style={{ color: "var(--text-medium)" }}>
            Un espace collectif pour les femmes souffrant d'<strong>hyperphagie</strong> ou de{" "}
            <strong>boulimie</strong>. Briser la solitude, faire circuler la parole.
          </p>
          
          <Link href="/contact" className="btn-primary">
            S'inscrire au groupe
          </Link>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left - Details */}
            <div>
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--rose-accent)" }}
              >
                Informations pratiques
              </span>
              <h2
                className="text-3xl font-medium mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Comment se déroule le groupe ?
              </h2>
              
              <div className="space-y-6">
                <div className="card">
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(groupInfo).map(([key, value]) => (
                      <div key={key} className="p-4">
                        <div className="text-sm uppercase tracking-wider mb-1" style={{ color: "var(--text-light)" }}>
                          {key === "format" && "Format"}
                          {key === "participants" && "Nombre"}
                          {key === "duration" && "Durée"}
                          {key === "frequency" && "Fréquence"}
                          {key === "price" && "Tarif"}
                          {key === "schedule" && "Horaire"}
                        </div>
                        <div className="font-medium" style={{ color: "var(--brun)" }}>
                          {value}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div
                  className="p-6 rounded-2xl"
                  style={{ background: "var(--rose-pale)" }}
                >
                  <h4 className="font-semibold mb-3" style={{ color: "var(--brun-fonce)" }}>
                    Organisation de la séance
                  </h4>
                  <p style={{ color: "var(--text-medium)" }}>
                    Il y a un premier temps « <strong>météo intérieure de chacune</strong> » et un second temps 
                    de travail sur un <strong>thème précis</strong>. Une médiation est utilisée pour amener 
                    le thème du jour (écriture, visualisation...).
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right - Objectives */}
            <div>
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--rose-accent)" }}
              >
                Pourquoi participer ?
              </span>
              <h2
                className="text-3xl font-medium mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Les objectifs du groupe
              </h2>
              
              <div className="space-y-4">
                {objectives.map((obj, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 card">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "var(--rose-pale)" }}
                    >
                      <svg
                        className="w-5 h-5"
                        style={{ color: "var(--brun)" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-lg" style={{ color: "var(--text-medium)" }}>
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs du groupe */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Le cadre
            </span>
            <h2
              className="text-3xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Valeurs et interactions
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, i) => (
              <div key={i} className="card text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "var(--rose-pale)" }}
                >
                  <svg
                    className="w-7 h-7"
                    style={{ color: "var(--brun)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {i === 0 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />}
                    {i === 1 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                    {i === 2 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />}
                    {i === 3 && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />}
                  </svg>
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {val.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalités */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Modalités
            </span>
            <h2
              className="text-3xl font-medium"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Inscription et paiement
            </h2>
          </div>
          
          <div className="space-y-6">
            {/* Inscription */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}>
                📝 Organisation
              </h3>
              <ul className="space-y-3" style={{ color: "var(--text-medium)" }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--rose-accent)" }}>•</span>
                  Les rencontres ont lieu tous les 15 jours. Des dates seront proposées afin de réunir les participantes.
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--rose-accent)" }}>•</span>
                  Un canal WhatsApp anonyme vous sera communiqué.
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--rose-accent)" }}>•</span>
                  Vous pouvez participer librement, ou vous inscrire à un cycle de 8 séances renouvelables (30€ par séance).
                </li>
              </ul>
            </div>
            
            {/* Paiement */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}>
                💳 Paiement
              </h3>
              <ul className="space-y-3" style={{ color: "var(--text-medium)" }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--rose-accent)" }}>•</span>
                  Le règlement se fait par virement bancaire ou Stripe, au plus tard <strong>72h avant la séance</strong>.
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--rose-accent)" }}>•</span>
                  Le paiement confirme votre place. Passé ce délai, la place pourra être proposée à une autre personne.
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--rose-accent)" }}>•</span>
                  Les paiements sont <strong>non remboursables</strong>.
                </li>
              </ul>
            </div>
            
            {/* Annulation */}
            <div className="card">
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}>
                🔄 Annulation / Report
              </h3>
              <ul className="space-y-3" style={{ color: "var(--text-medium)" }}>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--rose-accent)" }}>•</span>
                  Si une séance est annulée par moi plus de 48h avant, elle sera créditée sur la séance suivante.
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--rose-accent)" }}>•</span>
                  En cas d'absence, merci de prévenir au minimum <strong>24h avant</strong>.
                </li>
                <li className="flex items-start gap-3">
                  <span style={{ color: "var(--rose-accent)" }}>•</span>
                  Au-delà, la séance est considérée comme due et ne pourra être reportée.
                </li>
              </ul>
            </div>
            
            {/* Retards */}
            <div className="card" style={{ borderColor: "var(--rose-medium)", borderWidth: "2px" }}>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}>
                ⏰ Retards
              </h3>
              <p style={{ color: "var(--text-medium)" }}>
                Pour préserver l'énergie et la cohésion du groupe, les retards de <strong>plus de 10 minutes</strong> ne sont pas acceptés.
                Dans ce cas, la séance est considérée comme perdue et aucun remboursement ni report n'est possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Note importante */}
      <section className="py-12 bg-gradient-soft">
        <div className="max-w-4xl mx-auto px-6">
          <div
            className="p-8 rounded-3xl"
            style={{ background: "var(--bg-white)", border: "2px solid var(--peche)" }}
          >
            <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}>
              💫 Relations entre les pairs
            </h3>
            <p className="mb-4" style={{ color: "var(--text-medium)" }}>
              Si vous décidez d'échanger entre vous, attention aux limites de chacune. Je vous recommande de 
              <strong> ne pas avoir d'échanges sur la nourriture et le poids</strong> en dehors du groupe.
            </p>
            <p style={{ color: "var(--text-medium)" }}>
              Le groupe constitue un cadre où la parole est contenue par les thérapeutes. Si vous êtes en détresse, 
              veuillez en référer à votre thérapeute individuel plutôt que de vous adresser à une autre patiente.
            </p>
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
            Contactez-moi pour échanger sur votre situation et voir si le groupe est adapté à vos besoins.
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

