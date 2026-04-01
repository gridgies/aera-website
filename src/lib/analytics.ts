/**
 * GA4 analytics utilities for Aera Health
 *
 * Usage: call track*() functions from client components after user interactions.
 * All functions are no-ops if gtag is not loaded (e.g. during SSR or ad-block).
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

function gtag(...args: unknown[]) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag(...args);
  }
}

// ─── Conversions ─────────────────────────────────────────────────────────────

export function trackNewsletterSignup(source: string) {
  gtag("event", "newsletter_signup", {
    event_category: "conversion",
    event_label: source,
  });
}

export function trackWaitlistSignup(topic: string) {
  gtag("event", "waitlist_signup", {
    event_category: "conversion",
    event_label: topic,
  });
}

// ─── Quiz ────────────────────────────────────────────────────────────────────

export function trackSymptomCheckerStart() {
  gtag("event", "symptom_checker_start", {
    event_category: "engagement",
  });
}

export function trackSymptomCheckerComplete(resultCategory: string) {
  gtag("event", "symptom_checker_complete", {
    event_category: "engagement",
    event_label: resultCategory,
  });
}

export function trackQuizQuestion(questionIndex: number, answer: string) {
  gtag("event", "quiz_answer", {
    event_category: "engagement",
    question_index: questionIndex,
    answer,
  });
}

// ─── Engagement ──────────────────────────────────────────────────────────────

export function trackScrollDepth(depth: 25 | 50 | 75 | 100, pagePath: string) {
  gtag("event", "content_scroll_depth", {
    event_category: "engagement",
    event_label: `${depth}%`,
    page_path: pagePath,
  });
}

export function trackTimeOnPage(seconds: 30 | 60 | 120, pagePath: string) {
  gtag("event", "time_on_page", {
    event_category: "engagement",
    event_label: `${seconds}s`,
    page_path: pagePath,
  });
}

// ─── Form interactions ───────────────────────────────────────────────────────

export function trackFormView(formName: string, pagePath: string) {
  gtag("event", "form_view", {
    event_category: "form",
    form_name: formName,
    page_path: pagePath,
  });
}

export function trackFormStart(formName: string) {
  gtag("event", "form_start", {
    event_category: "form",
    form_name: formName,
  });
}

export function trackFormSubmit(formName: string, success: boolean) {
  gtag("event", "form_submit", {
    event_category: "form",
    form_name: formName,
    success,
  });
}

// ─── Lead magnets ────────────────────────────────────────────────────────────

export function trackLeadMagnetDownload(assetName: string) {
  gtag("event", "lead_magnet_download", {
    event_category: "conversion",
    event_label: assetName,
  });
}
