import { Users, Star, ShieldCheck, Lock } from "lucide-react";

// Confirmed by Zac on 2026-07-09.
const STATS = [
  { icon: Users, label: "Thousands+ guests hosted" },
  { icon: Star, label: "4.95 on Airbnb" },
  { icon: ShieldCheck, label: "Superhost" },
  { icon: Lock, label: "Secure payment options available" },
];

export function TrustBar() {
  return (
    <div className="border-b border-quetzal/10 bg-crema">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-2.5 px-5 py-5">
        {STATS.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-1.5 rounded-full border border-quetzal/15 bg-white px-3.5 py-1.5 text-xs font-medium text-quetzal sm:text-sm"
          >
            <Icon size={14} className="text-sage" aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
