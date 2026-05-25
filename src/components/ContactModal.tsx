import { motion, AnimatePresence } from 'motion/react';
import { X, Linkedin, Instagram, Mail, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    handle: 'chikanursiswoyо',
    description: 'Koneksi profesional & peluang kolaborasi riset',
    href: 'https://www.linkedin.com/in/chikanursiswoyо',
    icon: Linkedin,
    cta: 'Buka LinkedIn',
    iconBg: 'bg-[#0A66C2]',
    cardBg: 'bg-[#0A66C2]/6 hover:bg-[#0A66C2]/12',
    border: 'border-[#0A66C2]/15',
    text: 'text-[#0A66C2]',
    emoji: '💼',
  },
  {
    label: 'Instagram',
    handle: '@chikannr',
    description: 'Karya seni, aktivitas organisasi & keseharian kreatif',
    href: 'https://www.instagram.com/chikannr',
    icon: Instagram,
    cta: 'Buka Instagram',
    iconBg: 'bg-gradient-to-br from-pink-500 to-rose-500',
    cardBg: 'bg-pink-50 hover:bg-pink-100/70',
    border: 'border-pink-200',
    text: 'text-pink-600',
    emoji: '🎨',
  },
  {
    label: 'Email',
    handle: 'chikanur2504@gmail.com',
    description: 'Undangan kepanitiaan, desain, atau diskusi akademik',
    href: 'mailto:chikanur2504@gmail.com',
    icon: Mail,
    cta: 'Kirim Email',
    iconBg: 'bg-slate-600',
    cardBg: 'bg-slate-50 hover:bg-slate-100/70',
    border: 'border-slate-200',
    text: 'text-slate-600',
    emoji: '✉️',
  },
];

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md pointer-events-auto overflow-hidden">

              {/* Header */}
              <div className="relative px-6 pt-6 pb-4 text-center border-b border-slate-100">
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors duration-200 cursor-pointer"
                  aria-label="Tutup"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="text-3xl mb-2">👋</div>
                <h3 className="text-xl font-extrabold text-slate-800 tracking-tight">Undang Kolaborasi</h3>
                <p className="text-xs text-slate-500 font-light mt-1">
                  Pilih platform yang paling nyaman untukmu
                </p>
              </div>

              {/* Social options */}
              <div className="p-5 space-y-3">
                {SOCIAL_LINKS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.label !== 'Email' ? '_blank' : undefined}
                      rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      onClick={onClose}
                      className={`group flex items-center gap-4 p-4 rounded-2xl border ${s.cardBg} ${s.border} transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md cursor-pointer`}
                    >
                      {/* Icon */}
                      <div className={`w-11 h-11 rounded-xl ${s.iconBg} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform duration-200`}>
                        <Icon className="w-5 h-5 text-white" />
                      </div>

                      {/* Text */}
                      <div className="flex-1 text-left min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-800 text-sm">{s.label}</span>
                          <span className="text-sm">{s.emoji}</span>
                        </div>
                        <p className={`text-xs font-semibold ${s.text} truncate`}>{s.handle}</p>
                        <p className="text-[11px] text-slate-400 font-light mt-0.5 leading-snug">{s.description}</p>
                      </div>

                      {/* Arrow */}
                      <ArrowRight className={`w-4 h-4 ${s.text} flex-shrink-0 group-hover:translate-x-1 transition-transform duration-200`} />
                    </a>
                  );
                })}
              </div>

              {/* Footer note */}
              <div className="px-5 pb-5">
                <p className="text-center text-[11px] text-slate-400 font-light">
                  Chika aktif di semua platform dan siap merespons dengan cepat ⚡
                </p>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
