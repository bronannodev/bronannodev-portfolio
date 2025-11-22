import React from 'react';

const Navbar = ({ activeSection, navItems }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#02040a]/80 backdrop-blur-lg">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="text-lg font-bold tracking-tighter text-white flex items-center gap-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          bronanno<span className="text-slate-600">.dev</span>
        </div>
        
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${
                activeSection === item.id ? 'text-blue-200' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <a 
          href="#contacto"
          className="px-4 py-2 text-xs font-bold uppercase tracking-wide text-blue-100 bg-blue-950/50 hover:bg-blue-900/50 border border-blue-900/30 rounded-sm transition-all hover:shadow-[0_0_15px_rgba(30,58,138,0.2)]"
        >
          Contactame
        </a>
      </div>
    </nav>
  );
};

export default Navbar;