import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The bare domain (buenrolloescapes.com) and www.buenrolloescapes.com
  // are both registered on the Vercel project and both serve the site -
  // there was no redirect between them. Google Search Console flagged
  // this as "Duplicate without user-selected canonical": two live URLs
  // with identical content, splitting indexing/ranking value across
  // both instead of consolidating it onto the one canonical URL
  // (lib/site.ts SITE_URL is www, so that's the one we keep). This
  // 301s the bare domain to www, permanently, on every path.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "buenrolloescapes.com" }],
        destination: "https://www.buenrolloescapes.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
