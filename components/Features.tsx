
import React, { useEffect, useRef, useState } from 'react';
import { BookOpenIcon, DesktopComputerIcon, CalendarIcon, AcademicCapIcon } from './icons';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-2 h-full">
    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
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

  const features = [
    {
      icon: <AcademicCapIcon className="h-8 w-8" />,
      title: 'SIAKAD Terpadu',
      description: 'Akses informasi akademik, nilai, dan status perkuliahan Anda secara online dan terpusat.',
    },
    {
      icon: <DesktopComputerIcon className="h-8 w-8" />,
      title: 'E-Learning',
      description: 'Platform pembelajaran digital untuk materi kuliah, tugas, dan diskusi interaktif dengan dosen.',
    },
    {
      icon: <BookOpenIcon className="h-8 w-8" />,
      title: 'Perpustakaan Digital',
      description: 'Jelajahi ribuan koleksi buku digital, jurnal, dan referensi akademik dari mana saja.',
    },
    {
      icon: <CalendarIcon className="h-8 w-8" />,
      title: 'Jadwal Kuliah Online',
      description: 'Lihat dan kelola jadwal perkuliahan, ujian, dan kegiatan akademik lainnya dengan mudah.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Layanan Digital Unggulan</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Kami menyediakan berbagai layanan digital untuk mendukung kegiatan akademik dan kemahasiswaan.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
