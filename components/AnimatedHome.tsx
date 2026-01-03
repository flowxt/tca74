"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import AnimatedWords from "@/components/AnimatedWords";
import GoogleReviews from "@/components/GoogleReviews";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export default function AnimatedHome() {
  return (
    <>
      {/* Hero Section - Style 2025 full width */}
      <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Decorative circles */}
        <div className="circle-decoration top-20 -left-40 animate-float" />
        <div className="circle-decoration bottom-40 -right-20 animate-float" style={{ animationDelay: "2s" }} />
        <div className="circle-decoration top-1/3 right-20 w-32 h-32 animate-float" style={{ animationDelay: "1s" }} />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-16 text-center">
          {/* Logo en fond */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center pointer-events-none" 
            style={{ top: '-5%' }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px]">
              <Image
                src="/logo.png"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>
          
          {/* Badge */}
          <motion.div
            className="relative inline-block px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Laura Baud — Annecy • Genève • Lausanne
          </motion.div>
          
          {/* Titre principal - Grande typographie */}
          <motion.h1
            className="relative text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-4 leading-tight"
            style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Thérapeute TCA
            <br />
            <span style={{ color: "var(--brun-doux)" }}>centrée sur les émotions</span>
          </motion.h1>
          
          {/* Sous-titre - spécialité */}
          <motion.p
            className="text-lg md:text-xl font-medium mb-4"
            style={{ color: "var(--brun)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Spécialisée dans l'hyperphagie boulimique
          </motion.p>
          
          {/* Phrase d'accroche */}
          <motion.p
            className="text-xl md:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto"
            style={{ color: "var(--text-medium)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Comprenez ce qui se cache derrière vos compulsions et retrouvez votre liberté !
          </motion.p>
          
          {/* Les 4 mots animés */}
          <AnimatedWords />
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Link href="/contact" className="btn-primary text-lg px-8 py-4">
              Prendre rendez-vous
            </Link>
            <Link href="/questionnaire" className="btn-secondary text-lg px-8 py-4">
              Suis-je la bonne personne pour vous ?
            </Link>
          </motion.div>
          
          {/* Lien outils gratuits */}
          <motion.div 
            className="relative text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a
              href="https://l-baud.systeme.io/cadeau"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:scale-105"
              style={{ color: "var(--brun-doux)" }}
            >
              <span>🎁</span>
              <span className="underline underline-offset-4">Accéder à mes outils gratuits</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 0.5, delay: 1.2 },
            y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            style={{ color: "var(--rose-accent)" }}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Découvrez Laura Section - Avant Mon approche */}
      <AboutSection />

      {/* About Section - Approche centrée émotions */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--rose-accent)" }}
              >
                Mon approche
              </span>
              <h2
                className="text-3xl md:text-4xl font-medium mb-6"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Le TCA est un{" "}
                <span style={{ color: "var(--brun-doux)" }}>symptôme</span>
              </h2>
              <div className="space-y-4 text-lg" style={{ color: "var(--text-medium)" }}>
                <p>
                  Mon approche ne se limite pas à la nutrition : <strong>je travaille sur ce qui nourrit vos crises en profondeur</strong> — vos émotions, vos besoins non exprimés, vos difficultés relationnelles.
                </p>
                <p>
                  L'hyperphagie n'est pas une fatalité, mais un <strong>signal fort</strong> que votre corps vous envoie pour vous rappeler l'importance de vous retrouver. Ensemble, nous allons <strong>explorer ses racines</strong> pour construire un changement durable.
                </p>
                <p>
                  Ma spécialité : accompagner les femmes qui souffrent d'hyperphagie à retrouver une relation apaisée avec elles-mêmes et avec la nourriture. <strong>Pas de régimes, pas de comptage</strong>, mais un chemin profond fondé sur l'affirmation de soi, la reconnaissance de ses besoins, la gestion des émotions et la capacité à poser ses limites.
                </p>
                <p>
                  Consultations <strong>100% en ligne</strong> — depuis Annecy, Genève, Lausanne et partout dans la francophonie.
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <div
                className="absolute inset-0 rounded-3xl transform rotate-3"
                style={{ background: "var(--rose-pale)" }}
              />
              <div
                className="relative rounded-3xl p-6"
                style={{ background: "var(--bg-cream)" }}
              >
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    { number: "17 ans", label: "Expérience en psychiatrie dont public TCA" },
                    { number: "6 ans", label: "En unité hospitalière spécialisée TCA" },
                    { number: "2000+", label: "Consultations individuelles TCA" },
                    { number: "250+", label: "Patientes accompagnées" },
                    { number: "60+", label: "Avis positifs" },
                    { number: "100%", label: "En ligne" },
                  ].map((stat, i) => (
                    <motion.div key={i} className="text-center p-3" variants={staggerItem}>
                      <div
                        className="text-2xl md:text-3xl font-semibold mb-1"
                        style={{ color: "var(--brun-doux)", fontFamily: "var(--font-playfair)" }}
                      >
                        {stat.number}
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-light)" }}>
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                {/* Info supplémentaire */}
                <div
                  className="mt-4 pt-4 text-center text-sm"
                  style={{ borderTop: "1px solid var(--rose-medium)", color: "var(--text-medium)" }}
                >
                  <strong>Les patientes observent en moyenne une véritable progression au bout de 8 séances</strong>
                  <br />
                  <span style={{ color: "var(--text-light)" }}>à raison d'une séance tous les 15 jours</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pillars Section - Les 5 axes */}
      <section className="section-padding bg-gradient-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Texte */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <span
                className="text-sm font-medium tracking-widest uppercase mb-4 block"
                style={{ color: "var(--rose-accent)" }}
              >
                Les piliers de mon accompagnement
              </span>
              <h2
                className="text-3xl md:text-4xl font-medium mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                5 piliers{" "}
                <span style={{ color: "var(--brun-doux)" }}>fondamentaux</span>
              </h2>
              <p className="text-lg" style={{ color: "var(--text-medium)" }}>
                Mes séances s'articulent autour de 5 axes essentiels
              </p>
            </motion.div>

            {/* Image Alignement */}
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={scaleIn}
            >
              <div
                className="absolute -inset-4 rounded-3xl transform rotate-3"
                style={{ background: "var(--rose-pale)" }}
              />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/image/Alignement.jpg"
                  alt="Retrouver son alignement intérieur"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                title: "Affirmation de soi",
                desc: "Apprendre à exprimer ses besoins, ses envies et ses limites sans culpabilité.",
              },
              {
                title: "Connaissance de ses besoins",
                desc: "Identifier ce dont vous avez vraiment besoin au-delà de la nourriture.",
              },
              {
                title: "Poser ses limites",
                desc: "Dire non, se protéger, ne plus se laisser envahir par les autres.",
              },
              {
                title: "Problématiques relationnelles",
                desc: "Comprendre et transformer les schémas qui vous font souffrir.",
              },
              {
                title: "Techniques comportementales",
                desc: "Des outils concrets de gestion des crises pour un soulagement immédiat.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                className="p-6 rounded-2xl text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                style={{ 
                  background: "linear-gradient(135deg, #E8EDE5 0%, #D4DFD0 100%)",
                  border: "2px solid var(--accent-sage)",
                }}
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
                >
                  {pillar.title}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Formations */}
          <motion.div 
            className="mt-12 p-8 md:p-10 rounded-3xl text-center relative overflow-hidden"
            style={{ background: "linear-gradient(135deg, var(--peche) 0%, var(--rose-pale) 50%, var(--nude) 100%)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2" style={{ background: "var(--brun-doux)" }} />
            <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2" style={{ background: "var(--accent-sage)" }} />
            
            <div className="relative z-10">
              <span className="text-3xl mb-4 block">🌱</span>
              <h3
                className="text-2xl md:text-3xl font-medium mb-4"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
              >
                Envie d'avancer à votre rythme ?
              </h3>
              <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
                Découvrez mes <strong>programmes en ligne</strong> : vidéos, exercices pratiques et outils concrets 
                pour commencer votre transformation dès maintenant, en toute autonomie.
              </p>
              <Link 
                href="/formation" 
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 hover:shadow-xl"
                style={{ background: "var(--brun-doux)", color: "white" }}
              >
                <span>Découvrir les programmes</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Outils Section - Liste complète */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Mes outils
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Ce que j'utilise{" "}
              <span style={{ color: "var(--brun-doux)" }}>en séance</span>
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
              Une boîte à outils variée, adaptée à vos besoins
            </p>
          </motion.div>

          {/* Grille des outils avec image carnet */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Image carnet */}
            <motion.div 
              className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-lg order-2 lg:order-1"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <Image
                src="/image/carnet.jpg"
                alt="Écriture thérapeutique - carnet et stylo"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Grille des outils */}
            <motion.div 
              className="grid grid-cols-2 gap-4 order-1 lg:order-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                { icon: "👂", title: "Écoute active", desc: "Écoute inconditionnelle" },
                { icon: "🧠", title: "TCC", desc: "Thérapies cognitives" },
                { icon: "✍️", title: "Écriture thérapeutique", desc: "Journaling et lectures" },
                { icon: "🌀", title: "Hypnose douce", desc: "Visualisations guidées" },
                { icon: "🎨", title: "Exercices créatifs", desc: "Approches ludiques" },
                { icon: "🃏", title: "Médiations par cartes", desc: "Oracles et Dixit" },
                { icon: "💜", title: "Reparentage", desc: "Sécurité émotionnelle" },
                { icon: "🛠️", title: "Gestion de crises", desc: "Exercices concrets" },
              ].map((outil, i) => (
                <motion.div
                  key={i}
                  className="p-4 rounded-2xl text-center hover:scale-[1.02] transition-transform"
                  style={{ background: "var(--bg-cream)", border: "1px solid var(--rose-medium)" }}
                  variants={staggerItem}
                  whileHover={{ y: -3 }}
                >
                  <span className="text-2xl mb-2 block">{outil.icon}</span>
                  <h3
                    className="font-semibold text-sm mb-1"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
                  >
                    {outil.title}
                  </h3>
                  <p className="text-xs" style={{ color: "var(--text-medium)" }}>
                    {outil.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Section supports symboliques avec photos */}
          <motion.div
            className="p-8 rounded-3xl"
            style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 50%, var(--nude) 100%)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Images des cartes */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { src: "/image/card-lumiere-removebg-preview.png", alt: "Les Cartes Lumière de Lise Bartoli", rotate: -3 },
                  { src: "/image/oracle-removebg-preview.png", alt: "L'Oracle de l'enfant intérieur", rotate: 2 },
                  { src: "/image/jeu-removebg-preview.png", alt: "Jeu Dixit", rotate: -1 },
                ].map((card, i) => (
                  <motion.div 
                    key={i}
                    className="relative aspect-[3/4] rounded-2xl overflow-hidden flex items-center justify-center"
                    style={{ transform: `rotate(${card.rotate}deg)` }}
                    whileHover={{ rotate: 0, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={card.src}
                      alt={card.alt}
                      fill
                      className="object-contain drop-shadow-lg"
                    />
                  </motion.div>
                ))}
              </div>

              {/* Texte */}
              <div>
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
                >
                  🃏 Les supports symboliques
                </h3>
                <p className="mb-4" style={{ color: "var(--text-dark)" }}>
                  Parmi mes outils, les <strong>cartes thérapeutiques</strong> occupent une place particulière.
                  Oracle de l'enfant intérieur, cartes Bartoli, Dixit... Elles sont des médiateurs puissants
                  pour <strong>libérer la parole</strong> et explorer les émotions.
                </p>
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  Une approche ludique et profonde qui distingue mon accompagnement.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section - 3 chemins */}
      <section className="section-padding bg-gradient-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Mes accompagnements
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Plusieurs chemins pour avancer
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
              Choisissez le chemin qui vous correspond
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {/* Card 1 - Formations en ligne (Autonomie) */}
            <motion.div variants={staggerItem}>
              <Link href="/formation" className="card group relative overflow-hidden block h-full">
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 transition-transform group-hover:scale-150"
                  style={{ background: "var(--peche)" }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ background: "var(--peche)", opacity: 0.6 }}
                >
                  <svg className="w-7 h-7" style={{ color: "var(--brun)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{ background: "var(--peche)", color: "var(--brun)" }}
                >
                  🚶‍♀️ Chemin en autonomie
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
                >
                  Programmes en ligne
                </h3>
                <p className="mb-4" style={{ color: "var(--text-medium)" }}>
                  Formations pour avancer à votre rythme, en totale autonomie.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--brun-doux)" }}>
                  <span>Découvrir</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>

            {/* Card 2 - Groupes TCA */}
            <motion.div variants={staggerItem}>
              <Link href="/groupes-paroles-tca" className="card group relative overflow-hidden block h-full">
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 transition-transform group-hover:scale-150"
                  style={{ background: "var(--accent-lavande)" }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ background: "var(--accent-lavande)", opacity: 0.5 }}
                >
                  <svg className="w-7 h-7" style={{ color: "var(--brun)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{ background: "var(--accent-lavande)", color: "var(--brun)" }}
                >
                  👭 Chemin en groupe
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
                >
                  Groupes de Paroles TCA
                </h3>
                <p className="mb-4" style={{ color: "var(--text-medium)" }}>
                  Petits groupes (6 participantes max) pour partager, se sentir épaulée et progresser ensemble.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--brun-doux)" }}>
                  <span>En savoir plus</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>

            {/* Card 3 - Consultation Individuelle */}
            <motion.div variants={staggerItem}>
              <Link href="/offres" className="card group relative overflow-hidden block h-full">
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-20 transition-transform group-hover:scale-150"
                  style={{ background: "var(--accent-sage)" }}
                />
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ background: "var(--accent-sage)", opacity: 0.5 }}
                >
                  <svg className="w-7 h-7" style={{ color: "var(--brun)" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-3"
                  style={{ background: "var(--accent-sage)", color: "var(--brun)" }}
                >
                  🧭 Chemin individuel
                </div>
                <h3
                  className="text-xl font-semibold mb-3"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
                >
                  Consultations personnalisées
                </h3>
                <p className="mb-4" style={{ color: "var(--text-medium)" }}>
                  Un accompagnement sur mesure, confidentiel et doux, pour vous déposer en tête-à-tête.
                </p>
                <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--brun-doux)" }}>
                  <span>Voir les offres</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          </motion.div>

          {/* Photo Laura */}
          <motion.div 
            className="flex justify-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
          >
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/image/laura.jpg"
                alt="Laura Baud - Thérapeute TCA"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial / Values Section avec images */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Valeurs
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Un cadre fondé sur la{" "}
              <span style={{ color: "var(--brun-doux)" }}>confiance</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Image bien-dans-sa-peau */}
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <div
                className="absolute -inset-4 rounded-3xl transform -rotate-2"
                style={{ background: "var(--peche)" }}
              />
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
                <Image
                  src="/image/bien-dans-sa-peau.jpg"
                  alt="Se sentir bien dans sa peau"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Valeurs */}
            <motion.div 
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {[
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  ),
                  title: "Confidentialité",
                  desc: "Tout ce qui est partagé reste entre nous, dans un espace sécurisé.",
                  color: "var(--accent-lavande)",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  ),
                  title: "Bienveillance",
                  desc: "Accueil inconditionnel, sans jugement, avec douceur et présence.",
                  color: "var(--rose-accent)",
                },
                {
                  icon: (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  title: "Non-jugement",
                  desc: "Votre histoire est unique. Je vous accompagne là où vous en êtes.",
                  color: "var(--accent-sage)",
                },
              ].map((value, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: "var(--bg-cream)", borderLeft: `4px solid ${value.color}` }}
                  variants={staggerItem}
                  whileHover={{ x: 5 }}
                >
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: value.color, color: "white" }}
                  >
                    {value.icon}
                  </div>
                  <div>
                    <h3
                      className="text-lg font-semibold mb-1"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {value.title}
                    </h3>
                    <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                      {value.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <GoogleReviews />

      {/* Mini FAQ Section */}
      <section className="section-padding bg-gradient-soft overflow-hidden">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              Questions fréquentes
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Vous vous posez des questions ?
            </h2>
          </motion.div>

          <motion.div 
            className="space-y-4 mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              {
                q: "Êtes-vous diététicienne ?",
                a: "Non. Mon accompagnement va au-delà de la nutrition : je travaille sur les émotions, les traumatismes et la relation au corps. Pas de régimes ni de comptage calorique.",
              },
              {
                q: "Le suivi en ligne est-il efficace ?",
                a: "Oui, il suffit d'une connexion stable. Vous pouvez consulter où que vous soyez : Annecy, Genève, Lausanne ou ailleurs.",
              },
              {
                q: "Je n'ai jamais consulté pour un TCA, est-ce pertinent ?",
                a: "Absolument. Pousser la porte est déjà un grand pas. Vous avancez à votre rythme, sans jugement.",
              },
            ].map((item, i) => (
              <motion.div key={i} className="card" variants={staggerItem}>
                <h3
                  className="text-lg font-semibold mb-2"
                  style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
                >
                  {item.q}
                </h3>
                <p style={{ color: "var(--text-medium)" }}>{item.a}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-base font-medium transition-colors"
              style={{ color: "var(--brun-doux)" }}
            >
              Voir toutes les questions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section avec image "tendre la main" */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 50%, var(--nude) 100%)" }}
      >
        <div className="circle-decoration -top-20 -left-20 opacity-40" />
        <div className="circle-decoration -bottom-40 -right-40 opacity-30" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image tendre la main */}
            <motion.div 
              className="relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInLeft}
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <Image
                  src="/image/tendre-la-main.jpg"
                  alt="Tendre la main - accompagnement bienveillant"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Texte CTA */}
            <motion.div 
              className="text-center md:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInRight}
            >
              <h2
                className="text-3xl md:text-4xl font-medium mb-6"
                style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
              >
                Prête à commencer ce chemin ?
              </h2>
              <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
                Le premier pas est souvent le plus difficile. Je suis là pour vous accompagner,
                à votre rythme, vers un mieux-être durable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/contact" className="btn-primary">
                  Prendre rendez-vous
                </Link>
                <Link href="/faq" className="btn-secondary">
                  Consulter la FAQ
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Location SEO Section */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <span
              className="text-sm font-medium tracking-widest uppercase mb-4 block"
              style={{ color: "var(--rose-accent)" }}
            >
              100% en ligne
            </span>
            <h2
              className="text-3xl md:text-4xl font-medium mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Je vous accompagne où que vous soyez
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
              Consultations en visio disponibles dans toute la francophonie
            </p>
          </motion.div>
          
          {/* Zones principales */}
          <motion.div 
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {[
              { city: "Annecy", region: "Haute-Savoie", country: "France", icon: "🇫🇷" },
              { city: "Genève", region: "Canton de Genève", country: "Suisse", icon: "🇨🇭" },
              { city: "Lausanne", region: "Canton de Vaud", country: "Suisse", icon: "🇨🇭" },
            ].map((loc, i) => (
              <motion.div
                key={i}
                className="card text-center hover:border-[var(--rose-accent)]"
                variants={staggerItem}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3">{loc.icon}</div>
                <h3
                  className="text-xl font-semibold mb-1"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {loc.city}
                </h3>
                <p className="text-sm" style={{ color: "var(--text-medium)" }}>
                  {loc.region}
                </p>
                <p className="text-xs font-medium mt-1" style={{ color: "var(--brun-doux)" }}>
                  {loc.country}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Autres régions francophones */}
          <motion.div 
            className="card text-center p-8"
            style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 50%, var(--lavande-pale) 100%)" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={scaleIn}
          >
            <h3
              className="text-xl font-semibold mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Et dans toute la francophonie
            </h3>
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              {[
                "Paris", "Lyon", "Marseille", "Bordeaux", "Toulouse", "Nantes",
                "Bruxelles", "Luxembourg", "Monaco", "Montréal", "Québec"
              ].map((city, i) => (
                <motion.span 
                  key={i}
                  className="px-3 py-1 rounded-full text-sm"
                  style={{ background: "rgba(255,255,255,0.7)", color: "var(--brun)" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  {city}
                </motion.span>
              ))}
            </div>
            <p className="text-sm" style={{ color: "var(--text-medium)" }}>
              France métropolitaine • Suisse romande • Belgique francophone • Luxembourg • Canada francophone • DOM-TOM
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}

