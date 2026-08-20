import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import IntroLoader from "@/components/IntroLoader";

// Habillage du site TCA. La landing ÉCLORE vit hors de ce groupe et n'en hérite pas.
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <IntroLoader />
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}
