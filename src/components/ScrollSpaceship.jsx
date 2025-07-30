import React, { useEffect, useState, useRef } from "react";
import pic1 from "../assets/spaceship-inverted.png"; // rocket upright
import pic2 from "../assets/spaceship.png"; // rocket upside down
import "../styles/scrollSpaceship.css";

const ScrollSpaceship = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrollingDown(currentScroll > lastScrollY.current);
      setScrollY(currentScroll);
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const translateY = scrollY * 0.7;

  return (
    <div
      className={`spaceship-container fixed left-10 z-50 w-12 h-12 ${
        isScrollingDown ? "flame-top" : "flame-bottom"
      }`}
      style={{ transform: `translateY(${translateY}px)` }}
    >
      <img
        src={isScrollingDown ? pic1 : pic2}
        alt="Spaceship"
        className="w-full h-full drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-300"
      />
    </div>
  );
};

export default ScrollSpaceship;
