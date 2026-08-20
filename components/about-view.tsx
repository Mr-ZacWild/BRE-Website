import Image from "next/image";

// Real, relevant Guatemala imagery standing in until real team/property
// photos are supplied - deliberately NOT stock photos of strangers'
// faces pretending to be the team, since that's a different, worse kind
// of misleading than scenery. Swap for real team photos when available.
const TEAM_PHOTO = "/images/stock/antigua-sunset-cerro-de-la-cruz.jpg";
const GRID_PHOTOS = [
  "/images/stock/lake-atitlan-dock-volcano.jpg",
  "/videos/hero-poster.jpg",
  "/images/stock/guatemala-city-aerial.jpg",
];

export function AboutView() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-heading text-3xl text-ink">About Buen Rollo</h1>

      <p
        className="mt-4 text-2xl italic leading-snug text-quetzal"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        Before we were hosts, we were guests.
      </p>

      <p className="mt-5 text-ink/75">
        Guests who got tired of listings that all looked the same. Of check-in
        instructions buried three apps deep. Of paying a platform fee for the
        privilege of feeling like a booking number instead of a person.
      </p>
      <p className="mt-3 text-ink/75">
        Buen Rollo Escapes is a small, independently owned hospitality
        business creating comfortable, thoughtfully designed stays in
        Guatemala. We&rsquo;re not a hotel chain &ndash; every property is
        personally selected, furnished and cared for with the goal of making
        every stay comfortable, straightforward and genuinely enjoyable.
      </p>
      <p className="mt-3 text-ink/75">
        We&rsquo;re a small team, which means we can pay attention to the
        details that larger operators sometimes miss &ndash; from carefully
        prepared spaces to responsive guest support.
      </p>

      <div className="relative mt-8 h-64 w-full overflow-hidden rounded-xl">
        <Image src={TEAM_PHOTO} alt="Antigua Guatemala" fill className="object-cover" priority />
      </div>

      <h2 className="mt-12 font-heading text-xl text-ink">Why these colors</h2>
      <p className="mt-3 text-ink/75">
        The deep green running through this site isn&rsquo;t just a color we
        liked &ndash; it&rsquo;s the quetzal. Guatemala&rsquo;s national bird,
        its national currency, and one of the only birds in the world with
        feathers iridescent enough to look painted on. The Maya considered it
        sacred. Legend says a quetzal can&rsquo;t survive captivity &ndash; it
        needs open sky. That&rsquo;s not a bad way to think about travel,
        either.
      </p>
      <p className="mt-3 text-ink/75">
        The warmer tones &ndash; the coral, the cream &ndash; are the other
        half of the country: sunsets over the black-sand beach in El Paredon,
        the warm stucco walls of Antigua at golden hour. Guatemala in one
        palette.
      </p>

      <h2 className="mt-10 font-heading text-xl text-ink">
        Why a hummingbird, not a quetzal
      </h2>
      <p className="mt-3 text-ink/75">
        The obvious choice for a Guatemalan logo is the quetzal &ndash;
        it&rsquo;s on the flag, the money, the coat of arms. We wanted
        something more personal. In Maya belief, the hummingbird carries a
        different meaning entirely: not majesty, but joy. A messenger. Good
        luck, if one crosses your path. It&rsquo;s also, pound for pound, one
        of the hardest-working travelers on earth &ndash; always in motion,
        covering enormous distances on a body built for almost nothing,
        chasing warmth and good nectar wherever it can find it.
      </p>
      <p className="mt-3 text-ink/75">
        That&rsquo;s who we wanted our logo to be. Not a national symbol
        looking down from a flag &ndash; a small, curious, relentless
        traveler, always chasing the good stuff. Good vibes travel well. So do
        hummingbirds.
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {GRID_PHOTOS.map((src) => (
          <div key={src} className="relative h-36 overflow-hidden rounded-xl">
            <Image src={src} alt="Guatemala" fill className="object-cover" />
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-heading text-xl text-ink">Where we&rsquo;re headed</h2>
      <p className="mt-3 text-ink/75">
        We started with a handful of apartments in Guatemala City. Antigua
        came next. El Paredon came after that. Every place we add is
        somewhere we&rsquo;d actually want to stay &ndash; that&rsquo;s the
        only filter that matters.
      </p>
      <p className="mt-3 text-ink/75">
        We&rsquo;re not trying to build the biggest collection of stays in
        Guatemala. We&rsquo;re trying to build the one we&rsquo;d recommend to
        a friend without hesitating &ndash; and then keep adding to it, one
        good place at a time.
      </p>
    </div>
  );
}
