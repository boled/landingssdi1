import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 shadow backdrop-blur-md' : 'bg-transparent'}`}>
      <div className={`container mx-auto px-6 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-emerald-700 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">U</span>
            </div>
            <a href="#" className="text-xl font-bold text-gray-800 hover:text-emerald-600 transition-colors">
              UNUGHA Cilacap
            </a>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Layanan</a>
            <a href="#about" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Tentang</a>
            <a href="#news" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Berita</a>
            <a href="#contact" className="text-gray-600 hover:text-emerald-600 font-medium transition-colors">Kontak</a>
          </nav>
          <a
            href="#"
            className="hidden md:inline-block bg-emerald-600 text-white font-semibold px-5 py-2 rounded-lg shadow-sm hover:bg-emerald-700 transition-all transform hover:scale-105"
          >
            Portal Mahasiswa
          </a>
          <button className="md:hidden text-gray-800">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
