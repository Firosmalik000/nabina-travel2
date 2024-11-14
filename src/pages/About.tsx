import { FaMapMarkedAlt, FaSuitcase, FaUsers } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-6">Tentang Kami</h2>
        <p className="text-lg text-gray-700 mb-10 mx-auto max-w-3xl">
          Nabina Travel berkomitmen untuk memberikan pengalaman perjalanan yang luar biasa kepada setiap pelanggan. Dengan jaringan global dan pengalaman bertahun-tahun, kami siap membawa Anda ke tujuan impian Anda dengan aman dan nyaman.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaMapMarkedAlt className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Destinasi Global</h3>
            <p className="text-gray-600">Menyediakan perjalanan ke berbagai destinasi terkenal di seluruh dunia untuk petualangan yang tak terlupakan.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaSuitcase className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Paket Wisata Terjangkau</h3>
            <p className="text-gray-600">Pilihan paket wisata yang terjangkau dan disesuaikan untuk segala kebutuhan, dari tur pribadi hingga grup.</p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaUsers className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-blue-900 mb-2">Layanan Pelanggan Profesional</h3>
            <p className="text-gray-600">Tim kami yang profesional selalu siap membantu Anda untuk memastikan perjalanan yang aman dan nyaman.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
