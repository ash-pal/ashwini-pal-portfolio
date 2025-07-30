import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/ash.jpeg";
import Particles from "react-tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

const techSkills = [
  { name: "Java", level: 9 },
  { name: "Spring Boot", level: 8 },
  { name: "React.js", level: 8 },
  { name: "Angular", level: 7 },
  { name: "MySQL", level: 8 },
  { name: "Hibernate", level: 7 },
  { name: "Git", level: 9 },
  { name: "ColdFusion", level: 5 },
  { name: "Generative AI", level: 6 },
];

const AboutSection = () => {
    const particlesInit = async (engine) => {
        await loadStarsPreset(engine); 
      };

  return (
    <section
      id="about"
      className="relative py-24 px-6 text-white overflow-hidden bg-[#0D1117]"
    >
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

        <div className="absolute top-0 left-40 transform -translate-x-1/2 w-64 h-64 z-0 hidden md:block pointer-events-none opacity-80">
        <div className="relative w-full h-full">

          {/* Glowing Sun */}
          <div className="absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-yellow-300 shadow-[0_0_20px_6px_rgba(255,215,0,0.7)] transform -translate-x-1/2 -translate-y-1/2 z-10" />

          {/* Orbits */}
          {[30, 45].map((r, i) => (
            <svg key={i} viewBox="0 0 200 200" className="absolute inset-0 w-full h-full">
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
              transition={{ repeat: Infinity, duration: 10 + index * 3, ease: "linear" }}
              style={{ transformOrigin: "center" }}
            >
              <div
                className="relative"
                style={{
                  transform: `translate(-50%, -${distance}px)`
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

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left: Text + Skills */}
        <div className="md:w-2/3">
          <motion.h2
            className="text-3xl font-bold text-[#B79CED] mb-6"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            / about me
          </motion.h2>

          <motion.p
            className="text-gray-300 leading-relaxed text-lg mb-6 text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            
            Experienced full-stack developer passionate about building scalable, high-impact products with clean architecture and thoughtful design. I’ve contributed to enterprise systems, optimized deployment pipelines, and led AI-driven innovations to boost efficiency and functionality. Active in open-source, competitions, and GenAI initiatives, I bring a product-first mindset and a sharp focus on delivering real-world impact.
            <br /> <br />
            Here are some technologies I have been working with:
            <br />
          </motion.p>

          {/* Tech Stack Pills + Orbit Hover Bars */}
          <div className="flex flex-wrap gap-4 mt-4">
            {techSkills.map((tech, idx) => (
              <div key={idx} className="group relative">
                <span className="bg-[#1E1E2F] text-gray-300 px-7 py-1 rounded-full text-sm hover:bg-[#B79CED]/90 hover:text-black transition cursor-default">
                  {tech.name}
                </span>
                {/* Starfield bar on hover */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 mt-2 w-32 h-2 bg-[#222] rounded overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#B79CED] to-[#6B5DD3] rounded"
                    initial={{ width: 0 }}
                    animate={{ width: `${tech.level * 10}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </motion.div>
              </div>
            ))}
          </div>
            <br />
          <motion.p
            className="text-gray-300 leading-relaxed text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Outside of code, I love books, space themes, mountains, and creating aesthetic digital experiences.
          </motion.p>

          {/* View Resume Button */}
          <motion.a
            href="/Ashwini_Pal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-[#B79CED] text-black rounded-full font-semibold shadow-lg hover:shadow-purple-500/40 hover:bg-white transition mb-6"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </div>

        {/* Right: Profile Image */}
        <motion.div
          className="md:w-1/3 relative group hover:scale-105 transition-transform duration-300 hidden md:block pointer-events-none"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <img
            src={profilePic}
            alt="Ashwini Pal"
            className="rounded-xl shadow-lg ring-1 ring-[#B79CED]/30 hover:ring-[#B79CED]/70 transition duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
