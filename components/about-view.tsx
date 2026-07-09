import { ImagePlaceholder } from "./image-placeholder";

export function AboutView() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-heading text-3xl text-ink">About Buen Rollo</h1>
      <p className="mt-4 text-ink/75">
        Buen Rollo started as a handful of apartments in Guatemala City and
        grew into a small collection of stays across Guatemala City, Antigua
        Guatemala and El Paredon. We host directly - no call center, no
        faceless management company. TODO: replace with the real founding
        story.
      </p>

      <ImagePlaceholder
        label="The Buen Rollo team photo"
        className="mt-8 h-64 w-full rounded-xl"
      />

      <h2 className="mt-10 font-heading text-xl text-ink">The hosts</h2>
      <p className="mt-3 text-ink/75">
        TODO: intro to the hosts, plus the hummingbird story behind the logo.
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
    </div>
  );
}
