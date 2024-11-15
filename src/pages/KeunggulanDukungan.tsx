import KeunggulanImg from '../img/dukungan.jpg';
import { motion } from 'framer-motion';

const KeunggulanDukungan = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[800px] bg-cover bg-center flex items-center justify-start px-[200px]"
      style={{
        backgroundImage: `url(${KeunggulanImg})`,
        backgroundSize: 'cover',
      }}
    >
      {/* Backdrop Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <motion.div className="relative z-10 max-w-4xl bg-opacity-90 p-8 shadow-lg" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: 'easeOut' }} viewport={{ once: true }}>
        {/* Title */}
        <motion.h3 className="text-5xl font-bold text-white mb-6 text-start" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}>
          DUKUNGAN TEKNOLOGI
        </motion.h3>

        {/* List */}
        <motion.ul
          className="text-white text-left list-disc list-inside space-y-4 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            staggerChildren: 0.2,
            delayChildren: 0.4,
            duration: 0.6,
          }}
          viewport={{ once: true }}
        >
          {[
            'Sistem komputerisasi terhubung global',
            'Galileo Reservation System untuk travel agent',
            'Sistem pembukuan Garuda Indonesia',
            'LAN ALTEA SYSTEM untuk operasional internal',
            'Akses internet untuk data global',
            'Jaringan telepon & fax memadai',
          ].map((item, index) => (
            <motion.li key={index} className="text-[20px]" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }} viewport={{ once: true }}>
              {item}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default KeunggulanDukungan;
