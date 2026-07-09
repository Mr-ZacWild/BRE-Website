@AGENTS.md

# Buen Rollo Escapes — Direct Booking Website

Rebuild of buenrolloescapes.com (previously a Google Sites page). Boutique
short-term rental company: luxury apartments in Guatemala City (Zona 11 +
Zona 14), a loft and 3BR house in Antigua Guatemala, and off-grid camping
in El Paredon. The site's one job: make a stranger trust us enough to book
direct instead of through Airbnb.

## Stack

- Next.js (App Router), Tailwind CSS v4, deployed on Vercel.
- Static/SSG wherever possible.
- `next/image` for photography once real photos exist (currently
  `components/image-placeholder.tsx` stands in).
- i18n: English routes are unprefixed (`/`, `/properties`, ...), Spanish
  routes live under `/es` (`/es`, `/es/properties`, ...) via Next.js route
  groups — see `app/(en)/` and `app/es/`, no proxy/middleware involved.
  Chrome (nav, footer, buttons, WhatsApp) is localized via
  `lib/i18n/dictionaries/{en,es}.ts`. Page-body marketing copy under `/es`
  still renders in English pending a real Guatemalan-Spanish translation
  pass — do not machine-translate it, ask Zac or do it deliberately.
- No CMS. Property data lives in `lib/properties.ts`.

## Booking architecture — do not over-build

PMS is Guesty (basic plan). Do **not** build a custom booking/payment/calendar
engine.

- Phase 1 (current): every property's CTA deep-links to its Guesty booking
  page via `getGuestyBookingUrl()` in `lib/guesty.ts`. Secondary CTA is
  WhatsApp via `getWhatsAppUrl()` in `lib/whatsapp.ts` (EN +502 3922 9168 /
  ES +502 5998 9468).
- Phase 2 (later, not now): `getAvailability()` in `lib/guesty.ts` is a
  deliberate stub for the Guesty Open API. A real client ID/secret exists
  (given by Zac) — do not implement this until explicitly asked, and store
  credentials in a gitignored `.env.local`, never in source.

## Pricing — do not show prices

Pricing is dynamic (PriceLabs) and changes daily by season/demand. Never
render a nightly rate anywhere on the site. Every booking CTA reads "Check
availability" / "Ver disponibilidad" instead of a price.

## Design system

- Colors (Tailwind v4 `@theme` in `app/globals.css`): `quetzal` #1e3a34
  (nav/footer/headings/primary buttons), `crema` #faf6ef (page bg, never
  stark white), `coral` #ff6f61 (booking CTAs only — used sparingly),
  `sage` #899e8f, `mint` #bad6be, `ink` #0e1512 (body text).
- Type: Cabinet Grotesk + General Sans via Fontshare (`<link>` in
  `app/layout.tsx`), loaded as `font-heading` / `font-body`. One serif
  accent, Fraunces (`next/font/google`), for hero/editorial lines only —
  `font-family: var(--font-accent)`.
- Feel: warm, editorial, photography-led boutique hotel (Habitas /
  Hoxton-style full-bleed video hero), not an Airbnb clone.
- Dark quetzal sections alternate with crema sections. Coral appears
  sparingly (roughly 2 CTA moments per page), never as a dominant color.
- Mobile-first.

## Trust

- Trust bar stats in `components/trust-bar.tsx` and reviews in
  `lib/reviews.ts` are **placeholders** — confirm real numbers and get a
  real Airbnb review export from Zac before shipping. Never invent stats.
- Real photography only, no stock — currently placeholders throughout.
- Schema.org `LodgingBusiness` JSON-LD is wired up per property in
  `components/property-detail-view.tsx`.

## Quality floor

Lighthouse 90+ mobile, semantic HTML, alt text on all images, visible
focus states (see `:focus-visible` in `app/globals.css`), respect
`prefers-reduced-motion`. Pages should degrade reasonably with JS
disabled — the FAQ accordion uses native `<details>` for this reason; the
mobile nav menu currently needs JS and is a known gap.
