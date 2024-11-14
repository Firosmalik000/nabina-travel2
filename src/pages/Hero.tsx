import HeroImage from '../img/hero.jpeg';

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
      }}
    >
      {/* Backdrop Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen text-white text-center px-[100px]">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Nabina Travel</h1>
        <p className="text-lg md:text-2xl font-medium">Discover new adventures with us</p>
      </div>
    </section>
  );
};

export default Hero;
