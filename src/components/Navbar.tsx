import { useState, useEffect } from 'react';
import LogoImage from '../img/LOGO_NABINA_TRAVEL-removebg-preview.png';
import { FaTimes } from 'react-icons/fa';
import { IoMenuSharp } from 'react-icons/io5';
import { motion } from 'framer-motion';

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
    { id: 'visi', label: 'Visi & Misi' },
    { id: 'management', label: 'Managemen' },
    { id: 'service', label: 'Layanan' },
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
      <div className="container mx-auto flex items-center justify-between h-[90px] px-4 md:px-6 lg:px-8">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <motion.img
            src={LogoImage}
            className="w-8 md:w-16 transition-transform duration-300 transform hover:scale-115"
            alt="Logo Nabina Travel"
            whileHover={{ scale: 2.1 }} // Animation on hover to scale up
            transition={{ duration: 0.3 }}
          />
          <motion.h1 className="font-bold tracking-wide" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            Nabina Travel
          </motion.h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-x-6">
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="cursor-pointer font-semibold group hover:text-blue-500 transition-colors duration-200 transform hover:scale-105 text-base relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }} // Fade in with delay
            >
              {item.label}
              <div className="absolute bg-red-500 transform translate-x-5 group-hover:translate-x-0 transition-all duration-200 ease-in-out">
                <hr />
              </div>
            </motion.div>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <motion.div key="close" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.3 }}>
              <FaTimes />
            </motion.div>
          ) : (
            <motion.div key="menu" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} transition={{ duration: 0.3 }}>
              <IoMenuSharp size={30} />
            </motion.div>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-90 text-white flex flex-col items-center justify-center pt-16 transition-all duration-300 ease-in-out"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 focus:outline-none">
            <FaTimes size={30} />
          </button>
          {navItems.map((item, index) => (
            <motion.div
              key={item.id}
              onClick={() => handleScrollTo(item.id)}
              className="cursor-pointer py-3 text-center hover:text-blue-400 transition-colors duration-200 transform hover:scale-105 text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }} // Fade in with delay
            >
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
