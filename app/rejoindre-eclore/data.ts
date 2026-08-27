// Formulaire de candidature Google Form (la prise de rendez-vous Koalendar y est intégrée)
export const CANDIDATURE_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScftuuF2pQdXa_HkjFsPDJx9lXzxU84hN6xgo_8jOSBubbCJQ/viewform?usp=header";

export const AVIS_GOOGLE_URL = "https://share.google/ZCoLwYu54tInjXVWv";

// Contact WhatsApp (même numéro que le site TCA), avec un message pré-rempli ÉCLORE
export const WHATSAPP_URL = `https://wa.me/33767317266?text=${encodeURIComponent(
  "Bonjour Laura, j'ai une question au sujet de l'expérience ÉCLORE."
)}`;

// Pages d'inscription Teachizy
export const INSCRIPTION_ESSENTIEL_URL =
  "https://eclore.teachizy.fr/formations/lexperience-eclore";
export const INSCRIPTION_PREMIUM_URL =
  "https://eclore.teachizy.fr/formations/lexperience-eclore-copie";

// Ces avis concernent l'accompagnement thérapeutique de Laura, pas ÉCLORE
// (projet récent). Le cadre de la section le précise explicitement.
export const temoignages = [
  {
    prenom: "Thaïs M.",
    meta: "Local Guide · 233 avis",
    date: "Août 2026",
    texte:
      "J'ai suivi des séances avec Laura Baud de février à juillet 2026, et j'ai vu de vrais changements (positifs !) dans mes habitudes alimentaires. Je suis bien plus sereine et plus à l'écoute de mes sensations désormais. Je la recommande grandement !",
  },
  {
    prenom: "Léa",
    meta: "8 avis",
    date: "Mai 2025",
    texte:
      "Dès ma première séance avec Laura, je me suis sentie vraiment écoutée, comprise et soutenue. Laura est douce, bienveillante, à l'écoute, et m'aide à avancer pas à pas, à mon rythme, sans jugement. Chaque séance m'apporte un vrai apaisement et des clés concrètes pour avancer. Une vraie rencontre humaine et professionnelle.",
  },
  {
    prenom: "Mélodie",
    meta: "Avis Google",
    date: "Octobre 2025",
    texte:
      "Dès le début, je me suis sentie écoutée et comprise dans mes difficultés, cela a été un réel soulagement. Laura est une professionnelle très attentive et apaisante. Elle m'a donné de nombreux outils concrets et des pistes de réflexion qui m'ont permis de modifier mon quotidien de manière durable. Je recommande son accompagnement sans hésiter.",
  },
];

export const situations = [
  {
    titre: "Vous vous êtes mise de côté, longtemps",
    texte:
      "Vous êtes celle qui gère, qui écoute, qui s'adapte. Vous répondez présente pour tout le monde… et vous ne savez plus très bien ce dont vous, vous auriez besoin. Vos limites sont devenues floues à force d'être repoussées.",
  },
  {
    titre: "Vous ressentez beaucoup, sans savoir le nommer",
    texte:
      "Trop de pensées, trop d'émotions, trop de doutes. Sur le papier, tout va. À l'intérieur, c'est confus, dense, parfois lourd — et les mots manquent pour le dire. Ou bien vous ne ressentez plus rien. Non pas parce que vous êtes vide, mais parce que sentir trop fort vous effraie. Alors vous vous coupez, vous vous détachez, vous vous protégez. C'est une façon de tenir debout quand l'intensité devient menaçante. Deux manières différentes de vivre la même chose : un monde intérieur qui déborde.",
  },
  {
    titre: "Vous voulez vous retrouver, sans savoir par où commencer",
    texte:
      "Vous sentez ce besoin de ralentir, de faire de la place, de revenir à vous. Mais entre le quotidien, la fatigue et le manque de cadre, l'élan retombe avant d'avoir commencé.",
  },
];

