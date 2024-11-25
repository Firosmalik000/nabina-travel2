import { FaPlane, FaHotel, FaUsers, FaPassport } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Service = () => {
  return (
    <section id="service" className="py-16 bg-red-700 ">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 className="text-4xl font-bold text-white mb-8" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          Layanan Kami
        </motion.h2>

        <motion.p className="text-lg text-white mb-12 max-w-3xl mx-auto" initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} viewport={{ once: true }}>
          Kami menyediakan berbagai layanan wisata yang disesuaikan dengan kebutuhan Anda. Berikut adalah layanan unggulan kami dengan tim profesional yang siap membantu.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <FaPlane className="text-blue-600 text-5xl mb-4 mx-auto" />,
              title: 'Ticketing Consultant',
              details: ['1. Spv. Reservation Center: Siti Alfalakhiyah', '2. Ticketing Consultant: Hayatunnufus', '3. Ticketing Consultant: Muhammad Cerah'],
            },
            {
              icon: <FaHotel className="text-green-600 text-5xl mb-4 mx-auto" />,
              title: 'MICE & Travel Document',
              details: ['1. Coord. Tour & Group Div.: Padila', '2. Tour Consultant: Otoman', '3. Tour Consultant: Fauzi'],
            },
            {
              icon: <FaUsers className="text-yellow-600 text-5xl mb-4 mx-auto" />,
              title: 'Haji & Umroh',
              details: ['1. Manager: Herianto', '2. Consultant: Rina Sulaiman', '3. Operational: M. Umar', '4. Operational: Martina', '5. Operational: Kurniawan'],
            },
            {
              icon: <FaPassport className="text-red-600 text-5xl mb-4 mx-auto" />,
              title: 'Dokumen Perjalanan',
              details: ['Kami membantu mengurus dokumen perjalanan Anda, mulai dari passport, visa, hingga asuransi perjalanan. Layanan ini mencakup pengantaran dalam keadaan mendesak.'],
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white relative rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.5 }}
              viewport={{ once: true }}
            >
              {/* Mengubah absolute dan menempatkannya di tengah */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col group-hover:opacity-30 transition duration-300 justify-center items-center">
                {service.icon}
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              </div>

              <ul className="text-lg text-gray-700 mb-4 flex flex-col justify-center items-center">
                {service.details.map((detail, i) => (
                  <li key={i} className={`opacity-0 group-hover:opacity-100 transition  duration-300 ease-in-out transform group-hover:translate-y-5  group-hover:translate-x-0 hover:opacity-100 hover:translate-x-2 hover:translate-y-2 `}>
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
