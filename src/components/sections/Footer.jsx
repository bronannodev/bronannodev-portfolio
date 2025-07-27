import { motion } from "framer-motion"; //eslint-disable-line
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RevealOnScroll } from "../RevealOnScroll";
import { MovingBorder } from "../MovingBorder";

const linkVariants = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

export const Footer = () => {
  return (
    <RevealOnScroll>
      <footer className="min-h-[50vh] flex flex-col items-center justify-center bg-transparent backdrop-blur-lg text-gray-100">
        <div className="flex space-x-6 mb-4">
          <motion.a
            href="https://github.com/bronannodev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            variants={linkVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={30} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/santiago-bonanno-008041288/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white transition-colors duration-300"
            variants={linkVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            aria-label="GitHub Profile"
          >
            <FaGithub size={30} />
          </motion.a>
        </div>
        <MovingBorder
          as="a"
          href="#home"
          containerClassName="bg-blue-500/20"
          borderClassName="bg-[radial-gradient(#3b82f6_40%,transparent_10%)]"
          className="text-white font-medium"
          duration={9000}
        >
          Volver arriba
        </MovingBorder>
        <p className="mt-4 text-gray-400 text-sm">
          © {new Date().getFullYear()} bronannodev. First version of this
        </p>
      </footer>
    </RevealOnScroll>
  );
};