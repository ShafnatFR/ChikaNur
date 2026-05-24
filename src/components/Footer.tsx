import { Sparkles, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-pink-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand identifier */}
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-sm">
              C
            </span>
            <span className="font-bold text-slate-700 text-sm tracking-tight">
              Chika Nur Siswoyo
            </span>
          </div>

          {/* Neutral elegant text */}
          <p className="text-xs text-slate-400 font-light flex items-center gap-1">
            <span>&copy; {currentYear} Portofolio Profesional. Dibuat dengan</span>
            <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500 animate-pulse" />
            <span>untuk kepemimpinan masa depan.</span>
          </p>

          {/* Simple signature links */}
          <div className="flex gap-4 text-xs text-slate-400 font-medium">
            <span className="hover:text-pink-500 transition-colors duration-200">Universitas Indonesia</span>
            <span>&bull;</span>
            <span className="hover:text-pink-500 transition-colors duration-200">Girl Up UI</span>
          </div>

        </div>
      </div>
    </footer>
  );
}
