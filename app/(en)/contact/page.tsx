import type { Metadata } from "next";
import { ContactView } from "@/components/contact-view";
import { en } from "@/lib/i18n/dictionaries/en";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return <ContactView lang="en" dict={en} />;
}
