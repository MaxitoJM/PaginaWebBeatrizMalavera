import React from 'react';
import { Search, FileText, Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  {
    icon: Search,
    title: 'Evaluación inicial',
    description: 'Análisis completo de tu situación financiera y legal sin costo',
    duration: '1-2 días',
  },
  {
    icon: FileText,
    title: 'Plan personalizado',
    description: 'Diseño de estrategia específica basada en tus necesidades',
    duration: '3-5 días',
  },
  {
    icon: Users,
    title: 'Negociación',
    description: 'Gestión directa con acreedores y entidades financieras',
    duration: '2-4 semanas',
  },
  {
    icon: TrendingUp,
    title: 'Seguimiento',
    description: 'Monitoreo continuo del cumplimiento de acuerdos',
    duration: 'Permanente',
  },
];

const guarantees = [
  'Consulta inicial gratuita',
  'Confidencialidad absoluta',
  'Comunicación transparente',
  'Resultados medibles',
  'Soporte continuo',
];

const Process: React.FC = () => {
  return (
    <section id="procesos" className="bg-cream-100 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="eyebrow bg-ink-900/5 text-ink-700">Nuestro proceso</p>
          <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink-950 sm:text-4xl lg:text-[2.75rem]">
            Cómo trabajamos juntos
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
            Un proceso estructurado y transparente que garantiza claridad en cada etapa.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 100} className="h-full">
              <div className="group relative h-full rounded-2xl bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift">
                <span className="absolute -top-3 left-7 flex h-8 w-8 items-center justify-center rounded-full bg-brass-500 text-sm font-bold text-white shadow-soft">
                  {index + 1}
                </span>
                <span className="mb-5 mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-ink-950">
                  <step.icon className="h-6 w-6 text-brass-300" />
                </span>
                <h3 className="font-display text-lg font-semibold text-ink-950">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-600">
                  {step.description}
                </p>
                <span className="mt-5 inline-block rounded-full bg-ink-900/5 px-3 py-1 text-xs font-semibold text-ink-700">
                  {step.duration}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16">
          <div className="overflow-hidden rounded-3xl bg-white shadow-lift">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12">
                <h3 className="font-display text-2xl font-semibold text-ink-950 sm:text-3xl">
                  Garantías de confianza
                </h3>
                <ul className="mt-8 space-y-4">
                  {guarantees.map((guarantee) => (
                    <li key={guarantee} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 flex-none text-brass-500" />
                      <span className="text-ink-700">{guarantee}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[18rem] lg:min-h-full">
                <img
                  src="/img/centro-conciliacion.jpg"
                  alt="Audiencia de conciliación en el Centro de Conciliación y Arbitraje Constructores de Paz"
                  width={1536}
                  height={1024}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-ink-950/50 to-transparent"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Process;
