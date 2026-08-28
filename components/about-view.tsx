import Image from "next/image";
import type { Locale } from "@/lib/i18n/config";

// Real, relevant Guatemala imagery standing in until real team/property
// photos are supplied - deliberately NOT stock photos of strangers'
// faces pretending to be the team, since that's a different, worse kind
// of misleading than scenery. Swap for real team photos when available.
const TEAM_PHOTO = "/images/stock/antigua-sunset-cerro-de-la-cruz.jpg";
const GRID_PHOTOS = [
  "/images/stock/lake-atitlan-dock-volcano.jpg",
  "/videos/hero-poster.jpg",
  "/images/stock/guatemala-city-aerial.jpg",
];

export function AboutView({ lang }: { lang: Locale }) {
  const isEs = lang === "es";

  return (
    <div className="mx-auto max-w-3xl px-5 py-14">
      <h1 className="font-heading text-3xl text-ink">
        {isEs ? "Sobre Buen Rollo" : "About Buen Rollo"}
      </h1>

      <p
        className="mt-4 text-2xl italic leading-snug text-quetzal"
        style={{ fontFamily: "var(--font-accent)" }}
      >
        {isEs ? "Antes de ser anfitriones, fuimos huespedes." : "Before we were hosts, we were guests."}
      </p>

      <p className="mt-5 text-ink/75">
        {isEs
          ? "Huespedes cansados de alojamientos que todos se veian iguales. De instrucciones de check-in escondidas tres aplicaciones despues. De pagar una comision de plataforma por el privilegio de sentirse como un numero de reserva en vez de una persona."
          : "Guests who got tired of listings that all looked the same. Of check-in instructions buried three apps deep. Of paying a platform fee for the privilege of feeling like a booking number instead of a person."}
      </p>
      <p className="mt-3 text-ink/75">
        {isEs
          ? "Buen Rollo Escapes es un negocio de hospitalidad pequeno e independiente que crea estadias comodas y pensadas con cuidado en Guatemala. No somos una cadena hotelera - cada propiedad es seleccionada, amueblada y cuidada personalmente con el objetivo de que cada estadia sea comoda, sencilla y genuinamente agradable."
          : "Buen Rollo Escapes is a small, independently owned hospitality business creating comfortable, thoughtfully designed stays in Guatemala. We're not a hotel chain - every property is personally selected, furnished and cared for with the goal of making every stay comfortable, straightforward and genuinely enjoyable."}
      </p>
      <p className="mt-3 text-ink/75">
        {isEs
          ? "Somos un equipo pequeno, lo que significa que podemos prestar atencion a los detalles que los operadores mas grandes a veces pasan por alto - desde espacios cuidadosamente preparados hasta un soporte a huespedes que realmente responde."
          : "We're a small team, which means we can pay attention to the details that larger operators sometimes miss - from carefully prepared spaces to responsive guest support."}
      </p>

      <div className="relative mt-8 h-64 w-full overflow-hidden rounded-xl">
        <Image
          src={TEAM_PHOTO}
          alt={isEs ? "Antigua Guatemala" : "Antigua Guatemala"}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h2 className="mt-12 font-heading text-xl text-ink">
        {isEs ? "Por que estos colores" : "Why these colors"}
      </h2>
      <p className="mt-3 text-ink/75">
        {isEs
          ? "El verde profundo que recorre este sitio no es solo un color que nos gusto - es el quetzal. El ave nacional de Guatemala, su moneda nacional, y una de las pocas aves en el mundo con plumas tan iridiscentes que parecen pintadas. Los mayas lo consideraban sagrado. Cuenta la leyenda que un quetzal no puede sobrevivir en cautiverio - necesita cielo abierto. No es una mala forma de pensar en viajar tampoco."
          : "The deep green running through this site isn't just a color we liked - it's the quetzal. Guatemala's national bird, its national currency, and one of the only birds in the world with feathers iridescent enough to look painted on. The Maya considered it sacred. Legend says a quetzal can't survive captivity - it needs open sky. That's not a bad way to think about travel, either."}
      </p>
      <p className="mt-3 text-ink/75">
        {isEs
          ? "Los tonos calidos - el coral, el crema - son la otra mitad del pais: atardeceres sobre la playa de arena negra en El Paredon, las paredes calidas de estuco de Antigua a la hora dorada. Guatemala en una sola paleta."
          : "The warmer tones - the coral, the cream - are the other half of the country: sunsets over the black-sand beach in El Paredon, the warm stucco walls of Antigua at golden hour. Guatemala in one palette."}
      </p>

      <h2 className="mt-10 font-heading text-xl text-ink">
        {isEs ? "Por que un colibri, y no un quetzal" : "Why a hummingbird, not a quetzal"}
      </h2>
      <p className="mt-3 text-ink/75">
        {isEs
          ? "La eleccion obvia para un logo guatemalteco es el quetzal - esta en la bandera, en la moneda, en el escudo. Queriamos algo mas personal. En las creencias mayas, el colibri carga un significado completamente distinto: no majestuosidad, sino alegria. Un mensajero. Buena suerte, si uno cruza tu camino. Tambien es, kilo por kilo, uno de los viajeros mas trabajadores de la tierra - siempre en movimiento, cubriendo distancias enormes con un cuerpo hecho de casi nada, persiguiendo calor y buen nectar donde sea que lo encuentre."
          : "The obvious choice for a Guatemalan logo is the quetzal - it's on the flag, the money, the coat of arms. We wanted something more personal. In Maya belief, the hummingbird carries a different meaning entirely: not majesty, but joy. A messenger. Good luck, if one crosses your path. It's also, pound for pound, one of the hardest-working travelers on earth - always in motion, covering enormous distances on a body built for almost nothing, chasing warmth and good nectar wherever it can find it."}
      </p>
      <p className="mt-3 text-ink/75">
        {isEs
          ? "Eso es lo que queriamos que fuera nuestro logo. No un simbolo nacional mirando desde una bandera - un viajero pequeno, curioso e incansable, siempre persiguiendo lo bueno. El buen rollo viaja bien. Los colibries tambien."
          : "That's who we wanted our logo to be. Not a national symbol looking down from a flag - a small, curious, relentless traveler, always chasing the good stuff. Good vibes travel well. So do hummingbirds."}
      </p>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {GRID_PHOTOS.map((src) => (
          <div key={src} className="relative h-36 overflow-hidden rounded-xl">
            <Image src={src} alt="Guatemala" fill className="object-cover" />
          </div>
        ))}
      </div>

      <h2 className="mt-12 font-heading text-xl text-ink">
        {isEs ? "Hacia donde vamos" : "Where we're headed"}
      </h2>
      <p className="mt-3 text-ink/75">
        {isEs
          ? "Empezamos con un puñado de apartamentos en la Ciudad de Guatemala. Antigua vino despues. El Paredon vino despues de eso. Cada lugar que agregamos es uno en el que realmente nos gustaria quedarnos - ese es el unico filtro que importa."
          : "We started with a handful of apartments in Guatemala City. Antigua came next. El Paredon came after that. Every place we add is somewhere we'd actually want to stay - that's the only filter that matters."}
      </p>
      <p className="mt-3 text-ink/75">
        {isEs
          ? "No estamos tratando de construir la coleccion mas grande de estadias en Guatemala. Estamos tratando de construir la que le recomendariamos a un amigo sin dudarlo - y seguir agregando, un buen lugar a la vez."
          : "We're not trying to build the biggest collection of stays in Guatemala. We're trying to build the one we'd recommend to a friend without hesitating - and then keep adding to it, one good place at a time."}
      </p>
    </div>
  );
}
