import type { Metadata } from "next";
import { BlogListView } from "@/components/blog-list-view";

export const metadata: Metadata = {
  title: "Guias y Consejos de Viaje | Buen Rollo Escapes",
  description:
    "Guias de Ciudad de Guatemala, Antigua, El Paredon, Lago de Atitlan y Tikal.",
};

export default function BlogPageEs() {
  return <BlogListView lang="es" />;
}
