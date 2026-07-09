import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { es } from "@/lib/i18n/dictionaries/es";

export const metadata: Metadata = {
  title: "Alquiler de Apartamentos en Ciudad de Guatemala | Buen Rollo Escapes",
  description:
    "Apartamentos boutique en Zona 11 y Zona 14, Ciudad de Guatemala. Piscina, gimnasio, coworking y seguridad 24/7.",
};

export default function GuatemalaCityPageEs() {
  return <LocationView location="guatemala-city" lang="es" dict={es} />;
}
