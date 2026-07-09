import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";

export const metadata: Metadata = { title: "Terminos | Buen Rollo Escapes" };

export default function TermsPageEs() {
  return (
    <LegalView
      title="Terminos"
      note="Terminos de servicio para reservar directo con Buen Rollo Escapes."
    />
  );
}
