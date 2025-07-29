import React from "react";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <motion.section
      id="projects"
      className="py-20 bg-[#0D1117] px-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#B79CED] mb-6">Let's Connect</h2>
        <p className="text-gray-300 mb-8">
          Got a project, opportunity, or just want to say hi? I'd love to hear from you!
        </p>
        <a
          href="mailto:palashwini2@gmail.com"
          className="inline-block bg-[#A259FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#B79CED] transition"
        >
          Say Hello ✉️
        </a>
      </div>
    </motion.section>
  );
}

export default ContactSection;
