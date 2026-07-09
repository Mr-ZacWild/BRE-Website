import type { Metadata } from "next";
import { LocationView } from "@/components/location-view";
import { en } from "@/lib/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: "El Paredon Beach Camping",
  description: "Off-grid beach camping in El Paredon, 250m from the surf.",
};

export default function ElParedonPage() {
  return <LocationView location="el-paredon" lang="en" dict={en} />;
}
