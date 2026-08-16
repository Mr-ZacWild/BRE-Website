import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { es } from "@/lib/i18n/dictionaries/es";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apartamentos y Alquileres Boutique en Antigua y Ciudad de Guatemala",
  description:
    "Reserva directo con anfitriones reales: lofts boutique en la Antigua Guatemala colonial, apartamentos en Zona 11/14 Ciudad de Guatemala, y camping off-grid en El Paredon.",
  alternates: localeAlternates("", "es"),
};

// Nav/footer/buttons are localized; marketing copy inside HomeView still
// renders in English pending a real Guatemalan-Spanish translation pass.
export default function HomeEs() {
  return <HomeView lang="es" dict={es} />;
}
