export type LocationSlug = "guatemala-city" | "antigua" | "el-paredon";

export interface Property {
  slug: string;
  name: string;
  location: LocationSlug;
  neighborhood: string;
  sleeps: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  /** Real listing description, adapted from the live Airbnb listing text. */
  description: string;
  highlights: string[];
  amenities: string[];
  /**
   * Real Guesty listing _id, pulled from the Open API on 2026-07-09 and
   * confirmed by the owner. `undefined` means this unit isn't in Guesty yet -
   * the booking CTA falls back to WhatsApp-only in that case (see
   * lib/guesty.ts).
   */
  guestyListingId?: string;
  /** Paths under /public/images/properties - real photos, roughly matched. */
  photos?: string[];
  /** Google Maps embed src for this property's building, from the owner 2026-07-10. */
  mapEmbedSrc?: string;
  /**
   * Real Airbnb rating for AggregateRating schema (star ratings in Google
   * search results). Only set this when both numbers are confirmed real -
   * Google penalizes fabricated/inflated review data. `count` is the
   * TOTAL review count shown on the Airbnb listing, not guests hosted.
   */
  rating?: { value: number; count: number };
}

export const LOCATIONS: Record<
  LocationSlug,
  { name: string; blurb: string; heroPhoto?: string; longDescription?: string[] }
> = {
  "guatemala-city": {
    name: "Guatemala City",
    blurb: "Zona 11 apartments in Parque San Jorge, plus a Zona 14 apartment in Parque 14, all with pool, gym and 24/7 security.",
    heroPhoto: "/images/properties/lounge-room-zona-11-alt.jpg",
    longDescription: [
      "Most trips through Guatemala treat the capital as a layover on the way to Antigua or Lake Atitlán - but Zona 11 and Zona 14 are Guatemala City's most established residential districts, close to La Aurora International Airport and a short drive from the historic center.",
      "Our Parque San Jorge (Zona 11) and Parque 14 (Zona 14) apartments come with pool, gym, co-working space and 24/7 security - a genuinely comfortable base whether you're landing for a night before heading to Antigua, or working remotely for a few weeks.",
    ],
  },
  antigua: {
    name: "Antigua Guatemala",
    blurb: "A loft and a house in the heart of colonial Antigua.",
    heroPhoto: "/images/properties/antigua.png",
    longDescription: [
      "Antigua Guatemala is the reason most travelers from the US and Europe come to this country in the first place - a UNESCO World Heritage colonial city ringed by three volcanoes, with cobblestone streets, pastel facades and centuries-old ruins around almost every corner.",
      "Our Central King Loft and Antigua Three-Bedroom House both sit inside walking distance of Parque Central, the Santa Catalina Arch and Antigua's best coffee shops and restaurants - book direct with real local hosts and skip the platform fee that Airbnb or Booking.com would add on top.",
      "Guests consistently call this our best-rated stay in the country - see real reviews below, or read our full guide to things to do in Antigua.",
    ],
  },
  "el-paredon": {
    name: "El Paredon",
    blurb: "Off-grid beach camping, 250m from the surf.",
    heroPhoto: "/images/properties/el-paredon.png",
    longDescription: [
      "El Paredón is Guatemala's low-key Pacific surf town - black sand, a beginner-friendly break, and no traffic. Our off-grid camping spot is about as close to the water as you can get without pitching your own tent.",
    ],
  },
};

// Google Maps embed src values, sent by the owner 2026-07-10 - one per building.
const PARQUE_SAN_JORGE_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.877373224798!2d-90.5554227!3d14.6137489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1219a251cbb%3A0x176cb9eaa35dc818!2sBuen%20Rollo%20Escapes%20%E2%80%93%20Parque%20San%20Jorge%20(Zona%2011)!5e1!3m2!1sen!2sgt!4v1783650713694!5m2!1sen!2sgt";
const ANTIGUA_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8367011773416!2d-90.7371964!3d14.5594002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85890f317892651f%3A0xf906903e891b8936!2sBuen%20Rollo%20Escapes%20Antigua!5e1!3m2!1sen!2sgt!4v1783650784817!5m2!1sen!2sgt";
const PARQUE_14_MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.326922456983!2d-90.5193786!3d14.588305300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a303e36a9753%3A0xf794d042a8527c3d!2sBuen%20Rollo%20Escapes%20Parque%2014!5e1!3m2!1sen!2sgt!4v1783650847521!5m2!1sen!2sgt";

