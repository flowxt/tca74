import Link from "next/link";

const footerLinks = {
  services: [
    { href: "/groupes-paroles-tca", label: "Groupes de Paroles TCA" },
    { href: "/formation", label: "Programmes en ligne" },
    { href: "/offres", label: "Mes offres & tarifs" },
    { href: "/contact", label: "Consultation individuelle" },
  ],
  ressources: [
    { href: "/blog", label: "Blog & Articles" },
    { href: "/faq", label: "Questions fréquentes" },
    { href: "/actualites", label: "Actualités & À venir" },
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
                className="text-xl font-semibold uppercase tracking-wide"
                style={{ color: "var(--brun-fonce)", fontFamily: "var(--font-playfair)" }}
              >
                Laura BAUD
              </h3>
              <p className="text-sm" style={{ color: "var(--rose-accent)" }}>
                Thérapeute TCA • Centrée sur les émotions
              </p>
            </div>
            <div className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--text-light)" }}>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Annecy • Genève • Lausanne</span>
            </div>
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-4">
              <a
                href="https://wa.me/message"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
                title="WhatsApp"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@laurabaud_tca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
                title="TikTok"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com/laurabaud.tca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
                title="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
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

