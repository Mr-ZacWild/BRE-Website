import { BedDouble, Bath, Users, Check } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import type { Property } from "@/lib/properties";
import { LOCATIONS } from "@/lib/properties";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { PropertyPhoto } from "./property-photo";

export function PropertyDetailView({
  property,
  lang,
  dict,
}: {
  property: Property;
  lang: Locale;
  dict: Dictionary;
}) {
  const whatsappUrl = getWhatsAppUrl(lang, property);
  const location = LOCATIONS[property.location];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: property.name,
    description: `${property.name} in ${property.neighborhood}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: location.name,
      addressCountry: "GT",
    },
    amenityFeature: property.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
    })),
    ...(property.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: property.rating.value,
        reviewCount: property.rating.count,
        bestRating: 5,
      },
    }),
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-14 pb-28 lg:pb-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p className="text-xs uppercase tracking-wide text-quetzal/70">
        {property.neighborhood}
      </p>
      <h1 className="mt-1 font-heading text-3xl text-ink sm:text-4xl">
        {property.name}
      </h1>

      <div className="mt-6 grid h-80 grid-cols-2 gap-3 sm:h-96 sm:grid-cols-4">
        <PropertyPhoto
          src={property.photos?.[0]}
          alt={`${property.name} in ${property.neighborhood} - ${property.highlights[0] ?? "boutique vacation rental"}`}
          className="col-span-2 row-span-2 h-full rounded-xl"
        />
        {[2, 3, 4].map((n) => (
          <PropertyPhoto
            key={n}
            src={property.photos?.[n - 1]}
            alt={`${property.name} - ${property.highlights[n - 1] ?? `photo ${n}`}`}
            className="h-full rounded-xl"
            tone="sage"
          />
        ))}
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-wrap gap-6 text-sm text-ink/70">
            <span className="flex items-center gap-1.5">
              <Users size={16} aria-hidden="true" /> Sleeps {property.sleeps}
            </span>
            <span className="flex items-center gap-1.5">
              <BedDouble size={16} aria-hidden="true" />
              {property.bedrooms > 0
                ? `${property.bedrooms} bedroom${property.bedrooms > 1 ? "s" : ""}`
                : "Camping tent"}
            </span>
            <span className="flex items-center gap-1.5">
              <BedDouble size={16} aria-hidden="true" />
              {property.beds} bed{property.beds > 1 ? "s" : ""}
            </span>
            <span className="flex items-center gap-1.5">
              <Bath size={16} aria-hidden="true" />
              {property.bathrooms} bathroom{property.bathrooms > 1 ? "s" : ""}
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink/75">
            {property.description}
          </p>

          <h2 className="mt-8 font-heading text-lg text-ink">Highlights</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {property.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2 text-sm text-ink/80">
                <Check size={15} className="text-quetzal" aria-hidden="true" />
                {highlight}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-heading text-lg text-ink">Amenities</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {property.amenities.map((amenity) => (
              <li key={amenity} className="flex items-center gap-2 text-sm text-ink/80">
                <Check size={15} className="text-quetzal" aria-hidden="true" />
                {amenity}
              </li>
            ))}
          </ul>

          <h2 className="mt-8 font-heading text-lg text-ink">Location</h2>
          <p className="mt-2 max-w-xl text-sm text-ink/70">{location.blurb}</p>
          {property.mapEmbedSrc ? (
            <iframe
              src={property.mapEmbedSrc}
              title={`Map of ${property.name}`}
              className="mt-3 h-56 w-full rounded-xl border-0"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          ) : (
            <div className="mt-3 h-56 rounded-xl border border-quetzal/10 bg-mint/30 flex items-center justify-center text-xs text-ink/50">
              Map embed placeholder
            </div>
          )}

          <h2 className="mt-8 font-heading text-lg text-ink">House rules</h2>
          <p className="mt-2 max-w-xl text-sm text-ink/70">
            Standard check-in/check-out and house rules apply. Full policy
            content pending migration from the existing site.
          </p>
        </div>

        <div className="h-fit rounded-xl border border-quetzal/10 bg-white p-5">
          <p className="font-heading text-base text-ink">
            {lang === "es" ? "¿Listos para reservar?" : "Ready to book?"}
          </p>
          <p className="mt-1 text-xs text-ink/60">
            {lang === "es"
              ? "Escribenos directo por WhatsApp para fechas y precios."
              : "Message us directly on WhatsApp for dates and pricing."}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block rounded-md bg-coral py-3 text-center text-sm font-medium text-crema"
          >
            {dict.common.whatsappUs}
          </a>
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-quetzal/10 bg-white/95 py-3 pl-5 pr-24 backdrop-blur lg:hidden">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-md bg-coral py-3 text-center text-sm font-medium text-crema"
        >
          {dict.common.checkAvailability}
        </a>
      </div>
    </div>
  );
}
