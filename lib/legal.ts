import type { LegalSection } from "@/components/legal-view";

// Migrated from the live Google Sites pages on 2026-07-09, then expanded
// 2026-08-16 with standard clauses a short-term rental business normally
// needs (age requirement, force majeure, governing law, data retention,
// etc.) - not a verbatim legal template, written specifically for how
// Buen Rollo actually operates (direct WhatsApp booking, secure payment
// link/bank transfer/cash, Guatemala properties, Wyoming LLC).
//
// IMPORTANT: this is a content/completeness pass, not a substitute for a
// real attorney. Buen Rollo LLC is a Wyoming entity operating properties
// in Guatemala and taking payment (including cash) from international
// guests - that's a real cross-border liability/tax situation. Have an
// actual lawyer review this, especially Liability, Damages, Cancellations
// and the governing-law clause, before leaning on it if a dispute ever
// happens.
//
// Spanish versions below (2026-08-20) are a real translation, not
// machine output - written to match the same "tú" voice already used
// across the rest of the /es site. Same lawyer-review caveat applies
// to these as to the English originals above.

export const TERMS_SECTIONS: LegalSection[] = [
  {
    heading: "Who you're booking with",
    body: [
      "These terms are between you and Buen Rollo LLC, a U.S.-registered company providing accommodation services in Guatemala. We can issue official invoices for direct bookings on request. By booking a stay with us - through this website, WhatsApp, or a third-party platform - you agree to these terms.",
    ],
  },
  {
    heading: "Bookings",
    body: [
      "A reservation is only guaranteed once payment has been confirmed. Bookings made direct with us can be paid via a secure payment link, bank transfer, or cash for last-minute reservations - we'll confirm the details with you directly on WhatsApp.",
      "The primary guest booking a stay must be at least 18 years old and will be held responsible for the conduct of everyone in their party.",
      "During high season, we may require payment in advance of your stay to confirm the reservation and hold the calendar for you.",
    ],
  },
  {
    heading: "Check-in and check-out",
    body: [
      "Standard check-in is 3:00pm and check-out is 11:00am. Early or late check-in/out can be arranged on request, subject to availability. Valid photo identification may be required at check-in, particularly where building security registration applies.",
    ],
  },
  {
    heading: "Cancellations and refunds",
    body: [
      "If you booked through a third-party platform (Airbnb, Booking.com, etc.), that platform's cancellation policy applies.",
      "If you booked direct with us, you'll receive a full refund for cancellations made at least 48 hours before your scheduled check-in. Cancellations made within 48 hours of check-in, and no-shows, are non-refundable.",
      "Approved refunds are returned to your original payment method. Processing time varies by payment provider.",
      "Bank and payment-processing fees are never refundable. Any transaction fee charged by a bank or card processor on a refund is passed on to the guest, regardless of booking method. See our full Cancellation Policy for details.",
    ],
  },
  {
    heading: "Occupancy and guest responsibilities",
    body: [
      "The number of guests staying may never exceed the maximum occupancy stated for the property at the time of booking. Guests are expected to respect the property and house rules: no parties or events, no smoking indoors, and reasonable noise levels for a residential building. Local laws and building regulations apply throughout your stay.",
    ],
  },
  {
    heading: "Damages",
    body: [
      "Guests are responsible for any damage caused to the property during their stay, beyond normal wear and tear. Additional charges may apply to cover repair or replacement costs, and will be communicated to the guest directly.",
    ],
  },
  {
    heading: "Liability",
    body: [
      "Buen Rollo LLC is not responsible for theft, personal injury, or service interruptions (power, water, internet, etc.) that are outside of our reasonable control.",
      "Our total liability in connection with any booking shall not exceed the total amount paid by the guest for that booking.",
    ],
  },
  {
    heading: "Force majeure",
    body: [
      "Neither party is liable for a failure to perform caused by events outside their reasonable control - natural disasters, government action, civil unrest, or similar circumstances. Where a stay is affected by such an event, we'll work with you in good faith on rescheduling or a partial refund where reasonable.",
    ],
  },
  {
    heading: "Right to refuse service",
    body: [
      "We reserve the right to cancel a booking, or end a stay early, where these terms or house rules are violated.",
    ],
  },
  {
    heading: "Governing law",
    body: [
      "These terms are governed by the laws of Guatemala, where the properties are located, without prejudice to any mandatory consumer protections that apply in your own country of residence.",
    ],
  },
  {
    heading: "Dispute resolution",
    body: [
      "Any dispute arising from these terms should first be resolved through good-faith negotiation between the guest and Buen Rollo LLC. If unresolved, disputes shall be submitted to the courts of Guatemala City, Guatemala.",
    ],
  },
  {
    heading: "Changes to these terms",
    body: [
      "We may update these terms from time to time. The version in effect at the time you complete a booking is the one that applies to that stay.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about these terms: WhatsApp us in English (+502 3922 9168) or Spanish (+502 5998 9468).",
    ],
  },
  {
    heading: "Company Information",
    body: [
      "Buen Rollo Escapes is operated by Buen Rollo LLC, a company registered in Wyoming, United States, providing hospitality and accommodation services in Guatemala.",
      "For legal or business correspondence, contact us through the details on our Contact page.",
    ],
  },
];

