import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";
import { TERMS_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terminos y Condiciones",
  robots: { index: false },
};

// Content is still English pending a real legal-Spanish translation pass.
export default function TermsPageEs() {
  return <LegalView title="Terminos y Condiciones" sections={TERMS_SECTIONS} />;
}
