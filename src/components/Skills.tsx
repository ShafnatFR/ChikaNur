import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PenTool, Star, X, Flame } from 'lucide-react';
import { SKILLS_DATA, ARTWORKS_DATA } from '../data';
import { ArtworkMock } from '../types';

export default function Skills() {
  const [selectedArtwork, setSelectedArtwork] = useState<ArtworkMock | null>(null);

  return (
    <section id="skills" className="py-24 bg-neutral-50/50 border-y border-pink-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <PenTool className="w-4 h-4" />
            <span>Katalog Bakat</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Keahlian &amp; Seni Kreatif
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base mt-2">
            Perpaduan matang kompetensi manajemen pemerintahan dengan kecermatan seni ilustrasi buatan tangan.
          </p>
          <div className="w-12 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto">
          
          {/* Left Side: Skills Metrics (5 columns) */}
          <div className="lg:col-span-6 bg-white border border-slate-100/80 rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">Keahlian Khusus</h3>
            </div>

            <p className="text-xs text-slate-400 font-light mb-8 -mt-2 text-left">
              Berdasarkan evaluasi kontribusi organisasi di BPM FIA UI, Girl Up UI, dan performa akademis SMAS BPS&amp;K I Jakarta.
            </p>

            <div className="flex flex-wrap gap-2.5 text-left">
              {SKILLS_DATA.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-pink-50/40 border border-pink-100/60 hover:border-pink-300 hover:bg-pink-50 text-slate-700 hover:text-pink-600 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-3xs cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0" />
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-100/60 flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
                <Flame className="w-4.5 h-4.5" />
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                <strong>Alat Kreatif Utama:</strong> Figma, Canva Pro, Traditional Graphite Drawing pencils, Acrylic painting, Ink, and financial ledger models.
              </p>
            </div>
          </div>

          {/* Right Side: Showcase Art Gallery (6 columns) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">Karya Kreatif &amp; Bisnis Mini</h3>
              <span className="text-[10px] uppercase tracking-wider text-pink-500 font-bold bg-pink-50 px-2.5 py-1 rounded-full">
                Drawing Enthusiast
              </span>
            </div>
            
            <p className="text-slate-500 font-light text-xs sm:text-sm text-left">
              Chika mengelola aktivitas kerajinan dan memproduksi gambar sketsa anime manual berjam-jam sebagai wirausaha mandiri sejak 2018. Klik karya di bawah ini untuk melihat ulasannya.
            </p>

            {/* Grid of Artwork Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ARTWORKS_DATA.map((art) => (
                <div
                  key={art.title}
                  onClick={() => setSelectedArtwork(art)}
                  className="bg-white border border-slate-100 rounded-2xl p-3 hover:border-pink-300 shadow-xs hover:shadow-md cursor-pointer transition-all duration-300 group overflow-hidden"
                >
                  {/* Simulated Picture Holder */}
                  <div className={`h-36 w-full rounded-xl ${art.imageFallback} border flex items-center justify-center relative overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                    <span className="text-3xl">🎨</span>
                    <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs py-1 px-1.5 rounded-lg border border-pink-50 text-center">
                      <span className="text-[10px] text-pink-600 font-extrabold uppercase tracking-widest">{art.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Artwork Detail Dialog Modal Overlay */}
        <AnimatePresence>
          {selectedArtwork && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white border border-pink-100 rounded-3xl max-w-md w-full p-6 text-left relative shadow-2xl overflow-hidden"
              >
                {/* Header close trigger */}
                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-50 border border-slate-100 text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Simulated visual image large */}
                <div className={`h-40 w-full rounded-2xl ${selectedArtwork.imageFallback} border flex flex-col items-center justify-center relative overflow-hidden mb-6`}>
                  <span className="text-4xl animate-bounce">🎨</span>
                  <span className="text-xs uppercase font-extrabold text-pink-600 tracking-wider bg-white px-3 py-1 rounded-full shadow-xs mt-3">
                    Craft &amp; Fine Arts
                  </span>
                </div>

                <div className="space-y-4">
                  <span className="text-xs text-pink-500 font-bold uppercase tracking-widest">{selectedArtwork.category}</span>
                  <h3 className="text-xl font-extrabold text-slate-800 tracking-tight leading-tight">
                    {selectedArtwork.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-light">
                    {selectedArtwork.description}
                  </p>

                  <div className="pt-3 border-t border-dashed border-pink-50 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-50 flex items-center justify-center text-pink-500">
                      <Star className="w-4 h-4 fill-pink-500 text-pink-500" />
                    </div>
                    <p className="text-[11px] text-slate-500 leading-normal">
                      <strong>Tradisi Seni Manual Chika:</strong> Setiap coretan tangan dinilai dengan ketelitian tinggi, membentuk kesabaran manajerial saat bekerja dalam birokrasi.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedArtwork(null)}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 rounded-xl mt-6 cursor-pointer text-center text-xs sm:text-sm shadow-md shadow-pink-200"
                >
                  Dimengerti, Tutup Detail
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
