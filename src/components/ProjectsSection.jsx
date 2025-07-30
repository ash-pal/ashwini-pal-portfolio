import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Stock Trading Platform",
    tech: "React, Spring Boot, MySQL, Tailwind",
    description: "A full-stack trading dashboard enabling real-time stock monitoring, portfolio management, and transaction simulations.",
    github: "https://github.com/ashwini-pal/stock-trading-platform",
    live: "https://your-live-site.com",
    disabled: false
  },
  {
    title: "AI Expense Tracker",
    tech: "Angular, Spring Boot, PostgreSQL, OpenAI",
    description: "An intelligent tracker that categorizes expenses, offers financial insights, and generates recommendations using LLM-based analysis.",
    github: "https://github.com/ashwini-pal/ai-expense-tracker",
    live: "https://your-live-site.com",
    disabled: true
  },
  {
    title: "Space AI",
    tech: "LLM, React, Neo4j, FastAPI, OpenAI",
    description: "A conceptual proof-of-concept inspired by ESA’s data intelligence systems—leveraging LLMs and knowledge graphs for smart information retrieval and contextual querying in space missions.",
    github: "https://www.instagram.com/the.twirling.pages/",
    live: "https://www.instagram.com/the.twirling.pages/",
    disabled: true
  },
];

function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="relative py-24 bg-[#0D1117] px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
       <div className="absolute top-0 left-40 transform -translate-x-1/2 w-64 h-64 z-0 hidden md:block pointer-events-none opacity-80">
        <div className="relative w-full h-full">

          {/* Glowing Sun */}
          <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-yellow-300 shadow-[0_0_20px_6px_rgba(255,215,0,0.7)] transform -translate-x-1/2 -translate-y-1/2 z-10" />

          {/* Orbits */}
          {[30, 45, 60].map((r, i) => (
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
          {[30, 45, 60].map((distance, index) => (
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
                  className={`w-3.5 h-3.5 rounded-full ${
                    index % 2 === 0 ? "bg-[#B79CED]" : "bg-[#D1B3FF]"
                  } drop-shadow-[0_0_8px_rgba(183,156,237,0.4)] opacity-80`}
                />
              </div>
            </motion.div>
          ))}

        </div>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        {/* <h2 className="text-4xl font-bold text-[#B79CED] mb-10">Projects</h2> */}
        <h2 className="text-3xl font-bold text-purple-300 mb-8 text-left">/ pet projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              live={project.live}
              disabled={project.disabled}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
