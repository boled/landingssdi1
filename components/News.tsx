
import React, { useEffect, useRef, useState } from 'react';

interface NewsCardProps {
  image: string;
  category: string;
  title: string;
  date: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ image, category, title, date }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 h-full">
    <div className="overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6">
      <span className="text-sm font-semibold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">{category}</span>
      <h3 className="mt-4 text-xl font-bold text-gray-900 leading-tight group-hover:text-emerald-700 transition-colors">{title}</h3>
      <p className="mt-2 text-sm text-gray-500">{date}</p>
    </div>
  </div>
);

const News: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [newsItems, setNewsItems] = useState<NewsCardProps[]>([
    {
      image: 'https://picsum.photos/400/300?image=1015',
      category: 'Akademik',
      title: 'Pelaksanaan Ujian Akhir Semester Genap 2024',
      date: '15 Juli 2024',
    },
    {
      image: 'https://picsum.photos/400/300?image=1016',
      category: 'Kemahasiswaan',
      title: 'UNUGHA Raih Juara 1 Lomba Debat Nasional',
      date: '12 Juli 2024',
    },
    {
      image: 'https://picsum.photos/400/300?image=1018',
      category: 'Pengumuman',
      title: 'Jadwal Pendaftaran Wisuda Periode II Tahun 2024',
      date: '10 Juli 2024',
    },
  ]);

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

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch('/api/news');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length) {
            setNewsItems(data);
          }
        }
      } catch (err) {
        console.error('Failed to fetch news', err);
      }
    }
    fetchNews();
  }, []);

  return (
    <section id="news" className="py-20 bg-gray-100" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Berita & Pengumuman Terkini</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Ikuti informasi terbaru seputar kegiatan akademik dan prestasi di lingkungan UNUGHA Cilacap.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <NewsCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
