import Image from "next/image";

// Text wordmarks for now (not official logo files) to avoid implying an
// endorsement/partnership we don't have on file - swap for real logo
// assets once Zac confirms usage rights, or drop any platform we're not
// actually listed on. "Google" here means Google Search/Maps presence,
// not a booking platform - confirm intent before shipping.
const PLATFORMS = ["Booking.com", "Vrbo", "Expedia", "Google"];

export function TrustedBy() {
  const track = [...PLATFORMS];

  return (
    <div className="overflow-hidden border-b border-quetzal/10 bg-crema py-6">
      <p className="text-center text-xs uppercase tracking-widest text-sage">
        Also bookable on
      </p>
      <div className="group relative mt-4 overflow-hidden">
        <div className="flex w-max animate-[marquee_22s_linear_infinite] items-center gap-12 group-hover:[animation-play-state:paused]">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 items-center gap-12 pr-12">
              <Image
                src="/images/trust/airbnb-official-logo.png"
                alt="Airbnb"
                width={22}
                height={22}
                className="h-6 w-6 object-contain opacity-70"
              />
              {track.map((name) => (
                <span
                  key={name}
                  className="whitespace-nowrap font-heading text-lg text-quetzal/50"
                >
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
