import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";
import { TERMS_SECTIONS_ES } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terminos y Condiciones",
  robots: { index: false },
};

export default function TermsPageEs() {
  return <LegalView title="Términos y Condiciones" sections={TERMS_SECTIONS_ES} />;
}
