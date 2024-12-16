import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">Workana</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600">Quiero contratar</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Quiero trabajar</a>
            <button className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">Ingresa</button>
            <button className="bg-blue-600 px-4 py-2 rounded-md text-white">Registrate</button>
          </div>
          
          <div className="md:hidden">
            <Menu className="h-6 w-6 text-gray-700" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;