import { FaBuilding, FaGlobe, FaNetworkWired, FaClipboardList, FaBusinessTime } from 'react-icons/fa';

const Keunggulann = () => {
  return (
    <section id="keunggulan" className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">KEUNGGULAN PERUSAHAAN</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          Kami berkomitmen memberikan pengalaman perjalanan yang aman, terjangkau, dan berkualitas. Berikut adalah alasan mengapa Nabina Travel menjadi pilihan yang tepat untuk Anda:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Keunggulan 1 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaBuilding className="text-blue-700 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">KEUNGGULAN PERUSAHAAN</h3>
            <ul className="text-gray-600 list-disc list-inside text-left">
              <li className="text-[20px]">Lokasi strategis di tengah kota</li>
              <li className="text-[20px]">Standard Travel Agent International di Indonesia</li>
              <li className="text-[20px]">Staff profesional, menyenangkan, & terdidik</li>
              <li className="text-[20px]">Berpengalaman dalam manajemen perjalanan</li>
              <li className="text-[20px]">Kemudahan akomodasi hotel</li>
              <li className="text-[20px]">Pengantaran dokumen di seluruh wilayah Indonesia</li>
            </ul>
          </div>

          {/* Keunggulan 2 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaGlobe className="text-green-700 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">LINGKUP PELAYANAN</h3>
            <ul className="text-gray-600 list-disc list-inside text-left">
              <li className="text-[20px]">Paket program tour domestik dan internasional</li>
              <li className="text-[20px]">Penjualan tiket pesawat internasional & domestik</li>
              <li className="text-[20px]">Reservasi hotel domestik & internasional</li>
              <li className="text-[20px]">Penjualan tiket kereta api domestik</li>
              <li className="text-[20px]">Penyewaan mobil & bus pariwisata</li>
              <li className="text-[20px]">Pengurusan dokumen perjalanan (passport, visa, dll)</li>
              <li className="text-[20px]">Sejak 1969</li>
            </ul>
          </div>

          {/* Keunggulan 3 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaNetworkWired className="text-yellow-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">DUKUNGAN TEKNOLOGI</h3>
            <ul className="text-gray-600 list-disc list-inside text-left">
              <li className="text-[20px]">Sistem komputerisasi terhubung global</li>
              <li className="text-[20px]">Galileo Reservation System untuk travel agent</li>
              <li className="text-[20px]">Sistem pembukuan Garuda Indonesia</li>
              <li className="text-[20px]">LAN ALTEA SYSTEM untuk operasional internal</li>
              <li className="text-[20px]">Akses internet untuk data global</li>
              <li className="text-[20px]">Jaringan telepon & fax memadai</li>
            </ul>
          </div>

          {/* Keunggulan 4 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaClipboardList className="text-blue-700 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">LINGKUP PELAYANAN</h3>
            <p className="text-gray-600 text-[20px]">Memberikan laporan lengkap bagi manajemen pelanggan untuk identifikasi biaya perjalanan demi pengendalian anggaran dan biaya.</p>
          </div>

          {/* Keunggulan 5 */}
          <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <FaBusinessTime className="text-red-600 text-5xl mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">PELAYANAN LAINNYA</h3>
            <p className="text-gray-600 text-[20px]">Kami menyediakan saran perjalanan terbaik, dokumen perjalanan bisnis, asuransi, dan pengantaran dalam keadaan mendesak.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Keunggulann;
