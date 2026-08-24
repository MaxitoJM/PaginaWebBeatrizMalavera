import React, { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { navigateTo } from '../hooks/useHashRoute';

const STORAGE_KEY = 'bm-aviso-cookies-visto';

/**
 * Aviso informativo sobre el almacenamiento local que usa el sitio.
 *
 * No es un banner de consentimiento: el sitio no instala cookies de analítica,
 * publicidad ni perfilamiento, por lo que no hay tratamiento que autorizar.
 * Se informa por transparencia, conforme al deber de información previa de la
 * Ley 1581 de 2012.
 */
const CookieNotice: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Pequeña espera para no competir con la carga inicial
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // Si el navegador bloquea el almacenamiento, no mostramos el aviso.
    }
  }, []);

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // Sin almacenamiento disponible: el aviso reaparecerá en la próxima visita.
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Aviso sobre almacenamiento local"
      className="fixed bottom-0 left-0 right-0 z-40 p-4 animate-fade-up sm:p-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl bg-ink-950/95 p-5 text-white shadow-lift backdrop-blur-md sm:flex-row sm:items-center sm:gap-5">
        <Cookie className="h-6 w-6 flex-none text-brass-400" />
        <p className="flex-1 text-sm leading-relaxed text-ink-100">
          Este sitio no usa cookies de publicidad ni de seguimiento. Solo guarda en tu
          navegador lo que escribes en el formulario, para que no se pierda.{' '}
          <button
            onClick={() => {
              dismiss();
              navigateTo('politica-de-cookies');
            }}
            className="font-semibold text-brass-300 underline underline-offset-2 transition-colors hover:text-brass-200"
          >
            Ver política de cookies
          </button>
          .
        </p>
        <button
          onClick={dismiss}
          className="flex-none rounded-full bg-brass-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brass-600"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default CookieNotice;
