import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";
import { PRIVACY_SECTIONS_ES } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Politica de Privacidad",
  robots: { index: false },
};

export default function PrivacyPageEs() {
  return <LegalView title="Política de Privacidad" sections={PRIVACY_SECTIONS_ES} />;
}
