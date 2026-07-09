import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { es } from "@/lib/i18n/dictionaries/es";

export const metadata: Metadata = {
  title: "Camping en El Paredon | Buen Rollo Escapes",
  description: "Camping off-grid en El Paredon, a 250m de la playa.",
};

export default function ElParedonPageEs() {
  return <LocationView location="el-paredon" lang="es" dict={es} />;
}
