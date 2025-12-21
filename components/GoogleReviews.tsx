const reviews = [
  {
    name: "Mélanie C.",
    date: "Décembre 2022",
    rating: 5,
    text: "J'ai commencé mes séances avec Laura en octobre 2022. J'adore mes rdv qui m'apportent vraiment que du positif. Laura est une jeune femme très douce qui m'aide à avancer dans mon parcours en étant très à l'écoute de mon histoire, de mes habitudes et de mes besoins. Elle sait trouver les mots justes et est sans jugements aucun. Je me sens à l'aise à chacun de mes rdv. Chaque séance m'ouvre une petite porte vers le meilleur de moi.",
  },
  {
    name: "Lisa S.",
    date: "Octobre 2024",
    rating: 5,
    text: "Je recommande vivement Laura Baud ! C'est une professionnelle bienveillante, à l'écoute, et très investie dans le suivi de ses patients. Ses séances m'ont beaucoup aidée : elle propose toujours des conseils concrets, des méthodes et des pistes de réflexion qui font vraiment avancer. Grâce à son suivi, j'ai pu faire de vrais progrès dans ma relation à la nourriture et reprendre confiance petit à petit.",
  },
  {
    name: "Mélodie",
    date: "Octobre 2024",
    rating: 5,
    text: "Je suis accompagnée par Laura Baud dans le cadre d'un TCA. Dès le début, je me suis sentie écoutée et comprise dans mes difficultés, cela a été un réel soulagement. Laura est une professionnelle très attentive et apaisante. Son expertise en santé mentale et son approche globale du TCA m'ont permis de me débarrasser de problèmes récurrents.",
  },
  {
    name: "Marion A.",
    date: "Novembre 2024",
    rating: 5,
    text: "J'ai commencé ma thérapie il y a bientôt trois mois avec Laura, et en quelques semaines, mon bien-être mental a évolué positivement. Laura n'est pas uniquement une thérapeute qui vous aidera à changer votre rapport à la nourriture, elle vous accompagnera à comprendre vos émotions et ainsi, vos crises alimentaires. Un véritable travail intérieur.",
  },
  {
    name: "Lou-Anne V.",
    date: "Octobre 2024",
    rating: 5,
    text: "Laura est une thérapeute à l'écoute et très gentille. Vous pouvez vous sentir à l'aise de parler de vos troubles ou autres. Le suivi est adapté à chacun et personnalisé. Merci encore !",
  },
  {
    name: "Julie",
    date: "Octobre 2024",
    rating: 5,
    text: "Dès la première séance, j'ai été touchée par le fait que Laura sache aller à l'essentiel : plutôt que de chercher à imposer une thérapie \"type\", elle a immédiatement centré nos échanges sur ce qui était pour moi-même nécessaire. Elle prend le temps, pose les bonnes questions, écoute vraiment.",
  },
  {
    name: "Estelle",
    date: "Septembre 2024",
    rating: 5,
    text: "Je suis très satisfaite du travail avec Mme Baud. Elle est à l'écoute, bienveillante, compétente et j'ai confiance en elle. Les exercices entre deux rdv sont très concrets et individualisés. Elle donne de bons outils par exemple les audios de pleine conscience.",
  },
  {
    name: "Zeliha",
    date: "Octobre 2024",
    rating: 5,
    text: "Dès la première séance, je me suis sentie profondément écoutée et comprise. L'atmosphère instaurée est marquée par une écoute bienveillante et une réelle empathie, ce qui crée un véritable espace de confiance. Les conseils sont adaptés à ma situation et dépassent le cadre de la nourriture.",
  },
  {
    name: "Charlène",
    date: "Juin 2024",
    rating: 5,
    text: "C'est avec grand plaisir que je recommande Laura. Je peux témoigner de son grand professionnalisme, compétences et bienveillance. Laura est toujours disponible et à l'écoute, avec des outils concrets pour avancer et aller mieux. Il n'est pas toujours facile de se lancer mais Laura sait mettre à l'aise.",
  },
  {
    name: "Léa",
    date: "Mai 2024",
    rating: 5,
    text: "Dès ma première séance avec Laura, je me suis sentie vraiment écoutée, comprise et soutenue. Laura est douce, bienveillante, à l'écoute, et m'aide à avancer pas à pas, à mon rythme, sans jugement. Chaque séance m'apporte un vrai apaisement et des clés concrètes pour avancer. Une vraie rencontre humaine et professionnelle.",
  },
  {
    name: "Marie",
    date: "Juin 2024",
    rating: 5,
    text: "Un grand merci à Laura ! Grâce à son écoute bienveillante et son approche douce, j'ai pu comprendre et apaiser ma relation avec la nourriture. Chaque séance a été un vrai soutien, je me suis sentie écoutée et accompagnée en toute confiance. Je la recommande chaleureusement !",
  },
  {
    name: "Tanagra L.",
    date: "Décembre 2023",
    rating: 5,
    text: "Laura est une thérapeute extrêmement bienveillante et très compétente dans son domaine. Depuis que j'ai débuté mon suivi avec elle, je me sens écoutée, comprise et accompagnée. Laura sait trouver les mots justes, et chaque séance est un véritable échange qui m'apporte de nouvelles pistes de réflexion.",
  },
  {
    name: "Marion",
    date: "Octobre 2024",
    rating: 5,
    text: "Excellente thérapeute, très à l'écoute, qui donne de bons conseils et pas seulement concernant les troubles alimentaires. Elle m'est d'un grand soutien, je la recommande vivement !",
  },
  {
    name: "Olivia V.",
    date: "Octobre 2024",
    rating: 5,
    text: "Laura est très à l'écoute, professionnelle et bienveillante. Je la recommande vivement ! Je la remercie pour son aide et sa disponibilité !",
  },
  {
    name: "Karène D.",
    date: "Juin 2024",
    rating: 5,
    text: "Laura est une personne formidable qui m'a aidée à avancer dans le processus de l'acceptation de soi. Il y a un réel échange, elle rebondit en posant toujours des questions très pertinentes qui nous amènent à voir les choses sous un angle différent. J'ai beaucoup apprécié les exercices donnés d'une séance à l'autre.",
  },
  {
    name: "Carole G.",
    date: "Décembre 2023",
    rating: 5,
    text: "Laura a su faire preuve de bienveillance, d'écoute et de compréhension face à ma situation. Après des années de difficultés, me voilà avec des pistes réelles et concrètes pour avancer. Avec son écoute, ses conseils, ses exercices, elle nous fait avancer progressivement et en douceur. Merci !",
  },
  {
    name: "Clémence A.",
    date: "Juin 2022",
    rating: 5,
    text: "Laura est une thérapeute absolument merveilleuse, compréhensive, douce et vraiment à l'écoute de nos maux, nos besoins et nos interrogations. Sans aucun jugement, Laura fait toujours preuve de tact et de bienveillance. Je recommande cette thérapeute avant n'importe qui d'autre sans aucune hésitation.",
  },
  {
    name: "Cléophe L.",
    date: "2022",
    rating: 5,
    text: "Laura me suit depuis quelque temps maintenant, c'est une aide précieuse pour réfléchir à ses problématiques, en qui on peut avoir toute confiance. Son empathie, sa bienveillance et son soutien nous permettent d'avancer dans un cadre sécurisant. Elle propose des solutions concrètes tout en faisant un travail de fond.",
  },
];

