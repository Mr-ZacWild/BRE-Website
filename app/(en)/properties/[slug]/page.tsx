import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PropertyDetailView } from "@/components/property-detail-view";
import { PROPERTIES, getPropertyBySlug } from "@/lib/properties";
import { en } from "@/lib/i18n/dictionaries/en";

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
    title: property.name,
    description: `${property.name} in ${property.neighborhood}. Book direct with Buen Rollo Escapes.`,
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
