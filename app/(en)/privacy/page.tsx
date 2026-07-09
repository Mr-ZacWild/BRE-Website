import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";
import { PRIVACY_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return <LegalView title="Privacy Policy" sections={PRIVACY_SECTIONS} />;
}
