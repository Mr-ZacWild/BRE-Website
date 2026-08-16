import type { Metadata } from "next";
import { ContactView } from "@/components/contact-view";
import { es } from "@/lib/i18n/dictionaries/es";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Escribenos por WhatsApp en espanol o ingles para reservar en Ciudad de Guatemala, Antigua Guatemala o El Paredon.",
  alternates: localeAlternates("/contact", "es"),
};

export default function ContactPageEs() {
  return <ContactView lang="es" dict={es} />;
}
