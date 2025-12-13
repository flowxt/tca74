import Link from "next/link";

const footerLinks = {
  services: [
    { href: "/groupes-paroles-tca", label: "Groupes de Paroles TCA" },
    // { href: "/haute-sensibilite", label: "Haute Sensibilité" }, // Désactivé pour le moment
    { href: "/formation", label: "Formation en ligne" },
    { href: "/contact", label: "Consultation individuelle" },
  ],
  ressources: [
    { href: "/blog", label: "Blog & Articles" },
    { href: "/faq", label: "Questions fréquentes" },
    { href: "/questionnaire", label: "Quiz : Suis-je au bon endroit ?" },
  ],
  legal: [
    { href: "/mentions-legales", label: "Mentions légales" },
    { href: "/confidentialite", label: "Politique de confidentialité" },
  ],
};

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, var(--bg-cream) 0%, var(--rose-pale) 100%)" }}
    >
      {/* Décoration */}
      <div
        className="absolute -top-40 -right-40 w-80 h-80 rounded-full opacity-30"
        style={{ background: "var(--peche)" }}
      />
      <div
        className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full opacity-20"
        style={{ background: "var(--accent-lavande)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3
                className="text-lg font-semibold"
                style={{ color: "var(--brun-fonce)", fontFamily: "var(--font-playfair)" }}
              >
                Laura Baud
              </h3>
              <p className="text-sm" style={{ color: "var(--rose-accent)" }}>
                Thérapeute TCA centré sur les émotions
              </p>
            </div>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "var(--text-medium)" }}
            >
              Accompagnement spécialisé boulimie & hyperphagie. Le TCA est un symptôme — je travaille sur ce qui le nourrit : vos émotions.
            </p>
            <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-light)" }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Annecy • Genève • Lausanne</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-lg font-semibold mb-6"
              style={{ color: "var(--brun-fonce)", fontFamily: "var(--font-playfair)" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base transition-colors hover:translate-x-1 inline-block"
                    style={{ color: "var(--text-medium)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4
              className="text-lg font-semibold mb-6"
              style={{ color: "var(--brun-fonce)", fontFamily: "var(--font-playfair)" }}
            >
              Ressources
            </h4>
            <ul className="space-y-3">
              {footerLinks.ressources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-base transition-colors hover:translate-x-1 inline-block"
                    style={{ color: "var(--text-medium)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-lg font-semibold mb-6"
              style={{ color: "var(--brun-fonce)", fontFamily: "var(--font-playfair)" }}
            >
              Contact
            </h4>
            <div className="space-y-4">
              <p className="text-base" style={{ color: "var(--text-medium)" }}>
                Consultations en ligne uniquement
              </p>
              <Link
                href="/contact"
                className="btn-primary inline-block text-sm"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "linear-gradient(90deg, transparent, var(--rose-medium), transparent)" }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "var(--text-light)" }}>
            © {new Date().getFullYear()} Laura Baud - Thérapeute TCA. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            {footerLinks.legal.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm transition-colors"
                style={{ color: "var(--text-light)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

