/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
//import { HiOutlineSparkles } from "react-icons/hi2";
import { IoSparkles } from "react-icons/io5";
import { FaDownload } from "react-icons/fa";


// Reusable card variants, each card can have a "custom" y-offset
const cardVariants = {
  initial: (offset: number) => ({
    opacity: 0,
    y: offset,
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const IconUpload = () => (
  <svg
    className="size-5 text-primary-dark"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" x2="12" y1="3" y2="15" />
  </svg>
);

export default function AnimationFlow() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const timeoutsRef = useRef<number[]>([]);

  // Clears all timeouts (useful when unmounting or restarting)
  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  // This function schedules the entire sequence of add/remove steps
  const startCycle = () => {
    clearAllTimeouts();

    // 1) Show Step 1 (Upload) immediately
    setVisibleSteps([1]);

    // 2) At t=2s, add Step 2
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([1, 2]);
      }, 4000)
    );

    // 3) At t=3s, add Step 3
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([2]);
      }, 5000)
    );
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([2, 3]);
      }, 6000)
    );

    // 4) At t=4s, remove Step 1 => left with [2, 3]
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([2, 3]);
      }, 6000)
    );

    // 5) At t=6s, remove Steps 2 & 3 => []
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([]);
      }, 10000)
    );

    // 6) At t=7s, show Step 4 => [4]
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([4]);
      }, 10000)
    );

    // 7) At t=8s, show Step 5 => [4, 5]
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([4, 5]);
      }, 12000)
    );

    // 8) At t=9s, remove Step 4 => left with [5]
    // timeoutsRef.current.push(
    //   window.setTimeout(() => {
    //     setVisibleSteps([5]);
    //   }, 7000)
    // );

    // 9) At t=11s, remove Step 5, then restart cycle
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([]);
        // Optionally wait a short moment to let exit animation finish
        setTimeout(() => {
          startCycle(); // re-run the entire sequence
        }, 300);
      }, 17000)
    );
  };

  // On mount, run the cycle. Also clear timeouts if unmounting.
  useEffect(() => {
    startCycle();
    return () => clearAllTimeouts();
  }, []);

  // Render each step by ID
  const renderStep = (step: number) => {
    switch (step) {
      case 1:
        return (
          <motion.div
            key="upload-card"
            layout
            custom={20}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={cardVariants}
            className="lg:p-4 md:p-2 p-1 bg-gray-100 bg-opacity-70 rounded-lg shadow-xl"
          >
            <div className="flex items-center lg:gap-3 md:gap-2 gap-1  lg:py-3 py-1">
              <IconUpload />
              <span className="lg:text-sm md:text-[10px] text-[6px] text-black font-bold">
                Upload your data
              </span>
            </div>
            {/* Progress bar that starts at t=1 and finishes by t=2 */}
            <motion.div
              className="lg:h-2 h-1 w-full overflow-hidden rounded-full bg-zinc-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.2 }}
            >
              <motion.div
                className="h-full bg-primary-dark"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            key="experiment-card"
            layout
            custom={80}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={cardVariants}
            className="lg:p-4 md:p-2 p-1 bg-gray-100 bg-opacity-70 rounded-lg shadow-xl"
          >
            <div className="flex items-center lg:gap-3 md:gap-2 gap-1  lg:py-3 py-1">
              <IoSparkles className="lg:w-5 md:w-4 w-3 lg:h-5 md:h-4 h-3 text-primary-dark" />
              <span className="lg:text-sm md:text-[10px] text-[6px] text-black font-bold">
                Experiment with your prompt
              </span>
            </div>
            {/* <p className="px-4 lg:text-xs text-[6px] text-gray-600">
              Generate Product Reviews for Website
            </p> */}
            <motion.div
              className="lg:h-2 h-1 w-full overflow-hidden rounded-full bg-zinc-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.2 }}
            >
              <motion.div
                className="h-full bg-primary-dark"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            key="old-products-card"
            layout
            custom={80}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={cardVariants}
            className="lg:p-4 md:p-2 p-1 bg-gray-100 bg-opacity-70 rounded-lg shadow-xl"
          >
            <div className="lg:px-4 px-2 lg:py-3 py-1 lg:text-sm md:text-[10px] text-[6px]  rounded-lg bg-gray-100 bg-opacity-70">
              <div className="grid grid-cols-2 gap-2 text-gray-700 font-semibold lg:mb-2 mb-1">
                <div>Products</div>
                <div>General Review</div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center lg:text-sm md:text-[10px] text-[6px] lg:mb-2 mb-1">
                <div>"Men's Running Shoes"</div>
                <div className="text-primary-dark">Exude Confidence</div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center lg:text-sm md:text-[10px] text-[6px] lg:mb-2 mb-1">
                <div>"Leather Dress Shoes"</div>
                <div className="text-primary-dark">Step Into Elegance</div>
              </div>
              {/* <div className="grid grid-cols-2 gap-2 items-center lg:text-sm md:text-[10px] text-[6px]">
                <div>"Kids' Sports Shoes"</div>
                <div className="text-primary-dark">Play in Style</div>
              </div> */}
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            key="export-card"
            layout
            custom={80}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={cardVariants}
            className="lg:p-4 md:p-2 p-1 bg-gray-100 bg-opacity-70 rounded-lg shadow-xl"
          >
            <div className="flex items-center lg:gap-3 md:gap-2 gap-1  lg:py-3 py-1">
              <FaDownload className="lg:w-5 md:w-4 w-3 lg:h-5 md:h-4 h-3 text-primary-dark" />
              <span className="lg:text-sm md:text-[10px] text-[6px] text-black font-bold">
                Export instantly
              </span>
            </div>
            {/* A “completed” progress bar */}
            <motion.div
              className="lg:h-2 h-1 w-full overflow-hidden rounded-full bg-zinc-800"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.2 }}
            >
              <motion.div
                className="h-full bg-primary-dark"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1 }}
              />
            </motion.div>
          </motion.div>
        );

      case 5:
        return (
          <motion.div
            key="final-products-card"
            layout
            custom={80}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={cardVariants}
            className="lg:p-4 md:p-2 p-1 bg-gray-100 bg-opacity-70 rounded-lg shadow-xl"
          >
            <div className="lg:px-4 md:px-2 px-1 lg:py-3 md:py-2 py-1 lg:text-sm md:text-[10px] text-[6px]  rounded-lg bg-gray-100 bg-opacity-70">
              <div className="grid grid-cols-2 gap-2 text-gray-700 font-semibold lg:mb-2 mb-1">
                <div>Products</div>
                <div>3-word Review</div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center lg:text-sm md:text-[10px] text-[6px] lg:mb-2 mb-1">
                <div>"Men's Running Shoes"</div>
                <div className="text-primary-dark">Run Faster Today</div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center lg:text-sm md:text-[10px] text-[6px] lg:mb-2 mb-1">
                <div>"Leather Dress Shoes"</div>
                <div className="text-primary-dark">Step into Elegance</div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center lg:text-sm md:text-[10px] text-[6px] lg:mb-2 mb-1">
                <div>"Kids' Sports Shoes"</div>
                <div className="text-primary-dark">Play in Style</div>
              </div>
              <div className="grid grid-cols-2 gap-2 items-center lg:text-sm md:text-[10px] text-[6px] lg:mb-2 mb-1">
                <div>"Casual Sneakers"</div>
                <div className="text-primary-dark">Your Daily Essential</div>
              </div>
              {/* Pagination row */}
              <div className="flex items-center justify-between mt-3">
                <nav className="lg:text-sm md:text-[10px] text-[6px] text-gray-600">
                  <span className="mr-2">1</span>
                  <span className="mr-2">2</span>
                  <span className="mr-2">3</span>
                  <span className="mr-2">4</span>
                  <span className="mr-2">5</span>
                  <span className="mr-2">...</span>
                  <span>18</span>
                </nav>
                <motion.button
                  className="rounded-lg  bg-primary-dark bg-opacity-70 px-4 py-2 lg:text-sm md:text-[10px] text-[6px] text-white font-bold shadow-sm"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Download
                </motion.button>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex h-auto lg:items-center lg:justify-center lg:p-4 md:p-2 p-1">
      <div className="lg:w-[400px] md:w-[300px] w-[180px] flex flex-col lg:space-y-4 md:space-y-2 space-y-1">
        <AnimatePresence initial={false}>
          {visibleSteps.map((step) => renderStep(step))}
        </AnimatePresence>
      </div>
    </div>
  );
}