// All capacity numbers, ratings and descriptions below were scraped
// directly from the live Airbnb listings on 2026-08-16 (the owner sent the
// real airbnb.com/l/ links) - not estimates. Re-check against the live
// listing if these ever look stale.
export const PROPERTIES: Property[] = [
  {
    slug: "zona-11-luxury-king-pool-gym",
    name: "Level 3 Balcony Apartment",
    location: "guatemala-city",
    neighborhood: "Zona 11, Parque San Jorge",
    sleeps: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    description:
      "A modern 3-bedroom apartment on the lower level of Parque San Jorge, with the biggest balcony in the building off the living room and master bedroom. Master bedroom has a king bed, Smart TV, en-suite bathroom and walk-in wardrobe; bedroom 2 has a double bed; bedroom 3 has a double bed; the living room adds a fold-out queen sofa. Kitchen is fully equipped for real cooking, with a supermarket (Mercado Roosevelt) a 10-minute walk away. Washer, dryer and ironing station in-unit. 200+ Mbps wifi and a dedicated desk - built with remote work in mind. 10 minutes from La Aurora Airport.",
    highlights: ["Private balcony", "Pool access", "Gym access", "Co-working space"],
    amenities: ["Pool", "Gym", "Co-working lounge", "Games room", "Secure parking", "24/7 security", "Elevator", "Wifi", "Washer & dryer"],
    guestyListingId: "68817a0e13ac2b001f24a3f6", // PSJ | #317
    photos: [
      "/images/properties/psj-317-2.jpg",
      "/images/properties/psj-317-cover.jpg",
      "/images/properties/psj-317-3.jpg",
      "/images/properties/psj-317-4.jpg",
    ],
    mapEmbedSrc: PARQUE_SAN_JORGE_MAP,
    rating: { value: 4.97, count: 34 },
  },
  {
    slug: "zona-11-high-level-volcano-view-king",
    name: "Level 18 City & Volcano View",
    location: "guatemala-city",
    neighborhood: "Zona 11, Parque San Jorge",
    sleeps: 4,
    bedrooms: 2,
    beds: 3,
    bathrooms: 2,
    description:
      "A 2-bedroom apartment on an upper floor of Parque San Jorge, one of Zona 11's newest residential towers (built 2024). Panoramic city and volcano views from the living room, balcony and both bedrooms. Master bedroom has a king bed, Smart TV and en-suite bathroom; the second bedroom has a double bed. Fully equipped kitchen, in-unit washer & dryer, and 200+ Mbps wifi with a dedicated desk. Supermarket (Mercado Roosevelt) a 10-minute walk away. Pool access and self check-in included.",
    highlights: ["High floor", "City & volcano view", "Pool access", "King master bedroom"],
    amenities: ["Pool", "Co-working lounge", "24/7 security", "Elevator", "Wifi", "Washer & dryer", "Smart TV"],
    guestyListingId: "6881799f01272a0010ea99a8", // PSJ | #1819
    photos: [
      "/images/properties/psj-1819-2.jpg",
      "/images/properties/psj-1819-cover.jpg",
      "/images/properties/psj-1819-3.jpg",
      "/images/properties/psj-1819-4.jpg",
    ],
    mapEmbedSrc: PARQUE_SAN_JORGE_MAP,
    rating: { value: 5.0, count: 8 },
  },
  {
    slug: "zona-11-skyline-volcano-view",
    name: "Level 18 Volcano & Skyline View",
    location: "guatemala-city",
    neighborhood: "Zona 11, Parque San Jorge",
    sleeps: 7,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    description:
      "A modern 3-bedroom apartment on an upper floor of Parque San Jorge with panoramic views of Volcán de Agua, Volcán de Fuego and the Guatemala City skyline from the living room, balcony and bedrooms. Master bedroom has a king bed, Smart TV and en-suite bathroom with the best views in the apartment; two further bedrooms with a double bed each, plus a fold-out sofa in the living room. Fully equipped kitchen, in-unit laundry, and 200+ Mbps wifi with a dedicated desk for remote work. Full private apartment - not shared space - with pool, gym, co-working lounge, games room and secure parking included.",
    highlights: ["Volcán de Agua & Fuego view", "Skyline view", "Pool access", "Gym access"],
    amenities: ["Pool", "Gym", "Co-working lounge", "Games room", "Secure parking", "24/7 security", "Elevator", "Wifi"],
    guestyListingId: "68817b105d163d0021cd3ef3", // PSJ | #1820
    photos: [
      "/images/properties/psj-1820-cover.jpg",
      "/images/properties/zona-11-bedroom-2.jpg",
      "/images/properties/zona-11-bedroom-3.jpg",
      "/images/properties/psj-1820-2.jpg",
    ],
    mapEmbedSrc: PARQUE_SAN_JORGE_MAP,
    rating: { value: 4.88, count: 26 },
  },
  {
    slug: "zona-11-volcano-and-pool-view",
    name: "Level 19 Volcano & City View",
    location: "guatemala-city",
    neighborhood: "Zona 11, Parque San Jorge",
    sleeps: 6,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    description:
      "A 3-bedroom apartment on an upper floor of Parque San Jorge with panoramic views of Volcán de Agua, Volcán de Fuego and the city skyline. Master bedroom has a king bed and en-suite bathroom; two further bedrooms with a double bed each, plus a fold-out sofa in the living room for extra guests. Fully equipped kitchen, in-unit washer & dryer, and 200+ Mbps wifi with a dedicated desk. Pool, gym and secure parking included.",
    highlights: ["High floor", "Volcano & city view", "Pool access", "King master bedroom"],
    amenities: ["Pool", "Gym", "Co-working lounge", "Secure parking", "24/7 security", "Elevator", "Wifi", "Smart TV"],
    guestyListingId: "688179fe71e6080017d1bb6a", // PSJ | #1919
    photos: [
      "/images/properties/psj-1919-cover.jpg",
      "/images/properties/psj-1919-2.jpg",
      "/images/properties/psj-1919-3.jpg",
      "/images/properties/psj-1919-4.jpg",
    ],
    mapEmbedSrc: PARQUE_SAN_JORGE_MAP,
    rating: { value: 5.0, count: 8 },
  },
  {
    slug: "zona-11-high-level-city-view",
    name: "Level 19 City View",
    location: "guatemala-city",
    neighborhood: "Zona 11, Parque San Jorge",
    sleeps: 7,
    bedrooms: 3,
    beds: 4,
    bathrooms: 2,
    description:
      "A 3-bedroom apartment on an upper floor of Parque San Jorge with sweeping views of the Guatemala City skyline from the living room, balcony and bedrooms. Master bedroom has a king bed, Smart TV and en-suite bathroom; two further bedrooms with a double bed each, plus a fold-out sofa in the living room. Fully equipped kitchen, in-unit laundry, and 200+ Mbps wifi with a dedicated desk. Pool access and self check-in included - guests rate this location a perfect 5 stars.",
    highlights: ["High floor", "City skyline view", "Pool access", "Perfect location rating"],
    amenities: ["Pool", "Co-working lounge", "24/7 security", "Elevator", "Wifi", "Washer & dryer", "Smart TV"],
    guestyListingId: "68817975f821b0002245a032", // PSJ | #1918
    photos: [
      "/images/properties/psj-1918-2.jpg",
      "/images/properties/psj-1918-cover.jpg",
      "/images/properties/psj-1918-3.jpg",
      "/images/properties/psj-1918-4.jpg",
    ],
    mapEmbedSrc: PARQUE_SAN_JORGE_MAP,
    rating: { value: 4.84, count: 25 },
  },
  {
    // Confirmed by the owner 2026-07-10: this unit is Zona 14, not Zona 11.
    slug: "zona-14-a1503-three-bedroom",
    name: "Level 15 Airport & Volcano View",
    location: "guatemala-city",
    neighborhood: "Zona 14, Parque 14 (A1503)",
    sleeps: 6,
    bedrooms: 3,
    beds: 3,
    bathrooms: 2,
    description:
      "One of the largest units we host - a spacious 110 sqm, 3-bedroom apartment on a high floor of one of Zona 14's most modern residential towers. Panoramic views of Volcán de Agua, Volcán de Fuego, the city skyline and La Aurora Airport from the living room, bedroom and balcony. Bedroom 1 has a king bed, Smart TV, walk-in wardrobe and en-suite bathroom; bedroom 2 has a king bed; bedroom 3 has a queen bed - all with premium mattresses, double-glazed windows and blackout curtains. Fully equipped kitchen with the supermarket literally next door at Parque Las Américas. Washer, dryer and a drying rack in-unit - no laundromat needed. 200+ Mbps wifi with a dedicated desk. Building's infinity pool has airport views. 5 minutes from La Aurora Airport.",
    highlights: ["Largest unit", "High floor", "Airport & volcano views", "5 min to airport"],
    amenities: ["Pool", "Gym", "Co-working lounge", "Secure parking", "Elevator", "24/7 security", "Wifi", "Full kitchen", "Washer & dryer"],
    guestyListingId: "68b3b8f1d4211c00120cd5cc", // Parque 14 - 1503
    photos: [
      "/images/properties/zona-14-main-view.jpg",
      "/images/properties/zona-14-living-area.jpg",
      "/images/properties/zona-14-king-bed-room.jpg",
      "/images/properties/zona-14-king-bed-room-2.jpg",
      "/images/properties/zona-14-queen-bed-room.jpg",
      "/images/properties/zona-14-photo-6.jpg",
      "/images/properties/zona-14-photo-7.jpg",
    ],
    mapEmbedSrc: PARQUE_14_MAP,
    rating: { value: 5.0, count: 8 },
  },
  {
    slug: "antigua-central-king-loft",
    name: "Central King Loft",
    location: "antigua",
    neighborhood: "Antigua Guatemala, centro",
    sleeps: 4,
    bedrooms: 1,
    beds: 2,
    bathrooms: 1,
    description:
      "A newly renovated, stand-alone loft in the heart of Antigua - 3 minutes' walk to the Santa Catalina Arch. Not a room in someone's house or a unit in a complex - your own private, self-contained space. The king bed sits in an open mezzanine with a direct view of Volcán de Agua, plus a queen fold-out sofa downstairs for a third or fourth guest. Fully equipped kitchen for real cooking, with Mercado Central 4 minutes' walk for fresh ingredients. 200+ Mbps fiber wifi with mesh routers - no dead spots. 2 minutes to Mercado Central, 5 to Iglesia de la Merced, 8 to Parque Central - everything walkable, no car needed. No on-site parking (like 95% of central Antigua), but a secure staffed garage is 2-3 minutes' walk and we'll send full details at check-in. Ranked in Antigua's top 1% of stays.",
    highlights: ["Volcano view from bed", "3 min to Santa Catalina Arch", "Private entrance", "Top 1% in Antigua"],
    amenities: ["Wifi", "Full kitchen", "Rooftop access", "Private entrance", "Smart TV"],
    guestyListingId: "6881797de27463001384a290", // Antigua Loft
    photos: [
      "/images/properties/antigua-loft-cover.jpg",
      "/images/properties/antigua-loft-2.jpg",
      "/images/properties/antigua-loft-3.jpg",
      "/images/properties/antigua-loft-4.jpg",
      "/images/properties/antigua-loft-5.jpg",
    ],
    mapEmbedSrc: ANTIGUA_MAP,
    rating: { value: 4.96, count: 51 },
  },
  {
    slug: "antigua-three-bedroom-house",
    name: "Antigua Three-Bedroom House",
    location: "antigua",
    neighborhood: "Antigua Guatemala, centro",
    sleeps: 11,
    bedrooms: 3,
    beds: 6,
    bathrooms: 2,
    description:
      "A fully renovated 3-bedroom casa on a quiet cobblestone street, 2 blocks from the Santa Catalina Arch - colonial architecture, exposed brick and artisan woodwork with modern comforts throughout. Bedroom 1 has a king bed; bedroom 2 a king and a queen; bedroom 3 two queens - every room with its own Smart TV and blackout curtains. Living room adds a fold-out sofa (best for kids or one extra adult - it's under a skylight, so pack an eye mask). Two full bathrooms, one on each floor. Kitchen fully equipped for real cooking, Mercado Central 4 minutes' walk for fresh ingredients. 200+ Mbps fiber wifi throughout. Everything - the Arch, restaurants, the shuttle station - within an 8-minute walk, no car needed. Ranked in Antigua's top 1% - ideal for families, friend groups and wedding parties.",
    highlights: ["Sleeps up to 11", "2 blocks to Santa Catalina Arch", "Full house", "Top 1% in Antigua"],
    amenities: ["Wifi", "Full kitchen", "Private entrance", "Courtyard", "Smart TV", "Rain showers"],
    guestyListingId: "688179a755d65a0011e18bc5", // Antigua Entire Casa
    photos: [
      "/images/properties/antigua-casa-cover.jpg",
      "/images/properties/antigua-casa-2.jpg",
      "/images/properties/antigua-casa-3.jpg",
      "/images/properties/antigua-casa-4.jpg",
      "/images/properties/antigua-casa-5.jpg",
    ],
    mapEmbedSrc: ANTIGUA_MAP,
    rating: { value: 4.9, count: 40 },
  },
  {
    slug: "el-paredon-off-grid-camping",
    name: "Off-Grid Beach Camping",
    location: "el-paredon",
    neighborhood: "El Paredon, 250m from the beach",
    sleeps: 2,
    bedrooms: 0,
    beds: 1,
    bathrooms: 1,
    description:
      "A simple, off-grid camping spot 250m from the surf in El Paredón - Guatemala's low-key Pacific surf town. Hammocks, solar power and a shared bathroom. Not in our online booking system yet - message us on WhatsApp to check availability.",
    highlights: ["250m from the beach", "Off-grid", "Surf town"],
    amenities: ["Shared bathroom", "Hammocks", "Solar power"],
    // Not in Guesty at all - booking CTA is WhatsApp-only for this one.
    guestyListingId: undefined,
    photos: ["/images/properties/el-paredon.png"],
  },
];

export function getPropertyBySlug(slug: string): Property | undefined {
  return PROPERTIES.find((property) => property.slug === slug);
}

export function getPropertiesByLocation(location: LocationSlug): Property[] {
  return PROPERTIES.filter((property) => property.location === location);
}
