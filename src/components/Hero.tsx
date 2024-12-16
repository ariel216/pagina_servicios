import React from 'react';
import { Shield, Users, CreditCard } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="flex space-x-4 mb-6">
              <span className="flex items-center text-sm text-gray-600">
                <Shield className="h-4 w-4 mr-2" /> Consulta Gratuita
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <Users className="h-4 w-4 mr-2" /> Garantía de satisfacción
              </span>
              <span className="flex items-center text-sm text-gray-600">
                <CreditCard className="h-4 w-4 mr-2" /> Pagos protegidos
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Impulsa tu negocio con el{' '}
              <span className="text-purple-600">mejor talento remoto</span>{' '}
              de América Latina
            </h1>
            
            <p className="text-gray-600 mb-8">
              Desarrolla tu negocio de manera rápida y segura.
              Te conectamos con miles de talentos en tu idioma y zona horaria.
            </p>
            
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                Quiero contratar
              </button>
              <button className="text-blue-600 px-6 py-3 rounded-md border border-blue-600 hover:bg-blue-50">
                ¿Quieres trabajar?
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="relative">
                  <img
                    src={`https://images.unsplash.com/photo-${i}?w=150&h=150&fit=crop`}
                    alt="Remote worker"
                    className="rounded-full w-20 h-20 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;