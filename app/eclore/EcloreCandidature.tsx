"use client";

import { useEffect, useRef, useState } from "react";

const EVENT_NAME = "eclore:candidater";

export function openCandidature() {
  window.dispatchEvent(new CustomEvent(EVENT_NAME));
}

type ButtonProps = {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
};

export function CandidaterButton({ className, style, children }: ButtonProps) {
  return (
    <button type="button" onClick={openCandidature} className={className} style={style}>
      {children}
    </button>
  );
}

type Status = "idle" | "sending" | "success" | "error";

export function EcloreCandidatureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const open = () => {
      setStatus("idle");
      setErrorMsg("");
      setIsOpen(true);
    };
    window.addEventListener(EVENT_NAME, open);
    return () => window.removeEventListener(EVENT_NAME, open);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      email: (form.elements.namedItem("email") as HTMLInputElement).value.trim(),
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value.trim(),
      situation: (form.elements.namedItem("situation") as HTMLTextAreaElement).value.trim(),
      attentes: (form.elements.namedItem("attentes") as HTMLTextAreaElement).value.trim(),
    };

    try {
      const res = await fetch("/api/eclore-candidature", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Une erreur est survenue.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Une erreur est survenue.");
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="eclore-candidature-titre"
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(74, 58, 34, 0.45)", backdropFilter: "blur(3px)" }}
        onClick={() => setIsOpen(false)}
      />

      <div
        ref={dialogRef}
        className="relative w-full sm:max-w-lg max-h-[92vh] overflow-y-auto rounded-t-3xl sm:rounded-3xl"
        style={{
          background: "var(--creme)",
          border: "1px solid var(--sable-fonce)",
          boxShadow: "0 30px 80px rgba(74, 58, 34, 0.35)",
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Fermer"
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center transition-opacity hover:opacity-70"
          style={{ background: "rgba(255,255,255,0.8)", border: "1px solid var(--sable-fonce)" }}
        >
          <svg className="w-4 h-4" style={{ color: "var(--encre)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {status === "success" ? (
          <div className="p-8 sm:p-10 text-center">
            <div
              className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center"
              style={{ background: "var(--or-voile)", border: "1px solid var(--or-lumiere)" }}
            >
              <svg className="w-7 h-7" style={{ color: "var(--or-profond)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2
              className="text-2xl mb-4"
              style={{ fontFamily: "var(--font-cinzel)", color: "var(--encre)" }}
            >
              Votre candidature est envoyée
            </h2>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--encre-douce)" }}>
              Merci pour votre confiance. Je reviens vers vous personnellement, par email, pour
              échanger sur votre démarche et voir ensemble si ÉCLORE Premium vous correspond.
            </p>
            <button type="button" onClick={() => setIsOpen(false)} className="eclore-btn">
              Fermer
            </button>
          </div>
        ) : (
          <div className="p-7 sm:p-9">
            <p className="eclore-kicker mb-3">Candidature</p>
            <h2
              id="eclore-candidature-titre"
              className="text-2xl md:text-3xl mb-3"
              style={{ fontFamily: "var(--font-cinzel)", color: "var(--encre)" }}
            >
              Candidater à ÉCLORE Premium
            </h2>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--encre-douce)" }}>
              Quelques mots sur vous suffisent. Aucun engagement : je vous recontacte
              pour un échange, et c&apos;est vous qui décidez ensuite.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="eclore-name" className="eclore-form-label">
                  Prénom et nom <span aria-hidden>*</span>
                </label>
                <input
                  ref={firstFieldRef}
                  id="eclore-name"
                  name="name"
                  type="text"
                  required
                  className="eclore-form-input"
                  placeholder="Votre prénom et nom"
                />
              </div>

              <div>
                <label htmlFor="eclore-email" className="eclore-form-label">
                  Email <span aria-hidden>*</span>
                </label>
                <input
                  id="eclore-email"
                  name="email"
                  type="email"
                  required
                  className="eclore-form-input"
                  placeholder="vous@email.com"
                />
              </div>

              <div>
                <label htmlFor="eclore-phone" className="eclore-form-label">
                  Téléphone <span style={{ color: "var(--encre-claire)" }}>(facultatif)</span>
                </label>
                <input
                  id="eclore-phone"
                  name="phone"
                  type="tel"
                  className="eclore-form-input"
                  placeholder="06 12 34 56 78"
                />
              </div>

              <div>
                <label htmlFor="eclore-situation" className="eclore-form-label">
                  Où en êtes-vous aujourd&apos;hui ? <span aria-hidden>*</span>
                </label>
                <textarea
                  id="eclore-situation"
                  name="situation"
                  required
                  rows={4}
                  className="eclore-form-input"
                  placeholder="Dites-moi en quelques mots ce qui vous amène et ce que vous traversez."
                />
              </div>

              <div>
                <label htmlFor="eclore-attentes" className="eclore-form-label">
                  Qu&apos;aimeriez-vous explorer pendant ces 3 mois ?{" "}
                  <span style={{ color: "var(--encre-claire)" }}>(facultatif)</span>
                </label>
                <textarea
                  id="eclore-attentes"
                  name="attentes"
                  rows={3}
                  className="eclore-form-input"
                  placeholder="Vos envies, vos questions…"
                />
              </div>

              {status === "error" && (
                <p
                  className="text-sm p-3 rounded-xl"
                  style={{ background: "rgba(180, 60, 40, 0.08)", color: "#9a3b28" }}
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="eclore-btn w-full justify-center"
                style={status === "sending" ? { opacity: 0.7, cursor: "wait" } : undefined}
              >
                {status === "sending" ? "Envoi en cours…" : "Envoyer ma candidature"}
              </button>

              <p className="text-xs text-center leading-relaxed" style={{ color: "var(--encre-claire)" }}>
                Vos informations sont uniquement transmises à Laura Baud et ne sont
                utilisées que pour vous recontacter.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
