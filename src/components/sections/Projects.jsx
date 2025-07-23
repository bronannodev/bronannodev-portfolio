import { RevealOnScroll } from "../RevealOnScroll";
import  SpotlightCard  from "../SpotlightCard";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Mis proyectos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SpotlightCard className="hover:-translate-y-1 transition-all">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Portafolio web</h3>
                <p className="text-gray-400 mb-4">
                  Portafolio personal con diseño responsivo, animaciones y
                  optimización SEO.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "JavaScript", "CSS"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/bronannodev/bronannodev-portfolio"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    Link repositorio →
                  </a>
                </div>
              </div>
            </SpotlightCard>
            <SpotlightCard className="hover:-translate-y-1 transition-all">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Sistema gestión de aulas</h3>
                <p className="text-gray-400 mb-4">
                  Proyecto universitario sobre un sistema con la capacidad de ser utilizado por distintos usuarios para gestionar un sistema de reservas de aulas o espacios dentro de una institución, basado en WinForm .NET y MySQL
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["VB.NET", "SQL"].map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                rounded-full text-sm
                                transition
                                hover:bg-blue-500/20 hover:-translate-y-0.5
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="https://github.com/bronannodev/Sistema-Gestion-de-Aulas"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    Link repositorio →
                  </a>
                </div>
              </div>
            </SpotlightCard>
            <SpotlightCard className="hover:-translate-y-1 transition-all">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Aplicación de escritorio para gestión de inventario</h3>
                <p className="text-gray-400 mb-4">
                  En desarrollo, una aplicación de escritorio para gestionar un inventario de productos, con funcionalidades de alta, baja y modificación de productos, basado en WinForm .NET y MySQL
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["VB.NET", "PostgreSQL", "C#"].map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 
                                rounded-full text-sm
                                transition
                                hover:bg-blue-500/20 hover:-translate-y-0.5
                                hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href="#projects"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    Link en progreso →
                  </a>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};