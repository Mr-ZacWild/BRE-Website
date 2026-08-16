import type { Metadata } from "next";
import { PropertiesView } from "@/components/properties-view";
import { en } from "@/lib/i18n/dictionaries/en";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "All Properties - Boutique Rentals in Guatemala City & Antigua",
  description:
    "Browse every boutique apartment, loft and house we host direct in Guatemala City and Antigua Guatemala, plus off-grid camping in El Paredon.",
  alternates: localeAlternates("/properties"),
};

export default function PropertiesPage() {
  return <PropertiesView lang="en" dict={en} />;
}
