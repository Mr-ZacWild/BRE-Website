import Image from "next/image";
import Link from "next/link";
import { PlayCircle } from "lucide-react";
import type { BlogPost } from "@/lib/blog";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/en";
import { LOCATIONS, getPropertyBySlug } from "@/lib/properties";
import { getWhatsAppUrl } from "@/lib/whatsapp";
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
  const relatedProperties = (post.relatedProperties ?? [])
    .map((slug) => getPropertyBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

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
      {post.heroImage ? (
        <div className="relative mt-6 h-64 w-full overflow-hidden rounded-xl">
          <Image
            src={post.heroImage}
            alt={post.heroImageSlot}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>
      ) : (
        <ImagePlaceholder label={post.heroImageSlot} className="mt-6 h-64 w-full rounded-xl" />
      )}

      {post.videoId ? (
        <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl">
          <iframe
            src={`https://www.youtube.com/embed/${post.videoId}`}
            title={post.videoSlot ?? post.title}
            className="absolute inset-0 h-full w-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      ) : (
        post.videoSlot && (
          <div className="mt-6 flex h-56 flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-quetzal/25 bg-mint/20 text-center">
            <PlayCircle className="text-quetzal/40" size={28} aria-hidden="true" />
            <p className="max-w-xs px-4 text-xs text-ink/50">
              YouTube embed placeholder — {post.videoSlot}
            </p>
          </div>
        )
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
              section.image ? (
                <div className="relative mt-4 h-48 w-full overflow-hidden rounded-xl">
                  <Image
                    src={section.image}
                    alt={section.imageSlot}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 672px"
                  />
                </div>
              ) : (
                <ImagePlaceholder
                  label={section.imageSlot}
                  className="mt-4 h-48 w-full rounded-xl"
                  tone="sage"
                />
              )
            )}
          </div>
        ))}
      </div>

      {relatedProperties.length > 0 && (
        <div className="mt-10 border-t border-quetzal/10 pt-6">
          <h2 className="font-heading text-lg text-ink">
            {lang === "es" ? "Alojamiento relacionado" : "Stay here"}
          </h2>
          <ul className="mt-3 space-y-2">
            {relatedProperties.map((property) => (
              <li key={property.slug}>
                <Link
                  href={`${prefix}/properties/${property.slug}`}
                  className="text-sm font-medium text-quetzal underline-offset-4 hover:underline"
                >
                  {property.name} - {property.neighborhood}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="mt-10 rounded-xl bg-quetzal p-6 text-center">
        <p className="font-heading text-lg text-crema">
          {lang === "es" ? "¿Listos para reservar?" : "Ready to book your stay?"}
        </p>
        <p className="mt-1 text-sm text-crema/75">
          {location
            ? `${location.name} - ${location.blurb}`
            : "Boutique stays across Guatemala City, Antigua and El Paredon."}
        </p>
        <a
          href={getWhatsAppUrl(lang)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block rounded-md bg-coral px-6 py-3 text-sm font-medium text-crema"
        >
          {dict.common.checkAvailability}
        </a>
      </div>
    </article>
  );
}
