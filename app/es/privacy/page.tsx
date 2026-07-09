import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";

export const metadata: Metadata = { title: "Privacidad | Buen Rollo Escapes" };

export default function PrivacyPageEs() {
  return (
    <LegalView
      title="Politica de Privacidad"
      note="Como Buen Rollo Escapes recopila y usa tu informacion."
    />
  );
}
