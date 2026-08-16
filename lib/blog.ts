import type { LocationSlug } from "./properties";

export interface BlogSection {
  heading: string;
  body: string[];
  /** Label for a placeholder image slot right after this section. */
  imageSlot?: string;
  /** Real image path under /public - shown instead of the placeholder box when set. */
  image?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  /** Label for the hero image placeholder at the top of the post. */
  heroImageSlot: string;
  /** Real hero image path under /public - shown instead of the placeholder box when set. */
  heroImage?: string;
  /** Label for a suggested YouTube embed slot, if any. */
  videoSlot?: string;
  /** Real YouTube video ID - shown as a live embed instead of the placeholder when set. Verified embeddable via the oEmbed API before adding. */
  videoId?: string;
  sections: BlogSection[];
  /** Which of our locations this post should push readers toward booking. */
  relatedLocation?: LocationSlug;
  /** Property slugs to link to inline (internal linking for SEO + booking). */
  relatedProperties?: string[];
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
    heroImage: "/images/stock/antigua-sunset-cerro-de-la-cruz.jpg",
    videoSlot: "Short walking-tour clip of Antigua's historic center",
    videoId: "qkoZgm_-Z4M",
    relatedLocation: "antigua",
    relatedProperties: ["antigua-central-king-loft", "antigua-three-bedroom-house"],
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
        image: "/images/stock/santa-catalina-arch-antigua.jpg",
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
    heroImage: "/images/stock/guatemala-city-aerial.jpg",
    relatedLocation: "guatemala-city",
    relatedProperties: ["zona-11-luxury-king-pool-gym", "zona-14-a1503-three-bedroom"],
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
        image: "/images/stock/paseo-cayala-plaza.jpg",
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
    heroImage: "/images/stock/el-paredon-surfboard-beach.jpg",
    videoSlot: "Drone or beach footage of El Paredón's coastline",
    videoId: "0bHwSL9UUxA",
    relatedLocation: "el-paredon",
    relatedProperties: ["el-paredon-off-grid-camping"],
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
        image: "/images/stock/el-paredon-beach-sunset.jpg",
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
    heroImage: "/images/stock/lake-atitlan-dock-volcano.jpg",
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
        image: "/images/stock/san-pedro-la-laguna.jpg",
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
    heroImage: "/videos/hero-poster.jpg",
    videoSlot: "Sunrise-over-Tikal timelapse or aerial footage",
    videoId: "5H-0IFSkylI",
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
        image: "/images/stock/tikal-temple-stock.jpg",
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
    heroImage: "/images/stock/guatemala-highland-building.jpg",
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
    heroImage: "/images/stock/antigua-calm-street.jpg",
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
    heroImage: "/images/stock/highland-seasonal-view.jpg",
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
    heroImage: "/images/stock/hand-phone-travel.jpg",
    relatedLocation: "guatemala-city",
    relatedProperties: ["zona-11-luxury-king-pool-gym", "antigua-central-king-loft"],
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
          "We're Airbnb Superhosts with 219 reviews and a 4.91 rating - booking direct doesn't change the standard, it just changes who benefits from the fee.",
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
    heroImage: "/images/stock/laptop-remote-work.jpg",
    relatedLocation: "guatemala-city",
    relatedProperties: ["zona-11-luxury-king-pool-gym"],
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
  {
    slug: "best-boutique-stay-antigua-guatemala",
    title: "Why Guests Keep Calling Us Antigua's Best Boutique Stay",
    category: "Antigua",
    excerpt:
      "A five-star loft two blocks from Parque Central and a full house guests never want to check out of - here's what makes our Antigua stays stand out, in guests' own words.",
    heroImageSlot: "Antigua courtyard or rooftop at golden hour, volcano in the background",
    heroImage: "/images/stock/antigua-sunset-cerro-de-la-cruz.jpg",
    relatedLocation: "antigua",
    relatedProperties: ["antigua-central-king-loft", "antigua-three-bedroom-house"],
    sections: [
      {
        heading: "Two stays, one standard",
        body: [
          "Antigua Guatemala has no shortage of places to stay, from big hotels to hundreds of Airbnbs scattered through the historic center. What keeps guests coming back to ours - and referring friends - comes down to two things: location and how we actually treat people once they've booked.",
          "Both of our Antigua properties sit inside easy walking distance of Parque Central and the Santa Catalina Arch, and both come with a direct WhatsApp line to us, not a support ticket routed through a platform.",
        ],
      },
      {
        heading: "The Central King Loft",
        body: [
          "Our loft is the pick for couples and solo travelers who want to be in the middle of everything - a real king bed for extra comfort after a day of walking, volcano views, private rooftop access, a short walk to Antigua's best coffee shops, and a host who responds fast.",
          '"Zac was very accommodating from start to finish. The loft was perfect for my stay and conveniently located. Everything was as described and I hope to visit and stay at this same Airbnb. I highly recommend!!" - Patrick, London, United Kingdom',
        ],
      },
      {
        heading: "The Antigua Three-Bedroom House",
        body: [
          "For families and groups, the full house gives you king beds throughout, a private entrance, a courtyard, and a full kitchen - enough space that nobody's tripping over each other after a long day of exploring.",
          '"Found this gem on a last minute trip to Antigua. The home was so beautiful! So spacious, clean! We loved the king beds. Hosts were extremely welcoming and quick to respond. Definitely recommend - we\'re looking forward to staying here again." - Maria, Los Angeles, USA',
        ],
        imageSlot: "Antigua Three-Bedroom House courtyard or living room",
        image: "/images/properties/antigua-casa-bedroom.png",
      },
      {
        heading: "The numbers behind the reviews",
        body: [
          "The Central King Loft holds a 4.98 rating on Airbnb - every single review five stars, except one four-star. That kind of consistency is hard to fake, and guest after guest mentions the same things: fast communication, a spotless space, and a location they didn't want to leave.",
        ],
      },
      {
        heading: "Book direct and skip the platform fee",
        body: [
          "Both properties are bookable direct with us for the same rooms, same hosts, and none of the service fee Airbnb or Booking.com tack on. If you're planning an Antigua trip from the US or Europe, message us on WhatsApp before you book anywhere else.",
        ],
      },
    ],
  },
  {
    slug: "semana-santa-antigua-guatemala",
    title: "Semana Santa in Antigua Guatemala: What to Know Before You Go",
    category: "Antigua",
    excerpt:
      "Elaborate sawdust carpets, towering processions, and some of the most famous Holy Week celebrations on Earth - here's what to expect and how to plan around it.",
    heroImageSlot: "Alfombra (sawdust carpet) on a cobblestone street in Antigua during Semana Santa",
    heroImage: "/images/stock/semana-santa-procession.jpg",
    videoSlot: "Procession footage - an anda float moving through Antigua's streets",
    videoId: "NWDDGctHTPU",
    relatedLocation: "antigua",
    relatedProperties: ["antigua-central-king-loft", "antigua-three-bedroom-house"],
    sections: [
      {
        heading: "Why Antigua's Semana Santa is world-famous",
        body: [
          "Semana Santa (Holy Week) is the week leading up to Easter Sunday, and Antigua Guatemala's celebrations are considered among the most elaborate anywhere in the world. The date moves every year with the Christian calendar, usually falling somewhere in March or April - always check the current year's dates before you book.",
        ],
      },
      {
        heading: "The alfombras (carpets)",
        body: [
          "The signature sight is the alfombras - intricate carpets stretching across entire cobblestone streets, made from dyed sawdust, flower petals, pine needles and fruit. Families and neighborhoods often work through the night to finish them, only for a procession to walk directly over the top a few hours later. Wander the streets early morning to catch them freshly finished, before the crowds and the processions arrive.",
        ],
        imageSlot: "Close-up detail of an alfombra pattern",
        image: "/images/stock/alfombra-close-up.jpg",
      },
      {
        heading: "The processions",
        body: [
          "Massive wooden floats called andas - some depicting scenes from the Passion of Christ, weighing well over a ton - are carried through the streets on the shoulders of dozens to over a hundred purple-robed carriers known as cucuruchos. Brass bands, incense, and slow, deliberate footwork make these processions as much a feat of endurance as a spectacle.",
        ],
      },
      {
        heading: "Good Friday is the peak",
        body: [
          "Viernes Santo (Good Friday) draws the largest crowds and the most elaborate carpets and processions of the week, including some that run from early morning well into the night. If you can only be in Antigua for one day of Semana Santa, this is it - but expect the streets to be genuinely packed.",
        ],
      },
      {
        heading: "Plan accommodation early",
        body: [
          "Antigua fills up months in advance for Semana Santa - it's one of the most in-demand weeks of the year for a very small town. If this is on your calendar, lock in a place to stay as early as you can rather than waiting until a few weeks out.",
        ],
      },
      {
        heading: "Where to stay",
        body: [
          "Our Central King Loft and Antigua Three-Bedroom House both sit inside walking distance of the historic center, where most of the main processions and carpets pass through - book direct and message us on WhatsApp with any questions about timing your trip around Holy Week.",
        ],
      },
    ],
  },
  {
    slug: "guatemala-city-airport-layover-guide",
    title: "Guatemala City Airport Layover: What to Do Near GUA",
    category: "Guatemala City",
    excerpt:
      "Long layover at La Aurora International Airport? Here's what's actually worth leaving the airport for, and how to judge if you have time.",
    heroImageSlot: "La Aurora International Airport exterior or a Zona 13/14 street view",
    heroImage: "/images/stock/guatemala-city-aerial.jpg",
    relatedLocation: "guatemala-city",
    relatedProperties: ["zona-11-luxury-king-pool-gym", "zona-14-a1503-three-bedroom"],
    sections: [
      {
        heading: "You have more options than you think",
        body: [
          "La Aurora International Airport (GUA) sits in Zona 13, minutes from some of Guatemala City's best neighborhoods - Zona 10 and Zona 14 are both a short drive away. A long layover here doesn't have to mean sitting in the terminal the whole time.",
        ],
      },
      {
        heading: "How much time you actually need",
        body: [
          "As a rough guide, a layover of 4+ hours makes a short trip into the city realistic, factoring in immigration, luggage, and traffic both ways. Anything shorter and it's safer to stay airside - Guatemala City traffic can be unpredictable depending on the time of day.",
        ],
      },
      {
        heading: "Museo Miraflores",
        body: [
          "One of the closest worthwhile stops to the airport, Museo Miraflores in Zona 10 covers Maya history and artifacts and is a genuinely good way to fill two or three hours without straying far.",
        ],
      },
      {
        heading: "La Aurora Zoo",
        body: [
          "Also in Zona 13, right near the airport - one of the oldest zoos in Central America, and an easy, low-effort option if you're traveling with kids on a layover.",
        ],
      },
      {
        heading: "Zona 10 and Zona 14",
        body: [
          "If you have more time, Zona 10 and Zona 14 have Guatemala City's best restaurants and a genuinely walkable, modern feel - a good introduction to the country if this is your only stop before connecting onward.",
        ],
      },
      {
        heading: "If your layover turns into an overnight",
        body: [
          "Misconnected flights and long overnight layovers happen - our Zona 11 and Zona 14 apartments are a short transfer from the airport, with 24/7 security and fast WhatsApp support if your plans change last minute.",
        ],
      },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
