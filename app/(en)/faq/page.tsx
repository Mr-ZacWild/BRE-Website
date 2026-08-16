import type { Metadata } from "next";
import { FaqView } from "@/components/faq-view";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about booking direct, check-in, cancellation and payments with Buen Rollo Escapes.",
  alternates: localeAlternates("/faq"),
};

export default function FaqPage() {
  return <FaqView />;
}
