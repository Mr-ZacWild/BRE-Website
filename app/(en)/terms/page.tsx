import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";
import { TERMS_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return <LegalView title="Terms & Conditions" sections={TERMS_SECTIONS} />;
}
