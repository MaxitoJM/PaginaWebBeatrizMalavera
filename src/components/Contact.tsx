import React from 'react';
import { Phone, Mail, MapPin, Clock, Calendar, MessageCircle } from 'lucide-react';
import Reveal from './Reveal';
import ContactForm from './ContactForm';
import { CONTACT } from '../data/site';

const Contact: React.FC = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: 'Teléfono',
      content: (
        <a
          href={CONTACT.phone.href}
          className="text-ink-600 transition-colors hover:text-brass-600"
        >
          {CONTACT.phone.display}
        </a>
      ),
    },
    {
      icon: Mail,
      title: 'Correo electrónico',
      content: (
        <a
          href={CONTACT.email.href}
          className="break-all text-ink-600 transition-colors hover:text-brass-600"
        >
          {CONTACT.email.display}
        </a>
      ),
    },
    {
      icon: MapPin,
      title: 'Oficina',
      content: (
        <>
          <span className="block text-ink-600">{CONTACT.office.line1}</span>
          <span className="block text-ink-600">{CONTACT.office.line2}</span>
        </>
      ),
    },
    {
      icon: Clock,
      title: 'Horario de atención',
      content: <span className="block text-ink-600">{CONTACT.schedule.full}</span>,
    },
  ];

  return (
    <section id="contacto" className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow bg-brass-500/10 text-brass-700">Contacto</p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink-950 sm:text-4xl lg:text-[2.75rem]">
            Agenda tu consulta gratuita
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            Obtén asesoría personalizada para tu situación. La primera consulta es sin
            costo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <ContactForm />
          </Reveal>

          {/* Información de contacto */}
          <div className="space-y-7">
            <Reveal delay={80}>
              <h3 className="font-display text-2xl font-semibold text-ink-950">
                Información de contacto
              </h3>
              <div className="mt-7 space-y-6">
                {contactDetails.map((detail) => (
                  <div key={detail.title} className="flex items-start gap-4">
                    <span className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-ink-950">
                      <detail.icon className="h-5 w-5 text-brass-300" />
                    </span>
                    <div className="pt-0.5 text-sm sm:text-base">
                      <h4 className="font-semibold text-ink-950">{detail.title}</h4>
                      <div className="mt-1 leading-relaxed">{detail.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-2xl border border-brass-200 bg-brass-50 p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-brass-600" />
                  <h4 className="font-semibold text-ink-950">Consulta gratuita</h4>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-700">
                  La primera consulta es completamente gratuita. Analizaremos tu caso y te
                  proporcionaremos opciones viables sin ningún compromiso.
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-ink-600">
                  <li>• Evaluación inicial sin costo</li>
                  <li>• Análisis de viabilidad</li>
                  <li>• Opciones y estrategias disponibles</li>
                  <li>• Plan de trabajo personalizado</li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-2xl bg-ink-950 p-6 text-white">
                <h4 className="font-semibold">Atención de emergencias</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-200">
                  Para casos urgentes que requieran atención inmediata (embargos,
                  notificaciones judiciales):
                </p>
                <a
                  href={CONTACT.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-brass-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-brass-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp {CONTACT.phone.display}
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
