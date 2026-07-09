import type { Metadata } from "next";
import { PropertiesView } from "@/components/properties-view";
import { es } from "@/lib/i18n/dictionaries/es";

export const metadata: Metadata = {
  title: "Propiedades | Buen Rollo Escapes",
  description:
    "Apartamentos boutique en Ciudad de Guatemala y Antigua Guatemala, mas camping off-grid en El Paredon.",
};

export default function PropertiesPageEs() {
  return <PropertiesView lang="es" dict={es} />;
}
