import type { Metadata } from "next";
import { TrustView } from "@/components/trust-view";
import { localeAlternates } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confianza y Seguridad",
  description:
    "Buen Rollo Escapes es un negocio real y registrado. Aqui esta como verificarnos de forma independiente antes de reservar directo.",
  alternates: localeAlternates("/trust", "es"),
};

export default function TrustPageEs() {
  return <TrustView lang="es" />;
}
