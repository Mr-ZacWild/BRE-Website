import { ImagePlaceholder } from "./image-placeholder";

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
        privilege of feeling like a booking number instead of a person. We
        loved Guatemala enough to keep coming back &ndash; and eventually, to
        stay. Buen Rollo exists because we&rsquo;re still those travelers. We
        just happen to hold the keys now.
      </p>

      <ImagePlaceholder
        label="The Buen Rollo team photo"
        className="mt-8 h-64 w-full rounded-xl"
      />

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
        {[1, 2, 3].map((n) => (
          <ImagePlaceholder
            key={n}
            label={`Team photo ${n}`}
            className="h-36 rounded-xl"
            tone="sage"
          />
        ))}
      </div>

      <h2 className="mt-12 font-heading text-xl text-ink">Where we&rsquo;re headed</h2>
      <p className="mt-3 text-ink/75">
        We started with a handful of apartments in Guatemala City, because
        that&rsquo;s where we were. Antigua came next, because we
        couldn&rsquo;t stop going back. El Paredon came after that, because
        someone convinced us to try surfing and we never really left. Every
        place we add is somewhere we&rsquo;d actually want to stay ourselves
        &ndash; that&rsquo;s the only filter that matters to us.
      </p>
      <p className="mt-3 text-ink/75">
        We&rsquo;re not trying to build the biggest collection of stays in
        Guatemala. We&rsquo;re trying to build the one we&rsquo;d recommend to
        a friend without hesitating &ndash; and then keep adding to it, one
        good place at a time, for as long as that stays true.
      </p>
    </div>
  );
}
