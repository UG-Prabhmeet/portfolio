"use client";

import { motion } from "framer-motion";

export default function Headline() {
  const headline = "Create Eye-Catching Experiences With Simple UIs";
  const words = headline.split(" ");

  return (
    <div>
      {words.map((word, index) => (
        <motion.p
          key={index}
          initial={{ filter: "blur(10px)", opacity: 0, y: 12 }}
          animate={{ filter: "blur(0)", opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          className="text-2xl font-medium text-gray-800 inline-block mr-1.5"
        >
          {word}
        </motion.p>
      ))}
    </div>
  );
}
