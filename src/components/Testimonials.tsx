import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Ana Martínez",
      role: "Comerciante",
      content: "Logré reducir mis deudas en un 65% y obtener un plan de pagos que realmente puedo cumplir. La Dra. González fue clave en mi recuperación financiera.",
      rating: 5,
      savings: "65% reducción"
    },
    {
      name: "Carlos Rodríguez",
      role: "Empresario",
      content: "Excelente asesoría en el proceso de insolvencia. Me ayudó a proteger mi vivienda y reestructurar todas mis deudas de manera efectiva.",
      rating: 5,
      savings: "Vivienda protegida"
    },
    {
      name: "María Fernández",
      role: "Profesional independiente",
      content: "La negociación con los bancos fue exitosa. Conseguimos eliminar intereses moratorios y reducir significativamente el capital adeudado.",
      rating: 5,
      savings: "70% menos intereses"
    }
  ];

  const stats = [
    { value: "500+", label: "Casos exitosos" },
    { value: "95%", label: "Clientes satisfechos" },
    { value: "70%", label: "Reducción promedio" },
    { value: "15", label: "Años experiencia" }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-medium">
            Casos de Éxito
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonios reales de personas que recuperaron su estabilidad financiera
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <Quote className="h-8 w-8 text-blue-200 mb-4" />
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex justify-between items-end">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
                <div className="text-right">
                  <div className="font-bold text-teal-600">{testimonial.savings}</div>
                  <div className="text-xs text-gray-500">Resultado</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-700 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;