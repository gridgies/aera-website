const BASE_URL = "https://www.aerahealth.de";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Aera Health",
    url: BASE_URL,
    foundingDate: "2024",
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/apple-touch-icon.png`,
      contentUrl: `${BASE_URL}/apple-touch-icon.png`,
      width: 180,
      height: 180,
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@aerahealth.de",
      contactType: "customer support",
      availableLanguage: "German",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Heidestr. 36",
      postalCode: "60316",
      addressLocality: "Frankfurt am Main",
      addressRegion: "Hessen",
      addressCountry: "DE",
    },
    areaServed: "DE",
    knowsLanguage: "de",
    description:
      "Personalisierte Unterstützung für Frauengesundheit: Hormone, Wechseljahre, Hashimoto und hormonelle Balance.",
    // sameAs: populate once social profiles are created
    // e.g. ["https://www.linkedin.com/company/aera-health", "https://www.instagram.com/aerahealth"]
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: "Aera Health",
    description:
      "Deine Plattform für Frauengesundheit: Verstehe deine Hormone, Wechseljahre und hormonelles Gleichgewicht.",
    publisher: {
      "@id": `${BASE_URL}/#organization`,
    },
    inLanguage: "de-DE",
  };
}

export function medicalWebPageSchema({
  name,
  description,
  url,
  datePublished,
  dateModified,
  condition,
}: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  condition?: { name: string; icdCode?: string };
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    description,
    url,
    inLanguage: "de-DE",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: condition
      ? {
          "@type": "MedicalCondition",
          name: condition.name,
          ...(condition.icdCode && {
            code: { "@type": "MedicalCode", code: condition.icdCode, codingSystem: "ICD-10" },
          }),
        }
      : { "@type": "Thing", name: "Hormonelle Frauengesundheit" },
    audience: {
      "@type": "PatientsAudience",
      audienceType: "Frauen mit hormonellen Beschwerden",
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
    ...(datePublished && { datePublished }),
    ...(dateModified && { dateModified }),
    lastReviewed: dateModified ?? datePublished ?? new Date().toISOString().split("T")[0],
    reviewedBy: {
      "@type": "Organization",
      name: "Aera Health Redaktion",
      url: `${BASE_URL}/ueber-uns`,
    },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", ".speakable"],
    },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  imageUrl,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  imageUrl?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "de-DE",
    author: {
      "@type": "Organization",
      name: "Aera Health Redaktion",
      url: `${BASE_URL}/ueber-uns`,
    },
    publisher: { "@id": `${BASE_URL}/#organization` },
    isPartOf: { "@id": `${BASE_URL}/#website` },
    ...(imageUrl && {
      image: {
        "@type": "ImageObject",
        url: imageUrl,
      },
    }),
  };
}

/** Inject a JSON-LD script tag (use in <head> via dangerouslySetInnerHTML) */
export function jsonLd(schema: object) {
  return {
    __html: JSON.stringify(schema),
  };
}
