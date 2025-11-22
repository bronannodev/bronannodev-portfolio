import React from 'react';
import { motion } from 'framer-motion'; //eslint-disable-line
import { Github, ArrowRight } from 'lucide-react';

const Hero = ({ variants }) => {
  return (
    <section id="inicio" className="min-h-[90vh] flex flex-col justify-center pt-10">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={variants}
        className="space-y-8 max-w-3xl"
      >
        <div className="flex items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-green-950/20 text-green-300 text-xs font-medium border border-green-900/30 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(96,165,250,0.5)]"/>
            Disponible para trabajar
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
          Hola! soy <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-blue-900">
            Santiago.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-light">
          <span className="text-white font-medium">Desarrollador</span>. 
          web full stack con experiencia en <span className="text-blue-200/80 border-b border-blue-900/50 pb-0.5">React</span>, <span className="text-blue-200/80 border-b border-blue-900/50 pb-0.5">Node.js</span> y <span className="text-blue-200/80 border-b border-blue-900/50 pb-0.5">bases de datos</span>. Me apasiona crear aplicaciones web modernas y eficientes.
          Puedes conocer más sobre mí y mi experiencia contactandome.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <a 
            href="#proyectos"
            className="flex items-center gap-2 px-8 py-4 bg-white text-black rounded-sm font-bold tracking-tight hover:bg-blue-50 transition-all group shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Ver Proyectos
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="https://github.com/bronannodev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 border border-slate-800 hover:border-blue-800/50 text-slate-400 hover:text-blue-200 rounded-sm font-medium transition-all bg-transparent hover:bg-blue-950/10"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;