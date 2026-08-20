import Link from "next/link";
import {
  AVIS_GOOGLE_URL,
  CANDIDATURE_URL,
  INSCRIPTION_ESSENTIEL_URL,
} from "./data";

export default function EcloreFooter() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--sable)" }}>
      <div
        className="eclore-halo -top-32 -right-24 w-80 h-80"
        style={{ background: "rgba(223, 182, 94, 0.35)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <p
              className="text-xl tracking-[0.3em] mb-2"
              style={{ fontFamily: "var(--font-cinzel)", color: "var(--encre)" }}
            >
              ÉCLORE
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "var(--encre-douce)" }}>
              Une expérience de développement personnel créée par Laura Baud,
              thérapeute avec 17 ans d&apos;expérience en santé mentale.
            </p>
          </div>

          <div>
            <p className="eclore-kicker mb-4">L&apos;expérience</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#formules" style={{ color: "var(--encre-douce)" }}>
                  Les deux formules
                </a>
              </li>
              <li>
                <a href="#programme" style={{ color: "var(--encre-douce)" }}>
                  Le programme
                </a>
              </li>
              <li>
                <a href="#candidature" style={{ color: "var(--encre-douce)" }}>
                  Comment me rejoindre
                </a>
              </li>
              <li>
                <a
                  href={INSCRIPTION_ESSENTIEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--encre-douce)" }}
                >
                  Rejoindre la formule Essentiel
                </a>
              </li>
              <li>
                <a
                  href={AVIS_GOOGLE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--encre-douce)" }}
                >
                  Les 62 avis Google
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eclore-kicker mb-4">Mon accompagnement TCA</p>
            <p className="text-sm mb-4 leading-relaxed" style={{ color: "var(--encre-douce)" }}>
              ÉCLORE est un projet distinct de mon activité de thérapeute spécialisée
              en comportements alimentaires.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "var(--or-profond)" }}
            >
              Découvrir mon site TCA
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="eclore-filet mb-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <p className="text-xs" style={{ color: "var(--encre-claire)" }}>
            © {new Date().getFullYear()} Laura Baud — L&apos;expérience ÉCLORE. Tous droits réservés.
          </p>
          <div className="flex items-center gap-5">
            <Link href="/mentions-legales" className="text-xs" style={{ color: "var(--encre-claire)" }}>
              Mentions légales
            </Link>
            <Link href="/confidentialite" className="text-xs" style={{ color: "var(--encre-claire)" }}>
              Confidentialité
            </Link>
            <a
              href={CANDIDATURE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold"
              style={{ color: "var(--or-profond)" }}
            >
              Candidater
            </a>
          </div>
        </div>

        <p className="text-center text-[11px] mt-8" style={{ color: "var(--encre-claire)" }}>
          ÉCLORE est une expérience de développement personnel. Il ne s&apos;agit ni d&apos;un
          soin, ni d&apos;un programme de guérison, et cela ne remplace pas un suivi médical
          ou psychologique.
        </p>
      </div>
    </footer>
  );
}
