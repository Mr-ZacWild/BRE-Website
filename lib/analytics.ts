// Real GA4 property, given by Zac 2026-08-27. Loading gtag.js directly
// (not through Google Tag Manager) - a GTM container only pays off once
// there's a second or third tag to manage, and right now there's just
// this one. Wiring GA4 into a GTM container later is a straightforward
// swap in this one file if that need ever comes up.
export const GA_MEASUREMENT_ID = "G-GEEYVEM02Q";

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

// Injects the standard GA4 gtag.js snippet. Only ever called after the
// visitor has accepted analytics cookies - see components/cookie-consent.tsx.
// Safe to call more than once; it no-ops if the script is already there.
export function loadAnalytics() {
  if (typeof window === "undefined") return;
  if (document.getElementById("ga4-script")) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  }
  gtag("js", new Date());
  gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}
