import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, categories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog | Articles sur les TCA et la Haute Sensibilité",
  description:
    "Articles, conseils et ressources sur les troubles du comportement alimentaire, l'hyperphagie, la boulimie et la haute sensibilité. Comprendre, accompagner, avancer.",
  keywords: [
    "blog TCA",
    "articles hyperphagie",
    "boulimie",
    "haute sensibilité",
    "hypersensible",
    "conseils",
    "ressources",
    "bien-être",
  ],
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-44 pb-20 bg-gradient-hero overflow-hidden">
        <div className="circle-decoration top-10 -left-20 opacity-40" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Le{" "}
            <span style={{ color: "var(--brun-doux)" }}>Blog</span>
          </h1>
          
          <p className="text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-medium)" }}>
            Réflexions, conseils et ressources pour vous accompagner dans la compréhension 
            des TCA et de la haute sensibilité.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b" style={{ borderColor: "var(--rose-pale)" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/blog"
              className="px-5 py-2 rounded-full text-sm font-medium transition-all"
              style={{ background: "var(--brun-doux)", color: "white" }}
            >
              Tous les articles
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/categorie/${cat.slug}`}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all hover:bg-[var(--rose-pale)]"
                style={{ background: "var(--bg-cream)", color: "var(--brun)" }}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="section-padding bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-6">
          {posts.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📝</div>
              <h2
                className="text-2xl font-medium mb-4"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Les articles arrivent bientôt
              </h2>
              <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
                Le blog est en cours de création. Revenez très vite pour découvrir 
                les premiers articles !
              </p>
              <Link href="/contact" className="btn-primary">
                Être informée des nouveaux articles
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="card group"
                >
                  {post.image && (
                    <div className="relative aspect-[16/10] rounded-xl mb-6 overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs font-medium px-3 py-1 rounded-full"
                      style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "var(--text-light)" }}>
                      {post.date}
                    </span>
                  </div>
                  
                  <h2
                    className="text-xl font-semibold mb-3 group-hover:text-[var(--brun-doux)] transition-colors"
                    style={{ fontFamily: "var(--font-playfair)", color: "var(--text-dark)" }}
                  >
                    {post.title}
                  </h2>
                  
                  <p className="mb-4 line-clamp-3" style={{ color: "var(--text-medium)" }}>
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 text-sm font-medium" style={{ color: "var(--brun-doux)" }}>
                    <span>Lire l'article</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl md:text-4xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Restez informée
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
            Recevez les nouveaux articles et ressources directement dans votre boîte mail.
          </p>
          <Link href="/contact" className="btn-primary">
            S'inscrire à la newsletter
          </Link>
        </div>
      </section>
    </>
  );
}

