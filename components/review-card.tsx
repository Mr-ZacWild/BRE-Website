import { Star } from "lucide-react";
import type { Review } from "@/lib/reviews";

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="rounded-lg border border-crema/15 bg-crema/5 p-5">
      <div className="flex gap-0.5 text-coral" aria-hidden="true">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
        ))}
      </div>
      <p className="mt-3 text-sm italic text-crema/90">&ldquo;{review.quote}&rdquo;</p>
      <p className="mt-3 text-xs text-mint">
        — {review.name}, {review.country} · {review.property}
      </p>
    </div>
  );
}
