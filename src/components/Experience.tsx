import { useState, MouseEvent, useRef, useCallback, WheelEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, Calendar, Clock, CheckSquare, ChevronLeft, ChevronRight, Images, X, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data';
import { ExperienceItem } from '../types';

// ─── Photo Lightbox Modal ────────────────────────────────────────────────────
interface LightboxProps {
  images: string[];
  startIndex: number;
  orgName: string;
  onClose: () => void;
}

function Lightbox({ images, startIndex, orgName, onClose }: LightboxProps) {
  const [current, setCurrent] = useState(startIndex);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef<{ x: number; y: number; ox: number; oy: number } | null>(null);

  const resetZoom = () => { setScale(1); setOffset({ x: 0, y: 0 }); };

  const changeImage = (fn: (i: number) => number) => {
    resetZoom();
    setCurrent(fn);
  };

  const prev = (e: MouseEvent) => { e.stopPropagation(); changeImage((c) => (c - 1 + images.length) % images.length); };
  const next = (e: MouseEvent) => { e.stopPropagation(); changeImage((c) => (c + 1) % images.length); };

  const handleWheel = useCallback((e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setScale((s) => Math.min(4, Math.max(1, s - e.deltaY * 0.002)));
  }, []);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (scale <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY, ox: offset.x, oy: offset.y };
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !dragStart.current) return;
    setOffset({
      x: dragStart.current.ox + (e.clientX - dragStart.current.x),
      y: dragStart.current.oy + (e.clientY - dragStart.current.y),
    });
  };

  const handleMouseUp = () => { setIsDragging(false); dragStart.current = null; };

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
      >
        <motion.div
          key="lightbox-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Top bar */}
          <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/60 to-transparent pointer-events-none">
            <span className="text-white text-xs font-medium opacity-80">{orgName}</span>
            <div className="flex items-center gap-2 pointer-events-auto">
              {/* Zoom controls */}
              <button
                onClick={(e) => { e.stopPropagation(); setScale((s) => Math.max(1, s - 0.5)); if (scale - 0.5 <= 1) setOffset({ x: 0, y: 0 }); }}
                disabled={scale <= 1}
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 backdrop-blur-sm flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Zoom out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="text-white text-[11px] font-mono w-10 text-center">{Math.round(scale * 100)}%</span>
              <button
                onClick={(e) => { e.stopPropagation(); setScale((s) => Math.min(4, s + 0.5)); }}
                disabled={scale >= 4}
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-30 backdrop-blur-sm flex items-center justify-center text-white transition-colors cursor-pointer"
                aria-label="Zoom in"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              {scale > 1 && (
                <button
                  onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                  className="w-7 h-7 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Reset zoom"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={onClose}
                className="w-7 h-7 rounded-full bg-white/20 hover:bg-red-500/80 backdrop-blur-sm flex items-center justify-center text-white transition-colors cursor-pointer ml-1"
                aria-label="Tutup"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Image container */}
          <div
            className="relative w-full bg-slate-900 overflow-hidden select-none"
            style={{ aspectRatio: '16/10', cursor: scale > 1 ? (isDragging ? 'grabbing' : 'grab') : 'default' }}
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={current}
                src={images[current]}
                alt={`${orgName} foto ${current + 1}`}
                className="w-full h-full object-contain pointer-events-none"
                style={{
                  transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
                  transition: isDragging ? 'none' : 'transform 0.15s ease',
                }}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.2 }}
                draggable={false}
              />
            </AnimatePresence>

            {/* Prev / Next — hidden when zoomed */}
            {images.length > 1 && scale === 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors cursor-pointer"
                  aria-label="Berikutnya"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Scroll hint */}
            {scale === 1 && (
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-white/50 text-[10px] pointer-events-none">
                Scroll untuk zoom
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-5 py-3 flex items-center justify-between gap-4 border-t border-pink-100">
            <p className="text-sm font-bold text-slate-700 truncate">{orgName}</p>
            <div className="flex items-center gap-3 flex-shrink-0">
              {images.length > 1 && (
                <div className="flex gap-1.5">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { resetZoom(); setCurrent(i); }}
                      className={`rounded-full transition-all duration-200 cursor-pointer ${
                        i === current ? 'w-4 h-1.5 bg-pink-500' : 'w-1.5 h-1.5 bg-slate-300 hover:bg-pink-300'
                      }`}
                      aria-label={`Foto ${i + 1}`}
                    />
                  ))}
                </div>
              )}
              <span className="text-xs text-slate-400 font-mono">{current + 1}/{images.length}</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Mini image gallery carousel ────────────────────────────────────────────
