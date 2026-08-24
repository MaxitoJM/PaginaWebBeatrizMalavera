import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, SITE, scrollToSection } from '../data/site';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goTo = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Identidad: solo el nombre, sin logotipo */}
          <button
            onClick={() => goTo('inicio')}
            className="text-left group"
            aria-label="Ir al inicio"
          >
            <span
              className={`block font-display text-lg sm:text-xl font-semibold leading-tight transition-colors duration-500 ${
                isScrolled ? 'text-ink-950' : 'text-white'
              }`}
            >
              {SITE.name}
            </span>
            <span
              className={`block text-[0.68rem] font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${
                isScrolled ? 'text-brass-600' : 'text-brass-300'
              }`}
            >
              {SITE.role}
            </span>
          </button>

          {/* Navegación de escritorio */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => goTo(item.id)}
                className={`relative text-sm font-medium transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-brass-500 after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled
                    ? 'text-ink-700 hover:text-ink-950'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => goTo('contacto')}
              className="inline-flex items-center gap-2 rounded-full bg-brass-500 px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-brass-600 hover:shadow-lift hover:-translate-y-0.5"
            >
              <Phone className="h-4 w-4" />
              <span>Consulta gratuita</span>
            </button>
          </nav>

          {/* Botón de menú móvil */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-ink-900' : 'text-white'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Navegación móvil */}
      <div
        className={`lg:hidden overflow-hidden bg-white shadow-lift transition-[max-height,opacity] duration-400 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-6 py-6 space-y-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => goTo(item.id)}
              className="block w-full text-left py-2.5 text-ink-700 font-medium transition-colors hover:text-brass-600"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => goTo('contacto')}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-brass-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-brass-600"
          >
            <Phone className="h-4 w-4" />
            <span>Consulta gratuita</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
