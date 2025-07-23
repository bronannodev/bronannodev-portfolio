import React from 'react'
import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { Footer } from "./components/sections/Footer";
import Galaxy from "./components/Galaxy.jsx";
import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div
        className={`transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100 relative`}
      >
        <Galaxy
          mouseRepulsion={false}
          mouseInteraction={false}
          density={0.4}
          glowIntensity={0.1}
          saturation={0.1}
          hueShift={40}
          transparent={true}
        />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main className="relative z-10 flex flex-col">
          <Home />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;