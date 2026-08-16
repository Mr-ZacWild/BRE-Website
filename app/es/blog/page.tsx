import type { Metadata } from "next";
import { BlogListView } from "@/components/blog-list-view";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guias y Consejos de Viaje",
  description:
    "Guias de Ciudad de Guatemala, Antigua, El Paredon, Lago de Atitlan y Tikal - de quienes viven y reciben huespedes aqui.",
  alternates: localeAlternates("/blog", "es"),
};

export default function BlogPageEs() {
  return <BlogListView lang="es" />;
}
