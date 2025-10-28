import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Shield,
  Calendar
} from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
            Contacto
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Agenda tu consulta gratuita
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Obtén asesoría personalizada para tu situación. Primera consulta sin costo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Envía tu consulta</h3>
            
            {isSubmitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-600" />
                <span className="text-green-800">¡Mensaje enviado exitosamente! Te contactaremos pronto.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="+57 300 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Servicio de interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="">Selecciona un servicio</option>
                    <option value="insolvencia">Ley de Insolvencia</option>
                    <option value="negociacion">Negociación de Deudas</option>
                    <option value="recuperacion">Recuperación de Cartera</option>
                    <option value="vivienda">Ley de Vivienda</option>
                    <option value="intereses">Reducir Plazos e Intereses</option>
                    <option value="educacion">Educación Financiera</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Describe tu situación *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Cuéntanos brevemente tu situación financiera para poder brindarte la mejor asesoría..."
                ></textarea>
              </div>

              <div className="flex items-start space-x-3">
                <Shield className="h-5 w-5 text-teal-600 mt-0.5" />
                <p className="text-sm text-gray-600">
                  Toda la información proporcionada es completamente confidencial y está protegida por secreto profesional.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-4 px-6 rounded-lg hover:bg-blue-800 transition-colors font-semibold flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Enviar consulta</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Teléfono</h4>
                    <p className="text-gray-600">+57 (1) 234-5678</p>
                    <p className="text-gray-600">+57 300 123 4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">contacto@beatrizmalavera.com</p>
                    <p className="text-gray-600">consultas@beatrizmalavera.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Oficina</h4>
                    <p className="text-gray-600">Carrera 11 # 93-07, Oficina 401</p>
                    <p className="text-gray-600">Bogotá, Colombia</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                    <Clock className="h-6 w-6 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Horarios</h4>
                    <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Sábados: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-teal-50 rounded-xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-teal-600" />
                <h4 className="font-semibold text-teal-900">Consulta gratuita</h4>
              </div>
              <p className="text-teal-800 mb-4">
                La primera consulta es completamente gratuita. Analizaremos tu caso y te proporcionaremos 
                opciones viables sin ningún compromiso.
              </p>
              <ul className="text-sm text-teal-700 space-y-1">
                <li>• Evaluación inicial sin costo</li>
                <li>• Análisis de viabilidad</li>
                <li>• Opciones y estrategias disponibles</li>
                <li>• Plan de trabajo personalizado</li>
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-6">
              <h4 className="font-semibold text-blue-900 mb-3">Atención de emergencias</h4>
              <p className="text-blue-800 text-sm mb-2">
                Para casos urgentes que requieran atención inmediata (embargos, notificaciones judiciales):
              </p>
              <p className="font-semibold text-blue-900">WhatsApp: +57 300 123 4567</p>
              <p className="text-xs text-blue-700">Disponible 24/7 para emergencias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;