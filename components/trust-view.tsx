import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, MessageCircle, Building2, Star, CreditCard, Lock } from "lucide-react";
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

      <div className="mt-10 space-y-8">
        <div className="flex gap-4">
          <Building2 className="mt-1 shrink-0 text-quetzal" size={22} aria-hidden="true" />
          <div>
            <h2 className="font-heading text-lg text-ink">
              {isEs ? "Somos un negocio registrado de verdad" : "We're a real, registered business"}
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              {isEs
                ? "Buen Rollo LLC es una empresa registrada en Estados Unidos que ofrece servicios de hospedaje y alojamiento en Guatemala. Podemos emitir facturas oficiales para tu estadia si las solicitas. No somos un listado anonimo - somos un negocio registrado con nombre legal e historial."
                : "Buen Rollo LLC is a U.S.-registered company providing hospitality and accommodation services in Guatemala. We can provide official invoices for your stay on request. We're not an anonymous listing - we're a registered business with a legal name and a paper trail."}
            </p>
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
                ? "Las reservas directas se procesan de forma segura a traves de Wise. Ingresas tus datos de pago directamente en la interfaz de pago de Wise - Buen Rollo Escapes no ve ni almacena la informacion de tu tarjeta."
                : "Direct bookings are processed securely through Wise. You enter your payment details directly into the Wise payment interface - Buen Rollo Escapes does not see or store your card information."}
            </p>
            <p className="mt-2 text-sm text-ink/70">
              {isEs
                ? "Tambien puedes pagar por transferencia bancaria o en efectivo para reservas de ultimo momento. En temporada alta es posible que pidamos el pago con anticipacion para asegurar tu reserva."
                : "You can also pay via bank transfer or cash for last-minute bookings. During high season we may ask for payment in advance to secure your reservation."}
            </p>
            <div className="mt-3 flex items-center gap-2 text-xs text-ink/50">
              <Image src="/images/trust/wise-logo.svg" alt="Wise" width={57} height={14} />
              <span>{isEs ? "Pagos procesados por Wise" : "Payments processed by Wise"}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Lock className="mt-1 shrink-0 text-quetzal" size={22} aria-hidden="true" />
          <div>
            <h2 className="font-heading text-lg text-ink">
              {isEs ? "Seguridad de la reserva" : "Booking Security"}
            </h2>
            <p className="mt-2 text-sm text-ink/70">
              {isEs
                ? "Buen Rollo Escapes nunca te va a pedir el numero completo de tu tarjeta, el CVV, contrasenas o codigos de verificacion por WhatsApp o correo electronico."
                : "Buen Rollo Escapes will never ask you to send your full card number, CVV, passwords or verification codes by WhatsApp or email."}
            </p>
            <p className="mt-2 text-sm text-ink/70">
              {isEs
                ? "Para reservas directas, te damos un enlace de pago seguro donde ingresas tu propia informacion de pago directamente a traves de nuestro proveedor de pagos. Buen Rollo Escapes no ve ni almacena los datos de tu tarjeta."
                : "For direct bookings, we provide a secure payment link where you enter your own payment information directly through our payment provider. Buen Rollo Escapes does not see or store your card details."}
            </p>
            <p className="mt-2 text-sm text-ink/70">
              {isEs
                ? "Si recibes una solicitud de pago de un numero o cuenta que no reconoces, contactanos a traves de los datos oficiales de este sitio antes de realizar cualquier pago."
                : "If you receive a payment request from a number or account you don't recognize, contact us through the official details on this website before making a payment."}
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
