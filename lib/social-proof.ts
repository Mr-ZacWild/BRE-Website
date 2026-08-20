/**
 * Real, independently-verifiable listing/profile links and stats.
 * Verified directly by fetching each live page on 2026-08-16 - do not
 * touch the numbers here without re-checking the source, and do not add
 * a platform below without a real URL to back it up (see lib/reviews.ts
 * for the same rule applied to guest review quotes).
 */
export interface VerifiedListing {
  platform: string;
  label: string;
  url: string;
  stat: string;
}

export const VERIFIED_LISTINGS: VerifiedListing[] = [
  {
    platform: "Airbnb",
    label: "Our Airbnb host profile",
    url: "https://www.airbnb.com/users/profile/1462809475039707952",
    stat: "Superhost - 4.91 (219 reviews)",
  },
  {
    platform: "Booking.com",
    label: "Zona 11 listing",
    url: "https://www.booking.com/hotel/gt/apartment-with-lots-of-facilities-zona-11.en-gb.html",
    stat: "9.8/10 Exceptional (81 reviews)",
  },
  {
    platform: "Booking.com",
    label: "Antigua listing",
    url: "https://www.booking.com/hotel/gt/central-antigua-loft-volcano-view-king-bed.en-gb.html",
    stat: "9.6/10 Exceptional (19 reviews)",
  },
  {
    platform: "Google",
    label: "Zona 11, Guatemala City",
    url: "https://www.google.com/maps/place/Buen+Rollo+Escapes+%E2%80%93+Parque+San+Jorge+(Zona+11)/data=!4m2!3m1!1s0x0:0x176cb9eaa35dc818",
    stat: "Business profile & reviews",
  },
  {
    platform: "Google",
    label: "Antigua Guatemala",
    url: "https://www.google.com/maps/place/Buen+Rollo+Escapes+Antigua/data=!4m2!3m1!1s0x0:0xf906903e891b8936",
    stat: "Business profile & reviews",
  },
  {
    platform: "Instagram",
    label: "@buenrolloescapes",
    url: "https://www.instagram.com/buenrolloescapes/",
    stat: "Real guest photos & updates",
  },
  {
    platform: "Facebook",
    label: "Buen Rollo Escapes",
    url: "https://www.facebook.com/p/Buen-Rollo-Escapes-61573308815302/",
    stat: "Real guest photos & updates",
  },
];
