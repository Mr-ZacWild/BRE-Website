import Link from "next/link";
import { Users } from "lucide-react";
import type { Property } from "@/lib/properties";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { PropertyPhoto } from "./property-photo";

export function PropertyCard({
  property,
  lang,
  dict,
}: {
  property: Property;
  lang: Locale;
  dict: Dictionary;
}) {
  const prefix = lang === "en" ? "" : "/es";

  return (
    <Link
      href={`${prefix}/properties/${property.slug}`}
      className="group block overflow-hidden rounded-xl border border-quetzal/10 bg-white transition-shadow hover:shadow-md"
    >
      <PropertyPhoto
        src={property.photos?.[0]}
        alt={`${property.name} photo`}
        className="h-44 w-full"
        tone="mint"
      />
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-sage">
          {property.neighborhood}
        </p>
        <h3 className="mt-1 font-heading text-base text-ink">{property.name}</h3>
        <p className="mt-2 flex items-center gap-1.5 text-xs text-ink/60">
          <Users size={14} aria-hidden="true" />
          Sleeps {property.sleeps}
        </p>
        <span className="mt-3 inline-block text-sm font-medium text-quetzal underline-offset-4 group-hover:underline">
          {dict.common.viewProperty}
        </span>
      </div>
    </Link>
  );
}
