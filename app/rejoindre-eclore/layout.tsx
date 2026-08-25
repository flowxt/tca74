import type { Metadata } from "next";
import { Cinzel } from "next/font/google";
import EcloreNav from "./EcloreNav";
import EcloreFooter from "./EcloreFooter";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    absolute: "L'expérience ÉCLORE | Parcours de développement personnel — Laura Baud",
  },
  description:
    "ÉCLORE : un parcours de développement personnel de 3 mois pour se reconnecter à soi, à travers l'écriture, la créativité et l'introspection. Formule Essentiel (100€) ou Premium avec 5 séances individuelles (700€).",
  keywords: [
    "ÉCLORE",
    "développement personnel",
    "reconnexion à soi",
    "parcours en ligne femmes",
    "écriture thérapeutique",
    "connaissance de soi",
    "émotions",
    "communauté privée",
    "accompagnement individuel",
    "Laura Baud",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.psy-tca-annecy.com/rejoindre-eclore",
    siteName: "L'expérience ÉCLORE",
    title: "L'expérience ÉCLORE — Un espace pour vous rencontrer autrement",
    description:
      "Un parcours de 3 mois autour des émotions, de l'écriture et de la créativité. Formule Essentiel ou Premium avec 5 séances individuelles.",
    images: [
      {
        url: "/eclore/eclore.png",
        width: 1799,
        height: 874,
        alt: "L'expérience ÉCLORE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "L'expérience ÉCLORE — Un espace pour vous rencontrer autrement",
    description:
      "Un parcours de développement personnel de 3 mois : émotions, écriture, créativité et introspection.",
    images: ["/eclore/eclore.png"],
  },
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://www.psy-tca-annecy.com/rejoindre-eclore",
  },
};

export default function EcloreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${cinzel.variable} eclore-scope`}>
      <EcloreNav />
      <main>{children}</main>
      <EcloreFooter />
    </div>
  );
}
