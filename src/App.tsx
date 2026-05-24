/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero', 'about', 'education', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 120; // offset of the nav heights

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy);
    // Trigger on initial render
    handleScrollSpy();

    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-pink-150 selection:text-pink-900 scroll-smooth">
      {/* Dynamic Sticky Header Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Single Page Modules */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* About ("Tentang Saya") Section */}
        <About />

        {/* Education Timeline Section */}
        <Education />

        {/* Experience Showcase Tabbed Section */}
        <Experience />

        {/* Skills Metrics & Creative Art Showcase Section */}
        <Skills />

        {/* Contact Coordinates & Interlocking Form Section */}
        <Contact />
      </main>

      {/* Understated Professional Signature Footer */}
      <Footer />
    </div>
  );
}

