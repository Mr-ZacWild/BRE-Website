import type { Dictionary } from "./en";

// UI chrome is translated now (nav, footer, buttons). Page-body marketing
// copy under /es still renders the English strings as a placeholder until
// it gets a real Guatemalan-Spanish pass - see project brief.
export const es: Dictionary = {
  nav: {
    home: "Inicio",
    properties: "Propiedades",
    guatemalaCity: "Ciudad de Guatemala",
    antigua: "Antigua",
    elParedon: "El Paredon",
    about: "Nosotros",
    faq: "Preguntas frecuentes",
    contact: "Contacto",
    blog: "Guias",
    checkAvailability: "Ver disponibilidad",
  },
  common: {
    checkAvailability: "Ver disponibilidad",
    whatsapp: "WhatsApp",
    whatsappUs: "Escribinos por WhatsApp",
    viewProperty: "Ver propiedad",
    readMore: "Leer mas",
    languageSwitchLabel: "English",
  },
  footer: {
    tagline: "La buena vibra viaja bien.",
    locations: "Ciudad de Guatemala · Antigua Guatemala · El Paredon",
    legal: {
      terms: "Terminos",
      privacy: "Privacidad",
      cancellation: "Politica de cancelacion",
    },
    payments: "Opciones de pago seguro disponibles",
  },
};
