import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";

function Hero() {
  const particlesInit = async (engine) => {
    await loadStarsPreset(engine); 
  };

  return (
    <section id="hero" className="relative min-h-screen bg-[#0D1117] text-white flex justify-center items-center text-center px-4 pt-28 overflow-hidden">
      {/* Starfield background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "stars",
          background: { color: "#0D1117" },
          fullScreen: { enable: false }
        }}
      />

      {/* Orbiting Planet Animation */}
      <div className="absolute bottom-10 right-10 w-40 h-40 z-0 hidden md:block">
        <div className="relative w-full h-full animate-spin-slow">
          <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#A259FF"
              strokeWidth="1"
              strokeDasharray="4 4"
            />
            <circle
              cx="50"
              cy="10"
              r="5"
              fill="#B79CED"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      <div className="z-10 max-w-3xl">
      <motion.h2
        className="text-5xl md:text-6xl font-extrabold mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <span className="text-gray-300">hi, </span>
        <span className="text-[#B79CED]">ashwini</span>
        <span className="text-gray-300"> here.</span>
      </motion.h2>

        <motion.p
          className="text-gray-300 text-lg md:text-xl max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I'm Ashwini, a full-stack software engineer navigating the galaxies of web and AI development.
        </motion.p>
      </div>

      
    </section>
  );
}

export default Hero;
