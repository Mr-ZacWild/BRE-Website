import type { LocationSlug } from "./properties";

export interface BlogSection {
  heading: string;
  body: string[];
  /** Label for a placeholder image slot right after this section. */
  imageSlot?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  /** Label for the hero image placeholder at the top of the post. */
  heroImageSlot: string;
  /** Label for a suggested YouTube embed slot, if any. */
  videoSlot?: string;
  sections: BlogSection[];
  /** Which of our locations this post should push readers toward booking. */
  relatedLocation?: LocationSlug;
}

// Written 2026-07-10 as genuinely useful general travel content - not
// fabricated specifics (no invented restaurant names, tour operators, or
// prices). Review for accuracy/local nuance before publishing; this is a
// first draft aimed at SEO structure + real usefulness, not final copy.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "things-to-do-in-antigua-guatemala",
    title: "The Best Things to Do in Antigua Guatemala",
    category: "Antigua",
    excerpt:
      "Cobblestone streets, three volcanoes on the skyline, and some of the best coffee in the world - here's how to spend your time in Antigua.",
    heroImageSlot: "Antigua street with volcano in the background, golden hour",
    videoSlot: "Short walking-tour clip of Antigua's historic center",
    relatedLocation: "antigua",
    sections: [
      {
        heading: "Why Antigua is worth slowing down for",
        body: [
          "Antigua Guatemala is a small colonial city ringed by three volcanoes, with cobblestone streets, pastel facades, and centuries-old ruins around almost every corner. It's compact enough to explore entirely on foot, which is part of the charm.",
        ],
      },
      {
        heading: "Wander the historic center",
        body: [
          "Start at Parque Central and the iconic Santa Catalina Arch, then duck into the ruined convents and churches scattered through town - many were damaged by earthquakes centuries ago and left partially standing, which gives Antigua its distinctive look.",
        ],
        imageSlot: "Santa Catalina Arch, Antigua",
      },
      {
        heading: "Catch the volcano views",
        body: [
          "Cerro de la Cruz, a short walk (or quick tuk-tuk ride) above the city, is the classic viewpoint over Antigua's rooftops with Volcán de Agua behind it. For something more active, day hikes up nearby Pacaya volcano are a popular half-day trip, with roasted marshmallows over volcanic vents as the reward.",
        ],
      },
      {
        heading: "Drink the coffee",
        body: [
          "Antigua sits in one of Guatemala's best coffee-growing regions. A farm tour just outside town is worth the half-day, but you don't need to leave the historic center to find a proper cup.",
        ],
      },
      {
        heading: "Where to stay",
        body: [
          "Our Central King Loft and Antigua Three-Bedroom House both put you inside walking distance of everything above - book direct and we'll point you to our favorite nearby spots on WhatsApp.",
        ],
      },
    ],
  },
  {
    slug: "things-to-do-in-guatemala-city",
    title: "What to Do in Guatemala City (Zona 11 and Zona 14)",
    category: "Guatemala City",
    excerpt:
      "Guatemala City doesn't get the hype Antigua does, but it's got museums, a genuine food scene, and it's where you'll actually land.",
    heroImageSlot: "Guatemala City skyline at dusk, Zona 14",
    relatedLocation: "guatemala-city",
    sections: [
      {
        heading: "The underrated first (or last) stop",
        body: [
          "Most itineraries treat Guatemala City as a place to pass through on the way to Antigua or Lake Atitlán. That's a missed opportunity - the city has genuinely good museums, restaurants, and a modern side most guidebooks skip.",
        ],
      },
      {
        heading: "Museums worth the detour",
        body: [
          "The Popol Vuh Museum and the Ixchel Museum of Indigenous Textiles and Clothing (both near Universidad Francisco Marroquín) are two of the best small museums in Central America - Maya artifacts and textile history in a couple of hours.",
        ],
      },
      {
        heading: "Zona 10 and Zona 14: the modern side",
        body: [
          "Zona 10 and Zona 14 are Guatemala City's upscale districts - tree-lined streets, good restaurants, and shopping at Paseo Cayalá, a walkable outdoor plaza built to look like a small colonial town.",
        ],
        imageSlot: "Paseo Cayalá plaza",
      },
      {
        heading: "Zona 1: the historic center",
        body: [
          "The National Palace and Plaza de la Constitución in Zona 1 are worth a morning if you want a sense of the city's older, grittier core - a different energy entirely from Zona 10/14.",
        ],
      },
      {
        heading: "Where to stay",
        body: [
          "Our Zona 11 apartments in the Parque San Jorge building come with pool, gym, and co-working space - handy if you're basing yourself here for a few days of work or exploring before heading out to Antigua or Atitlán.",
        ],
      },
    ],
  },
  {
    slug: "el-paredon-guide",
    title: "El Paredón: Guatemala's Off-Grid Surf Town",
    category: "El Paredón",
    excerpt:
      "Black sand beaches, no traffic, and a surf break that's still mostly a local secret - here's what to know about El Paredón.",
    heroImageSlot: "El Paredón beach at sunset, surfboards in sand",
    videoSlot: "Drone or beach footage of El Paredón's coastline",
    relatedLocation: "el-paredon",
    sections: [
      {
        heading: "What makes El Paredón different",
        body: [
          "El Paredón is a small fishing-village-turned-surf-town on Guatemala's Pacific coast. There's no traffic, limited electricity infrastructure (most places run on solar), and one main sandy road through town. It's the opposite of Antigua or Guatemala City, on purpose.",
        ],
      },
      {
        heading: "Surfing (or learning to)",
        body: [
          "The beach break here is consistent and beginner-friendly compared to some of Guatemala's other Pacific spots, which is why it's become a low-key destination for people learning to surf for the first time.",
        ],
      },
      {
        heading: "Slow days and sunsets",
        body: [
          "Beyond surfing, the routine here is simple: hammocks, black sand, and some of the best sunsets on this coastline. It's a genuine reset if you've spent a few days moving fast through Antigua or Guatemala City.",
        ],
        imageSlot: "Hammock on the beach, El Paredón",
      },
      {
        heading: "Getting there",
        body: [
          "El Paredón is a few hours from both Antigua and Guatemala City by shuttle or private transfer - most people treat it as a 2-4 night add-on at the end of a highlands trip.",
        ],
      },
      {
        heading: "Where to stay",
        body: [
          "Our off-grid beach camping spot is 250m from the water - about as close to the surf as you can get without pitching a tent yourself.",
        ],
      },
    ],
  },
  {
    slug: "lake-atitlan-things-to-do",
    title: "Lake Atitlán: Volcanoes, Villages and Boats",
    category: "Lake Atitlán",
    excerpt:
      "Three volcanoes, a dozen lakeside villages, and a boat network connecting all of them - here's how to actually see Lake Atitlán.",
    heroImageSlot: "Lake Atitlán with volcanoes in the background",
    sections: [
      {
        heading: "A lake ringed by volcanoes",
        body: [
          "Lake Atitlán is framed by three volcanoes - Atitlán, Tolimán, and San Pedro - and a string of villages around its edge, each with a distinct character. Aldous Huxley famously called it the most beautiful lake in the world; you don't have to agree to see why he said it.",
        ],
      },
      {
        heading: "Panajachel: the gateway",
        body: [
          "Most trips to the lake start in Panajachel ('Pana'), the main transport hub with the widest range of hotels and restaurants. It's a good base if you want easy boat access to everywhere else.",
        ],
      },
      {
        heading: "San Pedro La Laguna",
        body: [
          "San Pedro has a younger, more backpacker/nomad energy - Spanish schools, cafes, and hiking up the San Pedro volcano itself for those who want a proper climb.",
        ],
        imageSlot: "San Pedro La Laguna waterfront",
      },
      {
        heading: "Santiago Atitlán",
        body: [
          "Santiago is the largest indigenous Tz'utujil Maya town on the lake, with a market and textile tradition worth building a half-day around.",
        ],
      },
      {
        heading: "Boat-hopping between villages",
        body: [
          "Public lanchas (boats) run constantly between villages during daylight hours - it's genuinely one of the easiest ways to see a lot of a place in a short time. Most people base themselves in one town and day-trip to two or three others.",
        ],
      },
    ],
  },
  {
    slug: "visiting-tikal-guide",
    title: "Visiting Tikal: Everything to Know Before You Go",
    category: "Tikal",
    excerpt:
      "Ancient Maya temples rising out of the jungle canopy - here's how to plan a trip to one of Central America's most impressive ruins.",
    heroImageSlot: "Tikal's Temple IV view over the jungle canopy",
    videoSlot: "Sunrise-over-Tikal timelapse or aerial footage",
    sections: [
      {
        heading: "What Tikal actually is",
        body: [
          "Tikal is one of the largest excavated cities of the ancient Maya civilization, a UNESCO World Heritage Site set inside a national park in northern Guatemala's Petén region. Multiple temple complexes still rise directly out of dense jungle.",
        ],
      },
      {
        heading: "Getting there",
        body: [
          "Tikal is a flight (to Flores/Santa Elena) and a short transfer from Guatemala City or Antigua - it's a separate trip, not a day trip from the highlands, so most people plan 2-3 days for it.",
        ],
      },
      {
        heading: "Temple IV and the Gran Plaza",
        body: [
          "Temple IV is the tallest structure at the site and the classic photo spot - jungle canopy stretching to the horizon with the tops of other temples poking through. The Gran Plaza, with Temples I and II facing each other, is the most iconic single view in the park.",
        ],
        imageSlot: "Gran Plaza, Tikal, Temples I and II",
      },
      {
        heading: "Sunrise tours and wildlife",
        body: [
          "Early sunrise tours get you into the park before the crowds and before the heat - you'll likely hear (and possibly see) howler monkeys and toucans along the way.",
        ],
      },
      {
        heading: "Practical tips",
        body: [
          "Bring water, sun protection, and good walking shoes - it's hot, humid, and involves a fair amount of walking between complexes. A licensed guide is worth it for the history alone.",
        ],
      },
    ],
  },
  {
    slug: "getting-around-guatemala",
    title: "Getting Around Guatemala: Airports, Transfers and Transport",
    category: "Travel Tips",
    excerpt:
      "From landing at La Aurora to getting between Antigua, Lake Atitlán, and El Paredón - here's how to actually move around Guatemala.",
    heroImageSlot: "La Aurora International Airport or a shuttle van on a highland road",
    sections: [
      {
        heading: "Landing at La Aurora (GUA)",
        body: [
          "Almost every international visitor arrives through La Aurora International Airport (GUA) in Guatemala City, a short drive from both Zona 10/11/14 and about an hour from Antigua depending on traffic.",
        ],
      },
      {
        heading: "Airport to your apartment",
        body: [
          "Private transfers and rideshare apps both work well from the airport into Zona 11 or Zona 14 - message us on WhatsApp before you land and we can point you to a reliable option.",
        ],
      },
      {
        heading: "Getting to Antigua",
        body: [
          "Shuttles run constantly between the airport/city and Antigua, and it's an easy private transfer if you'd rather go direct without stops.",
        ],
      },
      {
        heading: "Reaching Lake Atitlán and El Paredón",
        body: [
          "Both are a few hours from Antigua or Guatemala City by shuttle or private car - shuttles are cheaper and social, private transfer is faster and more flexible. Neither requires anything more complicated than booking ahead.",
        ],
      },
      {
        heading: "A general note on road travel",
        body: [
          "Stick to daytime travel on intercity routes where possible, and use a reputable shuttle company or private driver rather than random informal transport - normal, sensible practice anywhere in Central America.",
        ],
      },
    ],
  },
  {
    slug: "is-guatemala-safe-to-visit",
    title: "Is Guatemala Safe to Visit? A Practical Guide",
    category: "Travel Tips",
    excerpt:
      "The question every first-time visitor asks. Here's an honest, practical answer instead of a vague reassurance.",
    heroImageSlot: "A calm, welcoming street scene in Antigua or Zona 14",
    sections: [
      {
        heading: "The honest answer",
        body: [
          "Yes, particularly in the areas most visitors actually spend time in. Zona 10, 11, and 14 in Guatemala City, and central Antigua, are well-established, well-trafficked areas that see visitors every day of the year.",
        ],
      },
      {
        heading: "Normal travel sense applies",
        body: [
          "The same common sense that applies in any city applies here: don't flash expensive jewelry or electronics late at night, use trusted transport rather than hailing random vehicles off the street, and keep valuables out of sight in parked cars.",
        ],
      },
      {
        heading: "What we do to help",
        body: [
          "Every guest gets a direct WhatsApp line to us, in English or Spanish, from before you arrive through checkout - if you're ever unsure about an area or a situation, message us and we'll give you a straight answer.",
        ],
      },
      {
        heading: "Where to be more cautious",
        body: [
          "Like any country, some areas warrant more caution than others - this is true of Zona 1's outer edges and rural areas after dark. It's not a reason to avoid Guatemala, just a reason to plan the way you'd plan a trip anywhere unfamiliar.",
        ],
      },
      {
        heading: "The bottom line",
        body: [
          "Guatemala hosts a steady stream of travelers, students, and remote workers every year in the exact areas we operate in. Come prepared, stay in touch with your hosts, and you'll likely find it far less intimidating than the question implies.",
        ],
      },
    ],
  },
  {
    slug: "best-time-to-visit-guatemala",
    title: "The Best Time to Visit Guatemala",
    category: "Travel Tips",
    excerpt:
      "Dry season, rainy season, and why the best time depends on whether you're headed to the highlands, the coast, or the jungle.",
    heroImageSlot: "Seasonal contrast shot - dry highland landscape or rainy-season green",
    sections: [
      {
        heading: "Dry season vs rainy season",
        body: [
          "Guatemala's dry season runs roughly November to April, and rainy season May to October. Dry season is the most popular time to visit, but rainy season usually means a couple of hours of afternoon rain and clear mornings, not washed-out days.",
        ],
      },
      {
        heading: "Guatemala City and Antigua",
        body: [
          "Both sit at altitude, so temperatures stay mild year-round - think jacket-in-the-evening mild, not cold. This makes them comfortable to visit any month.",
        ],
      },
      {
        heading: "Tikal",
        body: [
          "The Petén lowlands around Tikal are hot and humid year-round, with dry season (roughly December-April) being the more comfortable window for a full day of walking between temple complexes.",
        ],
      },
      {
        heading: "El Paredón",
        body: [
          "Surf conditions and beach weather are good most of the year on the Pacific coast, though rainy-season afternoons can bring short, heavy downpours.",
        ],
      },
      {
        heading: "Our take",
        body: [
          "Shoulder season (November or May) often gets you dry-season weather with fewer crowds and better availability - worth considering if your dates are flexible.",
        ],
      },
    ],
  },
  {
    slug: "why-book-direct",
    title: "Why Book Direct: Buen Rollo vs Airbnb and Booking.com",
    category: "Booking Tips",
    excerpt:
      "Same apartments, same hosts, same standard - booking direct just cuts out the platform fee and the middleman.",
    heroImageSlot: "A guest checking their phone with a Buen Rollo apartment in the background",
    relatedLocation: "guatemala-city",
    sections: [
      {
        heading: "It's the same property, either way",
        body: [
          "Every apartment and house we list on Airbnb or Booking.com is also bookable direct with us - same beds, same amenities, same hosts. The only difference is what happens to the fee the platform charges.",
        ],
      },
      {
        heading: "Better rate, direct line",
        body: [
          "Booking direct means the platform's service fee isn't baked into your total, and you get a direct WhatsApp line to us from the moment you book - not a support ticket routed through a platform.",
        ],
      },
      {
        heading: "Flexible where it counts",
        body: [
          "Need an earlier check-in, a late checkout, or just have a question before you arrive? It's a WhatsApp message away, not a form buried in an app.",
        ],
      },
      {
        heading: "Your payment is still secure",
        body: [
          "Booking direct doesn't mean bank-transfer-and-hope - payment is still processed through a secure system, the same standard you'd expect from any major platform.",
        ],
      },
      {
        heading: "The reviews are real either way",
        body: [
          "We've hosted 1,000+ guests with a 4.95 rating on Airbnb - booking direct doesn't change the standard, it just changes who benefits from the fee.",
        ],
      },
    ],
  },
  {
    slug: "guatemala-remote-work-guide",
    title: "Guatemala for Remote Workers: Where to Stay and Work",
    category: "Remote Work",
    excerpt:
      "Reliable wifi, a US-friendly time zone, and a genuinely lower cost of living - here's how to base a remote work trip in Guatemala.",
    heroImageSlot: "Laptop on a desk with a Guatemala City or Antigua view",
    relatedLocation: "guatemala-city",
    sections: [
      {
        heading: "Why Guatemala works for remote work",
        body: [
          "Guatemala sits in Central Time, making overlap with US business hours easy, and the cost of living is a fraction of most US or European cities - without giving up reliable wifi or modern apartments.",
        ],
      },
      {
        heading: "Guatemala City: co-working built in",
        body: [
          "Our Zona 11 apartments in the Parque San Jorge building include a co-working lounge alongside the pool and gym - genuinely useful if video calls and a real desk matter to your day.",
        ],
      },
      {
        heading: "Antigua: cafe culture as an office",
        body: [
          "Antigua has a strong cafe culture and enough coffee-shop wifi to run a laptop-based workday comfortably, with the bonus of a volcano view on your lunch break.",
        ],
      },
      {
        heading: "El Paredón: the work-surf reset",
        body: [
          "For a shorter stretch, El Paredón works well as a change of pace - mornings surfing, afternoons at a laptop, assuming you don't mind planning around solar power schedules.",
        ],
      },
      {
        heading: "Visas and length of stay",
        body: [
          "Many nationalities get an initial 90-day tourist stay on arrival - always confirm current requirements for your passport before you book, since rules can change.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
