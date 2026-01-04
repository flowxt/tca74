import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles.",
};

export default function ConfidentialitePage() {
  return (
    <>
      <section className="relative pt-44 pb-20 bg-gradient-hero">
        <div className="max-w-4xl mx-auto px-6">
          <h1
            className="text-4xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Politique de confidentialité
          </h1>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6 prose" style={{ color: "var(--text-medium)" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Collecte des données
          </h2>
          <p>
            Les données personnelles collectées via le formulaire de contact (nom, email, 
            téléphone, message) sont utilisées uniquement pour répondre à vos demandes 
            et vous proposer un accompagnement adapté.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Utilisation des données
          </h2>
          <p>
            Vos données ne sont jamais vendues ni transmises à des tiers. Elles sont 
            conservées de manière sécurisée et ne sont utilisées que dans le cadre 
            de notre relation thérapeutique.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Durée de conservation
          </h2>
          <p>
            Les données sont conservées pendant la durée nécessaire à la gestion de votre 
            demande, puis supprimées conformément aux obligations légales.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Vos droits
          </h2>
          <p>
            Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, 
            de suppression et de portabilité de vos données. Pour exercer ces droits, 
            contactez-moi par email.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Cookies
          </h2>
          <p>
            Ce site n'utilise pas de cookies de tracking ou publicitaires. Seuls des 
            cookies techniques essentiels au fonctionnement du site peuvent être utilisés.
          </p>

          <h2 style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}>
            Secret professionnel
          </h2>
          <p>
            En tant que thérapeute, je suis soumise au secret professionnel. Toutes les 
            informations partagées lors de nos séances restent strictement confidentielles.
          </p>
        </div>
      </section>
    </>
  );
}

