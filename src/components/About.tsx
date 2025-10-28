import React from 'react';
import { Award, BookOpen, Users, Download } from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    {
      icon: Award,
      title: "15+ años de experiencia",
      description: "Especializada en derecho financiero y recuperación de deudas"
    },
    {
      icon: BookOpen,
      title: "Formación continua",
      description: "Certificaciones en mediación financiera y ley de insolvencia"
    },
    {
      icon: Users,
      title: "500+ casos exitosos",
      description: "Clientes satisfechos con soluciones personalizadas"
    }
  ];

  return (
    <section id="sobre-mi" className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Sobre mí
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Beatriz Helena Malavera
              </h2>
              <p className="text-xl text-gray-600">
                Abogada especialista en Derecho Financiero con enfoque en soluciones prácticas y resultados medibles
              </p>
            </div>

            <div className="prose prose-lg text-gray-600">
              <p>
                Con más de 15 años de experiencia en el sector financiero y legal, me especializo en brindar 
                asesoría integral a personas y empresas que enfrentan dificultades económicas. Mi enfoque se 
                centra en encontrar soluciones personalizadas que permitan reducir plazos, disminuir intereses 
                y recuperar la estabilidad financiera.
              </p>
              <p>
                Graduada con honores de la Universidad Nacional, cuento con especializaciones en Derecho 
                Financiero, Mediación Empresarial y Ley de Insolvencia. Mi metodología combina el conocimiento 
                legal profundo con un enfoque humano y práctico.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                  <div className="flex items-center justify-center mb-4">
                    <achievement.icon className="h-8 w-8 text-blue-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center space-x-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors">
                <Download className="h-5 w-5" />
                <span>Descargar CV</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white text-blue-700 px-6 py-3 rounded-lg border-2 border-blue-700 hover:bg-blue-50 transition-colors">
                <Users className="h-5 w-5" />
                <span>Ver certificaciones</span>
              </button>
            </div>
          </div>

          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Dra. María González en su oficina profesional" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-blue-700">100%</div>
              <div className="text-sm text-gray-600">Confidencialidad garantizada</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;