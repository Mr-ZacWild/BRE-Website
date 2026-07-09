import { Mail, MessageCircle } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { getWhatsAppUrl } from "@/lib/whatsapp";

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
          <MessageCircle className="text-coral" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-ink">WhatsApp (EN)</p>
            <p className="text-xs text-ink/60">+502 3922 9168</p>
          </div>
        </a>
        <a
          href={getWhatsAppUrl("es")}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 rounded-lg border border-quetzal/15 bg-white p-4"
        >
          <MessageCircle className="text-coral" aria-hidden="true" />
          <div>
            <p className="text-sm font-medium text-ink">WhatsApp (ES)</p>
            <p className="text-xs text-ink/60">+502 5998 9468</p>
          </div>
        </a>
      </div>

      <a
        href="mailto:hello@buenrolloescapes.com"
        className="mt-4 flex items-center gap-3 rounded-lg border border-quetzal/15 bg-white p-4"
      >
        <Mail className="text-quetzal" aria-hidden="true" />
        <span className="text-sm text-ink">hello@buenrolloescapes.com</span>
      </a>
      <p className="mt-2 text-xs text-ink/40">
        TODO: confirm this inbox is live on Google Workspace before launch -
        a gmail.com address undermines the rest of the site.
      </p>
    </div>
  );
}
