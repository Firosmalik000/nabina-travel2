import { FaBullseye, FaLightbulb } from 'react-icons/fa';
import { motion } from 'framer-motion';
import visi1 from '../img/visi1.jpg';
import visi2 from '../img/visi2.jpg';
import visi3 from '../img/visi3.jpeg';

const MisiVisi = () => {
  return (
    <section id="visi" className="py-16 w-full bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <motion.h2 className="text-4xl font-bold text-blue-900 mb-8" initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          Visi & Misi
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center mx-auto">
          {/* Visi & Misi Content */}
          <div className="flex flex-col gap-6 md:w-2/3">
            {/* Visi Section */}
            <motion.div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
              <FaBullseye className="text-blue-700 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-blue-900 mb-2">Visi Kami</h3>
              <p className="text-[20px] text-gray-700">
                Menjadi agen perjalanan terkemuka yang memberikan layanan terbaik dalam Manajemen Tour & Travel, dengan fokus pada kepuasan pelanggan dan inovasi layanan yang dapat diandalkan, serta terus berkembang untuk menjadi mitra
                terpercaya dalam perjalanan domestik dan internasional.
              </p>
            </motion.div>

            {/* Misi Section */}
            <motion.div
              className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <FaLightbulb className="text-green-700 text-5xl mb-4 mx-auto" />
              <h3 className="text-2xl font-semibold text-green-900 mb-2">Misi Kami</h3>
              <ul className="text-[20px] text-gray-700 list-disc list-inside text-left mt-4">
                <li>Memberikan layanan perjalanan yang berkualitas dan terjangkau, baik untuk perjalanan domestik maupun internasional, dengan fleksibilitas biaya yang sesuai dengan kebutuhan pelanggan.</li>
                <li>Membangun kemitraan jangka panjang dengan perusahaan-perusahaan dan klien bisnis untuk memenuhi berbagai kebutuhan perjalanan mereka.</li>
                <li>Menyediakan solusi yang inovatif dan efisien dengan memanfaatkan Sumber Daya Manusia dan Teknologi Informasi yang handal dalam mendukung setiap proses bisnis pelanggan.</li>
                <li>Terus berkembang dan meningkatkan kualitas layanan melalui pelatihan, pengembangan staf, dan teknologi terkini guna memenuhi ekspektasi pelanggan di setiap kesempatan.</li>
                <li>Menjadi perusahaan yang berkomitmen terhadap keberlanjutan dan pertumbuhan yang memberikan dampak positif bagi industri Tour & Travel di Indonesia dan dunia.</li>
              </ul>
            </motion.div>
          </div>

          {/* Images Section */}
          <motion.div className="flex flex-col gap-6 md:w-1/3" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}>
            <motion.img src={visi1} alt="Visi 1" className="h-[400px] w-[400px] rounded-lg shadow-md" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }} />
            <motion.img src={visi2} alt="Visi 2" className="h-[400px] w-[400px] rounded-lg shadow-md" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.6 }} />
            <motion.img src={visi3} alt="Visi 3" className="h-[400px] w-[400px] rounded-lg shadow-md" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.8 }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MisiVisi;
