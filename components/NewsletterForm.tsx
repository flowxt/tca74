"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("submitting");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) throw new Error();

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div
        className="inline-flex items-center gap-3 px-6 py-4 rounded-full"
        style={{ background: "rgba(255,255,255,0.6)" }}
      >
        <svg className="w-6 h-6" style={{ color: "var(--accent-sage)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-medium" style={{ color: "var(--brun-fonce)" }}>
          Merci ! Votre inscription a bien été prise en compte.
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Votre adresse email"
        className="flex-1 px-5 py-3.5 rounded-full text-base focus:outline-none focus:ring-2 focus:ring-[var(--brun-doux)]"
        style={{
          background: "rgba(255,255,255,0.8)",
          border: "2px solid rgba(255,255,255,0.5)",
          color: "var(--text-dark)",
        }}
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            Envoi...
          </span>
        ) : (
          "S'inscrire"
        )}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600 sm:absolute sm:bottom-0 sm:translate-y-full sm:pt-2">
          Une erreur est survenue. Veuillez réessayer.
        </p>
      )}
    </form>
  );
}
