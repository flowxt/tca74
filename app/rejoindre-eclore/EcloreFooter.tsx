import Link from "next/link";
import {
  AVIS_GOOGLE_URL,
  CANDIDATURE_URL,
  INSCRIPTION_ESSENTIEL_URL,
  WHATSAPP_URL,
} from "./data";

export default function EcloreFooter() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "rgba(244, 233, 214, 0.8)" }}>
      <div
        className="eclore-halo -top-32 -right-24 w-80 h-80"
        style={{ background: "rgba(223, 182, 94, 0.35)" }}
      />

      <div className="relative max-w-5xl mx-auto px-6 py-14">
        {/* Contact WhatsApp — pour une question avant de se lancer */}
        <div
          className="rounded-3xl px-6 py-8 md:px-10 md:py-9 mb-12 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
          style={{
            background: "linear-gradient(135deg, var(--or-voile) 0%, rgba(255,255,255,0.7) 100%)",
            border: "1px solid var(--or-lumiere)",
          }}
        >
          <div>
            <p
              className="text-xl md:text-2xl mb-1"
              style={{ fontFamily: "var(--font-cinzel)", color: "var(--encre)" }}
            >
              Une question avant de vous lancer ?
            </p>
            <p className="text-sm md:text-base" style={{ color: "var(--encre-douce)" }}>
              Écrivez-moi directement, je vous réponds avec plaisir.
            </p>
          </div>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="eclore-btn shrink-0"
            aria-label="Nous contacter sur WhatsApp"
          >
            <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Nous écrire sur WhatsApp
          </a>
        </div>

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
