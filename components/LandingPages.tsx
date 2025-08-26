import React from 'react';
import { BookOpenIcon, DesktopComputerIcon, CalendarIcon, AcademicCapIcon } from './icons';

interface Item {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
}

const items: Item[] = [
  {
    icon: BookOpenIcon,
    title: 'Program Studi',
    description: 'Jelajahi berbagai pilihan program studi unggulan yang kami tawarkan.',
  },
  {
    icon: AcademicCapIcon,
    title: 'Penerimaan',
    description: 'Dapatkan informasi terbaru mengenai pendaftaran dan seleksi mahasiswa baru.',
  },
  {
    icon: DesktopComputerIcon,
    title: 'E-Learning',
    description: 'Akses platform pembelajaran daring dengan tampilan modern dan responsif.',
  },
  {
    icon: CalendarIcon,
    title: 'Agenda Kampus',
    description: 'Ikuti berbagai kegiatan dan acara penting di lingkungan kampus.',
  },
];

const LandingPages: React.FC = () => (
  <section id="landing" className="py-20 bg-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Portal Landing Pages</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          Temukan informasi penting kampus dalam satu tempat dengan tampilan modern dan elegan.
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, description }, idx) => (
          <a
            key={idx}
            href="#"
            className="group bg-gray-50 rounded-xl shadow-md p-6 hover:bg-emerald-50 transition-colors"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-700">{title}</h3>
            <p className="mt-2 text-gray-600 text-sm">{description}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default LandingPages;

