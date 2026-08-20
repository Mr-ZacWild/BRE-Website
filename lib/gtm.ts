// TODO: Replace GTM_ID with the real Google Tag Manager container ID.
// Create one at https://tagmanager.google.com/ - then configure GA4 and
// Meta Pixel as tags INSIDE that GTM container (done in the GTM web
// interface, not in code). Using GTM as a single container instead of
// loading GA4/Meta Pixel scripts directly means future tags can be
// added/changed from the GTM dashboard with no code deploy.
export const GTM_ID = "GTM-XXXXXXX";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

// Injects the GTM container script. Only ever called after the visitor
// has accepted analytics cookies - see components/cookie-consent.tsx.
// Safe to call more than once; it no-ops if the script is already there.
export function loadGTM() {
  if (typeof window === "undefined") return;
  if (document.getElementById("gtm-script")) return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const script = document.createElement("script");
  script.id = "gtm-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(script);
}
