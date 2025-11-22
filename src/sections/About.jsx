import React from 'react';
import { motion } from 'framer-motion'; //eslint-disable-line
import { Cpu, Code2, Terminal, Briefcase, GraduationCap, BookOpen, Search } from 'lucide-react';

const TIMELINE = [
  {
    year: "2025",
    title: "Búsqueda Laboral IT",
    place: "Disponible",
    desc: "Buscando aplicar conocimientos en un entorno profesional.",
    icon: Search,
    active: true
  },
  {
    year: "2022 - 2025",
    title: "Community Manager",
    place: "Freelance, contrato con Agencia Digital",
    desc: "Gestión de estrategia digital en múltiples sedes.",
    icon: Briefcase
  },
  {
    year: "2022 - Presente",
    title: "Ingeniería en Sistemas",
    place: "Universidad nacional de La Rioja",
    desc: "4° año en curso. Fundamentos de ingeniería y gestión de datos.",
    icon: GraduationCap
  },
  {
    year: "2022 - Presente",
    title: "Desarrollador Full Stack",
    place: "Autodidacta",
    desc: "Especialización continua en ecosistema React y Node.js.",
    icon: BookOpen
  }
];

const SKILLS = {
  frontend: [
    { name: "React", level: 90 },
    { name: "Tailwind CSS", level: 95 },
    { name: "JavaScript", level: 85 },
    { name: "HTML5 / CSS3", level: 95 },
  ],
  backend: [
    { name: "Node.js", level: 80 },
    { name: "SQL", level: 75 },
    { name: "Java", level: 70 },
    { name: "C# / .NET", level: 70 },
    { name: "Python", level: 60 },
    { name: "C / C++", level: 50 },
  ]
};

// --- COMPONENTES INTERNOS ---
const SectionTitle = ({ title, icon: Icon }) => ( //eslint-disable-line
  <div className="flex items-center gap-3 mb-10 group">
    <div className="p-2 rounded-md bg-blue-950/30 border border-blue-900/30 text-blue-200 group-hover:bg-blue-900/20 transition-colors">
      <Icon className="w-5 h-5" />
    </div>
    <h2 className="text-3xl font-bold text-white tracking-tight group-hover:text-blue-100 transition-colors">{title}</h2>
  </div>
);

const TimelineItem = ({ item, last }) => (
  <div className="relative pl-8 pb-8 last:pb-0">
    {/* Línea conectora */}
    {!last && (
      <div className="absolute left-[11px] top-[28px] bottom-0 w-[2px] bg-blue-900/20" />
    )}
    
    {/* Punto/Icono */}
    <div className={`absolute left-0 top-1 w-6 h-6 rounded-full flex items-center justify-center border z-10
      ${item.active 
        ? 'bg-blue-600 border-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.5)]' 
        : 'bg-[#0a0f1c] border-blue-900/50'
      }`}
    >
      {item.active && <div className="w-2 h-2 bg-white rounded-full animate-pulse" />}
    </div>

    {/* Contenido */}
    <div className="group">
      <div className="flex items-center gap-2 mb-1">
        <span className={`text-xs font-bold uppercase tracking-wider 
          ${item.active ? 'text-blue-400' : 'text-slate-500'}`}
        >
          {item.year}
        </span>
      </div>
      
      <h3 className="text-lg font-bold text-white flex items-center gap-2">
        {item.title}
      </h3>
      <p className="text-sm text-blue-200/60 font-medium mb-2 flex items-center gap-1">
         {item.icon && <item.icon className="w-3 h-3" />}
         {item.place}
      </p>
      <p className="text-sm text-slate-400 leading-relaxed font-light">
        {item.desc}
      </p>
    </div>
  </div>
);

const About = ({ variants }) => {
  return (
    <section id="sobre-mi" className="py-24">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={variants}
      >
        <SectionTitle title="Perfil Técnico" icon={Cpu} />
        
        <div className="grid md:grid-cols-2 gap-16">
          {/* Columna Timeline Unificado */}
          <div>
            <div className="bg-[#0a0f1c]/50 p-8 rounded-xl border border-white/5 backdrop-blur-sm h-full">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-widest mb-8 flex items-center gap-2 border-b border-white/5 pb-4">
                <Briefcase className="w-4 h-4 text-blue-500" /> Trayectoria & Educación
              </h3>
              
              <div className="space-y-2">
                {TIMELINE.map((item, index) => (
                  <TimelineItem key={index} item={item} last={index === TIMELINE.length - 1} />
                ))}
              </div>
            </div>
          </div>

          {/* Columna Skills */}
          <div className="space-y-10">
            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-widest mb-6">
                <Code2 className="w-4 h-4 text-blue-500" /> Frontend Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.frontend.map((skill) => (
                  <div key={skill.name} className="px-4 py-2 rounded-sm bg-[#0a0f1c] border border-slate-800/50 text-sm text-slate-400 hover:text-blue-200 hover:border-blue-900/50 transition-colors cursor-default">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="flex items-center gap-2 text-sm font-bold text-slate-200 uppercase tracking-widest mb-6">
                <Terminal className="w-4 h-4 text-blue-500" /> Backend & Lenguajes
              </h3>
              <div className="flex flex-wrap gap-2">
                {SKILLS.backend.map((skill) => (
                  <div key={skill.name} className="px-4 py-2 rounded-sm bg-[#0a0f1c] border border-slate-800/50 text-sm text-slate-400 hover:text-blue-200 hover:border-blue-900/50 transition-colors cursor-default">
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;