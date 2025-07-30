import React from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles-engine";
import { loadStarsPreset } from "tsparticles-preset-stars";
import { Mail } from "lucide-react";

function Hero() {
  const particlesInit = async (engine) => {
    await loadStarsPreset(engine);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0D1117] text-white flex justify-center items-center text-center px-4 pt-28 overflow-hidden"
    >
      {/* Starfield background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full z-0"
        id="tsparticles"
        init={particlesInit}
        options={{
          preset: "stars",
          background: { color: "#0D1117" },
          fullScreen: { enable: false },
        }}
      />

      {/* Orbiting Planet Animation - Medium+ version */}
      <div className="absolute top-24 right-60 transform -translate-x-1/2 w-64 h-64 z-0 hidden md:block pointer-events-none opacity-80">
        <div className="relative w-full h-full">
          {/* Glowing Sun */}
          <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-yellow-300 shadow-[0_0_20px_6px_rgba(255,215,0,0.7)] transform -translate-x-1/2 -translate-y-1/2 z-10" />

          {/* Orbits */}
          {[30, 45, 60, 75].map((r, i) => (
            <svg
              key={i}
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full"
            >
              <circle
                cx="100"
                cy="100"
                r={r}
                fill="none"
                stroke="#A259FF"
                strokeWidth="1"
                strokeDasharray="2 4"
                strokeOpacity="0.2"
              />
            </svg>
          ))}

          {/* Animated Planets on Each Orbit */}
          {[30, 45, 60, 75].map((distance, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 10 + index * 3,
                ease: "linear",
              }}
              style={{ transformOrigin: "center" }}
            >
              <div
                className="relative"
                style={{
                  transform: `translate(-50%, -${distance}px)`,
                }}
              >
                <div
                  className={`w-3.5 h-3.5 rounded-full ${
                    index % 2 === 0 ? "bg-[#B79CED]" : "bg-[#D1B3FF]"
                  } drop-shadow-[0_0_8px_rgba(183,156,237,0.4)] opacity-80`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute top-114 left-80 transform -translate-x-1/2 w-64 h-64 z-0 hidden md:block pointer-events-none opacity-80">
        <div className="relative w-full h-full">
          {/* Glowing Sun */}
          <div className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-yellow-300 shadow-[0_0_20px_6px_rgba(255,215,0,0.7)] transform -translate-x-1/2 -translate-y-1/2 z-10" />

          {/* Orbits */}
          {[30, 45].map((r, i) => (
            <svg
              key={i}
              viewBox="0 0 200 200"
              className="absolute inset-0 w-full h-full"
            >
              <circle
                cx="100"
                cy="100"
                r={r}
                fill="none"
                stroke="#A259FF"
                strokeWidth="1"
                strokeDasharray="2 4"
                strokeOpacity="0.2"
              />
            </svg>
          ))}

          {/* Animated Planets on Each Orbit */}
          {[30, 45].map((distance, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 10 + index * 3,
                ease: "linear",
              }}
              style={{ transformOrigin: "center" }}
            >
              <div
                className="relative"
                style={{
                  transform: `translate(-50%, -${distance}px)`,
                }}
              >
                <div
                  className={`w-3 h-3 rounded-full ${
                    index % 2 === 0 ? "bg-[#B79CED]" : "bg-[#D1B3FF]"
                  } drop-shadow-[0_0_8px_rgba(183,156,237,0.4)] opacity-80`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Orbiting Planet Animation - Mobile Version */}
      <div className="block md:hidden absolute top-24 left-1/2 transform -translate-x-1/2 w-40 h-40 z-0 pointer-events-none opacity-80">
        <div className="relative w-full h-full">
          {/* Glowing Sun */}
          <div className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-yellow-300 shadow-[0_0_15px_4px_rgba(255,215,0,0.6)] transform -translate-x-1/2 -translate-y-1/2 z-10" />

          {/* Orbits */}
          {[20, 30].map((r, i) => (
            <svg
              key={i}
              viewBox="0 0 100 100"
              className="absolute inset-0 w-full h-full"
            >
              <circle
                cx="50"
                cy="50"
                r={r}
                fill="none"
                stroke="#A259FF"
                strokeWidth="0.5"
                strokeDasharray="2 3"
                strokeOpacity="0.2"
              />
            </svg>
          ))}

          {/* Animated Planets */}
          {[20, 30].map((distance, index) => (
            <motion.div
              key={index}
              className="absolute top-1/2 left-1/2"
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 10 + index * 3,
                ease: "linear",
              }}
              style={{ transformOrigin: "center" }}
            >
              <div
                className="relative"
                style={{
                  transform: `translate(-50%, -${distance}px)`,
                }}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full ${
                    index % 2 === 0 ? "bg-[#B79CED]" : "bg-[#D1B3FF]"
                  } drop-shadow-[0_0_6px_rgba(183,156,237,0.4)] opacity-80`}
                />
              </div>
            </motion.div>
          ))}
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
          className="text-gray-300 text-2xl md:text-2xl max-w-xl mx-auto mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I turn ideas into intelligent interfaces.
        </motion.p>

        <motion.p
          className="text-gray-300 text-lg md:text-lg max-w-xl mx-auto mb-4 text-justify"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m a software engineer passionate about building full-stack applications powered by clean design and custom AI models. From enterprise-grade tools at Amdocs to AI-led side projects, I build things that solve real-world problems.
        </motion.p>

        <div className="flex justify-center mt-4">
          <motion.a
            href="mailto:palashwini2@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 border-2 border-violet-400 text-violet-300 rounded-md font-medium transition-all duration-300 hover:bg-violet-400 hover:text-[#0D1117] shadow-[0_0_10px_#c084fc]"
          >
            <Mail className="w-4 h-4 group-hover:stroke-[#0D1117]" />
            Say hi!
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
