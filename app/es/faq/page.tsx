import type { Metadata } from "next";
import { FaqView } from "@/components/faq-view";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes",
  description:
    "Respuestas sobre reservar directo, check-in, cancelaciones y pagos con Buen Rollo Escapes.",
  alternates: localeAlternates("/faq", "es"),
};

export default function FaqPageEs() {
  return <FaqView />;
}
