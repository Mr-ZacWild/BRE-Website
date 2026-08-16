import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/faq";

export function FaqView() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-2xl px-5 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1 className="font-heading text-3xl text-ink">FAQ</h1>
      <p className="mt-2 text-xs text-ink/50">Tap a question to expand it.</p>
      <div className="mt-6 divide-y divide-quetzal/10">
        {FAQ_ITEMS.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-heading text-base text-ink marker:content-none">
              {item.question}
              <ChevronDown
                className="shrink-0 text-quetzal/50 transition-transform duration-200 group-open:rotate-180"
                size={18}
                aria-hidden="true"
              />
            </summary>
            <p className="mt-2 text-sm text-ink/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
