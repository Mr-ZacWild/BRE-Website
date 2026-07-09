import type { Property } from "./properties";

const GUESTY_BOOKING_DOMAIN = "https://buenrolloescapes.guestybookings.com";

export interface BookingQuery {
  checkIn?: string;
  checkOut?: string;
  guests?: number;
}

/**
 * Phase 1: deep-link to the Guesty-hosted booking page. Calendar sync and
 * payments stay entirely in Guesty - this only builds the URL.
 */
export function getGuestyBookingUrl(
  property: Property,
  query?: BookingQuery,
): string {
  const url = new URL(`${GUESTY_BOOKING_DOMAIN}/properties/${property.guestySlug}`);
  if (query?.checkIn) url.searchParams.set("checkIn", query.checkIn);
  if (query?.checkOut) url.searchParams.set("checkOut", query.checkOut);
  if (query?.guests) url.searchParams.set("guests", String(query.guests));
  return url.toString();
}

/**
 * Phase 2 (not implemented): on-site availability/quotes via the Guesty
 * Open API. Left as a stub so Phase 1 has a clean seam to grow into -
 * do not implement until Zac asks for it. Credentials should live in
 * GUESTY_CLIENT_ID / GUESTY_CLIENT_SECRET env vars, never in source.
 */
export async function getAvailability(
  _property: Property,
  _query: BookingQuery,
): Promise<never> {
  throw new Error("getAvailability() is a Phase 2 stub - not implemented yet");
}
