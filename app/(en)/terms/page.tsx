import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";
import { TERMS_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for booking direct with Buen Rollo Escapes.",
  robots: { index: false },
};

export default function TermsPage() {
  return <LegalView title="Terms & Conditions" sections={TERMS_SECTIONS} />;
}
