import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";
import { PRIVACY_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = { title: "Privacidad | Buen Rollo Escapes" };

// Content is still English pending a real legal-Spanish translation pass.
export default function PrivacyPageEs() {
  return <LegalView title="Politica de Privacidad" sections={PRIVACY_SECTIONS} />;
}
