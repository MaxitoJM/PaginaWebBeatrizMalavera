import React from 'react';
import { Search, FileText, Users, TrendingUp, CheckCircle2 } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: "Evaluación inicial",
      description: "Análisis completo de tu situación financiera y legal sin costo",
      duration: "1-2 días"
    },
    {
      icon: FileText,
      title: "Plan personalizado",
      description: "Diseño de estrategia específica basada en tus necesidades",
      duration: "3-5 días"
    },
    {
      icon: Users,
      title: "Negociación",
      description: "Gestión directa con acreedores y entidades financieras",
      duration: "2-4 semanas"
    },
    {
      icon: TrendingUp,
      title: "Seguimiento",
      description: "Monitoreo continuo del cumplimiento de acuerdos",
      duration: "Permanente"
    }
  ];

  const guarantees = [
    "Consulta inicial gratuita",
    "Confidencialidad absoluta",
    "Comunicación transparente",
    "Resultados medibles",
    "Soporte continuo"
  ];

  return (
    <section id="procesos" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Nuestro Proceso
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Cómo trabajamos juntos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso estructurado y transparente que garantiza resultados efectivos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6">
                  <step.icon className="h-8 w-8 text-blue-700" />
                </div>
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 mb-4">{step.description}</p>
                <div className="text-sm text-blue-700 font-medium bg-blue-50 px-3 py-1 rounded-full inline-block">
                  {step.duration}
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                Garantías de confianza
              </h3>
              <ul className="space-y-4">
                {guarantees.map((guarantee, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="h-6 w-6 text-teal-600" />
                    <span className="text-gray-700 text-lg">{guarantee}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-6 bg-teal-50 rounded-lg">
                <h4 className="font-semibold text-teal-900 mb-2">Compromiso de resultados</h4>
                <p className="text-teal-800">
                  Si no logramos una reducción significativa en tus deudas o mejores condiciones de pago, 
                  no pagas honorarios por gestión.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Proceso de trabajo profesional" 
                className="w-full h-auto rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">90%</div>
                <div className="text-blue-100">Tasa de éxito</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;