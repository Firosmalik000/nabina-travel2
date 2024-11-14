import { FaBullseye, FaLightbulb } from 'react-icons/fa';

const MisiVisi = () => {
  return (
    <section id="misi-visi" className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Visi & Misi</h2>
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Kami berdedikasi untuk menjadi pemimpin dalam industri perjalanan dan pariwisata, serta memberikan pengalaman yang menginspirasi dan berkesan bagi setiap pelanggan kami.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Visi Section */}
          <div className="p-6 bg-blue-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaBullseye className="text-blue-700 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Visi Kami</h3>
            <p className="text-gray-700">
              Menjadi agen perjalanan terkemuka yang memberikan layanan terbaik dalam Manajemen Tour & Travel, dengan fokus pada kepuasan pelanggan dan inovasi layanan yang dapat diandalkan, serta terus berkembang untuk menjadi mitra
              terpercaya dalam perjalanan domestik dan internasional.
            </p>
          </div>

          {/* Misi Section */}
          <div className="p-6 bg-green-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaLightbulb className="text-green-700 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-green-900 mb-2">Misi Kami</h3>
            <ul className="text-gray-700 list-disc list-inside text-left mt-4">
              <li>Memberikan layanan perjalanan yang berkualitas dan terjangkau, baik untuk perjalanan domestik maupun internasional, dengan fleksibilitas biaya yang sesuai dengan kebutuhan pelanggan.</li>
              <li>Membangun kemitraan jangka panjang dengan perusahaan-perusahaan dan klien bisnis untuk memenuhi berbagai kebutuhan perjalanan mereka.</li>
              <li>Menyediakan solusi yang inovatif dan efisien dengan memanfaatkan Sumber Daya Manusia dan Teknologi Informasi yang handal dalam mendukung setiap proses bisnis pelanggan.</li>
              <li>Terus berkembang dan meningkatkan kualitas layanan melalui pelatihan, pengembangan staf, dan teknologi terkini guna memenuhi ekspektasi pelanggan di setiap kesempatan.</li>
              <li>Menjadi perusahaan yang berkomitmen terhadap keberlanjutan dan pertumbuhan yang memberikan dampak positif bagi industri Tour & Travel di Indonesia dan dunia.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisiVisi;
