import React, { useEffect, useState } from 'react';
import { Send, Shield, MessageCircle, Mail, ArrowLeft, Trash2 } from 'lucide-react';
import { CONTACT } from '../data/site';
import { SERVICES } from '../data/services';
import { navigateTo } from '../hooks/useHashRoute';

const DRAFT_KEY = 'bm-consulta-borrador';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const EMPTY_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const inputClass =
  'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition-colors duration-200 focus:border-brass-400 focus:outline-none focus:ring-2 focus:ring-brass-400/30';

/** Lee el borrador guardado, tolerando almacenamiento bloqueado o corrupto. */
const readDraft = (): FormData => {
  try {
    const raw = localStorage.getItem(DRAFT_KEY);
    if (!raw) return EMPTY_FORM;
    return { ...EMPTY_FORM, ...(JSON.parse(raw) as Partial<FormData>) };
  } catch {
    return EMPTY_FORM;
  }
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(readDraft);
  const [hasConsent, setHasConsent] = useState(false);
  const [submitted, setSubmitted] = useState<FormData | null>(null);

  // Guardamos el borrador para que no se pierda si la página se recarga.
  useEffect(() => {
    if (submitted) return;
    try {
      const isEmpty = Object.values(formData).every((value) => value === '');
      if (isEmpty) localStorage.removeItem(DRAFT_KEY);
      else localStorage.setItem(DRAFT_KEY, JSON.stringify(formData));
    } catch {
      // Sin almacenamiento disponible: simplemente no se conserva el borrador.
    }
  }, [formData, submitted]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const clearDraft = () => {
    setFormData(EMPTY_FORM);
    setHasConsent(false);
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      // Nada que limpiar si el almacenamiento no está disponible.
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(formData);
    // El borrador ya cumplió su función: se elimina del dispositivo.
    try {
      localStorage.removeItem(DRAFT_KEY);
    } catch {
      // Sin almacenamiento disponible.
    }
    window.scrollTo({ top: window.scrollY, behavior: 'auto' });
  };

  /** Arma el texto de la consulta para WhatsApp o correo. */
  const buildMessage = (data: FormData) => {
    const serviceTitle =
      SERVICES.find((s) => s.id === data.service)?.title ?? 'Consulta general';

    return [
      'Nueva consulta desde el sitio web',
      '',
      `Nombre: ${data.name}`,
      `Correo: ${data.email}`,
      `Teléfono: ${data.phone}`,
      `Servicio de interés: ${serviceTitle}`,
      '',
      'Situación:',
      data.message,
    ].join('\n');
  };

  // Pantalla de confirmación con los canales de envío
  if (submitted) {
    const text = buildMessage(submitted);
    const whatsappUrl = `${CONTACT.phone.whatsapp}?text=${encodeURIComponent(text)}`;
    const mailtoUrl = `${CONTACT.email.href}?subject=${encodeURIComponent(
      'Consulta desde el sitio web'
    )}&body=${encodeURIComponent(text)}`;

    return (
      <div className="rounded-3xl bg-cream-100 p-7 sm:p-9">
        <h3 className="font-display text-2xl font-semibold text-ink-950">
          Tu consulta está lista
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-700">
          Falta un paso: elige cómo quieres enviarla. Al pulsar el botón se abrirá
          WhatsApp con el mensaje ya redactado y tú decides enviarlo.
        </p>

        <div className="mt-6 rounded-2xl border border-ink-200 bg-white p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-500">
            Resumen
          </p>
          <pre className="mt-3 whitespace-pre-wrap break-words font-sans text-sm leading-relaxed text-ink-700">
            {text}
          </pre>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brass-500 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-brass-600 hover:shadow-lift"
          >
            <MessageCircle className="h-5 w-5" />
            <span>Enviar por WhatsApp al {CONTACT.phone.display}</span>
          </a>
          <a
            href={mailtoUrl}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-ink-300 px-6 py-3.5 font-semibold text-ink-800 transition-all duration-300 hover:border-ink-500 hover:bg-white"
          >
            <Mail className="h-5 w-5" />
            <span>Enviar por correo electrónico</span>
          </a>
        </div>

        <button
          onClick={() => {
            setSubmitted(null);
            setFormData(EMPTY_FORM);
            setHasConsent(false);
          }}
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink-600 transition-colors hover:text-ink-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Escribir otra consulta
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-cream-100 p-7 sm:p-9">
      <h3 className="font-display text-2xl font-semibold text-ink-950">
        Envía tu consulta
      </h3>

      <form onSubmit={handleSubmit} className="mt-7 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-800">
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
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-800">
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
          <p className="mt-2 text-xs leading-relaxed text-ink-500">
            No incluyas datos de salud, de menores de edad ni documentos sensibles en
            este primer mensaje.
          </p>
        </div>

        {/* Autorización previa y expresa (Ley 1581 de 2012) */}
        <div className="rounded-xl border border-ink-200 bg-white p-4">
          <label htmlFor="consent" className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              required
              checked={hasConsent}
              onChange={(e) => setHasConsent(e.target.checked)}
              className="mt-0.5 h-4 w-4 flex-none rounded border-ink-300 text-brass-500 focus:ring-brass-400"
            />
            <span className="text-sm leading-relaxed text-ink-700">
              Autorizo de manera previa, expresa e informada el tratamiento de mis datos
              personales para atender esta consulta, y acepto ser contactado por WhatsApp,
              teléfono o correo electrónico, conforme a la{' '}
              <button
                type="button"
                onClick={() => navigateTo('politica-de-privacidad')}
                className="font-semibold text-brass-700 underline underline-offset-2 hover:text-brass-800"
              >
                política de tratamiento de datos
              </button>
              . *
            </span>
          </label>
        </div>

        <div className="flex items-start gap-3">
          <Shield className="mt-0.5 h-5 w-5 flex-none text-brass-500" />
          <p className="text-sm leading-relaxed text-ink-600">
            Toda la información proporcionada es confidencial y está protegida por
            secreto profesional.
          </p>
        </div>

        <button
          type="submit"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-ink-950 px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-ink-800 hover:shadow-lift"
        >
          <Send className="h-5 w-5" />
          <span>Preparar consulta</span>
        </button>

        <button
          type="button"
          onClick={clearDraft}
          className="flex w-full items-center justify-center gap-2 text-xs font-medium text-ink-500 transition-colors hover:text-ink-800"
        >
          <Trash2 className="h-3.5 w-3.5" />
          Borrar lo escrito de este dispositivo
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
