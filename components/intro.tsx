import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Intro({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const prefix = lang === "en" ? "" : "/es";

  return (
    <section className="bg-quetzal px-5 pb-16 pt-14">
      <div className="mx-auto max-w-6xl">
        <p
          className="max-w-2xl text-4xl italic leading-[1.1] text-crema sm:text-6xl"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Good vibes travel well.
        </p>
        <p className="mt-5 max-w-md text-base text-crema/85">
          Boutique apartments and off-grid stays in Guatemala City, Antigua
          Guatemala and El Paredon. Book direct, meet the hosts.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={getWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-coral px-6 py-3 text-sm font-medium text-crema transition-opacity hover:opacity-90"
          >
            {dict.common.checkAvailability}
          </a>
          <Link
            href={`${prefix}/properties`}
            className="rounded-md border border-crema/60 px-6 py-3 text-sm text-crema"
          >
            {lang === "es" ? "Ver todas las propiedades" : "See all properties"}
          </Link>
        </div>
      </div>
    </section>
  );
}
