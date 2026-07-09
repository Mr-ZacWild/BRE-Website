import type { Metadata } from "next";
import { BlogListView } from "@/components/blog-list-view";

export const metadata: Metadata = {
  title: "Guides & Travel Tips",
  description:
    "Guides to Guatemala City, Antigua, El Paredon, Lake Atitlan and Tikal - from the people who live and host here.",
};

export default function BlogPage() {
  return <BlogListView lang="en" />;
}