// Dupliquer les avis pour l'effet infini
const duplicatedReviews = [...reviews, ...reviews];

export default function GoogleReviews() {
  return (
    <section className="section-padding overflow-hidden" style={{ background: "var(--bg-cream)" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-medium" style={{ color: "var(--text-medium)" }}>
              Avis Google
            </span>
          </div>
          
          <h2
            className="text-3xl md:text-4xl font-medium mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Ce qu'elles disent de{" "}
            <span style={{ color: "var(--brun-doux)" }}>leur accompagnement</span>
          </h2>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-6 h-6"
                fill="#FBBC05"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="ml-2 font-semibold" style={{ color: "var(--text-dark)" }}>
              5.0
            </span>
            <span className="text-sm" style={{ color: "var(--text-light)" }}>
              (60+ avis)
            </span>
          </div>
        </div>

        {/* Carrousel infini avec CSS */}
        <div className="overflow-hidden">
          <div className="flex gap-6 animate-scroll">
          {duplicatedReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[350px] md:w-[400px] p-6 rounded-2xl transition-all hover:shadow-lg"
              style={{ 
                background: "white",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              {/* Header de l'avis */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg"
                    style={{ background: "linear-gradient(135deg, var(--brun-doux) 0%, var(--rose-accent) 100%)" }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold" style={{ color: "var(--text-dark)" }}>
                      {review.name}
                    </h4>
                    <p className="text-xs" style={{ color: "var(--text-light)" }}>
                      {review.date}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-4 h-4"
                      fill="#FBBC05"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>

              {/* Texte de l'avis */}
              <p 
                className="text-sm leading-relaxed line-clamp-6"
                style={{ color: "var(--text-medium)" }}
              >
                "{review.text}"
              </p>

              {/* Badge Google */}
              <div className="flex items-center gap-2 mt-4 pt-4 border-t" style={{ borderColor: "var(--rose-pale)" }}>
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="text-xs" style={{ color: "var(--text-light)" }}>
                  Avis vérifié Google
                </span>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Lien vers Google */}
        <div className="text-center mt-8">
          <a
            href="https://share.google/Tk6xkL2U3V9ItJF3c"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all hover:shadow-md"
            style={{ 
              background: "white", 
              color: "var(--brun)",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Voir tous les avis sur Google
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

