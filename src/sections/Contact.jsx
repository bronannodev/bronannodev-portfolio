import React from 'react';
import { motion } from 'framer-motion'; //eslint-disable-line
import { Mail, Linkedin } from 'lucide-react';

const Contact = ({ variants }) => {
  return (
    <section id="contacto" className="py-24 pb-32">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={variants}
        className="text-center max-w-2xl mx-auto"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-950/20 text-blue-300 mb-8 border border-blue-900/30">
          <Mail className="w-6 h-6" />
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-6">¿Empezamos?</h2>
        <p className="text-slate-400 mb-12 text-lg font-light">
          Disponible para nuevas oportunidades. <br />
          Transformemos tus ideas y proyectos en código.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:bonannosantiago@gmail.com" 
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-950 hover:bg-blue-50 font-bold rounded-sm transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            <Mail className="w-4 h-4" />
            Enviar Correo
          </a>
          <a 
            href="https://www.linkedin.com/in/santiago-bonanno-008041288/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#02040a] text-white hover:bg-[#0a0f1c] font-bold rounded-sm border border-slate-800 hover:border-blue-800 transition-all"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;