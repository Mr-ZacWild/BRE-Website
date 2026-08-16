import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PropertyDetailView } from "@/components/property-detail-view";
import { PROPERTIES, getPropertyBySlug } from "@/lib/properties";
import { es } from "@/lib/i18n/dictionaries/es";
import { localeAlternates } from "@/lib/site";

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
  const cityName = property.location === "guatemala-city" ? "Ciudad de Guatemala" : property.location === "antigua" ? "Antigua Guatemala" : "El Paredon";
  return {
    title: `${property.name} - ${cityName}`,
    description: `${property.name} en ${property.neighborhood}, ${cityName}. Capacidad para ${property.sleeps}. Reserva directo con Buen Rollo Escapes.`,
    alternates: localeAlternates(`/properties/${slug}`, "es"),
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
