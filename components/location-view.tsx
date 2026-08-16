import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { LOCATIONS, getPropertiesByLocation, type LocationSlug } from "@/lib/properties";
import { BLOG_POSTS } from "@/lib/blog";
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
  const prefix = lang === "en" ? "" : "/es";
  const guides = BLOG_POSTS.filter((post) => post.relatedLocation === location);

  return (
    <div>
      <PropertyPhoto
        src={info.heroPhoto}
        alt={`${info.name} - boutique vacation rental exterior and neighborhood view`}
        className="h-64 w-full"
        tone="sage"
      />
      <div className="mx-auto max-w-6xl px-5 py-14">
        <h1 className="font-heading text-3xl text-ink">{info.name}</h1>
        <p className="mt-3 max-w-xl text-ink/70">{info.blurb}</p>

        {info.longDescription && (
          <div className="mt-6 max-w-2xl space-y-3 text-sm leading-relaxed text-ink/75">
            {info.longDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        )}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} lang={lang} dict={dict} />
          ))}
        </div>

        {guides.length > 0 && (
          <div className="mt-12 border-t border-quetzal/10 pt-8">
            <h2 className="font-heading text-lg text-ink">
              {lang === "es" ? `Guías de ${info.name}` : `Guides to ${info.name}`}
            </h2>
            <ul className="mt-3 space-y-2">
              {guides.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`${prefix}/blog/${post.slug}`}
                    className="text-sm font-medium text-quetzal underline-offset-4 hover:underline"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
