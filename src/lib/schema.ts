const BASE_URL = "https://www.aerahealth.de";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "Aera Health",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${BASE_URL}/logo.png`,
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
    sameAs: [],
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
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${BASE_URL}/suche?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function medicalWebPageSchema({
  name,
  description,
  url,
  datePublished,
  dateModified,
}: {
  name: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name,
    description,
    url,
    inLanguage: "de-DE",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: {
      "@type": "MedicalCondition",
      name: "Hormonelle Gesundheit",
    },
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
