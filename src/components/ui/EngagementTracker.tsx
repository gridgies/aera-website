"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackScrollDepth, trackTimeOnPage } from "@/lib/analytics";

/**
 * Drop this into any long-form page to fire scroll depth and time-on-page
 * events into GA4. Fires each threshold once per page navigation.
 *
 * Scroll depths: 25%, 50%, 75%, 100%
 * Time thresholds: 30s, 60s, 120s
 */
export function EngagementTracker() {
  const pathname = usePathname();
  const firedScrollDepths = useRef(new Set<number>());
  const firedTimeThresholds = useRef(new Set<number>());
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  // Reset on navigation
  useEffect(() => {
    firedScrollDepths.current = new Set();
    firedTimeThresholds.current = new Set();
    timers.current.forEach(clearTimeout);
    timers.current = [];
  }, [pathname]);

  // Scroll depth tracking
  useEffect(() => {
    const DEPTHS = [25, 50, 75, 100] as const;

    function getScrollPercent(): number {
      const el = document.documentElement;
      const scrolled = el.scrollTop + window.innerHeight;
      const total = el.scrollHeight;
      return total <= 0 ? 0 : Math.round((scrolled / total) * 100);
    }

    function handleScroll() {
      const pct = getScrollPercent();
      for (const depth of DEPTHS) {
        if (pct >= depth && !firedScrollDepths.current.has(depth)) {
          firedScrollDepths.current.add(depth);
          trackScrollDepth(depth, pathname);
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Fire once on mount in case the page is short and already "100% scrolled"
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  // Time-on-page tracking
  useEffect(() => {
    const THRESHOLDS = [30, 60, 120] as const;

    const newTimers = THRESHOLDS.map((seconds) =>
      setTimeout(() => {
        if (!firedTimeThresholds.current.has(seconds)) {
          firedTimeThresholds.current.add(seconds);
          trackTimeOnPage(seconds, pathname);
        }
      }, seconds * 1000)
    );

    timers.current = newTimers;
    return () => newTimers.forEach(clearTimeout);
  }, [pathname]);

  return null;
}
