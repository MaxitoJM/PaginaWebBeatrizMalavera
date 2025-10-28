import React, { useState } from 'react';
import { 
  FileText, 
  Handshake, 
  TrendingUp, 
  Home, 
  Calculator, 
  GraduationCap,
  ArrowRight,
  X,
  CheckCircle
} from 'lucide-react';

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  benefits: string[];
  process: string[];
}

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services: Service[] = [
    {
      id: 'insolvencia',
      icon: FileText,
      title: 'Ley de Insolvencia',
      description: 'Análisis integral y defensa jurídica para reorganizar deudas y alcanzar acuerdos sostenibles.',
      benefits: [
        'Protección legal contra embargos',
        'Reorganización de todas las deudas',
        'Reducción hasta del 80% del monto total',
        'Plan de pagos personalizado'
      ],
      process: [
        'Evaluación de la situación financiera',
        'Preparación de documentación legal',
        'Presentación ante autoridad competente',
        'Negociación con acreedores',
        'Seguimiento del plan acordado'
      ]
    },
    {
      id: 'negociacion',
      icon: Handshake,
      title: 'Negociación de Deudas',
      description: 'Estrategias personalizadas para negociar con acreedores y reducir montos y tasas de interés.',
      benefits: [
        'Reducción de intereses moratorios',
        'Quita parcial del capital',
        'Planes de pago flexibles',
        'Evitar procesos judiciales'
      ],
      process: [
        'Análisis de cada deuda',
        'Estrategia de negociación',
        'Contacto directo con acreedores',
        'Acuerdos por escrito',
        'Monitoreo del cumplimiento'
      ]
    },
    {
      id: 'recuperacion',
      icon: TrendingUp,
      title: 'Recuperación de Cartera',
      description: 'Enfoque estratégico para la recuperación efectiva de cartera vencida.',
      benefits: [
        'Recuperación extrajudicial',
        'Procesos judiciales eficientes',
        'Negociación win-win',
        'Preservación de relaciones comerciales'
      ],
      process: [
        'Análisis de viabilidad',
        'Estrategia de cobranza',
        'Gestión extrajudicial',
        'Acciones legales si es necesario',
        'Recuperación efectiva'
      ]
    },
    {
      id: 'vivienda',
      icon: Home,
      title: 'Ley de Vivienda',
      description: 'Protección de tu vivienda y opciones legales ante impagos o ejecuciones hipotecarias.',
      benefits: [
        'Protección de vivienda familiar',
        'Reestructuración hipotecaria',
        'Defensa ante ejecuciones',
        'Opciones de refinanciamiento'
      ],
      process: [
        'Revisión del crédito hipotecario',
        'Evaluación de opciones legales',
        'Negociación con entidad financiera',
        'Implementación de solución',
        'Seguimiento y cumplimiento'
      ]
    },
    {
      id: 'intereses',
      icon: Calculator,
      title: 'Reducir Plazos e Intereses',
      description: 'Estrategias legales especializadas para optimizar condiciones de pago y reducir costos financieros.',
      benefits: [
        'Reducción de plazos de pago',
        'Disminución de tasas de interés',
        'Eliminación de comisiones',
        'Ahorro significativo'
      ],
      process: [
        'Análisis financiero detallado',
        'Identificación de oportunidades',
        'Estrategia de restructuración',
        'Negociación especializada',
        'Implementación y seguimiento'
      ]
    },
    {
      id: 'educacion',
      icon: GraduationCap,
      title: 'Educación Financiera',
      description: 'Capacitación para tomar decisiones financieras informadas y evitar futuras problemáticas.',
      benefits: [
        'Talleres personalizados',
        'Herramientas de planificación',
        'Prevención de sobreendeudamiento',
        'Mejores decisiones financieras'
      ],
      process: [
        'Diagnóstico de conocimientos',
        'Plan de capacitación personalizado',
        'Talleres teórico-prácticos',
        'Herramientas de seguimiento',
        'Acompañamiento continuo'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
            Servicios Especializados
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Soluciones integrales para tu estabilidad financiera
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrezco asesoría legal especializada con enfoque en resultados medibles y soluciones personalizadas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedService(service)}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-200 transition-colors">
                <service.icon className="h-8 w-8 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="flex items-center space-x-2 text-blue-700 font-medium group-hover:text-blue-800">
                <span>Saber más</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg">
                      <selectedService.icon className="h-8 w-8 text-blue-700" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                      <p className="text-gray-600">{selectedService.description}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Beneficios</h4>
                    <ul className="space-y-3">
                      {selectedService.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 mt-0.5" />
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Proceso</h4>
                    <ol className="space-y-3">
                      {selectedService.process.map((step, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <div className="flex items-center justify-center w-6 h-6 bg-blue-700 text-white text-sm rounded-full mt-0.5">
                            {index + 1}
                          </div>
                          <span className="text-gray-600">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => {
                      setSelectedService(null);
                      const contactSection = document.getElementById('contacto');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-blue-700 text-white px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors font-semibold"
                  >
                    Solicitar consulta gratuita
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;