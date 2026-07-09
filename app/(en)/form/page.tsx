import type { Metadata } from "next";
import { EmbeddedForm } from "@/components/embedded-form";
import { TALLY_FORM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Form",
  robots: { index: false }, // not meant to be a headline/indexed page
};

// TODO: rename this route/label once Zac confirms what the Tally form is for.
export default function FormPage() {
  return <EmbeddedForm src={TALLY_FORM_URL} title="Buen Rollo Escapes form" />;
}
