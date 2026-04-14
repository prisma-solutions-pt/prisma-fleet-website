"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.startsWith("/admin")) return;
    if (posthog.__loaded) return;

    let analytics = false;
    if (typeof window !== "undefined") {
      const raw = localStorage.getItem("pf_consent");
      if (raw) {
        try {
          analytics = !!JSON.parse(raw).analytics;
        } catch {
          analytics = false;
        }
      }
    }

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      capture_pageview: true,
      capture_pageleave: true,
      person_profiles: "identified_only",
      persistence: "localStorage+cookie",
      opt_out_capturing_by_default: !analytics,
      loaded: (ph) => {
        if (analytics) ph.opt_in_capturing();
      },
    });
  }, [pathname]);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}
