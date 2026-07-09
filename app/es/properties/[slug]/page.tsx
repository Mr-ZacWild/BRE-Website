import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PropertyDetailView } from "@/components/property-detail-view";
import { PROPERTIES, getPropertyBySlug } from "@/lib/properties";
import { es } from "@/lib/i18n/dictionaries/es";

export function generateStaticParams() {
  return PROPERTIES.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return {};
  return {
    title: `${property.name} | Buen Rollo Escapes`,
    description: `${property.name} en ${property.neighborhood}. Reserva directo con Buen Rollo Escapes.`,
  };
}

export default async function PropertyPageEs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  return <PropertyDetailView property={property} lang="es" dict={es} />;
}
