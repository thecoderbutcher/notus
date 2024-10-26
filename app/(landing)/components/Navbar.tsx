'use client'
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex w-full bg-blue-600 text-white relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Sitio</h1> 
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menú desktop */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">Inicio</a>
          <a href="#" className="hover:underline">Servicios</a>
          <a href="#" className="hover:underline">Contacto</a>
        </nav>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-blue-700 md:hidden shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            <a href="#" className="hover:underline">Inicio</a>
            <a href="#" className="hover:underline">Servicios</a>
            <a href="#" className="hover:underline">Contacto</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar
