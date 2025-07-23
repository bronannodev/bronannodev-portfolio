import { useEffect } from "react";
import { motion } from "framer-motion"; //eslint-disable-line
import ShinyText from "./ShinyText";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <motion.nav
      className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold flex items-center">
            <ShinyText text="bronanno" className="mr-1" speed={3} />
            <ShinyText text=".Dev" className="text-blue-500" speed={3} />
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            ☰
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Inicio
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Sobre mi
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Mis proyectos
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contactame
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};