import type { Metadata } from "next";
import { EmbeddedForm } from "@/components/embedded-form";
import { TALLY_FORMS } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Guest Form - Antigua Guatemala",
  robots: { index: false }, // shared directly with booked guests, not a public page
};

export default function NewGuestFormAntiguaEnPage() {
  return <EmbeddedForm src={TALLY_FORMS.antiguaEn} title="New Guest Form Antigua Guatemala" />;
}
