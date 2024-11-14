import React from 'react';
import { FaHandshake, FaShieldAlt, FaMoneyBillWave, FaMapMarkedAlt } from 'react-icons/fa';
import ProfessionalImage from '../img/IMG_20241011_141158.jpg';
import SecurityImage from '../img/IMG_20241011_141158.jpg';
import AffordableImage from '../img/WhatsApp Image 2024-11-13 at 12.10.17.jpeg';
import DestinationsImage from '../img/IMG_20240624_071934.jpg';

const Keunggulann = () => {
  return (
    <section id="keunggulan" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Keunggulan Kami</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Kami berkomitmen memberikan pengalaman perjalanan yang aman, terjangkau, dan berkualitas. Berikut adalah alasan mengapa Nabina Travel menjadi pilihan yang tepat untuk Anda:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Keunggulan 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={ProfessionalImage} alt="Layanan Profesional" className="w-full h-40 object-cover rounded-md mb-4" />
            <FaHandshake className="text-blue-700 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Layanan Profesional</h3>
            <h4 className="text-lg font-medium text-gray-700 mb-2">Pelayanan Prima untuk Kenyamanan Anda</h4>
            <p className="text-gray-600">Tim kami terdiri dari para ahli yang berpengalaman di bidang pariwisata untuk memastikan setiap perjalanan berjalan lancar dan memuaskan.</p>
          </div>

          {/* Keunggulan 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={SecurityImage} alt="Keamanan Terjamin" className="w-full h-40 object-cover rounded-md mb-4" />
            <FaShieldAlt className="text-green-700 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Keamanan Terjamin</h3>
            <h4 className="text-lg font-medium text-gray-700 mb-2">Perlindungan Anda Adalah Prioritas Kami</h4>
            <p className="text-gray-600">Keamanan Anda adalah prioritas utama kami. Kami bekerja sama dengan pihak yang terpercaya untuk memastikan keamanan selama perjalanan.</p>
          </div>

          {/* Keunggulan 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={AffordableImage} alt="Harga Terjangkau" className="w-full h-40 object-cover rounded-md mb-4" />
            <FaMoneyBillWave className="text-yellow-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Harga Terjangkau</h3>
            <h4 className="text-lg font-medium text-gray-700 mb-2">Paket Hemat dengan Kualitas Terbaik</h4>
            <p className="text-gray-600">Kami menawarkan paket perjalanan dengan harga yang kompetitif tanpa mengurangi kualitas layanan yang kami berikan.</p>
          </div>

          {/* Keunggulan 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img src={DestinationsImage} alt="Pilihan Destinasi Lengkap" className="w-full h-40 object-cover rounded-md mb-4" />
            <FaMapMarkedAlt className="text-red-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Pilihan Destinasi Lengkap</h3>
            <h4 className="text-lg font-medium text-gray-700 mb-2">Liburan Impian di Banyak Lokasi</h4>
            <p className="text-gray-600">Kami menyediakan berbagai destinasi menarik, baik lokal maupun internasional, yang dapat disesuaikan dengan preferensi Anda.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keunggulann;
