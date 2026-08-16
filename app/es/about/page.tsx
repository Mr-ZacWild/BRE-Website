import type { Metadata } from "next";
import { AboutView } from "@/components/about-view";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Conoce a los anfitriones de Buen Rollo Escapes - alojamientos boutique en Ciudad de Guatemala, Antigua Guatemala y El Paredon.",
  alternates: localeAlternates("/about", "es"),
};

// Body copy still English pending translation - see project notes.
export default function AboutPageEs() {
  return <AboutView />;
}
