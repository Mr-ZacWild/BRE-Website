import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function NotFoundView({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const prefix = lang === "en" ? "" : "/es";

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-5 py-24 text-center">
      <p
        className="text-6xl italic text-quetzal"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        404
      </p>
      <h1 className="mt-4 font-heading text-2xl text-ink">
        {lang === "es" ? "Esta pagina se perdio en el camino" : "This page wandered off"}
      </h1>
      <p className="mt-3 text-ink/70">
        {lang === "es"
          ? "El enlace esta roto o la pagina ya no existe. Volvamos a buen camino."
          : "The link's broken, or the page just isn't there anymore. Let's get you back on track."}
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Link
          href={prefix || "/"}
          className="rounded-md bg-coral px-6 py-3 text-sm font-medium text-crema"
        >
          {lang === "es" ? "Ir al inicio" : "Back to home"}
        </Link>
        <a
          href={getWhatsAppUrl(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-quetzal/25 px-6 py-3 text-sm text-quetzal"
        >
          {dict.common.whatsappUs}
        </a>
      </div>
    </div>
  );
}
