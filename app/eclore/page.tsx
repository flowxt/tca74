import Image from "next/image";
import EcloreProgramme from "./EcloreProgramme";
import EcloreFaq from "./EcloreFaq";
import {
  AVIS_GOOGLE_URL,
  CANDIDATURE_URL,
  dejaEssaye,
  formules,
  imaginez,
  lettres,
  objectifs,
  pasPourVous,
  pourVous,
  prerequis,
  publicCible,
  seances,
  situations,
  temoignages,
} from "./data";

export default function EclorePage() {
  return (
    <>
      {/* ============ HERO ============ */}
      <section id="top" className="relative pt-28 pb-16 md:pt-32 md:pb-20 eclore-bg-lumiere overflow-hidden">
        <div
          className="eclore-halo top-0 left-1/4 w-[28rem] h-[28rem]"
          style={{ background: "rgba(240, 217, 160, 0.55)" }}
        />
        <div
          className="eclore-halo bottom-0 right-0 w-80 h-80"
          style={{ background: "rgba(199, 147, 56, 0.2)" }}
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold mb-8 tracking-wider uppercase"
            style={{
              background: "rgba(255, 255, 255, 0.75)",
              border: "1px solid var(--sable-fonce)",
              color: "var(--or-profond)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--or)" }} />
            Pour les femmes qui se sont mises de côté trop longtemps
          </span>

          <h1 className="mb-6">
            <span className="block eclore-kicker mb-4">L&apos;expérience ÉCLORE</span>
            <span className="block text-3xl md:text-5xl lg:text-6xl leading-tight">
              Revenez à vous.
              <br />
              <span className="eclore-or-texte">En 3 mois, un cadre pour vous retrouver.</span>
            </span>
          </h1>

          <p
            className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-5"
            style={{ color: "var(--encre-douce)" }}
          >
            Nommer ce que vous vivez. Reconnaître vos besoins. Oser votre place.
            Un parcours d&apos;exploration intérieure — pas une promesse magique,
            un accompagnement réel.
          </p>

          <p className="eclore-italique text-base md:text-lg mb-8" style={{ color: "var(--encre-claire)" }}>
            Essentiel 100 € · Premium 700 € avec 5 séances individuelles
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a href={CANDIDATURE_URL} target="_blank" rel="noopener noreferrer" className="eclore-btn">
              Commencer par un échange de 30 min
            </a>
            <a href="#formules" className="eclore-btn-ghost">
              Voir ce que vous recevez
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-3xl mx-auto mb-12">
            {[
              { chiffre: "17 ans", label: "en santé mentale" },
              { chiffre: "3 mois", label: "d'accompagnement" },
              { chiffre: "8", label: "expériences guidées" },
              { chiffre: "62", label: "avis Google 5★" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <div
                  className="text-2xl md:text-3xl"
                  style={{ fontFamily: "var(--font-cinzel)", color: "var(--or-profond)" }}
                >
                  {item.chiffre}
                </div>
                <div className="text-xs md:text-sm mt-1" style={{ color: "var(--encre-claire)" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div
              className="eclore-halo inset-0 w-full h-full"
              style={{ background: "rgba(223, 182, 94, 0.45)" }}
            />
            <div
              className="relative rounded-[2rem] overflow-hidden"
              style={{
                boxShadow: "0 30px 80px rgba(169, 118, 28, 0.25)",
                border: "1px solid rgba(255,255,255,0.6)",
              }}
            >
              <Image
                src="/eclore/eclore.png"
                alt="L'expérience ÉCLORE — un œuf qui s'ouvre sur une lumière dorée"
                width={1799}
                height={874}
                priority
                sizes="(max-width: 768px) 100vw, 768px"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ VOUS RECONNAISSEZ-VOUS ? ============ */}
      <section id="pour-vous" className="eclore-section eclore-bg-creme">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="eclore-kicker mb-4">Où vous en êtes</p>
            <h2 className="text-3xl md:text-4xl mb-5">
              Vous reconnaissez-vous dans
              <br className="hidden md:block" />{" "}
              <span className="eclore-or-texte">l&apos;une de ces situations ?</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {situations.map((situation) => (
              <div key={situation.titre} className="eclore-card eclore-card-hover p-7">
                <h3 className="text-lg mb-4 leading-snug">{situation.titre}</h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                  {situation.texte}
                </p>
              </div>
            ))}
          </div>

          <div
            className="max-w-3xl mx-auto p-7 md:p-9 rounded-[1.75rem]"
            style={{ background: "var(--or-voile)", border: "1px solid var(--or-lumiere)" }}
          >
            <p className="eclore-kicker mb-5 text-center">Cela vous parle aussi si…</p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {publicCible.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ background: "var(--or)" }}
                  />
                  <span className="text-sm leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <p
            className="eclore-italique text-center text-xl md:text-2xl mt-14 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--or-profond)" }}
          >
            Et si ce besoin de ralentir n&apos;était pas une faiblesse, mais une invitation
            à revenir à vous ?
          </p>
        </div>
      </section>

      {/* ============ TRANSFORMATION (avant le contenu) ============ */}
      <section id="transformation" className="eclore-section eclore-bg-sable">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="eclore-kicker mb-4">Ce que ça change</p>
            <h2 className="text-3xl md:text-4xl mb-5">
              Imaginez, dans <span className="eclore-or-texte">trois mois</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--encre-douce)" }}>
              Pas une nouvelle vous du jour au lendemain. Une relation plus claire,
              plus douce, plus vraie avec vous-même.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {imaginez.map((item) => (
              <div key={item.titre} className="eclore-card eclore-card-hover p-7">
                <div
                  className="w-9 h-9 rounded-full mb-5 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--or-lumiere) 0%, var(--or-clair) 100%)",
                  }}
                >
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg mb-3 leading-snug">{item.titre}</h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                  {item.texte}
                </p>
              </div>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {objectifs.map((objectif) => (
              <div key={objectif.titre} className="eclore-card p-5">
                <h3 className="text-base mb-2 leading-snug">{objectif.titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                  {objectif.texte}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-center text-sm md:text-base mt-10 max-w-2xl mx-auto"
            style={{ color: "var(--encre-claire)" }}
          >
            Ce ne sont pas des promesses, mais des directions de travail. Ce que vous en ferez
            vous appartient — et c&apos;est justement ce qui rend le chemin le vôtre.
          </p>
        </div>
      </section>

      {/* ============ VOUS AVEZ DÉJÀ ESSAYÉ ============ */}
      <section id="approche" className="eclore-section eclore-bg-creme">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="eclore-kicker mb-4">Ce qui n&apos;a pas suffi</p>
            <h2 className="text-3xl md:text-4xl">
              Vous avez peut-être <span className="eclore-or-texte">déjà essayé</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {dejaEssaye.map((item) => (
              <div
                key={item.titre}
                className="p-7 rounded-[1.75rem]"
                style={{ background: "rgba(255,255,255,0.7)", border: "1px solid var(--sable-fonce)" }}
              >
                <div
                  className="w-9 h-9 rounded-full mb-5 flex items-center justify-center"
                  style={{ background: "var(--sable-fonce)" }}
                >
                  <svg
                    className="w-4 h-4"
                    style={{ color: "var(--encre-claire)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-lg mb-3 leading-snug">{item.titre}</h3>
                <p className="text-base leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                  {item.texte}
                </p>
              </div>
            ))}
          </div>

          <p
            className="eclore-italique text-center text-xl md:text-2xl mt-14 max-w-2xl mx-auto leading-relaxed"
            style={{ color: "var(--or-profond)" }}
          >
            ÉCLORE n&apos;ajoute pas encore plus de contenu à absorber seule.
            Il vous donne un cadre, une communauté, et — si vous le choisissez —
            quelqu&apos;un à qui déposer ce qui remonte.
          </p>
        </div>
      </section>

      {/* ============ L'HISTOIRE ============ */}
      <section id="histoire" className="eclore-section eclore-bg-creme">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eclore-kicker mb-4">Aux origines</p>
            <h2 className="text-3xl md:text-4xl">L&apos;histoire d&apos;ÉCLORE</h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--encre-douce)" }}>
            <p
              className="eclore-italique text-xl md:text-2xl text-center"
              style={{ color: "var(--or-profond)" }}
            >
              ÉCLORE est né de mon propre cheminement.
            </p>
            <p>
              À une période de ma vie, j&apos;ai ressenti le besoin de ralentir, de faire de la
              place et de me reconnecter à moi-même. J&apos;ai cherché à mieux comprendre mes
              émotions, mes besoins, mes envies profondes et à créer un espace intérieur où je
              pouvais enfin m&apos;écouter.
            </p>
            <p>C&apos;est de cette expérience qu&apos;est né ÉCLORE.</p>
            <p>
              J&apos;ai créé cet accompagnement comme un espace d&apos;exploration intérieure, à
              travers l&apos;écriture, la créativité, l&apos;introspection et différentes pratiques
              de reconnexion à soi.
            </p>
          </div>
        </div>
      </section>

      {/* ============ L'ACRONYME ============ */}
      <section id="acronyme" className="eclore-section eclore-bg-sable">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="eclore-kicker mb-4">Le chemin</p>
            <h2 className="text-3xl md:text-4xl mb-5">
              Six étapes, <span className="eclore-or-texte">un voyage intérieur</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--encre-douce)" }}>
              Le nom ÉCLORE représente les différentes étapes de ce voyage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lettres.map((item, i) => (
              <div key={i} className="eclore-card eclore-card-hover p-7 flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <span
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                    style={{
                      background: "linear-gradient(135deg, var(--or-lumiere) 0%, var(--or-clair) 100%)",
                      color: "#fff",
                      fontFamily: "var(--font-cinzel)",
                      boxShadow: "0 6px 18px rgba(199, 147, 56, 0.25)",
                    }}
                  >
                    {item.lettre}
                  </span>
                  <h3 className="text-lg leading-snug">{item.titre}</h3>
                </div>
                <p className="text-base leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                  {item.texte}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ UNE EXPÉRIENCE DE 3 MOIS — cadre honnête ============ */}
      <section className="eclore-section eclore-bg-creme">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="eclore-kicker mb-4">Pourquoi c&apos;est différent</p>
            <h2 className="text-3xl md:text-4xl">Une expérience de 3 mois</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div
              className="p-8 rounded-[1.75rem]"
              style={{ background: "var(--or-voile)", border: "1px solid var(--or-lumiere)" }}
            >
              <h3 className="text-xl mb-5">Ce qu&apos;ÉCLORE est</h3>
              <ul className="space-y-3">
                {[
                  "Une expérience de développement personnel",
                  "Une invitation à mieux vous connaître",
                  "Un espace pour explorer votre monde intérieur",
                  "Un chemin vers une relation plus authentique avec vous-même",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "var(--or-profond)" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span style={{ color: "var(--encre-douce)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 rounded-[1.75rem]"
              style={{ background: "#fff", border: "1px solid var(--sable-fonce)" }}
            >
              <h3 className="text-xl mb-5">Ce qu&apos;ÉCLORE n&apos;est pas</h3>
              <ul className="space-y-3">
                {[
                  "Un programme de guérison",
                  "Une promesse de transformation magique",
                  "Un substitut à un suivi médical ou psychologique",
                  "Une méthode où l'on ferait le chemin à votre place",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 shrink-0 mt-0.5"
                      style={{ color: "var(--encre-claire)" }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span style={{ color: "var(--encre-claire)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p
            className="text-center text-lg leading-relaxed max-w-3xl mx-auto"
            style={{ color: "var(--encre-douce)" }}
          >
            Les ressources et les séances sont des supports pour vous guider, mais votre
            implication personnelle reste essentielle.{" "}
            <strong style={{ color: "var(--encre)" }}>
              Le changement naît de ce que vous choisissez d&apos;expérimenter, d&apos;observer
              et d&apos;intégrer dans votre quotidien.
            </strong>
          </p>
        </div>
      </section>

      {/* ============ QUI SUIS-JE ============ */}
      <section id="laura" className="eclore-section eclore-bg-sable">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative">
                <div
                  className="eclore-halo inset-0 w-full h-full"
                  style={{ background: "rgba(223, 182, 94, 0.4)" }}
                />
                <div
                  className="relative rounded-[2rem] overflow-hidden aspect-[4/5]"
                  style={{ boxShadow: "0 25px 60px rgba(169, 118, 28, 0.2)" }}
                >
                  <Image
                    src="/image/laura.jpg"
                    alt="Laura Baud, créatrice de l'expérience ÉCLORE"
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <p className="eclore-kicker mb-4">Pourquoi me faire confiance</p>
              <h2 className="text-3xl md:text-4xl mb-6">Je m&apos;appelle Laura</h2>
              <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--encre-douce)" }}>
                J&apos;ai été infirmière durant 17 ans en santé mentale et je suis maintenant
                thérapeute en libéral. ÉCLORE est né de mon propre cheminement, et je l&apos;ai
                créé comme un espace d&apos;exploration intérieure.
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {[
                  { titre: "Infirmière", sous: "de formation" },
                  { titre: "17 ans", sous: "en santé mentale" },
                  { titre: "Créatrice", sous: "de l'expérience ÉCLORE" },
                ].map((item) => (
                  <div
                    key={item.titre}
                    className="p-4 rounded-2xl text-center"
                    style={{ background: "rgba(255,255,255,0.75)", border: "1px solid var(--sable-fonce)" }}
                  >
                    <div
                      className="text-base mb-1"
                      style={{ fontFamily: "var(--font-cinzel)", color: "var(--or-profond)" }}
                    >
                      {item.titre}
                    </div>
                    <div className="text-xs" style={{ color: "var(--encre-claire)" }}>
                      {item.sous}
                    </div>
                  </div>
                ))}
              </div>

              <p
                className="eclore-italique text-lg leading-relaxed p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.75)",
                  border: "1px solid var(--sable-fonce)",
                  color: "var(--encre-douce)",
                }}
              >
                Depuis 17 ans, j&apos;accompagne des femmes vers une relation plus douce avec
                elles-mêmes. ÉCLORE est le prolongement de cette écoute, sous une autre forme.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TÉMOIGNAGES ============ */}
      <section className="eclore-section eclore-bg-creme">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-6">
            <p className="eclore-kicker mb-4">La confiance</p>
            <h2 className="text-3xl md:text-4xl mb-5">
              Elles m&apos;ont <span className="eclore-or-texte">fait confiance</span>
            </h2>
          </div>

          {/* Cadre honnête : ces avis concernent la thérapie, pas ÉCLORE */}
          <div
            className="max-w-2xl mx-auto p-5 rounded-2xl mb-12 text-center"
            style={{ background: "var(--or-voile)", border: "1px solid var(--or-lumiere)" }}
          >
            <p className="text-sm leading-relaxed" style={{ color: "var(--encre-douce)" }}>
              <strong style={{ color: "var(--encre)" }}>En toute transparence :</strong> ÉCLORE
              est un projet récent, je n&apos;ai donc pas encore de témoignages sur cette
              expérience. Les avis ci-dessous concernent mon accompagnement en tant que
              thérapeute — ils vous permettront de savoir qui je suis et comment j&apos;écoute.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {temoignages.map((avis) => (
              <div key={avis.prenom} className="eclore-card p-7 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-11 h-11 rounded-full flex items-center justify-center text-lg text-white shrink-0"
                    style={{
                      background: "linear-gradient(135deg, var(--or-clair) 0%, var(--or-profond) 100%)",
                      fontFamily: "var(--font-cinzel)",
                    }}
                  >
                    {avis.prenom.charAt(0)}
                  </span>
                  <div className="min-w-0">
                    <p
                      className="text-base leading-tight truncate"
                      style={{ fontFamily: "var(--font-cinzel)", color: "var(--encre)" }}
                    >
                      {avis.prenom}
                    </p>
                    <p className="text-xs truncate" style={{ color: "var(--encre-claire)" }}>
                      {avis.meta} · {avis.date}
                    </p>
                  </div>
                </div>

                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" viewBox="0 0 20 20" fill="#DFB65E">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.367 2.446a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.539 1.118l-3.366-2.446a1 1 0 00-1.176 0l-3.367 2.446c-.783.57-1.838-.197-1.538-1.118l1.286-3.958a1 1 0 00-.363-1.118L2.063 9.385c-.784-.57-.38-1.81.588-1.81h4.162a1 1 0 00.951-.69l1.285-3.958z" />
                    </svg>
                  ))}
                </div>

                <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--encre-douce)" }}>
                  « {avis.texte} »
                </p>

                <div
                  className="flex items-center gap-2 mt-5 pt-4"
                  style={{ borderTop: "1px solid var(--sable-fonce)" }}
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                  </svg>
                  <span className="text-xs" style={{ color: "var(--encre-claire)" }}>
                    Avis vérifié Google
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href={AVIS_GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-semibold transition-transform hover:scale-[1.03]"
              style={{ background: "#fff", color: "var(--encre)", boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Consulter les 62 avis Google
            </a>
          </div>
        </div>
      </section>

      {/* ============ LES FORMULES ============ */}
      <section id="formules" className="eclore-section eclore-bg-sable">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="eclore-kicker mb-4">Ce que vous recevez</p>
            <h2 className="text-3xl md:text-4xl mb-5">
              Choisissez <span className="eclore-or-texte">votre chemin</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--encre-douce)" }}>
              Les deux formules donnent accès au parcours complet et à la communauté privée
              pendant 3 mois. La formule Premium y ajoute un accompagnement individuel.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start max-w-3xl lg:max-w-none mx-auto">
            {formules.map((formule) => (
              <div
                key={formule.id}
                className="relative rounded-[2rem] overflow-hidden flex flex-col h-full"
                style={{
                  background: formule.miseEnAvant
                    ? "linear-gradient(180deg, #FFFDF8 0%, var(--or-voile) 100%)"
                    : "rgba(255, 255, 255, 0.9)",
                  border: `2px solid ${formule.miseEnAvant ? "var(--or-clair)" : "var(--sable-fonce)"}`,
                  boxShadow: formule.miseEnAvant
                    ? "0 25px 70px rgba(169, 118, 28, 0.22)"
                    : "0 12px 40px rgba(169, 118, 28, 0.08)",
                }}
              >
                {formule.miseEnAvant && (
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 px-4 sm:px-6 py-2 z-10 max-w-[calc(100%-2rem)]"
                    style={{
                      background: "linear-gradient(135deg, var(--or) 0%, var(--or-profond) 100%)",
                      borderRadius: "0 0 14px 14px",
                    }}
                  >
                    <span
                      className="block text-[10px] sm:text-xs font-bold tracking-[0.12em] text-white uppercase whitespace-nowrap"
                      style={{ fontFamily: "var(--font-cinzel)" }}
                    >
                      Accompagnement complet
                    </span>
                  </div>
                )}

                <div
                  className={`p-6 sm:p-7 md:p-9 flex flex-col flex-1 ${
                    formule.miseEnAvant ? "pt-14 sm:pt-16" : "pt-12"
                  }`}
                >
                  <div className="text-center mb-7">
                    <h3 className="text-2xl md:text-3xl mb-2">{formule.nom}</h3>
                    <p className="text-sm md:text-base" style={{ color: "var(--or-profond)" }}>
                      {formule.sousTitre}
                    </p>
                  </div>

                  <div
                    className="text-center py-6 mb-7 rounded-2xl"
                    style={{
                      background: formule.miseEnAvant
                        ? "rgba(255, 255, 255, 0.7)"
                        : "var(--or-voile)",
                    }}
                  >
                    <div className="flex items-baseline justify-center gap-2">
                      <span
                        className="text-5xl md:text-6xl"
                        style={{ fontFamily: "var(--font-cinzel)", color: "var(--encre)" }}
                      >
                        {formule.prix}
                      </span>
                      <span className="text-2xl" style={{ color: "var(--encre-claire)" }}>
                        €
                      </span>
                    </div>
                    <span
                      className="inline-block mt-3 px-4 py-1.5 rounded-full text-xs font-semibold"
                      style={{ background: "var(--sable)", color: "var(--or-profond)" }}
                    >
                      {formule.duree}
                    </span>
                  </div>

                  <p
                    className="eclore-italique text-center text-base mb-7"
                    style={{ color: "var(--encre-douce)" }}
                  >
                    {formule.accroche}
                  </p>

                  <div className="flex-1 mb-8">
                    <p className="eclore-kicker mb-4 text-center">Ce qui est inclus</p>
                    <ul className="space-y-3">
                      {formule.inclus.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span
                            className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                            style={{
                              background: "linear-gradient(135deg, var(--or-clair) 0%, var(--or) 100%)",
                            }}
                          >
                            <svg
                              className="w-3 h-3 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </span>
                          <span className="text-sm md:text-base" style={{ color: "var(--encre-douce)" }}>
                            {item}
                          </span>
                        </li>
                      ))}
                      {formule.exclus.map((item) => (
                        <li key={item} className="flex items-start gap-3 opacity-50">
                          <span
                            className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                            style={{ background: "var(--sable-fonce)" }}
                          >
                            <svg
                              className="w-3 h-3"
                              style={{ color: "var(--encre-claire)" }}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </span>
                          <span
                            className="text-sm md:text-base line-through"
                            style={{ color: "var(--encre-claire)" }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={formule.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center ${formule.miseEnAvant ? "eclore-btn" : "eclore-btn-ghost"}`}
                  >
                    {formule.cta}
                  </a>

                  {formule.lienSecondaire && (
                    <a
                      href={formule.lienSecondaire}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 mt-4 text-sm font-medium transition-opacity hover:opacity-70"
                      style={{ color: "var(--or-profond)" }}
                    >
                      Voir la page du programme
                      <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  )}

                  <p
                    className="text-center text-xs mt-4"
                    style={{ color: "var(--encre-claire)" }}
                  >
                    {formule.miseEnAvant
                      ? "Accès sur candidature. Les 5 séances sont à utiliser pendant les 3 mois."
                      : "Accès immédiat, sans candidature."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ LES 5 SÉANCES ============ */}
      <section className="eclore-section eclore-bg-creme">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="eclore-kicker mb-4">Formule Premium</p>
              <h2 className="text-3xl md:text-4xl mb-6">
                Cinq séances <span className="eclore-or-texte">individuelles</span>
              </h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--encre-douce)" }}>
                Au cours des 3 mois d&apos;accompagnement, vous bénéficierez de cinq rendez-vous
                individuels pour approfondir votre cheminement personnel.
              </p>
              <p className="eclore-italique text-lg" style={{ color: "var(--or-profond)" }}>
                Chaque séance sera un espace d&apos;écoute, d&apos;exploration et de réflexion,
                adapté à votre histoire et à vos besoins du moment.
              </p>
            </div>

            <div className="space-y-4">
              {seances.map((item, i) => (
                <div key={item} className="eclore-card p-5 flex items-start gap-4">
                  <span
                    className="w-8 h-8 rounded-full shrink-0 flex items-center justify-center text-sm"
                    style={{
                      background: "var(--or-voile)",
                      color: "var(--or-profond)",
                      fontFamily: "var(--font-cinzel)",
                    }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-base leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ LE PROGRAMME ============ */}
      <section id="programme" className="eclore-section eclore-bg-sable">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="eclore-kicker mb-4">Le contenu</p>
            <h2 className="text-3xl md:text-4xl mb-5">
              Huit <span className="eclore-or-texte">expériences guidées</span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--encre-douce)" }}>
              Le parcours complet, accessible dans les deux formules pendant 3 mois.
            </p>
          </div>

          <EcloreProgramme />
        </div>
      </section>

      {/* ============ PUBLIC CIBLE ============ */}
      <section className="eclore-section eclore-bg-nuit relative overflow-hidden">
        <div
          className="eclore-halo top-0 right-1/4 w-96 h-96"
          style={{ background: "rgba(240, 217, 160, 0.25)" }}
        />
        <div className="relative max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="eclore-kicker mb-4" style={{ color: "var(--or-lumiere)" }}>
              Pour qui
            </p>
            <h2 className="text-3xl md:text-4xl mb-5" style={{ color: "#fff" }}>
              Est-ce fait pour vous ?
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
              Une expérience pensée pour les femmes qui souhaitent devenir actrices de leur
              propre cheminement. Autant vous le dire clairement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div
              className="p-7 md:p-8 rounded-[1.75rem]"
              style={{
                background: "rgba(240, 217, 160, 0.14)",
                border: "1px solid rgba(240, 217, 160, 0.4)",
              }}
            >
              <h3 className="text-xl mb-6" style={{ color: "var(--or-lumiere)" }}>
                C&apos;est pour vous si…
              </h3>
              <ul className="space-y-4">
                {pourVous.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: "var(--or-lumiere)" }}
                    >
                      <svg
                        className="w-3 h-3"
                        style={{ color: "#4A3520" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <p style={{ color: "rgba(255,255,255,0.92)" }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-7 md:p-8 rounded-[1.75rem]"
              style={{
                background: "rgba(0, 0, 0, 0.16)",
                border: "1px solid rgba(255, 255, 255, 0.14)",
              }}
            >
              <h3 className="text-xl mb-6" style={{ color: "rgba(255,255,255,0.85)" }}>
                Ce n&apos;est pas pour vous si…
              </h3>
              <ul className="space-y-4">
                {pasPourVous.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-full shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ background: "rgba(255,255,255,0.18)" }}
                    >
                      <svg
                        className="w-3 h-3"
                        style={{ color: "rgba(255,255,255,0.7)" }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </span>
                    <p style={{ color: "rgba(255,255,255,0.7)" }}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PRÉREQUIS & MATÉRIEL ============ */}
      <section className="eclore-section eclore-bg-creme">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="eclore-kicker mb-4">Avant de commencer</p>
            <h2 className="text-3xl md:text-4xl">Prérequis & matériel</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="eclore-card p-8">
              <h3 className="text-xl mb-4">Aucun prérequis particulier</h3>
              <p className="mb-6 leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                ÉCLORE s&apos;adresse simplement aux femmes qui ressentent l&apos;envie de prendre
                du temps pour elles. Pour profiter pleinement de l&apos;expérience, il est
                recommandé de :
              </p>
              <ul className="space-y-3 mb-6">
                {prerequis.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--or-clair)" }}
                    />
                    <span className="text-sm md:text-base" style={{ color: "var(--encre-douce)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p
                className="eclore-italique text-sm p-4 rounded-xl"
                style={{ background: "var(--or-voile)", color: "var(--encre-douce)" }}
              >
                Aucune compétence particulière en écriture ou en créativité n&apos;est nécessaire.
                Les exercices proposés sont des supports d&apos;exploration, et non des
                performances à réussir.
              </p>
            </div>

            <div className="eclore-card p-8">
              <h3 className="text-xl mb-4">Le matériel à prévoir</h3>
              <p className="mb-6 leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                Aucun matériel spécifique n&apos;est nécessaire. Pour certaines expériences,
                ceci pourra vous accompagner :
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Un carnet",
                  "Quelques feutres ou crayons de couleur",
                  "Un oracle, ou un jeu de cartes de votre choix",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ background: "var(--or-clair)" }}
                    />
                    <span className="text-sm md:text-base" style={{ color: "var(--encre-douce)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="text-sm mb-5" style={{ color: "var(--encre-claire)" }}>
                Ces éléments ne sont pas inclus dans l&apos;accompagnement.
              </p>
              <div
                className="p-4 rounded-xl"
                style={{ background: "#fff", border: "1px solid var(--sable-fonce)" }}
              >
                <p className="text-sm leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                  <strong style={{ color: "var(--encre)" }}>Au sujet de l&apos;oracle :</strong> il
                  ne s&apos;agit pas d&apos;un outil de prédiction ou de voyance, mais d&apos;un
                  support de réflexion, de créativité et d&apos;exploration personnelle permettant
                  de questionner son ressenti et d&apos;ouvrir de nouvelles pistes de réflexion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="eclore-section eclore-bg-sable">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="eclore-kicker mb-4">Vos questions</p>
            <h2 className="text-3xl md:text-4xl mb-5">
              Vous n&apos;êtes pas <span className="eclore-or-texte">encore sûre ?</span>
            </h2>
            <p className="text-lg" style={{ color: "var(--encre-douce)" }}>
              C&apos;est normal. Voici les questions qui reviennent le plus souvent.
            </p>
          </div>

          <EcloreFaq />
        </div>
      </section>

      {/* ============ CANDIDATURE ============ */}
      <section id="candidature" className="eclore-section eclore-bg-lumiere relative overflow-hidden">
        <div
          className="eclore-halo top-10 left-10 w-80 h-80"
          style={{ background: "rgba(240, 217, 160, 0.5)" }}
        />
        <div className="relative max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="eclore-kicker mb-4">Rejoindre l&apos;expérience</p>
            <h2 className="text-3xl md:text-4xl mb-5">
              Comment rejoindre <span className="eclore-or-texte">ÉCLORE Premium</span> ?
            </h2>
            <p className="max-w-2xl mx-auto text-lg" style={{ color: "var(--encre-douce)" }}>
              Afin de préserver la qualité de l&apos;accompagnement, l&apos;accès à ÉCLORE Premium
              se fait sur candidature.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                num: "1",
                titre: "Le questionnaire",
                texte:
                  "Vous commencez par remplir le questionnaire de candidature, pour me partager où vous en êtes.",
              },
              {
                num: "2",
                titre: "L'échange découverte",
                texte:
                  "À la suite de vos réponses, vous pourrez réserver un échange de 30 minutes avec moi en visioconférence.",
              },
              {
                num: "3",
                titre: "La décision, ensemble",
                texte:
                  "Cet échange nous permet de vérifier si ÉCLORE Premium correspond à vos besoins, vos attentes et votre démarche.",
              },
            ].map((etape) => (
              <div key={etape.num} className="eclore-card eclore-card-hover p-7 text-center">
                <span
                  className="inline-flex w-12 h-12 rounded-full items-center justify-center text-xl mb-5"
                  style={{
                    background: "linear-gradient(135deg, var(--or) 0%, var(--or-profond) 100%)",
                    color: "#fff",
                    fontFamily: "var(--font-cinzel)",
                  }}
                >
                  {etape.num}
                </span>
                <h3 className="text-lg mb-3">{etape.titre}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                  {etape.texte}
                </p>
              </div>
            ))}
          </div>

          {/* L'échange découverte, détaillé */}
          <div
            className="p-7 md:p-10 rounded-[2rem] mb-12"
            style={{
              background: "rgba(255, 255, 255, 0.8)",
              border: "1px solid var(--or-lumiere)",
              boxShadow: "0 15px 50px rgba(169, 118, 28, 0.12)",
            }}
          >
            <div className="text-center mb-8">
              <span
                className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
                style={{ background: "var(--or-voile)", color: "var(--or-profond)" }}
              >
                30 minutes · en visioconférence · sans engagement
              </span>
              <h3 className="text-2xl md:text-3xl mb-4">L&apos;échange découverte</h3>
              <p className="text-base md:text-lg max-w-xl mx-auto" style={{ color: "var(--encre-douce)" }}>
                Un moment rien que pour vous, sans pression. Nous prendrons le temps de :
              </p>
            </div>

            <ul className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {[
                "Faire connaissance et parler de là où vous en êtes aujourd'hui",
                "Répondre à toutes vos questions sur le parcours et son déroulé",
                "Clarifier ce que vous aimeriez explorer pendant ces 3 mois",
                "Vérifier ensemble si ÉCLORE Premium correspond à votre démarche",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 p-4 rounded-xl"
                  style={{ background: "var(--creme)" }}
                >
                  <svg
                    className="w-5 h-5 shrink-0 mt-0.5"
                    style={{ color: "var(--or-profond)" }}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--encre-douce)" }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <a href={CANDIDATURE_URL} target="_blank" rel="noopener noreferrer" className="eclore-btn text-lg">
              Remplir le questionnaire de candidature
              <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <p className="mt-5 text-sm max-w-md mx-auto" style={{ color: "var(--encre-claire)" }}>
              Aucun engagement à ce stade. Le questionnaire prend quelques minutes, et
              c&apos;est vous qui décidez ensuite.
            </p>
          </div>
        </div>
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="py-20 md:py-28 px-6 eclore-bg-creme">
        <div className="max-w-3xl mx-auto text-center">
          <div className="eclore-filet mb-10" />
          <p
            className="eclore-italique text-2xl md:text-3xl leading-relaxed mb-8"
            style={{ color: "var(--encre)" }}
          >
            « ÉCLORE est une invitation à vous rencontrer autrement, avec un cadre, des outils
            et un accompagnement personnalisé pour avancer sur votre propre chemin. »
          </p>
          <p className="eclore-kicker mb-10">Laura Baud</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={CANDIDATURE_URL} target="_blank" rel="noopener noreferrer" className="eclore-btn">
              Candidater à ÉCLORE
            </a>
            <a href="#formules" className="eclore-btn-ghost">
              Revoir les formules
            </a>
          </div>
          <div className="eclore-filet mt-14" />
        </div>
      </section>
    </>
  );
}
