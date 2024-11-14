import React from 'react';
import { FaPlane, FaHotel, FaTaxi, FaUtensils } from 'react-icons/fa';

const Service = () => {
  return (
    <section id="service" className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Layanan Kami</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Kami menyediakan berbagai layanan wisata yang disesuaikan dengan kebutuhan Anda. Berikut adalah layanan unggulan kami untuk memastikan perjalanan Anda berjalan dengan lancar dan menyenankan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Layanan 1 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaPlane className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Paket Wisata</h3>
            <p className="text-lg text-gray-700 mb-4">Kami menawarkan paket wisata lengkap dengan destinasi terbaik di seluruh Indonesia dan luar negeri. Dapatkan pengalaman liburan yang tak terlupakan!</p>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Lihat Paket</button>
          </div>

          {/* Layanan 2 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaHotel className="text-green-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Akomodasi</h3>
            <p className="text-lg text-gray-700 mb-4">Menyediakan pilihan akomodasi terbaik, mulai dari hotel mewah hingga penginapan yang nyaman dan terjangkau. Kami memastikan Anda merasa seperti di rumah.</p>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">Cari Akomodasi</button>
          </div>

          {/* Layanan 3 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaTaxi className="text-yellow-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Transportasi</h3>
            <p className="text-lg text-gray-700 mb-4">Menyediakan layanan transportasi yang aman dan nyaman, dari mobil sewa hingga layanan antar jemput bandara untuk memastikan perjalanan Anda lebih mudah.</p>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors">Pesan Transportasi</button>
          </div>

          {/* Layanan 4 */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaUtensils className="text-red-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Kuliner</h3>
            <p className="text-lg text-gray-700 mb-4">Nikmati pengalaman kuliner lokal dan internasional dengan pilihan restoran terbaik yang kami rekomendasikan. Kami pastikan Anda mencicipi yang terbaik.</p>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">Jelajahi Kuliner</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
