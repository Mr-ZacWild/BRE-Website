export interface FaqItem {
  question: string;
  answer: string;
}

// TODO: confirm final wording with Zac, especially deposit/cancellation terms.
export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What time is check-in and check-out?",
    answer:
      "Standard check-in is from 3pm and check-out is by 11am. Flexible check-in may be available - ask us on WhatsApp.",
  },
  {
    question: "Do you require a deposit?",
    answer: "Booking and deposit terms are confirmed at the time of booking via Guesty.",
  },
  {
    question: "How do I pay?",
    answer: "Payment is processed securely through Guesty when you book direct.",
  },
  {
    question: "What is your cancellation policy?",
    answer: "See our full cancellation policy page for details.",
  },
];
