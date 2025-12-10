// Types pour le blog
export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  categorySlug: string;
  image?: string;
  author?: string;
  tags?: string[];
};

export type Category = {
  name: string;
  slug: string;
  description: string;
};

// Catégories du blog
export const categories: Category[] = [
  {
    name: "TCA",
    slug: "tca",
    description: "Articles sur les troubles du comportement alimentaire : hyperphagie, boulimie, anorexie.",
  },
  {
    name: "Haute Sensibilité",
    slug: "sensibilite",
    description: "Comprendre et apprivoiser sa haute sensibilité au quotidien.",
  },
  {
    name: "Bien-être",
    slug: "bien-etre",
    description: "Conseils et ressources pour prendre soin de soi.",
  },
  {
    name: "Témoignages",
    slug: "temoignages",
    description: "Parcours et témoignages inspirants.",
  },
];

// Articles du blog
// Pour ajouter un article, il suffit d'ajouter un objet dans ce tableau
// La cliente peut facilement modifier ce fichier pour ajouter ses articles
export const blogPosts: BlogPost[] = [
  {
    slug: "comprendre-hyperphagie",
    title: "Comprendre l'hyperphagie : quand manger devient une souffrance",
    excerpt:
      "L'hyperphagie boulimique est un trouble du comportement alimentaire caractérisé par des épisodes de prise alimentaire excessive. Comprendre ce trouble est le premier pas vers la guérison.",
    content: `
# Comprendre l'hyperphagie : quand manger devient une souffrance

L'hyperphagie boulimique est un trouble du comportement alimentaire souvent méconnu, pourtant il touche de nombreuses personnes. Contrairement à ce que l'on pourrait penser, ce n'est pas simplement "manger trop" – c'est une véritable souffrance psychologique.

## Qu'est-ce que l'hyperphagie ?

L'hyperphagie se caractérise par des épisodes récurrents de consommation alimentaire excessive, accompagnés d'un sentiment de perte de contrôle. Ces crises sont généralement suivies de sentiments de honte, de culpabilité et de détresse.

## Les signes à reconnaître

- Manger beaucoup plus rapidement que la normale
- Manger jusqu'à se sentir inconfortablement plein
- Manger de grandes quantités sans avoir faim
- Manger seul(e) par honte de la quantité consommée
- Se sentir dégoûté(e), déprimé(e) ou coupable après

## Vers un accompagnement adapté

La bonne nouvelle, c'est que l'hyperphagie se soigne. Un accompagnement thérapeutique adapté permet de comprendre les mécanismes sous-jacents et de retrouver un rapport apaisé avec la nourriture.

Les groupes de paroles offrent également un espace précieux pour briser l'isolement et partager avec d'autres personnes qui vivent la même chose.
    `,
    date: "15 novembre 2024",
    category: "TCA",
    categorySlug: "tca",
    image: "/blog/hyperphagie.jpg",
    tags: ["hyperphagie", "TCA", "troubles alimentaires", "accompagnement"],
  },
  {
    slug: "haute-sensibilite-force",
    title: "La haute sensibilité : une force à apprivoiser",
    excerpt:
      "Longtemps perçue comme une faiblesse, la haute sensibilité est en réalité une richesse. Découvrez comment transformer ce trait de personnalité en véritable atout.",
    content: `
# La haute sensibilité : une force à apprivoiser

Vous vous êtes toujours sentie "trop" ? Trop sensible, trop émotive, trop intense ? Bonne nouvelle : la haute sensibilité n'est pas un défaut, c'est un trait de personnalité qui concerne 20 à 30% de la population.

## Reconnaître la haute sensibilité

Les personnes hautement sensibles perçoivent le monde avec plus d'intensité. Elles captent les subtilités, ressentent profondément les émotions (les leurs et celles des autres), et peuvent être facilement submergées par les stimuli externes.

## Ce n'est pas de la fragilité

Contrairement aux idées reçues, la haute sensibilité n'est pas synonyme de fragilité. C'est une manière différente de traiter l'information, avec une profondeur et une richesse uniques.

## Transformer sa sensibilité en force

Pour faire de votre sensibilité une alliée :

- **Apprenez à vous connaître** : identifiez ce qui vous ressource et ce qui vous épuise
- **Posez vos limites** : c'est un acte d'amour envers vous-même
- **Créez des espaces de récupération** : votre système nerveux a besoin de calme
- **Entourez-vous de personnes bienveillantes** : qui comprennent et respectent votre sensibilité

## Un accompagnement pour avancer

Les groupes de paroles pour personnes hautement sensibles offrent un espace unique où vous pouvez vous sentir comprise, sans avoir à vous justifier.
    `,
    date: "8 novembre 2024",
    category: "Haute Sensibilité",
    categorySlug: "sensibilite",
    image: "/blog/sensibilite.jpg",
    tags: ["haute sensibilité", "hypersensible", "HPI", "émotions"],
  },
  {
    slug: "poser-ses-limites",
    title: "Apprendre à dire non sans culpabiliser",
    excerpt:
      "Poser ses limites est essentiel pour préserver son bien-être, pourtant c'est souvent un exercice difficile. Voici quelques clés pour y parvenir.",
    content: `
# Apprendre à dire non sans culpabiliser

"Je devrais pouvoir dire non, mais je n'y arrive pas." Cette phrase, combien de fois l'avez-vous pensée ? Poser ses limites est un apprentissage, et comme tout apprentissage, il demande de la pratique et de la bienveillance envers soi-même.

## Pourquoi est-ce si difficile ?

Dire non peut réveiller des peurs profondes : peur de décevoir, peur d'être rejetée, peur de ne plus être aimée. Ces peurs sont souvent ancrées depuis l'enfance et demandent un travail en douceur pour être dépassées.

## Les bienfaits de poser ses limites

- Préserver son énergie et éviter l'épuisement
- Se respecter et se faire respecter
- Construire des relations plus authentiques
- Gagner en estime de soi

## Quelques pistes pour commencer

1. **Commencez petit** : entraînez-vous sur des situations à faible enjeu
2. **Prenez le temps** : "Je te réponds demain" est une réponse valide
3. **Soyez claire et simple** : pas besoin de vous justifier longuement
4. **Acceptez l'inconfort** : la culpabilité diminuera avec la pratique

## Un travail en thérapie

Apprendre à poser ses limites est souvent un thème central en thérapie. C'est un chemin qui demande du temps, mais les bénéfices sont immenses.
    `,
    date: "1 novembre 2024",
    category: "Bien-être",
    categorySlug: "bien-etre",
    image: "/blog/limites.jpg",
    tags: ["limites", "bien-être", "assertivité", "développement personnel"],
  },
];

// Fonctions utilitaires pour récupérer les articles

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => {
    // Trier par date décroissante
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts
    .filter((post) => post.categorySlug === categorySlug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((cat) => cat.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

