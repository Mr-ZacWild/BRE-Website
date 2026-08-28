import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500"],
});

// Self-hosted instead of the previous <link> to api.fontshare.com. That
// external stylesheet was render-blocking - the browser had to fetch and
// parse it before it could even start downloading the actual font files,
// which was the single biggest chunk of the "render-blocking requests"
// hit in PageSpeed Insights (~1.8s estimated savings) and part of why
// LCP stayed slow even after the hero video got smaller. Same two
// weights each, same font-display: swap behavior, just self-hosted and
// preloaded like every other Next.js font instead of a 3rd-party request.
const cabinetGrotesk = localFont({
  variable: "--font-cabinet-grotesk",
  src: [
    { path: "./fonts/cabinet-grotesk-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/cabinet-grotesk-700.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
});

const generalSans = localFont({
  variable: "--font-general-sans",
  src: [
    { path: "./fonts/general-sans-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/general-sans-500.woff2", weight: "500", style: "normal" },
  ],
  display: "swap",
});

const description =
  "Boutique apartments and off-grid stays in Guatemala City, Antigua Guatemala and El Paredon. Book direct, meet the hosts.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Buen Rollo Escapes",
    template: "%s | Buen Rollo Escapes",
  },
  description,
  openGraph: {
    title: "Buen Rollo Escapes",
    description,
    siteName: "Buen Rollo Escapes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Buen Rollo Escapes",
    description,
  },
  // TODO: Replace with the actual Google Search Console verification
  // code. Needed to submit the sitemap, request URL removals (for the
  // old Guesty site), and monitor search performance.
  verification: {
    google: "VERIFICATION_CODE_HERE",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Buen Rollo Escapes",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+502-3922-9168",
      availableLanguage: ["English"],
    },
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+502-5998-9468",
      availableLanguage: ["Spanish"],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${cabinetGrotesk.variable} ${generalSans.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-crema text-ink">
        {children}
      </body>
    </html>
  );
}
