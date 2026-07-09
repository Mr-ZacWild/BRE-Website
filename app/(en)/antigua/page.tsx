import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { en } from "@/lib/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: "Antigua Guatemala Rentals",
  description:
    "A loft and a house in the heart of colonial Antigua Guatemala. Book direct.",
};

export default function AntiguaPage() {
  return <LocationView location="antigua" lang="en" dict={en} />;
}
