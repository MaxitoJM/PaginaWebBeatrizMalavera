import React, { useEffect, useState } from 'react';
import { ArrowRight, X, CheckCircle } from 'lucide-react';
import Reveal from './Reveal';
import { SERVICES, type Service } from '../data/services';
import { scrollToSection } from '../data/site';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Cerrar con Escape y bloquear el scroll de fondo mientras el modal está abierto
  useEffect(() => {
    if (!selectedService) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedService]);

  return (
    <section id="servicios" className="bg-white py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow bg-brass-500/10 text-brass-700">
            Servicios especializados
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink-950 sm:text-4xl lg:text-[2.75rem]">
            Soluciones integrales para tu estabilidad financiera
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            Asesoría legal especializada con enfoque en resultados medibles y soluciones
            personalizadas.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.id} delay={index * 90} className="h-full">
              <button
                type="button"
                onClick={() => setSelectedService(service)}
                aria-haspopup="dialog"
                className="group flex h-full w-full flex-col rounded-2xl border border-ink-100 bg-white p-7 text-left transition-all duration-300 hover:-translate-y-1.5 hover:border-brass-300 hover:shadow-lift"
              >
                <span className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-ink-950 transition-colors duration-300 group-hover:bg-brass-500">
                  <service.icon className="h-7 w-7 text-brass-300 transition-colors duration-300 group-hover:text-white" />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink-950">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                  {service.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brass-600">
                  Saber más
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Detalle del servicio */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/70 p-4 backdrop-blur-sm animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl bg-white shadow-lift animate-fade-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-7 sm:p-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-14 flex-none items-center justify-center rounded-xl bg-ink-950">
                    <selectedService.icon className="h-7 w-7 text-brass-300" />
                  </span>
                  <div>
                    <h3
                      id="service-modal-title"
                      className="font-display text-2xl font-semibold text-ink-950"
                    >
                      {selectedService.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {selectedService.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-none rounded-lg p-2 text-ink-500 transition-colors hover:bg-ink-50 hover:text-ink-900"
                  aria-label="Cerrar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-500">
                    Beneficios
                  </h4>
                  <ul className="mt-4 space-y-3">
                    {selectedService.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-brass-500" />
                        <span className="text-sm text-ink-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-500">
                    Proceso
                  </h4>
                  <ol className="mt-4 space-y-3">
                    {selectedService.process.map((step, index) => (
                      <li key={step} className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-ink-950 text-xs font-semibold text-white">
                          {index + 1}
                        </span>
                        <span className="text-sm text-ink-700">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-9 border-t border-ink-100 pt-7">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    scrollToSection('contacto');
                  }}
                  className="w-full rounded-full bg-brass-500 px-8 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-brass-600 sm:w-auto"
                >
                  Solicitar consulta gratuita
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
