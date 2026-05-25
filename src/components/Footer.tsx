import { useState } from 'react';
import { Heart, Linkedin, Instagram, Mail, Rocket, ArrowUp } from 'lucide-react';
import ContactModal from './ContactModal';

const NAV_LINKS = [
  { label: 'Beranda', id: 'hero' },
  { label: 'Tentang', id: 'about' },
  { label: 'Pendidikan', id: 'education' },
  { label: 'Pengalaman', id: 'experience' },
  { label: 'Keahlian & Seni', id: 'skills' },
];

const SOCIAL = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/chikanursiswoyо',
    icon: Linkedin,
    color: 'hover:text-[#0A66C2]',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/chikannr',
    icon: Instagram,
    color: 'hover:text-pink-500',
  },
  {
    label: 'Email',
    href: 'mailto:chikanur2504@gmail.com',
    icon: Mail,
    color: 'hover:text-slate-700',
  },
];

export default function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-slate-900 text-white">

        {/* Main footer body */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Col 1: Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2.5">
                <span className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md shadow-pink-500/30">
                  C
                </span>
                <div>
                  <p className="font-bold text-white text-base leading-tight">Chika Nur Siswoyo</p>
                  <p className="text-[10px] uppercase tracking-widest text-pink-400 font-semibold">UI Scholar & PRO</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed max-w-xs">
                Mahasiswa Ilmu Administrasi Publik UI yang aktif di public relations, kepemimpinan organisasi, dan seni kreatif.
              </p>
              {/* Social icons */}
              <div className="flex items-center gap-3 pt-1">
                {SOCIAL.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.label !== 'Email' ? '_blank' : undefined}
                      rel={s.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      aria-label={s.label}
                      className={`w-9 h-9 rounded-xl bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 ${s.color} transition-all duration-200 hover:-translate-y-0.5`}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Col 2: Navigation */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Navigasi</p>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollTo(link.id)}
                      className="text-sm text-slate-400 hover:text-pink-400 transition-colors duration-200 cursor-pointer font-light"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: CTA */}
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Kolaborasi</p>
              <p className="text-sm text-slate-400 font-light leading-relaxed mb-5">
                Terbuka untuk undangan kepanitiaan, magang PR, riset kebijakan, dan proyek seni kreatif.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg shadow-pink-500/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <Rocket className="w-4 h-4" />
                <span>Undang Kolaborasi</span>
              </button>
            </div>

          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500 font-light flex items-center gap-1.5">
              <span>&copy; {currentYear} Chika Nur Siswoyo. Dibuat dengan</span>
              <Heart className="w-3 h-3 fill-pink-500 text-pink-500" />
              <span>untuk kepemimpinan masa depan.</span>
            </p>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span>Fakultas Ilmu Administrasi · Universitas Indonesia</span>
              <button
                onClick={() => scrollTo('hero')}
                aria-label="Kembali ke atas"
                className="w-7 h-7 rounded-lg bg-slate-800 hover:bg-pink-500 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
