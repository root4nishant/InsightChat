/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

// A slide-up variant that accepts a "custom" offset
const cardVariants = {
  initial: (offset: number) => ({
    opacity: 0,
    y: offset, // start below the container
  }),
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20, // slide upward when exiting
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const Brandon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="lg:size-4 md:size-3 size-2 text-primary-dark"
  >
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8h2.62l2-4h6.76l2 4H20c0 4.41-3.59 8-8 8"
    />
    <circle cx="9" cy="13" r="1.25" fill="currentColor" />
    <circle cx="15" cy="13" r="1.25" fill="currentColor" />
  </svg>
);

// const Chatbox = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 24 24"
//     className="lg:size-8 md:size-4 size-4 text-primary-dark"
//     width={4}
//     height={4}
//   >
//     <path
//       fill="currentColor"
//       d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.168-1.438l-3.032.892A1.01 1.01 0 0 1 2.546 20.2l.892-3.032A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-6.759 12.282c.227.357.305.807.177 1.24l-.441 1.501 1.501-.441c.433-.128.883-.05 1.24.177A8 8 0 1 0 12 4m-3.5 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3m7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3"
//     />
//   </svg>
// );

export default function Animation() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);
  const timeoutsRef = useRef<number[]>([]);

  // Clears any queued timeouts
  const clearAllTimeouts = () => {
    timeoutsRef.current.forEach((t) => clearTimeout(t));
    timeoutsRef.current = [];
  };

  // Sets up the two-step cycle
  const startCycle = () => {
    clearAllTimeouts();

    // Step 1: Show Brandon (right side) immediately
    setVisibleSteps([1]);

    // At t=2s: Show Clio (left side)
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([1, 2]);
      }, 4000)
    );

    // At t=3s: Remove Steffanie => only Clio remains
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([]);
      }, 8000)
    );
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([3]);
      }, 9000)
    );
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([3, 4]);
      }, 12000)
    );

    // At t=4s: Remove Clio => empty, then restart
    timeoutsRef.current.push(
      window.setTimeout(() => {
        setVisibleSteps([]);
        setTimeout(() => {
          startCycle();
        }, 300);
      }, 16000)
    );
  };

  useEffect(() => {
    startCycle();
    return () => clearAllTimeouts();
  }, []);

  // Renders Brandon or Clio
  const renderStep = (step: number) => {
    if (step === 1) {
      return (
        <motion.div
          key="brandon"
          layout
          custom={40}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cardVariants}
          className="  ml-auto   bg-white/80 backdrop-blur-md rounded-sm shadow-md lg:max-w-[300px] md:max-w-[200px] max-w-[120px] w-auto lg:p-3 md:p-2 p-1 lg:text-sm md:text-[10px] text-[6px] text-gray-800"
        >
          <div>
            <div className="flex lg:gap-2 md:gap-1 gap-0.5 items-start justify-start">
              <Brandon />
              <div className="font-semibold text-primary-dark">Brandon</div>
            </div>
            <div className="font-bold">
              Cancel <span className="text-primary-dark">My Order</span>
            </div>
            <div>I don't need the Tapestry anymore</div>
          </div>
        </motion.div>
      );
    } else if (step === 2) {
      return (
        <motion.div
          key="clio"
          layout
          custom={80}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cardVariants}
          className="
             mr-auto
            bg-white/80 backdrop-blur-md
            rounded-sm shadow-md
            lg:max-w-[300px] md:max-w-[200px] max-w-[120px]  w-auto
            lg:p-3 md:p-2 p-1
            lg:text-sm md:text-[10px] text-[6px] text-gray-800
            text-left
          "
        >
          <div>
            <div className="flex lg:gap-2 md:gap-1 gap-0.5 items-start justify-start ">
              <IoChatbubbleEllipsesOutline className="lg:w-4 md:w-3 w-2 lg:h-4 md:h-3 h-2 text-primary-dark" />
              <div className="font-semibold text-primary-dark">Clio</div>
            </div>
            <div>
              I understand. Your order has{" "}
              <span className="text-primary-dark">shipped</span>. You can{" "}
              <span className="text-primary-dark">refuse delivery</span>, and
              we'll get it back.
            </div>
          </div>
        </motion.div>
      );
    }
    if (step === 3) {
      return (
        <motion.div
          key="brandon"
          layout
          custom={40}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cardVariants}
          className="  ml-auto   bg-white/80 backdrop-blur-md rounded-sm shadow-md lg:max-w-[300px] md:max-w-[200px] max-w-[120px] w-auto lg:p-3 md:p-2 p-1 lg:text-sm md:text-[10px] text-[6px] text-gray-800"
        >
          <div>
            <div className="flex lg:gap-2 md:gap-1 gap-0.5 items-start justify-start">
              <Brandon />
              <div className="font-semibold text-primary-dark">Brandon</div>
            </div>
            <div className="font-bold">
              Exchange <span className="text-primary-dark">Order Items</span>
            </div>
            <div>Received white covers instead of Blue</div>
          </div>
        </motion.div>
      );
    } else if (step === 4) {
      return (
        <motion.div
          key="clio"
          layout
          custom={80}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cardVariants}
          className="
             mr-auto
            bg-white/80 backdrop-blur-md
            rounded-sm shadow-md
            lg:max-w-[300px] md:max-w-[200px] max-w-[120px]  w-auto
            lg:p-3 md:p-2 p-1
            lg:text-sm md:text-[10px] text-[6px] text-gray-800
            text-left
          "
        >
          <div>
            <div className="flex lg:gap-2 md:gap-1 gap-0.5 items-start justify-start ">
              <IoChatbubbleEllipsesOutline className="lg:w-4 md:w-3 w-2 lg:h-4 md:h-3 h-2 text-primary-dark" />
              <div className="font-semibold text-primary-dark">Clio</div>
            </div>
            <div>
              I&apos;ll ship the{" "}
              <span className="text-primary-dark">Blue Covers </span>right away.
              You can
              <span className="text-primary-dark"> return </span>the white ones
              for free. Does that work?
            </div>
          </div>
        </motion.div>
      );
    }
    return null;
  };

  return (
    <div className="w-full lg:max-w-md max-w-sm mx-auto lg:p-4 md:p-2 p-1">
      <div className="lg:w-[400px] md:w-[300px] w-[150px] flex flex-col lg:space-y-2 md:space-y-1 space-y-1  bg-transparent">
        <AnimatePresence>
          {visibleSteps.map((step) => renderStep(step))}
        </AnimatePresence>
      </div>
    </div>
  );
}
