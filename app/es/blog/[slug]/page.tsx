import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BlogPostView } from "@/components/blog-post-view";
import { BLOG_POSTS, getBlogPostBySlug } from "@/lib/blog";
import { es } from "@/lib/i18n/dictionaries/es";

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return { title: `${post.title} | Buen Rollo Escapes`, description: post.excerpt };
}

export default async function BlogPostPageEs({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return <BlogPostView post={post} lang="es" dict={es} />;
}
