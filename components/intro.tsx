import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Intro({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const prefix = lang === "en" ? "" : "/es";

  return (
    <section className="bg-quetzal px-5 pb-16 pt-14">
      <div className="mx-auto max-w-6xl">
        {/* The site had no <h1> anywhere - SEO Site Checkup flagged this
            correctly, and it was also dragging down the "common keywords
            in headings" check since there was no heading for the title
            tag's keywords to appear in. This h1 carries both: the real
            brand tagline as the visual moment, plus a genuine, visible
            (not hidden/cloaked) line naming what the business actually
            is - which also just reads better for a first-time visitor
            who hits the tagline with zero context. */}
        <h1 className="max-w-2xl">
          <span
            className="block text-4xl italic leading-[1.1] text-crema sm:text-6xl"
            style={{ fontFamily: "var(--font-accent)" }}
          >
            {lang === "es" ? "El buen rollo viaja bien." : "Good vibes travel well."}
          </span>
          <span className="mt-3 block font-heading text-lg font-medium text-crema/90 sm:text-xl">
            {lang === "es"
              ? "Apartamentos boutique en Ciudad de Guatemala y Antigua Guatemala"
              : "Boutique apartments in Guatemala City & Antigua Guatemala"}
          </span>
        </h1>
        <p className="mt-5 max-w-md text-base text-crema/85">
          {lang === "es"
            ? "Alojamientos boutique y estadias off-grid en Ciudad de Guatemala, Antigua Guatemala y El Paredon. Reserva directo, conoce a los anfitriones."
            : "Boutique apartments and off-grid stays in Guatemala City, Antigua Guatemala and El Paredon. Book direct, meet the hosts."}
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
