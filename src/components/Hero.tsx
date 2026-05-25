import { motion } from 'motion/react';
import { ArrowDownRight, Award, Sparkles, Send, Linkedin, Instagram, Mail } from 'lucide-react';
import { CHIKA_PROFILE } from '../data';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const handleScrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden bg-radial from-pink-50 via-white to-white"
    >
      {/* Absolute Decorative Circles representing water-color/pastel glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse duration-5000" />
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60" />
      <div className="absolute -bottom-20 left-1/4 w-96 h-96 bg-neutral-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col text-left space-y-6"
          >
            {/* Tag / Badge */}
            <motion.div variants={itemVariants} className="inline-flex self-start items-center gap-1.5 px-3 py-1.5 rounded-full bg-pink-50 border border-pink-100/60 text-pink-600 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>"Creative Leader & Artisanal Craft Creator"</span>
            </motion.div>

            {/* Display Typography Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05]"
            >
              <span className="font-serif text-slate-800 block">Chika Nur</span>
              <span className="font-serif italic text-pink-500 block mt-1">Siswoyo</span>
            </motion.h1>

            {/* Sub-headline translation */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-600 max-w-2xl font-light leading-relaxed"
            >
              {CHIKA_PROFILE.headline}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-slate-500 max-w-xl border-l-2 border-pink-200 pl-4 py-1"
            >
              "Mahasiswa Administrasi Publik Universitas Indonesia yang mencintai strategi kehumasan, kepemimpinan organisasi, serta dunia mengekspresikan seni visual tradisional."
            </motion.p>

            {/* Call To Actions */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => handleScrollToSection('experience')}
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium px-8 py-4 rounded-xl shadow-lg shadow-pink-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Lihat Pengalaman Utama</span>
                <ArrowDownRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScrollToSection('contact')}
                className="bg-white hover:bg-neutral-50 text-slate-700 font-medium px-8 py-4 rounded-xl border border-slate-200 hover:border-pink-300 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
              >
                <span>Hubungi Saya</span>
                <Send className="w-4 h-4 text-pink-500" />
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 pt-1">
              <a
                href="https://www.linkedin.com/in/chikanursiswoyо"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 text-[#0A66C2] font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.instagram.com/chikannr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-pink-50 hover:bg-pink-100 text-pink-600 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Instagram className="w-4 h-4" />
                <span>Instagram</span>
              </a>
              <a
                href="mailto:chikanur2504@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium text-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Avatar Setup */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-72 h-72 sm:w-85 sm:h-85"
            >
              {/* Spinning / Glowing Background Frame */}
              <div className="absolute inset-0 bg-radial from-pink-100 to-transparent rounded-full scale-110 -z-10" />

              {/* Central Premium Graphic Avatar Frame */}
              <div className="w-full h-full rounded-3xl bg-white border-2 border-pink-100 shadow-xl overflow-hidden relative group">
                <img
                  src="/asset/profil.png"
                  alt="Chika Nur Siswoyo"
                  className="w-full h-full object-cover object-[center_30%] group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Soft pink and dark vignette overlay for depth and premium quality */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/10 to-transparent mix-blend-multiply opacity-80" />

                {/* Elegant Floating Name Bar at the Bottom */}
                <div className="absolute bottom-5 inset-x-5 bg-white/90 backdrop-blur-md px-4 py-3 rounded-2xl border border-pink-100/50 shadow-sm text-center transform translate-y-1 group-hover:translate-y-0 transition-all duration-500">
                  <h3 className="text-lg font-extrabold text-slate-800 leading-tight">Chika Nur Siswoyo</h3>
                  <p className="text-[10px] text-pink-600 font-bold tracking-widest uppercase mt-0.5">Ilmu Administrasi Publik UI</p>
                </div>
              </div>

              {/* Floating Interactive Badge 1: UI Branding */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -top-4 -right-6 bg-white border border-yellow-200 rounded-2xl shadow-md p-3 flex items-center gap-2"
                style={{ animationDelay: '0s' }}
              >
                <div className="w-8 h-8 rounded-lg bg-yellow-400 font-bold flex items-center justify-center text-xs text-slate-900 shadow-inner">
                  UI
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Universitas Indonesia</h4>
                  <p className="text-[10px] text-yellow-600 font-bold">Public Administration</p>
                </div>
              </motion.div>

              {/* Floating Interactive Badge 2: SMAS Achievement */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute -bottom-14 -left-6 bg-white border border-pink-100 rounded-2xl shadow-md p-3 flex items-center gap-2"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="w-8 h-8 rounded-lg bg-pink-50 flex items-center justify-center text-pink-500 shadow-sm">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-800">Lulusan Terbaik IPS</h4>
                  <p className="text-[10px] text-pink-600 font-semibold">BPS&amp;K I • IPK 94.64</p>
                </div>
              </motion.div>

              {/* Floating Interactive Badge 3: Drawing/Art Enthusiast */}
              <motion.div
                variants={floatingVariants}
                animate="animate"
                className="absolute top-1/2 -left-10 bg-white border border-slate-100 rounded-2xl shadow-md p-2.5 flex items-center gap-2"
                style={{ animationDelay: '0.75s' }}
              >
                <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center">
                  🎨
                </div>
                <span className="font-medium text-[11px] text-slate-700">Art &amp; Mini Business</span>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Milestone Statistics Panel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 border border-pink-100 rounded-3xl bg-white/50 backdrop-blur-sm p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-pink-100/80">
            {CHIKA_PROFILE.stats.map((stat, i) => (
              <div key={stat.label} className={`flex flex-col items-center text-center ${i > 1 ? 'pt-6 md:pt-0' : 'md:pt-0'} ${i === 1 ? 'pt-6 md:pt-0' : ''}`}>
                <span className="text-3xl sm:text-4xl font-extrabold text-pink-500 tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-slate-500 font-medium mt-3 px-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
