import Image from "next/image";

// Real logo files from Zac's Drive folder. Height is fixed and equal for
// all of them (object-contain, width auto) so they read as visually even
// despite very different native aspect ratios (Airbnb/Google are near-
// square, Booking.com/Expedia are wide wordmarks).
// TODO: Zac's own Guesty dashboard shows 0 connected listings on Expedia
// (vs 8 on Airbnb, 8 on Booking.com) - confirm we're actually live there
// before shipping this, or it reads as a false "also bookable on" claim.
const LOGOS = [
  { src: "/images/trust/airbnb-official-logo.png", alt: "Airbnb", big: true },
  { src: "/images/trust/booking-com-logo.png", alt: "Booking.com", big: false },
  { src: "/images/trust/vrbo-logo.png", alt: "Vrbo", big: true },
  { src: "/images/trust/expedia-logo.png", alt: "Expedia", big: false },
  { src: "/images/trust/google-logo.png", alt: "Google", big: false },
];

export function TrustedBy() {
  return (
    <div className="overflow-hidden border-b border-quetzal/10 bg-crema py-6">
      <p className="text-center text-xs uppercase tracking-widest text-sage">
        Also bookable on
      </p>
      <div className="group relative mt-6 overflow-hidden">
        <div className="flex w-max animate-[marquee_26s_linear_infinite] items-center group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-16 pr-16">
              {LOGOS.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={64}
                  className={`w-auto object-contain opacity-70 ${
                    logo.big ? "h-14 sm:h-16" : "h-10 sm:h-12"
                  }`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
