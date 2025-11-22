import React from 'react';
import { motion } from 'framer-motion'; //eslint-disable-line
import { Terminal, Code2, Cpu, ExternalLink } from 'lucide-react';

// --- DATOS LOCALES ---
const PROJECTS = [
  {
    title: "Sistema de Gestión de Aulas",
    desc: "Sistema universitario para la reserva y administración de espacios físicos. Optimiza la logística académica.",
    tech: ["VB.NET", "SQL Server", "WinForms"],
    type: "Desktop App",
    link: "https://github.com/bronannodev/Sistema-Gestion-de-Aulas",
    status: "finished"
  },
  {
    title: "Portafolio Profesional",
    desc: "SPA moderna con diseño responsivo. Estética Midnight Minimalista.",
    tech: ["React", "Tailwind v4", "Framer Motion"],
    type: "Web",
    link: "https://github.com/bronannodev/bronannodev-portfolio",
    status: "active"
  },
  {
    title: "Gestor de Inventario PYME",
    desc: "Aplicación de escritorio para control de stock, ventas y reportes en tiempo real. Actualmente en desarrollo activo.",
    tech: ["C#", ".NET", "PostgreSQL"],
    type: "En Desarrollo",
    link: "#",
    status: "finished"
  },
  {
    title: "Catalogo dinamico e interactivo web",
    desc: "Catalogo orientado a emprendimientos con la idea de mantener un listado actualizado por parte de los administradores.",
    tech: ["Python", "Flask", "HTML", "MySQL"],
    type: "En Desarrollo/Finalizado",
    link: "https://github.com/bronannodev/catalogowebv2",
    status: "active"
  },
  {
    title: "Sistema de Reservas de turnos",
    desc: "Plataforma web integral para la gestión de turnos médicos. Panel para pacientes y médicos.",
    tech: ["Python", "FastAPI", "React", "MySQL", "TailwindCSS"],
    type: "En Desarrollo/Finalizado",
    link: "https://github.com/bronannodev/appointment-booking-system---health-center",
    status: "finished"
  }
];

// --- COMPONENTE BADGE DE ESTADO ---
const ProjectBadge = ({ status }) => {
  if (!status) return null;

  let config = {
    wrapper: "bg-slate-800/30 text-slate-400 border-slate-700/50",
    dot: "bg-slate-400",
    text: "Estado desconocido"
  };

  switch (status) {
    case 'active':
      config = {
        wrapper: "bg-green-950/20 text-green-300 border-green-900/30",
        dot: "bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]",
        text: "Desarrollo Activo"
      };
      break;
    case 'maintenance':
      config = {
        wrapper: "bg-amber-950/20 text-amber-300 border-amber-900/30",
        dot: "bg-amber-400 animate-pulse",
        text: "Mantenimiento"
      };
      break;
    case 'delayed':
      config = {
        wrapper: "bg-red-950/20 text-red-300 border-red-900/30",
        dot: "bg-red-500",
        text: "Demorado"
      };
      break;
    case 'finished':
      config = {
        wrapper: "bg-blue-950/20 text-blue-300 border-blue-900/30",
        dot: "bg-blue-400",
        text: "Finalizado"
      };
      break;
    default:
      break;
  }

  return (
    <div className="flex items-center mb-4">
      <span className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-medium border flex items-center gap-2 ${config.wrapper}`}>
        <span className={`w-1.5 h-1.5 rounded-full ${config.dot}`} />
        {config.text}
      </span>
    </div>
  );
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

const Projects = ({ variants }) => {
  return (
    <section id="proyectos" className="py-24">
      <motion.div 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }}
        variants={variants}
      >
        <SectionTitle title="Proyectos Selectos" icon={Terminal} />
        
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-xl bg-[#0a0f1c] border border-white/5 hover:border-blue-800/30 hover:bg-[#0f1629] transition-all duration-300 flex flex-col h-full hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-sm bg-blue-950/20 text-blue-300 border border-blue-900/20">
                  {project.type.includes('Web') ? <Code2 className="w-4 h-4" /> : <Cpu className="w-4 h-4" />}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-400 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
              
              {/* BADGE DE ESTADO AQUI */}
              <ProjectBadge status={project.status} />

              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-100 transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-8 leading-relaxed flex-grow font-light">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map(t => (
                  <span key={t} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-sm bg-[#02040a] text-slate-500 border border-slate-800/50 group-hover:border-blue-900/30 group-hover:text-slate-400 transition-colors">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;