export const dejaEssaye = [
  {
    titre: "Des lectures inspirantes, refermées trop vite",
    texte:
      "Des livres qui font du bien sur le moment, puis le quotidien reprend le dessus. Sans cadre ni mise en pratique, l'élan se dissipe.",
  },
  {
    titre: "Faire comme si ce n'était pas grave",
    texte:
      "Vous avez tenté d'étouffer ce que vous ressentiez, en vous disant que « ce n'est pas si grave ». Vous avez continué, tenu bon, fait semblant que tout allait bien… même quand ça tirait à l'intérieur.",
  },
  {
    titre: "Des changements tentés en solitaire",
    texte:
      "Avec beaucoup de volonté, et souvent beaucoup de pression envers vous-même. Puis le sentiment de revenir aux mêmes schémas.",
  },
];

// Les 3 piliers mis en avant dans « Imaginez dans 3 mois »
export const piliers = [
  {
    num: "1",
    titre: "Vous écouter",
    texte:
      "Comprendre vos émotions, reconnaître vos besoins, écouter votre intuition et poser vos limites.",
  },
  {
    num: "2",
    titre: "Vous choisir",
    texte:
      "Faire confiance à vos ressentis, dépasser vos freins et oser prendre votre place.",
  },
  {
    num: "3",
    titre: "Éclore",
    texte:
      "Libérer votre créativité, affirmer qui vous êtes et faire des choix qui vous ressemblent.",
  },
];

export const imaginez = [
  {
    titre: "Mettre des mots sur ce que vous vivez",
    texte:
      "Reconnaître une émotion quand elle arrive, savoir la nommer, et ne plus la traverser en silence.",
  },
  {
    titre: "Reconnaître vos besoins et vos limites",
    texte:
      "Identifier ce qui est important pour vous, et vous autoriser à en tenir compte dans votre quotidien.",
  },
  {
    titre: "Vous sentir plus proche de vous-même",
    texte:
      "Retrouver un lien plus doux avec qui vous êtes, sans avoir à jouer un rôle ni à vous justifier.",
  },
];

export const pourVous = [
  "Vous ressentez un besoin sincère de revenir à vous et de mieux comprendre votre fonctionnement intérieur",
  "Vous êtes prête à vous impliquer activement, y compris quand l'introspection devient inconfortable",
  "Vous avez envie d'explorer autrement : par l'écriture, la créativité et le ressenti",
  "Vous souhaitez un espace d'échange et de soutien pour avancer entourée",
];

export const pasPourVous = [
  "Vous cherchez une solution rapide, sans implication personnelle de votre part",
  "Vous attendez un programme de guérison ou un substitut à un suivi médical ou psychologique",
  "Vous n'avez pas, en ce moment, le temps ou l'énergie à consacrer aux propositions du parcours",
  "Vous préférez une approche strictement théorique, sans exploration créative ni introspection",
];

export const faq = [
  {
    q: "ÉCLORE remplace-t-il une thérapie ou un suivi médical ?",
    r: "Non. ÉCLORE est une expérience de développement personnel : ce n'est ni un soin, ni un programme de guérison, et cela ne remplace pas un suivi médical ou psychologique. Si vous êtes déjà accompagnée, ÉCLORE peut venir en complément — nous en parlerons lors de l'échange découverte.",
  },
  {
    q: "Quelle est la différence entre Essentiel et Premium ?",
    r: "Les deux formules donnent accès au parcours complet et à la communauté privée pendant 3 mois. La formule Premium y ajoute 5 séances individuelles d'accompagnement, pour approfondir votre cheminement de manière personnalisée.",
  },
  {
    q: "Combien de temps ai-je accès aux ressources ?",
    r: "Pendant 3 mois, à compter de votre entrée dans l'expérience. Vous avancez à votre rythme et dans l'ordre qui vous convient.",
  },
  {
    q: "Combien de temps dois-je y consacrer ?",
    r: "Aucun rythme n'est imposé. Prévoyez simplement un temps régulier pour réaliser les propositions : c'est la régularité, bien plus que la durée, qui fait la différence.",
  },
  {
    q: "Je n'ai aucun talent pour l'écriture ou le dessin, est-ce un problème ?",
    r: "Aucunement. L'écriture et la créativité sont ici des moyens d'expression et d'exploration, jamais une recherche de performance. Il n'y a rien à réussir.",
  },
  {
    q: "L'oracle, est-ce de la voyance ?",
    r: "Non. L'oracle — ou un simple jeu de cartes — est utilisé comme support symbolique et intuitif : un point de départ pour questionner votre ressenti et ouvrir de nouvelles pistes de réflexion. Il ne s'agit pas d'un outil de prédiction.",
  },
  {
    q: "Comment se déroulent les 5 séances individuelles ?",
    r: "Ce sont cinq rendez-vous individuels, à utiliser pendant les 3 mois de l'accompagnement. Chaque séance est un espace d'écoute, d'exploration et de réflexion, adapté à votre histoire et à vos besoins du moment.",
  },
  {
    q: "Pourquoi une première rencontre avant la formule Premium ?",
    r: "Pour préserver la qualité de l'accompagnement. Le questionnaire, puis l'échange de 30 minutes, nous permettent de vérifier ensemble si ÉCLORE Premium correspond réellement à vos besoins et à votre démarche.",
  },
  {
    q: "Et si je ne suis pas sûre que ce soit pour moi ?",
    r: "C'est précisément le rôle de l'échange découverte : 30 minutes pour faire connaissance, poser toutes vos questions et décider ensemble, sans engagement.",
  },
];

