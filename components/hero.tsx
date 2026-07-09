import Link from "next/link";
import { Play } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Hero({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const prefix = lang === "en" ? "" : "/es";

  return (
    <section className="relative flex min-h-[85vh] items-end overflow-hidden bg-quetzal">
      {/*
        TODO: replace with a real muted, looping <video> (volcanoes /
        rooftop pool / El Paredon surf) once Zac supplies footage.
        Keep a static poster image as the no-JS / prefers-reduced-motion
        fallback per the brief's quality floor.
      */}
      <div className="absolute inset-0 m-3 flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-crema/25">
        <Play className="text-crema/40" size={32} aria-hidden="true" />
        <p className="max-w-xs px-4 text-center text-xs tracking-wide text-crema/40">
          Hero video placeholder — Guatemala landscapes and property footage
        </p>
      </div>
      <div className="absolute inset-0 bg-ink/45" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-32">
        <p
          className="max-w-2xl text-5xl italic leading-[1.05] text-crema sm:text-7xl"
          style={{ fontFamily: "var(--font-accent)" }}
        >
          Good vibes travel well.
        </p>
        <p className="mt-5 max-w-md text-base text-crema/85">
          Boutique apartments and off-grid stays in Guatemala City, Antigua
          Guatemala and El Paredon. Book direct, meet the hosts.
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href={`${prefix}/properties`}
            className="rounded-md bg-coral px-6 py-3 text-sm font-medium text-crema transition-opacity hover:opacity-90"
          >
            {dict.common.checkAvailability}
          </Link>
          <a
            href={getWhatsAppUrl(lang)}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-crema/60 px-6 py-3 text-sm text-crema"
          >
            {dict.common.whatsappUs}
          </a>
        </div>
      </div>
    </section>
  );
}
