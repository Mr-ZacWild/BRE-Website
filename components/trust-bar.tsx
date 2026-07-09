import { Users, Star, ShieldCheck, Lock } from "lucide-react";

// TODO: confirm these figures with Zac before launch - do not ship invented stats.
const STATS = [
  { icon: Users, label: "500+ guests hosted" },
  { icon: Star, label: "4.9 on Airbnb" },
  { icon: ShieldCheck, label: "Superhost" },
  { icon: Lock, label: "Secure payment via Guesty" },
];

export function TrustBar() {
  return (
    <div className="border-b border-quetzal/10 bg-crema">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-x-8 gap-y-3 px-5 py-5">
        {STATS.map(({ icon: Icon, label }) => (
          <span
            key={label}
            className="flex items-center gap-1.5 text-xs text-quetzal sm:text-sm"
          >
            <Icon size={15} aria-hidden="true" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
