import React from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Stock Trading Platform",
    tech: "React, Spring Boot, MySQL, Tailwind",
    description: "A Platform that gives you live updates on the latest stock prices whilst providing an option to get alerts too.",
    github: "https://github.com/ashwini-pal/stock-trading-platform",
    live: "https://your-live-site.com",
  },
  {
    title: "AI Expense Tracker",
    tech: "Angular, Spring Boot, PostgreSQL, OpenAI",
    description: "A Platform that gives you live updates on the latest stock prices whilst providing an option to get alerts too.",
    github: "https://github.com/ashwini-pal/ai-expense-tracker",
    live: "https://your-live-site.com",
  },
  {
    title: "Space AI",
    tech: "LLM, OpenAI",
    description: "A Platform that gives you live updates on the latest stock prices whilst providing an option to get alerts too.",
    github: "https://www.instagram.com/the.twirling.pages/",
    live: "https://www.instagram.com/the.twirling.pages/",
  },
];

function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-[#0D1117] px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
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
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default ProjectsSection;
