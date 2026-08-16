import type { Metadata } from "next";
import { TrustView } from "@/components/trust-view";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Trust & Safety",
  description:
    "Buen Rollo Escapes is a real, registered business. Here's how to verify us independently before you book direct.",
  alternates: localeAlternates("/trust"),
};

export default function TrustPage() {
  return <TrustView lang="en" />;
}
