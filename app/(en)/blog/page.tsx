import type { Metadata } from "next";
import { BlogListView } from "@/components/blog-list-view";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guides & Travel Tips",
  description:
    "Guides to Guatemala City, Antigua, El Paredon, Lake Atitlan and Tikal - from the people who live and host here.",
  alternates: localeAlternates("/blog"),
};

export default function BlogPage() {
  return <BlogListView lang="en" />;
}
