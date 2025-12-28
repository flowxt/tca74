"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  difficulty: string;
  hasCompletedQuiz: boolean;
  message: string;
};

type FormStatus = "idle" | "submitting" | "success" | "error";

const subjectOptions = [
  "Consultation individuelle",
  "Groupe de paroles TCA",
  "Programme en ligne",
  "Autre demande",
];

const difficultyOptions = [
  "Hyperphagie boulimique",
  "Compulsions alimentaires",
  "Gestion des émotions",
  "Affirmation de soi / Poser ses limites",
  "Attaques de panique / Phobies",
  "Épreuves de vie difficiles",
  "Autre",
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    difficulty: "",
    hasCompletedQuiz: false,
    message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target.type === "checkbox" ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({
      ...prev,
      [target.name]: value,
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
        difficulty: "",
        hasCompletedQuiz: false,
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

  // Générer le lien WhatsApp avec les infos pré-remplies
  const generateWhatsAppLink = () => {
    const phoneNumber = "33612345678"; // À remplacer par le vrai numéro
    const message = encodeURIComponent(
      `Bonjour Laura,\n\nJe m'appelle ${formData.name || "[Votre nom]"} et je vous contacte pour : ${formData.subject || "[Objet]"}.\n\nMa difficulté principale : ${formData.difficulty || "[À préciser]"}\n\n${formData.hasCompletedQuiz ? "✅ J'ai fait le quiz et votre accompagnement me correspond.\n\n" : ""}${formData.message || "[Votre message]"}`
    );
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  return (
    <div className="space-y-8">
      {/* Choix du mode de contact */}
      <div
        className="p-4 sm:p-6 rounded-2xl"
        style={{ background: "linear-gradient(135deg, var(--accent-sage) 0%, var(--brun-doux) 100%)" }}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white flex-shrink-0">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" viewBox="0 0 24 24" fill="#25D366">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </div>
            <div className="flex-1 text-white">
              <h3 className="font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">Contactez-moi sur WhatsApp</h3>
              <p className="text-xs sm:text-sm text-white/80">Réponse rapide, échanges simplifiés</p>
            </div>
          </div>
          <a
            href={generateWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-5 sm:px-6 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 whitespace-nowrap flex-shrink-0"
            style={{ background: "white", color: "var(--brun-fonce)" }}
          >
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Ouvrir WhatsApp</span>
            <span className="ml-1">→</span>
          </a>
        </div>
      </div>

      <div className="text-center">
        <span className="text-sm font-medium" style={{ color: "var(--text-light)" }}>
          — ou remplissez le formulaire ci-dessous —
        </span>
      </div>

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

        {/* Nouvelle section : Difficulté */}
        <div>
          <label
            htmlFor="difficulty"
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text-dark)" }}
          >
            Quelle est votre difficulté principale ? *
          </label>
          <select
            id="difficulty"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            required
            className={inputClasses}
            style={inputStyles}
          >
            <option value="">Sélectionnez votre difficulté...</option>
            {difficultyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* Checkbox Quiz */}
        <div
          className="p-4 rounded-xl flex items-start gap-4"
          style={{ background: "rgba(168, 181, 160, 0.1)", border: "1px solid var(--accent-sage)" }}
        >
          <input
            type="checkbox"
            id="hasCompletedQuiz"
            name="hasCompletedQuiz"
            checked={formData.hasCompletedQuiz}
            onChange={handleChange}
            className="mt-1 w-5 h-5 rounded accent-[var(--brun-doux)]"
          />
          <label htmlFor="hasCompletedQuiz" className="text-sm cursor-pointer" style={{ color: "var(--text-dark)" }}>
            <strong>J'ai fait le quiz et votre accompagnement me correspond</strong>
            <br />
            <span style={{ color: "var(--text-medium)" }}>
              Si ce n'est pas encore fait, <a href="/questionnaire" className="underline" style={{ color: "var(--brun-doux)" }}>faites le quiz ici</a> pour vérifier que mon accompagnement vous correspond.
            </span>
          </label>
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
            rows={5}
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
    </div>
  );
}
