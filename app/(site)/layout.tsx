import { Great_Vibes } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IntroLoader from "@/components/IntroLoader";

const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

// Habillage du site TCA. La landing ÉCLORE vit hors de ce groupe et n'en hérite pas.
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={greatVibes.variable}>
      <IntroLoader />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
