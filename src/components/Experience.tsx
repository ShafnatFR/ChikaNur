import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Clock, CheckSquare, ChevronLeft, ChevronRight, Images } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';
import { ExperienceItem } from '../types';

// ─── Mini image gallery carousel ────────────────────────────────────────────
function MediaGallery({ images, orgName }: { images: string[]; orgName: string }) {
  const [current, setCurrent] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  if (!images || images.length === 0) return null;

  const validImages = images.filter((_, i) => !imgError[i]);

  if (validImages.length === 0) return null;

  const prev = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c - 1 + validImages.length) % validImages.length);
  };
  const next = (e: MouseEvent) => {
    e.stopPropagation();
    setCurrent((c) => (c + 1) % validImages.length);
  };

  return (
    <div className="mt-4 rounded-2xl overflow-hidden relative group bg-slate-50 border border-slate-100">
      {/* Main image */}
      <div className="relative w-full h-44 sm:h-52 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={validImages[current]}
            alt={`${orgName} dokumentasi ${current + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            onError={() => setImgError((prev) => ({ ...prev, [current]: true }))}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

        {/* Counter badge */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full">
          <Images className="w-3 h-3" />
          <span>{current + 1}/{validImages.length}</span>
        </div>

        {/* Navigation arrows — only show if more than 1 image */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              aria-label="Gambar sebelumnya"
            >
              <ChevronLeft className="w-4 h-4 text-slate-700" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              aria-label="Gambar berikutnya"
            >
              <ChevronRight className="w-4 h-4 text-slate-700" />
            </button>
          </>
        )}
      </div>

      {/* Dot indicators */}
      {validImages.length > 1 && (
        <div className="flex justify-center gap-1.5 py-2">
          {validImages.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              className={`rounded-full transition-all duration-200 ${
                i === current
                  ? 'w-4 h-1.5 bg-pink-500'
                  : 'w-1.5 h-1.5 bg-slate-300 hover:bg-pink-300'
              }`}
              aria-label={`Gambar ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Experience Card ─────────────────────────────────────────────────────────
interface ExperienceCardProps {
  exp: ExperienceItem;
  index: number;
}

function ExperienceCard({ exp, index }: ExperienceCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [logoError, setLogoError] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    setRotateY((mouseX / (rect.width / 2)) * 3);
    setRotateX(-(mouseY / (rect.height / 2)) * 3);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const typeLabel =
    exp.type === 'PR & Leadership'
      ? 'Humas & Kepemimpinan'
      : exp.type === 'Creative & Art'
      ? 'Sifat Kreatif & Seni'
      : 'Acara & Mentoring';

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
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      exit={{ opacity: 0, scale: 0.95, y: -20 }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          '0 20px 30px -10px rgba(244, 63, 94, 0.15), 0 8px 15px -8px rgba(244, 63, 94, 0.08)',
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 18,
        layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
      }}
      style={{ transformPerspective: 1000 }}
      className="bg-white border rounded-3xl p-6 text-left flex flex-col relative cursor-pointer select-none border-slate-100 shadow-xs hover:border-pink-200/80"
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        {/* Header: Logo + Role + Organization */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-pink-50 text-[10px] sm:text-xs font-semibold text-pink-600 border border-pink-100/50 uppercase tracking-wider">
              {typeLabel}
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-800 tracking-tight mt-2 leading-snug">
              {exp.role}
            </h3>
            <p className="text-sm font-bold text-slate-600 mt-1">{exp.organization}</p>
          </div>

          {/* Logo organisasi */}
          <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-slate-50 border border-slate-100 flex items-center justify-center">
            {exp.logo && !logoError ? (
              <img
                src={exp.logo}
                alt={`${exp.organization} logo`}
                className="w-full h-full object-contain p-1"
                onError={() => setLogoError(true)}
              />
            ) : (
              <span className="font-bold text-pink-400 text-lg">{index + 1}</span>
            )}
          </div>
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
            <li
              key={id}
              className="flex gap-2.5 text-xs sm:text-sm text-slate-500 leading-relaxed font-light"
            >
              <CheckSquare className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Media gallery */}
        {exp.mediaImages && exp.mediaImages.length > 0 && (
          <MediaGallery images={exp.mediaImages} orgName={exp.organization} />
        )}
      </div>

      {/* Skills tags footer */}
      <div
        style={{ transform: 'translateZ(10px)' }}
        className="mt-4 flex flex-wrap gap-1.5"
      >
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

// ─── Section ─────────────────────────────────────────────────────────────────
export default function Experience() {
  const [activeTab, setActiveTab] = useState<
    'All' | 'PR & Leadership' | 'Creative & Art' | 'Events & Mentoring'
  >('All');

  const tabs = [
    { label: 'Semua', value: 'All' as const },
    { label: 'Humas & Komunikasi', value: 'PR & Leadership' as const },
    { label: 'Seni & Wirausaha', value: 'Creative & Art' as const },
    { label: 'Acara & Pendampingan', value: 'Events & Mentoring' as const },
  ];

  const filteredExperience = EXPERIENCE_DATA.filter((exp) =>
    activeTab === 'All' ? true : exp.type === activeTab
  );

  // Split cards into two columns for masonry effect (odd → left, even → right)
  const leftCol  = filteredExperience.filter((_, i) => i % 2 === 0);
  const rightCol = filteredExperience.filter((_, i) => i % 2 === 1);

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
              onClick={() => setActiveTab(tab.value)}
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

        {/* ── Masonry layout: 2 independent flex columns ── */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile: single column */}
          <div className="flex flex-col gap-6 md:hidden">
            <AnimatePresence mode="popLayout">
              {filteredExperience.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </AnimatePresence>
          </div>

          {/* Desktop: two independent columns → true masonry */}
          <div className="hidden md:flex gap-6 items-start">
            {/* Left column */}
            <div className="flex-1 flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {leftCol.map((exp) => {
                  const globalIndex = filteredExperience.indexOf(exp);
                  return (
                    <ExperienceCard key={exp.id} exp={exp} index={globalIndex} />
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Right column */}
            <div className="flex-1 flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {rightCol.map((exp) => {
                  const globalIndex = filteredExperience.indexOf(exp);
                  return (
                    <ExperienceCard key={exp.id} exp={exp} index={globalIndex} />
                  );
                })}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
