import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaGlobe, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, tech, github, live, disabled }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.6 }}
    className={`relative bg-[#151d2c] text-white rounded-2xl p-6 shadow-md border border-[#2f3e55] transition-all overflow-hidden ${
      disabled ? "opacity-80 cursor-not-allowed" : "hover:shadow-[0_0_15px_#B79CED]"
    } group`}
  >
    {/* Overlay for under construction */}
    {disabled && (
      <div className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center rounded-2xl pointer-events-none">
        <span className="text-purple-300 text-sm font-medium animate-pulse">
          🚧 Under Construction
        </span>
      </div>
    )}

    {/* Content below still renders for layout */}
    <div className={`${disabled ? "blur-sm select-none" : ""}`}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-4 text-[#B79CED] text-2xl">
        <FaRocket />
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-300 mb-1 text-justify">{description}</p>
      <br />

      {/* Tech */}
      <p className="text-xs text-gray-400 italic mb-4 text-left">{tech}</p>

      {/* Links */}
      <div className="flex gap-4 mt-4 text-sm">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-purple-300 hover:underline flex items-center gap-1 ${
              disabled ? "pointer-events-none" : ""
            }`}
          >
            <FaGithub /> Code
          </a>
        )}
        {live && (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className={`text-purple-300 hover:underline flex items-center gap-1 ${
              disabled ? "pointer-events-none" : ""
            }`}
          >
            <FaGlobe /> Live
          </a>
        )}
      </div>
    </div>
  </motion.div>
);
export default ProjectCard;
