import HeroImage from '../img/hero.jpeg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${HeroImage})`,
      }}
    >
      {/* Backdrop Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center md:items-start justify-center min-h-screen text-white px-6 md:px-20 lg:px-40">
        <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-center md:text-left">
          Welcome to
        </motion.h1>
        <motion.span
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="block text-2xl sm:text-4xl lg:text-7xl font-extrabold text-center md:text-left max-w-full md:max-w-4xl mb-4"
        >
          Muhammad Nabina International Tour and Travel
        </motion.span>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-base sm:text-lg md:text-xl lg:text-3xl font-bold text-center md:text-left">
          Mewujudkan Impian Anda ke Tanah Suci
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
