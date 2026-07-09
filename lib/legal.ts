import type { LegalSection } from "@/components/legal-view";

// Migrated and cleaned up from the live Google Sites pages
// (buenrolloescapes.com/home/terms-conditions and /home/privacy-policy)
// on 2026-07-09. Not a verbatim copy - paraphrased and tightened per the
// brief's "clean it up" instruction. Have Zac confirm the cancellation
// window and any other numbers before this goes live.
// TODO: translate to natural Guatemalan Spanish before using on /es -
// these are legally meaningful pages, not ones to auto-translate.

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "Bookings",
    body: [
      "A reservation is only guaranteed once payment has been confirmed.",
    ],
  },
  {
    heading: "Check-in and check-out",
    body: [
      "Standard check-in is 3:00pm and check-out is 11:00am. Early or late check-in/out can be arranged on request, subject to availability.",
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
    heading: "Guest responsibilities",
    body: [
      "Guests are expected to respect the property and house rules: no parties or events, no smoking indoors, and no exceeding the stated maximum occupancy. Local laws and building regulations apply throughout your stay.",
    ],
  },
  {
    heading: "Damages",
    body: [
      "Guests are responsible for any damage caused to the property during their stay. Additional charges may apply to cover repair or replacement costs.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "Buen Rollo LLC is not responsible for theft, personal injury, or service interruptions (power, water, internet, etc.) that are outside of our reasonable control.",
    ],
  },
  {
    heading: "Right to refuse service",
    body: [
      "We reserve the right to cancel a booking that violates these terms.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about these terms: hello@buenrolloescapes.com, or WhatsApp us in English (+502 3922 9168) or Spanish (+502 5998 9468).",
    ],
  },
];

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "Information we collect",
    body: [
      "The full name of the primary guest and any accompanying guests, contact details, booking information, vehicle details when relevant, and identification documents where required for building security.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "To process and manage your booking, provide guest support, and - where a property requires it - register you with building management/security.",
    ],
  },
  {
    heading: "Sharing with third parties",
    body: [
      "We do not sell or share your personal information with third parties, except where necessary for payment processing, legal compliance, or building security registration.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this policy: hello@buenrolloescapes.com, or WhatsApp us in English (+502 3922 9168) or Spanish (+502 5998 9468).",
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
    heading: "Transaction and processing fees",
    body: [
      "Any transaction fee a bank or card processor charges on a payment or refund is non-refundable and is passed on to the guest.",
      "This applies to every booking and every refund, direct or through a third-party platform.",
    ],
  },
];
