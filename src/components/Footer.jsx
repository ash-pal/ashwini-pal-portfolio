import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#0D1117] text-gray-400 py-6 border-t border-[#30363d]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Ashwini Pal. All rights reserved.</p>
        <div className="flex space-x-4">
          <a
            href="https://github.com/ashwini-pal"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#B79CED] transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashwini-pal/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#B79CED] transition"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://www.instagram.com/the.twirling.pages/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#B79CED] transition"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
