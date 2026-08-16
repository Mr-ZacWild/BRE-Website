import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { es } from "@/lib/i18n/dictionaries/es";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Camping en El Paredon",
  description: "Camping off-grid en El Paredon, a 250m de la playa, en el pueblo surfista de Guatemala.",
  alternates: localeAlternates("/el-paredon", "es"),
};

export default function ElParedonPageEs() {
  return <LocationView location="el-paredon" lang="es" dict={es} />;
}
