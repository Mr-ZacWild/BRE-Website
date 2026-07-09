import { Tag, Clock, MessageCircle, ReceiptText } from "lucide-react";

const REASONS = [
  { icon: Tag, label: "Best available rate" },
  { icon: Clock, label: "Flexible check-in" },
  { icon: MessageCircle, label: "Direct line to hosts" },
  { icon: ReceiptText, label: "No platform fees" },
];

export function WhyBookDirect() {
  return (
    <section className="bg-quetzal py-16">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <p className="text-xs uppercase tracking-widest text-mint">
          Why book direct
        </p>
        <h2 className="mt-2 font-heading text-2xl text-crema sm:text-3xl">
          Skip the platform, keep the good vibes
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {REASONS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <Icon className="text-mint" size={24} aria-hidden="true" />
              <p className="text-sm text-crema">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
