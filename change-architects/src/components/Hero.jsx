import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-32 text-center relative"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Change Architects Advantage
      </motion.h1>
      <motion.p
        className="mt-4 text-xl md:text-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Enabling The Future Of Care
      </motion.p>
      <motion.a
        href="#about"
        className="mt-8 inline-block bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-purple-100 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        Learn More
      </motion.a>
    </section>
  );
}
