import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function CtaBanner({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const prefix = lang === "en" ? "" : "/es";

  return (
    <section className="bg-coral">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8">
        <p className="font-heading text-lg text-crema">
          {lang === "es" ? "¿Listos para la buena vibra?" : "Ready for good vibes?"}
        </p>
        <div className="flex gap-3">
          <Link
            href={`${prefix}/properties`}
            className="rounded-md bg-quetzal px-5 py-2.5 text-sm font-medium text-crema"
          >
            {dict.common.checkAvailability}
          </Link>
          <a
            href={getWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-crema/70 px-5 py-2.5 text-sm text-crema"
          >
            {dict.common.whatsappUs}
          </a>
        </div>
      </div>
    </section>
  );
}
