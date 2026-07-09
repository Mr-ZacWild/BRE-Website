export interface Dictionary {
  nav: {
    home: string;
    properties: string;
    guatemalaCity: string;
    antigua: string;
    elParedon: string;
    about: string;
    faq: string;
    contact: string;
    checkAvailability: string;
  };
  common: {
    checkAvailability: string;
    whatsapp: string;
    whatsappUs: string;
    viewProperty: string;
    readMore: string;
    languageSwitchLabel: string;
  };
  footer: {
    tagline: string;
    locations: string;
    legal: {
      terms: string;
      privacy: string;
      cancellation: string;
    };
    payments: string;
  };
}

export const en: Dictionary = {
  nav: {
    home: "Home",
    properties: "Properties",
    guatemalaCity: "Guatemala City",
    antigua: "Antigua",
    elParedon: "El Paredon",
    about: "About",
    faq: "FAQ",
    contact: "Contact",
    checkAvailability: "Check availability",
  },
  common: {
    checkAvailability: "Check availability",
    whatsapp: "WhatsApp",
    whatsappUs: "WhatsApp us",
    viewProperty: "View property",
    readMore: "Read more",
    languageSwitchLabel: "Espanol",
  },
  footer: {
    tagline: "Good vibes travel well.",
    locations: "Guatemala City · Antigua Guatemala · El Paredon",
    legal: {
      terms: "Terms",
      privacy: "Privacy",
      cancellation: "Cancellation policy",
    },
    payments: "Secure payment via Guesty",
  },
};
