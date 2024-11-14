import { FaWhatsapp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Keunggulann from './pages/Keunggulann';
import Management from './pages/Management';
import MisiVisi from './pages/MisiVisi';
import Service from './pages/Service';

function App() {
  return (
    <div className="text-3xl font-bold text-center">
      <Navbar />
      <Hero />
      <About />
      <MisiVisi />
      <Keunggulann />
      <Management />
      <Service />
      <Contact />
      <a href="https://wa.me/+6281282200084" className="fixed bottom-5 w-[50px] h-[50px]  right-5 rounded-full bg-green-500 flex items-center justify-center z-[500]">
        <FaWhatsapp className="w-10 h-10 text-white" />
      </a>
    </div>
  );
}

export default App;
