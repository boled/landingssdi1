
import React from 'react';

const Map: React.FC = () => {
  return (
    <section id="location" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Peta Lokasi Kampus</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Temukan kami di lokasi yang strategis dan mudah dijangkau di pusat kota Cilacap.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.220147987258!2d109.0069690153926!3d-7.718588194399657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6512701e67027b%3A0xc8e635741f2a333!2sUNUGHA%20Cilacap!5e0!3m2!1sen!2sid!4v1672533333333!5m2!1sen!2sid"
            className="w-full h-96"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi UNUGHA Cilacap"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
