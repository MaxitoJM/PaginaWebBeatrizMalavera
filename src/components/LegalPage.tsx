import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { LEGAL_DOCS, LEGAL_UPDATED, type LegalDoc } from '../data/legal';
import { navigateTo } from '../hooks/useHashRoute';

interface LegalPageProps {
  doc: LegalDoc;
}

const LegalPage: React.FC<LegalPageProps> = ({ doc }) => {
  useEffect(() => {
    document.title = `${doc.title} | Beatriz Helena Malavera López`;
    return () => {
      document.title =
        'Beatriz Helena Malavera López | Abogada especialista en Derecho Concursal';
    };
  }, [doc.title]);

  return (
    <div className="bg-white">
      {/* Cabecera del documento */}
      <div className="bg-ink-950 pt-28 pb-14 lg:pt-32 lg:pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigateTo('')}
            className="inline-flex items-center gap-2 text-sm font-medium text-brass-300 transition-colors hover:text-brass-200"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </button>
          <h1 className="mt-6 max-w-3xl font-display text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-200/85 sm:text-base">
            {doc.summary}
          </p>
          <p className="mt-6 text-xs text-ink-200/60">
            Última actualización: {LEGAL_UPDATED}
          </p>
        </div>
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="mx-auto max-w-3xl">
          <article className="space-y-9">
            {doc.blocks.map((block, index) => (
              <section key={index}>
                {block.heading && (
                  <h2 className="font-display text-xl font-semibold text-ink-950 sm:text-2xl">
                    {block.heading}
                  </h2>
                )}
                {block.paragraphs?.map((paragraph, i) => (
                  <p
                    key={i}
                    className={`text-[0.95rem] leading-relaxed text-ink-700 sm:text-base ${
                      block.heading || i > 0 ? 'mt-4' : ''
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
                {block.list && (
                  <ul className="mt-4 space-y-2.5">
                    {block.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-brass-400"
                        />
                        <span className="text-[0.95rem] leading-relaxed text-ink-700 sm:text-base">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          {/* Otros documentos */}
          <div className="mt-16 border-t border-ink-100 pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink-500">
              Otros documentos
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {LEGAL_DOCS.filter((other) => other.slug !== doc.slug).map((other) => (
                <li key={other.slug}>
                  <button
                    onClick={() => navigateTo(other.slug)}
                    className="w-full rounded-xl border border-ink-100 px-5 py-4 text-left text-sm font-medium text-ink-800 transition-all duration-300 hover:border-brass-300 hover:bg-cream-100"
                  >
                    {other.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
