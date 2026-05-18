import type { Metadata } from "next";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ | Questions Fréquentes",
  description:
    "Retrouvez les réponses à vos questions sur l'accompagnement TCA, la haute sensibilité, les modalités de consultation et mon approche thérapeutique.",
  keywords: [
    "FAQ",
    "questions fréquentes",
    "TCA",
    "accompagnement",
    "thérapie",
    "consultation en ligne",
    "troubles alimentaires",
  ],
};

const faqCategories = [
  {
    title: "Mon approche",
    icon: "💜",
    color: "var(--accent-lavande)",
    questions: [
      {
        question: "Quelle est votre approche des TCA ?",
        answer: `Mon accompagnement vise à :

• **Respecter vos sensations alimentaires**
• **Accueillir vos émotions**
• **Travailler sur vos règles alimentaires et vos traumatismes**
• **Apaiser les obsessions liées à l'alimentation**
• **Favoriser la liberté psychique**, la variété alimentaire, la vitalité et l'énergie corporelle
• **Encourager la prise en soin du corps**

Le focus ne sera jamais mis uniquement sur le poids. Vous ne trouverez pas dans mon accompagnement de comptage calorique, de menus restrictifs ou de régimes drastiques.`,
      },
      {
        question: "Quels outils utilisez-vous ?",
        answer: `• **Écoute active et inconditionnelle**
• **Thérapies cognitives et comportementales (TCC)**
• **Écriture thérapeutique** et lectures ciblées
• **Hypnose douce** et visualisations guidées
• **Exercices ludiques et créatifs**
• **Exercices de mise en situation** et jeux de rôle
• **Techniques de reparentage** et sécurité émotionnelle
• **Exercices comportementaux** autour de la gestion des crises et de la nutrition`,
      },
      {
        question: "Êtes-vous diététicienne ? Votre approche concerne-t-elle la perte de poids ?",
        answer: `**Non.**

Une diététicienne accompagne principalement sur le plan nutritionnel (équilibre alimentaire, perte ou prise de poids, suivi diététique).

Une **thérapeute spécialisée TCA**, comme moi, accompagne **au-delà** de la simple difficulté nutritionnelle : respect des sensations alimentaires, accueil des émotions, travail sur les règles alimentaires et les traumatismes, gestion du stress et des obsessions.

Les personnes qui viennent me consulter visent souvent la perte de poids comme premier objectif. Cependant, cette obsession entretient le cercle vicieux des crises alimentaires. Mon approche vous aide à vous **décentrer de la perte de poids**, en arrêtant les comportements de contrôle (comptage calorique, régimes restrictifs) et en vous **reconnectant à vous-même** sans vous maltraiter.

Les focus principaux de mon accompagnement sont :
• Liberté psychique
• Variété alimentaire
• Vitalité et énergie corporelle
• Prise en soin du corps
• Apaisement des obsessions

Vous ne trouverez pas chez moi de comptage calorique, de menus restrictifs ou de régimes drastiques.`,
      },
      {
        question: "Je n'ai jamais consulté de psy pour les TCA. Je n'arrive pas à faire le pas… est-ce vraiment pertinent ?",
        answer: `**Oui, c'est pertinent.**

Consulter pour un TCA ne signifie pas uniquement parler de nourriture :

• C'est un **accompagnement global** qui touche aux émotions, aux traumatismes, aux règles alimentaires et à la relation au corps.
• L'objectif n'est pas de vous imposer un régime, mais de vous aider à retrouver une **liberté psychique**, une variété alimentaire, une vitalité corporelle, et d'apaiser les obsessions.
• **Pousser la porte d'un thérapeute est déjà un grand pas** : vous restez libre d'avancer à votre rythme.

Je suis là pour vous accompagner avec douceur, sans jugement. 💛`,
      },
    ],
  },
  {
    title: "Modalités pratiques",
    icon: "📋",
    color: "var(--accent-sage)",
    questions: [
      {
        question: "Qu'est-ce que l'espace patient sécurisé ?",
        answer: `Accessible après le premier rendez-vous, il permet de :

• **Annuler vos rendez-vous** en ligne
• Recevoir des **rappels automatiques** par mail
• **Transmettre vos documents** thérapeutiques
• **Télécharger vos factures**`,
      },
      {
        question: "Quelles sont les modalités de paiement ?",
        answer: `• Paiement par **virement uniquement**
• Facture disponible dans l'**espace patient sécurisé**`,
      },
      {
        question: "Comment fonctionnent les groupes de parole ?",
        answer: `• Les groupes de parole ont des **modalités de paiement et d'organisation différentes** des suivis individuels
• Les participants sont informés en détail des conditions lors de leur inscription
• Actuellement, je propose des **groupes TCA** (troubles du comportement alimentaire)`,
      },
      {
        question: "Le suivi en ligne est-il accessible partout ?",
        answer: `**Oui**, il suffit d'une connexion internet stable et d'un espace calme. Vous pouvez consulter **où que vous soyez** : depuis Annecy, la Haute-Savoie, Genève, Lausanne, ou partout ailleurs.`,
      },
      {
        question: "Comment suis-je informée de mes rendez-vous ?",
        answer: `Vous recevez un **rappel automatique par mail** avant chaque séance.`,
      },
      {
        question: "Les échanges sont-ils confidentiels ?",
        answer: `**Oui.** Les séances et l'espace patient sont **strictement confidentiels** et conformes aux normes **RGPD**.`,
      },
    ],
  },
  {
    title: "Mon parcours",
    icon: "🎓",
    color: "var(--peche)",
    questions: [
      {
        question: "Quelle est votre expérience professionnelle ?",
        answer: `• **Pratique libérale depuis 2019**, dédiée aux TCA
• **17 ans d'expérience en psychiatrie** comme infirmière :
  - 6 ans en service spécialisé TCA
  - 5 ans en hôpital de jour (groupes thérapeutiques)
  - 1 an en pédopsychiatrie de liaison au CHUV Lausanne
  - Missions aux Hôpitaux Universitaires de Genève`,
      },
      {
        question: "Quelles formations avez-vous suivies ?",
        answer: `• **Diplôme d'État Infirmier** (2008)
• 2 ans de licence en **psychologie** – Paris 8
• Formations INFIPP (écriture, médiations, psychiatrie)
• **Relation d'aide**, supervision régulière, auto-hypnose
• **Formation à la haute sensibilité / HPE** de David Lefrançois
• Formations complémentaires : incertitude, accompagnement thérapeutique, résilience, image de soi, auto-sabotage, intelligence émotionnelle…`,
      },
      {
        question: "Êtes-vous engagée dans des associations ou suivie en supervision ?",
        answer: `• Membre de l'association **AUTREMENT** (Anorexie / Boulimie)
• **Thérapie personnelle** suivie plusieurs années
• **Supervision régulière** pour enrichir mes pratiques`,
      },
      {
        question: "Êtes-vous psychologue ?",
        answer: `**Non**, je ne suis pas psychologue. Mon expertise repose sur mes **17 années de pratique infirmière en psychiatrie** et mon expérience spécifique dans les TCA.

Si nécessaire, je peux vous orienter vers un professionnel adapté (psychologue, psychiatre, etc.).`,
      },
    ],
  },
  {
    title: "Modalités de remboursement",
    icon: "💳",
    color: "var(--rose-accent)",
    questions: [
      {
        question: "Comment fonctionne le règlement des consultations individuelles ?",
        answer: `• Les consultations doivent être **réglées au minimum 24h à l'avance**
• Sans règlement au préalable, la séance n'a pas lieu afin de garantir mon organisation`,
      },
      {
        question: "Quelles sont les conditions d'annulation ou de report ?",
        answer: `• Toute séance annulée ou décalée **moins de 24h à l'avance** entraîne une indemnité de **40€**, quelle que soit la formule choisie
• Cette règle **ne s'applique pas à la première séance**
• En cas de problème personnel ou de santé important, la règle reste en vigueur, mais je me réserve le droit d'appliquer ou non l'indemnité selon la situation`,
      },
      {
        question: "Comment sont gérés les retards ?",
        answer: `• En cas de **retard de la participante**, la séance se termine à l'heure prévue initialement
• Si le retard est **de mon fait**, la séance est prolongée afin de garantir la durée prévue`,
      },
      {
        question: "Quelles sont les conditions pour les groupes ?",
        answer: `• L'inscription au cycle est un **engagement ferme** : aucun remboursement n'est possible
• Seule exception : en cas de **problème de santé grave** ou de **changement majeur de planning professionnel**, sur présentation d'un justificatif médical ou professionnel`,
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-44 pb-16 bg-gradient-hero overflow-hidden">
        <div className="circle-decoration top-10 -right-20 opacity-30" />
        <div className="circle-decoration bottom-0 -left-20 opacity-20" style={{ background: "var(--accent-sage)" }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div
            className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
          >
            Questions fréquentes
          </div>
          
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Foire aux{" "}
            <span style={{ color: "var(--brun-doux)" }}>Questions</span>
          </h1>
          
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
            Retrouvez ici les réponses aux questions les plus fréquentes sur mon accompagnement, 
            mes méthodes et les modalités pratiques.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b" style={{ borderColor: "var(--rose-pale)" }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {faqCategories.map((cat) => (
              <a
                key={cat.title}
                href={`#${cat.title.toLowerCase().replace(/\s/g, "-")}`}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all hover:scale-105"
                style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
              >
                {cat.icon} {cat.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-4xl mx-auto px-6">
          {faqCategories.map((category, catIndex) => (
            <div
              key={category.title}
              id={category.title.toLowerCase().replace(/\s/g, "-")}
              className="mb-16 scroll-mt-32"
            >
              <div className="mb-8">
                <h2
                  className="text-2xl md:text-3xl font-medium"
                  style={{ fontFamily: "var(--font-playfair)", color: category.color }}
                >
                  {category.title}
                </h2>
              </div>
              
              <FAQAccordion questions={category.questions} categoryIndex={catIndex} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Une question sans réponse ?
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
            N'hésitez pas à me contacter directement. Je serai ravie de répondre à toutes vos interrogations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Me contacter
            </Link>
            <Link href="/questionnaire" className="btn-secondary">
              Faire le quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

