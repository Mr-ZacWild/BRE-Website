import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MessageCircle, Building2, Star, CreditCard, PlayCircle, MapPin } from "lucide-react";
import type { Locale } from "@/lib/i18n/config";
import { REVIEWS } from "@/lib/reviews";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { VERIFIED_LISTINGS } from "@/lib/social-proof";
import { FacebookIcon, InstagramIcon } from "./brand-icons";

// Real brand marks per platform - images reused from the trust marquee
// (components/trusted-by.tsx) where we already have them, inline SVG for
// the two that don't have a file yet (Facebook, Instagram).
const PLATFORM_LOGO: Record<string, { src: string; width: number; height: number } | "facebook" | "instagram"> = {
  Airbnb: { src: "/images/trust/airbnb-official-logo.png", width: 2000, height: 2000 },
  "Booking.com": { src: "/images/trust/booking-com-logo.png", width: 2500, height: 944 },
  Google: { src: "/images/trust/google-logo.png", width: 2200, height: 2240 },
  Instagram: "instagram",
  Facebook: "facebook",
};

// Real addresses Zac provided 2026-08-19, for banks/payment processors/
// anyone verifying legitimacy - not guest-facing check-in instructions.
const ADDRESSES = [
  {
    labelEn: "Head Office",
    labelEs: "Oficina Central",
    address: "75 E 3rd St, Sheridan, WY 82801, USA",
  },
  {
    labelEn: "Guatemala City",
    labelEs: "Ciudad de Guatemala",
    address: "19 Avenida 12-20 Zona 11, Ciudad de Guatemala",
  },
  {
    labelEn: "Antigua Guatemala",
    labelEs: "Antigua Guatemala",
    address: "2a Calle Poniente 38, Antigua Guatemala 03001",
  },
  {
    labelEn: "El Paredon Camping",
    labelEs: "El Paredon Camping",
    address: "CA-1, El Paredon 05007",
  },
] as const;

