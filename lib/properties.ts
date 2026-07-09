export type LocationSlug = "guatemala-city" | "antigua" | "el-paredon";

export interface Property {
  slug: string;
  name: string;
  location: LocationSlug;
  neighborhood: string;
  sleeps: number;
  bedrooms: number;
  highlights: string[];
  amenities: string[];
  /**
   * Path segment appended to the Guesty booking domain, e.g.
   * https://buenrolloescapes.guestybookings.com/properties/{guestySlug}
   * TODO: confirm real Guesty listing slugs with Zac before launch.
   */
  guestySlug: string;
}

export const LOCATIONS: Record<
  LocationSlug,
  { name: string; blurb: string }
> = {
  "guatemala-city": {
    name: "Guatemala City",
    blurb:
      "Zona 11 and Zona 14 apartments with pool, gym and 24/7 security.",
  },
  antigua: {
    name: "Antigua Guatemala",
    blurb: "A loft and a house in the heart of colonial Antigua.",
  },
  "el-paredon": {
    name: "El Paredon",
    blurb: "Off-grid beach camping, 250m from the surf.",
  },
};

export const PROPERTIES: Property[] = [
  {
    slug: "zona-11-luxury-king-pool-gym",
    name: "Luxury King Bed | Pool & Gym",
    location: "guatemala-city",
    neighborhood: "Zona 11, San Jorge building",
    sleeps: 2,
    bedrooms: 1,
    highlights: ["Pool access", "Gym access", "Co-working space", "24/7 security"],
    amenities: ["Pool", "Gym", "Co-working lounge", "24/7 security", "Elevator", "Wifi"],
    guestySlug: "zona-11-luxury-king-pool-gym",
  },
  {
    slug: "zona-11-high-level-volcano-view-king",
    name: "High-Level Volcano View King",
    location: "guatemala-city",
    neighborhood: "Zona 11, San Jorge building",
    sleeps: 2,
    bedrooms: 1,
    highlights: ["High floor", "Volcano view", "Pool access", "Gym access"],
    amenities: ["Pool", "Gym", "Co-working lounge", "24/7 security", "Elevator", "Wifi"],
    guestySlug: "zona-11-high-level-volcano-view-king",
  },
  {
    slug: "zona-11-high-level-city-view",
    name: "High-Level City View",
    location: "guatemala-city",
    neighborhood: "Zona 11, San Jorge building",
    sleeps: 2,
    bedrooms: 1,
    highlights: ["High floor", "City view", "Pool access", "Gym access"],
    amenities: ["Pool", "Gym", "Co-working lounge", "24/7 security", "Elevator", "Wifi"],
    guestySlug: "zona-11-high-level-city-view",
  },
  {
    slug: "zona-11-volcano-view",
    name: "Volcano View",
    location: "guatemala-city",
    neighborhood: "Zona 11, San Jorge building",
    sleeps: 2,
    bedrooms: 1,
    highlights: ["Volcano view", "Pool access", "Gym access"],
    amenities: ["Pool", "Gym", "Co-working lounge", "24/7 security", "Elevator", "Wifi"],
    guestySlug: "zona-11-volcano-view",
  },
  {
    slug: "zona-14-three-bedroom",
    name: "Zona 14 Three-Bedroom Apartment",
    location: "guatemala-city",
    neighborhood: "Zona 14",
    sleeps: 6,
    bedrooms: 3,
    highlights: ["Largest unit", "High floor", "Airport & city views"],
    amenities: ["Elevator", "24/7 security", "Wifi", "Full kitchen"],
    guestySlug: "zona-14-three-bedroom",
  },
  {
    slug: "antigua-central-king-loft",
    name: "Central King Loft",
    location: "antigua",
    neighborhood: "Antigua Guatemala, centro",
    sleeps: 2,
    bedrooms: 1,
    highlights: ["Volcano view", "Walk to Parque Central"],
    amenities: ["Wifi", "Kitchenette", "Rooftop access"],
    guestySlug: "antigua-central-king-loft",
  },
  {
    slug: "antigua-three-bedroom-house",
    name: "Antigua Three-Bedroom House",
    location: "antigua",
    neighborhood: "Antigua Guatemala, centro",
    sleeps: 5,
    bedrooms: 3,
    highlights: ["5 beds", "Heart of Antigua", "Full house"],
    amenities: ["Wifi", "Full kitchen", "Private entrance", "Courtyard"],
    guestySlug: "antigua-three-bedroom-house",
  },
  {
    slug: "el-paredon-off-grid-camping",
    name: "Off-Grid Beach Camping",
    location: "el-paredon",
    neighborhood: "El Paredon, 250m from the beach",
    sleeps: 2,
    bedrooms: 0,
    highlights: ["250m from the beach", "Off-grid", "Surf town"],
    amenities: ["Shared bathroom", "Hammocks", "Solar power"],
    guestySlug: "el-paredon-off-grid-camping",
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((property) => property.slug === slug);
}

export function getPropertiesByLocation(location: LocationSlug): Property[] {
  return PROPERTIES.filter((property) => property.location === location);
}