interface MediaGalleryProps {
  images: string[];
  orgName: string;
  onImageClick: (index: number) => void;
}

function MediaGallery({ images, orgName, onImageClick }: MediaGalleryProps) {
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
    <div className="mt-4 rounded-2xl overflow-hidden relative group bg-slate-50 border border-pink-100">
      {/* Main image — clickable */}
      <div
        className="relative w-full h-44 sm:h-52 overflow-hidden cursor-zoom-in"
        onClick={(e) => { e.stopPropagation(); onImageClick(current); }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={current}
            src={validImages[current]}
            alt={`${orgName} dokumentasi ${current + 1}`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.25 }}
            onError={() => setImgError((prev) => ({ ...prev, [current]: true }))}
          />
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

        {/* Zoom hint overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-black/40 backdrop-blur-sm rounded-full p-2.5">
            <ZoomIn className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Counter badge */}
        <div className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/50 backdrop-blur-sm text-white text-[10px] font-medium px-2 py-0.5 rounded-full pointer-events-none">
          <Images className="w-3 h-3" />
          <span>{current + 1}/{validImages.length}</span>
        </div>

        {/* Navigation arrows */}
        {validImages.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white cursor-pointer"
              aria-label="Gambar sebelumnya"
            >
              <ChevronLeft className="w-4 h-4 text-slate-700" />
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/80 backdrop-blur-sm shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white cursor-pointer"
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
              className={`rounded-full transition-all duration-200 cursor-pointer ${
                i === current ? 'w-4 h-1.5 bg-pink-500' : 'w-1.5 h-1.5 bg-slate-300 hover:bg-pink-300'
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
  key?: string;
}

function ExperienceCard({ exp, index }: ExperienceCardProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [logoError, setLogoError] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

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
    setHovered(false);
  };

  const typeLabel =
    exp.type === 'PR & Leadership'
      ? 'Humas & Kepemimpinan'
      : exp.type === 'Creative & Art'
      ? 'Sifat Kreatif & Seni'
      : 'Acara & Mentoring';

  const validImages = (exp.mediaImages ?? []).filter(Boolean);

  return (
    <>
      <motion.div
        layout
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={() => setHovered(true)}
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
          boxShadow: '0 20px 30px -10px rgba(255, 192, 203, 0.45), 0 8px 15px -8px rgba(255, 192, 203, 0.3)',
        }}
        transition={{
          type: 'spring',
          stiffness: 200,
          damping: 18,
          layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        }}
        style={{
          transformPerspective: 1000,
          backgroundColor: hovered ? '#FFC0CB' : '#ffffff',
          borderColor: hovered ? '#f9a8b8' : '#fda4af',
          transition: 'background-color 0.3s ease, border-color 0.3s ease',
        }}
        className="border-2 rounded-3xl p-6 text-left flex flex-col relative cursor-pointer select-none shadow-xs"
      >
        <div style={{ transform: 'translateZ(20px)' }}>
          {/* Header */}
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 min-w-0">
              <span
                className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold uppercase tracking-wider border transition-colors duration-300"
                style={hovered
                  ? { backgroundColor: 'rgba(255,255,255,0.35)', color: '#9d174d', borderColor: 'rgba(255,255,255,0.4)' }
                  : { backgroundColor: '#fdf2f8', color: '#db2777', borderColor: 'rgba(251,207,232,0.5)' }
                }
              >
                {typeLabel}
              </span>
              <h3
                className="text-lg sm:text-xl font-extrabold tracking-tight mt-2 leading-snug transition-colors duration-300"
                style={{ color: hovered ? '#831843' : '#1e293b' }}
              >
                {exp.role}
              </h3>
              <p
                className="text-sm font-bold mt-1 transition-colors duration-300"
                style={{ color: hovered ? '#9d174d' : '#475569' }}
              >
                {exp.organization}
              </p>
            </div>

            {/* Logo */}
            <div
              className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border flex items-center justify-center transition-colors duration-300"
              style={hovered
                ? { backgroundColor: 'rgba(255,255,255,0.4)', borderColor: 'rgba(255,255,255,0.5)' }
                : { backgroundColor: '#f8fafc', borderColor: '#f1f5f9' }
              }
            >
              {exp.logo && !logoError ? (
                <img
                  src={exp.logo}
                  alt={`${exp.organization} logo`}
                  className="w-full h-full object-contain p-1"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <span
                  className="font-bold text-lg transition-colors duration-300"
                  style={{ color: hovered ? '#be185d' : '#f472b6' }}
                >
                  {index + 1}
                </span>
              )}
            </div>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-y-1 gap-x-4 mt-4 text-xs font-mono">
            <div className="flex items-center gap-1" style={{ color: hovered ? '#be185d' : '#94a3b8' }}>
              <Calendar className="w-3.5 h-3.5" />
              <span>{exp.period}</span>
            </div>
            <div className="flex items-center gap-1" style={{ color: hovered ? '#be185d' : '#94a3b8' }}>
              <Clock className="w-3.5 h-3.5" />
              <span>{exp.duration}</span>
            </div>
          </div>

          <hr
            className="my-4 border-dashed transition-colors duration-300"
            style={{ borderColor: hovered ? 'rgba(255,255,255,0.4)' : '#fdf2f8' }}
          />

          {/* Description */}
          <ul className="space-y-2.5 my-4">
            {exp.description.map((item, id) => (
              <li
                key={id}
                className="flex gap-2.5 text-xs sm:text-sm leading-relaxed font-light transition-colors duration-300"
                style={{ color: hovered ? '#831843' : '#64748b' }}
              >
                <CheckSquare
                  className="w-4 h-4 flex-shrink-0 mt-0.5 transition-colors duration-300"
                  style={{ color: hovered ? '#be185d' : '#f472b6' }}
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {/* Media gallery */}
          {validImages.length > 0 && (
            <MediaGallery
              images={validImages}
              orgName={exp.organization}
              onImageClick={(i) => setLightboxIndex(i)}
            />
          )}
        </div>

        {/* Skills tags */}
        <div style={{ transform: 'translateZ(10px)' }} className="mt-4 flex flex-wrap gap-1.5">
          {exp.skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-0.5 rounded-md text-[10px] font-medium border transition-colors duration-300"
              style={hovered
                ? { backgroundColor: 'rgba(255,255,255,0.35)', color: '#9d174d', borderColor: 'rgba(255,255,255,0.45)' }
                : { backgroundColor: '#fafafa', color: '#64748b', borderColor: '#f1f5f9' }
              }
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={validImages}
          startIndex={lightboxIndex}
          orgName={exp.organization}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
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

        {/* Masonry layout */}
        <div className="max-w-6xl mx-auto">
          {/* Mobile: single column */}
          <div className="flex flex-col gap-6 md:hidden">
            <AnimatePresence mode="popLayout">
              {filteredExperience.map((exp, index) => (
                <ExperienceCard key={exp.id} exp={exp} index={index} />
              ))}
            </AnimatePresence>
          </div>

          {/* Desktop: two columns */}
          <div className="hidden md:flex gap-6 items-start">
            <div className="flex-1 flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {leftCol.map((exp) => (
                  <ExperienceCard key={exp.id} exp={exp} index={filteredExperience.indexOf(exp)} />
                ))}
              </AnimatePresence>
            </div>
            <div className="flex-1 flex flex-col gap-6">
              <AnimatePresence mode="popLayout">
                {rightCol.map((exp) => (
                  <ExperienceCard key={exp.id} exp={exp} index={filteredExperience.indexOf(exp)} />
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
