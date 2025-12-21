import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, getAllSlugs, categories } from "@/lib/blog";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author || "Thérapeute TCA Annecy"],
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  // Simple markdown to HTML conversion for basic formatting
  const formatContent = (content: string) => {
    return content
      .split("\n")
      .map((line, i) => {
        // Headers
        if (line.startsWith("# ")) {
          return (
            <h1
              key={i}
              className="text-3xl md:text-4xl font-medium mb-6 mt-8"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {line.replace("# ", "")}
            </h1>
          );
        }
        if (line.startsWith("## ")) {
          return (
            <h2
              key={i}
              className="text-2xl font-medium mb-4 mt-8"
              style={{ fontFamily: "var(--font-playfair)", color: "var(--brun-fonce)" }}
            >
              {line.replace("## ", "")}
            </h2>
          );
        }
        if (line.startsWith("### ")) {
          return (
            <h3
              key={i}
              className="text-xl font-semibold mb-3 mt-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              {line.replace("### ", "")}
            </h3>
          );
        }
        // List items
        if (line.startsWith("- ")) {
          const content = line.replace("- ", "");
          // Handle bold text
          const formattedContent = content.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
          );
          return (
            <li
              key={i}
              className="ml-6 mb-2"
              style={{ color: "var(--text-medium)" }}
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
          );
        }
        // Numbered list
        if (/^\d+\.\s/.test(line)) {
          const content = line.replace(/^\d+\.\s/, "");
          const formattedContent = content.replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
          );
          return (
            <li
              key={i}
              className="ml-6 mb-2 list-decimal"
              style={{ color: "var(--text-medium)" }}
              dangerouslySetInnerHTML={{ __html: formattedContent }}
            />
          );
        }
        // Empty lines
        if (line.trim() === "") {
          return <br key={i} />;
        }
        // Regular paragraphs
        const formattedContent = line
          .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
          .replace(/\*(.*?)\*/g, "<em>$1</em>");
        return (
          <p
            key={i}
            className="mb-4 text-lg leading-relaxed"
            style={{ color: "var(--text-medium)" }}
            dangerouslySetInnerHTML={{ __html: formattedContent }}
          />
        );
      });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 bg-gradient-hero overflow-hidden">
        <div className="circle-decoration top-10 -right-20 opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors hover:text-[var(--brun)]"
            style={{ color: "var(--text-light)" }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour au blog
          </Link>
          
          <div className="flex items-center gap-3 mb-6">
            <Link
              href={`/blog/categorie/${post.categorySlug}`}
              className="text-sm font-medium px-4 py-1 rounded-full transition-colors hover:bg-[var(--rose-medium)]"
              style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
            >
              {post.category}
            </Link>
            <span className="text-sm" style={{ color: "var(--text-light)" }}>
              {post.date}
            </span>
          </div>
          
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {post.title}
          </h1>
          
          <p className="text-xl leading-relaxed" style={{ color: "var(--text-medium)" }}>
            {post.excerpt}
          </p>
        </div>
      </section>

      {/* Image */}
      {post.image && (
        <section className="bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden -mt-8 shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Content */}
      <section className="section-padding bg-white">
        <article className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg">
            {formatContent(post.content)}
          </div>
          
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8" style={{ borderTop: "1px solid var(--rose-pale)" }}>
              <span className="text-sm font-medium mr-3" style={{ color: "var(--text-light)" }}>
                Tags :
              </span>
              <div className="inline-flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: "var(--bg-cream)", color: "var(--text-medium)" }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>
      </section>

      {/* CTA */}
      <section
        className="section-padding relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, var(--rose-pale) 0%, var(--peche) 100%)" }}
      >
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-medium mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Cet article vous parle ?
          </h2>
          <p className="text-lg mb-8" style={{ color: "var(--text-medium)" }}>
            Je suis là pour vous accompagner dans votre cheminement personnel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Prendre rendez-vous
            </Link>
            <Link href="/blog" className="btn-secondary">
              Voir tous les articles
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h3
            className="text-xl font-medium mb-6 text-center"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Explorer par catégorie
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/blog/categorie/${cat.slug}`}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all hover:bg-[var(--rose-medium)]"
                style={{ background: "var(--rose-pale)", color: "var(--brun)" }}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

