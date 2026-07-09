"use client";

import { useState } from "react";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { PROPERTIES, LOCATIONS, type LocationSlug } from "@/lib/properties";
import { PropertyCard } from "./property-card";

type Filter = LocationSlug | "all";

export function PropertiesView({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dictionary;
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const properties =
    filter === "all"
      ? PROPERTIES
      : PROPERTIES.filter((property) => property.location === filter);

  const tabs: { key: Filter; label: string }[] = [
    { key: "all", label: dict.nav.properties },
    { key: "guatemala-city", label: LOCATIONS["guatemala-city"].name },
    { key: "antigua", label: LOCATIONS.antigua.name },
    { key: "el-paredon", label: LOCATIONS["el-paredon"].name },
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="font-heading text-3xl text-ink">{dict.nav.properties}</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setFilter(tab.key)}
            aria-pressed={filter === tab.key}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              filter === tab.key
                ? "border-quetzal bg-quetzal text-crema"
                : "border-quetzal/20 text-quetzal"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard
            key={property.slug}
            property={property}
            lang={lang}
            dict={dict}
          />
        ))}
      </div>
    </div>
  );
}
