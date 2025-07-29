import React from "react";
import { motion } from "framer-motion";

function AboutSection() {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-[#0D1117] px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#B79CED] mb-6">About Me</h2>
        <p className="text-gray-300 text-lg mb-8">
          I'm Ashwini Pal, a full-stack software engineer with 3+ years of experience building scalable applications using Java, Spring Boot, React, and Angular. I'm passionate about creating user-focused, high-performance systems and exploring generative AI in real-world solutions.
        </p>

        <h3 className="text-2xl font-semibold text-[#A259FF] mb-4">Skills</h3>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-200">
          <span className="bg-[#161B22] px-4 py-2 rounded-full border border-[#30363d]">Java</span>
          <span className="bg-[#161B22] px-4 py-2 rounded-full border border-[#30363d]">Spring Boot</span>
          <span className="bg-[#161B22] px-4 py-2 rounded-full border border-[#30363d]">React</span>
          <span className="bg-[#161B22] px-4 py-2 rounded-full border border-[#30363d]">Angular</span>
          <span className="bg-[#161B22] px-4 py-2 rounded-full border border-[#30363d]">MySQL</span>
          <span className="bg-[#161B22] px-4 py-2 rounded-full border border-[#30363d]">PL/SQL</span>
          <span className="bg-[#161B22] px-4 py-2 rounded-full border border-[#30363d]">Tailwind CSS</span>
          <span className="bg-[#161B22] px-4 py-2 rounded-full border border-[#30363d]">Kubernetes</span>
          <span className="bg-[#161B22] px-4 py-2 rounded-full border border-[#30363d]">Generative AI</span>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutSection;
