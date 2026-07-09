import type { Metadata } from "next";
import { LegalView } from "@/components/legal-view";

export const metadata: Metadata = { title: "Cancellation Policy" };

export default function CancellationPolicyPage() {
  return (
    <LegalView
      title="Cancellation Policy"
      note="When and how you can cancel or change a direct booking."
    />
  );
}
