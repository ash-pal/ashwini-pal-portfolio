import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaGlobe, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, tech, github, live }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.6 }}
    className="bg-[#151d2c] text-white rounded-2xl p-6 shadow-md border border-[#2f3e55] hover:shadow-[0_0_15px_#B79CED] transition-all"
  >
    <div className="flex items-center gap-3 mb-4 text-[#B79CED] text-2xl">
      <FaRocket />
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-sm text-gray-300 mb-1 text-left">{description}</p>
    <br />
    <p className="text-xs text-gray-400 italic mb-4 text-left">{tech}</p>
      
    <div className="flex gap-4 mt-4 text-sm">
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline flex items-center gap-1">
        <FaGithub /> Code
      </a>
      <a href={live} target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:underline flex items-center gap-1">
        <FaGlobe /> Live
      </a>
    </div>
  </motion.div>
);

export default ProjectCard;
