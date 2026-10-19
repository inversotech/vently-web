// Vently's own sales WhatsApp, digits only with country code (e.g. '51987654321').
// While empty, the contact buttons fall back to email.
const whatsapp = '51993365158';
const contactMessage = 'Hola, quiero ver Vently para mi negocio y reservar el precio fundador.';

export const site = {
  name: 'Vently',
  url: 'https://vently.lat',
  appUrl: 'https://app.vently.lat',
  registerUrl: 'https://app.vently.lat/register',
  loginUrl: 'https://app.vently.lat/login',
  tagline: 'Tus pedidos por WhatsApp, ordenados y cobrados',
  description:
    'Vently responde a tus clientes por WhatsApp con tus precios, toma el pedido completo y te muestra qué entregar y quién te debe. Hecho para pastelerías y negocios que venden por encargo en Perú.',
  locale: 'es_PE',
  lang: 'es',
  contactUrl: whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(contactMessage)}`
    : `mailto:inversotech.pe@gmail.com?subject=${encodeURIComponent('Quiero ver Vently')}&body=${encodeURIComponent(contactMessage)}`,
  contactLabel: whatsapp ? 'Escríbenos por WhatsApp' : 'Escríbenos',
  founder: { price: 49, seats: 20 },
  company: {
    legalName: 'Inverso Technologies E.I.R.L.',
    ruc: '20615027058',
    country: 'Perú',
    email: 'inversotech.pe@gmail.com',
  },
  legalUpdated: '19 de octubre de 2026',
} as const;
