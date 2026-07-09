import type { Metadata } from "next";
import { PropertiesView } from "@/components/properties-view";
import { en } from "@/lib/i18n/dictionaries/en";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Boutique apartments in Guatemala City and Antigua Guatemala, plus off-grid camping in El Paredon.",
};

export default function PropertiesPage() {
  return <PropertiesView lang="en" dict={en} />;
}
