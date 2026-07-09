import Link from "next/link";
import { PlayCircle } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { LOCATIONS } from "@/lib/properties";
import { ImagePlaceholder } from "./image-placeholder";

export function BlogPostView({
  post,
  lang,
  dict,
}: {
  post: BlogPost;
  lang: Locale;
  dict: Dictionary;
}) {
  const prefix = lang === "en" ? "" : "/es";
  const location = post.relatedLocation ? LOCATIONS[post.relatedLocation] : undefined;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    articleSection: post.category,
  };

  return (
    <article className="mx-auto max-w-2xl px-5 py-14">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p className="text-xs uppercase tracking-wide text-sage">{post.category}</p>
      <h1 className="mt-1 font-heading text-3xl text-ink sm:text-4xl">{post.title}</h1>
      <ImagePlaceholder label={post.heroImageSlot} className="mt-6 h-64 w-full rounded-xl" />

      {post.videoSlot && (
        <div className="mt-6 flex h-56 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-quetzal/25 bg-mint/20 text-center">
          <PlayCircle className="text-quetzal/40" size={28} aria-hidden="true" />
          <p className="max-w-xs px-4 text-xs text-ink/50">
            YouTube embed placeholder — {post.videoSlot}
          </p>
        </div>
      )}

      <div className="mt-8 space-y-8">
        {post.sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-heading text-lg text-ink">{section.heading}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph} className="mt-2 text-sm leading-relaxed text-ink/75">
                {paragraph}
              </p>
            ))}
            {section.imageSlot && (
              <ImagePlaceholder
                label={section.imageSlot}
                className="mt-4 h-48 w-full rounded-xl"
                tone="sage"
              />
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl bg-quetzal p-6 text-center">
        <p className="font-heading text-lg text-crema">
          {lang === "es" ? "¿Listos para reservar?" : "Ready to book your stay?"}
        </p>
        <p className="mt-1 text-sm text-crema/75">
          {location
            ? `${location.name} - ${location.blurb}`
            : "Boutique stays across Guatemala City, Antigua and El Paredon."}
        </p>
        <Link
          href={`${prefix}/properties`}
          className="mt-4 inline-block rounded-md bg-coral px-6 py-3 text-sm font-medium text-crema"
        >
          {dict.common.checkAvailability}
        </Link>
      </div>
    </article>
  );
}