export const lettres = [
  {
    lettre: "E",
    titre: "Exprimer ses émotions",
    texte:
      "Apprendre à mettre des mots sur ce qui se passe en soi et accueillir ce que l'on ressent.",
  },
  {
    lettre: "C",
    titre: "Connexion à soi",
    texte: "Revenir à son monde intérieur, ses besoins, ses envies et son intuition.",
  },
  {
    lettre: "L",
    titre: "Légitimité de ses ressentis",
    texte: "Reconnaître que ses émotions et son vécu ont leur place.",
  },
  {
    lettre: "O",
    titre: "Oser être soi",
    texte: "Se libérer progressivement du regard des autres et prendre sa juste place.",
  },
  {
    lettre: "R",
    titre: "Rayonner",
    texte: "Laisser émerger sa personnalité, ses talents et ce qui nous rend unique.",
  },
  {
    lettre: "E",
    titre: "Émerger",
    texte:
      "Laisser émerger ce qui est profondément en soi : ses émotions, ses besoins, ses envies et sa véritable nature.",
  },
];

export const programme = [
  {
    titre: "Bienvenue dans l'expérience ÉCLORE",
    items: ["Bienvenue", "Matériel nécessaire"],
  },
  {
    titre: "Expérience 1 — Vivre ma sécurité intérieure",
    items: [
      "Refuge de sécurité intérieure",
      "Micro-expériences de sécurité sensorielle",
      "Exercices autour des sens",
    ],
  },
  {
    titre: "Expérience 2 — Accueillir mes émotions",
    items: [
      "Accueil des émotions : théorie et exercices",
      "Expérimenter le dessin intuitif : une autre manière de vivre ses émotions",
    ],
  },
  {
    titre: "Expérience 3 — Retrouver un lien avec mon corps",
    items: ["La relaxation de Jacobson", "Me connecter à mon corps"],
  },
  {
    titre: "Expérience 4 — Développer l'auto-compassion et changer mon regard sur moi",
    items: [
      "Introduction",
      "Prendre conscience du dialogue intérieur",
      "L'exercice des 2 chaises : le tyran et le bienveillant",
      "Activer l'auto-compassion",
      "Activer sa puissance féminine",
    ],
  },
  {
    titre: "Expérience 5 — Reconnaître mes besoins et mes valeurs",
    items: ["Reconnaître ses besoins", "Connaître mes valeurs"],
  },
  {
    titre: "Expérience 6 — Faire le point sur mes relations",
    items: ["Évaluer mes relations", "Savoir dire NON"],
  },
  {
    titre: "Expérience 7 — Faire le point sur mon équilibre de vie",
    items: ["L'exercice des œufs"],
  },
  {
    titre: "Expérience 8 — Me connecter à mon intuition",
    items: ["Utiliser les cartes pour mieux me connaître"],
  },
];

