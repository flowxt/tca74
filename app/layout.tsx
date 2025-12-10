import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Laura Baud | Thérapeute TCA centré sur les émotions | Annecy, Genève, Lausanne",
    template: "%s | Laura Baud - Thérapeute TCA",
  },
  description:
    "Laura Baud, thérapeute spécialisée TCA (boulimie, hyperphagie) centré sur les émotions. Affirmation de soi, gestion des limites, problématiques relationnelles. Consultations en ligne et groupes de paroles. Annecy, Genève, Lausanne.",
  keywords: [
    "Laura Baud",
    "TCA",
    "thérapeute émotions",
    "hyperphagie",
    "boulimie",
    "affirmation de soi",
    "gestion des limites",
    "besoins émotionnels",
    "problématiques relationnelles",
    "thérapie",
    "Annecy",
    "Haute-Savoie",
    "Genève",
    "Lausanne",
    "Suisse",
    "haute sensibilité",
    "hypersensible",
    "groupe de paroles",
    "accompagnement en ligne",
  ],
  authors: [{ name: "Laura Baud" }],
  creator: "Laura Baud",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.tca-annecy.fr",
    siteName: "Laura Baud - Thérapeute TCA",
    title: "Laura Baud | Thérapeute TCA centré sur les émotions",
    description:
      "Accompagnement spécialisé boulimie & hyperphagie. Le TCA est un symptôme — je travaille sur ce qui le nourrit : vos émotions.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Laura Baud - Thérapeute TCA centré sur les émotions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laura Baud | Thérapeute TCA centré sur les émotions",
    description:
      "Accompagnement spécialisé boulimie & hyperphagie. Le TCA est un symptôme — je travaille sur ce qui le nourrit : vos émotions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.tca-annecy.fr",
    languages: {
      "fr-FR": "https://www.tca-annecy.fr",
      "fr-CH": "https://www.tca-annecy.fr",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="geo.region" content="FR-74" />
        <meta name="geo.placename" content="Annecy" />
        <meta name="geo.position" content="45.899247;6.129384" />
        <meta name="ICBM" content="45.899247, 6.129384" />
      </head>
      <body
        className={`${cormorant.variable} ${playfair.variable} antialiased`}
      >
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
