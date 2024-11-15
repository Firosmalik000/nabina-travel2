import AboutImage from '../img/about.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="w-full bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        {/* Image Section */}
        <motion.div className="w-[80%] md:w-1/2 flex justify-center  min-h-1 mb-8 md:mb-0" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          <img src={AboutImage} alt="About Us" className="w-full h-[520px] object-cover rounded-lg shadow-lg" />
        </motion.div>

        {/* Content Section */}
        <motion.div className="w-full md:w-1/2 px-4 md:px-8 lg:px-12 text-center md:text-left" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}>
          <h1 className="text-4xl md:text-4xl font-bold mb-6 text-blue-900">Tentang Kami</h1>
          <h2 className="text-[70px] font-playfair  mb-6">Your Travel Solution</h2>
          <p className="text-lg text-gray-700 mb-4 indent-6 leading-relaxed">
            PT. Muhammad Nabina International Tour and Travel (MNI), didirikan pada 2018 dan sebelumnya dikenal sebagai CV. Emja Tour and Travel, adalah perusahaan terkemuka di bidang Manajemen Tour & Travel. Dengan reputasi yang solid
            dalam melayani perjalanan domestik dan internasional, MNI berkembang pesat seiring kebutuhan pasar.
          </p>
          <p className="text-lg text-gray-700 indent-6 leading-relaxed">
            Sebagai mitra terpercaya, MNI menjalin kerja sama dengan berbagai perusahaan untuk memenuhi kebutuhan perjalanan bisnis dan wisata. Didukung oleh tim profesional berpengalaman dan layanan pelanggan 24 jam, MNI berkomitmen untuk
            memberikan solusi perjalanan yang efisien dan personal. Dengan dedikasi pada inovasi teknologi dan kualitas sumber daya manusia, MNI terus berupaya memberikan layanan yang unggul dan bernilai tinggi bagi pelanggan.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
