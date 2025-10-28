import React from 'react';
import { ArrowRight, CheckCircle, Users, TrendingDown } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen bg-gradient-to-br from-blue-50 to-white pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
                <CheckCircle className="h-4 w-4 mr-2" />
                Especialista en Derecho Financiero
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Soluciones legales efectivas en 
                <span className="text-blue-700 block">insolvencia y gestión de deudas</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Asesoría experta para reducir plazos, pagar menos intereses y recuperar tu estabilidad financiera con estrategias legales personalizadas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-all duration-200 flex items-center justify-center space-x-2 font-semibold shadow-lg hover:shadow-xl"
              >
                <span>Agenda una consulta</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="bg-white text-blue-700 px-8 py-4 rounded-lg border-2 border-blue-700 hover:bg-blue-50 transition-all duration-200 font-semibold"
              >
                Ver servicios
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Casos exitosos</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingDown className="h-8 w-8 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">70%</div>
                <div className="text-sm text-gray-600">Reducción promedio</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">15</div>
                <div className="text-sm text-gray-600">Años experiencia</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Abogada especialista en insolvencia trabajando en su oficina" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-blue-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;