import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Contact from './pages/Contact';
import Hero from './pages/Hero';
import Keunggulann from './pages/Keunggulann';
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
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
