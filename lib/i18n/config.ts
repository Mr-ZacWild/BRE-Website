export const locales = ["en", "es"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/**
 * English routes are unprefixed (/, /properties), Spanish routes live
 * under /es (/es, /es/properties). Given a pathname as seen in the
 * *other* locale's layout, this returns the equivalent path for `locale`.
 */
export function localizePath(path: string, locale: Locale): string {
  const stripped = path.replace(/^\/es(?=\/|$)/, "") || "/";
  if (locale === "en") return stripped;
  return stripped === "/" ? "/es" : `/es${stripped}`;
}
