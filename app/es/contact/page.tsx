import type { Metadata } from "next";
import { ContactView } from "@/components/contact-view";
import { es } from "@/lib/i18n/dictionaries/es";

export const metadata: Metadata = { title: "Contacto | Buen Rollo Escapes" };

export default function ContactPageEs() {
  return <ContactView lang="es" dict={es} />;
}
