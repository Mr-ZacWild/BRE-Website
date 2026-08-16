import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";
import { CANCELLATION_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politica de Cancelacion",
  robots: { index: false },
};

// Content is still English pending a real legal-Spanish translation pass.
export default function CancellationPolicyPageEs() {
  return <LegalView title="Politica de Cancelacion" sections={CANCELLATION_SECTIONS} />;
}
