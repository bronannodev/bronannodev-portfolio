import React, { useState, useEffect } from 'react';

// Componentes de Layout
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

// Secciones de Contenido
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

// --- CONFIGURACIÓN GLOBAL ---

const NAV_ITEMS = [
  { label: 'Inicio', id: 'inicio' },
  { label: 'Sobre mi', id: 'sobre-mi' },
  { label: 'Proyectos', id: 'proyectos' },
];

const SECTION_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // Lógica del "Scroll Spy" (Detectar sección activa)
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [...NAV_ITEMS.map(item => item.id), 'contacto'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#02040a] text-slate-400 font-sans selection:bg-blue-500/30 selection:text-white">
      
      {/* Fondo Animado */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-size-[40px_40px] opacity-[0.4]" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px]" />
        <ParticlesBackground />
      </div>

      {/* Navegación */}
      <Navbar activeSection={activeSection} navItems={NAV_ITEMS} />

      {/* Contenido Principal */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-20">
        <Hero variants={SECTION_VARIANTS} />
        <About variants={SECTION_VARIANTS} />
        <Projects variants={SECTION_VARIANTS} />
        <Contact variants={SECTION_VARIANTS} />
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}