import { FaWhatsapp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import About from './pages/Keunggulanlainnya.tsx.tsx';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
// import Keunggulann from './pages/Keunggulann';
import Management from './pages/Management';
import MisiVisi from './pages/MisiVisi';
import Service from './pages/Service';
import KeunggulanSec from './pages/KeunggulanSec';
import KeunggulanLingkup from './pages/KeunggulanLingkup';
import KeunggulanDukungan from './pages/KeunggulanDukungan';
import KeunggulanLingkuppel from './pages/KeunggulanLingkuppel';
import KeunggulanLainnya from './pages/KeunggulanLainnya.tsx';
import Map from './components/Map.tsx';

function App() {
  return (
    <div className="text-3xl font-bold text-center">
      <Navbar />
      <Hero />
      <KeunggulanSec />
      <KeunggulanLingkup />
      <KeunggulanDukungan />
      <KeunggulanLingkuppel />
      <KeunggulanLainnya />
      <About />
      <MisiVisi />

      <Management />
      <Service />
      <Map />
      <Contact />
      <a href="https://wa.me/+6285785555410" className="fixed bottom-5 md:bottom-[50px] w-[70px] h-[70px]  md:w-[80px] md:h-[80px] right-5 md:right-[50px] rounded-full bg-green-500 flex items-center justify-center z-[500] animate-bounce">
        <FaWhatsapp className="md:w-[60px] md:h-[60px] w-10 h-10  text-white" />
      </a>
    </div>
  );
}

export default App;
