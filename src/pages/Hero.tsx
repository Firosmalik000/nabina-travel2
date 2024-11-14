import HeroImage from '../img/hero.jpeg';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
      }}
    >
      {/* Backdrop Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-white text-center px-[100px]">
        <motion.h1 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Nabina Travel
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="text-lg md:text-2xl font-medium">
          Discover new adventures with us
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
