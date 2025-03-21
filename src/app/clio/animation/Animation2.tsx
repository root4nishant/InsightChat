/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
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

const Steffanie = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="lg:size-4 md:size-3 size-2 text-primary-dark"
  >
    <g fill="currentColor">
      <path d="m15.287 17.527-.99 3.17a1.005 1.005 0 0 0 .97 1.303h1.466c.688 0 1.173-.662.97-1.304l-.99-3.17c-.213-.701-1.203-.701-1.426 0m-1.87 5.257c.747.39 1.637.612 2.583.612.956 0 1.836-.222 2.583-.612.256-.13.53.148.369.39A3.53 3.53 0 0 1 16 24.75a3.53 3.53 0 0 1-2.952-1.577c-.16-.232.114-.52.369-.39M11 15.4q.126 0 .25.016.145-.016.292-.016c1.264 0 2.32.9 2.557 2.096a.428.428 0 0 1-.424.504h-.148q.06-.207.059-.443c0-.926-.74-1.664-1.659-1.664A1.664 1.664 0 0 0 10.318 18h-.8a.512.512 0 0 1-.503-.633v-.003l-.09-.064c-.4-.3-.5-.8.1-1.2.6-.5 1.275-.7 1.975-.7m10.2 0q-.172 0-.345.03-.195-.03-.397-.03a2.6 2.6 0 0 0-2.557 2.096.428.428 0 0 0 .424.504h.148a1.6 1.6 0 0 1-.059-.443 1.65 1.65 0 0 1 1.659-1.664A1.664 1.664 0 0 1 21.682 18h.8a.513.513 0 0 0 .518-.508l.275-.192c.4-.3.5-.8-.1-1.2-.6-.5-1.275-.7-1.975-.7" />
      <path d="M11.927 16.611a.947.947 0 0 1 .84 1.389h-1.679a1 1 0 0 1-.108-.443c0-.172.046-.334.127-.473a.295.295 0 0 0 .544-.164.3.3 0 0 0-.105-.229.95.95 0 0 1 .381-.08m7.347.421a.94.94 0 0 0-.16.525c0 .157.04.305.11.443h1.678a.947.947 0 0 0-1.182-1.325.3.3 0 0 1-.17.545.3.3 0 0 1-.276-.188m-9.617-2.603.008-.005.041-.022.17-.087c.15-.071.37-.165.639-.251.54-.173 1.255-.303 1.998-.172a.5.5 0 0 0 .174-.984c-.957-.17-1.843 0-2.476.203a6 6 0 0 0-.981.411l-.06.034-.018.01-.006.003-.002.001-.001.001a.5.5 0 0 0 .514.858m9.062 4.199a.5.5 0 0 1 .706.038c.195.219.377.37.613.474.24.106.574.18 1.094.18a.5.5 0 1 1 0 1c-.612 0-1.094-.086-1.498-.265-.41-.18-.702-.44-.954-.721a.5.5 0 0 1 .039-.706m-6.001.027a.5.5 0 0 1 .724.69h-.001l-.002.003-.004.004-.011.011-.016.016-.022.02a3.5 3.5 0 0 1-.61.444A3.56 3.56 0 0 1 11 20.32a.5.5 0 0 1 0-1 2.56 2.56 0 0 0 1.702-.65z" />
      <path d="M9.201 5.328c1.657-.814 3.742-1.276 6.342-1.324a25 25 0 0 1 2.08.052c2.093.15 3.802.6 5.186 1.313a8.7 8.7 0 0 1 1.793 1.221c1.87 1.661 2.7 3.922 3.076 6.263.113.69.112 1.39 0 2.077a4.001 4.001 0 0 1-1.607 6.823 9.994 9.994 0 0 1-10.083 8.003A10 10 0 0 1 5.9 21.747a4 4 0 0 1-1.85-6.079 6.25 6.25 0 0 1-.096-2.836c.456-2.353 1.389-4.604 3.328-6.253A9.2 9.2 0 0 1 9.2 5.329zM25.98 16.156a2 2 0 0 0-.658-.23l-.874-.142.049-1.213c-.072-1.341-.803-1.487-1.117-1.487h-1.677l.088.027a6 6 0 0 1 .98.411l.036.02.025.014.018.01.005.003.002.001.001.001a.5.5 0 0 1-.513.858h-.001l-.008-.005-.04-.022a5 5 0 0 0-.809-.338c-.542-.173-1.256-.303-2-.172a.5.5 0 0 1-.473-.808H17.38a8.2 8.2 0 0 1-6.231-2.851v-.002a5.3 5.3 0 0 1-2.529 2.4l-.05.023-.053.018-.088.037a1.92 1.92 0 0 0-.928 1.768l.016.54v.046l.031.8-.771.207a2 2 0 0 0-.844.47l-.052.052a2 2 0 0 0 1.074 3.378l.72.127.098.725q.08.596.246 1.168a8.02 8.02 0 0 0 7.967 5.762 8.01 8.01 0 0 0 8.223-6.989l.012-.091.091-.721.822-.056a2 2 0 0 0 .909-3.701z" />
      <path d="M9.657 4.036a7 7 0 0 1 12.699.026C20.612 3.357 18.506 3 16 3c-2.484 0-4.587.351-6.343 1.036" />
    </g>
  </svg>
);

