import React from "react";

const Footer = () => {
  return (
    
    <footer className="relative bg-[#0D1117] py-20 text-center text-white overflow-hidden">
      {/* 🌠 Shooting Stars Background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <div className="shooting-star one"></div>
        <div className="shooting-star two"></div>
        {/* <div className="shooting-star three"></div> */}
      </div>


      {/* Footer Content */}
      <div className="relative z-10">
        <p>© 2025 Ashwini Pal. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://github.com/ashwini-pal" className="hover:text-[#B79CED] transition">GitHub</a>
          <a href="https://linkedin.com/in/ashwini-pal" className="hover:text-[#B79CED] transition">LinkedIn</a>
          <a href="mailto:ashwini@example.com" className="hover:text-[#B79CED] transition">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
