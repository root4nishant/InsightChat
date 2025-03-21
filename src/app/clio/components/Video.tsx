"use client";
import Section from "@/components/custom/reusables/Section";
import React, { useState, useEffect, useRef } from "react";

import Animation from "../animation/Animation";
import AnimationSteffanieClio from "../animation/Animation2";

const VideoWithMessages = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Track intersection ratio
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  // Track if the video is loaded
  const [videoHasLoaded, setVideoHasLoaded] = useState(false);
  // Control animation visibility
  const [showAnimation, setShowAnimation] = useState(false);
  // Optional: track whether it's in view, to set `src` only if visible
  const [isInView, setIsInView] = useState(false);

  // 1) Set up event to track when the video has loaded
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleLoadedData = () => {
      // Optional short delay to ensure video is visibly rendered
      setTimeout(() => {
        setVideoHasLoaded(true);
      }, 500);
    };

    videoElement.addEventListener("loadeddata", handleLoadedData);

    return () => {
      videoElement.removeEventListener("loadeddata", handleLoadedData);
    };
  }, []);

  // 2) Set up IntersectionObserver to track the intersection ratio
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        setIntersectionRatio(entry.intersectionRatio);
      },
      {
        threshold: [0, 0.1, 0.8, 1], // track changes at these ratios
      }
    );

    observer.observe(videoElement);

    return () => {
      observer.unobserve(videoElement);
    };
  }, []);

  // 3) A separate effect that runs any time the ratio or `videoHasLoaded` changes
  useEffect(() => {
    // If the video is at least 80% in the viewport AND it's loaded,
    // then show the animation
    if (intersectionRatio >= 0.8 && videoHasLoaded) {
      setShowAnimation(true);
    }
  }, [intersectionRatio, videoHasLoaded]);

  return (
    <Section>
      <div className="relative h-auto items-start justify-start overflow-hidden rounded-md">
        <video
          ref={videoRef}
          className="w-auto object-cover"
          src={
            isInView
              ? "https://storage.googleapis.com/cs-website-assets/clio/clio-hero-dd.webm"
              : undefined
          }
          autoPlay={isInView}
          loop
          muted
          width={400}
          height={400}
        />

        {showAnimation && (
          <>
            <div className="absolute lg:bottom-12 md:bottom-5 bottom-5 lg:left-5 md:left-3 left-2 z-10">
              <Animation />
            </div>
            <div className="absolute lg:bottom-12 md:bottom-5 bottom-5 lg:right-5 md:right-3 right-2 z-10">
              <AnimationSteffanieClio />
            </div>
          </>
        )}

        {/* Gradient Overlay / Bottom Text */}
        <div className="absolute bottom-0 rounded-md lg:h-60 h-20 w-full bg-gradient-to-t from-black to-transparent text-white flex justify-between">
          <div className="absolute bottom-0 flex justify-between w-full text-[#D6CFB6] lg:py-4 py-2 lg:text-[14px] text-[6px]">
            <div className="text-left flex justify-start w-full lg:ml-8 md:ml-5 ml-3">
              <span>Brandon&apos;s Customer Success Manager</span>
            </div>
            <div className="text-right flex justify-end w-full lg:mr-8 md:mr-5 mr-3">
              <span>Steffanie&apos;s Shopping Assistant</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default VideoWithMessages;
