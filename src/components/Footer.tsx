import React from 'react';
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram } from 'lucide-react';
import { CONTACT, NAV_ITEMS, SITE, scrollToSection } from '../data/site';
import { SERVICES } from '../data/services';

const socialLinks = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-950 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          {/* Identidad */}
          <div className="lg:col-span-4">
            <p className="font-display text-xl font-semibold leading-tight">
              {SITE.name}
            </p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-brass-400">
              {SITE.role}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-200/80">
              Abogada y Magíster en Derecho Comercial, especializada en insolvencia,
              negociación de obligaciones y resolución de conflictos. Directora del Centro
              de Conciliación y Arbitraje Constructores de Paz.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-ink-200 transition-all duration-300 hover:border-brass-400 hover:text-brass-300"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Navegación
            </h3>
            <ul className="mt-5 space-y-3">
              {[...NAV_ITEMS, { id: 'contacto', label: 'Contacto' }].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm text-ink-200/80 transition-colors duration-300 hover:text-brass-300"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Servicios
            </h3>
            <ul className="mt-5 space-y-3">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    onClick={() => scrollToSection('servicios')}
                    className="text-left text-sm text-ink-200/80 transition-colors duration-300 hover:text-brass-300"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Contacto
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-none text-brass-400" />
                <a
                  href={CONTACT.phone.href}
                  className="text-ink-200/80 transition-colors duration-300 hover:text-brass-300"
                >
                  {CONTACT.phone.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-none text-brass-400" />
                <a
                  href={CONTACT.email.href}
                  className="break-all text-ink-200/80 transition-colors duration-300 hover:text-brass-300"
                >
                  {CONTACT.email.display}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-none text-brass-400" />
                <span className="text-ink-200/80">
                  {CONTACT.office.line1}
                  <br />
                  {CONTACT.office.line2}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-none text-brass-400" />
                <span className="text-ink-200/80">{CONTACT.schedule.full}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-xs text-ink-200/60">
              © {year} {SITE.name}. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-ink-200/60">
              <a href="#" className="transition-colors hover:text-brass-300">
                Aviso Legal
              </a>
              <a href="#" className="transition-colors hover:text-brass-300">
                Política de Privacidad
              </a>
              <a href="#" className="transition-colors hover:text-brass-300">
                Términos de Servicio
              </a>
              <a href="#" className="transition-colors hover:text-brass-300">
                Código de Ética
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
