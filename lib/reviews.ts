export interface Review {
  quote: string;
  name: string;
  country: string;
  property: string;
}

// Real Airbnb review excerpts, supplied by the owner on 2026-07-09.
export const REVIEWS: Review[] = [
  {
    quote:
      "Found this gem on a last minute trip to Antigua. The home was so beautiful! So spacious, clean! We loved the king beds. Hosts were extremely welcoming and quick to respond. Definitely recommend - we're looking forward to staying here again.",
    name: "Maria",
    country: "Los Angeles, USA",
    property: "Antigua Three-Bedroom House",
  },
  {
    quote:
      "The place was clean and cozy. We loved that we could use all the amenities. Communication was very good; they always responded quickly. 100% recommended. We wished we could have stayed longer.",
    name: "Josh",
    country: "Guatemala",
    property: "Guatemala City, Zona 11",
  },
  {
    quote:
      "Zac was very accommodating from start to finish. The loft was perfect for my stay and conveniently located. Everything was as described and I hope to visit and stay at this same Airbnb. I highly recommend!!",
    name: "Patrick",
    country: "London, United Kingdom",
    property: "Central King Loft",
  },
  {
    quote:
      "What a fantastic stay! The views are a total wow - volcano and airport views! Everything was spotlessly clean, the beds were super comfy, and the location couldn't be better. Zac is an awesome host - very accommodating, lightning-fast to respond, and super easy to communicate with in both Spanish and English.",
    name: "Normita",
    country: "Ottawa, Canada",
    property: "Zona 14 Three-Bedroom Apartment",
  },
];
