"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const subjectOptions = [
  "Consultation individuelle",
  "Groupe de paroles TCA",
  "Groupe Haute Sensibilité",
  "Formation en ligne",
  "Autre demande",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simuler l'envoi du formulaire
    // Dans la vraie implémentation, vous connecterez ceci à un backend ou service email
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  };

  const inputStyles = {
    background: "var(--bg-white)",
    border: "2px solid var(--rose-medium)",
    color: "var(--text-dark)",
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-xl transition-all focus:outline-none focus:border-[var(--brun-doux)] focus:ring-2 focus:ring-[var(--rose-pale)]";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text-dark)" }}
          >
            Nom complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className={inputClasses}
            style={inputStyles}
            placeholder="Votre nom"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text-dark)" }}
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className={inputClasses}
            style={inputStyles}
            placeholder="votre@email.com"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text-dark)" }}
          >
            Téléphone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={inputClasses}
            style={inputStyles}
            placeholder="+33 6 00 00 00 00"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text-dark)" }}
          >
            Objet de votre demande *
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className={inputClasses}
            style={inputStyles}
          >
            <option value="">Sélectionnez...</option>
            {subjectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium mb-2"
          style={{ color: "var(--text-dark)" }}
        >
          Votre message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className={`${inputClasses} resize-none`}
          style={inputStyles}
          placeholder="Décrivez votre situation ou votre demande..."
        />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Envoi en cours...
            </span>
          ) : (
            "Envoyer le message"
          )}
        </button>

        {status === "success" && (
          <p className="text-sm font-medium" style={{ color: "var(--accent-sage)" }}>
            ✓ Message envoyé avec succès !
          </p>
        )}
        {status === "error" && (
          <p className="text-sm font-medium text-red-500">
            Une erreur est survenue. Veuillez réessayer.
          </p>
        )}
      </div>

      <p className="text-xs" style={{ color: "var(--text-light)" }}>
        * Champs obligatoires. Vos données sont traitées de manière confidentielle 
        et ne seront jamais partagées avec des tiers.
      </p>
    </form>
  );
}

