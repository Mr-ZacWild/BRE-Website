import type { Metadata } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500"],
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
    <html lang="en" className={`${fraunces.variable} h-full antialiased`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@500,700&f[]=general-sans@400,500&display=swap"
        />
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
