export interface Review {
  quote: string;
  name: string;
  country: string;
  property: string;
}

// SAMPLE DATA - replace with real Airbnb review exports before launch.
// Ask Zac for 6-8 quotes with first name + country + property stayed.
export const SAMPLE_REVIEWS: Review[] = [
  {
    quote:
      "Felt like staying with friends who happen to have the best apartment in Zona 14.",
    name: "Sarah",
    country: "USA",
    property: "Zona 14 Three-Bedroom Apartment",
  },
  {
    quote:
      "Woke up to volcano views every morning in Antigua. Hosts answered WhatsApp in minutes.",
    name: "Marc",
    country: "Canada",
    property: "Central King Loft",
  },
  {
    quote: "El Paredon camping was the most relaxed three nights of the whole trip.",
    name: "Julia",
    country: "Germany",
    property: "Off-Grid Beach Camping",
  },
];
