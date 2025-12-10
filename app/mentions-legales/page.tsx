import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site.",
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="text-4xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Mentions légales
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 prose" style={{ color: "var(--text-medium)" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Éditeur du site
          </h2>
          <p>
            Ce site est édité par [Nom de la thérapeute]<br />
            Profession : Thérapeute / Psychologue<br />
            Adresse : [À compléter]<br />
            Email : [À compléter]<br />
            SIRET : [À compléter]
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par [À compléter]<br />
            Adresse : [À compléter]
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, logo) est la propriété exclusive 
            de l'éditeur du site. Toute reproduction, même partielle, est interdite sans 
            autorisation préalable.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Responsabilité
          </h2>
          <p>
            Les informations contenues sur ce site sont fournies à titre indicatif et ne 
            sauraient se substituer à un avis médical ou à une consultation avec un 
            professionnel de santé.
          </p>
        </div>
      </section>
    </>
  );
}

