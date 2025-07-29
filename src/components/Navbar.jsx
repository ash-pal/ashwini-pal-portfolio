import React from "react";
import { useThemeStore } from "../store/themeStore";
import { motion } from "framer-motion";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const { isSpace, toggleTheme } = useThemeStore();
  
  return (
    <nav className="fixed top-0 w-full bg-[#0D1117] border-b border-[#B79CED] z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#B79CED]">Ashwini</h1>
        <ul className="flex space-x-6 text-white text-sm">
          <li><a href="#hero" className="hover:text-[#A259FF]">Home</a></li>
          <li><a href="#projects" className="hover:text-[#A259FF]">Projects</a></li>
          <li><a href="#about" className="hover:text-[#A259FF]">About</a></li>
          <li><a href="#contact" className="hover:text-[#A259FF]">Contact</a></li>
        </ul>
        {/* <motion.button
          onClick={toggleTheme}
          whileTap={{ scale: 0.9 }}
          className="text-[#B79CED] hover:text-white transition text-xl"
        >
          {isSpace ? <FaSun /> : <FaMoon />}
        </motion.button> */}
      </div>
    </nav>
  );
}

export default Navbar;
