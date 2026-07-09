import type { Metadata } from "next";
import { FaqView } from "@/components/faq-view";

export const metadata: Metadata = { title: "Preguntas frecuentes | Buen Rollo Escapes" };

export default function FaqPageEs() {
  return <FaqView />;
}
