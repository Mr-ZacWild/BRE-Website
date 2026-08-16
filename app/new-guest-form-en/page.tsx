import type { Metadata } from "next";
import { EmbeddedForm } from "@/components/embedded-form";
import { TALLY_FORMS } from "@/lib/site";

export const metadata: Metadata = {
  title: "New Guest Form - Guatemala City",
  robots: { index: false }, // shared directly with booked guests, not a public page
};

export default function NewGuestFormEnPage() {
  return <EmbeddedForm src={TALLY_FORMS.guatemalaCityEn} title="New Guest Form Guatemala City" />;
}
