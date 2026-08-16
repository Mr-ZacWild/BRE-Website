import type { LegalSection } from "@/components/legal-view";

// Migrated from the live Google Sites pages on 2026-07-09, then expanded
// 2026-08-16 with standard clauses a short-term rental business normally
// needs (age requirement, force majeure, governing law, data retention,
// etc.) - not a verbatim legal template, written specifically for how
// Buen Rollo actually operates (direct WhatsApp booking, secure payment
// link/bank transfer/cash, Guatemala properties, Wyoming LLC).
//
// IMPORTANT: this is a content/completeness pass, not a substitute for a
// real attorney. Buen Rollo LLC is a Wyoming entity operating properties
// in Guatemala and taking payment (including cash) from international
// guests - that's a real cross-border liability/tax situation. Have an
// actual lawyer review this, especially Liability, Damages, Cancellations
// and the governing-law clause, before leaning on it if a dispute ever
// happens.
//
// TODO: translate to natural Guatemalan Spanish before using on /es -
// these are legally meaningful pages, not ones to auto-translate.

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "Who you're booking with",
    body: [
      "These terms are between you and Buen Rollo LLC, a Wyoming-registered company that also holds a Guatemalan SAT tax registration and can issue official invoices for direct bookings. By booking a stay with us - through this website, WhatsApp, or a third-party platform - you agree to these terms.",
    ],
  },
  {
    heading: "Bookings",
    body: [
      "A reservation is only guaranteed once payment has been confirmed. Bookings made direct with us can be paid via a secure payment link, bank transfer, or cash for last-minute reservations - we'll confirm the details with you directly on WhatsApp.",
      "The primary guest booking a stay must be at least 18 years old and will be held responsible for the conduct of everyone in their party.",
      "During high season, we may require payment in advance of your stay to confirm the reservation and hold the calendar for you.",
    ],
  },
  {
    heading: "Check-in and check-out",
    body: [
      "Standard check-in is 3:00pm and check-out is 11:00am. Early or late check-in/out can be arranged on request, subject to availability. Valid photo identification may be required at check-in, particularly where building security registration applies.",
    ],
  },
  {
    heading: "Cancellations and refunds",
    body: [
      "If you booked through a third-party platform (Airbnb, Booking.com, etc.), that platform's cancellation policy applies.",
      "If you booked direct with us, you'll receive a full refund for cancellations made at least 48 hours before your scheduled check-in. Cancellations made within 48 hours of check-in, and no-shows, are non-refundable.",
      "Approved refunds are returned to your original payment method. Processing time varies by payment provider.",
      "Bank and payment-processing fees are never refundable. Any transaction fee charged by a bank or card processor on a refund is passed on to the guest, regardless of booking method. See our full Cancellation Policy for details.",
    ],
  },
  {
    heading: "Occupancy and guest responsibilities",
    body: [
      "The number of guests staying may never exceed the maximum occupancy stated for the property at the time of booking. Guests are expected to respect the property and house rules: no parties or events, no smoking indoors, and reasonable noise levels for a residential building. Local laws and building regulations apply throughout your stay.",
    ],
  },
  {
    heading: "Damages",
    body: [
      "Guests are responsible for any damage caused to the property during their stay, beyond normal wear and tear. Additional charges may apply to cover repair or replacement costs, and will be communicated to the guest directly.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "Buen Rollo LLC is not responsible for theft, personal injury, or service interruptions (power, water, internet, etc.) that are outside of our reasonable control.",
    ],
  },
  {
    heading: "Force majeure",
    body: [
      "Neither party is liable for a failure to perform caused by events outside their reasonable control - natural disasters, government action, civil unrest, or similar circumstances. Where a stay is affected by such an event, we'll work with you in good faith on rescheduling or a partial refund where reasonable.",
    ],
  },
  {
    heading: "Right to refuse service",
    body: [
      "We reserve the right to cancel a booking, or end a stay early, where these terms or house rules are violated.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of Guatemala, where the properties are located, without prejudice to any mandatory consumer protections that apply in your own country of residence.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms from time to time. The version in effect at the time you complete a booking is the one that applies to that stay.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about these terms: WhatsApp us in English (+502 3922 9168) or Spanish (+502 5998 9468).",
    ],
  },
];

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "Information we collect",
    body: [
      "The full name of the primary guest and any accompanying guests, contact details, booking information, vehicle details when relevant, and identification documents where required for building security.",
      "If you contact us via this website or WhatsApp, we keep a record of that conversation to provide support and follow up on your booking.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "To process and manage your booking, provide guest support, issue an invoice where requested, and - where a property requires it - register you with building management/security.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "This website uses analytics tools (such as Google Analytics) to understand how visitors use the site, so we can improve it. These tools may use cookies and collect standard technical information like your browser type and general location - they don't identify you personally.",
    ],
  },
  {
    heading: "Sharing with third parties",
    body: [
      "We do not sell your personal information. We share it only where necessary - for payment processing, legal compliance, building security registration, or with service providers (such as our booking/payment platform) who help us run the business, and only to the extent needed for that purpose.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We retain booking and guest information for as long as reasonably necessary to fulfil the purposes above, including any legal or tax record-keeping requirements (such as invoices issued under our Guatemalan SAT registration).",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask us what personal information we hold about you, request a correction, or ask us to delete it where we're not required to keep it for legal or tax reasons. Message us on WhatsApp to make a request.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure. This website is served over an encrypted (HTTPS) connection, and we never ask you to send full card details over WhatsApp or email.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this policy: WhatsApp us in English (+502 3922 9168) or Spanish (+502 5998 9468).",
    ],
  },
];

export const CANCELLATION_SECTIONS: LegalSection[] = [
  {
    heading: "Booked through Airbnb, Booking.com, or another platform",
    body: [
      "The cancellation policy you selected on that platform governs your booking.",
    ],
  },
  {
    heading: "Booked direct with Buen Rollo Escapes",
    body: [
      "Full refund for cancellations made at least 48 hours before check-in.",
      "No refund for cancellations made within 48 hours of check-in, or for no-shows.",
      "Approved refunds return to your original payment method - processing time varies by provider.",
    ],
  },
  {
    heading: "Why we sometimes ask for payment in advance",
    body: [
      "During high season, we may ask direct-booking guests to pay before check-in. This isn't a hard-sell tactic - it's how we protect your reservation from being displaced by a no-show, and how we manage a small number of properties in genuinely high demand during peak weeks.",
    ],
  },
  {
    heading: "Transaction and processing fees",
    body: [
      "Any transaction fee a bank or card processor charges on a payment or refund is non-refundable and is passed on to the guest.",
      "This applies to every booking and every refund, direct or through a third-party platform.",
    ],
  },
];
