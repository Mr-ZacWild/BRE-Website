export interface FaqItem {
  question: string;
  answer: string;
}

// TODO: confirm final wording with Zac, especially anything with a
// specific number (deposit, minimum stay, quiet hours) - some of these
// answers are reasonable defaults, not confirmed policy.
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Standard check-in is from 3pm and check-out is by 11am. Flexible check-in may be available - ask us on WhatsApp.",
  },
  {
    question: "Do you require a deposit?",
    answer: "Booking and deposit terms are confirmed at the time of booking.",
  },
  {
    question: "How do I pay, and is it safe?",
    answer:
      "You can pay via a secure payment link, bank transfer, or cash for last-minute bookings - see our Trust & Safety page for details. We never ask for your card details over WhatsApp or chat.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Full refund for cancellations at least 48 hours before check-in. See our full Cancellation Policy page for details, including bank/processing fees.",
  },
  {
    question: "Is Guatemala safe to visit?",
    answer:
      "Yes, particularly in the areas we host - Zona 11 and Zona 14 in Guatemala City, and central Antigua are well-established, well-trafficked areas. As anywhere, use normal travel sense (don't flash valuables late at night). We're happy to share specific area tips on WhatsApp before you arrive.",
  },
  {
    question: "Do I need to speak Spanish?",
    answer: "No - our hosts speak both English and Spanish, and respond quickly on WhatsApp either way.",
  },
  {
    question: "Is there wifi?",
    answer: "Yes, all properties include wifi.",
  },
  {
    question: "Is tap water safe to drink?",
    answer:
      "We recommend sticking to bottled or filtered water, as is standard practice for visitors throughout Guatemala.",
  },
  {
    question: "Is parking available?",
    answer: "It depends on the property - ask us on WhatsApp before booking if parking is a must.",
  },
  {
    question: "Can I check in late at night, or if my flight is delayed?",
    answer:
      "Yes - message us on WhatsApp with your updated arrival time and we'll coordinate late check-in.",
  },
  {
    question: "Do you offer airport pickup?",
    answer: "Not included by default, but ask us on WhatsApp - we can point you to a reliable option.",
  },
  {
    question: "Is there a minimum number of nights?",
    answer: "This varies by property and season - check availability for your dates or ask us directly.",
  },
  {
    question: "Are kids welcome?",
    answer: "Yes, our apartments and houses are family friendly.",
  },
  {
    question: "Are pets allowed?",
    answer: "Not at most properties - message us on WhatsApp if you're traveling with a pet and we'll confirm.",
  },
  {
    question: "Can I smoke, or host a party/event?",
    answer:
      "No smoking indoors, and no parties or events - this keeps things comfortable for you, our neighbors, and the next guest.",
  },
  {
    question: "What if something breaks or stops working during my stay?",
    answer: "Message us on WhatsApp right away - we respond fast and will sort it out or send someone.",
  },
  {
    question: "Do I need to bring my own towels, sheets, or toiletries?",
    answer: "Towels and bed linens are provided. Basic toiletries (soap, shampoo) usually are too, but pack your own just in case for longer stays.",
  },
  {
    question: "Is there a kitchen I can cook in?",
    answer: "Yes - see each property's amenities for details on what's included (stovetop, fridge, basic cookware).",
  },
  {
    question: "What currency should I bring, and can I pay with card locally?",
    answer:
      "Guatemala uses the Quetzal (GTQ). Cards are widely accepted in Guatemala City and Antigua, but it's worth carrying some cash for small purchases and tips.",
  },
  {
    question: "I'm locked out or lost my key - what do I do?",
    answer: "Message us on WhatsApp immediately - we're quick to respond and will get you back in.",
  },
  {
    question: "Can I extend my stay once I've already checked in?",
    answer: "Often yes, subject to availability - just ask us on WhatsApp as early as you can.",
  },
];
