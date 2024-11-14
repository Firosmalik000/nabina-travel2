import AboutImage from '../img/about.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${AboutImage})`,
      }}
    >
      {/* Backdrop Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-end justify-center min-h-screen text-white text-right w-full md:w-[1000px] px-8 md:px-[100px] ml-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Tentang Kami</h1>
        <p className="text-lg text-gray-200 mb-6 indent-6">
          PT. Muhammad Nabina International Tour and Travel (MNI), didirikan pada 2018 dan sebelumnya dikenal sebagai CV. Emja Tour and Travel, adalah perusahaan terkemuka di bidang Manajemen Tour & Travel. Dengan reputasi yang solid dalam
          melayani perjalanan domestik dan internasional, MNI berkembang pesat seiring kebutuhan pasar.
        </p>
        <p className="text-lg text-gray-200 indent-6">
          Sebagai mitra terpercaya, MNI menjalin kerja sama dengan berbagai perusahaan untuk memenuhi kebutuhan perjalanan bisnis dan wisata. Didukung oleh tim profesional berpengalaman dan layanan pelanggan 24 jam, MNI berkomitmen untuk
          memberikan solusi perjalanan yang efisien dan personal. Dengan dedikasi pada inovasi teknologi dan kualitas sumber daya manusia, MNI terus berupaya memberikan layanan yang unggul dan bernilai tinggi bagi pelanggan.
        </p>
      </div>
    </section>
  );
};

export default About;