export const TERMS_SECTIONS_ES: LegalSection[] = [
  {
    heading: "Con quién estás reservando",
    body: [
      "Estos términos son un acuerdo entre tú y Buen Rollo LLC, una empresa registrada en Estados Unidos que ofrece servicios de alojamiento en Guatemala. Podemos emitir facturas oficiales para reservas directas si las solicitas. Al reservar una estadía con nosotros - a través de este sitio, WhatsApp, o una plataforma externa - aceptas estos términos.",
    ],
  },
  {
    heading: "Reservas",
    body: [
      "Una reserva solo queda garantizada una vez confirmado el pago. Las reservas hechas directo con nosotros se pueden pagar con un enlace de pago seguro, transferencia bancaria, o efectivo en caso de reservas de último momento - te confirmamos los detalles directamente por WhatsApp.",
      "El huésped principal que hace la reserva debe tener al menos 18 años y será responsable por la conducta de todas las personas en su grupo.",
      "En temporada alta, es posible que pidamos el pago con anticipación para confirmar la reserva y bloquear el calendario a tu nombre.",
    ],
  },
  {
    heading: "Check-in y check-out",
    body: [
      "El check-in estándar es a las 3:00pm y el check-out a las 11:00am. Se puede coordinar check-in o check-out anticipado o tardío bajo solicitud, sujeto a disponibilidad. Es posible que se requiera identificación con fotografía vigente al momento del check-in, particularmente donde aplique el registro de seguridad del edificio.",
    ],
  },
  {
    heading: "Cancelaciones y reembolsos",
    body: [
      "Si reservaste a través de una plataforma externa (Airbnb, Booking.com, etc.), aplica la política de cancelación de esa plataforma.",
      "Si reservaste directo con nosotros, recibes un reembolso completo por cancelaciones hechas al menos 48 horas antes del check-in programado. Las cancelaciones dentro de las 48 horas previas al check-in, y las no presentaciones (no-shows), no son reembolsables.",
      "Los reembolsos aprobados se devuelven al método de pago original. El tiempo de procesamiento varía según el proveedor de pago.",
      "Las comisiones bancarias y de procesamiento de pago nunca son reembolsables. Cualquier comisión que cobre un banco o procesador de tarjetas sobre un reembolso se traslada al huésped, sin importar el método de reserva. Consulta nuestra Política de Cancelación completa para más detalles.",
    ],
  },
  {
    heading: "Ocupación y responsabilidades del huésped",
    body: [
      "El número de huéspedes hospedados nunca debe exceder la ocupación máxima indicada para la propiedad al momento de la reserva. Se espera que los huéspedes respeten la propiedad y las reglas de la casa: no se permiten fiestas ni eventos, no fumar en interiores, y mantener niveles de ruido razonables para un edificio residencial. Las leyes locales y los reglamentos del edificio aplican durante toda tu estadía.",
    ],
  },
  {
    heading: "Daños",
    body: [
      "Los huéspedes son responsables de cualquier daño causado a la propiedad durante su estadía, más allá del desgaste normal. Se pueden aplicar cargos adicionales para cubrir costos de reparación o reemplazo, y se comunicarán directamente al huésped.",
    ],
  },
  {
    heading: "Responsabilidad",
    body: [
      "Buen Rollo LLC no se hace responsable por robos, lesiones personales, o interrupciones de servicio (electricidad, agua, internet, etc.) que estén fuera de nuestro control razonable.",
      "Nuestra responsabilidad total en relación con cualquier reserva no excederá el monto total pagado por el huésped por esa reserva.",
    ],
  },
  {
    heading: "Fuerza mayor",
    body: [
      "Ninguna de las partes es responsable por el incumplimiento causado por eventos fuera de su control razonable - desastres naturales, acción gubernamental, disturbios civiles, o circunstancias similares. Cuando una estadía se vea afectada por un evento de este tipo, trabajaremos de buena fe contigo para reprogramar o acordar un reembolso parcial cuando sea razonable.",
    ],
  },
  {
    heading: "Derecho a rechazar el servicio",
    body: [
      "Nos reservamos el derecho de cancelar una reserva, o terminar una estadía anticipadamente, cuando se violen estos términos o las reglas de la casa.",
    ],
  },
  {
    heading: "Ley aplicable",
    body: [
      "Estos términos se rigen por las leyes de Guatemala, donde se ubican las propiedades, sin perjuicio de cualquier protección al consumidor de carácter obligatorio que aplique en tu país de residencia.",
    ],
  },
  {
    heading: "Resolución de disputas",
    body: [
      "Cualquier disputa derivada de estos términos debe resolverse primero mediante negociación de buena fe entre el huésped y Buen Rollo LLC. Si no se resuelve, la disputa se someterá a los tribunales de la Ciudad de Guatemala, Guatemala.",
    ],
  },
  {
    heading: "Cambios a estos términos",
    body: [
      "Podemos actualizar estos términos de vez en cuando. La versión vigente al momento en que completas una reserva es la que aplica a esa estadía.",
    ],
  },
  {
    heading: "Contacto",
    body: [
      "Preguntas sobre estos términos: escríbenos por WhatsApp en inglés (+502 3922 9168) o español (+502 5998 9468).",
    ],
  },
  {
    heading: "Información de la empresa",
    body: [
      "Buen Rollo Escapes es operado por Buen Rollo LLC, una empresa registrada en Wyoming, Estados Unidos, que ofrece servicios de hospedaje y alojamiento en Guatemala.",
      "Para correspondencia legal o comercial, contáctanos a través de los datos en nuestra página de Contacto.",
    ],
  },
];

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    heading: "Information we collect",
    body: [
      "The full name of the primary guest and any accompanying guests, contact details, booking information, vehicle details when relevant, and identification documents where required for building security.",
      "If you contact us via this website or WhatsApp, we keep a record of that conversation to provide support and follow up on your booking.",
    ],
  },
  {
    heading: "How we use it",
    body: [
      "To process and manage your booking, provide guest support, issue an invoice where requested, and - where a property requires it - register you with building management/security.",
    ],
  },
  {
    heading: "Cookies and analytics",
    body: [
      "This website uses analytics tools (such as Google Analytics) to understand how visitors use the site so we can improve it. These tools may use cookies and collect standard technical information like your browser type and general location - they do not identify you personally.",
      "When you first visit our site, you can choose to accept or decline analytics cookies. If you decline, no analytics data is collected. You can change your preference by clearing your browser's stored data for this site.",
    ],
  },
  {
    heading: "Sharing with third parties",
    body: [
      "We do not sell your personal information. We share it only where necessary - for payment processing, legal compliance, building security registration, or with service providers (such as our booking/payment platform) who help us run the business, and only to the extent needed for that purpose.",
    ],
  },
  {
    heading: "International data transfers",
    body: [
      "Your information may be processed in the United States and Guatemala. By booking with us, you acknowledge that your information may be transferred to and stored in these countries.",
    ],
  },
  {
    heading: "How long we keep it",
    body: [
      "We retain booking and guest information for as long as reasonably necessary to fulfil the purposes above, including any applicable legal, accounting, tax or regulatory requirements.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You can ask us what personal information we hold about you, request a correction, or ask us to delete it where we're not required to keep it for legal or tax reasons. Message us on WhatsApp to make a request.",
    ],
  },
  {
    heading: "Security",
    body: [
      "We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure. This website is served over an encrypted (HTTPS) connection, and we never ask you to send full card details over WhatsApp or email.",
      "If we become aware of a data breach affecting your personal information, we will notify affected guests without unreasonable delay.",
    ],
  },
  {
    heading: "Contact",
    body: [
      "Questions about this policy? Contact us through the details on our Contact page.",
    ],
  },
];

