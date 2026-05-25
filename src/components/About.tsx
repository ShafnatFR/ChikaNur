import { motion } from 'motion/react';
import { User, ClipboardList, PenTool, Compass } from 'lucide-react';
import { CHIKA_PROFILE } from '../data';

export default function About() {
  const features = [
    {
      icon: <ClipboardList className="w-5 h-5 text-pink-500" />,
      title: "Administrasi Publik",
      desc: "Mengkaji kebijakan sektor publik, tata kelola komunikasi strategis lembaga, dan analisis finansial strategis."
    },
    {
      icon: <User className="w-5 h-5 text-pink-500" />,
      title: "Public Relations",
      desc: "Aktif membangun relasi lembaga dan memimpin strategi media sosial berdaya di tingkat Universitas."
    },
    {
      icon: <PenTool className="w-5 h-5 text-pink-500" />,
      title: "Seni Tradisional & Kreatif",
      desc: "Menyalurkan hasrat artistik melalui sketsa karakter manual presisi tinggi, kreasi kerajinan, dan menuangkan tulisan kreatif."
    }
  ];

  return (
    <section id="about" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>01 · Kenal Lebih Dekat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Tentang Saya
          </h2>
          <div className="w-12 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Block: Narrative About */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-2xl font-bold text-slate-800 leading-snug">
              Menghubungkan <span className="text-pink-500">Integritas Strategis</span> dan <span className="text-pink-500">Kebebasan Seni</span>.
            </h3>

            <p className="text-base text-slate-600 leading-relaxed font-light text-justify">
              {CHIKA_PROFILE.aboutMe}
            </p>

            <p className="text-base text-slate-600 leading-relaxed font-light text-justify">
              Perjalanan saya dimulai dari kegemaran mengorganisasi kelompok belajar di sekolah hingga memimpin komisi hubungan kelembagaan eksternal di Universitas Indonesia. Bagi saya, <strong>ilmu administrasi publik</strong> bukan sebatas birokrasi, melainkan cara mengomunikasikan visi, menyusun strategi kehumasan, dan menyelaraskan kepentingan kelompok dengan penuh empati.
            </p>

            {/* Quote container */}
            <div className="border-l-4 border-pink-500 bg-pink-50/50 p-5 rounded-r-2xl">
              <p className="text-sm italic text-slate-700 font-medium leading-relaxed text-justify">
                "Dedikasi tinggi dalam meraih prestasi akademik terbaik serta ambisi kuat untuk mengorkestrasi kepemimpinan dan tata kelola organisasi yang taktis di Universitas Indonesia adalah komitmen utama saya."
              </p>
              <span className="text-xs text-pink-600 font-bold block mt-2">— Chika Nur Siswoyo</span>
            </div>
          </div>

          {/* Right Block: Three Pillars of Capabilities */}
          <div className="lg:col-span-6 space-y-4">
            {features.map((feat, index) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-neutral-50 border border-slate-100/80 hover:border-pink-200 hover:bg-white rounded-2xl p-5 sm:p-6 text-left shadow-xs hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0">
                    {feat.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
