import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <LegalView
      title="Privacy Policy"
      note="How Buen Rollo Escapes collects and uses your information."
    />
  );
}
