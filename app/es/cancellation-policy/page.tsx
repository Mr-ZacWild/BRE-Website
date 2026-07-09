import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";

export const metadata: Metadata = { title: "Politica de Cancelacion | Buen Rollo Escapes" };

export default function CancellationPolicyPageEs() {
  return (
    <LegalView
      title="Politica de Cancelacion"
      note="Cuando y como puedes cancelar o cambiar una reserva directa."
    />
  );
}
