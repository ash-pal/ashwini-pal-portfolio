import React from "react";
import astronaut from "../assets/astronaut.png"; // Add an astronaut SVG in this path

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-[#0D1117] text-white relative">
      <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
        <div className="md:w-1/2 relative flex justify-center">
          <img src={astronaut} alt="Floating astronaut" className="w-64 animate-float" />
        </div>
        <div className="md:w-1/2 text-left">
          <h2 className="text-3xl font-bold text-[#B79CED] mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I’m Ashwini, a full-stack developer with a love for clean code, creative design, and all things cosmic. 
            I’ve built scalable apps, explored generative AI, and am on a mission to craft elegant digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
