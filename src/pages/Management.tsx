import { motion } from 'framer-motion';

const Management = () => {
  const managementList = [
    { title: 'Komisaris Utama', name: 'Kiki Mikail' },
    { title: 'Komisaris', name: 'Rahmat Wiguna' },
    { title: 'Komisaris', name: 'Ahmad Hakiki' },
    { title: 'Direktur Utama', name: 'Tri Tirtasari' },
    { title: 'Keuangan', name: 'Tasya Amelia Sholehah' },
  ];

  return (
    <div className="bg-gray-200 py-10 px-6 sm:px-12">
      <motion.div className="text-center mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-bold text-gray-800">MANAGEMENT MUHAMMAD NABINA</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6 hover:shadow-lg">
        {managementList.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }} // Animation happens once when in view
          >
            <h3 className="text-xl font-semibold text-blue-600">{member.title}</h3>
            <p className="text-lg text-gray-700">{member.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Management;
