"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AbsenceModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Afficher la modale après un court délai pour une meilleure UX
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md rounded-3xl p-8 text-center"
              style={{
                background: "linear-gradient(135deg, var(--bg-cream) 0%, var(--rose-pale) 100%)",
                boxShadow: "0 25px 80px rgba(0, 0, 0, 0.3)",
              }}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Icône */}
              <div
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, var(--brun-doux) 0%, var(--rose-accent) 100%)" }}
              >
                <span className="text-4xl">🌴</span>
              </div>

              {/* Titre */}
              <h2
                className="text-2xl md:text-3xl font-medium mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
              >
                Actuellement en congé
              </h2>

              {/* Message */}
              <p className="text-base mb-2" style={{ color: "var(--text-medium)" }}>
                Je suis actuellement absente et ne pourrai pas traiter les nouvelles demandes immédiatement.
              </p>
              <p
                className="text-lg font-semibold mb-6"
                style={{ color: "var(--brun-doux)" }}
              >
                Reprise des consultations le <strong>16 février 2025</strong>
              </p>

              {/* Info supplémentaire */}
              <div
                className="p-4 rounded-2xl mb-6"
                style={{ background: "rgba(255, 255, 255, 0.6)" }}
              >
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  Vous pouvez tout de même m'envoyer un message via le formulaire ci-dessous. 
                  Je vous répondrai dès mon retour.
                </p>
              </div>

              {/* Bouton */}
              <button
                onClick={() => setIsOpen(false)}
                className="w-full py-4 rounded-full font-semibold text-white transition-all hover:scale-[1.02]"
                style={{
                  background: "linear-gradient(135deg, var(--rose-accent) 0%, var(--brun-doux) 100%)",
                  boxShadow: "0 8px 25px rgba(185, 149, 136, 0.4)",
                }}
              >
                J'ai compris, continuer
              </button>

              {/* Bouton fermer */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(0,0,0,0.1)", color: "var(--text-medium)" }}
                aria-label="Fermer"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}


