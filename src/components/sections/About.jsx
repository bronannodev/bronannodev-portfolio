import { RevealOnScroll } from "../RevealOnScroll";
import  SpotlightCard  from "../SpotlightCard";

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"];
  const backendSkills = ["Node.js", "Java", "C", "SQL", "Python", "C++", "VB.NET"]; 

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Sobre mi
          </h2>

          <SpotlightCard className="hover:-translate-y-1 transition-all">
            <div className="p-8">
              <p className="text-gray-300 mb-6">
                Entusiasta de la tecnología, la innovación y la automatización de procesos.
                Disfruto enfrentar desafíos que me saquen de la zona de confort, que me obliguen a aprender, crecer y reinventarme constantemente.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4"> Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </SpotlightCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <SpotlightCard className="hover:-translate-y-1 transition-all">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4"> 🏫 Mi educación </h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li>
                    <strong> Ingeniería en sistemas de información </strong> - Universidad Nacional de La Rioja
                    (2022 - En curso)
                  </li>
                  <li>
                    <strong> Cursos de actualización </strong> - HTML, CSS, TailwindCSS, React, NodeJS, Javascript (2022 - Actualidad)
                  </li>
                </ul>
              </div>
            </SpotlightCard>
            <SpotlightCard className="hover:-translate-y-1 transition-all">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4"> 💼 Trayectoria </h3>
                <div className="space-y-4 text-gray-300">
                  <div>
                    <h4 className="font-semibold">
                      Community Manager (2022 - 2025)
                    </h4>
                    <p>
                      Manejo profesional de las redes en las sedes de La Rioja, Chilecito y Chamical.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      En busca de inmersión laboral (2025)
                    </h4>
                    <p>
                      Actualmente me encuentro en la búsqueda de una inmersión laboral que me permita aplicar mis conocimientos y seguir aprendiendo en un entorno profesional.
                    </p>
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};