export const PRIVACY_SECTIONS_ES: LegalSection[] = [
  {
    heading: "Información que recopilamos",
    body: [
      "El nombre completo del huésped principal y de los huéspedes que lo acompañan, datos de contacto, información de la reserva, datos del vehículo cuando aplique, y documentos de identificación cuando se requieran para el registro de seguridad del edificio.",
      "Si nos contactas a través de este sitio o por WhatsApp, guardamos un registro de esa conversación para poder darte soporte y dar seguimiento a tu reserva.",
    ],
  },
  {
    heading: "Cómo la usamos",
    body: [
      "Para procesar y gestionar tu reserva, brindarte soporte como huésped, emitir una factura cuando la solicites, y - cuando la propiedad lo requiera - registrarte con la administración o seguridad del edificio.",
    ],
  },
  {
    heading: "Cookies y analítica",
    body: [
      "Este sitio usa herramientas de analítica (como Google Analytics) para entender cómo los visitantes usan el sitio, y así poder mejorarlo. Estas herramientas pueden usar cookies y recopilar información técnica estándar como el tipo de navegador y la ubicación general - no te identifican personalmente.",
      "Cuando visitas nuestro sitio por primera vez, puedes elegir aceptar o rechazar las cookies de analítica. Si las rechazas, no se recopila ningún dato de analítica. Puedes cambiar tu preferencia borrando los datos almacenados de este sitio en tu navegador.",
    ],
  },
  {
    heading: "Compartir con terceros",
    body: [
      "No vendemos tu información personal. La compartimos únicamente cuando es necesario - para procesar pagos, cumplir con la ley, registro de seguridad del edificio, o con proveedores de servicio (como nuestra plataforma de reservas/pagos) que nos ayudan a operar el negocio, y solo en la medida necesaria para ese fin.",
    ],
  },
  {
    heading: "Transferencias internacionales de datos",
    body: [
      "Tu información puede procesarse en Estados Unidos y Guatemala. Al reservar con nosotros, reconoces que tu información puede ser transferida y almacenada en estos países.",
    ],
  },
  {
    heading: "Cuánto tiempo la guardamos",
    body: [
      "Conservamos la información de reservas y huéspedes durante el tiempo razonablemente necesario para cumplir con los fines anteriores, incluyendo cualquier requisito legal, contable, fiscal o regulatorio aplicable.",
    ],
  },
  {
    heading: "Tus derechos",
    body: [
      "Puedes preguntarnos qué información personal tenemos sobre ti, solicitar una corrección, o pedirnos que la eliminemos cuando no estemos obligados a conservarla por motivos legales o fiscales. Escríbenos por WhatsApp para hacer una solicitud.",
    ],
  },
  {
    heading: "Seguridad",
    body: [
      "Tomamos medidas razonables para proteger tu información personal de acceso no autorizado, mal uso, o divulgación. Este sitio se sirve a través de una conexión cifrada (HTTPS), y nunca te pedimos que envíes los datos completos de tu tarjeta por WhatsApp o correo electrónico.",
      "Si tenemos conocimiento de una filtración de datos que afecte tu información personal, notificaremos a los huéspedes afectados sin demora injustificada.",
    ],
  },
  {
    heading: "Contacto",
    body: [
      "¿Preguntas sobre esta política? Contáctanos a través de los datos en nuestra página de Contacto.",
    ],
  },
];

