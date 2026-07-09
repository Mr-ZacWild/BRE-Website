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
   * Real Guesty listing _id, pulled from the Open API on 2026-07-09 and
   * confirmed by Zac. `undefined` means this unit isn't in Guesty yet -
   * the booking CTA falls back to WhatsApp-only in that case (see
   * lib/guesty.ts).
   */
  guestyListingId?: string;
  /** Paths under /public/images/properties - real photos, roughly matched. */
  photos?: string[];
}

export const LOCATIONS: Record<
  LocationSlug,
  { name: string; blurb: string; heroPhoto?: string }
> = {
  "guatemala-city": {
    name: "Guatemala City",
    blurb: "Zona 11 apartments in Parque San Jorge and Parque 14, with pool, gym and 24/7 security.",
    heroPhoto: "/images/properties/lounge-room-zona-11-alt.jpg",
  },
  antigua: {
    name: "Antigua Guatemala",
    blurb: "A loft and a house in the heart of colonial Antigua.",
    heroPhoto: "/images/properties/antigua.png",
  },
  "el-paredon": {
    name: "El Paredon",
    blurb: "Off-grid beach camping, 250m from the surf.",
  },
};

const ZONA_11_PHOTOS = [
  "/images/properties/main-bedroom-zona-11.jpg",
  "/images/properties/kitchen-zona-11.jpg",
  "/images/properties/lounge-room-zona-11.jpg",
];

export const PROPERTIES: Property[] = [
  {
    slug: "zona-11-luxury-king-pool-gym",
    name: "Luxury King Bed | Pool & Gym",
    location: "guatemala-city",
    neighborhood: "Zona 11, Parque San Jorge",
    sleeps: 2,
    bedrooms: 1,
    highlights: ["Pool access", "Gym access", "Co-working space", "24/7 security"],
    amenities: ["Pool", "Gym", "Co-working lounge", "24/7 security", "Elevator", "Wifi"],
    guestyListingId: "68817a0e13ac2b001f24a3f6", // PSJ | #317
    photos: ZONA_11_PHOTOS,
  },
  {
    slug: "zona-11-high-level-volcano-view-king",
    name: "High-Level Volcano View King",
    location: "guatemala-city",
    neighborhood: "Zona 11, Parque San Jorge",
    sleeps: 2,
    bedrooms: 1,
    highlights: ["High floor", "Volcano view", "Pool access", "Gym access"],
    amenities: ["Pool", "Gym", "Co-working lounge", "24/7 security", "Elevator", "Wifi"],
    guestyListingId: "6881799f01272a0010ea99a8", // PSJ | #1819
    photos: ZONA_11_PHOTOS,
  },
  {
    slug: "zona-11-skyline-volcano-view",
    name: "Skyline Volcano View",
    location: "guatemala-city",
    neighborhood: "Zona 11, Parque San Jorge",
    sleeps: 2,
    bedrooms: 1,
    highlights: ["Volcano view", "Skyline view", "Pool access", "Gym access"],
    amenities: ["Pool", "Gym", "Co-working lounge", "24/7 security", "Elevator", "Wifi"],
    guestyListingId: "68817b105d163d0021cd3ef3", // PSJ | #1820
    photos: ZONA_11_PHOTOS,
  },
  {
    slug: "zona-11-volcano-and-pool-view",
    name: "Volcano & Pool View King",
    location: "guatemala-city",
    neighborhood: "Zona 11, Parque San Jorge",
    sleeps: 2,
    bedrooms: 1,
    highlights: ["Volcano view", "Pool view", "Pool access", "Gym access"],
    amenities: ["Pool", "Gym", "Co-working lounge", "24/7 security", "Elevator", "Wifi"],
    guestyListingId: "688179fe71e6080017d1bb6a", // PSJ | #1919
    photos: ZONA_11_PHOTOS,
  },
  {
    slug: "zona-11-high-level-city-view",
    name: "High-Level City View",
    location: "guatemala-city",
    neighborhood: "Zona 11, Parque San Jorge",
    sleeps: 2,
    bedrooms: 1,
    highlights: ["High floor", "City view", "Pool access", "Gym access"],
    amenities: ["Pool", "Gym", "Co-working lounge", "24/7 security", "Elevator", "Wifi"],
    guestyListingId: "68817975f821b0002245a032", // PSJ | #1918
    photos: ZONA_11_PHOTOS,
  },
  {
    slug: "zona-11-a1503-three-bedroom",
    name: "A1503 Three-Bedroom Apartment",
    location: "guatemala-city",
    neighborhood: "Zona 11, Parque 14 (A1503)",
    sleeps: 6,
    bedrooms: 3,
    highlights: ["Largest unit", "High floor", "Airport & city views"],
    amenities: ["Elevator", "24/7 security", "Wifi", "Full kitchen"],
    guestyListingId: "68b3b8f1d4211c00120cd5cc", // Parque 14 - 1503
    photos: ZONA_11_PHOTOS,
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
    guestyListingId: "6881797de27463001384a290", // Antigua Loft
    photos: ["/images/properties/antigua-loft-room.avif"],
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
    guestyListingId: "688179a755d65a0011e18bc5", // Antigua Entire Casa
    photos: [
      "/images/properties/antigua-casa-bedroom.png",
      "/images/properties/antigua-kitchen.png",
    ],
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
    // Not in Guesty at all - booking CTA is WhatsApp-only for this one.
    guestyListingId: undefined,
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((property) => property.slug === slug);
}

export function getPropertiesByLocation(location: LocationSlug): Property[] {
  return PROPERTIES.filter((property) => property.location === location);
}
