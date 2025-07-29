import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-[#0D1117] z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold text-[#B79CED]"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ashwini Pal
        </motion.h1>

        {/* Navigation Links */}
        <ul className="flex space-x-6 text-white text-sm">
          <li>
            <a href="#hero" className="hover:text-[#A259FF] transition-colors duration-200">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#A259FF] transition-colors duration-200">
              About
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-[#A259FF] transition-colors duration-200">
              Experience
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-[#A259FF] transition-colors duration-200">
              Projects
            </a>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex space-x-4 text-white text-lg">
          <motion.a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-[#B79CED] transition-colors duration-200"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-[#B79CED] transition-colors duration-200"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:ashwinipal@example.com"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="hover:text-[#B79CED] transition-colors duration-200"
          >
            <FaEnvelope />
          </motion.a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
