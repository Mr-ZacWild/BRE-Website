import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";

export const metadata: Metadata = { title: "Terms" };

export default function TermsPage() {
  return (
    <LegalView
      title="Terms"
      note="Terms of service for booking direct with Buen Rollo Escapes."
    />
  );
}
