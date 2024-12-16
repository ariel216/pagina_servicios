import React from 'react';
import { Code, Palette, MessageSquare } from 'lucide-react';

const Services = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-center mb-12">
          DESCUBRE TALENTOS CON LAS HABILIDADES QUE NECESITAS
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Code className="h-8 w-8 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-blue-600">PROGRAMACIÓN</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <Code className="h-5 w-5 mr-3 text-blue-600" />
                Programación Web
              </li>
              <li className="flex items-center text-gray-700">
                <Code className="h-5 w-5 mr-3 text-blue-600" />
                WordPress
              </li>
              <li className="flex items-center text-gray-700">
                <Code className="h-5 w-5 mr-3 text-blue-600" />
                E-commerce
              </li>
              <li className="flex items-center text-gray-700">
                <Code className="h-5 w-5 mr-3 text-blue-600" />
                Apps Android & iOS
              </li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <Palette className="h-8 w-8 text-red-600 mr-3" />
              <h3 className="text-xl font-semibold text-red-600">DISEÑO Y MULTIMEDIA</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <Palette className="h-5 w-5 mr-3 text-red-600" />
                Diseño de logo
              </li>
              <li className="flex items-center text-gray-700">
                <Palette className="h-5 w-5 mr-3 text-red-600" />
                Diseño Web
              </li>
              <li className="flex items-center text-gray-700">
                <Palette className="h-5 w-5 mr-3 text-red-600" />
                Ilustraciones
              </li>
              <li className="flex items-center text-gray-700">
                <Palette className="h-5 w-5 mr-3 text-red-600" />
                Edición de video
              </li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-8 rounded-xl">
            <div className="flex items-center mb-6">
              <MessageSquare className="h-8 w-8 text-green-600 mr-3" />
              <h3 className="text-xl font-semibold text-green-600">MARKETING</h3>
            </div>
            <ul className="space-y-4">
              <li className="flex items-center text-gray-700">
                <MessageSquare className="h-5 w-5 mr-3 text-green-600" />
                Marketing Digital
              </li>
              <li className="flex items-center text-gray-700">
                <MessageSquare className="h-5 w-5 mr-3 text-green-600" />
                SEO
              </li>
              <li className="flex items-center text-gray-700">
                <MessageSquare className="h-5 w-5 mr-3 text-green-600" />
                Email Marketing
              </li>
              <li className="flex items-center text-gray-700">
                <MessageSquare className="h-5 w-5 mr-3 text-green-600" />
                Community Manager
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-purple-600 text-white px-8 py-3 rounded-md hover:bg-purple-700">
            Descubre todas las habilidades
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;