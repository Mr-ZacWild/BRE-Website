import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { PROPERTIES, LOCATIONS, type LocationSlug } from "@/lib/properties";
import { REVIEWS } from "@/lib/reviews";
import { Hero } from "./hero";
import { Intro } from "./intro";
import { TrustBar } from "./trust-bar";
import { WhyBookDirect } from "./why-book-direct";
import { PropertyCard } from "./property-card";
import { ReviewCard } from "./review-card";
import { CtaBanner } from "./cta-banner";
import { PropertyPhoto } from "./property-photo";

export function HomeView({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const prefix = lang === "en" ? "" : "/es";
  const featured = PROPERTIES.slice(0, 3);
  const locationEntries = Object.entries(LOCATIONS) as [
    LocationSlug,
    (typeof LOCATIONS)[LocationSlug],
  ][];

  return (
    <>
      <Hero />
      <Intro lang={lang} dict={dict} />
      <TrustBar />
      <WhyBookDirect />

      <section className="mx-auto max-w-6xl px-5 py-16">
        <p className="text-xs uppercase tracking-widest text-sage">
          Featured stays
        </p>
        <h2 className="mt-2 font-heading text-2xl text-ink sm:text-3xl">
          Handpicked places to land
        </h2>
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard
              key={property.slug}
              property={property}
              lang={lang}
              dict={dict}
            />
          ))}
        </div>
      </section>

      <section className="bg-crema pb-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-xs uppercase tracking-widest text-sage">
            Where we host
          </p>
          <h2 className="mt-2 font-heading text-2xl text-ink sm:text-3xl">
            Three places, one good-vibes standard
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {locationEntries.map(([slug, location]) => (
              <Link
                key={slug}
                href={`${prefix}/${slug}`}
                className="group overflow-hidden rounded-xl border border-quetzal/10 bg-white"
              >
                <PropertyPhoto
                  src={location.heroPhoto}
                  alt={`${location.name} photo`}
                  className="h-36 w-full"
                  tone="sage"
                />
                <div className="p-4">
                  <h3 className="font-heading text-base text-ink">
                    {location.name}
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">{location.blurb}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-quetzal py-16">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-center text-xs uppercase tracking-widest text-mint">
            What guests say
          </p>
          <h2 className="mt-2 text-center font-heading text-2xl text-crema sm:text-3xl">
            Explore our guest reviews
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {REVIEWS.map((review) => (
              <ReviewCard key={review.name} review={review} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner lang={lang} dict={dict} />
    </>
  );
}
