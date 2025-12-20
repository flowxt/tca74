import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Prendre rendez-vous",
  description:
    "Contactez-moi pour prendre rendez-vous ou pour toute question concernant les groupes de paroles TCA, l'accompagnement haute sensibilité ou les consultations individuelles.",
  keywords: [
    "contact",
    "rendez-vous",
    "consultation",
    "TCA",
    "haute sensibilité",
    "psychologue Annecy",
    "thérapeute Genève",
    "Lausanne",
  ],
};

const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Consultations",
    desc: "Toutes les séances se déroulent en ligne, par visioconférence.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Disponibilités",
    desc: "Du mardi au samedi matin, sur rendez-vous uniquement.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Réponse",
    desc: "Je réponds généralement sous 48h ouvrées.",
  },
];

const services = [
  {
    title: "Consultation Standard",
    price: "90€",
    duration: "1h",
    desc: "Accompagnement personnalisé TCA",
  },
  {
    title: "Accompagnement Premium",
    price: "130€",
    duration: "1h + suivi",
    desc: "Séance + 2 mails de suivi personnalisés",
  },
  {
    title: "Groupe de paroles TCA",
    price: "110€ / 200€",
    duration: "Cycle 4 ou 8 séances",
    desc: "Tous les 15 jours, 6 participantes maximum",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-hero overflow-hidden">
        <div className="circle-decoration top-10 -right-20 opacity-40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Prenons{" "}
            <span style={{ color: "var(--brun-doux)" }}>contact</span>
          </h1>
          
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
            Une question, une demande de rendez-vous ou simplement besoin d'échanger ?
            Je suis là pour vous écouter.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-6">
            {contactInfo.map((info, i) => (
              <div key={i} className="card text-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
                >
                  {info.icon}
                </div>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {info.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  {info.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--rose-accent)" }}
              >
                Formulaire
              </span>
              <h2
                className="text-3xl font-medium mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Envoyez-moi un message
              </h2>
              
              <ContactForm />
            </div>
            
            {/* Services & Tarifs */}
            <div>
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--rose-accent)" }}
              >
                Prestations
              </span>
              <h2
                className="text-3xl font-medium mb-8"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Services et tarifs
              </h2>
              
              <div className="space-y-4">
                {services.map((service, i) => (
                  <div key={i} className="card">
                    <div className="flex justify-between items-start mb-2">
                      <h3
                        className="text-lg font-semibold"
                        style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
                      >
                        {service.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-xl font-semibold" style={{ color: "var(--brun-doux)" }}>
                          {service.price}
                        </div>
                        <div className="text-xs" style={{ color: "var(--text-light)" }}>
                          {service.duration}
                        </div>
                      </div>
                    </div>
                    <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                      {service.desc}
                    </p>
                  </div>
                ))}
              </div>
              
              <div
                className="mt-8 p-6 rounded-2xl"
                style={{ background: "var(--rose-pale)" }}
              >
                <h4 className="font-semibold mb-3" style={{ color: "var(--brun-fonce)" }}>
                  💳 Moyens de paiement
                </h4>
                <ul className="space-y-2 text-sm" style={{ color: "var(--text-medium)" }}>
                  <li>• Virement bancaire</li>
                  <li>• Stripe (paiement sécurisé en ligne)</li>
                </ul>
                <p className="mt-4 text-xs" style={{ color: "var(--text-light)" }}>
                  Le règlement confirme votre inscription. Les séances sont non remboursables 
                  mais peuvent être reportées si prévenue 48h à l'avance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zone intervention */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-medium mb-8"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            J'accompagne des personnes de
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              "Annecy",
              "Haute-Savoie",
              "Genève",
              "Lausanne",
              "Suisse romande",
              "France entière",
              "Partout en ligne",
            ].map((place, i) => (
              <span
                key={i}
                className="px-6 py-3 rounded-full text-base font-medium"
                style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
              >
                {place}
              </span>
            ))}
          </div>
          
          <p className="text-lg" style={{ color: "var(--text-medium)" }}>
            Grâce aux consultations en ligne, je peux vous accompagner où que vous soyez.
          </p>
        </div>
      </section>
    </>
  );
}

