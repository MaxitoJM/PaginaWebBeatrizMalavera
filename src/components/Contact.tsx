import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Shield,
  Calendar,
  MessageCircle,
} from 'lucide-react';
import Reveal from './Reveal';
import { CONTACT } from '../data/site';
import { SERVICES } from '../data/services';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí se conectaría el envío al backend o servicio de correo
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition-colors duration-200 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/30';

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
          {/* Formulario */}
          <Reveal>
            <div className="rounded-3xl bg-cream-100 p-7 sm:p-9">
              <h3 className="font-display text-2xl font-semibold text-ink-950">
                Envía tu consulta
              </h3>

              {isSubmitted && (
                <div className="mt-6 flex items-center gap-3 rounded-xl border border-brass-200 bg-brass-50 p-4">
                  <CheckCircle className="h-5 w-5 flex-none text-brass-600" />
                  <span className="text-sm text-ink-800">
                    ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-ink-800"
                    >
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-ink-800"
                    >
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="tu@correo.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-ink-800"
                    >
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+57 300 000 0000"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-ink-800"
                    >
                      Servicio de interés
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Selecciona un servicio</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-ink-800"
                  >
                    Describe tu situación *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Cuéntanos brevemente tu situación para poder brindarte la mejor asesoría..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-5 w-5 flex-none text-brass-500" />
                  <p className="text-sm leading-relaxed text-ink-600">
                    Toda la información proporcionada es completamente confidencial y está
                    protegida por secreto profesional.
                  </p>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-ink-800 hover:shadow-lift"
                >
                  <Send className="h-5 w-5" />
                  <span>Enviar consulta</span>
                </button>
              </form>
            </div>
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
