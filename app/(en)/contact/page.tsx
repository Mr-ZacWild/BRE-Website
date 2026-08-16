import type { Metadata } from "next";
import { ContactView } from "@/components/contact-view";
import { en } from "@/lib/i18n/dictionaries/en";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "WhatsApp us directly in English or Spanish to book a boutique stay in Guatemala City, Antigua Guatemala or El Paredon.",
  alternates: localeAlternates("/contact"),
};

export default function ContactPage() {
  return <ContactView lang="en" dict={en} />;
}
