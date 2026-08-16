import type { Metadata } from "next";
import { EmbeddedForm } from "@/components/embedded-form";
import { TALLY_FORMS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Formulario de Nuevo Huesped - Ciudad de Guatemala",
  robots: { index: false }, // shared directly with booked guests, not a public page
};

export default function NewGuestFormEsPage() {
  return (
    <EmbeddedForm
      src={TALLY_FORMS.guatemalaCityEs}
      title="Formulario de nuevo huesped Ciudad de Guatemala"
    />
  );
}
