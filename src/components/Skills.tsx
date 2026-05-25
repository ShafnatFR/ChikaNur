import { useState } from 'react';
import { motion } from 'motion/react';
import { PenTool, Trophy, Wrench, Flame } from 'lucide-react';
import { SKILLS_DATA, TOOLS_DATA, ACHIEVEMENTS_DATA } from '../data';

export default function Skills() {

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
          
          {/* ── Left: Skills + Tools ── */}
          <div className="lg:col-span-6 flex flex-col gap-6">

            {/* Skill Tags */}
            <div className="bg-white border border-slate-100/80 rounded-3xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-extrabold text-slate-800 tracking-tight mb-1">Keahlian Khusus</h3>
              <p className="text-xs text-slate-400 font-light mb-6 text-left">
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
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-pink-50/40 border border-pink-200 hover:border-pink-400 hover:bg-pink-50 text-slate-700 hover:text-pink-600 font-medium text-xs sm:text-sm tracking-wide transition-all duration-300 shadow-3xs cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 flex-shrink-0" />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-2xl bg-slate-50 border border-slate-100/60 flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
                  <Flame className="w-4 h-4" />
                </div>
                <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                  <strong>Alat Kreatif Utama:</strong> Figma, Canva Pro, Traditional Graphite Drawing pencils, Acrylic painting, Ink, and financial ledger models.
                </p>
              </div>
            </div>

            {/* Tools Grid */}
            <div className="bg-white border border-slate-100/80 rounded-3xl p-6 sm:p-8 shadow-xs">
              <div className="flex items-center gap-2 mb-5">
                <Wrench className="w-4 h-4 text-pink-500" />
                <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">Alat &amp; Teknologi</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {TOOLS_DATA.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-neutral-50 border border-pink-200 hover:border-pink-400 hover:bg-pink-50/30 transition-all duration-200 cursor-default group"
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-600 group-hover:text-pink-600 text-center leading-tight transition-colors">
                      {tool.name}
                    </span>
                    <span className="text-[9px] text-slate-400 uppercase tracking-wider">{tool.category}</span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right: Achievements ── */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Trophy className="w-4 h-4 text-pink-500" />
              <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">Sertifikasi &amp; Penghargaan</h3>
            </div>
            <p className="text-xs text-slate-400 font-light -mt-2 mb-2">
              Rekam jejak prestasi akademik dan kepemimpinan yang telah dicapai.
            </p>

            {ACHIEVEMENTS_DATA.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.07 }}
                className={`flex items-start gap-4 p-4 rounded-2xl border bg-white shadow-xs hover:shadow-md transition-all duration-300 cursor-default group`}
              >
                {/* Icon bubble */}
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border ${item.color}`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-extrabold text-slate-800 leading-snug">{item.title}</h4>
                    <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-1.5 ${item.dot}`} />
                  </div>
                  <p className="text-[11px] font-semibold text-slate-500 mt-0.5">{item.subtitle}</p>
                  <p className="text-[11px] text-slate-400 font-light mt-1 leading-relaxed">{item.detail}</p>
                </div>
              </motion.div>
            ))}


          </div>

        </div>
      </div>
    </section>
  );
}
