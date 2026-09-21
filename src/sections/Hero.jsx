import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import TextType from '../components/TextType';

const Hero = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="inicio" className="space-y-6">
      {/* Nombre en grande con efecto de tipeo */}
      <div className="space-y-1">
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-display">
          <TextType
            text={["Santiago Ezequiel Bonanno"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
            cursorClassName="text-blue-400 font-normal"
            loop={false}
          />
        </h1>
        <p className="text-sm sm:text-base text-slate-400 font-mono">
          Full-Stack Developer
        </p>
      </div>

      {/* Texto Principal del Hero */}
      <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light max-w-3xl">
        Hola, soy Santiago, podes{' '}
        <button
          onClick={handlePrint}
          type="button"
          className="text-white underline underline-offset-4 hover:text-blue-400 cursor-pointer font-normal"
        >
          descargar mi CV desde aqui
        </button>{' '}
        o directamente{' '}
        <a
          href="mailto:bonannosantiago@gmail.com"
          className="text-white underline underline-offset-4 hover:text-blue-400 font-normal"
        >
          contactarme
        </a>{' '}
        para saber mas de mi y los proyectos en los cuales estuve y estoy involucrado en la actualidad, a continuacion podes ver mis proyectos destacados, tecnologias y formas en las que trabaje.
      </p>

      {/* Perfil Profesional del CV */}
      <div className="text-xs text-slate-400 leading-relaxed font-light border-l border-white/[0.12] pl-4 space-y-1">
        <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block font-medium">
          Perfil Profesional
        </span>
        <p>
          Full-Stack Developer especializado en React, TypeScript, Python y FastAPI, con experiencia desarrollando aplicaciones web end-to-end para necesidades reales de negocio e instituciones. Experiencia en backend asincrono, APIs REST, PostgreSQL, modelado relacional, autenticacion, migraciones y Docker, desde el relevamiento de requerimientos hasta el despliegue. Experiencia en interfaces interactivas 3D/WebGL mediante Three.js, priorizando soluciones mantenibles y orientadas a problemas operativos concretos.
        </p>
      </div>

      {/* Seccion con acceso a redes sociales y demas */}
      <div className="pt-1 space-y-2 text-xs font-mono no-print">
        <span className="text-slate-400 uppercase tracking-widest text-[11px] block">
          Redes y Contacto:
        </span>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <a
            href="https://github.com/bronannodev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>

          <span className="text-slate-700">/</span>

          <a
            href="https://www.linkedin.com/in/santiago-bonanno-008041288/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="w-3 h-3 text-slate-400" />
          </a>

          <span className="text-slate-700">/</span>

          <a
            href="mailto:bonannosantiago@gmail.com"
            className="text-slate-300 hover:text-white transition-colors"
          >
            bonannosantiago@gmail.com
          </a>

          <span className="text-slate-700">/</span>

          <button
            onClick={handlePrint}
            type="button"
            className="text-slate-300 hover:text-white cursor-pointer transition-colors"
          >
            Descargar CV (PDF)
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;