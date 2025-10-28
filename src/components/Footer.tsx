import React from 'react';
import { Scale, Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-700 p-2 rounded-lg">
                <Scale className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg">Beatriz Helena Malavera</h1>
                <p className="text-sm text-gray-400">Derecho Financiero</p>
              </div>
            </div>
            <p className="text-gray-400">
              Especialista en insolvencia, negociación de deudas y recuperación financiera. 
              Más de 15 años ayudando a personas y empresas a recuperar su estabilidad económica.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('inicio')} className="text-gray-400 hover:text-white transition-colors">
                  Inicio
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('sobre-mi')} className="text-gray-400 hover:text-white transition-colors">
                  Sobre mí
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicios')} className="text-gray-400 hover:text-white transition-colors">
                  Servicios
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('procesos')} className="text-gray-400 hover:text-white transition-colors">
                  Proceso
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contacto')} className="text-gray-400 hover:text-white transition-colors">
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Ley de Insolvencia
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Negociación de Deudas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Recuperación de Cartera
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Ley de Vivienda
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Educación Financiera
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-gray-400">+57 (1) 234-5678</p>
                  <p className="text-gray-400">+57 300 123 4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <p className="text-gray-400">contacto@beatrizmalavera.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Carrera 11 # 93-07, Oficina 401</p>
                  <p className="text-gray-400">Bogotá, Colombia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Recibe tips legales y financieros directamente en tu correo
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-white"
              />
              <button className="bg-blue-700 px-6 py-2 rounded-r-lg hover:bg-blue-800 transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Beatriz Helena Malavera. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Aviso Legal
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Código de Ética
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;