import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-[#02040a] relative z-10">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 text-xs font-mono uppercase tracking-wider">
          © {new Date().getFullYear()} Bronanno. dev
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/bronannodev" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-400 transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="https://www.linkedin.com/in/santiago-bonanno-008041288/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-400 transition-colors">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;