'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const links = [
    { text: 'Inicio', url: '/' },
    { text: 'Sección', url: '/' },
    { text: 'Login', url: '/login' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsSticky(scrollTop > 100); // cuando baja más de 100px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`${isSticky ? 'fixed top-0 left-0 w-full z-50 shadow-lg' : 'relative'}  bg-baseSurface text-neutralDarkest transition-all duration-200`}
    >
      <div className="flex justify-between items-center container mx-auto py-4 px-4 lg:px-0">
        <div className="flex gap-1 items-center">
          <Image
            src={'/icons/notus-logo.webp'}
            alt="Notus logo"
            width={40}
            height={40}
          />
          <h1 className="text-xl font-bold">Notus</h1>
        </div>

        {/* Menú desktop */}
        <nav className="hidden md:flex space-x-6">
          {links.map(link => (
            <a key={link.text} href={link.url}>
              {link.text}
            </a>
          ))}
        </nav>

        {/* Menú mobile toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="md:hidden bg-baseSurface text-text text-xl uppercase text-center shadow-md">
          <nav className="flex flex-col space-y-2 p-4">
            {links.map(link => (
              <a key={link.text} href={link.url}>
                {link.text}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
