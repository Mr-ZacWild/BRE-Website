import type { Locale } from "@/lib/i18n/config";
import { BLOG_POSTS } from "@/lib/blog";
import { BlogCard } from "./blog-card";

export function BlogListView({ lang }: { lang: Locale }) {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <h1 className="font-heading text-3xl text-ink">
        {lang === "es" ? "Guias y consejos de viaje" : "Guides & travel tips"}
      </h1>
      <p className="mt-3 max-w-xl text-ink/70">
        Everything we wish someone had told us before our first trip to
        Guatemala City, Antigua, El Paredon, Lake Atitlan and Tikal.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {BLOG_POSTS.map((post) => (
          <BlogCard key={post.slug} post={post} lang={lang} />
        ))}
      </div>
    </div>
  );
}
