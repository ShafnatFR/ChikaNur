import { useState, ChangeEvent, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle2, Award, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {

    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Harap lengkapi nama, email, dan pesan Anda!');
      return;
    }
    setLoading(true);
    // Simulate API connection
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-4 h-4" />
            <span>Kemitraan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Hubungi Saya
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base mt-2">
            Apakah Anda ingin berkolaborasi dalam kepanitiaan, riset administrasi, kampanye PR, atau memesan karya seni?
          </p>
          <div className="w-12 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Left: Contact Coordinates Card (5 columns) */}
          <div className="lg:col-span-5 bg-pink-50/50 border border-pink-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between text-left">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-800 tracking-tight">Let's Connect!</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Jangan ragu untuk mengirim pesan untuk keperluan diskusi akademis, konsultasi desain visual, mentoring kepemimpinan, atau undangan kepanitiaan.
              </p>

              <hr className="border-pink-105 border-dashed" />

              <div className="space-y-4 pt-2">
                
                {/* Coordinate 1: Work location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Lokasi Aktivitas</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">Kota Bekasi - Depok, Jawa Barat, Indonesia</p>
                  </div>
                </div>

                {/* Coordinate 2: Kampus */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Afiliasi Akademik</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">Fakultas Ilmu Administrasi, Universitas Indonesia</p>
                  </div>
                </div>

                {/* Coordinate 3: Email representation */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800 text-sm">Saluran Komunikasi</h4>
                    <p className="text-xs text-slate-500 font-light mt-0.5">Sapa lewat form interaktif di samping!</p>
                  </div>
                </div>

              </div>
            </div>

            {/* LinkedIn footer banner note */}
            <div className="mt-8 p-4 bg-white/80 border border-pink-100/60 rounded-2xl flex items-center gap-3">
              <span className="text-2xl">⚡</span>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                <strong>Kolaborator Aktif:</strong> Terbuka untuk magang pilar Public Relations, riset kebijakan daerah, dan kontribusi kepemudaan sosial.
              </p>
            </div>
          </div>

          {/* Right: Formulation Form (7 columns) */}
          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-6 sm:p-8 shadow-xs relative overflow-hidden flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4 text-left"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-slate-700 block">Nama Lengkap *</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nama Anda"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-pink-500 text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition-colors duration-200"
                      />
                    </div>
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-bold text-slate-700 block">Alamat Email *</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email@contoh.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-pink-500 text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-bold text-slate-700 block">Perihal / Kategori Diskusi</label>
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Contoh: Undangan Mentor / Proyek Seni / Riset"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-pink-500 text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition-colors duration-200"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-bold text-slate-700 block">Isi Pesan *</label>
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan detail undangan kolaborasi atau pertanyaan Anda di sini..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-hidden focus:border-pink-500 text-xs sm:text-sm text-slate-800 placeholder-slate-400 transition-colors duration-200 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-pink-500 hover:bg-pink-600 disabled:bg-pink-300 text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md shadow-pink-200 flex items-center justify-center gap-2 cursor-pointer text-xs sm:text-sm mt-4 hover:-translate-y-0.5"
                  >
                    <span>{loading ? 'Sedang Mengirim...' : 'Kirim Pesan'}</span>
                    <Send className="w-4 h-4" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-8 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-pink-50 border-2 border-pink-200 flex items-center justify-center mx-auto text-pink-500">
                    <CheckCircle2 className="w-8 h-8 animate-pulse" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-extrabold text-slate-800 tracking-tight">Formulir Terkirim!</h4>
                    <p className="text-xs sm:text-sm text-slate-500 font-light max-w-sm mx-auto leading-relaxed">
                      Terima kasih atas pesan Anda secara simulasi. Chika Nur Siswoyo akan mengapresiasi undangan Anda dan segera menjawabnya melalui email Anda.
                    </p>
                  </div>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 border border-pink-200 text-xs font-bold text-pink-600 hover:bg-pink-50 rounded-xl transition-all duration-200 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Kirim Pesan Lain</span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
