import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Clock, Sparkles, CheckSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';
import { ExperienceItem } from '../types';

interface ExperienceCardProps {
  key?: string;
  exp: ExperienceItem;
  index: number;
}

function ExperienceCard({ exp, index }: ExperienceCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate cursor position offset from the card center
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    
    // Normalize and map to maximum tilt degrees (8 degrees)
    const degY = (mouseX / (width / 2)) * 8;
    const degX = -(mouseY / (height / 2)) * 8;
    
    setRotateX(degX);
    setRotateY(degY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      layout
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        y: 0,
        rotateX: rotateX,
        rotateY: rotateY,
        transformStyle: 'preserve-3d',
      }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 20px 30px -10px rgba(244, 63, 94, 0.15), 0 8px 15px -8px rgba(244, 63, 94, 0.08)"
      }}
      transition={{ 
        type: "spring", 
        stiffness: 200, 
        damping: 18,
        layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
      }}
      style={{
        transformPerspective: 1000,
      }}
      className="bg-white border rounded-3xl p-6 text-left flex flex-col justify-between relative cursor-pointer select-none border-slate-100 shadow-xs hover:border-pink-200/80"
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        {/* Header: Role & Organization */}
        <div className="flex justify-between items-start gap-4">
          <div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-50 text-[10px] sm:text-xs font-semibold text-pink-600 border border-pink-100/50 uppercase tracking-wider">
              {exp.type === 'PR & Leadership' ? 'Humas & Kepemimpinan' : exp.type === 'Creative & Art' ? 'Sifat Kreatif & Seni' : 'Acara & Mentoring'}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-tight mt-2 leading-snug">
              {exp.role}
            </h3>
            <p className="text-sm font-bold text-slate-600 mt-1">{exp.organization}</p>
          </div>
          
          {/* Decorative art box */}
          <span className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center flex-shrink-0 font-bold text-pink-500">
            {index + 1}
          </span>
        </div>

        {/* Meta: Period & Duration */}
        <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-4 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{exp.period}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-slate-400" />
            <span>{exp.duration}</span>
          </div>
        </div>

        <hr className="my-4 border-dashed border-pink-50" />

        {/* Bullet list description */}
        <ul className="space-y-2.5 my-4">
          {exp.description.map((item, id) => (
            <li key={id} className="flex gap-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
              <CheckSquare className="w-4.5 h-4.5 text-pink-400 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Skills tags footer */}
      <div style={{ transform: 'translateZ(10px)' }} className="mt-4 flex flex-wrap gap-1.5">
        {exp.skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-0.5 rounded-md bg-neutral-50 border border-neutral-100 text-slate-500 text-[10px] font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState<'All' | 'PR & Leadership' | 'Creative & Art' | 'Events & Mentoring'>('All');

  const tabs = [
    { label: 'Semua', value: 'All' as const },
    { label: 'Humas & Komunikasi', value: 'PR & Leadership' as const },
    { label: 'Seni & Wirausaha', value: 'Creative & Art' as const },
    { label: 'Acara & Pendampingan', value: 'Events & Mentoring' as const },
  ];

  const filteredExperience = EXPERIENCE_DATA.filter((exp) => {
    if (activeTab === 'All') return true;
    return exp.type === activeTab;
  });

  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-4 h-4" />
            <span>Portofolio Karya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Pengalaman Utama
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base mt-2">
            Klik tab kategori di bawah untuk menyaring kontribusi kepemimpinan, riset akademik, dan wirausaha kreatif Chika.
          </p>
          <div className="w-12 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => {
                setActiveTab(tab.value);
              }}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab.value
                  ? 'bg-pink-500 text-white shadow-md shadow-pink-200 scale-102'
                  : 'bg-neutral-50 border border-slate-100/60 text-slate-600 hover:text-pink-600 hover:border-pink-200 hover:bg-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filteredExperience.slice(0, 8).map((exp, index) => {
              return (
                <ExperienceCard
                  key={exp.id}
                  exp={exp}
                  index={index}
                />
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
