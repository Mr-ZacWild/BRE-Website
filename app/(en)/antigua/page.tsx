import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { en } from "@/lib/i18n/dictionaries/en";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Antigua Guatemala Vacation Rentals - Boutique Loft & House",
  description:
    "Book a boutique loft or 3-bedroom house steps from Parque Central in colonial Antigua Guatemala. Volcano views, real local hosts, book direct and skip the Airbnb fee.",
  alternates: localeAlternates("/antigua"),
};

export default function AntiguaPage() {
  return <LocationView location="antigua" lang="en" dict={en} />;
}
