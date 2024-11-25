const Map = () => {
  return (
    <div className="w-full h-[500px]">
      {typeof window !== 'undefined' && (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.417617278191!2d104.7066617!3d-2.9815028000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75007388c2d9%3A0x7c8bb4280073ce23!2sPT%20Muhammad%20Nabina%20Tour%20%26%20Travel!5e0!3m2!1sen!2sid!4v1732552710135!5m2!1sen!2sid"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
    </div>
  );
};

export default Map;
