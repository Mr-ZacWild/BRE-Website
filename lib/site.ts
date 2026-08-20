// TODO: confirm the final production domain with the owner before launch.
export const SITE_URL = "https://www.buenrolloescapes.com";

/**
 * Builds the `alternates` block for a page's Metadata so Google (and every
 * other engine) knows the EN and ES versions are the same content in two
 * languages, not duplicates. `path` is the EN-style path with no locale
 * prefix - e.g. "" for home, "/antigua", "/properties/some-slug". Pass the
 * language the CURRENT page is in so its own canonical URL is correct.
 */
export function localeAlternates(path: string, lang: "en" | "es" = "en") {
  const enUrl = `${SITE_URL}${path}`;
  const esUrl = `${SITE_URL}/es${path}`;
  return {
    canonical: lang === "es" ? esUrl : enUrl,
    languages: { en: enUrl, es: esUrl, "x-default": enUrl },
  };
}

// Analytics runs through Google Tag Manager, not a direct GA4 script -
// see lib/gtm.ts for the container ID placeholder and load logic, and
// components/cookie-consent.tsx for the consent gate in front of it.

// New Guest Forms (Tally, connected to Notion) - real URLs from the owner 2026-07-10.
// One per city/language combo - these are distinct forms, not translations
// of the same form, so each gets its own standalone route (see
// app/new-guest-form-en, -es, -antigua-en) rather than the site's usual
// /es i18n prefix pattern.
export const TALLY_FORMS = {
  guatemalaCityEn: "https://tally.so/r/zxvgj1?transparentBackground=1",
  guatemalaCityEs: "https://tally.so/r/LZNalO?transparentBackground=1",
  antiguaEn: "https://tally.so/r/ja4QVJ?transparentBackground=1",
  // TODO(the owner): add antiguaEs once that form exists in Tally.
} as const;

// Opt-in ambient music toggle (see components/music-toggle.tsx) - off by
// default, visitor has to click. Deliberately left unset: the track the owner
// sent 2026-07-10 was "Manu Chao - Me Gustas Tu," a commercially released
// song. Playing a copyrighted commercial track on a public business site
// needs a sync/performance license - do not ship this specific file
// without the owner confirming he's licensed it. Point this at a royalty-free
// track (or a licensed one) under /public/audio/ instead.
export const AMBIENT_MUSIC_URL: string | undefined = undefined;