export const formules = [
  {
    id: "essentiel",
    nom: "ÉCLORE Essentiel",
    sousTitre: "Parcours en ligne & accès à la communauté privée",
    prix: 100,
    duree: "3 mois d'accès",
    accroche: "Pour explorer votre monde intérieur en autonomie, entourée.",
    inclus: [
      "L'accès aux ressources ÉCLORE pendant 3 mois",
      "Le parcours complet : 8 expériences guidées",
      "L'accès à la communauté privée pendant 3 mois",
      "Un espace pour échanger et partager vos réflexions",
    ],
    exclus: ["Séances individuelles d'accompagnement"],
    cta: "Rejoindre ÉCLORE Essentiel",
    // Accès direct : la candidature ne concerne que la formule Premium.
    lien: INSCRIPTION_ESSENTIEL_URL,
    lienSecondaire: null,
    miseEnAvant: false,
  },
  {
    id: "premium",
    nom: "ÉCLORE Premium",
    sousTitre: "Parcours en ligne, communauté privée & 5 séances individuelles",
    prix: 700,
    duree: "3 mois d'accompagnement",
    accroche:
      "Pour être guidée plus en profondeur, avec un accompagnement personnalisé.",
    inclus: [
      "L'accès à l'ensemble des ressources ÉCLORE pendant 3 mois",
      "Le parcours complet : 8 expériences guidées",
      "L'accès à la communauté privée pendant 3 mois",
      "5 séances individuelles d'accompagnement",
      "Un suivi personnalisé, adapté à votre histoire",
    ],
    exclus: [],
    cta: "Demander une première rencontre",
    // L'accès se fait après une première rencontre, via le Google Form (Koalendar intégré).
    lien: CANDIDATURE_URL,
    lienSecondaire: INSCRIPTION_PREMIUM_URL,
    miseEnAvant: true,
  },
];

export const seances = [
  "Déposer ce que vous traversez et mettre des mots sur votre vécu",
  "Approfondir certaines prises de conscience issues du parcours ÉCLORE",
  "Explorer vos émotions, vos besoins et vos fonctionnements",
  "Identifier ce qui peut vous freiner ou vous empêcher d'être pleinement vous-même",
  "Être accompagnée dans la mise en mouvement de changements concrets dans votre quotidien",
];

export const objectifs = [
  {
    titre: "Mieux vous connaître",
    texte:
      "Explorer vos émotions, vos besoins, vos valeurs et votre fonctionnement intérieur.",
  },
  {
    titre: "Créer une connexion plus profonde",
    texte:
      "Apprendre à écouter votre ressenti, votre intuition et ce qui est important pour vous.",
  },
  {
    titre: "Accueillir vos émotions",
    texte: "Les exprimer avec davantage de compréhension et de bienveillance.",
  },
  {
    titre: "Reconnaître la légitimité de votre vécu",
    texte: "Vous autoriser à prendre votre place, pleinement.",
  },
  {
    titre: "Développer votre créativité",
    texte: "Comme un moyen d'expression et d'exploration intérieure.",
  },
  {
    titre: "Renforcer votre confiance",
    texte: "En vous, en vos choix et en vos ressentis.",
  },
  {
    titre: "Identifier vos freins",
    texte:
      "Comprendre ce qui vous empêche d'être pleinement vous-même et avancer avec plus de clarté.",
  },
  {
    titre: "Laisser émerger votre authenticité",
    texte:
      "Avancer vers une vie davantage alignée avec vos besoins et vos aspirations.",
  },
];

export const publicCible = [
  "Vous ressentez le besoin de vous reconnecter à vous-même et de mieux comprendre votre fonctionnement intérieur",
  "Vous avez tendance à vous oublier, à vous suradapter ou à mettre vos besoins au second plan",
  "Vous ressentez beaucoup de choses sans toujours savoir mettre des mots dessus",
  "Vous souhaitez explorer vos émotions, vos ressentis et vos aspirations profondes",
  "Vous avez envie d'un espace d'échange, de réflexion et de soutien pour avancer",
  "Vous cherchez un espace pour ralentir, réfléchir et vous retrouver",
];

export const prerequis = [
  "Être prête à vous impliquer activement dans votre cheminement personnel",
  "Prévoir du temps pour réaliser les propositions du parcours et participer aux séances",
  "Être ouverte à l'introspection, à l'écriture, à la créativité et à l'exploration de vos émotions",
  "Accepter d'avancer à votre rythme, tout en prenant la responsabilité de votre propre processus",
];
