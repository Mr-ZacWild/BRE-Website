import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";
import { CANCELLATION_SECTIONS } from "@/lib/legal";

export const metadata: Metadata = { title: "Cancellation Policy" };

export default function CancellationPolicyPage() {
  return <LegalView title="Cancellation Policy" sections={CANCELLATION_SECTIONS} />;
}
