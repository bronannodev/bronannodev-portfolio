import React from 'react';

// Secciones de Contenido
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';

export default function App() {
  return (
    <div className="min-h-screen bg-[#02040a] text-slate-300 font-sans selection:bg-blue-500/20 selection:text-white relative">
      {/* Contenido Principal: Hero con Redes Sociales -> Experiencia -> Proyectos */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-12 md:py-16 space-y-2">
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
}