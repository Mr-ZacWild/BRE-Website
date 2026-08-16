import type { Metadata } from "next";
import { HomeView } from "@/components/home-view";
import { en } from "@/lib/i18n/dictionaries/en";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Boutique Apartments & Vacation Rentals in Antigua & Guatemala City",
  description:
    "Book direct with real hosts: boutique lofts in colonial Antigua Guatemala, apartments in Zona 11/14 Guatemala City, and off-grid camping in El Paredon. Skip the Airbnb fee.",
  alternates: localeAlternates(""),
};

export default function Home() {
  return <HomeView lang="en" dict={en} />;
}