// Every fact on this page is real and already used elsewhere on the site -
// no invented numbers, no fabricated badges. See lib/reviews.ts (real
// Airbnb review excerpts), components/footer.tsx (LLC/registration info),
// lib/whatsapp.ts (real contact numbers).
export function TrustView({ lang }: { lang: Locale }) {
  const whatsappUrl = getWhatsAppUrl(lang);
  const isEs = lang === "es";

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-heading text-3xl text-ink">
        {isEs ? "Confianza y Seguridad" : "Trust & Safety"}
      </h1>
      <p
        className="mt-4 text-2xl italic leading-snug text-quetzal"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {isEs
          ? "Reservar directo no deberia sentirse arriesgado."
          : "Booking direct shouldn't feel like a risk."}
      </p>
      <p className="mt-5 text-ink/75">
        {isEs
          ? "Sabemos que reservar fuera de una plataforma grande puede generar dudas. Aqui esta exactamente quienes somos, como operamos y como verificarnos por tu cuenta antes de pagar un solo centavo."
          : "We know booking outside a big platform can feel uncertain. Here's exactly who we are, how we operate, and how to verify us yourself before you pay a cent."}
      </p>

      {/* TODO(Zac): swap for the real intro video once filmed - you, your
          face, and the actual properties, so guests see it matches what
          they're booking. Drop the file in public/videos/ and replace this
          block with a <video> tag, same pattern as components/hero.tsx. */}
      <div className="relative mt-8 h-56 w-full overflow-hidden rounded-xl">
        <Image
          src="/images/stock/antigua-sunset-cerro-de-la-cruz.jpg"
          alt="Antigua Guatemala at golden hour"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-ink/50 text-center">
          <PlayCircle className="text-crema" size={32} aria-hidden="true" />
          <p className="max-w-xs px-4 text-xs font-medium text-crema">
            {isEs
              ? "Video pendiente — presentacion del anfitrion y las propiedades"
              : "Video pending - host intro, face to face with the actual properties"}
          </p>
        </div>
      </div>

      <div className="mt-10 space-y-8">
        <div className="flex gap-4">
          <Building2 className="mt-1 shrink-0 text-quetzal" size={22} aria-hidden="true" />
          <div>
            <h2 className="font-heading text-lg text-ink">
              {isEs ? "Somos un negocio registrado de verdad" : "We're a real, registered business"}
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              {isEs
                ? "Buen Rollo LLC es una entidad registrada con oficina registrada en Sheridan, Wyoming. Tambien estamos registrados ante la SAT en Guatemala y podemos emitir facturas oficiales para tu estadia. No somos un listado anonimo - somos un negocio con nombre legal, registro fiscal e historial."
                : "Buen Rollo LLC is a registered entity with a registered office in Sheridan, Wyoming. We're also registered with Guatemala's SAT (the national tax authority) and can provide official invoices for your stay. We're not an anonymous listing - we're a business with a legal name, a tax registration, and a paper trail."}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <MapPin className="mt-1 shrink-0 text-quetzal" size={22} aria-hidden="true" />
          <div>
            <h2 className="font-heading text-lg text-ink">
              {isEs ? "Nuestras direcciones" : "Our addresses"}
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              {isEs
                ? "Para bancos, procesadores de pago o cualquier persona que necesite verificar donde operamos."
                : "For banks, payment processors, or anyone who needs to verify where we actually operate."}
            </p>
            <dl className="mt-3 space-y-2 text-sm text-ink/70">
              {ADDRESSES.map((location) => (
                <div key={location.labelEn}>
                  <dt className="inline font-medium text-ink">
                    {(isEs ? location.labelEs : location.labelEn) + ": "}
                  </dt>
                  <dd className="inline">{location.address}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="flex gap-4">
          <MessageCircle className="mt-1 shrink-0 text-quetzal" size={22} aria-hidden="true" />
          <div>
            <h2 className="font-heading text-lg text-ink">
              {isEs ? "Habla con una persona real antes de reservar" : "Talk to a real human before you book"}
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              {isEs
                ? "Cada consulta va directo a WhatsApp - no a un ticket de soporte generico. Preguntanos lo que quieras sobre una propiedad, un vecindario o el proceso de pago antes de comprometerte a nada."
                : "Every inquiry goes straight to WhatsApp - not a generic support ticket. Ask us anything about a property, a neighborhood, or the payment process before you commit to anything."}
            </p>
            <Link
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-quetzal underline-offset-4 hover:underline"
            >
              {isEs ? "Escribinos por WhatsApp ahora" : "Message us on WhatsApp now"}
            </Link>
          </div>
        </div>

        <div className="flex gap-4">
          <CreditCard className="mt-1 shrink-0 text-quetzal" size={22} aria-hidden="true" />
          <div>
            <h2 className="font-heading text-lg text-ink">
              {isEs ? "Como funciona el pago" : "How payment works"}
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              {isEs
                ? "Puedes pagar con un enlace de pago seguro, transferencia bancaria, o incluso efectivo si es una reserva de ultimo momento. En temporada alta solemos pedir el pago con anticipacion - no es un truco, es simplemente como protegemos tu reserva de cancelaciones de ultima hora y evitamos bloquear el calendario para otros huespedes cuando la demanda es mas alta."
                : "You can pay via a secure payment link, bank transfer, or even cash if it's a last-minute booking. During high season we usually ask for payment in advance - not a trick, just how we protect your reservation from no-shows and avoid blocking the calendar for other guests when demand is highest."}
            </p>
            <p className="mt-2 text-xs text-ink/50">
              {isEs
                ? "Esto no es poco comun: Booking.com mismo permite explicitamente a los anfitriones cobrar directamente en lugar de procesar el pago a traves de la plataforma - es una opcion estandar del sector, no algo improvisado."
                : "This isn't unusual: Booking.com itself explicitly lets hosts collect payment directly instead of processing it through the platform - it's a standard industry option, not something improvised."}{" "}
              <a
                href="https://partner.booking.com/en-us/help/policies-payments/payment-products/payments-bookingcom-faqs"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                (Booking.com {isEs ? "para socios" : "for Partners"})
              </a>
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <Star className="mt-1 shrink-0 text-quetzal" size={22} aria-hidden="true" />
          <div className="w-full">
            <h2 className="font-heading text-lg text-ink">
              {isEs ? "Verificanos de forma independiente" : "Verify us independently"}
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              {isEs
                ? "Cada propiedad que administramos directo tambien esta publicada y calificada en Airbnb, Booking.com y Google, con las mismas fotos, la misma direccion y los mismos huespedes reales dejando resenas. No tienes que confiar solo en nuestra palabra - haz clic y compara tu mismo."
                : "Every property we book direct is also listed and rated on Airbnb, Booking.com, and Google, with the same photos, the same address, and the same real guests leaving reviews. You don't have to just take our word for it - click through and compare yourself."}
            </p>
            <div className="mt-4 grid gap-2 sm:grid-cols-2">
              {VERIFIED_LISTINGS.map((listing) => {
                const logo = PLATFORM_LOGO[listing.platform];
                return (
                  <a
                    key={listing.url}
                    href={listing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-lg border border-quetzal/10 bg-white px-4 py-3 transition-colors hover:border-quetzal/30"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center">
                      {logo === "facebook" ? (
                        <FacebookIcon className="h-7 w-7" />
                      ) : logo === "instagram" ? (
                        <InstagramIcon className="h-7 w-7" />
                      ) : (
                        <Image
                          src={logo.src}
                          alt={listing.platform}
                          width={logo.width}
                          height={logo.height}
                          className="h-7 w-7 object-contain"
                        />
                      )}
                    </span>
                    <span className="flex flex-col">
                      <span className="text-sm font-medium text-ink">{listing.label}</span>
                      <span className="mt-0.5 text-xs text-ink/55">{listing.stat}</span>
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <ShieldCheck className="mt-1 shrink-0 text-quetzal" size={22} aria-hidden="true" />
          <div>
            <h2 className="font-heading text-lg text-ink">
              {isEs ? "Nuestras politicas son publicas" : "Our policies are public"}
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              {isEs
                ? "Nuestra politica de cancelacion, terminos y privacidad estan publicados en este sitio, no escondidos ni enviados solo despues de pagar."
                : "Our cancellation policy, terms, and privacy practices are published on this site, not hidden or sent to you only after you've paid."}
            </p>
            <div className="mt-3 flex gap-4 text-sm">
              <Link
                href={isEs ? "/es/cancellation-policy" : "/cancellation-policy"}
                className="font-medium text-quetzal underline-offset-4 hover:underline"
              >
                {isEs ? "Politica de cancelacion" : "Cancellation policy"}
              </Link>
              <Link
                href={isEs ? "/es/terms" : "/terms"}
                className="font-medium text-quetzal underline-offset-4 hover:underline"
              >
                {isEs ? "Terminos" : "Terms"}
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-14 font-heading text-xl text-ink">
        {isEs ? "Lo que dicen huespedes reales" : "What real guests say"}
      </h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {REVIEWS.map((review) => (
          <div key={review.name} className="rounded-xl border border-quetzal/10 bg-white p-5">
            <p className="text-sm italic text-ink/75">&ldquo;{review.quote}&rdquo;</p>
            <p className="mt-3 text-xs font-medium text-ink">
              {review.name}, {review.country}
            </p>
            <p className="text-xs text-ink/50">{review.property}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
