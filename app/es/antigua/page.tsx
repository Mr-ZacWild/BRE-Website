import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { es } from "@/lib/i18n/dictionaries/es";

export const metadata: Metadata = {
  title: "Alquiler en Antigua Guatemala | Buen Rollo Escapes",
  description: "Un loft y una casa en el centro de la Antigua Guatemala colonial.",
};

export default function AntiguaPageEs() {
  return <LocationView location="antigua" lang="es" dict={es} />;
}
