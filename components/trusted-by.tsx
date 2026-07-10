import Image from "next/image";

// Real logo files from Zac's Drive folder. Height is fixed and equal for
// all of them (object-contain, width auto) so they read as visually even
// despite very different native aspect ratios (Airbnb/Google are near-
// square, Booking.com/Expedia are wide wordmarks). width/height below are
// each logo's REAL pixel dimensions - next/image uses these to set the
// CSS aspect-ratio, and getting them wrong (e.g. one size for everyone)
// makes w-auto compute the wrong width and leaves dead space in the box.
// TODO: Zac's own Guesty dashboard shows 0 connected listings on Expedia
// (vs 8 on Airbnb, 8 on Booking.com) - confirm we're actually live there
// before shipping this, or it reads as a false "also bookable on" claim.
const LOGOS = [
  { src: "/images/trust/airbnb-official-logo.png", alt: "Airbnb", width: 2000, height: 2000, big: true },
  { src: "/images/trust/booking-com-logo.png", alt: "Booking.com", width: 2500, height: 944, big: false },
  { src: "/images/trust/vrbo-logo.png", alt: "Vrbo", width: 612, height: 408, big: true },
  { src: "/images/trust/expedia-logo.png", alt: "Expedia", width: 2400, height: 680, big: false },
  { src: "/images/trust/google-logo.png", alt: "Google", width: 2200, height: 2240, big: false },
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
                  width={logo.width}
                  height={logo.height}
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
