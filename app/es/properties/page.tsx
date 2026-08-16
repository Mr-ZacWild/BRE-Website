import type { Metadata } from "next";
import { PropertiesView } from "@/components/properties-view";
import { es } from "@/lib/i18n/dictionaries/es";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Todas las Propiedades - Alquileres Boutique",
  description:
    "Todos los apartamentos, lofts y casas que gestionamos directo en Ciudad de Guatemala y Antigua Guatemala, mas camping off-grid en El Paredon.",
  alternates: localeAlternates("/properties", "es"),
};

export default function PropertiesPageEs() {
  return <PropertiesView lang="es" dict={es} />;
}
