export function LegalView({
  title,
  note,
}: {
  title: string;
  note: string;
}) {
  return (
    <div className="mx-auto max-w-2xl px-5 py-14">
      <h1 className="font-heading text-3xl text-ink">{title}</h1>
      <p className="mt-4 text-sm text-ink/60">{note}</p>
      <div className="mt-6 rounded-lg border border-dashed border-quetzal/25 p-6 text-sm text-ink/50">
        Content pending migration from the existing Google Sites policy pages.
      </div>
    </div>
  );
}
