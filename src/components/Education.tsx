import { motion } from 'motion/react';
import { BookOpen, Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { EDUCATION_DATA } from '../data';

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  };

  return (
    <section id="education" className="py-32 bg-neutral-50/50 border-y border-pink-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>02 · Kredensial</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Riwayat Pendidikan
          </h2>
          <div className="w-12 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Structure */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical central path line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-pink-100 -translate-x-1/2" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-12"
          >
            {EDUCATION_DATA.map((edu, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={edu.institution}
                  variants={itemVariants}
                  className={`relative flex flex-col sm:flex-row items-stretch ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Connector */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-white border-2 border-pink-500 flex items-center justify-center -translate-x-1/2 z-10 shadow-sm">
                    <BookOpen className="w-3.5 h-3.5 text-pink-500" />
                  </div>

                  {/* Left Side Content - Empty on mobile, card position on desktop */}
                  <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8" />

                  {/* Right Side Card Content */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-8 ${isEven ? 'sm:text-right' : 'sm:text-left'}`}>
                    <div className="bg-white border border-slate-100 hover:border-pink-200 rounded-3xl p-6 sm:p-8 shadow-xs hover:shadow-lg transition-all duration-300 relative group">
                      
                      {/* Interactive Corner Badge */}
                      {edu.gpa && (
                        <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-[11px] font-bold mb-3 ${
                          isEven ? 'sm:flex-row-reverse' : ''
                        }`}>
                          <Award className="w-3 h-3" />
                          <span>{edu.gpa}</span>
                        </div>
                      )}

                      <span className="block text-xs font-bold text-pink-400 uppercase tracking-widest">{edu.period}</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight mt-1">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-semibold text-slate-600 mt-1">{edu.degree}</p>

                      <hr className="my-4 border-dashed border-pink-50" />

                      {/* Highlights */}
                      <ul className={`space-y-2 text-xs sm:text-sm text-slate-500 font-light ${
                        isEven ? 'sm:flex sm:flex-col sm:items-end' : ''
                      }`}>
                        {edu.highlights.map((hl) => (
                          <li key={hl} className="flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                            <span className={isEven ? 'sm:text-right' : 'text-left'}>{hl}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Technical core tags */}
                      <div className={`flex flex-wrap gap-2 mt-5 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        {edu.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-1 rounded-lg bg-slate-50 border border-slate-100 text-slate-600 text-[10px] sm:text-xs font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
