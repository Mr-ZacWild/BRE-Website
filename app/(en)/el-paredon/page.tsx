import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { en } from "@/lib/i18n/dictionaries/en";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "El Paredon Beach Camping",
  description: "Off-grid beach camping in El Paredon, 250m from the surf.",
  alternates: localeAlternates("/el-paredon"),
};

export default function ElParedonPage() {
  return <LocationView location="el-paredon" lang="en" dict={en} />;
}
