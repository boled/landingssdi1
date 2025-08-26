import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <section 
      className="relative h-[calc(100vh-80px)] min-h-[500px] flex items-center justify-center text-white overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://picsum.photos/1600/900?image=24')",
          transform: `translateY(${offsetY * 0.5}px) scale(1.15)`
        }}
      ></div>
      <div className="absolute inset-0 bg-emerald-900/60 backdrop-brightness-75"></div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight tracking-tight text-shadow-lg">
          Sistem Informasi Terpadu
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light text-gray-200 text-shadow">
          Selamat Datang di Portal Sistem dan Sumber Daya Informasi Universitas Nahdlatul Ulama Al-Ghazali Cilacap.
        </p>
        <a
          href="#services"
          onClick={handleScrollClick}
          className="bg-white text-emerald-700 font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:bg-emerald-50 transition-all transform hover:scale-105"
        >
          Jelajahi Layanan
        </a>
      </div>
    </section>
  );
};

export default Hero;