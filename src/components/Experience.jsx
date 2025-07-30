import { useState } from "react";
import { motion } from "framer-motion";

const experiences = {
  amdocs: {
    role: "Frontend Developer Intern @ Amdocs",
    date: "May 2024 - July 2024",
    points: [
      "Led development of end-to-end region build automation across Route 53 (AWS's DNS web service). This enabled the launch of customer-facing global services in new regions within a day, a significant reduction from the previous time-frame of a month.",
      "Integrated REST APIs and optimized performance using React hooks.",
    ],
  },
  college: {
    role: "Tech Lead @ College Tech Club",
    date: "Aug 2023 - Present",
    points: [
      "Led 10+ students in open source and web development projects.",
      "Organized hands-on workshops on Git, React, and modern tooling.",
      "Led development of end-to-end region build automation across Route 53 (AWS's DNS web service). This enabled the launch of customer-facing global services in new regions within a day, a significant reduction from the previous time-frame of a month."
    ],
  },
};

export default function Experience() {
  const [selected, setSelected] = useState("amdocs");

  return (
    <section
      id="experience"
      className="relative py-24 px-6 text-white overflow-hidden bg-[#0D1117]"
    >
        <div className="absolute top-0 right-0 transform -translate-x-1/2 w-64 h-64 z-0 hidden md:block pointer-events-none opacity-80">
        <div className="relative w-full h-full">

          {/* Glowing Sun */}
          <div className="absolute top-1/2 left-1/2 w-6 h-6 rounded-full bg-yellow-300 shadow-[0_0_20px_6px_rgba(255,215,0,0.7)] transform -translate-x-1/2 -translate-y-1/2 z-10" />

          {/* Orbits */}
          {[30, 45,60].map((r, i) => (
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
          {[30, 45,60].map((distance, index) => (
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
        <h2 className="text-3xl font-bold text-purple-300 mb-12 text-left">/ experience</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Tabs */}
          <div className="flex md:flex-col gap-4 md:min-w-[160px]">
            {Object.keys(experiences).map((key) => (
              <button
                key={key}
                onClick={() => setSelected(key)}
                className={`text-left text-sx md:text-base px-4 py-2 rounded transition-all duration-200 ${
                  selected === key
                    ? "text-purple-300 border-r-4 border-purple-300 bg-[#1a1f2e]"
                    : "text-gray-400 hover:text-purple-300"
                }`}
              >
                {key === "amdocs" ? "AMDOCS" : "COLLEGE"}
              </button>
            ))}
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-purple-300 mb-1 text-left">
              {experiences[selected].role}
            </h3>
            <p className="text-gray-400 text-sm mb-6 text-left">{experiences[selected].date}</p>
            <ul className="space-y-4">
              {experiences[selected].points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-gray-300 text-base leading-relaxed text-justify"
                >
                  <span className="text-purple-300 mt-1">▹</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
