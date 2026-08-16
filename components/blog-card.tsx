import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/lib/blog";
import type { Locale } from "@/lib/i18n/config";
import { ImagePlaceholder } from "./image-placeholder";

export function BlogCard({ post, lang }: { post: BlogPost; lang: Locale }) {
  const prefix = lang === "en" ? "" : "/es";

  return (
    <Link
      href={`${prefix}/blog/${post.slug}`}
      className="group block overflow-hidden rounded-xl border border-quetzal/10 bg-white transition-shadow hover:shadow-md"
    >
      {post.heroImage ? (
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={post.heroImage}
            alt={post.heroImageSlot}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      ) : (
        <ImagePlaceholder label={post.heroImageSlot} className="h-40 w-full" tone="mint" />
      )}
      <div className="p-4">
        <p className="text-xs uppercase tracking-wide text-sage">{post.category}</p>
        <h3 className="mt-1 font-heading text-base text-ink">{post.title}</h3>
        <p className="mt-2 text-sm text-ink/60">{post.excerpt}</p>
        <span className="mt-3 inline-block text-sm font-medium text-quetzal underline-offset-4 group-hover:underline">
          Read more
        </span>
      </div>
    </Link>
  );
}
