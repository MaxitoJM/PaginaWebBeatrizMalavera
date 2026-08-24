import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { SITE, scrollToSection } from '../data/site';

const stats = [
  { value: '+3.000', label: 'Casos acompañados' },
  { value: '15+', label: 'Años de experiencia' },
  { value: '100%', label: 'Confidencialidad' },
];

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-ink-950 pt-28 pb-16 lg:pt-36 lg:pb-24"
    >
      {/* Fondo: degradado profundo + halo dorado de apoyo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(120%_90%_at_78%_18%,#233450_0%,#152238_45%,#0c1526_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -top-24 right-[8%] -z-10 h-[32rem] w-[32rem] rounded-full bg-brass-500/12 blur-3xl"
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Bloque principal: el nombre manda */}
          <div className="lg:col-span-7 animate-fade-up">
            <p className="eyebrow border border-brass-400/30 bg-brass-400/10 text-brass-300">
              <ShieldCheck className="h-3.5 w-3.5" />
              Abogada · Especialista en Derecho Concursal
            </p>

            <h1 className="mt-6 font-display font-semibold text-white leading-[0.95] tracking-tight text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5.25rem]">
              <span className="block">{SITE.firstName}</span>
              <span className="block text-brass-300">{SITE.lastName}</span>
            </h1>

            {/* Subtítulo claramente secundario respecto al nombre */}
            <div className="mt-7 flex items-start gap-4">
              <span
                aria-hidden="true"
                className="mt-2.5 h-px w-10 flex-none bg-brass-400/70 sm:w-14"
              />
              <p className="max-w-xl text-base font-light leading-relaxed text-ink-100 sm:text-lg">
                {SITE.tagline}
              </p>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-200/80 sm:text-base">
              Magíster en Derecho Comercial y directora del Centro de Conciliación y
              Arbitraje Constructores de Paz. Acompañamiento jurídico claro y
              estratégico en insolvencia, negociación de obligaciones y resolución de
              conflictos.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button
                onClick={() => scrollToSection('contacto')}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brass-500 px-8 py-4 font-semibold text-white shadow-lift transition-all duration-300 hover:bg-brass-600 hover:-translate-y-0.5"
              >
                <span>Agenda tu consulta gratuita</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="inline-flex items-center justify-center rounded-full border border-white/25 px-8 py-4 font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/5"
              >
                Ver servicios
              </button>
            </div>

            <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/10 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-semibold text-white sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-1 block text-xs leading-snug text-ink-200/70 sm:text-sm">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Retrato */}
          <div className="relative lg:col-span-5 animate-fade-in">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2rem] border border-brass-400/25"
              />
              <img
                src="/img/beatriz-retrato.jpg"
                alt="Retrato profesional de Beatriz Helena Malavera López"
                width={1071}
                height={1281}
                loading="eager"
                className="relative w-full rounded-[1.75rem] object-cover shadow-lift"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
