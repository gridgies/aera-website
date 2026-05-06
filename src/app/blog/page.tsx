import type { Metadata } from "next";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blogPosts";
import { breadcrumbSchema, jsonLd } from "@/lib/schema";
import { ogUrl } from "@/lib/og";

const BASE_URL = "https://www.aerahealth.de";

export const metadata: Metadata = {
  title: "Blog – Monatliche Einblicke in die Frauengesundheit",
  description:
    "Aktuelle Forschung, Trends und Einordnungen zu Hormonen, Menopause, Femtech und hormoneller Gesundheit – jeden Monat von der Aera Health Redaktion.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Aera Health Blog – Frauengesundheit im Überblick",
    description:
      "Monatliche Einblicke: Hormone, Menopause, Femtech und was sich in der Frauengesundheit gerade verändert.",
    url: `${BASE_URL}/blog`,
    images: [{ url: ogUrl("Aera Health Blog – Frauengesundheit im Überblick", "Monatliche Einblicke: Hormone, Menopause, Femtech und was sich in der Frauengesundheit gerade verändert."), width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aera Health Blog – Frauengesundheit im Überblick",
    description: "Monatliche Einblicke: Hormone, Menopause, Femtech und was sich in der Frauengesundheit gerade verändert.",
    images: [ogUrl("Aera Health Blog – Frauengesundheit im Überblick", "Monatliche Einblicke: Hormone, Menopause, Femtech und was sich in der Frauengesundheit gerade verändert.")],
  },
};

const breadcrumbs = [
  { name: "Startseite", url: BASE_URL },
  { name: "Blog", url: `${BASE_URL}/blog` },
];

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd(breadcrumbSchema(breadcrumbs))}
      />

      <div className="max-w-4xl mx-auto px-6 pt-40 pb-32">
        <nav
          className="text-xs text-on-surface-variant mb-12 flex gap-2 flex-wrap"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-primary transition-colors">
            Startseite
          </Link>
          <span>/</span>
          <span className="text-on-surface">Blog</span>
        </nav>

        <header className="mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Newsletter · Blog
          </span>
          <h1 className="text-4xl md:text-5xl font-headline font-bold text-on-surface leading-tight mb-6">
            Frauengesundheit im Blick
          </h1>
          <p className="text-xl text-on-surface-variant font-body leading-relaxed">
            Jeden Monat fassen wir zusammen, was sich in Forschung, Medizin und öffentlicher
            Debatte rund um Frauengesundheit bewegt — kompakt, eingeordnet, auf das
            Wesentliche reduziert.
          </p>
        </header>

        {/* Newsletter signup bar */}
        <div className="bg-primary-container rounded-2xl p-6 mb-16 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div>
            <p className="font-bold text-on-primary-container mb-1">
              Direkt in dein Postfach
            </p>
            <p className="text-sm text-on-primary-container/70 font-body">
              Trag dich auf die Warteliste ein und erhalte jeden Monat unseren Newsletter.
            </p>
          </div>
          <Link
            href="/check"
            className="shrink-0 inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-bold text-sm uppercase tracking-widest hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Jetzt eintragen
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </Link>
        </div>

        {/* Post list */}
        <div className="space-y-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-surface-container-low rounded-2xl p-8 border border-outline-variant/10 hover:border-primary/30 transition-all hover:shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-xs text-on-surface-variant font-body">
                  {new Date(post.date).toLocaleDateString("de-DE", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-xs text-on-surface-variant font-body">
                  · {post.readingTime} Min. Lesezeit
                </span>
              </div>
              <h2 className="text-xl font-headline font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-sm font-semibold text-primary mb-3">{post.edition}</p>
              <p className="text-sm text-on-surface-variant font-body leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest">
                Artikel lesen
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
