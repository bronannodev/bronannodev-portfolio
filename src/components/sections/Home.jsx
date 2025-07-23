import { motion } from "framer-motion"; // eslint-disable-line
import { MovingBorder } from "../MovingBorder";
import { Spotlight } from "../ui/Spotlight";
import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(258, 83%, 85%, 0.08) 0, hsla(258, 83%, 55%, 0.02) 50%, hsla(258, 83%, 45%, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(258, 83%, 85%, 0.06) 0, hsla(258, 83%, 55%, 0.02) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(258, 83%, 85%, 0.04) 0, hsla(258, 83%, 45%, 0.02) 80%, transparent 100%)"
        translateY={-200}
        width={600}
        height={1000}
        smallWidth={200}
        duration={6}
        xOffset={150}
      />
      <RevealOnScroll>
      <div className="text-center z-10 px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-tight"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          Hola, soy Santiago 
        </motion.h1>
        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
          Desarrollador web full stack con experiencia en React, Node.js y bases de datos.
          Me apasiona crear aplicaciones web modernas y eficientes.
        </p>
        <div className="flex justify-center space-x-4">
          <MovingBorder
            as="a"
            href="#projects"
            containerClassName="bg-blue-500/20"
            borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
            className="text-white font-medium"
            duration={9000}
          >
            Mira mis proyectos
          </MovingBorder>
          <MovingBorder
            as="a"
            href="#contact"
            containerClassName="bg-blue-500/20"
            borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_60%)]"
            className="text-blue-500 font-medium"
            duration={9000}
          >
            Contactame
          </MovingBorder>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};