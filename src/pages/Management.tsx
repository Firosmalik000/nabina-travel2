import { motion } from 'framer-motion';
import Managementimg from '../img/management.jpeg';

// Definisi tipe untuk anggota manajemen
interface ManagementMember {
  title: string;
  name: string | string[]; // Nama bisa berupa string atau array of strings
}

const Management: React.FC = () => {
  const managementList: ManagementMember[] = [
    { title: 'Komisaris Utama', name: 'Kiki Mikail' },
    { title: 'Komisaris', name: ['Rahmat Wiguna', 'Ahmad Hakiki', 'Otoman'] },

    { title: 'Direktur Utama', name: 'Tri Tirtasari' },
    { title: 'Direktur', name: [" Ahmad Rifa'i", 'Sholihin', 'Abdul Kholid', 'Padila'] },
    { title: 'Manager Umum', name: 'Intan Muziati' },
    { title: 'Keuangan', name: ['Tasya Amelia Sholehah', 'Leni Yulianingsih'] }, // Nama ganda
  ];

  return (
    <section
      id="management"
      className="bg-gray-200 py-10 px-6 sm:px-12"
      style={{
        backgroundImage: `url(${Managementimg})`,
        backgroundSize: 'cover',
      }}
    >
      <motion.div className="text-center mb-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="text-3xl font-bold text-white">MANAGEMENT MUHAMMAD NABINA</h2>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-6">
        {managementList.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-600">{member.title}</h3>
            {Array.isArray(member.name) ? (
              <ul className="text-lg text-gray-700 pl-4 ">
                {member.name.map((subName, subIndex) => (
                  <li key={subIndex}>{subName}</li>
                ))}
              </ul>
            ) : (
              <p className="text-lg text-gray-700">{member.name}</p>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Management;
