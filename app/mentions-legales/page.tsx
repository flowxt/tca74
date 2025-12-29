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
            Ce site est édité par <strong>Laura Baud</strong><br />
            Profession : Thérapeute spécialisée TCA<br />
            Email : l.baud@protonmail.com<br />
            Site mis en ligne : Décembre 2025
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Hébergement
          </h2>
          <p>
            Ce site est hébergé par <strong>Vercel Inc.</strong><br />
            Adresse : 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
            Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--brun-doux)" }}>vercel.com</a>
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Propriété intellectuelle
          </h2>
          <p>
            L'ensemble du contenu de ce site (textes, images, logo) est la propriété exclusive 
            de Laura Baud. Toute reproduction, même partielle, est interdite sans 
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

