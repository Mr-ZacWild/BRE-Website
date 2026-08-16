import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";
import { PRIVACY_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Buen Rollo Escapes collects and uses your information.",
  robots: { index: false },
};

export default function PrivacyPage() {
  return <LegalView title="Privacy Policy" sections={PRIVACY_SECTIONS} />;
}
