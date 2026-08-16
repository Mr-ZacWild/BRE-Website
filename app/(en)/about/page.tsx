import type { Metadata } from "next";
import { AboutView } from "@/components/about-view";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the hosts behind Buen Rollo Escapes - boutique apartments and off-grid stays across Guatemala City, Antigua Guatemala and El Paredon.",
  alternates: localeAlternates("/about"),
};

export default function AboutPage() {
  return <AboutView />;
}
