import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PropertyDetailView } from "@/components/property-detail-view";
import { PROPERTIES, getPropertyBySlug } from "@/lib/properties";
import { en } from "@/lib/i18n/dictionaries/en";
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
  const cityName = property.location === "guatemala-city" ? "Guatemala City" : property.location === "antigua" ? "Antigua Guatemala" : "El Paredon";
  return {
    title: `${property.name} - ${cityName}`,
    description: `${property.name} in ${property.neighborhood}, ${cityName}. Sleeps ${property.sleeps}. Book direct with Buen Rollo Escapes and skip the platform fee.`,
    alternates: localeAlternates(`/properties/${slug}`),
  };
}

export default async function PropertyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  return <PropertyDetailView property={property} lang="en" dict={en} />;
}
