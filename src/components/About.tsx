import React from 'react';
import { Award, BookOpen, Users } from 'lucide-react';
import Reveal from './Reveal';
import { SITE } from '../data/site';

const achievements = [
  {
    icon: Award,
    title: '15+ años de experiencia',
    description: 'Especializada en derecho financiero, concursal y recuperación de deudas',
  },
  {
    icon: BookOpen,
    title: 'Excelencia académica',
    description: 'Actualización jurídica constante y especializada',
  },
  {
    icon: Users,
    title: '+3.000 casos acompañados',
    description: 'Clientes satisfechos con soluciones personalizadas',
  },
];

const About: React.FC = () => {
  return (
    <section id="sobre-mi" className="bg-cream-100 py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Retrato en oficina */}
          <Reveal className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -bottom-4 -left-4 h-full w-full rounded-[1.75rem] border border-brass-400/40"
              />
              <img
                src="img/beatriz-oficina.jpg"
                alt="Beatriz Helena Malavera López en su despacho"
                width={765}
                height={933}
                loading="lazy"
                className="relative w-full rounded-[1.75rem] object-cover shadow-lift"
              />
              <div className="relative mt-6 rounded-2xl bg-white p-6 shadow-soft">
                <p className="font-display text-2xl font-semibold text-ink-900">100%</p>
                <p className="mt-1 text-sm text-ink-600">Confidencialidad garantizada</p>
              </div>
            </div>
          </Reveal>

          {/* Perfil profesional */}
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow bg-ink-900/5 text-ink-700">Sobre mí</p>
              <h2 className="mt-5 font-display text-3xl font-semibold leading-tight text-ink-950 sm:text-4xl lg:text-[2.75rem]">
                {SITE.name}
              </h2>
              <p className="mt-4 text-base font-medium leading-relaxed text-brass-700 sm:text-lg">
                {SITE.credentials}
              </p>
              <span
                aria-hidden="true"
                className="mt-8 block h-px w-16 bg-brass-400"
              />
            </Reveal>

            <div className="mt-8 space-y-5 text-[0.975rem] leading-relaxed text-ink-700 sm:text-base">
              <Reveal delay={80}>
                <p>
                  Abogada y{' '}
                  <strong className="font-semibold text-ink-900">
                    Magíster en Derecho Comercial
                  </strong>
                  , con una trayectoria dedicada al{' '}
                  <strong className="font-semibold text-ink-900">
                    derecho concursal, la negociación de obligaciones y la resolución de
                    conflictos
                  </strong>
                  . Como directora del{' '}
                  <strong className="font-semibold text-ink-900">
                    Centro de Conciliación y Arbitraje Constructores de Paz
                  </strong>
                  , lidera una institución orientada a brindar soluciones jurídicas
                  confiables, eficientes y humanas a quienes enfrentan situaciones de
                  endeudamiento, conflicto o dificultades para llegar a acuerdos.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <p>
                  Su experiencia se ha construido a partir del acompañamiento de{' '}
                  <strong className="font-semibold text-ink-900">
                    miles de casos de negociación de deudas y procesos de insolvencia
                  </strong>
                  , tanto bajo el régimen de la{' '}
                  <strong className="font-semibold text-ink-900">Ley 1564 de 2012</strong>{' '}
                  como en el marco de la{' '}
                  <strong className="font-semibold text-ink-900">Ley 1116 de 2006</strong>
                  , desarrollando estrategias jurídicas enfocadas en la búsqueda de
                  acuerdos viables y soluciones sostenibles para deudores y acreedores.
                </p>
              </Reveal>

              <Reveal delay={160}>
                <p>
                  Su ejercicio profesional en el{' '}
                  <strong className="font-semibold text-ink-900">derecho concursal</strong>{' '}
                  se caracteriza por integrar el rigor jurídico con una visión práctica de
                  cada caso. Entiende que detrás de cada obligación, empresa o conflicto
                  existen personas, proyectos y decisiones que requieren ser abordados con{' '}
                  <strong className="font-semibold text-ink-900">
                    claridad, criterio y sensibilidad
                  </strong>
                  .
                </p>
              </Reveal>

              <Reveal delay={200}>
                <p>
                  Desde la dirección del Centro, promueve una forma de ejercer el derecho
                  basada en la{' '}
                  <strong className="font-semibold text-ink-900">
                    ética, el diálogo, la negociación y la construcción de acuerdos
                  </strong>
                  , convencida de que una buena solución jurídica no solo debe ser
                  técnicamente sólida, sino también comprensible, oportuna y capaz de
                  generar nuevas oportunidades.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <p className="rounded-2xl border-l-2 border-brass-400 bg-white px-6 py-5 font-semibold text-ink-900 shadow-soft">
                  Su propósito: transformar situaciones complejas en caminos jurídicos
                  claros, posibles y orientados a resultados.
                </p>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {achievements.map((achievement, index) => (
                <Reveal key={achievement.title} delay={index * 90}>
                  <div className="h-full rounded-2xl bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
                    <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink-900/5">
                      <achievement.icon className="h-6 w-6 text-brass-600" />
                    </span>
                    <h3 className="font-semibold text-ink-950">{achievement.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {achievement.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
