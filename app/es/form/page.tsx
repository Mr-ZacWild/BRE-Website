import type { Metadata } from "next";
import { EmbeddedForm } from "@/components/embedded-form";
import { TALLY_FORM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Formulario | Buen Rollo Escapes",
  robots: { index: false },
};

export default function FormPageEs() {
  return <EmbeddedForm src={TALLY_FORM_URL} title="Formulario de Buen Rollo Escapes" />;
}
