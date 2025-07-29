import { useState } from "react";

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
