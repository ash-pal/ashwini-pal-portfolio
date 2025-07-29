import React from "react";
import { FaMoon } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-[#0D1117] text-white relative">
      <div className="max-w-xl mx-auto text-center">
        <div className="text-4xl text-[#B79CED] mb-6 flex justify-center items-center gap-2">
          <FaMoon /> <span>Transmit Message to Base Station</span>
        </div>
        <form className="flex flex-col gap-4 text-left mt-8">
          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#1a2232] p-3 rounded-md text-white border border-[#2f3e55]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#1a2232] p-3 rounded-md text-white border border-[#2f3e55]"
          />
          <textarea
            placeholder="Your Message"
            className="bg-[#1a2232] p-3 h-32 rounded-md text-white border border-[#2f3e55]"
          />
          <button
            type="submit"
            className="bg-[#B79CED] text-black py-2 px-6 rounded-md hover:bg-[#d2b9ff] transition"
          >
            Send Signal
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
