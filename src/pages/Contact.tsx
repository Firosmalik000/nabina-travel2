/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission (e.g., send to API or email)
    console.log(formData);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Hubungi Kami</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">Kami selalu siap membantu Anda. Silakan isi formulir di bawah ini atau hubungi kami melalui informasi kontak yang tersedia.</p>

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaPhoneAlt className="text-blue-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Telepon</h3>
            <p className="text-gray-700">+62 123 456 789</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaEnvelope className="text-green-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-700">info@nabina-travel.com</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <FaMapMarkerAlt className="text-red-600 text-4xl mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Alamat</h3>
            <p className="text-gray-700">Jl. Raya No.123, Surabaya, Indonesia</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Kirim Pesan</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="name">
                Nama
              </label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="email">
                Email
              </label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            <div className="mb-4">
              <label className="block text-left text-gray-700 mb-2" htmlFor="message">
                Pesan
              </label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Kirim Pesan
            </button>
          </form>

          {submitted && (
            <div className="mt-4 text-green-600">
              <p>Terima kasih! Pesan Anda telah terkirim.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