export const CANCELLATION_SECTIONS: LegalSection[] = [
  {
    heading: "Booked through Airbnb, Booking.com, or another platform",
    body: [
      "The cancellation policy you selected on that platform governs your booking.",
    ],
  },
  {
    heading: "Booked direct with Buen Rollo Escapes",
    body: [
      "Full refund for cancellations made at least 48 hours before check-in.",
      "No refund for cancellations made within 48 hours of check-in, or for no-shows.",
      "Approved refunds return to your original payment method - processing time varies by provider.",
    ],
  },
  {
    heading: "Why we sometimes ask for payment in advance",
    body: [
      "During high season, we may ask direct-booking guests to pay before check-in. This isn't a hard-sell tactic - it's how we protect your reservation from being displaced by a no-show, and how we manage a small number of properties in genuinely high demand during peak weeks.",
    ],
  },
  {
    heading: "Transaction and processing fees",
    body: [
      "Any transaction fee a bank or card processor charges on a payment or refund is non-refundable and is passed on to the guest.",
      "This applies to every booking and every refund, direct or through a third-party platform.",
    ],
  },
];

export const CANCELLATION_SECTIONS_ES: LegalSection[] = [
  {
    heading: "Reservaste a través de Airbnb, Booking.com, u otra plataforma",
    body: [
      "La política de cancelación que seleccionaste en esa plataforma rige tu reserva.",
    ],
  },
  {
    heading: "Reservaste directo con Buen Rollo Escapes",
    body: [
      "Reembolso completo por cancelaciones hechas al menos 48 horas antes del check-in.",
      "Sin reembolso por cancelaciones dentro de las 48 horas previas al check-in, o por no presentarse (no-show).",
      "Los reembolsos aprobados se devuelven a tu método de pago original - el tiempo de procesamiento varía según el proveedor.",
    ],
  },
  {
    heading: "Por qué a veces pedimos el pago por adelantado",
    body: [
      "En temporada alta, es posible que pidamos a los huéspedes con reserva directa que paguen antes del check-in. Esto no es una táctica de venta agresiva - es cómo protegemos tu reserva de ser desplazada por un no-show, y cómo gestionamos un número reducido de propiedades con demanda genuinamente alta durante semanas pico.",
    ],
  },
  {
    heading: "Comisiones de transacción y procesamiento",
    body: [
      "Cualquier comisión que cobre un banco o procesador de tarjetas sobre un pago o reembolso no es reembolsable y se traslada al huésped.",
      "Esto aplica a toda reserva y todo reembolso, ya sea directo o a través de una plataforma externa.",
    ],
  },
];
