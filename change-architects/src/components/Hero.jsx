// import React from "react";
// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section
//       id="hero"
//       className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-32 text-center relative"
//     >
//       <motion.h1
//         className="text-4xl md:text-6xl font-extrabold"
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//       >
//         The Change Architects Advantage
//       </motion.h1>
//       <motion.p
//         className="mt-4 text-xl md:text-2xl"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5 }}
//       >
//         Enabling The Future Of Care
//       </motion.p>
//       <motion.a
//         href="#about"
//         className="mt-8 inline-block bg-white text-purple-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-purple-100 transition"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1 }}
//       >
//         Learn More
//       </motion.a>
//     </section>
//   );
// }
import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/sharp_logo-removebg-preview.png"; // <- use your logo file

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-[#3B0CA3] text-white py-20 md:py-32 relative"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Text */}
        <div className="text-center md:text-left max-w-xl">
          <motion.h1
            className="text-4xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            The Change Architects Advantage
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-2xl text-gray-200"
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
        </div>

        {/* Right Logo */}
        <motion.div
          className="mt-10 md:mt-0 md:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <img src={Logo} alt="Change Architects Logo" className="max-w-xs" />
        </motion.div>
      </div>
    </section>
  );
}
