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
  "/faq",
  "/contact",
  "/blog",
  "/terms",
  "/privacy",
  "/cancellation-policy",
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
