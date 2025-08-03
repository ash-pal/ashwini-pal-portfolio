import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import { useThemeStore } from "./store/themeStore";
import HoverMeteor from "./components/HoverMeteor";
import Experience from "./components/Experience";
import ScrollSpaceship from "./components/ScrollSpaceship";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react"

function App() {
  const { isSpace } = useThemeStore();
  return (
    <div className={`${isSpace ? 'bg-[#0D1117] text-white' : 'bg-[#f5f5f5] text-[#111]'}`}>
      <HoverMeteor />
      <ScrollSpaceship />
      <Navbar />
      <main className="flex-grow z-10">
        <Hero />
        <AboutSection />
        <Experience />
        <ProjectsSection />
        <SpeedInsights/>
        <Analytics />
        <Footer />
      </main>
    </div>
  );
}

export default App;
