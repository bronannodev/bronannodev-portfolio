import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const PROJECTS = [
  {
    title: "Personalizador 3D de Fundas",
    desc: "Herramienta interactiva en tiempo real para visualizacion y personalizacion 3D de fundas de smartphones con renderizado de modelos, iluminacion y texturas dinamicas.",
    tech: ["React", "Three.js", "React Three Fiber", "TailwindCSS", "Framer Motion"],
    type: "3D Web App",
    link: "https://github.com/bronannodev/ic-personalizador",
    status: "active",
    featured: true
  },
  {
    title: "Pilates Studio",
    desc: "Sistema integral de gestion para estudios de pilates: administracion de alumnas, profesoras, agenda de clases, cupos, control de pagos, caja e inventario.",
    tech: ["Next.js", "React", "Supabase", "Zustand", "TailwindCSS"],
    type: "Full Stack Web",
    link: "https://github.com/pilatesstudiolr1/pilates-carri",
    status: "active",
    featured: true
  },
  {
    title: "Sistema Clinico & Historia Medica",
    desc: "Plataforma para instituto medico quirurgico: gestion de internacion, evolucion clinica diaria y semanal de pacientes y generacion de reportes medicos en PDF.",
    tech: ["FastAPI", "React", "PostgreSQL", "Docker", "Zustand", "React-PDF"],
    type: "Full Stack / Salud",
    link: "https://github.com/bronannodev/front-end-instituto8D",
    status: "finished",
    featured: true
  },
  {
    title: "Fundacion RV - Backyard La Picada",
    desc: "Sitio web oficial de la primera edicion de la ultramaraton backyard 'La Picada', con reglamento, cronograma, galeria multimedia y registro de corredores.",
    tech: ["Next.js", "TypeScript", "React", "TailwindCSS"],
    type: "Web Oficial",
    link: "https://github.com/bronannodev/rvfundacion",
    liveUrl: "https://rvfundacion.vercel.app",
    status: "finished",
    featured: true
  },
  {
    title: "Sistema de Gestion de Aulas",
    desc: "Software de escritorio para la reserva, control y administracion logistica de espacios fisicos y aulas universitarias segun comisiones y horarios.",
    tech: ["VB.NET", "WinForms", "MySQL", ".NET"],
    type: "Desktop App",
    link: "https://github.com/bronannodev/Sistema-Gestion-de-Aulas",
    status: "finished",
    featured: false
  },
  {
    title: "Sistema de Reservas de Turnos",
    desc: "Sistema web de gestion y agendamiento de turnos para centros de salud con paneles independientes para pacientes y profesionales medicos.",
    tech: ["FastAPI", "React", "MySQL", "TailwindCSS"],
    type: "Full Stack Web",
    link: "https://github.com/bronannodev/appointment-booking-system---health-center",
    status: "finished",
    featured: false
  },
  {
    title: "Sabbatex Tienda Textil",
    desc: "Plataforma de catalogo de productos y venta online para fabricante y distribuidor textil con diseno responsivo y arquitectura modular.",
    tech: ["React", "TypeScript", "TailwindCSS"],
    type: "E-commerce Web",
    link: "https://github.com/bronannodev/sabbatex-tienda",
    status: "finished",
    featured: false
  }
];

const Projects = () => {
  return (
    <section id="proyectos" className="space-y-6">
      <div>
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
          Proyectos
        </h2>
      </div>

      {/* Lista Editorial de Proyectos (Sin Cards, sin Boxes, sin Filtros) */}
      <div className="divide-y divide-white/[0.06]">
        {PROJECTS.map((project, idx) => (
          <article
            key={idx}
            className="py-5 first:pt-0 last:pb-0 space-y-2 group"
          >
            {/* Linea 1: Titulo, Estado y Enlaces */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div className="flex items-baseline gap-2.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                    project.status === 'active' ? 'bg-emerald-400' : 'bg-slate-400'
                  }`}
                  title={project.status === 'active' ? 'Desarrollo Activo' : 'Finalizado'}
                />
                <h3 className="text-sm font-semibold text-white group-hover:text-blue-200 transition-colors">
                  {project.title}
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  &bull; {project.type}
                </span>
              </div>

              {project.liveUrl && (
                <div className="flex items-center gap-4 text-xs font-mono shrink-0 pl-4 sm:pl-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Demo</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              )}
            </div>

            {/* Linea 2: Descripcion */}
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-3xl pl-4">
              {project.desc}
            </p>

            {/* Linea 3: Tecnologias en linea */}
            <p className="text-[11px] font-mono text-slate-400 pl-4">
              {project.tech.join(' · ')}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;