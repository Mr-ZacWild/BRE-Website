import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { es } from "@/lib/i18n/dictionaries/es";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Alquiler de Apartamentos Zona 11 y Zona 14, Ciudad de Guatemala",
  description:
    "Apartamentos boutique en Parque San Jorge (Zona 11) y Parque 14 (Zona 14), Ciudad de Guatemala. Piscina, gimnasio, coworking y seguridad 24/7. Reserva directo.",
  alternates: localeAlternates("/guatemala-city", "es"),
};

export default function GuatemalaCityPageEs() {
  return <LocationView location="guatemala-city" lang="es" dict={es} />;
}
