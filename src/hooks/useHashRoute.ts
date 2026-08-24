import { useEffect, useState } from 'react';

/**
 * Enrutado mínimo basado en el hash de la URL (#/aviso-legal, etc.).
 * Se usa hash en lugar de rutas reales para que el sitio siga funcionando
 * como archivo estático en cualquier alojamiento, sin reglas de reescritura.
 */
export const useHashRoute = (): string => {
  const read = () => window.location.hash.replace(/^#\/?/, '');
  const [route, setRoute] = useState(read);

  useEffect(() => {
    const onHashChange = () => setRoute(read());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
};

/** Navega a una ruta interna y sube al inicio de la página. */
export const navigateTo = (route: string) => {
  window.location.hash = route ? `/${route}` : '';
  window.scrollTo({ top: 0, behavior: 'auto' });
};
