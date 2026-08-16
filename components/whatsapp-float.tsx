import type { Locale } from "@/lib/i18n/config";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./brand-icons";

export function WhatsAppFloat({ lang }: { lang: Locale }) {
  return (
    <a
      href={getWhatsAppUrl(lang)}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-coral p-3.5 text-crema shadow-lg transition-transform hover:scale-105"
      aria-label={lang === "es" ? "Escribinos por WhatsApp" : "Message us on WhatsApp"}
    >
      <WhatsAppIcon className="h-6 w-6" fill="#fff" />
    </a>
  );
}
