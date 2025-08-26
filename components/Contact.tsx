import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const { name, phone, email, message } = formData;
    
    if (!name || !phone || !message) {
      alert('Nama, Nomor Telepon, dan Pesan wajib diisi.');
      return;
    }
    
    const whatsappMessage = `*Formulir Hubungi Kami - UNUGHA Website*

*Nama:* ${name}
*Nomor Telepon:* ${phone}
*Email:* ${email || 'Tidak diisi'}
*Pesan:*
${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/6285647818779?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Hubungi Kami</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Punya pertanyaan atau butuh informasi lebih lanjut? Isi formulir di bawah dan kirim pesan langsung via WhatsApp.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Nama Anda"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Nomor Telepon (WhatsApp)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                  placeholder="Contoh: 08123456789"
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Alamat Email <span className="text-gray-500 font-normal">(Opsional)</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="email@anda.com"
              />
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Pesan Anda</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Tuliskan pesan Anda di sini..."
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="w-full md:w-auto bg-emerald-600 text-white font-bold text-lg px-12 py-4 rounded-lg shadow-md hover:bg-emerald-700 transition-all transform hover:scale-105"
              >
                Kirim via WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
