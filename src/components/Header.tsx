import React, { useState, useEffect } from 'react';
import { Menu, X, Scale, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-700 p-2 rounded-lg">
              <Scale className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="font-bold text-lg text-gray-900">Beatriz Helena Malavera</h1>
              <p className="text-xs text-gray-600">Derecho Financiero</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Inicio
            </button>
            <button onClick={() => scrollToSection('sobre-mi')} className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Sobre mí
            </button>
            <button onClick={() => scrollToSection('servicios')} className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Servicios
            </button>
            <button onClick={() => scrollToSection('procesos')} className="text-gray-700 hover:text-blue-700 font-medium transition-colors">
              Proceso
            </button>
            <button onClick={() => scrollToSection('contacto')} className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>Consulta</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
            <nav className="px-4 py-4 space-y-4">
              <button onClick={() => scrollToSection('inicio')} className="block w-full text-left text-gray-700 hover:text-blue-700 font-medium">
                Inicio
              </button>
              <button onClick={() => scrollToSection('sobre-mi')} className="block w-full text-left text-gray-700 hover:text-blue-700 font-medium">
                Sobre mí
              </button>
              <button onClick={() => scrollToSection('servicios')} className="block w-full text-left text-gray-700 hover:text-blue-700 font-medium">
                Servicios
              </button>
              <button onClick={() => scrollToSection('procesos')} className="block w-full text-left text-gray-700 hover:text-blue-700 font-medium">
                Proceso
              </button>
              <button onClick={() => scrollToSection('contacto')} className="flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <Phone className="h-4 w-4" />
                <span>Consulta</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;