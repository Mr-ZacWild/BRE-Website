import type { Metadata } from "next";
import { NotFoundView } from "@/components/not-found-view";
import { es } from "@/lib/i18n/dictionaries/es";

export const metadata: Metadata = { title: "Pagina no encontrada" };

export default function NotFoundEs() {
  return <NotFoundView lang="es" dict={es} />;
}
