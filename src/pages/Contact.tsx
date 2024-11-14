import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import LogoImage from '../img/LOGO_NABINA_TRAVEL-removebg-preview.png';

const Contact = () => {
  return (
    <footer className="bg-gray-800 text-gray-200 py-16">
      <div className="container mx-auto px-4 text-center lg:text-left">
        {/* Company Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* About Us */}
          <div className="flex items-center gap-2">
            <img src={LogoImage} className="w-8 md:w-16 transition-transform duration-200 transform hover:scale-105" alt="Logo Nabina Travel" />
            <h1 className=" font-bold tracking-wide">Nabina Travel</h1>
          </div>
          {/* Address */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Alamat</h2>
            <div className="flex items-start space-x-3">
              <FaMapMarkerAlt className="text-red-500" />
              <span className="text-sm mb-4">Kompleks Barangan Hills Blok C No. 1, Tanjung Barangan, Kel. Bukit Baru, Kec. Ilir Barat 1, Palembang, Sumsel</span>
            </div>
            <div className="flex gap-x-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-500">
                <FaWhatsapp className="text-white text-xl" />
              </div>
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-400">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
            </div>
          </div>
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Hubungi Kami</h2>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaWhatsapp className="text-green-500" />
                <span className="text-sm">WhatsApp Hotline: +62 81282200084</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-400" />
                <span className="text-sm">Telepon: +62 123 456 789</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-yellow-400" />
                <span className="text-sm">Email: pp.muhammadnabina@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8 text-center font-sans">
          <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} PT. Muhammad Nabina International. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
