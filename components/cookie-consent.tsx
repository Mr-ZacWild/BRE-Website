"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import { loadGTM } from "@/lib/gtm";

const CONSENT_KEY = "bre-cookie-consent";

const COPY = {
  en: {
    text: "This site uses cookies to help us improve your experience.",
    accept: "Accept",
    decline: "Decline",
  },
  es: {
    text: "Este sitio usa cookies para ayudarnos a mejorar tu experiencia.",
    accept: "Aceptar",
    decline: "Rechazar",
  },
} as const;

export function CookieConsent({ lang }: { lang: Locale }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted") {
      loadGTM();
    } else if (stored !== "declined") {
      setVisible(true);
    }
  }, []);

  function accept() {
    window.localStorage.setItem(CONSENT_KEY, "accepted");
    loadGTM();
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "cookie_consent_accepted" });
    setVisible(false);
  }

  function decline() {
    window.localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  const copy = COPY[lang];

  return (
    // Sits above the WhatsApp/music floating buttons (bottom-5, z-40) on
    // mobile where this banner is wide enough to otherwise cover them.
    <div className="fixed inset-x-0 bottom-20 z-50 flex justify-center px-4 sm:bottom-5">
      <div className="flex w-full max-w-md flex-col gap-3 rounded-xl bg-quetzal px-5 py-4 text-crema shadow-lg sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm">{copy.text}</p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={decline}
            className="rounded-lg border border-crema/30 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-crema/10"
          >
            {copy.decline}
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-coral px-3 py-1.5 text-sm font-medium text-white transition-colors hover:opacity-90"
          >
            {copy.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
