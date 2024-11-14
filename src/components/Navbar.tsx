import { useState, useEffect } from 'react';
import LogoImage from '../img/LOGO_NABINA_TRAVEL-removebg-preview.png';

import { FaTimes } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect scroll position to apply background change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'Tentang Kami' },
    { id: 'vision', label: 'Visi & Misi' },
    { id: 'service', label: 'Service' },
    { id: 'whyus', label: 'Keunggulan' },
    { id: 'contact', label: 'Hubungi Kami' },
  ];

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 z-50 w-full transition-colors duration-300 ${isScrolled ? 'bg-white shadow-lg text-black' : 'bg-none bg-opacity-70 text-white'}`}>
      <div className="container mx-auto flex items-center justify-between h-[90px] px-4 md:px-8 lg:px-10">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src={LogoImage} className="w-8 md:w-16 transition-transform duration-200 transform hover:scale-105" alt="Logo Nabina Travel" />
          <span className=" font-bold font-sans tracking-wide">Nabina Travel</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-x-6">
          {navItems.map((item) => (
            <div key={item.id} onClick={() => handleScrollTo(item.id)} className="cursor-pointer font-semibold hover:text-blue-500 transition-colors duration-200 transform hover:scale-105">
              {item.label}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden  focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes /> : <IoMenuSharp size={30} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-90 text-white flex flex-col items-center justify-center pt-16 transition-all duration-300 ease-in-out">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 focus:outline-none">
            <FaTimes size={30} />
          </button>
          {navItems.map((item) => (
            <div key={item.id} onClick={() => handleScrollTo(item.id)} className="cursor-pointer  py-3 text-center hover:text-blue-400 transition-colors duration-200 transform hover:scale-105">
              {item.label}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
