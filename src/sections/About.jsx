import React from 'react';

const EXPERIENCE = [
  {
    role: "Desarrollador independiente",
    project: "Sistema Integral de Gestion Hospitalaria y Clinica",
    period: "2021 – Actualidad",
    details: [
      "Desarrollo de sistema clinico institucional en produccion, utilizado por +10 personas, con +15 modulos y +15 endpoints.",
      "Implemente backend asincrono con FastAPI, modelado PostgreSQL, autenticacion por roles y generacion de historias clinicas en PDF.",
      "Optimice 3 consultas de alta carga mediante views y stored procedures."
    ]
  },
  {
    role: "Desarrollador independiente",
    project: "Pilates Studio SaaS",
    period: "En Produccion",
    details: [
      "Desarrollo de plataforma de gestion para +200 alumnas, +80 turnos y +3 instructoras.",
      "Implemente agenda, control de asistencia, gestion de vencimientos y modulo de cobranzas con +30 operaciones diarias, ademas de notificaciones automatizadas por WhatsApp."
    ]
  },
  {
    role: "Desarrollador Frontend & 3D",
    project: "IC Personalizador / Ecommerce",
    period: "En Produccion",
    details: [
      "Desarrollo de configurador de productos 3D/WebGL para +100 productos configurables.",
      "Implemente interaccion multitactil mobile-first, manipulacion de imagenes sobre modelos, optimizacion de recursos WebP y exportacion de composiciones para posterior contacto comercial."
    ]
  },
  {
    role: "Community Manager & Analista de Adquisicion Digital",
    project: "Eddis Educativa",
    period: "2019 – 2023",
    details: [
      "Gestione adquisicion digital para 3 sedes regionales, aumentando la conversion de leads en +85% y reduciendo el CPA en 35% mediante analisis y optimizacion de campanas.",
      "Desarrolle dashboards de KPIs para seguimiento y toma de decisiones."
    ]
  }
];

const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    skills: "React · Next.js · TypeScript · JavaScript · Vite · Tailwind CSS · Zustand · React Hook Form · Zod"
  },
  {
    category: "Backend",
    skills: "Python · FastAPI · Flask · REST APIs · SQLAlchemy Async · Pydantic · asyncpg"
  },
  {
    category: "Bases de datos",
    skills: "PostgreSQL · Supabase · MySQL · SQL · Alembic · Views · Stored Procedures"
  },
  {
    category: "3D / Web",
    skills: "Three.js · React Three Fiber · WebGL · OGL · Framer Motion · Responsive / Mobile-First"
  },
  {
    category: "Seguridad",
    skills: "JWT · RBAC · bcrypt · Supabase Auth · RLS"
  },
  {
    category: "DevOps",
    skills: "Git · GitHub · Docker · Linux/VPS · Vercel · OpenAPI/Swagger"
  }
];

const About = () => {
  return (
    <section id="sobre-mi" className="py-14 border-t border-white/[0.08] space-y-12">
        {/* Titulo Seccion */}
        <div>
          <h2 className="text-xs font-mono uppercase tracking-widest text-slate-400">
            Experiencia
          </h2>
        </div>

        {/* Experiencia Profesional */}
        <div className="space-y-8">
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="text-sm font-semibold text-white">
                    {exp.project}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    &bull; {exp.role}
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400 shrink-0">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-1 text-xs text-slate-400 font-light leading-relaxed pl-3 border-l border-white/[0.08]">
                {exp.details.map((detail, idx) => (
                  <li key={idx}>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Habilidades Tecnicas */}
        <div className="space-y-4 pt-2">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
            Habilidades Tecnicas
          </h3>

          <div className="space-y-2 text-xs">
            {SKILL_CATEGORIES.map((cat, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
                <span className="font-mono text-slate-400 min-w-32 shrink-0">
                  {cat.category}:
                </span>
                <span className="text-slate-300 font-light leading-relaxed">
                  {cat.skills}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Educacion e Idiomas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-white/[0.06]">
          {/* Educacion */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Educacion
            </h3>
            <div className="text-xs space-y-0.5">
              <p className="font-medium text-white">
                Ingenieria en Sistemas de Informacion
              </p>
              <p className="text-slate-400">
                Universidad Nacional de La Rioja (UNLaR) &bull; 2022 - Presente
              </p>
            </div>
          </div>

          {/* Idiomas */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Idiomas
            </h3>
            <div className="text-xs font-mono text-slate-300 space-y-1">
              <p>Espanol: <span className="text-slate-400">Nativo</span></p>
              <p>Ingles: <span className="text-slate-400">B2 - Intermedio alto</span></p>
              <p>Portugues: <span className="text-slate-400">Competencia basica</span></p>
            </div>
          </div>
        </div>
    </section>
  );
};

export default About;