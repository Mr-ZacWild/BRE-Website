export function EmbeddedForm({
  src,
  title,
}: {
  src?: string;
  title: string;
}) {
  if (!src) {
    return (
      <div className="mx-auto max-w-2xl px-5 py-14">
        <div className="rounded-lg border border-dashed border-quetzal/25 p-8 text-center text-sm text-ink/50">
          Form embed pending - waiting on the Tally form URL.
        </div>
      </div>
    );
  }

  return <iframe src={src} title={title} className="block h-dvh w-full border-0" />;
}
