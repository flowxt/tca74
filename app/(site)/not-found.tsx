import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero">
      <div className="max-w-xl mx-auto px-6 text-center">
        <div className="text-8xl mb-6">🌸</div>
        <h1
          className="text-4xl md:text-5xl font-medium mb-4"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Page introuvable
        </h1>
        <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Retour à l'accueil
          </Link>
          <Link href="/contact" className="btn-secondary">
            Me contacter
          </Link>
        </div>
      </div>
    </section>
  );
}

