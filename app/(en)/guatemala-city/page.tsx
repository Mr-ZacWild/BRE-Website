import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { en } from "@/lib/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: "Apartment Rentals in Guatemala City",
  description:
    "Boutique apartment rentals in Zona 11 and Zona 14, Guatemala City. Pool, gym, co-working and 24/7 security.",
};

export default function GuatemalaCityPage() {
  return <LocationView location="guatemala-city" lang="en" dict={en} />;
}
