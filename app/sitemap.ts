import type { MetadataRoute } from "next";
import { PROPERTIES } from "@/lib/properties";
import { BLOG_POSTS } from "@/lib/blog";
import { SITE_URL } from "@/lib/site";

const STATIC_PATHS = [
  "",
  "/properties",
  "/antigua",
  "/guatemala-city",
  "/el-paredon",
  "/about",
  "/trust",
  "/faq",
  "/contact",
  "/blog",
  // Terms/privacy/cancellation-policy are deliberately left out - they're
  // set to noindex (see their page.tsx metadata) so Google's attention
  // stays on money pages, not legal boilerplate.
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const path of STATIC_PATHS) {
    entries.push({ url: `${SITE_URL}${path}` });
    entries.push({ url: `${SITE_URL}/es${path}` });
  }

  for (const property of PROPERTIES) {
    entries.push({ url: `${SITE_URL}/properties/${property.slug}` });
    entries.push({ url: `${SITE_URL}/es/properties/${property.slug}` });
  }

  for (const post of BLOG_POSTS) {
    entries.push({ url: `${SITE_URL}/blog/${post.slug}` });
    entries.push({ url: `${SITE_URL}/es/blog/${post.slug}` });
  }

  return entries;
}
