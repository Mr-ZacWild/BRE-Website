import { Check } from "lucide-react";

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
            {section.body.length > 1 ? (
              <ul className="mt-3 space-y-2.5">
                {section.body.map((item) => (
                  <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink/75">
                    <Check size={15} className="mt-0.5 shrink-0 text-quetzal" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-sm leading-relaxed text-ink/75">{section.body[0]}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
