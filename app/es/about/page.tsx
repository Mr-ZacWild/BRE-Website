import type { Metadata } from "next";
import { AboutView } from "@/components/about-view";

export const metadata: Metadata = { title: "Nosotros | Buen Rollo Escapes" };

// Body copy still English pending translation - see project notes.
export default function AboutPageEs() {
  return <AboutView />;
}
