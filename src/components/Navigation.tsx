import { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import ContactModal from './ContactModal';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', id: 'hero' },
    { name: 'Tentang', id: 'about' },
    { name: 'Pendidikan', id: 'education' },
    { name: 'Pengalaman', id: 'experience' },
    { name: 'Keahlian & Seni', id: 'skills' },
  ];

  const handleScrollTo = (id: string) => {
    setIsOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-pink-100 py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => handleScrollTo('hero')}>
              <span className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-sm shadow-pink-200">
                C
              </span>
              <div>
                <span className="font-bold text-slate-800 text-lg sm:text-xl tracking-tight block">
                  Chika Nur Siswoyo
                </span>
                <span className="text-[10px] uppercase tracking-wider text-pink-500 font-semibold block -mt-1">
                  UI Scholar & PRO
                </span>
              </div>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer ${
                    activeSection === link.id
                      ? 'text-pink-600 bg-pink-50'
                      : 'text-slate-600 hover:text-pink-500 hover:bg-neutral-50'
                  }`}
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => setModalOpen(true)}
                className="ml-4 bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-pink-200 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer flex items-center gap-2"
              >
                <Rocket className="w-4 h-4" />
                <span>Undang Kolaborasi</span>
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-pink-500 hover:bg-pink-50 focus:outline-none cursor-pointer"
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="md:hidden bg-white border-b border-pink-100"
            >
              <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => handleScrollTo(link.id)}
                    className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      activeSection === link.id
                        ? 'text-pink-600 bg-pink-50 font-semibold'
                        : 'text-slate-600 hover:text-pink-500 hover:bg-slate-50'
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <div className="pt-2 px-4">
                  <button
                    onClick={() => { setIsOpen(false); setModalOpen(true); }}
                    className="w-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white text-center py-3 rounded-xl font-semibold shadow-lg shadow-pink-200 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Rocket className="w-4 h-4" />
                    <span>Undang Kolaborasi</span>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Collaboration Modal */}
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