export default function AnimationSteffanieClio() {
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

    // Step 1: Show Steffanie (right side) immediately
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

  // Render Steffanie or Clio
  const renderStep = (step: number) => {
    if (step === 1) {
      // Steffanie's message: pinned to the RIGHT with ml-auto
      return (
        <motion.div
          key="steffanie"
          layout
          custom={40}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cardVariants}
          className="
            ml-auto
            bg-white/80 
            backdrop-blur-md
            rounded-sm  shadow-md
            lg:max-w-[250px] md:max-w-[200px] max-w-[120px]
            w-full
            lg:p-3 md:p-2 p-1
            lg:text-sm md:text-[10px] text-[6px]
            text-gray-800
          "
        >
          <div>
            <div className="flex lg:gap-2 md:gap-1 gap-0.5 items-start justify-start">
              <Steffanie />
              <div className="font-semibold text-primary-dark">Steffanie</div>
            </div>
            <div className="font-bold">
              Added <span className="text-primary-dark">to Cart</span>
            </div>
          </div>
        </motion.div>
      );
    } else if (step === 2) {
      // Clio’s message: pinned to the LEFT with mr-auto
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
            bg-white/80 
            backdrop-blur-md
            rounded-sm shadow-md
            lg:max-w-[300px] md:max-w-[200px] max-w-[120px]
            w-auto
            lg:p-3 md:p-2 p-1
            lg:text-sm md:text-[10px] text-[6px]
            text-gray-800 text-left
          "
        >
          {" "}
          <div>
            <div className="flex lg:gap-2 md:gap-1 gap-0.5 items-start justify-start">
              <IoChatbubbleEllipsesOutline className="lg:w-4 md:w-3 w-2 lg:h-4 md:h-3 h-2 text-primary-dark" />
              <div className="font-semibold text-primary-dark">Clio</div>
            </div>
            <div className="mb-2">
              Get free <span className="text-primary-dark">50 points</span> when
              you sign up for the{" "}
              <span className="font-semibold">Rewards Program</span>.
            </div>
            {/* Example button */}
            <motion.button
              className="
              bg-primary-dark border text-white 
              lg:px-2 md:px-1 px-0.5 lg:py-2 md:py-1 py-0.5 rounded-sm 
              lg:text-sm md:text-[10px] text-[6px] font-semibold
            "
            >
              Become a Member
            </motion.button>
          </div>
        </motion.div>
      );
    } else if (step === 3) {
      return (
        <motion.div
          key="user"
          layout
          custom={40}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cardVariants}
          className="ml-auto bg-white/80 backdrop-blur-md rounded-sm shadow-md lg:max-w-[250px] md:max-w-[200px] max-w-[120px] w-full lg:p-3 md:p-2 p-1 lg:text-sm md:text-[10px] text-[6px] text-gray-800"
        >
          <div>
            <div className="flex lg:gap-2 md:gap-1 gap-0.5 items-start justify-start">
              <Steffanie />
              <div className="font-semibold text-primary-dark">Steffanie</div>
            </div>
            <div className="font-bold">
              Browsing <span className="text-primary-dark">Puffer Jacket</span>
            </div>
            {/* <div className="font-bold">{scenario.userText}</div> */}
          </div>
        </motion.div>
      );
    } else if (step === 4) {
      return (
        <motion.div
          key="bot"
          layout
          custom={80}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={cardVariants}
          className="mr-auto bg-white/80 backdrop-blur-md rounded-sm shadow-md lg:max-w-[300px] md:max-w-[200px] max-w-[120px] w-auto lg:p-3 md:p-2 p-1 lg:text-sm md:text-[10px] text-[6px] text-gray-800 text-left"
        >
          <div>
            <div className="flex lg:gap-2 md:gap-1 gap-0.5 items-start justify-start">
              <IoChatbubbleEllipsesOutline className="lg:w-4 md:w-3 w-2 lg:h-4 md:h-3 h-2 text-primary-dark" />
              <div className="font-semibold text-primary-dark">Clio</div>
            </div>
            <div className="mb-2">
              FYI, this Puffer Jacket pairs great with{" "}
              <span className="text-primary-dark">Distressed Jeans</span> and
              Brushed Scarves <span className="font-semibold">Interested?</span>
              .
            </div>
            <div className="flex justify-between">
              <Image
                src="https://storage.googleapis.com/cs-website-assets/clio/clio-video-img1.webp"
                alt=""
                width={30}
                height={30}
                className="lg:w-16 md:w-10 w-6 lg:h-16 md:h-10 h-6 rounded-sm"
              />
              <Image
                src="https://storage.googleapis.com/cs-website-assets/clio/clio-video-img2.webp"
                alt=""
                width={30}
                height={30}
                className="lg:w-16 md:w-10 w-6 lg:h-16 md:h-10 h-6 rounded-sm"
              />
              <Image
                src="https://storage.googleapis.com/cs-website-assets/clio/clio-video-img3.webp"
                alt=""
                width={30}
                height={30}
                className="lg:w-16 md:w-10 w-6 lg:h-16 md:h-10 h-6 rounded-sm"
              />
              <Image
                src="https://storage.googleapis.com/cs-website-assets/clio/clio-video-img4.webp"
                alt=""
                width={30}
                height={30}
                className="lg:w-16 md:w-10 w-6 lg:h-16 md:h-10 h-6 rounded-sm"
              />
            </div>
            {/* <motion.button
              className="
              bg-primary-dark border text-white 
              lg:px-2 md:px-1 px-0.5 lg:py-2 md:py-1 py-0.5 rounded-sm 
              lg:text-sm md:text-[10px] text-[6px] font-semibold
            "
            >
              Become a Member
            </motion.button> */}
            {/* <div className="mb-2">{scenario.botText}</div> */}
          </div>
        </motion.div>
      );
    }
    return null;
  };

  return (
    <div className="w-full lg:max-w-md max-w-sm mx-auto lg:p-4 md:p-2 p-1">
      <div className="lg:w-[400px] md:w-[300px] w-[150px] flex flex-col lg:space-y-2 md:space-y-1 space-y-1 bg-transparent">
        <AnimatePresence>
          {visibleSteps.map((step) => renderStep(step))}
        </AnimatePresence>
      </div>
    </div>
  );
}
