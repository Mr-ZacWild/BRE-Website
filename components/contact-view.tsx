import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { WhatsAppIcon } from "./brand-icons";

export function ContactView({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14">
      <h1 className="font-heading text-3xl text-ink">{dict.nav.contact}</h1>
      <p className="mt-3 text-ink/70">
        {lang === "es"
          ? "La forma mas rapida de contactarnos es por WhatsApp."
          : "The fastest way to reach us is WhatsApp."}
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-2">
        <a
          href={getWhatsAppUrl("en")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg border border-quetzal/15 bg-white p-4"
        >
          <WhatsAppIcon className="h-6 w-6" />
          <div>
            <p className="text-sm font-medium text-ink">WhatsApp (English)</p>
            <p className="text-xs text-ink/60">+502 3922 9168</p>
          </div>
        </a>
        <a
          href={getWhatsAppUrl("es")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg border border-quetzal/15 bg-white p-4"
        >
          <WhatsAppIcon className="h-6 w-6" />
          <div>
            <p className="text-sm font-medium text-ink">WhatsApp (Spanish / Español)</p>
            <p className="text-xs text-ink/60">+502 5998 9468</p>
          </div>
        </a>
      </div>
    </div>
  );
}
