import KeunggulanImg from '../img/dukungan.jpg';
import { motion } from 'framer-motion';

const KeunggulanDukungan = () => {
  return (
    <section
      className="relative w-full min-h-[600px] md:min-h-[800px] bg-cover bg-center flex items-center justify-center md:justify-start px-6 md:px-16 lg:px-32"
      style={{
        backgroundImage: `url(${KeunggulanImg})`,
        backgroundSize: 'cover',
      }}
    >
      {/* Backdrop Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-4xl bg-opacity-90 p-6 md:p-8 lg:p-10 shadow-lg rounded-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Title */}
        <motion.h3
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 text-center md:text-start"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          DUKUNGAN TEKNOLOGI
        </motion.h3>

        {/* List */}
        <motion.ul
          className="text-white text-left list-disc list-inside space-y-3 md:space-y-4 text-sm md:text-lg lg:text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.2,
            delayChildren: 0.4,
            duration: 0.6,
          }}
          viewport={{ once: true }}
        >
          {['Sistem komputerisasi terhubung global', 'Akses internet untuk data global', 'Jaringan telepon & fax memadai'].map((item, index) => (
            <motion.li key={index} className="text-sm md:text-base lg:text-lg" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default KeunggulanDukungan;
