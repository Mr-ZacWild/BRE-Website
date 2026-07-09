import { FAQ_ITEMS } from "@/lib/faq";

export function FaqView() {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14">
      <h1 className="font-heading text-3xl text-ink">FAQ</h1>
      <div className="mt-6 divide-y divide-quetzal/10">
        {FAQ_ITEMS.map((item) => (
          <details key={item.question} className="group py-4">
            <summary className="cursor-pointer list-none font-heading text-base text-ink marker:content-none">
              {item.question}
            </summary>
            <p className="mt-2 text-sm text-ink/70">{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
