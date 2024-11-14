import { FaPlane, FaHotel, FaUsers, FaPassport } from 'react-icons/fa';

const Service = () => {
  return (
    <section id="service" className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Layanan Kami</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Kami menyediakan berbagai layanan wisata yang disesuaikan dengan kebutuhan Anda. Berikut adalah layanan unggulan kami dengan tim profesional yang siap membantu.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Layanan 1: Ticketing Consultant */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaPlane className="text-blue-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Ticketing Consultant</h3>
            <ul className="text-lg text-gray-700 mb-4">
              <li>1. Spv. Reservation Center: Siti Alfalakhiyah</li>
              <li>2. Ticketing Consultant: Hayatunnufus</li>
              <li>3. Ticketing Consultant: Muhammad Cerah</li>
            </ul>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Hubungi Kami</button>
          </div>

          {/* Layanan 2: MICE, Incentive Tour, Travel Document & Hotel Consultant */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaHotel className="text-green-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">MICE & Travel Document</h3>
            <ul className="text-lg text-gray-700 mb-4">
              <li>1. Coord. Tour & Group Div.: Padila</li>
              <li>2. Tour Consultant: Otoman</li>
              <li>3. Tour Consultant: Fauzi</li>
            </ul>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors">Hubungi Kami</button>
          </div>

          {/* Layanan 3: Haji & Umroh */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaUsers className="text-yellow-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Haji & Umroh</h3>
            <ul className="text-lg text-gray-700 mb-4">
              <li>1. Manager: Herianto</li>
              <li>2. Consultant: Rina Sulaiman</li>
              <li>3. Operational: M. Umar</li>
              <li>4. Operational: Sahril</li>
              <li>5. Operational: Kurniawan</li>
            </ul>
            <button className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors">Hubungi Kami</button>
          </div>

          {/* Layanan 4: Travel Document & Assistance */}
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaPassport className="text-red-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Dokumen Perjalanan</h3>
            <ul className="text-lg text-gray-700 mb-4">
              <li>Kami membantu mengurus dokumen perjalanan Anda, mulai dari passport, visa, hingga asuransi perjalanan. Layanan ini mencakup pengantaran dalam keadaan mendesak.</li>
            </ul>
            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">Hubungi Kami</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
