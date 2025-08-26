import React, { useState } from 'react';

interface Errors {
  name?: string;
  phone?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof Errors]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Errors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Nama Lengkap wajib diisi.';
    }

    // Indonesian phone number format regex
    const phoneRegex = /^(?:\+62|0)8[1-9][0-9]{7,11}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Nomor Telepon wajib diisi.';
    } else if (!phoneRegex.test(formData.phone.trim())) {
      newErrors.phone = 'Format nomor telepon tidak valid. Contoh: 08123456789';
    }

    // Validate email format if it's not empty
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format alamat email tidak valid.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Pesan Anda wajib diisi.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isValid = validateForm();
    if (!isValid) {
      return;
    }
    
    const { name, phone, email, message } = formData;
    
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Nama Anda"
                  required
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && <p id="name-error" className="text-red-600 text-sm mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Nomor Telepon (WhatsApp)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Contoh: 08123456789"
                  required
                  aria-invalid={errors.phone ? "true" : "false"}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && <p id="phone-error" className="text-red-600 text-sm mt-1">{errors.phone}</p>}
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
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="email@anda.com"
                aria-invalid={errors.email ? "true" : "false"}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && <p id="email-error" className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>
            <div className="mb-8">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Pesan Anda</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                placeholder="Tuliskan pesan Anda di sini..."
                required
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={errors.message ? "message-error" : undefined}
              ></textarea>
              {errors.message && <p id="message-error" className="text-red-600 text-sm mt-1">{errors.message}</p>}
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