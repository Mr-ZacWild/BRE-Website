export interface LegalSection {
  heading?: string;
  body: string[];
}

export function LegalView({
  title,
  note,
  sections,
}: {
  title: string;
  note?: string;
  sections: LegalSection[];
}) {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14">
      <h1 className="font-heading text-3xl text-ink">{title}</h1>
      {note && <p className="mt-4 text-sm text-ink/60">{note}</p>}
      <div className="mt-8 space-y-8">
        {sections.map((section) => (
          <div key={section.heading ?? section.body[0]}>
            {section.heading && (
              <h2 className="font-heading text-base text-ink">{section.heading}</h2>
            )}
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-2 text-sm leading-relaxed text-ink/75">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
