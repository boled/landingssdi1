
import React, { useEffect, useRef, useState } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white overflow-x-hidden">
      <div className="container mx-auto px-6" ref={sectionRef}>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div
            className={`lg:w-1/2 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <img 
              src="https://picsum.photos/600/400?image=1074" 
              alt="Kampus UNUGHA Cilacap" 
              className="rounded-xl shadow-2xl object-cover w-full h-full"
            />
          </div>
          <div
            className={`lg:w-1/2 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tentang UNUGHA Cilacap</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Universitas Nahdlatul Ulama Al-Ghazali (UNUGHA) Cilacap adalah lembaga pendidikan tinggi yang berkomitmen untuk mencetak generasi unggul yang berakhlak mulia, berwawasan kebangsaan, dan berdaya saing global.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Dengan semangat Ahlussunnah wal Jama'ah An-Nahdliyah, kami mendedikasikan diri untuk pengembangan ilmu pengetahuan, teknologi, dan seni yang bermanfaat bagi masyarakat, bangsa, dan negara.
            </p>
            <a
              href="#"
              className="bg-emerald-600 text-white font-semibold px-8 py-3 rounded-lg shadow-sm hover:bg-emerald-700 transition-colors"
            >
              Selengkapnya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
