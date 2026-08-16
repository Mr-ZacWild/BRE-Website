import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { en } from "@/lib/i18n/dictionaries/en";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zona 11 & Zona 14 Apartment Rentals in Guatemala City",
  description:
    "Boutique apartments in Parque San Jorge (Zona 11) and Parque 14 (Zona 14), Guatemala City. Pool, gym, co-working and 24/7 security. Book direct.",
  alternates: localeAlternates("/guatemala-city"),
};

export default function GuatemalaCityPage() {
  return <LocationView location="guatemala-city" lang="en" dict={en} />;
}
