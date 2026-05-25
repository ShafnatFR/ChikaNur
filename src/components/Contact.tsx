import { motion } from 'motion/react';
import { Mail, MapPin, Award, Linkedin, Instagram, ArrowRight } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    handle: 'chikanursiswoyо',
    description: 'Koneksi profesional, kolaborasi riset, & peluang kepemimpinan',
    href: 'https://www.linkedin.com/in/chikanursiswoyо',
    icon: Linkedin,
    cta: 'Hubungi di LinkedIn',
    bg: 'bg-[#0A66C2]',
    bgLight: 'bg-[#0A66C2]/8',
    border: 'border-[#0A66C2]/20',
    text: 'text-[#0A66C2]',
    shadow: 'shadow-[#0A66C2]/20',
    emoji: '💼',
  },
  {
    label: 'Instagram',
    handle: '@chikannr',
    description: 'Karya seni, aktivitas organisasi, & keseharian kreatif Chika',
    href: 'https://www.instagram.com/chikannr',
    icon: Instagram,
    cta: 'Kunjungi Instagram',
    bg: 'bg-gradient-to-br from-pink-500 to-rose-500',
    bgLight: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-600',
    shadow: 'shadow-pink-200',
    emoji: '🎨',
  },
  {
    label: 'Email',
    handle: 'chikanur2504@gmail.com',
    description: 'Undangan kepanitiaan, kolaborasi desain, atau diskusi akademik',
    href: 'mailto:chikanur2504@gmail.com',
    icon: Mail,
    cta: 'Kirim Email',
    bg: 'bg-slate-700',
    bgLight: 'bg-slate-50',
    border: 'border-slate-200',
    text: 'text-slate-600',
    shadow: 'shadow-slate-200',
    emoji: '✉️',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-50 rounded-full filter blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-50 rounded-full filter blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-50 text-pink-600 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Hubungi Saya</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight">
            Mari Terhubung! 👋
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-3 leading-relaxed font-light">
            Pilih platform yang paling nyaman untukmu — Chika aktif di ketiga saluran ini dan siap merespons dengan cepat.
          </p>
          <div className="w-12 h-1 bg-pink-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {SOCIAL_LINKS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.a
                key={s.label}
                href={s.href}
                target={s.label !== 'Email' ? '_blank' : undefined}
                rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group flex flex-col items-center text-center p-7 rounded-3xl border ${s.bgLight} ${s.border} shadow-lg ${s.shadow} cursor-pointer transition-shadow duration-300 hover:shadow-xl`}
              >
                {/* Icon circle */}
                <div className={`w-14 h-14 rounded-2xl ${s.bg} flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Emoji accent */}
                <span className="text-2xl mb-1">{s.emoji}</span>

                <h3 className="font-extrabold text-slate-800 text-lg leading-tight">{s.label}</h3>
                <p className={`text-xs font-semibold mt-0.5 mb-3 ${s.text}`}>{s.handle}</p>
                <p className="text-xs text-slate-500 leading-relaxed font-light mb-5">{s.description}</p>

                {/* CTA pill */}
                <span className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold ${s.bg} text-white shadow-sm group-hover:gap-2.5 transition-all duration-200`}>
                  {s.cta}
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* Info strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="bg-pink-50/60 border border-pink-100 rounded-3xl p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left"
        >
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">Lokasi</p>
              <p className="text-xs text-slate-500 font-light mt-0.5">Bekasi – Depok, Jawa Barat</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">Afiliasi</p>
              <p className="text-xs text-slate-500 font-light mt-0.5">FIA Universitas Indonesia</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-white border border-pink-100 flex items-center justify-center text-pink-500 flex-shrink-0">
              <span className="text-base">⚡</span>
            </div>
            <div>
              <p className="font-bold text-slate-800 text-sm">Terbuka untuk</p>
              <p className="text-xs text-slate-500 font-light mt-0.5">Kolaborasi, magang PR, & kepanitiaan</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
