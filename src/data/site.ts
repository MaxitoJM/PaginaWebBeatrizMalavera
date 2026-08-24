/**
 * Fuente única de verdad para los datos que se repiten en varias secciones
 * (encabezado, contacto, pie de página y metadatos). Si un dato cambia,
 * se cambia aquí y se actualiza en todo el sitio.
 */

const PHONE_DIGITS = '573223055171';

export const SITE = {
  name: 'Beatriz Helena Malavera López',
  shortName: 'Beatriz Helena Malavera López',
  firstName: 'Beatriz Helena',
  lastName: 'Malavera López',
  role: 'Derecho Concursal',
  tagline: 'Soluciones legales efectivas en insolvencia y gestión de deudas',
  credentials:
    'Abogada | Magíster en Derecho Comercial | Directora del Centro de Conciliación y Arbitraje Constructores de Paz',
} as const;

export const CONTACT = {
  phone: {
    display: '+57 322 305 5171',
    href: `tel:+${PHONE_DIGITS}`,
    whatsapp: `https://wa.me/${PHONE_DIGITS}`,
  },
  email: {
    display: 'contactobeatrizmalavera@gmail.com',
    href: 'mailto:contactobeatrizmalavera@gmail.com',
  },
  office: {
    line1: 'Calle 74 # 15 – 80, Edificio Osaka Trade Center',
    line2: 'Int. 1, Of. 308, Bogotá D.C., Colombia',
    full:
      'Calle 74 # 15 – 80, Edificio Osaka Trade Center, Int. 1, Of. 308, Bogotá D.C., Colombia',
  },
  schedule: {
    days: 'Lunes a viernes',
    hours: '9:00 a.m. a 6:00 p.m.',
    full: 'Lunes a viernes de 9:00 a.m. a 6:00 p.m.',
  },
} as const;

export const NAV_ITEMS = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'procesos', label: 'Proceso' },
] as const;

/**
 * Lleva a una sección de la portada. Si el visitante está en un documento
 * legal, primero vuelve al inicio y espera a que la portada se renderice.
 */
export const scrollToSection = (sectionId: string) => {
  const scroll = () =>
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });

  if (window.location.hash) {
    window.location.hash = '';
    // Damos un fotograma para que React monte la portada antes de desplazar.
    requestAnimationFrame(() => requestAnimationFrame(scroll));
    return;
  }

  scroll();
};
