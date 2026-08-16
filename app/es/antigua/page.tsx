import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { es } from "@/lib/i18n/dictionaries/es";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alquiler en Antigua Guatemala - Loft y Casa Boutique",
  description:
    "Reserva un loft boutique o una casa de 3 habitaciones a pasos del Parque Central en la Antigua Guatemala colonial. Reserva directo, sin comision de Airbnb.",
  alternates: localeAlternates("/antigua", "es"),
};

export default function AntiguaPageEs() {
  return <LocationView location="antigua" lang="es" dict={es} />;
}
