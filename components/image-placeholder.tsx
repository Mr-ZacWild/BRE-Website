import { ImageIcon } from "lucide-react";

/**
 * Stand-in for real photography. Swap for next/image once Zac supplies
 * the photo set - keeps layout/aspect-ratio work usable in the meantime.
 */
export function ImagePlaceholder({
  label,
  className = "",
  tone = "mint",
}: {
  label: string;
  className?: string;
  tone?: "mint" | "sage" | "quetzal";
}) {
  const toneClass = {
    mint: "bg-mint/60",
    sage: "bg-sage/50",
    quetzal: "bg-quetzal/80",
  }[tone];

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${toneClass} ${className}`}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="opacity-40" size={22} aria-hidden="true" />
      <span className="text-xs text-ink/50 px-2 text-center">{label}</span>
    </div>
  );
}
