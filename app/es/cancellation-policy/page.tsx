import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";
import { CANCELLATION_SECTIONS_ES } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politica de Cancelacion",
  robots: { index: false },
};

export default function CancellationPolicyPageEs() {
  return <LegalView title="Política de Cancelación" sections={CANCELLATION_SECTIONS_ES} />;
}
