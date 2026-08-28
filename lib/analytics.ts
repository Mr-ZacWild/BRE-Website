// Real GA4 property, given by Zac 2026-08-27. Loading gtag.js directly
// (not through Google Tag Manager) - a GTM container only pays off once
// there's a second or third tag to manage, and right now there's just
// this one. Wiring GA4 into a GTM container later is a straightforward
// swap in this one file if that need ever comes up.
export const GA_MEASUREMENT_ID = "G-GEEYVEM02Q";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

function ensureGtag() {
  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== "function") {
    // Must be assigned to window.gtag (not a local closure variable) -
    // GA4's library and Google's own tooling (Tag Assistant) look for
    // this exact global to resolve their internal consent handshake.
    // An earlier version got this wrong, which alone silently killed
    // every hit even once the script was loading correctly.
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer.push(args);
    };
  }
}

// Google Consent Mode v2. Real, current, documented Google requirement -
// see https://developers.google.com/tag-platform/security/guides/consent -
// GA4 properties created recently have Consent Mode active by default,
// and gtag.js will hold every hit indefinitely if it never receives ANY
// consent signal at all, default or update. This must run on EVERY page
// load, for EVERY visitor (undecided, accepted, or declined), before
// gtag.js itself loads - it doesn't send any data on its own, it just
// tells Google's tag what the current consent state is. This was the
// second half of the bug: the first fix (window.gtag) got the tag
// initializing, but with zero consent signal ever sent, GA4 correctly
// treated consent as unresolved and never sent a hit - exactly what
// Tag Assistant's "Consent Initialisation" step followed by "No hits
// were sent by this tag" was reporting.
export function setDefaultConsent() {
  if (typeof window === "undefined") return;
  ensureGtag();
  window.gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
  });
}

// Call once the visitor has accepted analytics cookies (or on a repeat
// visit where they already accepted). Updates consent to granted, then
// loads gtag.js and fires the standard config call. Safe to call more
// than once; it no-ops if the script is already there.
export function loadAnalytics() {
  if (typeof window === "undefined") return;
  ensureGtag();

  window.gtag("consent", "update", {
    analytics_storage: "granted",
  });

  if (document.getElementById("ga4-script")) return;

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
}
