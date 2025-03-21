/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedText = () => {
  const words = ["Enricher", "Transformer", "Cleaner"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  // Animation variants
  const variants = {
    initial: { opacity: 0, y: -5 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 5 },
  };

  return (
    <div>
      <h1 className="lg:text-xl md:text-md text-xs font-bold text-white lg:px-4 md:px-2 px-1">
        TABI: <span>Your data </span>
        {/* Inline block to keep the next word on the same baseline */}
        <span className="inline-block  font-bold lg:text-xl md:text-md text-xs text-[#D6CFB6]">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[currentWordIndex]}
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              {words[currentWordIndex]}
            </motion.span>
          </AnimatePresence>
        </span>
      </h1>
    </div>
  );
};

export default AnimatedText;
