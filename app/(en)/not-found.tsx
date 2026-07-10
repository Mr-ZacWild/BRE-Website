import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found-view";
import { en } from "@/lib/i18n/dictionaries/en";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return <NotFoundView lang="en" dict={en} />;
}
