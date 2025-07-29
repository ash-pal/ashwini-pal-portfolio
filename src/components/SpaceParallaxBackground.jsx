import React from "react";

const SpaceParallaxBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <div className="w-full h-full bg-gradient-to-b from-black to-[#0a0a23] opacity-90 absolute" />
      <div
        className="absolute inset-0 bg-[url('/starfield.svg')] bg-cover bg-fixed opacity-30 animate-pulse"
        style={{ zIndex: -1 }}
      />
    </div>
  );
};

export default SpaceParallaxBackground;
