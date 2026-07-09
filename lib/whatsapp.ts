import type { Locale } from "./i18n/config";
import type { Property } from "./properties";

const WHATSAPP_NUMBERS: Record<Locale, string> = {
  en: "50239229168",
  es: "50259989468",
};

export function getWhatsAppUrl(locale: Locale, property?: Property): string {
  const number = WHATSAPP_NUMBERS[locale];
  const message = property
    ? locale === "es"
      ? `Hola! Me interesa ${property.name}.`
      : `Hi! I'm interested in ${property.name}.`
    : locale === "es"
      ? "Hola! Tengo una pregunta sobre Buen Rollo Escapes."
      : "Hi! I have a question about Buen Rollo Escapes.";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
