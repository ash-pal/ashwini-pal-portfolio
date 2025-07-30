import React from "react";
import { motion } from "framer-motion";
import { FaRocket, FaGlobe, FaGithub } from "react-icons/fa";

const ProjectCard = ({ title, description, tech, github, live, disabled }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: 30 }}
    transition={{ duration: 0.6 }}
    className="relative bg-[#151d2c] text-white rounded-2xl p-6 shadow-md border border-[#2f3e55] hover:shadow-[0_0_15px_#B79CED] transition-all"
  >
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
      {/* GitHub Link */}
      {github ? (
        disabled ? (
          <div className="relative group cursor-not-allowed text-purple-300 flex items-center gap-1">
            <FaGithub />
            Code
            <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 whitespace-nowrap">
              🚧 Under Construction, repository private for now
            </div>
          </div>
        ) : (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:underline flex items-center gap-1"
          >
            <FaGithub />
            Code
          </a>
        )
      ) : null}

      {/* Live Link */}
      {live ? (
        disabled ? (
          <div className="relative group cursor-not-allowed text-purple-300 flex items-center gap-1">
            <FaGlobe />
            Live
            <div className="absolute bottom-full mb-1 left-1/2 transform -translate-x-1/2 bg-black text-xs text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-all duration-200 z-20 whitespace-nowrap">
              🚧 Under Construction, be back soon
            </div>
          </div>
        ) : (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:underline flex items-center gap-1"
          >
            <FaGlobe />
            Live
          </a>
        )
      ) : null}
    </div>
  </motion.div>
);
export default ProjectCard;
