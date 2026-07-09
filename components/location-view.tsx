import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { LOCATIONS, getPropertiesByLocation, type LocationSlug } from "@/lib/properties";
import { PropertyCard } from "./property-card";
import { PropertyPhoto } from "./property-photo";

export function LocationView({
  location,
  lang,
  dict,
}: {
  location: LocationSlug;
  lang: Locale;
  dict: Dictionary;
}) {
  const info = LOCATIONS[location];
  const properties = getPropertiesByLocation(location);

  return (
    <div>
      <PropertyPhoto src={info.heroPhoto} alt={`${info.name} landscape photo`} className="h-64 w-full" tone="sage" />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h1 className="font-heading text-3xl text-ink">{info.name}</h1>
        <p className="mt-3 max-w-xl text-ink/70">{info.blurb}</p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} lang={lang} dict={dict} />
          ))}
        </div>
      </div>
    </div>
  );
}
