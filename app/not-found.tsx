import Link from "next/link";

// Fallback for the rare case a 404 doesn't resolve within (en) or es -
// those have the full Nav/Footer chrome via their own not-found.tsx.
// This one can't assume that chrome exists, so it's self-contained.
export default function RootNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-5 text-center">
      <p
        className="text-6xl italic text-quetzal"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        404
      </p>
      <h1 className="mt-4 font-heading text-2xl text-ink">This page wandered off</h1>
      <Link href="/" className="mt-6 rounded-md bg-coral px-6 py-3 text-sm font-medium text-crema">
        Back to home
      </Link>
    </div>
  );
}
