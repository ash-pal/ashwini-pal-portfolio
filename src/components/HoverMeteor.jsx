import React, { useEffect, useState } from "react";

const HoverMeteor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updatePosition);
    return () => window.removeEventListener("mousemove", updatePosition);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ mixBlendMode: "screen" }}
    >
      <div
        className="w-6 h-6 rounded-full bg-gradient-to-br from-[#B79CED] to-[#6B5DD3] opacity-70 blur-lg transition-all duration-100 ease-out"
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </div>
  );
};

export default HoverMeteor;
