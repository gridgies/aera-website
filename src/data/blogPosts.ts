export interface BlogPost {
  slug: string;
  title: string;
  edition: string;
  category: string;
  date: string;
  readingTime: number;
  excerpt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "mai-2026",
    title: "Was sich gerade in der Frauengesundheit verändert",
    edition: "Mai 2026",
    category: "Monatlicher Überblick",
    date: "2026-05-05",
    readingTime: 7,
    excerpt:
      "HRT-Revolution, Menstruationsgesundheits-Monat, Femtech-Boom und Menopause als Gehirnfrage: Was im Mai 2026 die Debatte um Frauengesundheit prägt.",
  },
];
