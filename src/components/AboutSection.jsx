import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/ash.jpeg";
import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles-engine";
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
            className="text-gray-300 leading-relaxed text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            I’m Ashwini, a <strong>Software Developer at Amdocs</strong> with experience building scalable enterprise applications using <strong>Spring Boot</strong>, <strong>Java</strong>, and modern frontend frameworks like <strong>React</strong> and <strong>Angular</strong>. I enjoy crafting clean, efficient systems and recently started exploring <strong>Generative AI</strong> and its applications in finance.
            <br /><br />
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

          {/* Tech Stack Pills + Orbit Hover Bars */}
          <div className="flex flex-wrap gap-4 mt-4">
            {techSkills.map((tech, idx) => (
              <div key={idx} className="group relative">
                <span className="bg-[#1E1E2F] text-gray-300 px-4 py-1 rounded-full text-sm hover:bg-[#B79CED]/90 hover:text-black transition cursor-default">
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
        </div>

        {/* Right: Profile Image */}
        <motion.div
          className="md:w-1/3 relative group hover:scale-105 transition-transform duration-300"
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
